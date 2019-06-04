const mongoose = require('../index');

const LicenseSchema = new mongoose.Schema({
  animal:  {
    type: String,
    required: true,
  },
  absolut: Number,
  relative: Number,
  expert: Number,
});

module.exports = { 
    Licenses:mongoose.model('Licenses', LicenseSchema),
    LicenseSchema,
};