const fs = require("fs-extra");
const pluginChecker = require("../../../../plugins");
module.exports = {
  async theFunction() {
    await pluginChecker.then(plugin => {
      plugin.forEach(theThings => {
        if (theThings.switch === "productsSwitch") {
          if (theThings.switchRoutes === "true") {
            fs.writeJson(
              "./expansion/upgrade/products/routes/checkers/productRoutes.json",
              {
                route: `../../plugins/${
                  theThings.folder
                }/routes/products/admin_products.js`,
                addView: `../../../plugins/${
                  theThings.folder
                }/viewAdds/products/productsAdd`,
                editView: `../../../plugins/${
                  theThings.folder
                }/viewAdds/products/productsEdit`
              }
            );
          } else {
            fs.pathExists(
              "./expansion/upgrade/products/routes/checkers/productRoutes.json",
              (err, exists) => {
                if (!exists) {
                  fs.writeJson(
                    "./expansion/upgrade/products/routes/checkers/productRoutes.json",
                    {
                      route: "./routes/admin_products",
                      addView: `../../../plugins/${
                        theThings.folder
                      }/viewAdds/products/productsAdd`,
                      editView: `../../../plugins/${
                        theThings.folder
                      }/viewAdds/products/productsEdit`
                    }
                  );
                }
              }
            );
          }
          if (theThings.modelSwitch === "true") {
            theThings.modelRoutes.forEach(route => {
              fs.writeJson(
                `./expansion/upgrade/products/routes/checkers/${route}ModelRoutes.json`,
                {
                  route: `../../../../../plugins/${theThings.folder}/models/${route}`
                }
              );
            });
          }

          if(theThings.categoriesSwitch === "true"){
            fs.writeJson(
              "./expansion/upgrade/products/routes/checkers/productCategoriesRoutes.json",
              {
                route: `../../plugins/${theThings.folder}/routes/productCategories/admin_product_categories.js`,
                addView: `../../../../plugins/${theThings.folder}/viewAdds/productsCategories/productCategoriesAdd`,
                editView: `../../../../plugins/${theThings.folder}/viewAdds/productsCategories/productCategoriesEdit`
              }
            );
          }
        }
      });
    });
    /* default product routes */
    fs.pathExists(
      "./expansion/upgrade/products/routes/checkers/productRoutes.json",
      (err, exists) => {
        if (!exists) {
          fs.writeJson(
            "./expansion/upgrade/products/routes/checkers/productRoutes.json",
            {
              route: "./routes/admin_products",
              addView: `./pluginsViews/productAddPlugins.ejs`
            }
          );
        }
      }
    );
    fs.pathExists(
      "./expansion/upgrade/products/routes/checkers/productCouponRoutes.json",
      (err, exists) => {
        if (!exists) {
          fs.writeJson(
            "./expansion/upgrade/products/routes/checkers/productCouponRoutes.json",
            {
              route: "./routes/admin_product_coupons"
            }
          );
        }
      }
    );
    fs.pathExists(
      "./expansion/upgrade/products/routes/checkers/productOrderRoutes.json",
      (err, exists) => {
        if (!exists) {
          fs.writeJson(
            "./expansion/upgrade/products/routes/checkers/productOrderRoutes.json",
            {
              route: "./routes/admin_product_orders"
            }
          );
        }
      }
    );
    fs.pathExists(
      "./expansion/upgrade/products/routes/checkers/productCategoriesRoutes.json",
      (err, exists) => {
        if (!exists) {
          fs.writeJson(
            "./expansion/upgrade/products/routes/checkers/productCategoriesRoutes.json",
            {
              route: "./routes/admin_product_categories",
              addView: `../pluginViews/productCategoriesAdd`,
              editView: `../pluginViews/productCategoriesEdit`
            }
          );
        }
      }
    );
    /* end of default product routes */
    /* default product Model routes */
    fs.pathExists(
      "./expansion/upgrade/products/routes/checkers/productModelRoutes.json",
      (err, exists) => {
        if (!exists) {
          fs.writeJson(
            "./expansion/upgrade/products/routes/checkers/productModelRoutes.json",
            {
              route: "../../product"
            }
          );
        }
      }
    );
    fs.pathExists(
      "./expansion/upgrade/products/routes/checkers/productCouponModelRoutes.json",
      (err, exists) => {
        if (!exists) {
          fs.writeJson(
            "./expansion/upgrade/products/routes/checkers/productCouponModelRoutes.json",
            {
              route: "../../coupons"
            }
          );
        }
      }
    );
    fs.pathExists(
      "./expansion/upgrade/products/routes/checkers/productOrderModelRoutes.json",
      (err, exists) => {
        if (!exists) {
          fs.writeJson(
            "./expansion/upgrade/products/routes/checkers/productOrderModelRoutes.json",
            {
              route: "../../orders"
            }
          );
        }
      }
    );
    fs.pathExists(
      "./expansion/upgrade/products/routes/checkers/productCategoryModelRoutes.json",
      (err, exists) => {
        if (!exists) {
          fs.writeJson(
            "./expansion/upgrade/products/routes/checkers/productCategoryModelRoutes.json",
            {
              route: "../../productCategory"
            }
          );
        }
      }
    );
    /* end of default product Model routes */
  }
};
