'use strict';

module.exports = 'wfm-mobile.messages';

angular.module('wfm-mobile.messages', [
  'ui.router'
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.message', {
      url: '/messages',
      views: {
        content: {
          templateUrl: 'app/message/message-list.tpl.html',
          controller: 'MessagesCtrl as ctrl',
          resolve: {
            messages: function(messageManager) {
              return messageManager.list();
            }
          }
        }
      }
    })
    .state('app.message-detail', {
      url: '/message/:messageId',
      views: {
        content: {
          templateUrl: 'app/message/message-detail.tpl.html',
          controller: 'MessageDetailController as ctrl',
          resolve: {
            message: function($stateParams, messageManager) {
              return messageManager.read($stateParams.messageId);
            }
          }
        }
      }
    });
})
.run(function($state, mediator) {
  mediator.subscribe('wfm:message:selected', function(message) {
    $state.go('app.message-detail', {
      messageId: message.id
    });
  });
})
.controller('MessagesCtrl', function($scope, $filter, mediator, messages) {
  var self = this;
  self.messages = messages;
})
.controller('MessageDetailController', function($scope, $state, mediator, message, messageManager) {
  mediator.subscribeForScope('wfm:message:close:' + message.id, $scope, function() {
    $state.go('app.message');
  });
  var self = this;
  self.message = message;
  message.status = "read";
  messageManager.update(message);
})
;

module.exports = 'wfm-mobile.messages';
