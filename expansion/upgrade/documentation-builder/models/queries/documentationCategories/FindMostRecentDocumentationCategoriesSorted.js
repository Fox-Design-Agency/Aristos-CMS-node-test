const fs = require("fs-extra");
const DocumentationCategory = fs.readJSONSync(
  "./expansion/upgrade/documentation-builder/routes/checkers/documentationCategoriesModelRoutes.json"
).route;
const DocumentationCategories = require(DocumentationCategory);
/* Aristos Logger Path */
const errorAddEvent = require("../../../../../../important/AristosStuff/AristosLogger/AristosLogger")
  .addError;
/**
 * Finds most recent documentation ctaegory in the Documentation category collection.
 * @return {promise} A promise that resolves with the most recent documentation category
 */
module.exports = () => {
  return DocumentationCategories.find({})
    .sort({ _id: 1 })
    .limit(1)
    .catch(err => {
      errorAddEvent(err, "documentation category query error");
    });
};