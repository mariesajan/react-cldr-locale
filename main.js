var express = require('express');
var app = express();
var delimiters = require('./src/delimiters');
var path = require('path');

app.use('/', express.static(path.join("app", "public")));

app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, "app", "public", "index.html"));
});

app.get('/json', function(req, res, next) {
  res.json(delimiters);
});

app.listen(process.env.PORT || 3000, function() {
  console.log('Listening to port 3000....');
});
