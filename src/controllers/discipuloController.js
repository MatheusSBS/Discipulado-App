const { res, response } = require('express')

const Discipulo = require('../models/Discipulo')

module.exports = {
    async index(req, res) {
        try {
            const discipulos = await Discipulo.find()
            return response.status(200).json({ discipulos })
        } catch (err) {
            response.status(500).json({ error: err.message })
        }
    },
}