const BaseModel = require('./base/base.model');

/**
 * @public
 * @class
 * @description A Class to explains how all models should be created
 */
class Sample extends BaseModel {

  /**
   * @public
   * @constructor
   * @param {Integer|String} id Object id in database
   * @param {String} name Object's name
   * @param {String} description Object's description
   */
  constructor(id, name, description) {
    super();
    this.id = id || Object.create(null);
    this.name = name || Object.create(null);
    this.description = description || Object.create(null);
  }

  /**
   * @public
   * @static
   * @method
   * @param {String} DatabaseName to achieve schema for specific database
   * @returns {Object|Schema} Schema for this model
   */
  static getSchema(DatabaseName) {
    const basePath = '../database/';
    DatabaseName = DatabaseName.toLowerCase();
    const schema = Sample.getClassName().toLowerCase();

    return require(`${basePath + DatabaseName}/schemas/${schema}.schema`);
  }
}

module.exports = Sample;