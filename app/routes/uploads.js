module.exports = function(app) {

  app.get('/images/:imagem', function(request, response) {

    var imagem = request.params.imagem;
    app.app.controllers.uploads.index(app, imagem, request, response);
  });
}
