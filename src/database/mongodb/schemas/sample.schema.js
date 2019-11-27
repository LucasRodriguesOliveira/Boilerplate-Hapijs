const Mongoose = require('mongoose');
/**
 * @public
 * @static
 * @abstract
 * @class SampleSchema
 * @description Defines a Schema for Sample model for mongodb
 * @property name {String} Object's name
 * @property description {String} Object's description
 * @property createdAt {Date} When Sample it's recorded in database
 * @property modifiedAt {Date} When Sample it's updated in database
 * @property active {Boolean} Defines if Sample should be used by other users or not
 * @property excluded {Boolean} Defines a logical exclusion (preserves data)
 */
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