const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    values: { type: Object },
    station: mongoose.Types.ObjectId,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Measurement', schema);
