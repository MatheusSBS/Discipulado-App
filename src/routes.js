const express = require('express')
const routes = express.Router()

const discipuloController = require('./controllers/discipuloController')

routes.get('/', (req, res) => res.send('Hello Test'))
routes.get('/discipulos', discipuloController.index)

module.exports = routes