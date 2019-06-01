const orm = require("../config/orm.js");

var burger = {
  selectAll: function() {
    orm.selectAll("burgers", function(req) {
      [req.body]
    });
  },

  insertOne: function() {
    orm.insertOne("burgers", function(req) {
      var newBurger = [req.body];
      [
        newBurger.id,
        newBurger.burger_name,
        newBurger.devoured
      ]
    });
  }
}

module.exports = burger;