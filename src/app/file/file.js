/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm-mobile.file';

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

.controller('CameraCtrl', function($state, fileClient, $scope) {
  var self = this;
  self.model = {};

  self.upload = function() {
    fileClient.uploadDataUrl(self.model).then(function(fileMeta) {
      console.log('fileMeta', fileMeta);
      $state.go('app.file');
    });
  }
})

.controller('FileListCtrl', function($state, files) {
  self = this;
  self.files = files.slice().reverse();
})
;
