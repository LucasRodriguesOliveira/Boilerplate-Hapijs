const BaseModel = require('./base/base.model');

class Sample extends BaseModel {
  constructor(id, name, description) {
    super();
    this.id = id || Object.create(null);
    this.name = name || Object.create(null);
    this.description = description || Object.create(null);
  }

  static getSchema(DatabaseName) {
    const basePath = '../database/';
    DatabaseName = DatabaseName.toLowerCase();
    const schema = Sample.getClassName().toLowerCase();

    return require(`${basePath + DatabaseName}/schemas/${schema}.schema`);
  }
}

module.exports = Sample;