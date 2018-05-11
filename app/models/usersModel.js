function usersModel(connDB) {
  this._connDB = connDB;
}

usersModel.prototype.index = function(request, response) {

  var data = {
    option: 'index',
    collection: 'users',
    callback: function(error, result) {

      if(error) {
        response.status(404).send({status: 0, message: 'Erro ao buscar informações!'});
      }
      else {
        response.status(200).send({status: 1, data: result});
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
        response.status(404).send({status: 0, data: {message: 'Usuário não encontrado!'}});
      }
      else {
          response.status(200).send({status: 1, data: result});
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
        response.status(500).send({status: 0, message: 'Erro ao gravar informações!'});
      }
      else {
        response.status(200).send({status: 1, message: 'Dados gravados com sucesso!'});
      }
    }
  };
  this._connDB(data);
};

usersModel.prototype.update = function(request, response, params) {

  var data = {
    option: 'update',
    id: request.params.id,
    data: params,
    collection: 'users',
    callback: function(error, result) {

      if(error) {
        response.status(500).send({status: 0, message: 'Erro ao atualizar informações!'});
      }
      else {
        response.status(200).send({status: 1, message: 'Dados atualizados com sucesso!'});
      }
    }
  };
  this._connDB(data);
}

usersModel.prototype.remove = function(request, response) {

  var data = {
    option: 'remove',
    id: request.params.id,
    collection: 'users',
    callback: function(error, result) {

      if(error) {
        response.status(500).send({status: 0, message: 'Erro ao apagar registro!'});
      }
      else {
        response.status(200).send({status: 1, message: 'Registro apagado com sucesso!'});
      }
    }
  };
  this._connDB(data);
}

module.exports = function() {

  return usersModel;
}
