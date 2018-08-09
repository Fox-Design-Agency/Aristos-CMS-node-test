const ProjectCategory = require("../../projectCategory");
/* Aristos Logger Path */
const errorAddEvent = require("../../../../../../important/AristosStuff/AristosLogger/AristosLogger")
  .addError;
/**
 * Finds all the sorted project categories in the Project Category collection.
 * @return {promise} A promise that resolves with all the project categories
 */
module.exports = () => {
  return ProjectCategory.find({})
    .sort({ sorting: 1 })
    .catch(err => {
      errorAddEvent(err, "project category query error");
    });
};
