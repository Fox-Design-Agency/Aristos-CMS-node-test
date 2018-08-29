const fs = require("fs-extra");
const Medias = fs.readJSONSync(
  "./important/admin/routes/checkers/media/MediaModelRoutes.json"
).route;
const Media = require(Medias);
/* Aristos Logger Path */
const addErrorEvent = require("../../../../AristosStuff/AristosLogger/AristosLogger")
  .addError;

/**
 * Edits a single media in the Media collection
 * @param {string} _id - The ID of the media to edit.
 * @param {object} mediaProps - An object with ??
 * @return {promise} A promise that resolves when the media is edited
 */
module.exports = (_id, mediaProps) => {
  return Media.findByIdAndUpdate({ _id }, mediaProps).catch(err => {
    addErrorEvent(err, "image media query error");
  });
};
