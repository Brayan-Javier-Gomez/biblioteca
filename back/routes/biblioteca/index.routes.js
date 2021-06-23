const express = require('express');
const app = express();


app.use(require('./autor/autor.routes'));

app.use(require('./editorial/editorial.routes'));

app.use(require('./libro/libro.routes'));


module.exports = app