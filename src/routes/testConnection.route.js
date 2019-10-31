const BaseRoute = require('./base/base.route');
const Controller = require('../controller/testConnection.controller');

class Test extends BaseRoute {
  constructor(secret) {
    super(require('./base/testConnection.config.json'), new Controller());
    this.secret = secret;
  }

  testConnection(name) {
    const { path, _default: { tags }, _method } = this;
    const { description, notes } = this.routes[name];

    return BaseRoute.getTemplate(path[0],
      _method.GET,
      BaseRoute.getConfig(tags, description, notes),
      () => this.controller.getStatus());
  }
}

module.exports = Test;