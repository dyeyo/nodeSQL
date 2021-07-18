const express = require('express');
const BookRouter = require('./book.router');
const UsersRouter = require('./user.router');

const router = express.Router();

router.use('/book', BookRouter);
router.use('/user', UsersRouter);

module.exports = router;
