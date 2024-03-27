const path = require('path');
module.exports = {
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'main'
  },
  migrations: {
    directory: path.join(__dirname, 'src', 'database', 'migrations')
  },
  seeds: {
    directory: path.join(__dirname, 'src', 'database', 'seeds')
  }
}