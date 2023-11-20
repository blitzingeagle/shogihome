"use strict";

import path from "path";
import { app, protocol, BrowserWindow, session } from "electron";
import {
  getAppState,
  isClosable,
  onClose,
  openRecord,
  sendError,
  setInitialFilePath,
  setup,
} from "@/background/ipc";
import { loadAppSettingOnce, loadWindowSetting, saveWindowSetting } from "@/background/settings";
import { buildWindowSetting } from "@/common/settings/window";
import { getAppLogger, shutdownLoggers } from "@/background/log";
import { quitAll as usiQuitAll } from "@/background/usi";
import { AppState } from "@/common/control/state";
import { validateHTTPRequest } from "./security";
import {
  getPortableExeDir,
  isDevelopment,
  isPortable,
  isPreview,
  isProduction,
  isTest,
} from "@/background/environment";
import { setLanguage, t } from "@/common/i18n";
import { checkUpdates } from "./version/check";

getAppLogger().info(
  "start main process: %s %s %d",
  process.platform,
  process.execPath,
  process.pid,
);
getAppLogger().info("app: %s %s", app.getName(), app.getVersion(), app.getLocale());
getAppLogger().info("process argv: %s", process.argv.join(" "));
if (isPortable()) {
  getAppLogger().info("portable mode: %s", getPortableExeDir());
}

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

setLanguage(loadAppSettingOnce().language);

function createWindow() {
  let setting = loadWindowSetting();

  getAppLogger().info("create BrowserWindow");

  const preloadPath = isProduction() ? "./preload.js" : "../../packed/preload.js";

  // Create the browser window.
  const win = new BrowserWindow({
    width: setting.width,
    height: setting.height,
    fullscreen: setting.fullscreen,
    webPreferences: {
      preload: path.join(__dirname, preloadPath),
      // on development, disable webSecurity to allow mix of "file://" and "http://localhost:5173"
      webSecurity: !isDevelopment(),
      // 対局や棋譜解析の用途では処理の遅延が致命的なのでスロットリングを無効にする。
      backgroundThrottling: false,
    },
  });
  win.setBackgroundColor("#888");
  if (setting.maximized) {
    win.maximize();
  }
  win.on("resized", () => {
    setting = buildWindowSetting(setting, win);
  });
  win.on("close", (event) => {
    if (getAppState() === AppState.CSA_GAME) {
      event.preventDefault();
      sendError(new Error(t.youCanNotCloseAppWhileCSAOnlineGame));
      return;
    }
    if (!isClosable()) {
      event.preventDefault();
      onClose();
      return;
    }
    setting = buildWindowSetting(setting, win);
    saveWindowSetting(setting);
  });

  setup(win);

  if (isDevelopment() || isTest()) {
    // Development
    getAppLogger().info("load dev server URL");
    win
      .loadURL("http://localhost:5173")
      .then(() => {
        if (!process.env.IS_TEST) {
          win.webContents.openDevTools();
        }
      })
      .catch((e) => {
        getAppLogger().error(`failed to load dev server URL: ${e}`);
        throw e;
      });
  } else if (isPreview()) {
    // Preview
    getAppLogger().info("load app URL");
    win.loadFile(path.join(__dirname, "../../index.html")).catch((e) => {
      getAppLogger().error(`failed to load app URL: ${e}`);
      throw e;
    });
  } else {
    // Production
    getAppLogger().info("load app URL");
    win.loadFile(path.join(__dirname, "../index.html")).catch((e) => {
      getAppLogger().error(`failed to load app URL: ${e}`);
      throw e;
    });
  }

  win.once("ready-to-show", () => {
    // レンダラー側の準備ができたら uncaughtException はレンダラーへ送る。
    process.on("uncaughtException", (e, origin) => {
      // ホストの解決ができない場合に uncaughtException が発生する。
      // github.io へのアクセスは更新確認以外に無いので、ここでエラー文言を付け加える。
      if (e instanceof Error && e.message === "getaddrinfo ENOTFOUND sunfish-shogi.github.io") {
        sendError(new Error(`${t.failedToCheckUpdates}: ${e}`));
        return;
      }
      sendError(new Error(`${origin} ${e}`));
    });
    win.show();

    // macOS では起動後に Finder からファイルを開こうとすると既に存在するプロセスに対して open-file イベントが発生する。
    app.on("open-file", (event, path) => {
      getAppLogger().info("on open-file: %s", path);
      event.preventDefault();
      if (win.isMinimized()) {
        win.restore();
      }
      win.focus();
      openRecord(path);
    });

    checkUpdates().catch((e) => {
      sendError(new Error(`${t.failedToCheckUpdates}: ${e}`));
    });
  });
}

app.enableSandbox();

app.once("will-finish-launching", () => {
  getAppLogger().info("on will-finish-launching");

  // macOS の Finder でファイルが開かれた場合には process.argv ではなく open-file イベントからパスを取得する必要がある。
  app.once("open-file", (event, path) => {
    getAppLogger().info("on open-file: %s", path);
    event.preventDefault();
    setInitialFilePath(path);
  });
});

app.on("will-quit", () => {
  getAppLogger().info("on will-quit");
  usiQuitAll();
  // プロセスを終了する前にログファイルの出力を完了する。
  shutdownLoggers();
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  getAppLogger().info("on window-all-closed");
  app.quit();
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on("web-contents-created", (_, contents) => {
  contents.on("will-navigate", (event) => {
    event.preventDefault();
  });
  contents.setWindowOpenHandler(() => {
    return { action: "deny" };
  });
});

async function installElectronDevTools() {
  const installer = await import("electron-devtools-installer");
  await installer.default(installer.VUEJS_DEVTOOLS);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  if (isDevelopment()) {
    getAppLogger().info("install Vue3 Dev Tools");
    // Install Vue DevTools
    installElectronDevTools().catch((e) => {
      getAppLogger().error(`failed to install Vue.js devtools: ${e}`);
      throw e;
    });
  }
  session.defaultSession.webRequest.onBeforeRequest((details, callback) => {
    validateHTTPRequest(details.method, details.url);
    callback({});
  });
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment() || isTest()) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        getAppLogger().info("on graceful-exit message");
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      getAppLogger().info("on SIGTERM");
      app.quit();
    });
  }
}
