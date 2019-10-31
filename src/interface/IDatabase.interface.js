const ICrud = require('./ICrud.interface');

class IDatabase extends ICrud {
  constructor(name, connection) {
    super();
    this.name = name;
    this.connection = connection;
  }
}

module.exports = IDatabase;