var angular = require('angular');
require('angular-animate')
require('angular-sanitize')
require('angular-ui-router')
require('../lib/ionic/js/ionic')
require('../lib/ionic/js/ionic-angular')

angular.module('wfm-mobile', [
  'ionic'
, require('./workorder/workorder')
, require('./workflow/workflow')
, require('./message/message')
, require('./calendar/calendar')
, require('./setting/setting')

, require('wfm-mediator')
, require('wfm-workorder')
, require('wfm-risk-assessment')
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom'); // other values: top
})

.config(function($stateProvider, $urlRouterProvider) {
  // if none of the states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/workorders');

  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'app/tabs.tpl.html'
    })
});
