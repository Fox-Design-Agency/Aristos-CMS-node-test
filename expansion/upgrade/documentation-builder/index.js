const fs = require("fs-extra");
require("./routes/checkers/admin_documentation_routes_checker").theFunction();
const adminDocumentation = fs.readJSONSync(
  "./expansion/upgrade/documentation-builder/routes/checkers/documentationRoutes.json"
).route;

const adminChangelong = fs.readJSONSync(
  "./expansion/upgrade/documentation-builder/routes/checkers/changelogRoutes.json"
).route;
const adminDocumentationCategory = fs.readJSONSync(
  "./expansion/upgrade/documentation-builder/routes/checkers/documentationCategoriesRoutes.json"
).route;
const adminChangelogs = require(adminChangelong);
const adminDocumentations = require(adminDocumentation);
const adminDocumentationCategories = require(adminDocumentationCategory);
module.exports = app => {
  app.use("/admin/documentation-builder", adminDocumentations);
  app.use("/admin/changelog-builder", adminChangelogs);
  app.use(
    "/admin/documentation-builder-categories",
    adminDocumentationCategories
  );
};
