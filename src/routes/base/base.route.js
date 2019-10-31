const Joi = require('@hapi/joi');
const Config = require('./config.json');

/**
 * @abstract
 * @public
 * @class
 * @description
 * Defines how a route should works
 */
class BaseRoute {
  constructor(childConfig, controller) {
    this.config = Config;
    this.childConfig = childConfig;
    this.controller = controller;
    
    this._method = this.config.methods;
    this._default = this.config.defaultValues;

    this.name = this.childConfig.name;
    this.path = this.childConfig.path;
    this.routes = this.childConfig.routes;
    this.strings = this.childConfig.strings;
  }

  /**
   * @public
   * @static
   * @method
   * @returns {Array}
   * @description
   * Returns a list of all methods included in a route that is not private (starts with _)
   */
  static methods() {
    return Object.getOwnPropertyNames(this.prototype).filter(
      m => ('constructor' !== m) && (!m.startsWith('_'))
    );
  }

  /**
   * @public
   * @static
   * @method
   * @param {Array|String} tags Tags used by Swagger
   * @param {String} description Description used by Swagger
   * @param {String} notes Notes used by Swagger
   * @param {Object} options Options that you want to apply to this route, like payload, query, params, headers
   * @returns {Object}
   * @description
   * Returns an object Config used by Hapi
   */
  static getConfig(tags, description, notes, options) {
    const failAction = (request, headers, error) => {
      throw error;
    };

    const headers = Joi.object({
      authorization: Joi.string().required()
    }).unknown();

    const validate = { failAction };

    if(options) {
      if(options.payload) validate.payload = options.payload;
      if(options.query) validate.query = options.query;
      if(options.params) validate.params = options.params;
      if(options.auth) validate.headers = headers;
    }

    return { tags, description, notes, validate };
  }

  /**
   * 
   * @param {String} path path of this route
   * @param {String} method HTTP method
   * @param {Object} config use getConfig to define this Object
   * @param {Function} handler how a route should work
   */
  static getTemplate(path, method, config, handler) {
    const template = {};

    if(path) template.path = path;
    if(method) template.method = method;
    if(config) template.config = config;
    if(handler) template.handler = handler;

    return template;
  }
}

module.exports = BaseRoute;