const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')
const app = express();


app.use(express.json())

app.use(cors())

app.use(express.urlencoded({ extended: false }))

//configuracion de variables de entorno
require('./config')

//importa rutas de la aplicacion
app.use(require('../routes/biblioteca/index.routes'))

//coneccion con mongoDB
mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
    }

    console.log('Base de datos iniciada puerto 27017');

});

app.use(express.static(__dirname + "/production/biblioteca"));

app.get('*', (req, res) => {

    res.sendFile(path.resolve(__dirname + "/production/biblioteca/index.html"))

});




app.listen(process.env.PORT, () => {

    console.log(`servidor iniciado puerto: ${process.env.PORT}`);

})