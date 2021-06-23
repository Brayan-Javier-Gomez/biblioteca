const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const editorialModel = new Schema({

    name: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
    },
    email: {
        type: String,
        required: true
    },
    max_limit: {
        type: Number,
        default: -1
    },
    libros: {
        type: Number
    }


})

module.exports = mongoose.model('Editorial', editorialModel);