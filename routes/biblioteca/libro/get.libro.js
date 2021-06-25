const express = require('express');
const app = express();
const libroModel = require('../../../models/libro.model')



app.get('/libros', (req, res) => {

    libroModel.find({})
        .populate('editorial')
        .populate('autor')
        .exec((err, libros) => {
            if (!libros) {
                return res.status(404).json({
                    ok: false,
                    message: 'No hay libros registrados'
                })
            }

            res.json({
                ok: true,
                libros: libros
            })
        })

});

app.get('/libros/:id', (req, res) => {

    let id = req.params.id

    libroModel.findOne({ _id: id })
        .populate('editorial')
        .populate('autor')
        .exec((err, libro) => {
            if (!libro) {
                return res.status(404).json({
                    ok: false,
                    message: 'No hay libros registrados'
                })
            }

            res.json({
                ok: true,
                libro: libro
            })

        })

})



module.exports = app