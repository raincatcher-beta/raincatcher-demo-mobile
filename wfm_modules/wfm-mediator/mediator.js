'use strict';

var _ = require('lodash');

var mediator = {};

var channels = {};
var subscriberId = 0;

mediator.publish = function(channel, publisher, data) {
  if (! hasSubscriber(channel)) {
    console.log('No subscriber for:', channel, publisher, data);
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
      console.error(e, publisher, subscriber.name)
    }
  });
};

mediator.subscribe = function(channel, subscriber, callback) {
  return subscribe(channel, subscriber, false, callback);
};

mediator.subscribeOnce = function(channel, subscriber, callback) {
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

module.exports = mediator;
