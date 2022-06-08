const { res, response } = require('express')
const { v4: uuid } = require('uuid')
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

    async store(req, res) {
        const { nome, data_de_nascimento } = req.body

        if( !nome || !data_de_nascimento ) {
            return response.status(400).json( error: "Missing nome or data de nascimento.")
        }

        const discipulo = new Discipulo({
            _id: uuid(),
            nome,
            data_de_nascimento,
            foto,
            sobre,
        })
        try {
            await discipulo.save()

            return response.status(201).json({message:'Discipulo added succesfully' })
        } catch {
            res.status(400).json({ error: err.message })
        }

    },
}