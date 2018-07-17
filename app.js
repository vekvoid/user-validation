const express = require('express');
const multer = require('multer')();
const CONFIG = require('./config/config');
const user = require('./routes/v1/user.route');

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer.none());

router.get('/', (req, res) => {
  res.send('Users validation\n');
});

app.use('/', router);
app.use('/v1/user', user);

app.listen(CONFIG.port, () => console.log(`Listening port ${CONFIG.port}`));
