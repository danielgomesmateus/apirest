function usersModel(connDB) {

  this._connDB = connDB;
}

usersModel.prototype.index = function(request, response) {

  var data = {
    option: 'index',
    collection: 'users',
    callback: function(error, result) {

      if(error) {
        response.send({status: 0, message: 'Erro ao buscar informações!'});
      }
      else {
        response.send({status: 1, data: result});
      }
    }
  };

  this._connDB(data);
};

usersModel.prototype.getById = function(request, response) {

  var data = {
    option: 'getById',
    data: request.params.id,
    collection: 'users',
    callback: function(error, result) {

      if(error) {
        response.send({status: 0, data: {message: 'Usuário não encontrado!'}});
      }
      else {
          response.send({status: 1, data: result});
      }
    }
  }

  this._connDB(data);
};

usersModel.prototype.add = function(request, response, params) {

  var data = {
    option: 'add',
    data: params,
    collection: 'users',
    callback: function(error, result) {

      if(error) {
        response.send({status: 0, message: 'Erro ao gravar informações!'});
      }
      else {
        response.send({status: 1, message: 'Dados gravados com sucesso!'});
      }
    }
  };

  this._connDB(data);
};

module.exports = function() {

  return usersModel;
}
