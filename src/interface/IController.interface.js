const NotImplementedException = require('../exception/notImplemented.exception');

class IController {
  constructor(database) {
    this.database = database;
  }

  getRegex(p) {
    return { $regex: `.*${p}*.` };
  }

  validate(p, regex, r) {
    return p ? regex(p, r) : {};
  }

  create() {
    throw new NotImplementedException('create');
  }

  read() {
    throw new NotImplementedException('read');
  }

  readById() {
    throw new NotImplementedException('read');
  }

  update() {
    throw new NotImplementedException('update');
  }

  delete() {
    throw new NotImplementedException('delete');
  }
}

module.exports = IController;