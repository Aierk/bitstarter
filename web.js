var express = require('express');

var app = express.createServer(express.logger());

var respuesta;
var fs = require('fs');
fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  respuesta = data.toString();
});

app.get('/', function(request, response) {
  response.send(respuesta);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
