const orm = require('../config/orm.js');

var burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },

  insertOne: function(id, burger_name, devoured, callback) {
    orm.insertOne("burgers", id, burger_name, devoured, function(res) {
      callback(res);
    });
  },

  updateOne: function(devoured, callback) {
    orm.updateOne("burgers", devoured, function(res) {
      callback(res);
    });
  }
};

module.exports = burger;