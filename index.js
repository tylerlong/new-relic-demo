const rn = require('newrelic');
const express = require('express');


const app = express();
app.get('/', function (req, res) {
  res.status(500).send('server side error');
});
app.get('/hello', function (req, res) {
  res.send('world');
});
app.listen(3000);
