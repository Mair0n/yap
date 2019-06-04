const mongoose = require('../index');
const { AnimalSchema } = require('./animal');

const LicenseSchema = new mongoose.Schema({
  name:  {
    type: String,
    required: true,
  },
  animals: [AnimalSchema],
  term: Date,
});

module.exports = { 
    Licenses:mongoose.model('Licenses', LicenseSchema),
    LicenseSchema,
};