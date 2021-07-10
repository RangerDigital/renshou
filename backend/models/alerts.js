const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    message: { type: String },
    station: { type: mongoose.Types.ObjectId },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('alert', schema);
