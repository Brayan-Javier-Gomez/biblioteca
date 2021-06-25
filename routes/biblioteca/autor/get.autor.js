const express = require('express');
const app = express();
const autorModel = require('../../../models/autor.model')



app.get('/autor', (req, res) => {

    autorModel.find({}).exec((err, autores) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        if (!autores) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "No hay autores registrados"
                }
            })
        }

        res.json({
            ok: true,
            autores: autores
        })
    })

});

app.get('/autor/:id', (req, res) => {

    let id = req.params.id;

    autorModel.findOne({ _id: id }, (err, autor_id) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        if (!autor_id) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "No existe el autor"
                }
            })
        }

        res.json({
            ok: true,
            autor: autor_id
        })

    })

})


module.exports = app