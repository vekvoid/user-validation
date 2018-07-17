const mysql = require('mysql');
const CONFIG = require('./config/config');

const connection = mysql.createConnection({
  host: CONFIG.db_host,
  port: CONFIG.db_port,
  user: CONFIG.db_username,
  password: CONFIG.db_password,
  database: CONFIG.db_database,
  insecureAuth: true,
});

connection.connect((err) => {
  if (err) {
    console.error('\n Error: mysql connection error.\n');
    throw err;
  }

  console.log('Database connection success.');
});

module.exports = connection;
