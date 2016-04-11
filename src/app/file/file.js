/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm-mobile.file';

var _ = require('lodash');

angular.module('wfm-mobile.file', [
  'ui.router',
  'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
  .state('app.file', {
    url: '/file',
    templateUrl: 'app/file/file-list.tpl.html',
    controller: 'FileListCtrl as ctrl',
    resolve: {
      profileData: function(userClient) {
        return userClient.getProfile();
      },
      files: function(fileClient, profileData) {
        return fileClient.list(profileData.id);
      }
    }
  })
})

.controller('FileListCtrl', function($state, $window, $mdDialog, mobileCamera, desktopCamera, fileClient, files, profileData) {
  self = this;
  self.files = files.slice().reverse();

  var captureThenUpload = function() {
    if ($window.cordova) {
      return mobileCamera.capture()
      .then(function(capture) {
        return fileClient.uploadFile(profileData.id, capture.fileURI, {fileName: capture.fileName}).then(mobileCamera.clearCache);
      })
    } else {
      return desktopCamera.capture()
      .then(function(dataUrl) {
        return fileClient.uploadDataUrl(profileData.id, dataUrl)
      })
    }
  }

  self.capturePhoto = function() {
    captureThenUpload().then(function() {
      console.log('Photo upload complete');
      $state.go('app.file', undefined, {reload:true});
      return;
    }, function(error) {
      console.error(error);
    });
  }
})
;
