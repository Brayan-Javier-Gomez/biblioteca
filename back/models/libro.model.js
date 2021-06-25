const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const libroSchema = new Schema({

    title: {
        type: String,

    },
    year: {
        type: String,

    },
    gender: {
        type: String,
    },
    pages: {
        type: Number
    },
    editorial: {
        type: Schema.Types.ObjectId,
        ref: 'Editorial'
    },
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'Autor'
    }

})

module.exports = mongoose.model('Libro', libroSchema);