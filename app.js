const express = require('express');
const helmet = require('helmet');
const multer = require('multer')();
const CONFIG = require('./config/config');
const routes = require('./routes');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer.none());

app.use(routes);

app.listen(CONFIG.port, () => console.log(`Listening port ${CONFIG.port}`));
