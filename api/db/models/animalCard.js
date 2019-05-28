const mongoose = require('../index');

const AnimalCardSchema = new mongoose.Schema({
  animal:  {
    type: String,
    required: true,
  },
  absolut: Number,
  relative: Number,
  expert: Number,
});

module.exports = {
  AnimalCard: mongoose.model('AnimalCard', AnimalCardSchema),
  AnimalCardSchema,
};