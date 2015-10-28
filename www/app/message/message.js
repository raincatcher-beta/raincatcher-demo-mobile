'use strict';

module.exports = 'wfm-mobile.messages';

angular.module('wfm-mobile.messages', [
  'ui.router',
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.messages', {
        url: '/messages',
        templateUrl: 'app/message/message-list.tpl.html',
        controller: 'MessagesCtrl as ctrl',
      })
})

.controller('MessagesCtrl', function() {
})
;
