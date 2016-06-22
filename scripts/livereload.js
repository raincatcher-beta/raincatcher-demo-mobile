'use strict';

var lr = require('tiny-lr');
var watch = require('node-watch');
var path    = require('path');
var _ = require('lodash');

var filter = function(pattern, fn) {
  return function(file) {
    if (pattern.test(file)) {
      fn(file);
    }
  }
}

var server = lr();
var paths = _.map(['www', 'server', 'portal'], function(folder) {
  return __dirname + '/../' + folder;
});
_.each(paths, function(folder) {
  console.log('Livereload is watching folder', folder);
  watch(folder, filter(/(\.html|\.css|\.js)$/, function(file) {
    var relativePath = path.relative(folder, file);
    if (relativePath.indexOf('..') !== 0) {
      console.log('Livereload observed file change', relativePath);
      server.changed(({body:{files:[relativePath]}}));
    };
  }))
});
var port = 35729;
server.listen(port, function() {
  console.log('... Listening on %s ...', port);
});
