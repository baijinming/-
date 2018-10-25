const express = require('express');
const router = express.Router();

router.use('/repairs', require('./repairs'));
router.use('/admin', require('./admin'));
router.use('/maintainer', require('./maintainer'));

module.exports = router