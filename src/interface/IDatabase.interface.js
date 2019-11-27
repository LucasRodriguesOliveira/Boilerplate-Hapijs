const ICrud = require('./ICrud.interface');

/**
 * @public
 * @interface IDatabase
 * @description Defines how a Database class should works
 */
class IDatabase extends ICrud {
  constructor(name, connection) {
    super();
    this.name = name;
    this.connection = connection;
  }
}

module.exports = IDatabase;