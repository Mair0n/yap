const router = require('express').Router();

const animals = require('./animals');

router.use('/animals', animals);

module.exports = router;