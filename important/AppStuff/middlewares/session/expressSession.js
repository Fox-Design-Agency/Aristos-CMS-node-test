const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const config = require("../../config/config");
const siteStats = require("../../../AristosStuff/AristosSiteStats/AristosSiteStats");
module.exports = app => {
  /* Express Session middleware */
  app.use(
    session({
      secret: config.read("sessionSecret"),
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection })
    })
  );
};