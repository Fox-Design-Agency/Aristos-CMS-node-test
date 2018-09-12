const fs = require("fs-extra");
const DocumentationCategory = fs.readJSONSync(
  "./expansion/upgrade/documentation-builder/routes/checkers/documentationCategoriesModelRoutes.json"
).route;
const DocumentationCategories = require(DocumentationCategory);
/* Aristos Logger Path */
const errorAddEvent = require("../../../../../../important/AristosStuff/AristosLogger/AristosLogger")
  .addError;
/**
 * Finds all the documentationcategories that match the stuff param from the Documentation Category collection.
 * @param {object} stuff - The object containing the stuff to find.
 * @return {promise} A promise that resolves with all the documentation categories that matche the stuff param
 */
module.exports = stuff => {
  return DocumentationCategories.find(stuff).catch(err => {
    errorAddEvent(err, "documentation category query error");
  });
};