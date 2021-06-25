const express = require('express');
const app = express();
const autorModel = require('../../../models/autor.model')


app.post('/autor', (req, res) => {

    let body = req.body;

    let data_autor = new autorModel({
        name: body.name,
        year: body.year,
        city: body.city,
        email: body.email
    })

    data_autor.save((err, autor) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        if (!autor) {
            return res.json({
                ok: false,
                err: {
                    message: "No se ha registrado el autor"
                }
            })
        }

        res.json({
            ok: true,
            autor_registrado: autor
        })


    })
})

module.exports = app