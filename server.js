var app = require('./app');

var server_port = 3000;
app.listen(server_port, function() {
   console.log('Listening on localhost:'+server_port); 
});
