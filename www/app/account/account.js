angular.module('wfm-mobile.account', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'app/account/tab-account.tpl.html',
          controller: 'AccountCtrl'
        }
      }
    });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
