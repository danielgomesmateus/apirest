var app = require('./config/server.js')();

app.listen('8000', function() {
  console.log("SERVIDOR ON - localhost:8000");
});
