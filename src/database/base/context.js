const ICrud = require('../../interface/ICrud.interface');

class Context extends ICrud {
  constructor(database) {
    super();
    this._database = database;
    this.name = this._database.name;
  }

  async create(item) {
    return await this._database.create(item);
  }

  async read(query) {
    return await this._database.read(query);
  }

  async update(id, item) {
    return await this._database.update(id, item);
  }

  async delete(id) {
    return await this._database.delete(id);
  }

  async destroy(id) {
    return await this._database.destroy(id);
  }

  async truncate(query) {
    return await this._database.truncate(query);
  }

  isConnected() {
    return this._database.isConnected();
  }

  static connect() {
    return this._database.connect();
  }

  defineModel(model) {
    this._database.defineModel(model);
  }
}

module.exports = Context;