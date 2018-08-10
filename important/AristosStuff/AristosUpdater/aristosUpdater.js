const request = require("request");
const fs = require("fs-extra");

const addUpdateInfos = require("../AristosLogger/AristosLogger").addUpdate;
/*
* core Update Function
*/
let coreUpdate = () => {
  // request.get(
  //   "https://b5tx3g61ie.execute-api.us-east-2.amazonaws.com/default/AristosBasicUpdater",

  //   function(error, response, body) {
  //     if (error) {
  //       req.flash("error_msg", "There was an error with the Update!");
  //       //log error
  //       res.redirect("back");
  //       return console.error("upload failed:", error);
  //     }

  //     const content = JSON.parse(body);
  //     content.forEach(stuff => {
  //       fs.outputFile(stuff.name, stuff.content);
  //     });
  //   }
  // );
  // addUpdateInfos("some version #", "core update")
  // req.flash("success_msg", "System Updated!");
  console.log("core works");
}; /* end of core update function */
/*
* expansion Update Function
*/
let expansionUpdate = () => {
  addUpdateInfos("some version #", "expansion update")
  console.log("expansion works");
}; /* end of expansion update function */

/*
* theme Update Function
*/
let themeUpdate = () => {
  addUpdateInfos("some version #", "theme update")
  console.log("theme works");
}; /* end of theme update function */

/* Exports */
module.exports = {
  coreUpdate,
  expansionUpdate,
  themeUpdate
};
