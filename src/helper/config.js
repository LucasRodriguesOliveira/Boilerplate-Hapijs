const VERSION = 'v1.0';

function configEnvironment(env) {
  const environments = e => `.env.${e.toLowerCase()}`;

  require('dotenv').config({
    path: environments(env)
  });
}

function configSwagger(HapiSwagger) {
  return {
    plugin: HapiSwagger,
    options: {
      info: {
        title: process.env.TITLE,
        version: VERSION
      }
    }
  };
}

function configRegister() {
  const Swagger = configSwagger(require('hapi-swagger'));
  const Vision = require('@hapi/vision');
  const Inert = require('@hapi/inert');
  const HapiJwt = require('hapi-auth-jwt2');

  return [
    Vision,
    Inert,
    Swagger,
    HapiJwt
  ];
}

function configAuthStrategy(jwtTokenSecret) {
  return [
    'jwt',
    'jwt',
    {
      key: jwtTokenSecret,
      validate: () => {
        return { isValid: true };
      }
    }
  ];
}

module.exports = {
  configEnvironment,
  configRegister,
  configAuthStrategy
};