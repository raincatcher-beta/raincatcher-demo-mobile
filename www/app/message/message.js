'use strict';
var angular = require('angular');
require('angular-timeago')

angular.module('wfm-mobile.message', ['ui.router', 'yaru22.angular-timeago'])

.config(function($stateProvider) {
  $stateProvider
    .state('tab.messages', {
      url: '/messages',
      views: {
        'tab-messages': {
          templateUrl: 'app/message/tab-messages.tpl.html',
          controller: 'MessagesCtrl as ctrl'
        }
      }
    })
})

.controller('MessagesCtrl', function(timeAgo) {
  timeAgo.settings.fullDateAfterSeconds = 60 * 60 * 12;
  var now = new Date();
  var today = new Date(now.getTime());
  today.setMinutes(now.getMinutes() - 20);
  var yesterday = new Date(now.getTime());
  yesterday.setDate(now.getDate() - 1);
  this.messages = [
    {
      subject: 'Update to address for Job No - 1276001000',
      sender: 'Fritz Ogden',
      date: today,
      content: 'Repairs to drive on Mandrake Avenue are now at 112 Peak Place 500m north if existing position.',
      new: true
    },
    {
      subject: 'Image Update',
      sender: 'Damien Dornan',
      date: yesterday,
      content: 'Please review the attached image of damage to kerb.',
      new: true
    },
    {
      subject: 'Please Update Status',
      sender: 'Fritz Ogden',
      date: new Date(now).setDate(now.getDate() - 5),
      content: 'Can you please update your current status on Job No - 1276021 as soon as possible.  It looks...',
      new: false
    }
  ];
})
;

module.exports = 'wfm-mobile.message';
