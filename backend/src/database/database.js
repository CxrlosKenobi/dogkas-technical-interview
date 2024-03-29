const Knex = require('knex')
const path = require('path');
const config = {
  client: 'mysql2',
  connection: {
    host: 'dogkas-services-technical-test-mysql',
    user: 'root',
    password: 'root',
    database: 'main'
  },
  migrations: {
    directory: path.join(__dirname, 'database', 'migrations')
  },
  seeds: {
    directory: path.join(__dirname, 'database', 'seeds')
  }
}
const knexPrincipal = Knex(config);

module.exports = {
  initDatabase: app => {
    app.set('database', knexPrincipal);
    knexPrincipal.raw('SELECT 1+1').then((response) => {
      console.log('Database connection to SQLite3 has been established successfully.')
    }, (error) => {
      console.error('Unable to connect to the database: ', error);
    })
  },
  config: config
}
