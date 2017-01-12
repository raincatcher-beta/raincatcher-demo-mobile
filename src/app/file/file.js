'use strict';

module.exports = 'wfm-mobile.file';

angular.module('wfm-mobile.file', [
  'ui.router',
  'wfm.core.mediator'
])

  .config(function($stateProvider) {
    $stateProvider
      .state('app.file', {
        url: '/files',
        templateUrl: 'app/file/file-list.tpl.html',
        controller: 'FileController as ctrl',
        resolve: {
          profileData: function(userClient) {
            return userClient.getProfile();
          },
          files: function(fileClient, profileData) {
            return fileClient.list(profileData.id);
          }
        }
      })
      .state('app.file.detail', {
        url: '/file/:fileUid',
        template: '<h1>dsdsfsdfdsfsdfsd</h1>',
        controller: 'FileDetailController as ctrl',
        resolve: {
          file: function($stateParams, files) {
            var yoke =  files.filter(function(file) {
              console.log('>>>>> resolve file');
              return file.uid === $stateParams.fileUid;
            })[0];
            console.log('>>>>>> resolved file ' ,yoke);
            return yoke;
          }
        }
      });
  })

  .controller('FileDetailController', function($state, file) {
    console.log('FileDetailController', file);
  })
  .controller('FileController', function($state, $window, $mdDialog, mobileCamera, desktopCamera, fileClient, files, profileData) {
    var self = this;
    self.files = files.slice().reverse();
    var captureThenUpload = function() {
      if ($window.cordova) {
        return mobileCamera.capture()
          .then(function(capture) {
            return fileClient.uploadFile(profileData.id, capture.fileURI, {fileName: capture.fileName}).then(mobileCamera.clearCache);
          });
      } else {
        return desktopCamera.capture()
          .then(function(dataUrl) {
            return fileClient.uploadDataUrl(profileData.id, dataUrl);
          });
      }
    };

    self.capturePhoto = function() {
      captureThenUpload().then(function() {
        console.log('Photo upload complete');
        $state.go('app.file', undefined, {reload: true});
        return;
      }, function(error) {
        console.error(error);
      });
    };
  });

