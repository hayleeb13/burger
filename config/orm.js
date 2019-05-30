const connection = require('./connection.js');

function selectAll(callback) {
  connection.query(
    'SELECT * FROM burgers',
    callback
  );
}

function insertOne(newBurger, callback) {
  connection.query(
    'INSERT INTO burgers (burger_name, devoured) values (?, ?)',
    [
      newBurger.burger_name,
      newBurger.devoured
    ],
    callback
  );
}

function updateOne(callback) {
  connection.query(
    'UPDATE burgers SET ? WHERE ?',
    callback
  );
}

module.exports = {
  selectAll: selectAll,
  insertOne: insertOne,
  updateOne: updateOne
};
