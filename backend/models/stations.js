const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: String,
  password: String,
  location: {
    type: [Number],
  },
});

schema.index({ location: '2dsphere' });

module.exports = mongoose.model('station', schema);
