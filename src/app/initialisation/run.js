var workorderCore = require('fh-wfm-workorder/lib/client');
var workflowCore = require('fh-wfm-workflow/lib/client');
var resultCore = require('fh-wfm-result/lib/client');
var fileCore = require('fh-wfm-file/lib/client');
var userCore = require('fh-wfm-user/lib/client');
var $fh = require('fh-js-sdk');


/**
 *
 * Monitoring for changes in the logged in user.
 *
 * @param $rootScope
 * @param $state
 * @param mediator
 * @param syncPool
 */
function monitorUserProfileChange($rootScope, $state, mediator, syncPool) {
  mediator.subscribe('wfm:auth:profile:change', function(_profileData) {
    if (_profileData === null) { // a logout
      syncPool.removeManagers().then(function() {
        $state.go('app.login', undefined, {reload: true});
      }, function(err) {
        console.error(err);
      });
    } else {
      syncPool.syncManagerMap(_profileData)  // created managers will be cached
        .then(syncPool.forceSync)
        .then(function() {
          if ($rootScope.toState) {
            $state.go($rootScope.toState, $rootScope.toParams, {reload: true});
            delete $rootScope.toState;
            delete $rootScope.toParams;
          } else {
            $state.go('app.workorder', undefined, {reload: true});
          }
        });
    }
  });
}

/**
 * Initialising the core wfm modules
 * @param mediator
 */
function initCoreModules(mediator) {
  workorderCore(mediator);
  workflowCore(mediator);
  resultCore(mediator);
  fileCore(mediator,{},$fh);
  userCore(mediator);
}


/**
 *
 * Monitoring any changes in the state to verify that the user
 * @param $rootScope
 * @param $state
 * @param $q
 * @param mediator
 * @param userClient
 */
function verifyLoginOnStateChange($rootScope, $state, $q, mediator, userClient, $timeout) {

  var deferred = $q.defer();

  var initPromise = deferred.promise;

  //Registering a handler for when the fh-js-sdk is available
  $fh.ready(function(err) {
    $timeout(function() {
      $rootScope.ready = true;
      if (err) {
        deferred.reject(err);
      } else {
        deferred.resolve();
      }
    });
  });

  $rootScope.$on('$stateChangeStart', function(e, toState, toParams) {

    function clearAndRedirectToLogin(err) {
      console.log("clearAndRedirectToLogin", err);
      userClient.clearSession().then(function() {
        $rootScope.toState = toState;
        $rootScope.toParams = toParams;
        $state.go('app.login');
      });
    }

    if (toState.name !== "app.login") {
      initPromise.then(function() {
        return userClient.verifySession().then(function(validSession) {
          //If the session is not valid, clear the user data and redirect to login
          if (!validSession) {
            e.preventDefault();
            clearAndRedirectToLogin();
          }
        }).catch(clearAndRedirectToLogin);
      }).catch(function(err) {
        console.error("Error initialising fh-js-sdk", err);
      });
    }
  });

  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    console.error('State change error: ', error, {
      event: event,
      toState: toState,
      toParams: toParams,
      fromState: fromState,
      fromParams: fromParams,
      error: error
    });
    if (error['get stack']) {
      console.error(error['get stack']());
    }
    event.preventDefault();
  });
}


angular.module('wfm-mobile').run(['$rootScope', '$state', 'mediator', 'syncPool', monitorUserProfileChange])
  .run(['mediator', initCoreModules])
  .run(['$rootScope', '$state', '$q', 'mediator', 'userClient', '$timeout', verifyLoginOnStateChange]);
