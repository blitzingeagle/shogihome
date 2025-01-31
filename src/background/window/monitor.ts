import { BrowserWindow } from "electron";
import { createAuxiliaryWindow } from "./auxiliary";

let win: BrowserWindow | null = null;

export function createMonitorWindow(parent: BrowserWindow) {
  if (win) {
    win.focus();
    return;
  }
  win = createAuxiliaryWindow("monitor", {}, parent, () => {
    win = null;
  });
}
