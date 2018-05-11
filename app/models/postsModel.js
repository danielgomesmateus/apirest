function postsModel(connDB) {
  this._connDB = connDB;
}

postsModel.prototype.view = function(request, response) {

  var data = {
    option: 'view_posts',
    collection: 'posts',
    callback: function(error, result) {

      if(error) {
        response.status(500).send("Erro ao buscar informações");
      }
      else {
        response.status(200).send(result);
      }
    }
  };
  this._connDB(data);
}

postsModel.prototype.add = function(request, response) {

  var fs = require('fs');
  var fsx = require('fs-extra');

  var date = new Date();
  var timestamp = date.getTime();

  var nameImage = timestamp + '_' + request.files.arquivo.originalFilename;

  var pathSource = request.files.arquivo.path;
  var pathDestiny = './app/public/uploads/' + nameImage;

  fsx.move(pathSource, pathDestiny, function(error) {

    if(error) {

      request.status(500).json({error: error});
      return;
    }
  });

  var data = {
    option: 'add_posts',
    data: {
      titulo: request.body.titulo,
      imagem: nameImage
    },
    collection: 'posts',
    callback: function(error, result) {

      if(error) {
        response.status(500).send("Erro ao salvar informações");
      }
      else {
        response.status(200).send("Informações salvas com sucesso!");
      }
    }
  };
  this._connDB(data);
};

postsModel.prototype.update = function(id, request, response) {

  var data = {
    option: 'update_post',
    data: {
      id: id,
      comment: request.body.content
    },
    collection: 'posts',
    callback: function(error, result) {

      if(error) {
        response.status(500).end();
      }
      else {
        response.status(200).end();
      }
    }
  };
  this._connDB(data);
};

postsModel.prototype.delete = function(id, request, response) {

  var data = {
    option: 'delete_comment_post',
    data: {
      id: id,
    },
    collection: 'posts',
    callback: function(error, result) {

      if(error) {
        response.status(500).end();
      }
      else {
        response.status(200).end();
      }
    }
  };
  this._connDB(data);
};

module.exports = function() {
  return postsModel;
}
