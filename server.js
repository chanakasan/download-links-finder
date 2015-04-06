var app = require('./app');

var server_port = 3000;
app.listen(server_port, function() {
   console.log('Listening on localhost:'+server_port);

   // In order for browser live-reload to work
   require('fs').writeFileSync('start.log', 'started');
});
