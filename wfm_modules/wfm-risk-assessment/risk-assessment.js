'use strict';

var angular = require('angular');

var ngModule = angular.module('wfm.risk-assessment', ['wfm.core.mediator'])

require('./lib');

ngModule.directive('riskAssessment', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/risk-assessment.tpl.html')
  , scope: {
    }
  , controller: function($element, $scope) {
      var self = this;
      $scope.step = 0
      self.model = {};
      self.answerComplete = function(answer) {
        self.model.complete = answer;
        $scope.step++;
      };
      self.done = function() {
        // TODO: attach a Base64 encoded string of the signature image to the model
        var canvas = $element[0].getElementsByTagName('canvas')[0];
        self.model.signature = canvas.getContext('2d').getImageData(0,0, canvas.width, canvas.height);
        mediator.publish('wfm:risk-assessment:done', self.model);
      };
    }
  , controllerAs: 'ctrl'
  };
})

ngModule.directive('riskAssessmentSignature', function($templateCache, $window, $document, $ionicScrollDelegate, mediator) {

  var CanvasDrawr = function(element, options) {
    var canvas = element[0].getElementsByTagName('canvas')[0];
    var ctxt = canvas.getContext('2d');
    canvas.style.width = '100%'
    canvas.width = canvas.offsetWidth;
    canvas.style.width = '';

    // set props from options, but the defaults are for the cool kids
    ctxt.lineWidth = options.size || 5;
    ctxt.lineCap = options.lineCap || 'round';
    options.color = options.color || 'blue';
    ctxt.pX = undefined;
    ctxt.pY = undefined;

    var lines = [,,];
    var rect = canvas.getBoundingClientRect();

    var offset = {
      top: rect.top + $document[0].body.scrollTop,
      left: rect.left + $document[0].body.scrollLeft
    };

    console.log(offset);

    var self = {
      //bind click events
      init: function() {
        // use anguler.element#on for automatic listener cleanup
        var canvasNg = angular.element(canvas);
        //set pX and pY from first click
        canvasNg.on('touchstart', self.preDraw);
        canvasNg.on('touchmove', self.draw);
        canvasNg.on('touchend', function(event) {
          $ionicScrollDelegate.freezeAllScrolls(false);
        });
      },

      preDraw: function(event) {
        $ionicScrollDelegate.freezeAllScrolls(true);
        rect = canvas.getBoundingClientRect();
        offset = {
          top: rect.top + $document[0].body.scrollTop,
          left: rect.left + $document[0].body.scrollLeft
        };

        for (var i = 0; i < event.touches.length; i++) {
          var touch = event.touches[i];
          var id      = touch.identifier;

          lines[id] = {
            x     : touch.pageX - offset.left,
            y     : touch.pageY - offset.top,
            color : options.color
          };
        };
        event.preventDefault();
        event.cancelBubble = true;
      },

      draw: function(event) {
        for (var i = 0; i < event.touches.length; i++) {
          var touch = event.touches[i];
          var id = touch.identifier,

          moveX = touch.pageX - offset.left - lines[id].x,
          moveY = touch.pageY - offset.top - lines[id].y;

          var ret = self.move(id, moveX, moveY);
          lines[id].x = ret.x;
          lines[id].y = ret.y;
        };

        event.preventDefault();
      },

      move: function(i, changeX, changeY) {
        ctxt.strokeStyle = lines[i].color;
        ctxt.beginPath();
        ctxt.moveTo(lines[i].x, lines[i].y);

        ctxt.lineTo(lines[i].x + changeX, lines[i].y + changeY);
        ctxt.stroke();
        ctxt.closePath();

        return { x: lines[i].x + changeX, y: lines[i].y + changeY };
      }
    };

    return self.init();
  }

  return {
    restrict: 'E'
  , template: '<div class="risk-assessment-signature"><canvas></canvas></div>'
  , scope: {
      options: '='
    }
  , link: function (scope, element, attrs) {
      var options = scope.options || {};
      var drawr = new CanvasDrawr(element, options);
    }
  };
})

;

module.exports = 'wfm.risk-assessment';
