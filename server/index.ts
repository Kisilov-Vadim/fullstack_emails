const express = require('express');

const {PORT} = require('./constants.ts');

const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there'})
})

app.listen(PORT);
