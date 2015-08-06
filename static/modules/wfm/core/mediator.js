'use strict';
(function (angular, _) {
  angular.module('wfm.core.mediator', ['ng'])

  .factory('Mediator', function MediatorService($log) {
    var Mediator = {};

    var channels = {};
    var subscriberId = 0;

    Mediator.publish = function(channel, publisher, data) {
      if (! hasSubscriber(channel)) {
        $log.debug('No subscriber for:', channel, publisher, data);
        return;
      }

      var subscribers = channels[channel];

      _.map(subscribers, function(subscriber) {
        try {
          subscriber.callback(data);
          if (subscriber.single) {
            unsubscribe(subscriber);
          };
        } catch (e) {
          $log.error(e, publisher, subscriber.name)
        }
      });
    };

    Mediator.subscribe = function(channel, subscriber, callback) {
      return subscribe(channel, subscriber, false, callback);
    };

    Mediator.subscribeOnce = function(channel, subscriber, callback) {
      return subscribe(channel, subscriber, true, callback);
    };

    function subscribe(channel, subscriber, single, callback) {
      if (! hasSubscriber(channel)) {
        channels[channel] = [];
      }

      var subscription = {
        callback: callback,
        channel: channel,
        name: subscriber,
        single: single,
        subscriberId: ++subscriberId
      }

      channels[channel].push(subscription);

      return {
        channel: channel,
        unsubscribe: function() {
          unsubscribe(subscription);
        }
      }
    };


    function hasSubscriber(channel) {
      return _.has(channels, channel) && channels[channel].length > 0;
    }


    function unsubscribe(subscription) {
      channels = _.mapValues(channels, function(channel) {
        return _.filter(channel, function(_subscription) {
          return _subscription.subscriberId !== subscription.subscriberId;
        });
      });
    }

    return Mediator;
  });

}) (angular, _);
