const express = require('express');

const app = express();

const libroModel = require('../../../models/libro.model')


app.delete('/libro/:id', (req, res) => {

    let id = req.params.id

    libroModel.findByIdAndDelete(id, (err, editorial) => {


        if (!editorial) {
            return res.status(400).json({
                ok: false,
                message: 'No se ha encontrado el libro'
            })
        }



        res.json({
            ok: true,
            libro_eliminado: editorial
        })


    })

})



module.exports = app