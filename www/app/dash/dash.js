angular.module('wfm-mobile.dash', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'app/dash/tab-dash.tpl.html',
          controller: 'DashCtrl'
        }
      }
    })
})

.controller('DashCtrl', function($scope) {})

;
