module.exports.index = function(app, imagem, request, response) {

  var fs = require('fs');

  fs.readFile('./app/public/uploads/' + imagem, function(error, content) {

    if(error) {
      response.status(404).json(error);
      return;
    }

    response.writeHead(200, {'content-type': 'image/jpg'});
    response.end(content);
  });
};
