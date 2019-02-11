const routes = require('express').Router()
const controller = require('../controllers/webhooks.controller')

routes.get('/', controller.get)

module.exports = routes