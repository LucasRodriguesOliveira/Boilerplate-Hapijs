const { Ok } = require('../helper/util');

class TestController {
  getStatus() {
    return Ok();
  }
}

module.exports = TestController;