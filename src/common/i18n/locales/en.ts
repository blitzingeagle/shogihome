import { ordinal } from "@/common/helpers/string";
import { Texts } from "../text_template";

export const en: Texts = {
  electronShogi: "Electron Shogi",
  clear: "Clear",
  open: "Open",
  saveOverwrite: "Overwrite",
  newRecord: "New Record",
  openRecord: "Open Record",
  saveRecord: "Save Record",
  saveRecordAs: "Save Record As",
  openAutoSavingDirectory: "Open Auto-Saving Directory",
  exportPositionImage: "Export Position Image",
  positionImage: "Position Image",
  batchConversion: "Batch Conversion",
  recordFileBatchConversion: "Record File Batch Conversion",
  close: "Close",
  quit: "Quit",
  editing: "Edit",
  copyAsKIF: "Copy (KIF)",
  copyAsKI2: "Copy (KI2)",
  copyAsCSA: "Copy (CSA)",
  copyAsUSI: "Copy (USI)",
  copyAsSFEN: "Copy (SFEN)",
  copyAsJKF: "Copy (JKF)",
  paste: "Paste",
  copyRecord: "Copy Record",
  asKIF: "as KIF",
  asKI2: "as KI2",
  asCSA: "as CSA",
  asUSIUntilCurrentMove: "as USI (until current move)",
  asUSIAll: "as USI (all)",
  asJSONKifuFormat: "as JSON Kifu Format",
  copyPositionAsSFEN: "Copy Position (as SFEN)",
  pasteRecordOrPosition: "Paste Record/Position",
  appendSpecialMove: "Append Special Move",
  deleteMoves: "Delete Current Move and Following Moves",
  view: "View",
  toggleFullScreen: "Toggle Full Screen",
  defaultFontSize: "Default Font Size",
  largerFontSize: "Larger Font Size",
  smallerFontSize: "Smaller Font Size",
  settings: "Settings",
  config: "Config",
  debug: "Debug",
  toggleDevTools: "Toggle Developer Tools",
  openFolder: "Open Folder",
  notificationTest: "Notification Test",
  thisIsTestNotification: "This is test notification.",
  app: "App",
  log: "Log",
  backup: "Backup",
  cache: "Cache",
  help: "Help",
  openWebSite: "Open Web Site",
  howToUse: "How to Use",
  checkForUpdates: "Check for Updates",
  inputs: "Inputs",
  outputs: "Outputs",
  format: "Format",
  formats: "Formats",
  subdirectories: "Subdirectories",
  separately: "Separately",
  merge: "Merge",
  createSubdirectories: "Create Subdirectories",
  nameConflictAction: "Name Conflict Action",
  numberSuffix: "Number Suffix",
  skip: "Skip",
  convert: "Convert",
  openLogFile: "Open Log File",
  succeeded: "Succeeded",
  failed: "Failed",
  skipped: "Skipped",
  game: "Game",
  player: "Player",
  selectFromHistory: "Select from History",
  noHistory: "Empty",
  saveHistory: "Save History",
  version: "Version",
  gameProgress: "Game Progress",
  allGamesCompleted: "All Games Completed",
  gameEnded: "Game Ended",
  offlineGame: "Offline Game",
  csaOnlineGame: "CSA Online Game",
  csaProtocolOnlineGame: "Online Game (CSA Protocol)",
  csaProtocolV121: "CSA Protocol 1.2.1 Standard",
  csaProtocolV121WithPVComment: "CSA Protocol 1.2.1 with PV Comment",
  hostToConnect: "Hostname",
  portNumber: "Port",
  password: "Password",
  showPassword: "Show Password",
  logout: "Logout",
  displayGameResults: "Display Results",
  interrupt: "Stop",
  stopGame: "Stop",
  resign: "Resign",
  draw: "Draw",
  impass: "Impass",
  repetitionDraw: "Repetition Draw",
  mate: "Mate",
  noMate: "No Mate",
  mateSearch: "Mate Search",
  startMateSearch: "Start Mate Search",
  stopMateSearch: "Stop Mate Search",
  noMateFound: "No mate.",
  timeout: "Timeout",
  foulWin: "Foul Win",
  foulLose: "Foul Lose",
  enteringOfKing: "Entering of King",
  winByDefault: "Win by Default",
  loseByDefault: "Lose by Default",
  winByDeclaration: "Win by Declaration",
  declareWinning: "Declare Winning",
  research: "Research",
  startResearch: "Start Research",
  endResearch: "End Research",
  recordAnalysis: "Record Analysis",
  analysis: "Analyze",
  analyze: "Analyze",
  stopAnalysis: "Stop Analysis",
  setupPosition: "Setup Position",
  startPositionSetup: "Start Position Setup",
  completePositionSetup: "Complete Setup",
  changeTurn: "Change Turn",
  initializePosition: "Initialize Position",
  appSettings: "Preferences",
  language: "Languages",
  theme: "Theme",
  standard: "Standard",
  green: "Green",
  cherryBlossom: "Cherry Blossom",
  customImage: "Custom Image",
  autumn: "Autumn",
  snow: "Snow",
  darkGreen: "Dark Green",
  dark: "Dark",
  piece: "Piece",
  singleKanjiPiece: "Single Kanji",
  singleKanjiGothicPiece: "Single Kanji (Gothic)",
  singleKanjiDarkPiece: "Single Kanji (Dark)",
  singleKanjiGothicDarkPiece: "Single Kanji (Gothic, Dark)",
  imageHasMarginsRemoveToDisplayLarger: "The image has margins (remove it to display larger)",
  backgroundImage: "Background Image",
  board: "Board Image",
  pieceStand: "Piece Stand",
  lightWoodyTexture: "Woody Texture (Light)",
  warmWoodTexture: "Woody Texture (Warm)",
  regin: "Regin",
  transparent: "Transparent",
  boardOpacity: "Board Opacity",
  pieceStandOpacity: "Piece Stand Opacity",
  recordOpacity: "Record Opacity",
  displayFileAndRank: "Display File & Rank",
  displayLeftControls: "Display Left Controls",
  displayRightControls: "Display Right Controls",
  tabViewStyle: "Tab View Style",
  oneColumn: "1 Column",
  twoColumns: "2 Columns",
  sounds: "Sounds",
  pieceLoudness: "Piece Loudness",
  clockLoudness: "Clock Loudness",
  clockPitch: "Clock Pitch",
  clockSoundTarget: "Clock Sound Target",
  anyTurn: "Any",
  onlyHumanTurn: "Human",
  defaultRecordFileFormat: "Default Record Format",
  textEncoding: "Text Encoding",
  strict: "Strict",
  autoDetect: "Auto Detect",
  newlineCharacter: "Newline Character",
  old90sMac: "90's Mac",
  autoSavingDirectory: "Auto-Saving Directory",
  select: "Select",
  positionOfUSIOutput: "Position of USI Output",
  movesOfUSIOutput: "Moves of USI Output",
  onlySFEN: "Only SFEN",
  usiProtocol: "USI Protocol",
  translateOptionName: "Translate Option Name",
  functionalOnJapaneseOnly: "Functional on Japanese Only",
  maxStartupTime: "Max Startup Time",
  forDevelopers: "For Developers",
  enableAppLog: "Enable App Log",
  enableUSILog: "Enable USI Log",
  enableCSALog: "Enable CSA Log",
  logLevel: "Log Level",
  engineSettings: "Engine Settings",
  flipBoard: "Flip Board",
  file: "File",
  recordFile: "Record File",
  executableFile: "Executable",
  imageFile: "Image",
  unsaved: "Unsaved",
  remove: "Remove",
  deleteMove: "Delete Move",
  recordProperties: "Record Properties",
  comments: "Comments",
  commentsAndBookmarks: "Comments & Bookmarks",
  branches: "Branches",
  bookmark: "Bookmark",
  bookmarkList: "Bookmarks",
  useBookmarkAsHeader: "Use Bookmark as Header",
  moveComments: "Move Comments",
  searchLog: "Search Log",
  pv: "PV",
  mateShort: "M",
  displayPVShort: "Play",
  evaluation: "Evaluation",
  eval: "Eval",
  estimatedWinRate: "Estimated Win Rate",
  evaluationAndEstimatedWinRate: "Evaluation & Estimated Win Rate",
  swapEachTurnChange: "Swap Each Turn Change",
  alwaysSenteIsPositive: "Always Sente is Positive",
  signOfEvaluation: "Sign of Evaluation",
  winRateCoefficient: "Win Rate Coefficient",
  hideTabView: "Hide",
  expandTabView: "Expand Tab View",
  sente: "Sente",
  senteOrShitate: "Sente (Shitate)",
  shitate: "Shitate",
  gote: "Gote",
  goteOrUwate: "Gote (Uwate)",
  uwate: "Uwate",
  swapSenteGote: "Swap Sente/Gote",
  currentPosition: "Current Position",
  enableEngineTimeout: "Enable Engine Timeout",
  setDifferentTimeForGote: "Set different time for Gote",
  nextTurn: "Next Move",
  elapsedTime: "Elapsed Time",
  elapsed: "Elapsed",
  rank: "Rank",
  depth: "Depth",
  searchEngine: "Search Engine",
  ponder: "Ponder",
  numberOfThreads: "Threads",
  multiPV: "Multi PV",
  startPosition: "Position",
  maxMoves: "Max Moves",
  gameRepetition: "Repeat",
  autoRelogin: "Auto Re-Login",
  swapTurnWhenGameRepetition: "Swap Turns When Repeat",
  outputComments: "Output Comments",
  saveRecordAutomatically: "Save Record Automatically",
  adjustBoardToHumanPlayer: "Adjust Board to Human Player",
  adjustBoardAutomatically: "Adjust Board Automatically",
  startGame: "Start Game",
  cancelGame: "Cancel Game",
  allottedTime: "Allotted Time",
  byoyomi: "Byoyomi",
  increments: "Increments",
  startEndCriteria: "Start/End Criteria",
  endCriteria1Move: "End Criteria for 1 Move",
  outputSettings: "Output Settings",
  noOutputs: "No Outputs",
  insertCommentToTop: "Insert to Top",
  appendCommentToBottom: "Append to Bottom",
  insertToComment: "Ins. to Comment",
  insertToRecord: "Ins. to Record",
  overwrite: "Overwrite",
  fromPrefix: "from",
  fromSuffix: "",
  toPrefix: "to",
  toSuffix: "",
  plyPrefix: "",
  plySuffix: "th move",
  hoursSuffix: "h",
  minutesSuffix: "min",
  secondsSuffix: "sec",
  engineManagement: "Engine Management",
  engineName: "Engine Name",
  author: "Author",
  enginePath: "Engine Path",
  openDirectory: "Open Directory",
  displayName: "Display Name",
  invoke: "Invoke",
  resetToEngineDefaultValues: "Reset to default values",
  defaultValue: "Default Value",
  noEngineRegistered: "No engine",
  duplicate: "Copy",
  add: "Add",
  recommended: "Recommended",
  import: "Import",
  saveAndClose: "Save & Close",
  save: "Save",
  saveAs: "Save As",
  history: "History",
  clearHistory: "Clear History",
  userFile: "User File",
  automaticBackup: "Automatic Backup",
  restore: "Restore",
  cancel: "Cancel",
  back: "Back",
  name: "Name",
  prediction: "Prediction",
  best: "Best",
  nodes: "Nodes",
  hashUsage: "Hash Usage",
  stop: "Stop",
  resume: "Resume",
  nonHandicap: "Non-Handicap",
  lanceHandicap: "Lance Handicap",
  rightLanceHandicap: "Right Lance Handicap",
  bishopHandicap: "Bishop Handicap",
  rookHandicap: "Rook Handicap",
  rookLanceHandicap: "Rook-Lance Handicap",
  twoPiecesHandicap: "2 Pieces Handicap",
  fourPiecesHandicap: "4 Pieces Handicap",
  sixPiecesHandicap: "6 Pieces Handicap",
  eightPiecesHandicap: "8 Pieces Handicap",
  tenPiecesHandicap: "10 Pieces Handicap",
  tsumeShogi: "Tsume Shogi",
  doubleKingTsumeShogi: "2-Kings Tsume Shogi",
  startDateTime: "Start",
  endDateTime: "End",
  gameDate: "Date",
  tournament: "Tournament",
  strategy: "Strategy",
  gameTitle: "Title",
  timeLimit: "Time Limit",
  place: "Place",
  postedOn: "Posted On",
  note: "Note",
  senteShortName: "Sente(short)",
  goteShortName: "Gote(short)",
  opusNo: "Opus No.",
  opusName: "Opus Name",
  publishedBy: "Published By",
  publishedOn: "Published On",
  source: "Source",
  numberOfMoves: "Number of Moves",
  integrity: "Integrity",
  recordCategory: "Category",
  award: "Award",
  filterByOptionName: "Filter by Option Name",
  filterByEngineName: "Filter by Engine Name",
  bookStyle: "Book Style",
  gameStyle: "Game Style",
  playerName: "Player Name",
  typeface: "Typeface",
  handLabel: "Hand Label",
  header: "Header",
  characterAdjustment: "Character Adjustment",
  vertical: "Vertical",
  size: "Size",
  none: "None",
  bgCover: "Cover",
  bgContain: "Contain",
  bgTile: "Tile",
  inaccuracy: "Inaccuracy",
  dubious: "Dubious",
  mistake: "Mistake",
  blunder: "Blunder",
  inaccuracyThreshold: "Inaccuracy Threshold",
  dubiousThreshold: "Dubious Threshold",
  mistakeThreshold: "Mistake Threshold",
  blunderThreshold: "Blunder Threshold",
  gothic: "Gothic",
  mincho: "Mincho",
  typeCustomTitleHere: "Type custom title here",
  displayEmptyElements: "Display Empty Elements",
  waitingForNewGame: "Waiting for new game.",
  insertedComment: "Inserted comment.",
  conversionCompleted: "Conversion completed.",
  tryingToConnectAndLoginToCSAServer: "Trying to connect and login to CSA server.",
  inBrowserLogsOutputToConsoleAndIgnoreThisSetting:
    "*In web browser version, it will output logs to console and ignore this setting.",
  shouldRestartToApplyLogSettings: "*You should restart this app to apply log settings.",
  canOpenLogDirectoryFromMenu:
    '*You can open log directory from "Debug" - "Open Log Directory" menu.',
  hasNoOldLogCleanUpFeature: "*This app has no clean-up feature. Please remove old logs manually.",
  processingPleaseWait: "Processing, please wait.",
  importingFollowingRecordOrPosition: "Importing the following record(or position).",
  supportsKIF_KI2_CSA_USI_JKF: "*Supports KIF, KI2, CSA, USI, and JKF.",
  plesePasteRecordIntoTextArea: "*Please paste record data into the text area.",
  desktopVersionPastesAutomatically:
    "*In desktop version, it will paste automatically from clipboard.",
  someLogsDisabled: "Some log settings are disabled.",
  logsRecommendedForCSAProtocol: "Log settings are recommended for CSA protocol.",
  pleaseEnableLogsAndRestart: "Please enable log settings and restart this app.",
  notSendPVOnStandardCSAProtocol: "Client do not send PV on standard CSA protocol.",
  csaProtocolSendPlaintextPassword: "On CSA protocol, client send plaintext password.",
  passwordWillSavedPlaintextBecauseOSSideEncryptionNotAvailable:
    "Password will saved as plaintext because OS side encryption is not available.",
  pleaseUncheckSaveHistoryIfNotWantSave: "Please uncheck Save History, if you don't want to save.",
  csaProtocolSendPlaintextPasswordRegardlessOfHistory:
    "On CSA protocol, client send plaintext password regardless of history.",
  areYouSureWantToQuitGames: "Are you sure you want to quit games?",
  areYouSureWantToRequestQuit:
    "You have possibility to be loser. Are you sure you want to request quit?",
  areYouSureWantToClearRecord: "Are you sure you want to clear record?",
  areYouSureWantToDiscardPosition: "Are you sure you want to discard the position?",
  areYouSureWantToOpenFileInsteadOfCurrentRecord:
    "Are you sure you want to open the file instead of current record?",
  areYouSureWantToClearHistory: "Are you sure you want to clear history?",
  youCanNotCloseAppWhileCSAOnlineGame: "You can not close app while CSA online game.",
  fileExtensionNotSupported: "File extension is not supported.",
  errorOccuredWhileDisconnectingFromCSAServer:
    "An error occured while disconnecting from CSA server.",
  failedToConnectToCSAServer: "Failed to connect to CSA server.",
  errorOccuredWhileLogoutFromCSAServer: "An error occured while logout from CSA server.",
  disconnectedFromCSAServer: "Disconnected from CSA server.",
  csaServerLoginDenied: "CSA server login denied.",
  thisFeatureNotAvailableOnWebApp: "This feature is not available on web app.",
  failedToStartNewGame: "Failed to start new game.",
  errorOccuredWhileEndingGame: "An error occured while ending game.",
  failedToSendGoCommand: "Failed to send go-command.",
  failedToSendPonderCommand: "Failed to send ponder-command.",
  failedToSendStopCommand: "Failed to send stop-command.",
  failedToShutdownEngines: "Failed to shutdown engines.",
  failedToCheckUpdates: "Failed to check updates.",
  failedToSaveRecord: "Failed to save record.",
  failedToParseSFEN: "Failed to parse SFEN.",
  failedToDetectRecordFormat: "Failed to detect record format.",
  unknownFileExtension: "Unknown file extension.",
  emptyRecordInput: "Empty record input.",
  invalidPieceName: "Invalid piece name",
  invalidTurn: "Invalid turn",
  invalidMove: "Invalid move",
  invalidMoveNumber: "Invalid move number",
  invalidDestination: "Invalid destination",
  pieceNotExists: "Piece not exists",
  invalidLine: "Invalid line",
  invalidHandicap: "Invalid handicap",
  invalidBoard: "Invalid board",
  invalidHandPiece: "Invalid hand piece",
  invalidUSI: "Invalid USI",
  backgroundImageFileNotSelected: "Background image file is not selected.",
  pieceImageFileNotSelected: "Piece image File is not selected.",
  boardImageFileNotSelected: "Board image file is not selected.",
  pieceStandImageFileNotSelected: "Piece stand image file is not selected.",
  pieceVolumeMustBe0To100Percent: "Piece volume must be 0% to 100%.",
  clockVolumeMustBe0To100Percent: "Clock volume must be 0% to 100%.",
  clockPitchMustBe220To880Hz: "Clock pitch must be 220Hz to 880Hz.",
  engineTimeoutMustBe1To300Seconds: "Engine timeout must be 1 to 300 seconds.",
  coefficientInSigmoidMustBeGreaterThan0: "Coefficient in sigmoid must be greater than 0.",
  inaccuracyThresholdMustBe1To100Percent: "Inaccuracy must be 1% to 100%.",
  dubiousThresholdMustBe1To100Percent: "Dubious threshold must be 1% to 100%.",
  mistakeThresholdMustBe1To100Percent: "Mistake threshold must be 1% to 100%.",
  blunderThresholdMustBe1To100Percent: "Blunder threshold must be 1% to 100%.",
  recordSavedWithGarbledCharacters: "The record has saved with some garbled characters.",
  pleaseConsiderToUseKIFU: "Please consider to use KIFU(UTF-8).",
  youCanChangeDefaultRecordFileFormatFromAppSettings:
    "You can change default record file format from App Settings.",
  inaccuracyThresholdMustBeLessThanDubiousThreshold:
    "Inaccuracy threshold must be less than dubious threshold.",
  dubiousThresholdMustBeLessThanMistakeThreshold:
    "Dubious threshold must be less than mistake threshold.",
  mistakeThresholdMustBeLessThanBlunderThreshold:
    "Mistake threshold must be less than blunder threshold.",
  thisEngineNotSupportsMateSearch: "This engine does not support mate search.",
  pleaseEndActiveFeaturesBeforeOpenRecord: "Please end active features before open record.",
  bothTimeLimitAndByoyomiAreNotSet: "Both time limit and byoyomi are not set.",
  canNotUseByoyomiWithFischer: "You can not use Byoyomi with Fischer.",
  protocolVersionNotSelected: "Protocol version is not selected.",
  hostNameIsEmpty: "Host name is empty.",
  invalidPortNumber: "Invalid port number.",
  idIsEmpty: "ID is empty.",
  engineNotSelected: "Engine is not selected.",
  forExportingConversionLogPleaseEnableAppLogsAndSetLogLevelDebugAndRestart:
    "For exporting conversion log, please enable app logs, set log level to DEBUG and restart this app.",
  sourceDirectoryNotSpecified: "Source directory is not specified.",
  sourceFormatsNotSpecified: "Source formats are not specified.",
  destinationDirectoryNotSpecified: "Destination directory is not specified.",
  destinationFileNotSpecified: "Destination file is not specified.",
  totalNumber: (n: number) => `Total: ${n}`,
  number: (n: number) => "" + n,
  tryToReloginToCSAServerNSecondsLater: (n) => `Try to relogin to CSA server ${n} seconds later.`,
  mateInNPlyDoYouWantToDisplay: (n) => `Mate in ${n} ply. Do you want to display?`,
  insertedNMovesToRecord: (n: number) => `Inserted ${n} moves to the record.`,
  errorsOccurred: (n) => (n >= 2 ? `${n} errors have occurred.` : `${n} error has occurred.`),
  between: (a, b) => `between ${a} and ${b}`,
  addNthEngine: (n) => `Add ${ordinal(n)} engine`,
  copyOf: (name) => `${name} (copy)`,
  keepLatest: (n) => `keep latest ${n}`,
  followingDataNotSavedBecauseNotSupporetedBy: (fileFormat: string) =>
    `Following data not saved because not supporeted by "${fileFormat}".`,
  areYouSureWantToDeleteFollowingMove: (n) =>
    `Are you sure you want to delete ${n}th move and the following move?`,
  failedToOpenDirectory: (path: string) => `Failed to open directory of the file: ${path}`,
  unexpectedEventSenderPleaseReport(sender) {
    return `Unexpected event sender. Please report this error message to developer. [${sender}]`;
  },
  unexpectedHTTPMethodPleaseReport(method) {
    return `Unexpected HTTP method. Please report this error message to developer. [${method}]`;
  },
  unexpectedRequestURLPleaseReport(url) {
    return `Unexpected request URL. Please report this error message to developer. [${url}]`;
  },
  noResponseFromEnginePleaseExtendTimeout(seconds) {
    return `No response from engine while ${seconds} seconds. Please extend timeout at app settings, if your engine is slow.`;
  },
  stableVersionReleased(version: string) {
    return `Stable version ${version} released!`;
  },
  latestVersionReleased(version: string) {
    return `Latest version ${version} released!`;
  },
};
