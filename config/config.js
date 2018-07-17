
require('dotenv').config();

const CONFIG = {};

CONFIG.env = process.env.NODE_ENV || 'dev';
CONFIG.host = process.env.HOST || 'localhost';
CONFIG.port = process.env.PORT || '3000';

CONFIG.db_host = process.env.DB_HOST || 'localhost';
CONFIG.db_port = process.env.DB_PORT || '3306';
CONFIG.db_database = process.env.DB_DATABASE || 'name';
CONFIG.db_username = process.env.DB_USERNAME || 'root';
CONFIG.db_password = process.env.DB_PASSWORD || 'db-password';

module.exports = CONFIG;
