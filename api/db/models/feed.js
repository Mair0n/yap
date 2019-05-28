const mongoose = require('../index');

const FeedSchema = new mongoose.Schema({
  name:  String,
  kind: String,
  composition: String,
  number: String,
});

module.exports = {
    Feed:mongoose.model('Feed', FeedSchema),
    FeedSchema,
};