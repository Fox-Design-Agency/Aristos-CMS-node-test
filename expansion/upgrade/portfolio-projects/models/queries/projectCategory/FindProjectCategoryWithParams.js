const fs = require("fs-extra");
const ProjectCategories = fs.readJSONSync(
  "./expansion/upgrade/portfolio-projects/routes/checkers/portfolioCategoryModelRoutes.json"
).route;
const ProjectCategory = require(ProjectCategories);
/* Aristos Logger Path */
const errorAddEvent = require("../../../../../../important/AristosStuff/AristosLogger/AristosLogger")
  .addError;
/**
 * Finds all the project categories that match the stuff param in the Project Category collection.
 * @param {object} stuff - The object of the stuff to search with.
 * @return {promise} A promise that resolves with the found project categories
 */
module.exports = stuff => {
  return ProjectCategory.find(stuff)
    .populate("author")
    .catch(err => {
      errorAddEvent(err, "project category query error");
    });
};

