module.exports.index = function(app, request, response) {

    var connDB = require('../../config/db.js')();
    var usersModel = new app.app.models.usersModel(connDB);
    usersModel.index(request, response);
}

module.exports.getById = function(app, request, response) {

  var connDB = require('../../config/db.js')();
  var usersModel = new app.app.models.usersModel(connDB);
  usersModel.getById(request, response);  
}

module.exports.add = function(app, request, response) {

  var params = request.body;

  var connDB = require('../../config/db.js')();
  var usersModel = new app.app.models.usersModel(connDB);
  usersModel.add(request, response, params);
}
