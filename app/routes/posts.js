module.exports = function(app) {

  app.post('/posts/add', function(request, response) {

    app.app.controllers.posts.add(app, request, response);
  });

  app.put('/posts/update/:id', function(request, response) {

    var id = request.params.id;
    app.app.controllers.posts.update(app, id, request, response);
  });

  app.get('/posts/view', function(request, response) {

    app.app.controllers.posts.view(app, request, response);
  });

  app.delete('/posts/delete/:id', function(request, response) {

    var id = request.params.id;
    app.app.controllers.posts.delete(app, id, request, response);
  });
}
