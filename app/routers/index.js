const express = require('express');
const path = require('path');

const router = express.Router();

router.use(express.static(path.resolve('__dirname/../public')));

router.get('/', (_, res) => {
    res.render('index');
});

module.exports = router;
