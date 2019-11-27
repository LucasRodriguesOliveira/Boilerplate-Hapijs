const NotImplementedException = require('../../exception/notImplemented.exception');

/**
 * @public
 * @abstract
 * @class
 * @description Defines how a Model should works
 */
class BaseModel {

  /**
   * @static
   * @method
   */
  static getSchema() {
    throw new NotImplementedException();
  }

  /**
   * @static
   * @method
   */
  static getClassName() {
    return Object.getOwnPropertyDescriptors(this.prototype).constructor.value.name;
  }
}

module.exports = BaseModel;