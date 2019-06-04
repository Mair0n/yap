const router = require('express').Router();
const { Animal } = require('../db/models/animal');

router.get('/', (req, res) => {
  Animal.find().then(result => res.json(result))
})

router.put('/', (req, res) => {
  console.log(req.body)
  Animal.create(req.body)
  .then((res, err) => {
    console.log(err);
    console.log(res);
  });
})

module.exports = router;