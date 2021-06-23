const express = require('express');
const app = express();
const autorModel = require('../../../models/autor.model')


app.delete('/autor/:id', (req, res) => {

    let id = req.params.id;

    autorModel.findByIdAndDelete(id, (err, autor_eliminado) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        if (!autor_eliminado) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "No se ha encontrado el autor"
                }
            })
        }

        res.json({
            ok: true,
            autor_eliminado: autor_eliminado
        })



    })

})



module.exports = app;