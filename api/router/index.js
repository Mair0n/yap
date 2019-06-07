const router = require('express').Router();

const animals = require('./animals');
const animalsClass = require('./animal-class');
const animalsType = require('./animal-type');
const feed = require('./feed');
const license = require('./license');
const animalCard = require('./animal-card');

router.use('/animals', animals);
router.use('/classes', animalsClass);
router.use('/types', animalsType);
router.use('/feeds', feed);
router.use('/licenses', license);
router.use('/cards', animalCard);

module.exports = router;