const fs = require("fs-extra");
const DocumentationCategory = fs.readJSONSync(
  "./expansion/upgrade/documentation-builder/routes/checkers/documentationCategoriesModelRoutes.json"
).route;
const DocumentationCategories = require(DocumentationCategory);
/* Aristos Logger Path */
const errorAddEvent = require("../../../../../../important/AristosStuff/AristosLogger/AristosLogger")
  .addError;
/**
 * Creates a single documentation category in the Documentation Category collection.
 * @param {object} docCatsProps - Object containing title, slug, description, keywords, author
 * @return {promise} A promise that resolves with the documentation category that was created
 */
module.exports = docCatsProps => {
  const documentationCat = new DocumentationCategories(docCatsProps);
  return documentationCat.save().catch(err => {
    errorAddEvent(err, "documentation category query error");
  });
};