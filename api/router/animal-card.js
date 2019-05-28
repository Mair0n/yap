const router = require('express').Router();
const { AnimalCard } = require('../db/models/animalCard');

router.get('/', (req, res) => {
  AnimalCard.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
})

router.put('/', (req, res) => {
  AnimalCard.create(req.body)
    .then(() => res.json('OK'))
    .catch(err => res.json(err));
})

router.delete('/:animal', (req, res) => {
  AnimalCard.deleteOne({ animal: req.params.animal })
    .then(result => res.json('OK'))
    .catch(err => res.json(err));
})

module.exports = router;