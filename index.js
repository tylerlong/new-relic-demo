const rn = require('newrelic');
const express = require('express');


const app = express();
app.get('/', function (req, res) {
  res.status(500).send('Page will be reload soon. <script>setTimeout(function() { location.reload(); }, 10000);</script>');
});
app.get('/hello', function (req, res) {
  res.send('world');
});
app.listen(3000);
