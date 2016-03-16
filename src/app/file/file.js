/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm-mobile.file';

angular.module('wfm-mobile.file', [
  'ui.router',
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.file', {
        url: '/file',
        templateUrl: 'app/file/file-list.tpl.html',
        controller: 'FileListCtrl as ctrl'
      })
})

.controller('FileListCtrl', function($window, $timeout, $scope) {
  var self = this;
  var window = $window;
  var document = window.document

  var canvas, context, video, videoObj, errBack, stream;

  // Put event listeners into place
  $timeout(function() {
  	// Grab elements, create settings, etc.
	  canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		video = document.getElementById('video'),
		videoObj = { 'video': true },
		errBack = function(error) {
			console.log('Video capture error: ', error.code);
		};

  	// TODO: https://www.npmjs.com/package/getusermedia-js
  	if(navigator.getUserMedia) { // Standard
  		navigator.getUserMedia(videoObj, function(_stream) {
        stream = _stream;
  			video.src = stream;
  			video.play();
  		}, errBack);
  	} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
  		navigator.webkitGetUserMedia(videoObj, function(_stream){
        stream = _stream;
  			video.src = window.webkitURL.createObjectURL(stream);
  			video.play();
  		}, errBack);
  	}
  	else if(navigator.mozGetUserMedia) { // Firefox-prefixed
  		navigator.mozGetUserMedia(videoObj, function(_stream){
        stream = _stream;
  			video.src = window.URL.createObjectURL(stream);
  			video.play();
  		}, errBack);
  	}
  }, 0);

  // Trigger photo take
  self.snap = function() {
    context.drawImage(video, 0, 0, 320, 240);
  };

  $scope.$on('$destroy', function() {
    stream.getVideoTracks()[0].stop();
  });
})
;
