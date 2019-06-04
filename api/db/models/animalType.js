const mongoose = require('../index');

const AnimalTypeSchema = new mongoose.Schema({
  name:  {
    type: String,
    required: true,
  },
  desciption: String,
});

module.exports = { 
    AnimalType:mongoose.model('AnimalType', AnimalTypeSchema),
    AnimalTypeSchema,
};