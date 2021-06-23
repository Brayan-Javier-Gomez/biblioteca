const express = require('express');
const app = express();
const libroModel = require('../../../models/libro.model')

app.use(require('./get.libro'))

app.use(require('./post.libro'))




app.use(require('./delete.libro'))




module.exports = app;