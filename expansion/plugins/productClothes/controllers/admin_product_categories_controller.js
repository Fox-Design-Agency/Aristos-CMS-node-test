const fs = require("fs-extra");
const errorAddEvent = require("../../../../important/AristosStuff/AristosLogger/AristosLogger")
  .addError;
/*  Product category model Queries */
const CountProductCategory = require("../../../upgrade/products/models/queries/productCategory/CountProductCategories");
const FindAllProductCategories = require("../../../upgrade/products/models/queries/productCategory/FindAllProductCategories");
const CreateProductCategory = require("../../../upgrade/products/models/queries/productCategory/CreateProductCategory");
const EditProductCategory = require("../../../upgrade/products/models/queries/productCategory/EditProductCategory");
const DeleteProductCategory = require("../../../upgrade/products/models/queries/productCategory/DeleteProductCategory");
const FindProductCategoryWithParam = require("../../../upgrade/products/models/queries/productCategory/FindProductCategoryWithParam");
const FindOneProductCategoryByID = require("../../../upgrade/products/models/queries/productCategory/FindOneProductCategoryByID");
const SortProductCategories = require("../../../upgrade/products/models/queries/productCategory/SortProductCategoryByID");
const FindAllSortedCategories = require("../../../upgrade/products/models/queries/productCategory/FindAllSortedProductCategories");
/* media queries */
const FindAllMedia = require("../../../../important/admin/adminModels/queries/media/FindAllMedia");
/* media categories Queries */
// const FindAllMediaCategories = require("../../../../important/adminModels/queries/mediaCategories/FindAllMediaCategories");
/* User Model Queries */
const FindOneUserByID = require("../../../../important/admin/adminModels/queries/user/FindOneUserWithID");
const FindOneAdminByID = require("../../../../important/admin/adminModels/queries/user/FindAdminUserByID");
module.exports = {
  index(req, res, next) {
    Promise.all([
      CountProductCategory(),
      FindAllSortedCategories(),
      FindOneAdminByID(req.session.passport.user)
    ]).then(result => {
      res.render(
        "../../../expansion/upgrade/products/views/categories/product_categories",
        {
          categories: result[1],
          count: result[0],
          theUser: result[2]
        }
      );
    });
  } /* end of index function */,
  addIndex(req, res, next) {
    const addProduct = fs.readJSONSync(
      "./expansion/upgrade/products/routes/checkers/productCategoriesRoutes.json"
    ).addView;
    let title,
      author,
      description,
      keywords,
      imagePath,
      colors,
      sizes = "";
    Promise.all([
      FindAllMedia(),
      FindOneAdminByID(req.session.passport.user)
    ]).then(result => {
      res.render(
        "../../../expansion/upgrade/products/views/categories/add_product_category",
        {
          title: title,
          author: author,
          description: description,
          keywords: keywords,
          imagePath: imagePath,
          media: result[0],
          theUser: result[1],
          pluginView: addProduct,
          colors: colors,
          sizes: sizes
        }
      );
    });
  } /* end of add index function */,
  create(req, res, next) {
    const User = FindOneUserByID(req.session.passport.user);
    User.then(user => {
      if (user.admin === 1) {
        let errors = [];
        if (!req.body.title) {
          errors.push({ text: "Title must have a value." });
        }
        let title = req.body.title;
        let slug = title.replace(/\s+/g, "-").toLowerCase();
        let author = req.session.passport.user;
        let description = req.body.description;
        let keywords = req.body.keywords;
        let imagePath = req.body.imagepath;

        let colors = req.body.colors;
        let sizes = req.body.sizes;
        if (errors.length > 0) {
          FindAllMedia().then(media => {
            return res.render(
              "../../../expansion/upgrade/products/views/categories/add_product_category",
              {
                errors: errors,
                title: title,
                author: author,
                description: description,
                keywords: keywords,
                media: media,
                colors: colors,
                sizes: sizes
              }
            );
          });
        } else {
          FindProductCategoryWithParam({ slug: slug }).then(category => {
            if (category.length > 0) {
              errors.push({ text: "Category title exists, choose another." });
              FindAllMedia().then(media => {
                return res.render(
                  "../../../expansion/upgrade/products/views/categories/add_product_category",
                  {
                    errors: errors,
                    title: "",
                    author: author,
                    description: description,
                    keywords: keywords,
                    media: media,
                    colors: colors,
                    sizes: sizes
                  }
                );
              });
            } else {
              const CategoryProps = {
                title: title,
                slug: slug,
                author: author,
                description: description,
                keywords: keywords,
                imagepath: imagePath,
                color: colors,
                sizes: sizes
              };
              CreateProductCategory(CategoryProps);
              req.flash("success_msg", "Product Category Added!");
              res.redirect("/admin/product-categories");
            }
          });
        }
      } else {
        res.redirect("/users/login");
      }
    });
  } /* end of create function */,
  editIndex(req, res, next) {
    const editProduct = fs.readJSONSync(
      "./expansion/upgrade/products/routes/checkers/productCategoriesRoutes.json"
    ).editView;
    Promise.all([
      FindOneProductCategoryByID(req.params.id),
      FindAllMedia(),
      FindOneAdminByID(req.session.passport.user)
    ]).then(result => {
      res.render(
        "../../../expansion/upgrade/products/views/categories/edit_product_category",
        {
          title: result[0].title,
          id: result[0]._id,
          author: result[0].author,
          description: result[0].description,
          keywords: result[0].keywords,
          media: result[1],
          imagepath: result[0].imagepath,
          theUser: result[2],
          pluginView: editProduct,
          colors: result[0].color,
          sizes: result[0].sizes
        }
      );
    });
  } /* end of edit index function */,
  edit(req, res, next) {
    const User = FindOneUserByID(req.session.passport.user);
    User.then(user => {
      if (user.admin === 1) {
        let errors = [];
        if (!req.body.title) {
          errors.push({ text: "Title must have a value." });
        }
        let title = req.body.title;
        let slug = title.replace(/\s+/g, "-").toLowerCase();
        let id = req.params.id;
        let description = req.body.description;
        let keywords = req.body.keywords;
        let imagepath = req.body.imagepath;

        if (errors.length > 0) {
          FindAllMedia().then(media => {
            return res.render(
              "../../../expansion/upgrade/products/views/categories/edit_product_category",
              {
                errors: errors,
                title: title,
                id: id,
                media: media,
                description: description,
                keywords: keywords
              }
            );
          });
        } else {
          FindProductCategoryWithParam({
            slug: slug,
            _id: { $ne: id }
          }).then(category => {
            if (category.length > 0) {
              errors.push({ text: "Category title exists, chooser another." });
              FindAllMedia().then(media => {
                return res.render(
                  "../../../expansion/upgrade/products/views/categories/edit_product_category",
                  {
                    errors: errors,
                    title: "",
                    id: id,
                    description: description,
                    keywords: keywords,
                    media: media
                  }
                );
              });
            } else {
              const CategoryProps = {
                title: title,
                slug: slug,
                description: description,
                keywords: keywords,
                imagepath: imagepath
              };
              EditProductCategory(id, CategoryProps);

              req.flash("success_msg", "Product Category Edited!");
              res.redirect("/admin/product-categories");
            }
          });
        }
      } else {
        res.redirect("/users/login");
      }
    });
  } /* end of edit function */,
  delete(req, res, next) {
    //should also delete associated products
    DeleteProductCategory(req.params.id);
    req.flash("success_msg", "Product Category deleted!");
    res.redirect("/admin/product-categories");
  } /* end of delete function */,
  reorder(req, res, next) {
    const User = FindOneUserByID(req.session.passport.user);
    User.then(user => {
      if (user.admin === 1) {
        let ids = req.body["id[]"];
        SortProductCategories(ids);
      } else {
        res.redirect("/users/login");
      }
    });
  } /* end of reorder function */
};
