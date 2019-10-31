// * Environment preparation
const configEnv = require('./helper/config').configEnvironment;
configEnv(process.env.NODE_ENV);

// * System imports
const Hapi = require('@hapi/hapi');
const Router = require('./routes/router');
// Actually, you can define any database you want
// I'm specting that you use Strategy pattern
const Mongodb = require('./database/mongodb/Mongodb.database');
const Context = require('./database/base/Context');
const { configRegister, configAuthStrategy } = require('./helper/config');

// * Setting up database connection
// True -> Show Log ('Database Mongodb running')
// False -> Do not show log, just run
let database;
try {
  database = new Context(new Mongodb(Mongodb.connect(true)));
} catch(err) {
  database = {}; // please, set up your database connection in .env.development
}

// * Setting up the server
const app = new Hapi.server({ port: process.env.PORT });
// * Main function
async function main() {
  // Swagger needs some config informations
  // Register plugins
  await app.register(configRegister());

  // Defines Auth Strategy
  app.auth.strategy(...configAuthStrategy(process.env.SECRET));
  //app.auth.default('jwt'); // uncomment this line to use auth

  //* Routes registration
  app.route(Router.getRoutes(Router.getDirectories(), process.env.SECRET, database));

  // Initiates the server
  try {
    await app.start();
    
    console.log('Server running on port:', app.info.port);
    return app;
  } catch(err) {
    console.log(`An unexpected error has occurred! ${err}`);
    return;
  }
}

module.exports = main();