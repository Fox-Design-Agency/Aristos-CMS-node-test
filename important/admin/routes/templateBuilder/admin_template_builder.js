const express = require("express");
const router = express.Router();
const auth = require("../../../AppStuff/authorization/auth");
const isAdmin = auth.isAdmin;

/* GET index template builder */

router.get("", (req, res, next)=>{
    res.render("../../../important/admin/views/templateBuilder/templateBuilder",{
        content: "",
        title: "",
        author: "",
        keywords: ""
    })
})


/* Exports */
module.exports = router;