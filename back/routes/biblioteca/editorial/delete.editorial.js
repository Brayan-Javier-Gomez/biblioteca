const express = require('express');

const app = express();

const editorialModel = require('../../../models/editorial.model')


app.delete('/editorial/:id', (req, res) => {

    let id = req.params.id

    editorialModel.findByIdAndDelete(id, (err, editorial) => {


        if (!editorial) {
            return res.status(400).json({
                ok: false,
                message: 'No se ha encontrado la editorial'
            })
        }

        res.json({
            ok: true,
            editorial_eliminada: editorial
        })


    })

})



module.exports = app