const express = require('express')
const router = express.Router()

module.exports = {
  init: controller => {
    router.get('/', controller.listAvailableServices);
    router.get('/populate', controller.populateAndListServices);
    return router
  }
}
