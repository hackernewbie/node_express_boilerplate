const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('This is a Sample Node-Express App ⚡️');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});