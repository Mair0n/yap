const router = require('express').Router();

const { Animal } = require('../db/models/animal');
const { AnimalClass } = require('../db/models/animalClass');
const { AnimalType } = require('../db/models/animalType');
const { Feed } = require('../db/models/feed');

router.get('/', (req, res) => {
  Animal.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
})

router.get('/:name', (req, res) => {
  Animal.findOne({ name: req.params.name })
    .then(result => res.json(result))
    .catch(err => res.json(err));
})

router.get('/dependences', (req, res) => {
  AnimalClass.find({}, 'name', (err, classes) => {
    if (!err) {
      AnimalType.find({}, 'name', (err, types) => {
        if (!err) {
          Feed.find({}, 'name', (err, feeds) => {
            if (!err) {
              res.json({
                classes,
                types,
                feeds,
              })
            }
          });
        }
      });
    }
  });


})

router.put('/', (req, res) => {
  Animal.create(req.body)
    .then(() => res.json('OK'))
    .catch(err => res.json(err));
})

router.delete('/:name', (req, res) => {
  Animal.deleteOne({ animal: req.params.animal })
    .then(result => res.json('OK'))
    .catch(err => res.json(err));
})

module.exports = router;