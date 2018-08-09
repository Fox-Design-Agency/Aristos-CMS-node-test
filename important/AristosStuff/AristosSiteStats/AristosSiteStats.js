/* config for working with the site stats json */

/*
*
*           Table of Contents:
*
*
*/
const fs = require("fs-extra");
/*
**********************************************************
* after require import
* use like this:
* Logger.info("Stuffs here.")
* Logger.error(err)
* Logger.debug(shouldThisHappen???) <- maybe not like this
**********************************************************
*/
/* create log directory and nessesary files */
/*keep these in the .gitignore so they are not pushed */
fs.ensureDirSync("./important/AristosStuff/AristosSiteStats/logs");
fs.ensureFileSync("./important/AristosStuff/AristosSiteStats/logs/siteStats.json");