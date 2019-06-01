var connection = require("./connection.js");

function selectAll(callback) {
  connection.query(
    'SELECT * FROM burgers',
    callback
  );
}

function insertOne(newBurger, callback) {
  connection.query(
    'INSERT INTO burgers (burger_name) values (?)',
    [
      newBurger.burger_name
    ],
    callback
  );
}

function updateOne(newBurger, callback) {
  connection.query(
    'INSERT INTO burgers (devoured) values (?)',
    [
      newBurger.devoured
    ],
    callback
  );
}

module.exports = {
  selectAll: selectAll,
  insertOne: insertOne,
  updateOne: updateOne
};