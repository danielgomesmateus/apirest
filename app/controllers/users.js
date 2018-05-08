module.exports.index = function(app, request, response) {

    var connDB = require('../../config/db.js')();
    var usersModel = new app.app.models.usersModel(connDB);
    usersModel.index(request, response);
}

module.exports.getById = function(app, request, response) {

  if(request.params.id == "" || request.params.id == undefined) {
    request.response({status: 0, message: 'Identificador inválido!'});
    return;
  }

  var connDB = require('../../config/db.js')();
  var usersModel = new app.app.models.usersModel(connDB);
  usersModel.getById(request, response);
}

module.exports.update = function(app, request, response) {

  if(request.params.id == "" || request.params.id == undefined) {
    request.response({status: 0, message: 'Identificador inválido!'});
    return;
  }

  var params = request.body;

  var connDB = require('../../config/db.js')();
  var usersModel = new app.app.models.usersModel(connDB);
  usersModel.update(request, response, params);
}

module.exports.remove = function(app, request, response) {

  if(request.params.id == "" || request.params.id == undefined) {
    request.response({status: 0, message: 'Identificador inválido!'});
    return;
  }

  var connDB = require('../../config/db.js')();
  var usersModel = new app.app.models.usersModel(connDB);
  usersModel.remove(request, response);
}

module.exports.add = function(app, request, response) {

  request.assert('name', 'Informe o nome completo!').notEmpty();
  request.assert('age', 'Informe a idade!').notEmpty();
  request.assert('country', 'Informe o país de origem!').notEmpty();
  request.assert('state', 'Informe o estado de origem').notEmpty();

  var errors = request.validationErrors();

  if(errors) {
    response.send({status: 0, errors: errors});
    return;
  }

  var params = request.body;

  var connDB = require('../../config/db.js')();
  var usersModel = new app.app.models.usersModel(connDB);
  usersModel.add(request, response, params);
}
