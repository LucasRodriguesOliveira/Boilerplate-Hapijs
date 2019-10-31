const requireDir = require('require-dir');
const { notin, obj2arr } = require('../helper/util');
const CONFIG = require('./base/config.json');

class Router {
  static getDirectories() {
    const { ignoreFiles, path, pattern } = CONFIG;
    // Returns all routes in specific "pattern" defined in config.json
    // ignoring all files in "ignoreFiles" array
    return requireDir(path, {
      filter: function(fullpath) {
        const [file] = fullpath.split('\\').reverse();
        return file.match(new RegExp(pattern)) && notin(fullpath, ignoreFiles);
      }
    });
  }

  // runs all methods in instance, retrieving all routes defined, than generates an array of their results
  static mapRoutes(/* instance */ i, /* methods */ ms){
    return ms.map(m => i[m](m));
  }

  static getRoutes(dirs, secret, database) {
    const routes = [];
    // returns an array of each route in specif pattern
    // defined by "pattern" in config.json
    // then, instantiates the route and run all methods inside to grab the
    // all the routes information
    obj2arr(dirs).forEach(r => {
      Router.mapRoutes((new r(secret, database)), r.methods())
        .forEach(m => {
          routes.push(m);
        });
    });

    return routes;
  }
}

module.exports = Router;