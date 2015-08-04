'use strict';
(function (angular, _) {
  angular.module('wfm.core.mediator', ['ng'])

  .factory('Mediator', function MediatorService($log) {
    var Mediator = {};

    var channels = {};
    var subscriberId = 0;

    Mediator.publish = function(channel, publisher, data) {
      if (! hasSubscriber(channel)) {
        return;
      }

      var subscribers = channels[channel];

      _.map(subscribers, function(subscriber) {
        try {
          subscriber.callback(data);
        } catch (e) {
          $log.error(e, publisher, subscriber.name)
        }
      });
    };

    Mediator.subscribe = function(channel, subscriber, callback) {
      if (! hasSubscriber(channel)) {
        channels[channel] = [];
      }

      channels[channel].push({
        callback : callback ,
        name : subscriber ,
        subscriberId : ++subscriberId
      });

      return function() {
        unsubscribe(subscriberId);
      };
    };


    function hasSubscriber(channel) {
      return _.has(channels, channel);
    }


    function unsubscribe(subscriberId) {
      channels = _.map(channels, function(channel) {
        return _.filter(channel, function(subscriber) {
          return subscriber.subscriberId !== subscriberId;
        });
      });
    }

    return Mediator;
  });

}) (angular, _);
