const fs = require("fs-extra");
const ProductCategories = fs.readJSONSync(
  "./expansion/upgrade/products/routes/checkers/productCategoryModelRoutes.json"
).route;
const ProductCategory = require(ProductCategories);
/* Aristos Logger Path */
const errorAddEvent = require("../../../../../../important/AristosStuff/AristosLogger/AristosLogger")
  .addError;
/**
 * Counts the product categories in the Product Category collection.
 * @return {promise} A promise that resolves with the count
 */
module.exports = () => {
  return ProductCategory.estimatedDocumentCount({})
    .then(c => {
      return c;
    })
    .catch(err => {
      errorAddEvent(err, "product category query error");
    });
};