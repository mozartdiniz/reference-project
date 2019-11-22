var express = require('express');
var cors = require('cors');
var fs = require('fs');
var app = express();

app.use(cors());

app.get('/micro-app.js', function(req, res, next) {
  fs.readFile('../micro-app/dist/micro-app.js', 'utf8', function(
    err,
    contents
  ) {
    res.send(contents);
  });
});

app.listen(8000, function() {
  console.log('CORS-enabled web server listening on port 8000');
});
