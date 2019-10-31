const Mongoose = require('mongoose');
const Sample = new Mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date()
  },
  modifiedAt: {
    type: Date,
    required: true,
    default: new Date() // when created, it also is modified
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  excluded: { // allow logical exclusions
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = Sample;