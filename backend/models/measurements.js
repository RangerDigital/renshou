const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    values: { type: Array },
    station: mongoose.Types.ObjectId,
  },
  { timestamps: true }
);

module.exports = mongoose.model('measurement', schema);
