'use strict';

var lr = require('tiny-lr');
var watch = require('watch');
var path    = require('path');
var _ = require('lodash');

var server = lr();
var paths = _.map(['www', 'server', 'portal'], function(folder) {
  return __dirname + '/../' + folder;
});
_.each(paths, function(folder) {
  console.log('Livereload is watching folder', folder);
  watch.watchTree(folder, function(file, prev, curr) {
    if (typeof file == "object" && prev === null && curr === null) {
      // Finished walking the tree
    } else {
      var relativePath = path.relative(folder, file);
      console.log('Livereload observed file change', relativePath);
      server.changed(({body:{files:[relativePath]}}));
    };
  })
});
var port = 35729;
server.listen(port, function() {
  console.log('... Listening on %s ...', port);
});
