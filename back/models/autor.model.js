const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const autorModel = new Schema({

    name: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    city: {
        type: String
    },
    email: {
        type: String
    }



})

module.exports = mongoose.model('Autor', autorModel);