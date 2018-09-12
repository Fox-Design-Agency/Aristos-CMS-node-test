const fs = require("fs-extra");
const ProductCategories = fs.readJSONSync(
  "./expansion/upgrade/products/routes/checkers/productCategoryModelRoutes.json"
).route;
const ProductCategory = require(ProductCategories);
/* Aristos Logger Path */
const errorAddEvent = require("../../../../../../important/AristosStuff/AristosLogger/AristosLogger")
  .addError;
/**
 * Finds all the product categories in the Product Categories collection.
 * @param {object} stuff - The object of the stuff to find.
 * @return {promise} A promise that resolves with the product category that matches the stuff
 */
module.exports = stuff => {
  return ProductCategory.find(stuff).catch(err => {
    errorAddEvent(err, "product category query error");
  });
};