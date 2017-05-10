var workorderCore = require('fh-wfm-workorder/lib/client');
var workflowCore = require('fh-wfm-workflow/lib/client');
var resultCore = require('fh-wfm-result/lib/client');
var fileCore = require('fh-wfm-file/lib/client');
var userCore = require('fh-wfm-user/lib/client');
var $fh = require('fh-js-sdk');
var isAuthenticated = false;


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
      isAuthenticated = false;
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
  fileCore(mediator, {}, $fh);
  userCore(mediator, {forceSessionVerificationOnResume: true});
}


/**
 *
 * Monitoring any changes in the state to verify that the user
 * @param $rootScope
 * @param $state
 * @param userClient
 */
function verifyLoginOnStateChange($rootScope, $state, userClient) {

  $rootScope.ready = false;

  function clearAndRedirectToLogin(err) {

    if (err) {
      console.error("Error verifying session ", err);
    }

    userClient.clearSession().then(function() {
      $state.go('app.login');
    });
  }

  $rootScope.$on('$stateChangeStart', function(e, toState, toParams) {

    //If the session is valid, or accessing the login page, then the transition is valid
    if (isAuthenticated || toState.name === "app.login") {
      $rootScope.ready = true;
      return;
    }

    //Preventing the route from executing. Verifying that the session is valid first.
    e.preventDefault();

    userClient.verifySession().then(function(validSession) {
      //If the session is not valid, clear the user data and redirect to login
      if (!validSession) {
        isAuthenticated = false;
        clearAndRedirectToLogin();
      } else {

        //The session is valid, proceed to the requested state.
        isAuthenticated = true;

        if (toState && toParams) {
          $state.go(toState, toParams, {reload: true});
        }
      }

    }).catch(clearAndRedirectToLogin);
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
  .run(['$rootScope', '$state', 'userClient', verifyLoginOnStateChange]);
