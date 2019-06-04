const mongoose = require('../index');
const { FeedSchema } = require('./feed');
const { AnimalClassSchema } = require('./animalClass');
const { AnimalTypeSchema } = require('./animalType');

const AnimalSchema = new mongoose.Schema({
  name:  {
    type: String,
    required: true,
  },
  desciption: String,
  class: AnimalClassSchema,
  type: AnimalTypeSchema,
  feed: [FeedSchema],
});

module.exports = { 
    Animal:mongoose.model('Animal', AnimalSchema),
    AnimalSchema,
};