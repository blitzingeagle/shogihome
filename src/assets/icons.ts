import preloadImage from "./preload";

export enum Icon {
  BUSSY = "bussy",
  ERROR = "error",
  INFO = "info",
  GAME = "game",
  STOP = "stop",
  RESIGN = "resign",
  RESEARCH = "research",
  END = "end",
  EDIT = "edit",
  CHECK = "check",
  SWAP = "swap",
  SETTINGS = "settings",
  ENGINE_SETTINGS = "engineSettings",
  FLIP = "flip",
  PASTE = "paste",
  COPY = "copy",
  DELETE = "delete",
  COMMENT = "comment",
  BRAIN = "brain",
  CHART = "chart",
  ARROW_DROP = "arrowDrop",
  FIRST = "first",
  BACK = "back",
  NEXT = "next",
  LAST = "last",
}

export const iconSourceMap = {
  [Icon.BUSSY]: "icon/hourglass_empty_white_24dp.svg",
  [Icon.ERROR]: "icon/error_outline_white_24dp.svg",
  [Icon.INFO]: "icon/info_white_24dp.svg",
  [Icon.GAME]: "icon/sports_esports_white_24dp.svg",
  [Icon.STOP]: "icon/block_white_24dp.svg",
  [Icon.RESIGN]: "icon/flag_white_24dp.svg",
  [Icon.RESEARCH]: "icon/science_white_24dp.svg",
  [Icon.END]: "icon/do_disturb_on_white_24dp.svg",
  [Icon.EDIT]: "icon/app_registration_white_24dp.svg",
  [Icon.CHECK]: "icon/check_circle_white_24dp.svg",
  [Icon.SWAP]: "icon/swap_vert_white_24dp.svg",
  [Icon.SETTINGS]: "icon/settings_white_24dp.svg",
  [Icon.ENGINE_SETTINGS]: "icon/settings_input_component_white_24dp.svg",
  [Icon.FLIP]: "icon/flip_camera_android_white_24dp.svg",
  [Icon.PASTE]: "icon/content_paste_white_24dp.svg",
  [Icon.COPY]: "icon/content_copy_white_24dp.svg",
  [Icon.DELETE]: "icon/backspace_white_24dp.svg",
  [Icon.COMMENT]: "icon/edit_note_white_24dp.svg",
  [Icon.BRAIN]: "icon/psychology_white_24dp.svg",
  [Icon.CHART]: "icon/show_chart_white_24dp.svg",
  [Icon.ARROW_DROP]: "icon/arrow_drop_down_white_24dp.svg",
  [Icon.FIRST]: "icon/first_page_white_24dp.svg",
  [Icon.BACK]: "icon/chevron_left_white_24dp.svg",
  [Icon.NEXT]: "icon/chevron_right_white_24dp.svg",
  [Icon.LAST]: "icon/last_page_white_24dp.svg",
};

Object.values(iconSourceMap).forEach((source) => {
  preloadImage(source);
});
