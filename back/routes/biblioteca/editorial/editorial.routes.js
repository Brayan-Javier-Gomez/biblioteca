const express = require('express');
const app = express();
const editorialModel = require('../../../models/editorial.model')



app.use(require('./get.editorial'))

app.use(require('./post.editorial'))

app.use(require('./update.editorial'))

app.use(require('./delete.editorial'))




module.exports = app;