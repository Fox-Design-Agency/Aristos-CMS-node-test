const errorAddEvent = require("../../../../important/AristosStuff/AristosLogger/AristosLogger")
  .addError;
/*  coupon model Queries */
const CountCoupons = require("../models/queries/coupons/CountCoupons");

/* User Model Queries */
const FindOneUserByID = require("../../../../important/admin/adminModels/queries/user/FindOneUserWithID");
const FindOneAdminByID = require("../../../../important/admin/adminModels/queries/user/FindAdminUserByID");
module.exports = {
  index(req, res, next) {
    Promise.all([FindOneAdminByID(req.session.passport.user)]).then(result => {
      res.render(
        "../../../expansion/upgrade/products/views/stats/statsDashboard",
        { theUser: result[0] }
      );
    });
  }
};
