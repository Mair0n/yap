const router = require('express').Router();
const { AnimalType } = require('../db/models/animalType');

router.get('/', (req, res) => {
  AnimalType.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
})

router.put('/', (req, res) => {
  AnimalType.create(req.body)
    .then(() => res.json('OK'))
    .catch(err => res.json(err));
})

router.delete('/:name', (req, res) => {
  AnimalType.deleteOne({ name: req.params.name })
    .then(result => res.json('OK'))
    .catch(err => res.json(err));
})

module.exports = router;