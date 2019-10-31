const NotImplementedException = require('../../exception/notImplemented.exception');

class BaseModel {
  static getSchema() {
    throw new NotImplementedException();
  }

  static getClassName() {
    return Object.getOwnPropertyDescriptors(this.prototype).constructor.value.name;
  }
}

module.exports = BaseModel;