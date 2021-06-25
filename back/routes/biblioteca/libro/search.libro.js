const express = require('express');
const app = express();
const libroModel = require('../../../models/libro.model')



app.get('/search/:query', (req, res) => {

    query = req.params.query

    console.log(query);

    libroModel.find({ $or: [{ 'year': query }, { 'title': query }, { 'autor.name': query }] })
        .populate('autor')
        .exec((err, search) => {


            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }


            if (!search) {
                return res.status(404).json({
                    ok: false,
                    error: {
                        message: 'No se han encontrado'
                    }
                })
            }

            res.json({
                ok: true,
                result: search
            })


        })

})





module.exports = app;