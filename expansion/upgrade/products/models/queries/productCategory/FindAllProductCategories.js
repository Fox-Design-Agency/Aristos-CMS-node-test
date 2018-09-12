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
 * @return {promise} A promise that resolves with all the product category
 */
module.exports = () => {
  return ProductCategory.find({}).catch(err => {
    errorAddEvent(err, "product category query error");
  });
};