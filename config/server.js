var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

consign({})
  .include('/app/controllers')
  .then('app/models')
  .then('app/routes')
  .into(app);

module.exports = function() {
  return app;
}
