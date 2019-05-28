const router = require('express').Router();
const { License } = require('../db/models/license');

router.get('/', (req, res) => {
    License.find()
        .then(result => res.json(result))
        .catch(err => res.json(err));
})

router.put('/', (req, res) => {
    License.create(req.body)
        .then(() => res.json('OK'))
        .catch(err => res.json(err));
})

router.delete('/:name', (req, res) => {
    License.deleteOne({ name: req.params.name })
        .then(result => res.json('OK'))
        .catch(err => res.json(err));
})

module.exports = router;