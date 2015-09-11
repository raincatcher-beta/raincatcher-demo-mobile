'use strict';

var _ = require('lodash');
var Mediator = require('mediator-js').Mediator;
var q = require('q');

var mediator = new Mediator();

mediator.promise = function(topic) {
  var deferred = q.defer();
  mediator.once(topic, function(data) {
    deferred.resolve(data);
  });
  return deferred.promise;
}

module.exports = mediator;
