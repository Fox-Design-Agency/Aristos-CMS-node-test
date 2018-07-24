const clearInfoLog = require("./important/AristosStuff/AristosLogger/AristosLogger")
  .clearInfoLog;
const clearErrorLog = require("./important/AristosStuff/AristosLogger/AristosLogger")
  .clearErrorLog;
const clearDebugLog = require("./important/AristosStuff/AristosLogger/AristosLogger")
  .clearDebugLog;
const clearSomeOldInfo = require("./important/AristosStuff/AristosLogger/AristosLogger")
  .clearSomeOldInfoLog;
const clearSomeNewInfo = require("./important/AristosStuff/AristosLogger/AristosLogger")
  .clearSomeNewInfoLog;

/* add events */
const addInfoLog = require("./important/AristosStuff/AristosLogger/AristosLogger")
  .addInfo;
const addErrorLog = require("./important/AristosStuff/AristosLogger/AristosLogger")
  .addError;
const addDebugLog = require("./important/AristosStuff/AristosLogger/AristosLogger")
  .addDebug;
/* log testing */
const logInfo = require("./important/AristosStuff/AristosLogger/AristosLogger")
  .logInfoItems;
const logError = require("./important/AristosStuff/AristosLogger/AristosLogger")
  .logErrorItems;
const logDebug = require("./important/AristosStuff/AristosLogger/AristosLogger")
  .logDebugItems;
/* reads */
const readInfo = require("./important/AristosStuff/AristosLogger/AristosLogger")
  .readAllInfo;
const readSomeInfo = require("./important/AristosStuff/AristosLogger/AristosLogger")
  .readSomeInfo;
clearInfoLog();
clearDebugLog();
clearErrorLog();
// addInfoLog("The Actual NEwer new");
// addErrorLog("some stuffs to add");
// addDebugLog("some stuffs to add");

// logInfo();
// logError()
// logDebug()

// console.log(readInfo());
// console.log(readSomeInfo(1));

// clearSomeOldInfo(1)
// clearSomeNewInfo(2)
