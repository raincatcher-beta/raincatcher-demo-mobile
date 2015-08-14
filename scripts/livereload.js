'use strict';

var lr = require('tiny-lr');
var watch = require('node-watch');
var path    = require('path');
var _ = require('lodash');

var server = lr();
var paths = _.map(['www', 'server', 'portal'], function(folder) {
  return __dirname + '/../' + folder;
});
_.each(paths, function(folder) {
  console.log('Livereload is watching folder', folder);
  watch(folder, function(file) {
    var relativePath = path.relative(folder, file);
    console.log('Livereload observed file change', relativePath);
    server.changed(({body:{files:[relativePath]}}));
  })
});
var port = 35729;
server.listen(port, function() {
  console.log('... Listening on %s ...', port);
});
