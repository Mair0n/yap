const router = require('express').Router();

const animals = require('./animals');
const animalsClass = require('./animal-class');
const animalsType = require('./animal-type');
const feed = require('./feed');
const license = require('./license');
const animalCard = require('./animal-card');

router.use('/animals', animals);
router.use('/animal-class', animalsClass);
router.use('/animal-type', animalsType);
router.use('/feed', feed);
router.use('/license', license);
router.use('/animal-card', animalCard);

module.exports = router;