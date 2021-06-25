const express = require('express');

const app = express();

const editorialModel = require('../../../models/editorial.model')


app.post('/editorial', (req, res) => {

    let body = req.body;

    let editorial = new editorialModel({

        name: body.name,
        adress: body.adress,
        phone_number: body.phone_number,
        email: body.email,
        max_limit: body.max_limit,
        libros: body.libros

    })

    editorial.save((err, editorial) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        if (!editorial) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Error al registrar editorial"
                }
            })
        }

        res.json({
            ok: true,
            editorial_registrado: editorial
        })

    })




})


module.exports = app