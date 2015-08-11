'use strict';

var http = require('http')
  , express = require('express')
  , app = express()
  , port = 8081
  , ip = '0.0.0.0'
  ;

app.set('port', port);
app.set('base url', ip);
app.use(express.static(__dirname));

var server = http.createServer(app);
server.listen(port, ip);
console.log('Serving www/ on ' + ip + ':' + port);
