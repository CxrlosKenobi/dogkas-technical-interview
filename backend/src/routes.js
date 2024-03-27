const servicesRoutes = require('./routes/services.routes')
const serviceController = require('./controllers/services.controller')

module.exports = {
  initRoutes: app => {
    app.use('/services', servicesRoutes.init(serviceController));
  }
}