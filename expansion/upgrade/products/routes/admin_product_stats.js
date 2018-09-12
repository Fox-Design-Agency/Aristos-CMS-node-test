const express = require("express");
const router = express.Router();
const auth = require("../../../../important/AppStuff/authorization/auth");
const isAdmin = auth.isAdmin;
const statsController = require("../controller/admin_products_stats_controller");

/*
* GET stats index
*/
router.get("/", isAdmin, statsController.index);

module.exports = router;
