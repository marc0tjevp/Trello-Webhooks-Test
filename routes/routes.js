const routes = require('express').Router()
const webhook_routes = require('./webhooks.route')

routes.get('/', (req, res) => res.status(200).json({"messsage": "Hello World!"}))
routes.use('/webhooks', webhook_routes)
routes.use('*', (req, res) => res.status(404).json({"message": "Not found"}).end())

module.exports = routes