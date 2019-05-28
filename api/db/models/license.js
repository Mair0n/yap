const mongoose = require('../index');

const LicenseSchema = new mongoose.Schema({
  name:  {
    type: String,
    required: true,
  },
  animals: [String],
  term: Date,
});

module.exports = {
    License:mongoose.model('Licenses', LicenseSchema),
    LicenseSchema,
};