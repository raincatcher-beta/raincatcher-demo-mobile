'use strict';

var _ = require('lodash');
var html2js = require('ng-html2js');
var fs = require('fs');

function buildTemplates(moduleName) {
  if (!moduleName) {
    throw new Error('buildTemplates must be invoked with a moduleName parameter');
  }
  fs.readdir('wfm-templates', function(err, files) {
    fs.mkdir('lib', '0775', function(err) {
      if (err && err.code != 'EEXIST') {
        console.log(err);
        throw new Error(err);
      }
      _.each(files, function(file) {
        buildTemplate(moduleName, file);
      });
    });

  });
}

function buildTemplate(moduleName, file) {
  var template = 'wfm-templates/' + file;
  var inputFile =  './' + template;
  var outputFile = 'lib/' + file + '.js';
  var moduleVar = 'ngModule';

  console.log('Processing template:', inputFile);

  fs.readFile(inputFile, 'utf8', function(err, content) {
    var inputAlias = template;
    inputAlias = inputAlias.replace(/\\/g, '/');
    var output = html2js(inputAlias, content, moduleName, moduleVar);

    if (outputFile) {
      fs.writeFile(outputFile, output, 'utf8', function(err) {
        if (err) {
          console.log(err);
        }
      });
    }
  });
}

module.exports = buildTemplates;
