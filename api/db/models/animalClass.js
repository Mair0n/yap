const mongoose = require('../index');

const AnimalClassSchema = new mongoose.Schema({
  name:  {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
});

module.exports = {
    AnimalClass:mongoose.model('AnimalClass', AnimalClassSchema),
    AnimalClassSchema,
};