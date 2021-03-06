const fs = require("fs-extra");
const ProductCategories = fs.readJSONSync(
  "./expansion/upgrade/products/routes/checkers/productCategoryModelRoutes.json"
).route;
const ProductCategory = require(ProductCategories);
/* Aristos Logger Path */
const errorAddEvent = require("../../../../../../important/AristosStuff/AristosLogger/AristosLogger")
  .addError;
/**
 * Sorts product categories by ids.
 * @param {string} ids - The ids of the records to sort.
 * @return {promise} A promise that resolves with the sorted product categories
 */
module.exports = ids => {
  return sortProductCategories(ids, function() {
    ProductCategory.find({})
      .sort({ sorting: 1 })
      .catch(err => {
        errorAddEvent(err, "product category query error");
      });
  });
}; /// end of exports
// Sort products function
/* rebuild so that products sort in category view use all products id to not mess up ordering */
function sortProductCategories(ids, cb) {
  let count = 0;

  for (let i = 0; i < ids.length; i++) {
    let id = ids[i];
    count++;

    (function(count) {
      ProductCategory.findById(id).then(cat => {
        cat.sorting = count;
        cat.save();

        ++count;
        if (count >= ids.length) {
          cb();
        }
      });
    })(count);
  }
} /* end of sort products function */