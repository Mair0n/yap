const router = require('express').Router();
const { Feed } = require('../db/models/feed');

router.get('/', (req, res) => {
  Feed.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
})

router.put('/', (req, res) => {
  Feed.create(req.body)
    .then(() => res.json('OK'))
    .catch(err => res.json(err));
})

router.delete('/:name', (req, res) => {
  Feed.deleteOne({ name: req.params.name })
    .then(result => res.json('OK'))
    .catch(err => res.json(err));
})

module.exports = router;