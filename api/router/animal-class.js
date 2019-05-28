const router = require('express').Router();
const { AnimalClass } = require('../db/models/animalClass');

router.get('/', (req, res) => {
  AnimalClass.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
})

router.put('/', (req, res) => {
  AnimalClass.create(req.body)
    .then(() => res.json('OK'))
    .catch(err => res.json(err));
})

router.delete('/:name', (req, res) => {
  AnimalClass.deleteOne({ name: req.params.name })
    .then(result => res.json('OK'))
    .catch(err => res.json(err));
})

module.exports = router;