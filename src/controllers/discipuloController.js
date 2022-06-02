const { res } = require('express')

const Discipulo = require('../models/Discipulo')

module.exports = {
    async index(req, res) {
        try {
            const discipulos = await Discipulo.find()
            return res.status(200).json({ discipulos })
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    },
}