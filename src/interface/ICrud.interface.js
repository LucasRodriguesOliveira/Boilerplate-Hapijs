const NotImplementedException = require('../exception/notImplemented.exception');

/**
 * @public
 * @interface
 * @description Defines how all operations should proceed
 */
class ICrud {

  /**
   * @public
   * @method
   */
  create() {
    throw new NotImplementedException('create');
  }

  /**
   * @public
   * @method
   */
  read() {
    throw new NotImplementedException('read');
  }

  /**
   * @public
   * @method
   */
  update() {
    throw new NotImplementedException('update');
  }

  /**
   * @public
   * @method
   */
  delete() {
    throw new NotImplementedException('delete');
  }

  /**
   * @public
   * @method
   */
  isConnected() {
    throw new NotImplementedException('isConnected');
  }

  /**
   * @public
   * @method
   */
  connect() {
    throw new NotImplementedException('connect');
  }
}

module.exports = ICrud;