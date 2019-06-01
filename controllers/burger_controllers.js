var express = require("express");
var orm = require("../config/orm.js");
var router = express.Router();
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

router.get("/", function(req, res) {
  orm.selectAll(function(error, data) {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      res.render("index", { burgers: data });
    }
  });
});

router.post("/", function(req, res) {
  const newBurger = req.body;
  orm.insertOne(newBurger, function(error) {
    if (error) {
      res.sendStatus(500);
    } else {
      res.json({newBurger: data});
    }
  });
});

module.exports = router;