const fs = require("fs-extra");
const ProductCategories = fs.readJSONSync(
  "./expansion/upgrade/products/routes/checkers/productCategoryModelRoutes.json"
).route;
const ProductCategory = require(ProductCategories);
/* Aristos Logger Path */
const errorAddEvent = require("../../../../../../important/AristosStuff/AristosLogger/AristosLogger")
  .addError;
/**
 * Finds a single product category in the Product Category collection.
 * @param {objectID} _id - The ID of the record to find.
 * @return {promise} A promise that resolves with the product category that matches the id
 */
module.exports = _id => {
  return ProductCategory.findById(_id).catch(err => {
    errorAddEvent(err, "product category query error");
  });
};