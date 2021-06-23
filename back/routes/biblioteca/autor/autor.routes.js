const express = require('express');
const app = express();


app.use(require('./post.autor'))

app.use(require('./get.autor'))

app.use(require('./update.autor'))

app.use(require('./delete.autor'))

module.exports = app