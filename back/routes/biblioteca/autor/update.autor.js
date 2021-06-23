const express = require('express');
const app = express();
const autorModel = require('../../../models/autor.model')



app.put('/autor/:id', (req, res) => {

    let id = req.params.id
    let body = req.body

    autorModel.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, autor) => {


        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        if (!autor) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "No se ha actualizado el autor"
                }
            })
        }

        res.json({
            ok: true,
            autor_actualizado: autor
        })


    })

})



module.exports = app