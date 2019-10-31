/**
 * @public
 * @class
 * @extends {Error}
 * @throws {NotImplementedException}
 * @description
 * Lança uma exceção métodos não sobrescritos pelas classes filho
 */
class NotImplementedException extends Error {
  /**
   * @public
   * @constructor
   * @param {string} name Nome do método ao qual será lançada a exceção
   */
  constructor(name) {
    super(`Not Implemented Exception!${name ? ' Expected ' + name + '!' : ''}`);
  }
}

module.exports = NotImplementedException;