const connection = require('./connection.js');

function selectAll(callback) {
  connection.query(
    'SELECT * FROM burgers',
    callback
  );
}

function insertOne(newBurger, callback) {
  connection.query(
    'INSERT INTO burgers (id, burger_name, devoured) values (?, ?, ?)',
    [
      newBurger.id,
      newBurger.burger_name,
      newBurger.devoured
    ],
    callback
  );
}

function updateOne(newBurger, callback) {
  connection.query(
    'INSERT INTO burgers (devoured) VALUES ?',
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