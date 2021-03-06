var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var consign = require('consign');
var connectMultiparty = require('connect-multiparty');
var helmet = require('helmet');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.use(connectMultiparty());
app.use(helmet());

app.use(function(request, response, next) {

  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  response.setHeader('Access-Control-Allow-Headers', 'content-type');
  response.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

consign({})
  .include('/app/controllers')
  .then('app/models')
  .then('app/routes')
  .into(app);

module.exports = function() {
  return app;
}
