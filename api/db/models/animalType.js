const mongoose = require('../index');

const AnimalTypeSchema = new mongoose.Schema({
  name:  {
    type: String,
    required: true,
  },
  description: String,
});

module.exports = {
    AnimalType:mongoose.model('AnimalType', AnimalTypeSchema),
    AnimalTypeSchema,
};