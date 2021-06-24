const express = require('express');
const app = express();


app.use(require('./get.libro'))

app.use(require('./post.libro'))

app.use(require('./search.libro'))

app.use(require('./delete.libro'))




module.exports = app;