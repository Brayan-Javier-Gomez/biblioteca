const express = require('express');

const app = express();

const editorialModel = require('../../../models/editorial.model')


app.get('/editorial', (req, res) => {

    editorialModel.find({})
        .exec((err, editoriales) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }

            if (!editoriales) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: "Error al registrar editorial"
                    }
                })
            }

            res.json({
                ok: true,
                editoriales: editoriales
            })



        })

});

app.get('/editorial/:id', (req, res) => {

    let id = req.params.id;


    editorialModel.findOne({ _id: id }, (err, editorial) => {
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
            editorial: editorial
        })
    })

})


module.exports = app