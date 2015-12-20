var express = require('express'),
  app = express(),
  path = require('path');

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/eer.html');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
