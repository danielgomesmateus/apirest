module.exports = function(app) {

  app.get('/api', function(request, response) {

    app.app.controllers.users.index(app, request, response);
  });

  app.get('/api/user/:id', function(request, response) {

    app.app.controllers.users.getById(app, request, response);
  });

  app.put('/api/user/:id', function(request, response) {

    app.app.controllers.users.update(app, request, response);
  });

  app.delete('/api/user/:id', function(request, response) {

    app.app.controllers.users.remove(app, request, response);
  });

  app.post('/api', function(request, response) {

    app.app.controllers.users.add(app, request, response);
  });
}
