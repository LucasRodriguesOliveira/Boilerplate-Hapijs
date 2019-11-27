/**
 * @public
 * @class
 * @extends {Error}
 * @throws {NotImplementedException}
 * @description
 * throws an exception for not overloaded methods
 */
class NotImplementedException extends Error {
  /**
   * @public
   * @constructor
   * @param {string} name method name
   */
  constructor(name) {
    super(`Not Implemented Exception!${name ? ' Expected ' + name + '!' : ''}`);
  }
}

module.exports = NotImplementedException;