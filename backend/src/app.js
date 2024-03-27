const express = require('express')
const routes = require('./routes')
const db = require('./database/database')

const appServer = {
  enableCORS(app) {
    app.use((req, res, next) => {
      const allowedHeaders = `Origin, X-Requested-With, Content-Type, Accept, Authorization`;
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', allowedHeaders);
      res.header('Access-Control-Allow-Methods', 'OPTIONS, HEAD, GET, POST, PATCH, PUT, DELETE');
      next();
    });
  },
  initializeRoutes(app) {
    console.log('Routes are initializing...');
    routes.initRoutes(app);
  },
  initializeDatabase(app) {
    console.log('Database is initializing...');
    db.initDatabase(app);
  },
  startApplication() {
    console.log('Starting application...');
    const app = express();
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }));

    this.enableCORS(app);
    this.initializeRoutes(app);
    this.initializeDatabase(app);
    return app
  }
}

module.exports = appServer.startApplication();