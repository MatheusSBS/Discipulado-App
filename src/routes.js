const express = require('express')
const routes = express.Router()

const discipuloController = require('./controllers/discipuloController')

routes.get('/discipulos', discipuloController.index)
routes.post('/discipulos', discipuloController.store)

module.exports = routes