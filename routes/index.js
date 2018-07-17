const express = require('express');
const user = require('./v1/user.router');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Users validation\n');
});

router.use('/v1/user', user);

module.exports = router;
