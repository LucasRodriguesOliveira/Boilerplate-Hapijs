const NotImplementedException = require('../exception/notImplemented.exception');

class ICrud {
  create() {
    throw new NotImplementedException('create');
  }

  read() {
    throw new NotImplementedException('read');
  }

  update() {
    throw new NotImplementedException('update');
  }

  delete() {
    throw new NotImplementedException('delete');
  }

  isConnected() {
    throw new NotImplementedException('isConnected');
  }

  connect() {
    throw new NotImplementedException('connect');
  }
}

module.exports = ICrud;