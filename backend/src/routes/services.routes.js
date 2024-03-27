const express = require('express')
const router = express.Router()

module.exports = {
  init: controller => {
    router.get('/', controller.listAvailableServices)
    return router
  }
}
