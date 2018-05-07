var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen('8000', function() {
  console.log("SERVIDOR ON - localhost:8000");
});

app.get('/', function(request, response) {
  response.send({msg: "Olá, humano!"});
});
