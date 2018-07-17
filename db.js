const mysql = require('mysql');
const CONFIG = require('./config/config');

const connection = mysql.createPool({
  host: CONFIG.db_host,
  port: CONFIG.db_port,
  user: CONFIG.db_username,
  password: CONFIG.db_password,
  database: CONFIG.db_database,
  insecureAuth: true,
});

module.exports = connection;
