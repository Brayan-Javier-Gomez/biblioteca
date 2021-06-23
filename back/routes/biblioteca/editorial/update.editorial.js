const express = require('express');

const app = express();

const editorialModel = require('../../../models/editorial.model')


app.put('/editorial/:id', (req, res) => {

    let id = req.params.id
    let body = req.body

    editorialModel.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, editorial) => {


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
                    message: "No se ha actualizado la editorial"
                }
            })
        }

        res.json({
            ok: true,
            editorial_actualizada: editorial
        })


    })
})



module.exports = app