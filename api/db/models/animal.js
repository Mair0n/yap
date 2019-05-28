const mongoose = require('../index');

const AnimalSchema = new mongoose.Schema({
  name:  {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  class: String,
  type: String,
  feed: [String],
});

module.exports = {
    Animal:mongoose.model('Animal', AnimalSchema),
    AnimalSchema,
};