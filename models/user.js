const db = require('../db');

const User = {
  getUserByUsername: (username, callback) => db.query('SELECT id, username FROM users WHERE lower(username) = lower(?)', [username], callback),
  getUserByUsernamePassword: (username, password, callback) => db.query('SELECT * FROM users WHERE lower(username) = lower(?) AND BINARY password = ?', [username, password], callback),
};

module.exports = User;
