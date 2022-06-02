const mongoose = require('mongoose')

const discipuloSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    data_de_nascimento: {
        trype: Date,
        required: true,
    },
    foto: {
        type: String,
    },
    sobre: {
        type: String,
    },
})

module.exports = mongoose.model('Discipulo', discipuloSchema)
