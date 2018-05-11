module.exports.add = function(app, request, response) {

  var connDB = require('../../config/db.js')();
  var postsModel = new app.app.models.postsModel(connDB);
  postsModel.add(request, response);
}

module.exports.update = function(app, id, request, response) {

  var connDB = require('../../config/db.js')();
  var postsModel = new app.app.models.postsModel(connDB);
  postsModel.update(id, request, response);
}

module.exports.delete = function(app, id, request, response) {

  var connDB = require('../../config/db.js')();
  var postsModel = new app.app.models.postsModel(connDB);
  postsModel.delete(id, request, response);    
}

module.exports.view = function(app, request, response) {

  var connDB = require('../../config/db.js')();
  var postsModel = new app.app.models.postsModel(connDB);
  postsModel.view(request, response);
}
