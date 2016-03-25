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
      files: function(fileClient) {
        return fileClient.list();
      }
    }
  })
  .state('app.camera', {
    url: '/photo',
    templateUrl: 'app/file/camera.tpl.html',
    controller: 'CameraCtrl as ctrl'
  })
})

.controller('CameraCtrl', function($state, fileClient, $scope, mediator) {
  var self = this;
  self.model = {};

  $scope.$watch('ctrl.model', function() {
    console.log(self.model)
    if (! _.isEmpty(self.model) ) {
      self.upload();
    }
  })

  self.upload = function() {
    fileClient.uploadDataUrl(self.model).then(function(fileMeta) {
      console.log('fileMeta', fileMeta);
      $state.go('app.file');
    });
  }

  mediator.subscribeForScope('wfm:camera:cancel', $scope, function() {
    $state.go('app.file');
  });
})

.controller('FileListCtrl', function($state, $window, mobileCamera, fileClient, files) {
  self = this;
  self.files = files.slice().reverse();

  self.capturePhoto = function() {
    if ($window.cordova) {
      mobileCamera.capture()
      .then(function(capture) {
        return fileClient.uploadFile(capture.fileURI, {fileName: capture.fileName})
      })
      .then(function() {
        mobileCamera.clearCache();
        console.log('Photo upload complete');
        return;
      })
      .then(function() {
        $state.go('app.file', undefined, {reload:true});
        return;
      }, function(error) {
        console.error(error);
      });
    } else {
      $state.go('app.camera');
    }
  }
})
;
