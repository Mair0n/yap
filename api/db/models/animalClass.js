const mongoose = require('../index');

const AnimalClassSchema = new mongoose.Schema({
  name:  {
    type: String,
    required: true,
  },
  desciption: String,
});

module.exports = { 
    AnimalClass:mongoose.model('AnimalClass', AnimalClassSchema),
    AnimalClassSchema,
};