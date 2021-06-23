const express = require('express');
const app = express();
const libroModel = require('../../../models/libro.model')
const editorialModel = require('../../../models/editorial.model')
const autorModel = require('../../../models/autor.model')







app.post('/libro', (req, res) => {

    const body = req.body


    editorialModel.find({ name: body.editorial }, (err, idEdit) => {


        if (err) {
            return res.status(400).json({
                ok: false,
                err: 'La editorial no esta registrada'
            })
        }
        if (!idEdit) {
            return res.status(404).json({
                ok: false,
                message: 'La editorial no esta registrada '
            })
        }

        if (!idEdit[0]) {
            return res.status(404).json({
                ok: false,
                message: 'La editorial no ha sido registrada'
            })
        }

        if (idEdit[0].libros >= idEdit[0].max_limit && idEdit[0].max_limit != -1) {
            return res.status(400).json({
                ok: false,
                message: 'No es posible agregar mas libros, se ha alcanzado el limite'
            })
        }


        let ed_id = idEdit[0]._id

        autorModel.find({ name: body.autor }, (err, autor) => {

            if (!autor[0]) {
                return res.status(404).json({
                    ok: false,
                    message: 'El autor no ha sido registrado'
                })

            }

            let aut_id = autor[0]._id
            let n_libros = idEdit[0].libros
            console.log(n_libros);

            let libro = new libroModel({

                title: body.title,
                year: body.year,
                gender: body.gender,
                pages: body.pages,
                editorial: ed_id,
                autor: aut_id

            })

            data = {
                name: idEdit[0].name,
                adress: idEdit[0].adress,
                email: idEdit[0].email,
                libros: n_libros + 1
            }

            editorialModel.findByIdAndUpdate(ed_id, data, { new: true }, (err, editada) => {
                console.log(editada);
            })



            libro.save((err, libro) => {

                if (err) {
                    console.log(err);
                }

                if (!libro) {
                    return res.status(400).json({
                        ok: false,
                        message: 'No se registro el libro'
                    })
                }


                res.json({
                    ok: true,
                    libro: libro
                })

            })



        })








    })










})



module.exports = app