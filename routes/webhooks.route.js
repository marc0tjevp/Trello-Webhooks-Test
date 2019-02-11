const routes = require('express').Router()
const controller = require('../controllers/webhooks.controller')

routes.post('/', controller.post)
routes.get('/', controller.get)

module.exports = routes