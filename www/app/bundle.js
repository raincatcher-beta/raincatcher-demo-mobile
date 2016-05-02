require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.appform.directives');
} catch (e) {
  ngModule = angular.module('wfm.appform.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-date.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '\n' +
    '<md-input-container class="md-block" class="{{field.props.fieldCode}} appform-field-number">\n' +
    '  <label for="inputDate" class="">{{field.props.name}}</label>\n' +
    '  <input type="date"\n' +
    '    placeholder="{{ctrl.field.props.helpText}}"\n' +
    '    name="inputDate"\n' +
    '    ng-model="ctrl.model.date"\n' +
    '    ng-change="ctrl.updateModel()"\n' +
    '    min="{{field.props.fieldOptions.validation.min}}"\n' +
    '    max="{{field.props.fieldOptions.validation.max}}"\n' +
    '    ng-required="ctrl.field.props.required"\n' +
    '  ></input>\n' +
    '  <div ng-messages="$parent.fieldForm.inputName.$error" ng-show="$parent.fieldForm.inputName.$dirty || $parent.fieldForm.$submitted">\n' +
    '    <div ng-message="required">A {{field.props.name}} is required.</div>\n' +
    '    <div ng-message="number">You did not enter a valid datae</div>\n' +
    '    <div ng-message="max" class="help-block">Value must be less than {{field.props.fieldOptions.validation.max}}.</div>\n' +
    '    <div ng-message="min" class="help-block">Value must be larger than {{field.props.fieldOptions.validation.min}}.</div>\n' +
    '  </div>\n' +
    '</md-input-container>\n' +
    '');
}]);

},{}],2:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.appform.directives');
} catch (e) {
  ngModule = angular.module('wfm.appform.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-datetime.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '\n' +
    '<p class="md-caption">{{field.props.name}}</p>\n' +
    '<div layout="row">\n' +
    '  <md-input-container flex class="md-block" class="{{field.props.fieldCode}} appform-field-number">\n' +
    '    <label for="inputDate" class="">Date</label>\n' +
    '    <input type="date"\n' +
    '      placeholder="{{ctrl.field.props.helpText}}"\n' +
    '      name="inputDate"\n' +
    '      ng-model="ctrl.model.date"\n' +
    '      ng-change="ctrl.updateModel()"\n' +
    '      min="{{field.props.fieldOptions.validation.min}}"\n' +
    '      max="{{field.props.fieldOptions.validation.max}}"\n' +
    '      ng-required="ctrl.field.props.required"\n' +
    '    ></input>\n' +
    '    <div ng-messages="$parent.fieldForm.inputName.$error" ng-show="$parent.fieldForm.inputName.$dirty || $parent.fieldForm.$submitted">\n' +
    '      <div ng-message="required">A {{field.props.name}} is required.</div>\n' +
    '      <div ng-message="number">You did not enter a valid date</div>\n' +
    '      <div ng-message="max" class="help-block">Value must be less than {{field.props.fieldOptions.validation.max}}.</div>\n' +
    '      <div ng-message="min" class="help-block">Value must be larger than {{field.props.fieldOptions.validation.min}}.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '  <md-input-container flex class="md-block" class="{{field.props.fieldCode}} appform-field-number">\n' +
    '    <label for="inputTime" class="">Time</label>\n' +
    '    <input type="time"\n' +
    '      placeholder="{{ctrl.field.props.helpText}}"\n' +
    '      name="inputTime"\n' +
    '      ng-model="ctrl.model.time"\n' +
    '      ng-required="ctrl.field.props.required"\n' +
    '    ></input>\n' +
    '    <div ng-messages="$parent.fieldForm.inputName.$error" ng-show="$parent.fieldForm.inputName.$dirty || $parent.fieldForm.$submitted">\n' +
    '      <div ng-message="required">A {{field.props.name}} is required.</div>\n' +
    '      <div ng-message="number">You did not enter a valid time</div>\n' +
    '      <div ng-message="max" class="help-block">Value must be less than {{field.props.fieldOptions.validation.max}}.</div>\n' +
    '      <div ng-message="min" class="help-block">Value must be larger than {{field.props.fieldOptions.validation.min}}.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '');
}]);

},{}],3:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.appform.directives');
} catch (e) {
  ngModule = angular.module('wfm.appform.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-location.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<p class="md-caption">{{field.props.name}}</p>\n' +
    '<p>{{field.props.helpText}}</p>\n' +
    '\n' +
    '<md-button type="button" ng-click="ctrl.setLocation($event)" class="md-raised md-primary">\n' +
    '  <md-icon md-font-set="material-icons">location_searching</md-icon>\n' +
    '  Get Location\n' +
    '</md-button>\n' +
    '\n' +
    '<div layout="row">\n' +
    '  <md-input-container class="{{field.props.fieldCode}} appform-field-location md-block" flex>\n' +
    '    <input type="number"\n' +
    '      placeholder="Latitude"\n' +
    '      name="inputNameX"\n' +
    '      ng-model="ctrl.model.value.lat"\n' +
    '      ng-required="ctrl.field.props.required"\n' +
    '    ></input>\n' +
    '\n' +
    '    <div ng-messages="$parent.fieldForm.inputNameX.$error" ng-show="$parent.fieldForm.inputNameX.$dirty || $parent.fieldForm.$submitted">\n' +
    '      <div ng-message="required">A {{field.props.name}} latitude is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container class="{{field.props.fieldCode}} appform-field-location md-block" flex>\n' +
    '    <input type="number"\n' +
    '      placeholder="Longitude"\n' +
    '      name="inputNameY"\n' +
    '      ng-model="ctrl.model.value.long"\n' +
    '      ng-required="ctrl.field.props.required"\n' +
    '    ></input>\n' +
    '    <div ng-messages="$parent.fieldForm.inputNameY.$error" ng-show="$parent.fieldForm.inputNameY.$dirty || $parent.fieldForm.$submitted">\n' +
    '      <div ng-message="required">A {{field.props.name}} longitude is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '');
}]);

},{}],4:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.appform.directives');
} catch (e) {
  ngModule = angular.module('wfm.appform.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-number.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-input-container class="md-block" class="{{field.props.fieldCode}} appform-field-number">\n' +
    '  <label for="inputName" class="">{{field.props.name}}</label>\n' +
    '  <input type="number"\n' +
    '    placeholder="{{ctrl.field.props.helpText}}"\n' +
    '    name="inputName"\n' +
    '    ng-model="ctrl.model.value"\n' +
    '    min="{{field.props.fieldOptions.validation.min}}"\n' +
    '    max="{{field.props.fieldOptions.validation.max}}"\n' +
    '    ng-required="ctrl.field.props.required"\n' +
    '  ></input>\n' +
    '  <div ng-messages="$parent.fieldForm.inputName.$error" ng-show="$parent.fieldForm.inputName.$dirty || $parent.fieldForm.$submitted">\n' +
    '    <div ng-message="required">A {{field.props.name}} is required.</div>\n' +
    '    <div ng-message="number">You did not enter a valid number</div>\n' +
    '    <div ng-message="max" class="help-block">Value must be less than {{field.props.fieldOptions.validation.max}}.</div>\n' +
    '    <div ng-message="min" class="help-block">Value must be larger than {{field.props.fieldOptions.validation.min}}.</div>\n' +
    '  </div>\n' +
    '</md-input-container>\n' +
    '');
}]);

},{}],5:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.appform.directives');
} catch (e) {
  ngModule = angular.module('wfm.appform.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-photo.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<div>\n' +
    '  <md-button type="button" ng-click="ctrl.capture($event)" class="md-raised md-primary">{{ctrl.model.value ? \'Replace\' : \'Take a\'}} photo</md-button>\n' +
    '  <br>\n' +
    '  <img class=\'appform-photo\' ng-if="field.value.localURI" ng-src="{{field.value.localURI}}" alt="photo"></img>\n' +
    '  <img class=\'appform-photo\' ng-if="ctrl.model.value" ng-src="{{ctrl.model.value}}" alt="photo"></img>\n' +
    '</div>\n' +
    '');
}]);

},{}],6:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.appform.directives');
} catch (e) {
  ngModule = angular.module('wfm.appform.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field-time.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '\n' +
    '<md-input-container class="md-block" class="{{field.props.fieldCode}} appform-field-number">\n' +
    '  <label for="inputTime" class="">{{field.props.name}}</label>\n' +
    '  <input type="time"\n' +
    '    placeholder="{{ctrl.field.props.helpText}}"\n' +
    '    name="inputTime"\n' +
    '    ng-model="ctrl.model.time"\n' +
    '    ng-change="ctrl.updateModel()"\n' +
    '    ng-required="ctrl.field.props.required"\n' +
    '  ></input>\n' +
    '  <div ng-messages="$parent.fieldForm.inputName.$error" ng-show="$parent.fieldForm.inputName.$dirty || $parent.fieldForm.$submitted">\n' +
    '    <div ng-message="required">A {{field.props.name}} is required.</div>\n' +
    '    <div ng-message="number">You did not enter a valid time</div>\n' +
    '    <div ng-message="max" class="help-block">Value must be less than {{field.props.fieldOptions.validation.max}}.</div>\n' +
    '    <div ng-message="min" class="help-block">Value must be larger than {{field.props.fieldOptions.validation.min}}.</div>\n' +
    '  </div>\n' +
    '</md-input-container>\n' +
    '');
}]);

},{}],7:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.appform.directives');
} catch (e) {
  ngModule = angular.module('wfm.appform.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<ng-form name="fieldForm" ng-submit="ctrl.submit()">\n' +
    '  <div ng-switch="ctrl.field.props.type">\n' +
    '\n' +
    '    <div ng-switch-when="number">\n' +
    '      <appform-field-number model="ctrl.model" field="ctrl.field"></appform-field-number>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-switch-when="dateTime" ng-switch="ctrl.field.props.fieldOptions.definition.datetimeUnit">\n' +
    '      <div ng-switch-when="date">\n' +
    '        <appform-field-date model="ctrl.model" field="ctrl.field"></appform-field-date>\n' +
    '      </div>\n' +
    '       <div ng-switch-when="datetime">\n' +
    '         <appform-field-datetime model="ctrl.model" field="ctrl.field"></appform-field-datetime>\n' +
    '       </div>\n' +
    '       <div ng-switch-when="time">\n' +
    '         <appform-field-time model="ctrl.model" field="ctrl.field"></appform-field-time>\n' +
    '       </div>\n' +
    '       <div ng-switch-default>\n' +
    '         {{ctrl.field.props.fieldOptions.definition.datetimeUnit}}\n' +
    '       </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-switch-when="location">\n' +
    '      <appform-field-location model="ctrl.model" field="ctrl.field"></appform-field-location>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-switch-when="signature" flex class="appform-signature">\n' +
    '      <md-input-container class="md-block">\n' +
    '        <p class="md-caption">{{ctrl.field.props.name}}</p>\n' +
    '        <signature-form value="ctrl.model.value"></signature-form>\n' +
    '      </md-input-container>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-switch-when="photo" flex class="appform-photo">\n' +
    '      <appform-field-photo model="ctrl.model" field="ctrl.field"></appform-field-photo>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-switch-default flex>\n' +
    '      <md-input-container class="md-block">\n' +
    '        <label>{{ctrl.field.props.type}}</label>\n' +
    '        <input\n' +
    '          type="text"\n' +
    '          name="inputName"\n' +
    '          ng-model="ctrl.model.value"\n' +
    '          ng-required="ctrl.field.props.required"\n' +
    '          ng-class="ctrl.field.props.type"\n' +
    '        ></input>\n' +
    '        <div ng-messages="fieldForm.inputName.$error" ng-show="fieldForm.inputName.$dirty || fieldForm.$submitted">\n' +
    '          <div ng-message="required" ng-show="ctrl.field.props.helpText">{{ctrl.field.props.helpText}}</div>\n' +
    '          <div ng-message="required" ng-hide="ctrl.field.props.helpText">A {{ctrl.field.props.name}} is required.</div>\n' +
    '        </div>\n' +
    '      </md-input-container>\n' +
    '    </div>\n' +
    '\n' +
    '  </div>\n' +
    '</ng-form>\n' +
    '');
}]);

},{}],8:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.appform.directives');
} catch (e) {
  ngModule = angular.module('wfm.appform.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-submission.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '\n' +
    '<md-subheader>{{ctrl.form.props.name}}</md-subheader>\n' +
    '\n' +
    '<md-list class="appform-view">\n' +
    '\n' +
    '  <md-list-item ng-if="! ctrl.fields" class="loading">\n' +
    '    Loading appForm submission...\n' +
    '  </md-list-item>\n' +
    '\n' +
    '  <div ng-repeat="field in ctrl.fields">\n' +
    '    <ng-switch on="field.props.type">\n' +
    '      <div ng-switch-when="signature">\n' +
    '        <md-list-item class="md-2-line with-image">\n' +
    '          <md-icon md-font-set="material-icons">gesture</md-icon>\n' +
    '          <div class="md-list-item-text">\n' +
    '            <h3>\n' +
    '              <signature ng-if="field.value.localURI" value="field.value.localURI" alt="Signature"></signature>\n' +
    '              <signature ng-if="!field.value.localURI" value="field.value.imgHeader + field.value.data" alt="Signature"></signature>\n' +
    '            </h3>\n' +
    '            <p>{{field.props.name}}</p>\n' +
    '          </div>\n' +
    '          <md-divider></md-divider>\n' +
    '        </md-list-item>\n' +
    '      </div>\n' +
    '\n' +
    '      <div ng-switch-when="location">\n' +
    '        <md-list-item class="md-3-line">\n' +
    '          <md-icon md-font-set="material-icons">place</md-icon>\n' +
    '          <div class="md-list-item-text">\n' +
    '            <h3>{{field.value.lat}}N, {{field.value.long}}W</h3>\n' +
    '            <p>{{field.props.name}}</p>\n' +
    '          </div>\n' +
    '        </md-list-item>\n' +
    '      </div>\n' +
    '\n' +
    '      <div ng-switch-when="number">\n' +
    '        <md-list-item class="md-2-line">\n' +
    '          <md-icon md-font-set="material-icons">filter_4</md-icon>\n' +
    '          <div class="md-list-item-text">\n' +
    '            <h3>{{field.value}}</h3>\n' +
    '            <p>{{field.props.name}}</p>\n' +
    '          </div>\n' +
    '          <md-divider></md-divider>\n' +
    '        </md-list-item>\n' +
    '      </div>\n' +
    '\n' +
    '      <div ng-switch-when="photo">\n' +
    '        <md-list-item class="md-2-line with-image">\n' +
    '          <md-icon md-font-set="material-icons">camera</md-icon>\n' +
    '          <div class="md-list-item-text">\n' +
    '            <h3>\n' +
    '              <img ng-if="field.value.localURI" ng-src="{{field.value.localURI}}" alt="photo"></img>\n' +
    '              <img ng-if="!field.value.localURI" ng-src="{{field.value.imgHeader + field.value.data}}" alt="photo"></img>\n' +
    '            </h3>\n' +
    '          </div>\n' +
    '          <md-divider></md-divider>\n' +
    '        </md-list-item>\n' +
    '      </div>\n' +
    '\n' +
    '      <div ng-switch-default>\n' +
    '        <md-list-item class="md-2-line">\n' +
    '          <md-icon md-font-set="material-icons">text_format</md-icon>\n' +
    '          <div class="md-list-item-text">\n' +
    '            <h3>{{field.value}}</h3>\n' +
    '            <p>{{field.props.name}}</p>\n' +
    '          </div>\n' +
    '          <md-divider></md-divider>\n' +
    '        </md-list-item>\n' +
    '      </div>\n' +
    '    </ng-switch>\n' +
    '  </div>\n' +
    '</md-list>\n' +
    '');
}]);

},{}],9:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.appform.directives');
} catch (e) {
  ngModule = angular.module('wfm.appform.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<div class="app-form" layout-padding >\n' +
    '\n' +
    '<form name="workorderForm" novalidate>\n' +
    '  <div ng-repeat="field in ctrl.fields">\n' +
    '    <appform-field field="field" model="ctrl.model[field.props.fieldCode || field.props._id]"></appform-field>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="workflow-actions md-padding md-whiteframe-z4">\n' +
    '    <md-button class="md-primary md-hue-1" ng-click="ctrl.back($event)">Back</md-button>\n' +
    '    <md-button type="button" ng-click="ctrl.done($event, workorderForm.$valid)" class="md-primary">Continue</md-button>\n' +
    '  </div><!-- workflow-actions-->\n' +
    '\n' +
    '</form>\n' +
    '\n' +
    '</div><!-- app-form -->\n' +
    '');
}]);

},{}],10:[function(require,module,exports){
require('./appform-field-date.tpl.html.js');
require('./appform-field-datetime.tpl.html.js');
require('./appform-field-location.tpl.html.js');
require('./appform-field-number.tpl.html.js');
require('./appform-field-photo.tpl.html.js');
require('./appform-field-time.tpl.html.js');
require('./appform-field.tpl.html.js');
require('./appform-submission.tpl.html.js');
require('./appform.tpl.html.js');

},{"./appform-field-date.tpl.html.js":1,"./appform-field-datetime.tpl.html.js":2,"./appform-field-location.tpl.html.js":3,"./appform-field-number.tpl.html.js":4,"./appform-field-photo.tpl.html.js":5,"./appform-field-time.tpl.html.js":6,"./appform-field.tpl.html.js":7,"./appform-submission.tpl.html.js":8,"./appform.tpl.html.js":9}],11:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm.appform';

angular.module('wfm.appform', [
  'wfm.core.mediator'
, require('./directive')
])

.run(function(mediator) {
  require('../appform-mediator')(mediator);
});

},{"../appform-mediator":14,"./directive":12}],12:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var ngModule = angular.module('wfm.appform.directives', [
  'wfm.core.mediator',
  require('./service'),
  require('fh-wfm-signature')
]);
module.exports = 'wfm.appform.directives';

var _ = require('lodash');
require('../../dist');

ngModule.run(function(appformClient) {
  appformClient.init();
})

ngModule.directive('appformSubmission', function($templateCache, $q, appformClient) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/appform-submission.tpl.html')
  , scope: {
      submissionLocalId: '=submissionLocalId'
    , submissionId: '=submissionId'
    , submission: '=submission'
    }
  , controller: function($scope) {
      var self = this;
      var submissionPromise;
      if ($scope.submission) {
        submissionPromise = $q.when($scope.submission);
      } else if ($scope.submissionId) {
        submissionPromise = appformClient.getSubmission($scope.submissionId);
      } else if ($scope.submissionLocalId) {
        submissionPromise = appformClient.getSubmissionLocal($scope.submissionLocalId);
      } else {
        console.error('appformSubmission called with no submission');
      }
      submissionPromise.then(function(submission) {
        var formPromise = submission.form ? $q.when(submission.form) : appformClient.getForm(submission.props.formId);
        return formPromise.then(function(form) {
          self.form = form;
        })
        .then(function() {
          return appformClient.getFields(submission);
        })
      })
      .then(function(fields) {
        self.fields = fields;
      }, function(error) {
        console.error(error);
      });
    }
  , controllerAs: 'ctrl'
  };
});

ngModule.directive('appform', function($templateCache, $q, mediator, appformClient) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/appform.tpl.html')
  , scope: {
      form: '=',
      formId: '='
    }
  , controller: function($scope, $element) {
    var self = this;
    var form;
    var formPromise = $scope.form ? $q.when($scope.form) : appformClient.getForm($scope.formId);
    formPromise.then(function(_form) {
      form = _form;
      self.fields = form.fields;
      self.model = {};
      _.forEach(self.fields, function(field) {
        self.model[field.props.fieldCode || field.props._id] = {};
      });
    })
    self.back = function(event) {
      event.preventDefault();
      event.stopPropagation();
      mediator.publish('wfm:workflow:step:back');
    }
    self.done = function(event, isValid) {
      event.stopPropagation();
      event.stopPropagation();
      $scope.$broadcast('parentFormSubmitted');
      if (!isValid) {
        console.log('invalid', event)
        var firstInvalid = $element[0].querySelector('input.ng-invalid');
        // if we find one, set focus
        if (firstInvalid) {
          firstInvalid.focus();
        }
      } else {
        var submissionFields = [];
        _.forEach(self.fields, function(field) {
          var value = self.model[field.props.fieldCode || field.props._id].value;
          submissionFields.push({
            fieldId: field.props._id,
            value: value
          });
        })
        appformClient.createSubmission(form, submissionFields)
        .then(appformClient.submitSubmission)
        .then(appformClient.composeSubmissionResult)
        .then(function(submissionResult) {
          mediator.publish('wfm:workflow:step:done', submissionResult);
        }, function(error) {
          console.error('submissionFields', submissionFields);
          throw new Error(error);
        });
      };
    }
  }
  , controllerAs: 'ctrl'
  };
});

ngModule.directive('appformField', function($templateCache, $timeout, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/appform-field.tpl.html')
  , scope: {
      field: '=',
      model: '='
    }
  , link: function (scope, element, attrs, ctrl) {
      var parentForm = element.parent();
      while (parentForm && parentForm.prop('tagName') !== 'FORM') {
        parentForm = parentForm.parent();
      };
      if (parentForm) {
        var formController = element.find('ng-form').controller('form');
        scope.$on('parentFormSubmitted',function(event) {
          ctrl.submit(element);
          formController.$setSubmitted();
        });
      };
    }
  , controller: function($scope) {
    var self = this;
    self.field = $scope.field;
    self.model = {};
    if ($scope.model && $scope.model.value) {
      self.model = angular.copy($scope.model);
    } else if (self.field.props.fieldOptions.definition && self.field.props.fieldOptions.definition.defaultValue) {
      self.model.value = self.field.props.fieldOptions.definition.defaultValue;
    };
    self.submit = function(element) {

      if (self.field.props.type === 'location') {
        var inputs = element[0].getElementsByTagName('input');
        self.model.value = {
          lat: inputs[0].value,
          long: inputs[1].value
        }
      }
      $scope.model.value = self.model.value;
    }
  }
  , controllerAs: 'ctrl'
  };
});

ngModule.directive('appformFieldLocation', function($templateCache, $timeout, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/appform-field-location.tpl.html')
  , scope: {
      field: '='
    , model: '='
    }
  , controller: function($scope) {
    var self = this;
    self.field = $scope.field;
    self.model = $scope.model ? angular.copy($scope.model) : {};
    self.model.value = self.model.value || {};
    self.isValid = function(form, element) {
      console.log('form', form);
      console.log('element', element);
    }
    self.setLocation = function(event) {
      event.stopPropagation();
      event.stopPropagation();
      navigator.geolocation.getCurrentPosition(function(pos) {
        $scope.$apply(function() {
          self.model.value.lat = parseFloat(pos.coords.latitude);
          self.model.value.long = parseFloat(pos.coords.longitude);
          console.log('position set', self.model.value)
        });
      }, function(err) {
        alert('Unable to get current position');
        self.model.value.lat = -1;
        self.model.value.long = -1;
      });
    }
  }
  , controllerAs: 'ctrl'
  };
});

ngModule.directive('appformFieldPhoto', function($templateCache, $window, mediator, mobileCamera, desktopCamera) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/appform-field-photo.tpl.html')
  , scope: {
      field: '='
    , model: '='
    }
  , controller: function($scope) {
    var self = this;
    self.field = $scope.field;
    self.model = $scope.model; // ? angular.copy($scope.model) : {};
    self.isValid = function(form, element) {
      console.log('form', form);
      console.log('element', element);
    }
    self.capture = function(event) {
      event.stopPropagation();
      event.stopPropagation();
      if ($window.cordova) {
        mobileCamera.capture()
        .then(function(capture) {
          self.model.value = capture;
        })
      } else {
        desktopCamera.capture()
        .then(function(dataUrl) {
          self.model.value = dataUrl;
        });
      }
    }
  }
  , controllerAs: 'ctrl'
  };
});

ngModule.directive('appformFieldNumber', function($templateCache, $window, $document, $timeout, mediator) {
 return {
   restrict: 'E'
 , template: $templateCache.get('wfm-template/appform-field-number.tpl.html')
 , scope: {
   field: '=',
   model: '=',
 }
 , controller: function($scope) {
   var self = this;
   self.field = $scope.field;
   self.model = $scope.model;
   if (self.field.props.fieldOptions.definition && self.field.props.fieldOptions.definition.defaultValue) {
     self.model.value = parseFloat(self.field.props.fieldOptions.definition.defaultValue);
   };
 }
 , controllerAs: 'ctrl'
 };
});

function getDate(d){
  return 'YYYY-MM-DD'.replace('YYYY', d.getFullYear()).replace('MM', twoDigi(d.getMonth()+1)).replace('DD', twoDigi(d.getDate()));
};

function getTime(d){
  return 'HH:mm'.replace('HH', twoDigi(d.getHours())).replace('mm', twoDigi(d.getMinutes()));
};

function twoDigi(num){
  if (num < 10){
    return '0' + num.toString();
  } else {
    return num.toString();
  }
}

ngModule.directive('appformFieldDatetime', function($templateCache, $window, $document, $timeout, mediator) {
 return {
   restrict: 'E'
 , template: $templateCache.get('wfm-template/appform-field-datetime.tpl.html')
 , scope: {
   field: '=',
   model: '=',
 }
 , controller: function($scope) {
   var self = this;
   self.field = $scope.field;
   self.model = $scope.model;
   if (self.field.props.fieldOptions.definition && self.field.props.fieldOptions.definition.defaultValue) {
     self.model.value = new Date(self.field.props.fieldOptions.definition.defaultValue);
   };
   self.updateModel = function() {
     var date = new Date(self.model.date);
     var time = new Date(self.model.time);
     $scope.model.value = getDate(date) + ' ' + getTime(time);
   }
 }
 , controllerAs: 'ctrl'
 };
});

ngModule.directive('appformFieldDate', function($templateCache, $window, $document, $timeout, mediator) {
 return {
   restrict: 'E'
 , template: $templateCache.get('wfm-template/appform-field-date.tpl.html')
 , scope: {
   field: '=',
   model: '=',
 }
 , controller: function($scope) {
   var self = this;
   self.field = $scope.field;
   self.model = $scope.model;
   if (self.field.props.fieldOptions.definition && self.field.props.fieldOptions.definition.defaultValue) {
     self.model.value = new Date(self.field.props.fieldOptions.definition.defaultValue);
   };
   self.updateModel = function() {
     var date = new Date(self.model.date);
     $scope.model.value = getDate(date);
   }
 }
 , controllerAs: 'ctrl'
 };
});

ngModule.directive('appformFieldTime', function($templateCache, $window, $document, $timeout, mediator) {
 return {
   restrict: 'E'
 , template: $templateCache.get('wfm-template/appform-field-time.tpl.html')
 , scope: {
   field: '=',
   model: '=',
 }
 , controller: function($scope) {
   var self = this;
   self.field = $scope.field;
   self.model = $scope.model;
   if (self.field.props.fieldOptions.definition && self.field.props.fieldOptions.definition.defaultValue) {
     self.model.value = new Date(self.field.props.fieldOptions.definition.defaultValue);
   };
   self.updateModel = function() {
     var time = new Date(self.model.time);
     $scope.model.value = getTime(time);
   }
 }
 , controllerAs: 'ctrl'
 };
});

},{"../../dist":10,"./service":13,"fh-wfm-signature":51,"lodash":"lodash"}],13:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var client = require('../appform')

module.exports = 'wfm.appform.service';

angular.module('wfm.appform.service', [])

.service('appformClient', function($q) {
  var service = {};

  var methods = [
    'init',
    'list',
    'getForm',
    'getSubmissionLocal',
    'getSubmission',
    'getSubmissions',
    'getFields',
    'createSubmission',
    'submitSubmission',
    'uploadSubmission',
    'composeSubmissionResult',
    'syncStepResult',
    'watchSubmissionModel'
  ];

  methods.forEach(function(method) {
    service[method] = function() {
      return $q.when(client[method].apply(client, arguments));
    };
  });

  return service;
});

},{"../appform":15}],14:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var client = require('./appform')

function wrapper(mediator) {
  var initPromise = client.init();
  mediator.subscribe('wfm:appform:init', function() {
    initPromise
    .then(function() {
      mediator.publish('done:wfm:appform:init');
    }, function(error) {
      mediator.publish('error:appform:init', error);
    });
  });

  mediator.subscribe('init', function() {
    mediator.publish('promise:init', initPromise);
  });

  mediator.subscribe('wfm:appform:form:list', function() {
    client.list()
    .then(function(forms) {
      mediator.publish('done:wfm:appform:form:list', forms);
    }, function(error) {
      mediator.publish('error:appform:form:list', error);
    });
  });

  mediator.subscribe('wfm:appform:form:read', function(formId) {
    client.getForm(formId)
    .then(function(form) {
      mediator.publish('done:wfm:appform:form:read:' + formId, form);
    }, function(error) {
      mediator.publish('error:appform:form:read:' + formId, error);
    });
  });

  mediator.subscribe('wfm:appform:submission:local:read', function(submissionLocalId) {
    client.getSubmissionLocal(submissionLocalId)
    .then(function(submission) {
      mediator.publish('done:wfm:appform:submission:local:read:'+submissionLocalId, submission);
    }, function(error) {
      mediator.publish('error:appform:submission:local:read:'+submissionLocalId, error);
    });
  });

  mediator.subscribe('wfm:appform:submission:remote:read', function(submissionId) {
    client.getSubmission(submissionId)
    .then(function(submission) {
      mediator.publish('done:wfm:appform:submission:remote:read:'+submissionId, submission);
    }, function(error) {
      mediator.publish('error:appform:submission:remote:read:'+submissionId, error);
    });
  });

  mediator.subscribe('wfm:appform:submission:list:remote:read', function(submissionIds, id) {
    client.getSubmissions(submissionIds)
    .then(function(submissions) {
      mediator.publish('done:wfm:appform:submission:list:remote:read:'+id, submissions);
    }, function(error) {
      mediator.publish('error:appform:submission:list:remote:read:'+id, error);
    });
  });

  mediator.subscribe('wfm:appform:submission:field:list', function(submission) {
    client.getFields(submission)
    .then(function(fields) {
      mediator.publish('done:wfm:appform:submission:field:list:'+submission.getLocalId(), fields);
    }, function(error) {
      mediator.publish('error:appform:submission:field:list:'+submission.getLocalId(), error);
    });
  });

  mediator.subscribe('wfm:appform:submission:create', function(form, submissionFields, ts) {
    client.createSubmission(form, submissionFields)
    .then(function(submission) {
      mediator.publish('done:wfm:appform:submission:create:' + ts, submission);
    }, function(error) {
      mediator.publish('error:appform:submission:create:' + ts, error);
    });
  });

  mediator.subscribe('wfm:appform:submission:submit', function(submission) {
    client.submitSubmission(submission)
    .then(function(submission) {
      mediator.publish('done:wfm:appform:submission:submit:' + submission.getLocalId(), submission);
    }, function(error) {
      mediator.publish('error:appform:submission:submit:' + submission.getLocalId(), error);
    });
  });

  mediator.subscribe('wfm:appform:submission:upload', function(submission) {
    client.uploadSubmission(submission)
    .then(function(submissionId) {
      mediator.publish('done:wfm:appform:submission:upload:' + submission.props._ludid, submissionId);
    }, function(error) {
      mediator.publish('error:appform:submission:upload:' + submission.props._ludid, error);
    });
  });

  client.addSubmissionCompleteListener(function(submissionResult, metaData) {
    if (metaData) {
      var event = {
        submissionResult: submissionResult,
        metaData: metaData
      }
      console.log('metaData', metaData);
      mediator.publish('wfm:appform:submission:complete', event)
    }
  })
};

module.exports = wrapper;

},{"./appform":15}],15:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var q = require('q');
var _ = require('lodash');

var client = {};
var initPromise;

client.init = function() {
  if (initPromise) {
    return initPromise;
  }
  var deferred = q.defer();
  var self = this;
  self.listeners = [];
  initPromise = deferred.promise;
  $fh.on('fhinit', function(error, host) {
    if (error) {
      deferred.reject(new Error(error));
      return;
    }
    $fh.forms.init(function(error) {
      if (error) {
        deferred.reject(new Error(error));
      } else {
        console.log('Forms initialized.');
        deferred.resolve();
      }
    });
  });
  $fh.forms.on("submission:submitted", function(submissionId) {
    var submission = this;
    var metaData = submission.get('metaData');
    if (self.listeners.length) {
      self.composeSubmissionResult(submission).then(function(submissionResult) {
        self.listeners.forEach(function(listener) {
          listener(submissionResult, metaData);
        });
      });
    }
  });
  return initPromise;
};

client.addSubmissionCompleteListener = function(listener) {
  this.listeners.push(listener);
};

client.list = function() {
  var deferred = q.defer();
  initPromise.then(function() {
    $fh.forms.getForms(function(error, formsModel) {
      if (error) {
        deferred.reject(new Error(error));
        return;
      }
      var forms = formsModel.props.forms;
      deferred.resolve(forms);
    });
  });
  return deferred.promise;
};

client.getForm = function(formId) {
  var deferred = q.defer();
  initPromise.then(function() {
    $fh.forms.getForm({formId: formId}, function (error, form) {
      if (error) {
        deferred.reject(new Error(error));
        return;
      }
      deferred.resolve(form);
    });
  });
  return deferred.promise;
}

client.getSubmissionLocal = function(submissionLocalId) {
  var deferred = q.defer();
  initPromise.then(function() {
    $fh.forms.getSubmissions(function(error, submissions) {
      if (error) {
        deferred.reject(new Error(error));
        return;
      }
      submissions.getSubmissionByMeta({_ludid: submissionLocalId}, function(error, submission) {
        if (error) {
          deferred.reject(new Error(error));
          return;
        }
        deferred.resolve(submission);
      });
    });
  });
  return deferred.promise;
}

client.getSubmission = function(submissionId) {
  var deferred = q.defer();
  initPromise.then(function() {
    $fh.forms.downloadSubmission({submissionId: submissionId}, function(error, submission) {
      if (error) {
        deferred.reject(new Error(error));
        return;
      }
      deferred.resolve(submission);
    });
  });
  return deferred.promise;
}

client.getSubmissions = function(submissionIds) {
  var self = this;
  var promises = submissionIds.map(function(submissionId) {
    return initPromise.then(function() {
      self.getSubmission(submissionId);
    });
  });
  return q.allSettled(promises);
}

client.getFields = function(submission) {
  var deferred = q.defer();
  initPromise.then(function() {
    submission.getForm(function(error, form) {
      if (error) {
        deferred.reject(new Error(error));
        return;
      }
      var fields = form.fields;
      var qs = [];
      _.forOwn(fields, function(field, key) {
        var _deferred = q.defer();
        qs.push(_deferred.promise);
        submission.getInputValueByFieldId(field.getFieldId(), function(error, fieldValues) {
          if (error) {
            _deferred.reject(new Error(error));
            return;
          }
          field.value = fieldValues[0];
          _deferred.resolve(fieldValues);
        });
      });
      q.all(qs).then(function() {
        deferred.resolve(fields);
      }, function(error) {
        deferred.reject(new Error(error));
      });
    });
  });
  return deferred.promise;
}

/**
* The fields parameter is an array of {fieldId: <...>, value: <...>} objects
*/
client.createSubmission = function(form, submissionFields) {
  var deferred = q.defer();
  initPromise.then(function() {
    var submission = form.newSubmission();
    var ds = [];
    _.forEach(submissionFields, function(field) {
      var d = q.defer();
      ds.push(d.promise);
      submission.addInputValue(field, function(error, result) {
        if (error) {
          d.reject(error);
        } else {
          d.resolve(result);
        }
      });
    });
    q.all(ds)
    .then(function() {
      deferred.resolve(submission);
    }, function(error) {
      deferred.reject(new Error(error));
    });
  });
  return deferred.promise;
};

client.submitSubmission = function(submission) {
  var deferred = q.defer();
  initPromise.then(function() {
    submission.submit(function(error, submitResponse) {
      if (error) {
        deferred.reject(new Error(error));
        return;
      };
      deferred.resolve(submission);
    });
  });
  return deferred.promise;
};

client.uploadSubmission = function(submission) {
  var deferred = q.defer();
  initPromise.then(function() {
    submission.upload(function(error, uploadTask) {
      if (error) {
        deferred.reject(new Error(error));
        return;
      };
      uploadTask.submissionModel(function(error, submissionModel) {
        if (error) {
          deferred.reject(new Error(error));
          return;
        };
        deferred.resolve(submissionModel);
      })
    });
  });
  return deferred.promise;
};

client.composeSubmissionResult = function(submission) {
  var submissionResult = {
      submissionLocalId: submission.props._ludid
    , formId: submission.props.formId
    , status: submission.props.status
  };
  if (submission.props._id) {
    submissionResult.submissionId = submission.props._id;
  }
  return q.when(submissionResult);
};

client.syncStepResult = function(workorder, stepResult) {
  // kick-off an appform upload, update the workorder when complete
  var self = this;

  return initPromise
    .then(function() {
      return self.getSubmissionLocal(stepResult.submission.submissionLocalId);
    })
    .then(function(submission) {
      submission.set('metaData', {
        wfm: {
          workorderId: workorder.id,
          step: stepResult.step,
          timestamp: stepResult.timestamp
        }
      });
      return submission;
    })
    .then(self.uploadSubmission)
    .then(function(submissionModel) {
      self.watchSubmissionModel(submissionModel); // need this to trigget the global event
      return submissionModel;
    });
};

client.watchSubmissionModel = function(submissionModel) {
  var deferred = q.defer();
  submissionModel.on('submitted', function(submissionId) {
    $fh.forms.downloadSubmission({submissionId: submissionId}, function(error, remoteSubmission) {
      if (error) {
        deferred.reject(error);
        return;
      };
      deferred.resolve(remoteSubmission);
    });
  });
  //  TODO: Do we need a timeout here to cleanup submissionModel listeners?
  return deferred.promise;
};

module.exports = client;

},{"lodash":"lodash","q":"q"}],16:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.camera.directives');
} catch (e) {
  ngModule = angular.module('wfm.camera.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/camera.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<div class="wfm-camera" flex>\n' +
    '  <md-button class="md-icon-button" aria-label="Back" ng-click="ctrl.cancel()" flex>\n' +
    '    <md-icon md-font-set="material-icons">arrow_back</md-icon>\n' +
    '  </md-button>\n' +
    '  <video  ng-show="ctrl.cameraOn" autoplay></video>\n' +
    '  <canvas ng-hide="ctrl.cameraOn"></canvas>\n' +
    '  <div class="wfm-camera-actions" style="z-index: 1000">\n' +
    '    <md-button ng-show="ctrl.cameraOn" class="wfm-camera-btn" ng-click="ctrl.snap()"></md-button>\n' +
    '    <md-button ng-hide="ctrl.cameraOn" class="wfm-camera-confirmation-btn md-warn" ng-click="ctrl.startCamera()">\n' +
    '      <md-icon md-font-set="material-icons">close</md-icon>\n' +
    '    </md-button>\n' +
    '    <md-button ng-hide="ctrl.cameraOn" class="wfm-camera-confirmation-btn" ng-click="ctrl.done()">\n' +
    '      <md-icon md-font-set="material-icons">check</md-icon>\n' +
    '    </md-button>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);

},{}],17:[function(require,module,exports){
require('./camera.tpl.html.js');

},{"./camera.tpl.html.js":16}],18:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm.camera';

angular.module('wfm.camera', [
  require('./directive')
, require('./service')
]);

},{"./directive":19,"./service":20}],19:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var ngModule = angular.module('wfm.camera.directives', ['wfm.core.mediator']);
module.exports = 'wfm.camera.directives';

require('../../dist');

ngModule.directive('camera', function($templateCache, mediator, $window, $timeout) {
  return {
    restrict: 'E',
    template: $templateCache.get('wfm-template/camera.tpl.html'),
    scope: {
      model: '=',
      autostart: '='
    },
    compile: function (element) {
      element.attr('flex', true);
    },
    controller: function($scope, $element) {
      var self = this,
          element = $element[0],
          canvas = element.getElementsByTagName('canvas')[0],
          context = canvas.getContext('2d'),
          video = element.getElementsByTagName('video')[0],
          stream, width, height, zoom;

      $timeout(function() {
        height = element.offsetHeight;
        width = element.offsetWidth;
        video.height = height;
        canvas.height = height;
        canvas.width = width;

        self.cameraOn = false;
        if ($scope.autostart) {
          self.startCamera();
        }
      })

      context.scale(-1, 1);

      self.snap = function() {
        var sx = (video.clientWidth - width ) / 2;
        context.drawImage(video, sx/zoom, 0, width/zoom, height/zoom, 0, 0, width, height);
        self.stopCamera();
      };

      self.startCamera = function() {
        // TODO: https://www.npmjs.com/package/getusermedia-js
        var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
        getUserMedia.call(navigator, { 'video': true }, function(_stream) {
          stream = _stream;
          video.src = $window.URL.createObjectURL(stream);
          video.play();
          $scope.$apply(function() {
            $scope.model = null;
            self.cameraOn = true;
            var videoWidth;
            video.onloadstart = function() {
              videoWidth = video.clientWidth;
            }
            video.oncanplay = function() {
              zoom = videoWidth / video.clientWidth;
              video.style.left = -(video.clientWidth - width ) / 2 + 'px';
            };
          });
        }, function(error) {
          console.error('Video capture error: ', error.code);
        });
      }

      self.stopCamera = function() {
        stream.getVideoTracks()[0].stop();
        self.cameraOn = false;
      }

      self.cancel = function() {
        self.stopCamera();
        mediator.publish('wfm:camera:cancel');
      }

      self.done = function() {
        $scope.model = canvas.toDataURL();
      }

      $scope.$on('$destroy', function() {
        self.stopCamera();
      });
    },
    controllerAs: 'ctrl'
  };
})

},{"../../dist":17}],20:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var camera = require('../camera');

module.exports = 'wfm.camera.service';

angular.module('wfm.camera.service', ['wfm.core.mediator'])

.factory('mobileCamera', function($q, $window, mediator) {
  return camera;
})

.factory('desktopCamera', function($mdDialog, mediator) {
  var camera = {};
  camera.capture = function(ev) {
    return $mdDialog.show({
      controller: function CameraCtrl($scope, mediator) {
        var self = this;
        $scope.data = null;

        $scope.$watch('data', function() {
          if (! _.isEmpty($scope.data) ) {
            $mdDialog.hide($scope.data);
          }
        })

        mediator.subscribeForScope('wfm:camera:cancel', $scope, function() {
          $mdDialog.cancel('Photo capture cancelled.');
        });
      },
      template: '<camera model="data" autostart="true"></camera>',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: false,
      fullscreen: true
    });
  };

  return camera;
})
;

},{"../camera":21}],21:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var q = require('q');

function Camera() {
  this.init();
};

Camera.prototype.init = function() {
  var self = this;
  var deferred = q.defer();
  if (window.cordova) {
    document.addEventListener("deviceready", function cameraReady() {
      deferred.resolve();
    }, false);
  } else {
    deferred.resolve();
  };

  self.initPromise = deferred.promise;
  return self.initPromise;
};

Camera.prototype.clearCache = function() {
  window.navigator.camera.cleanup();
};

Camera.prototype.capture = function () {
  var self = this;
  var deferred = q.defer();
  self.initPromise.then(function() {
    window.navigator.camera.getPicture(function captureSuccess(fileURI) {
      var fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
      deferred.resolve({
        fileName: fileName,
        fileURI: fileURI
      });
    }, function captureFailure(error) {
      deferred.reject(error);
    }, {
      quality: 100,
      destinationType: window.navigator.camera.DestinationType.FILE_URI,
      encodingType: window.Camera.EncodingType.JPEG,
      correctOrientation: true
    });
  });
  return deferred.promise;
};

var camera = new Camera();
module.exports = camera;

},{"q":"q"}],22:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var config = require('../config');

module.exports = 'wfm.file.directives';

angular.module('wfm.file.directives', [])

.directive('wfmImg', function($q) {
  function init() {
    var self = this;
    var deferred = $q.defer();
    $fh.on('fhinit', function(error, host) {
      if (error) {
        deferred.reject(new Error(error));
        return;
      }
      var cloudUrl = $fh.getCloudURL();
      deferred.resolve(cloudUrl);
    });

    return deferred.promise;
  };

  var initPromise = init();

  return {
    restrict: 'A',
    scope: {
      uid: '='
    },
    link: function(scope, element, attrs) {
      scope.$watch('uid', function(uid) {
        initPromise.then(function(cloudUrl) {
          element[0].src = cloudUrl + config.apiPath + '/get/' + uid;
          console.log(element[0].src);
        });
      });
    }
  }
})
;

},{"../config":24}],23:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var client = require('../file'),
    config = require('../config'),
    _ = require('lodash');

module.exports = 'wfm.file.service';

angular.module('wfm.file.service', [
  require('./directive')
])

.factory('fileClient', function($q) {
  var fileClient = {};

  _.forOwn(client, function(value, key) {
    if (typeof value  === 'function') {
      fileClient[key] = function() {
        return $q.when(client[key].apply(client, arguments));
      }
    } else {
      fileClient[key] = value;
    }
  });

  return fileClient;
})
;

},{"../config":24,"../file":25,"./directive":22,"lodash":"lodash"}],24:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = {
  apiHost: 'http://localhost:8080'
, apiPath: '/file/wfm'
}

},{}],25:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var config = require('./config'),
    q = require('q');

var client = {};

client.init = function() {
  var deferredFhinit = q.defer();
  $fh.on('fhinit', function(error, host) {
    if (error) {
      deferredFhinit.reject(new Error(error));
      return;
    }
    client.cloudUrl = $fh.getCloudURL();
    deferredFhinit.resolve();
  });

  var deferredReady = q.defer();
  if (window.cordova) {
    document.addEventListener("deviceready", function cameraReady() {
      deferredReady.resolve();
    }, false);
  } else {
    deferredReady.resolve();
  };

  client.initPromise = q.all([deferredFhinit.promise, deferredReady.promise])
  return client.initPromise;
};

client.uploadDataUrl = function(userId, dataUrl) {
  var deferred = q.defer();
  if (arguments.length < 2) {
    deferred.reject('Both userId and a dataUrl parameters are required.');
  } else {
    $fh.cloud({
      path: config.apiPath + '/owner/'+userId+'/upload/base64/photo.png',
      method: 'post',
      data: dataUrl
    },
    function(res) {
      deferred.resolve(res);
    },
    function(message, props) {
      var e = new Error(message);
      e.props = props;
      deferred.reject(e);
    });
  }
  return deferred.promise;
}

client.list = function(userId) {
  var url = arguments.length === 0 ? config.apiPath + '/all'
    : config.apiPath + '/owner/' + userId;
  var deferred = q.defer();
  $fh.cloud({
      path: url,
      method: 'get'
    },
    function(res) {
      deferred.resolve(res);
    },
    function(message, props) {
      var e = new Error(message);
      e.props = props;
      deferred.reject(e);
    }
  );
  return deferred.promise;
};

function fileUpload(fileURI, serverURI, fileUploadOptions) {
  var deferred = q.defer();
  var transfer = new FileTransfer();
  transfer.upload(fileURI, serverURI, function uploadSuccess(response) {
    deferred.resolve(response);
  }, function uploadFailure(error) {
    deferred.reject(error);
  }, fileUploadOptions);
  return deferred.promise;
};

function fileUploadRetry(fileURI, serverURI, fileUploadOptions, timeout, retries) {
  return fileUpload(fileURI, serverURI, fileUploadOptions)
  .then(function (response) {
    return response;
  }, function (error) {
    if (retries == 0) {
      throw new Error("Can't upload to " + JSON.stringify(serverURI));
    };
    return q.delay(timeout)
    .then(function () {
      return fileUploadRetry(fileURI, serverURI, fileUploadOptions, timeout, retries - 1);
    });
  });
};

client.uploadFile = function(userId, fileURI, options) {
  if (arguments.length < 2) {
    return q.reject('userId and fileURI parameters are required.');
  } else {
    options = options || {};
    var fileUploadOptions = new FileUploadOptions();
    fileUploadOptions.fileKey = options.fileKey || 'binaryfile';
    fileUploadOptions.fileName = options.fileName;
    fileUploadOptions.mimeType = options.mimeType || 'image/jpeg';
    fileUploadOptions.params = {
      ownerId: userId,
      fileName: options.fileName
    };
    var timeout = options.timeout || 2000;
    var retries = options.retries || 1;
    return client.initPromise.then(function() {
      var serverURI = window.encodeURI(client.cloudUrl + config.apiPath + '/upload/binary');
      return fileUploadRetry(fileURI, serverURI, fileUploadOptions, timeout, retries);
    })
  };
};

client.init();

module.exports = client;

},{"./config":24,"q":"q"}],26:[function(require,module,exports){
require('./workorder-map.tpl.html.js');

},{"./workorder-map.tpl.html.js":27}],27:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.map.directives');
} catch (e) {
  ngModule = angular.module('wfm.map.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workorder-map.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<div id=\'gmap_canvas\'></div>\n' +
    '');
}]);

},{}],28:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var ngModule = angular.module('wfm.map.directives', ['wfm.core.mediator']);
module.exports = 'wfm.map.directives';

require('../../dist');

ngModule.directive('workorderMap', function($templateCache, mediator, $window, $document, $timeout) {
  function initMap(element, center) {
    var myOptions = {
      zoom:14,
      center:new google.maps.LatLng(center[0], center[1]),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(element[0].querySelector('#gmap_canvas'), myOptions);
    return map;
  };

  function resizeMap(element, parent) {
    var mapElement = element[0].querySelector('#gmap_canvas')
    var height = parent.clientHeight;
    var width = parent.clientWidth;
    mapElement.style.height = height + 'px';
    mapElement.style.width = width + 'px';

    console.log('Map dimensions:', width, height);
    google.maps.event.trigger(mapElement, 'resize');
  };

  function addMarkers(map, element, workorders) {
    workorders.forEach(function(workorder) {
      if (workorder.location) {
        // var lat = center[0] + (Math.random() - 0.5) * 0.05;
        // var long = center[1] + (Math.random() - 0.5) * 0.2;
        var lat = workorder.location[0];
        var long = workorder.location[1];
        var marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(lat, long)});
        var infowindow = new google.maps.InfoWindow({content:'<strong>Workorder #'+workorder.id+'</strong><br>'+workorder.address+'<br>'});
        google.maps.event.addListener(marker, 'click', function(){
          infowindow.open(map,marker);
        });
      }
    });
  };

  function findParent(document, element, selector) {
    if (!selector) {
      return element.parentElement;
    }
    var matches = document.querySelectorAll(selector);
    var parent = element.parentElement;
    while(parent) {
      var isParentMatch = Array.prototype.some.call(matches, function(_match) {
        return parent === _match;
      });
      if (isParentMatch) {
        break;
      };
      var parent = parent.parentElement;
      console.log('parent', parent)
    }
    return parent || element.parentElement;
  }

  return {
    restrict: 'E',
    template: $templateCache.get('wfm-template/workorder-map.tpl.html'),
    scope: {
      list: '=',
      center: '=',
      workorders: '=',
      containerSelector: '@'
    },
    link: function (scope, element, attrs, ctrl) {
      var map = initMap(element, scope.center || [49.27, -123.08]);
      addMarkers(map, element, scope.workorders);
      var parent = findParent($document[0], element[0], scope.containerSelector);
      var resizeListener = function() {
        resizeMap(element, parent);
      }
      $timeout(resizeListener);
      angular.element($window).on('resize', resizeListener); // TODO: throttle this
      scope.$on('$destroy', function() {
        angular.element($window).off('resize', resizeListener);
      });
    },
    controller: function($scope, $window, $element) {

    },
    controllerAs: 'ctrl'
  };
})

},{"../../dist":26}],29:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm.map';

angular.module('wfm.map', [
  require('./directive')
, require('./service')
])

},{"./directive":28,"./service":30}],30:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var ngModule = angular.module('wfm.map.services', ['wfm.core.mediator']);
module.exports = 'wfm.map.services';

ngModule.factory('mapClient', function() {
  var mapClient = {};
  mapClient.getCoords = function(address) {
    // invoke the google API to return the co-ordinates of the given location
    // https://developers.google.com/maps/documentation/geocoding/intro
  }
})

},{}],31:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var mediator = require('../mediator');

angular.module('wfm.core.mediator', ['ng'])

.factory('mediator', function mediatorService($q, $log) {
  var originalRequest = mediator.request;

  // monkey patch the request function, wrapping the returned promise as an angular promise
  mediator.request = function() {
    var promise = originalRequest.apply(mediator, arguments);
    return $q.when(promise);
  };

  mediator.subscribeForScope = function(topic,scope,fn) {
    var subscriber = mediator.subscribe(topic,fn);
    scope.$on("$destroy", function() {
      mediator.remove(topic, subscriber.id);
    });

  };

  return mediator;
});

module.exports = 'wfm.core.mediator';

},{"../mediator":32}],32:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var _ = require('lodash');
var Mediator = require('mediator-js').Mediator;
var q = require('q');

var mediator = new Mediator();

mediator.promise = function() {
  var deferred = q.defer();
  var cb = function(data) {
    deferred.resolve(data);
  };
  var args = [];
  Array.prototype.push.apply(args, arguments);
  args.splice(1, 0, cb);
  mediator.once.apply(mediator, args);
  return deferred.promise;
}

mediator.request = function(topic, parameters, options) {
  var topics = {}, subs = {}, complete = false, timeout;
  var deferred = q.defer();
  options = options || {};

  topics.request = topic;
  topics.done = options.doneTopic || 'done:' + topic;
  topics.error = options.errorTopic || 'error:' + topic;

  var uid = null;
  if (_.has(options, 'uid')) {
    uid = options.uid;
  } else if (typeof parameters !== "undefined" && parameters !== null) {
    uid = parameters instanceof Array ? parameters[0] : parameters;
  }

  if (uid !== null) {
     topics.done += ':' + uid;
     topics.error += ':' + uid;
  }

  if (!options.timeout) {
    options.timeout = 2000;
  };

  var cleanUp = function() {
    complete = true;
    clearTimeout(timeout);
    mediator.remove(topics.done, subs.done.id);
    mediator.remove(topics.error, subs.error.id);
  };

  subs.done = mediator.subscribe(topics.done, function(result) {
    cleanUp();
    deferred.resolve(result);
  });

  subs.error = mediator.subscribe(topics.error, function(error) {
    cleanUp();
    deferred.reject(error);
  });

  var args = [topics.request];
  if (parameters instanceof Array) {
    Array.prototype.push.apply(args, parameters);
  } else {
    args.push(parameters);
  }
  mediator.publish.apply(mediator, args);

  timeout = setTimeout(function() {
    if (!complete) {
      cleanUp();
      deferred.reject(new Error('Mediator request timeout for topic ' +  topic));
    }
  }, options.timeout);

  return deferred.promise;
};

module.exports = mediator;

},{"lodash":"lodash","mediator-js":"mediator-js","q":"q"}],33:[function(require,module,exports){
require('./message-detail.tpl.html.js');
require('./message-form.tpl.html.js');
require('./message-list.tpl.html.js');

},{"./message-detail.tpl.html.js":34,"./message-form.tpl.html.js":35,"./message-list.tpl.html.js":36}],34:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.message.directives');
} catch (e) {
  ngModule = angular.module('wfm.message.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/message-detail.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar class="content-toolbar">\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <md-button ng-click="ctrl.closeMessage($event, ctrl.message)" hide-gt-sm class="md-icon-button">\n' +
    '      <md-icon aria-label="Close" md-font-set="material-icons">close</md-icon>\n' +
    '    </md-button>\n' +
    '    <h3>\n' +
    '     {{ctrl.message.subject}}\n' +
    '    </h3>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '<div class="wfm-maincol-scroll">\n' +
    '  <div class="message" layout-padding layout-margin>\n' +
    '\n' +
    '    <div class="message-header">\n' +
    '      <div class="md-body-1">\n' +
    '        <span>From:</span> {{ctrl.message.sender.name}}\n' +
    '      </div>\n' +
    '      <div class="md-body-1">\n' +
    '        <span>To:</span> {{ctrl.message.receiver.name}}\n' +
    '      </div>\n' +
    '      <div class="md-body-1">\n' +
    '        <span>Status:</span> {{ctrl.message.status}}\n' +
    '      </div>\n' +
    '      <!--<div class="md-body-1 time-stamp">11:38 AM (3 hours ago)</div>-->\n' +
    '    </div>\n' +
    '\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '    <p class="md-body-1">{{ctrl.message.content}}</p>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);

},{}],35:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.message.directives');
} catch (e) {
  ngModule = angular.module('wfm.message.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/message-form.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar class="content-toolbar md-primary">\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>New message</h3>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '<form name="messageForm" ng-submit="ctrl.done(messageForm.$valid)" novalidate layout-padding layout-margin>\n' +
    '\n' +
    '  <!--\n' +
    '  <md-input-container>\n' +
    '    <label for="messageState">Status</label>\n' +
    '    <input type="text" id="inputmessageType" name="messageStatus" ng-model="ctrl.model.status" disabled="true">\n' +
    '  </md-input-container>\n' +
    '  -->\n' +
    '\n' +
    '\n' +
    '<div>\n' +
    '  <md-input-container class="md-block" ng-class="{ \'has-error\' : messageForm.receiver.$invalid && !messageForm.receiver.$pristine }">\n' +
    '    <label for="selectReceiver">To</label>\n' +
    '    <md-select ng-model="ctrl.model.receiver" name="receiver" id="selectReceiver" required>\n' +
    '       <md-option ng-repeat="worker in ctrl.workers" value="{{worker}}">{{worker.name}} ({{worker.position}})</md-option>\n' +
    '     </md-select>\n' +
    '     <div ng-messages="messageForm.receiver.$error" ng-if="ctrl.submitted || messageForm.receiver.$dirty">\n' +
    '       <div ng-message="required">The To: field is required.</div>\n' +
    '     </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '<div>\n' +
    '  <md-input-container class="md-block" ng-class="{ \'has-error\' : messageForm.subject.$invalid && !messageForm.subject.$pristine }">\n' +
    '    <label for="inputSubject">Subject</label>\n' +
    '    <input type="text" id="inputSubject" name="subject" ng-model="ctrl.model.subject" required>\n' +
    '    <div ng-messages="messageForm.subject.$error" ng-if="ctrl.submitted || messageForm.subject.$dirty">\n' +
    '      <div ng-message="required">A subject is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '<div>\n' +
    '  <md-input-container class="md-block" ng-class="{ \'has-error\' : messageForm.content.$invalid && !messageForm.content.$pristine }">\n' +
    '    <label for="inputContent">Message</label>\n' +
    '    <textarea id="inputContent" name="content" ng-model="ctrl.model.content" required md-maxlength="350"></textarea>\n' +
    '\n' +
    '    <div ng-messages="messageForm.content.$error" ng-show="ctrl.submitted || messageForm.content.$dirty">\n' +
    '      <div ng-message="required">Message content is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '  <md-button type="submit" class="md-raised md-primary">Send message</md-button>\n' +
    '</form>\n' +
    '');
}]);

},{}],36:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.message.directives');
} catch (e) {
  ngModule = angular.module('wfm.message.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/message-list.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar>\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>\n' +
    '      <span>Messages</span>\n' +
    '    </h3>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '<form action="#" class="persistent-search">\n' +
    '  <label for="search"><i class="material-icons">search</i></label>\n' +
    '  <input type="text" id="search" placeholder="Search">\n' +
    '</form>\n' +
    '\n' +
    '\n' +
    '<div class="messages">\n' +
    '\n' +
    '  <md-list>\n' +
    '    <md-list-item class="md-3-line" ng-repeat="message in ctrl.list | reverse" ng-click="ctrl.selectMessage($event, message)" class="md-3-line workorder-item"\n' +
    '     ng-class="{active: ctrl.selected.id === message.id, new: message.status === \'unread\'}">\n' +
    '      <img ng-src="{{message.sender.avatar}}" class="md-avatar" alt="{{message.sender.name}}" />\n' +
    '      <div class="md-list-item-text" layout="column">\n' +
    '        <!--<span class="md-caption time-stamp">13 mins ago</span>-->\n' +
    '        <h3>{{message.sender.name}}</h3>\n' +
    '        <h4>{{message.subject}}</h4>\n' +
    '        <p>{{message.content}}</p>\n' +
    '      </div>\n' +
    '      <md-divider md-inset></md-divider>\n' +
    '    </md-list-item>\n' +
    '  </md-list>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);

},{}],37:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var ngModule = angular.module('wfm.message.directives', ['wfm.core.mediator']);
module.exports = 'wfm.message.directives';

require('../../dist');

ngModule.directive('messageList', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/message-list.tpl.html')
  , scope: {
      list : '=list',
      selectedModel: '='
    }
  , controller: function($scope) {
        var self = this;
        self.list = $scope.list;
        self.selected = $scope.selectedModel;
        self.selectMessage = function(event, message) {
        self.selectedMessageId = message.id;
        mediator.publish('wfm:message:selected', message);
        event.preventDefault();
        event.stopPropagation();
      }
      self.ismessageShown = function(message) {
        return self.shownmessage === message;
      };
    }
  , controllerAs: 'ctrl'
  };
})

.directive('messageForm', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/message-form.tpl.html')
  , scope: {
    message : '=value'
  , workers: '='
    }
  , controller: function($scope) {
      var self = this;
      self.model = angular.copy($scope.message);
      self.workers = $scope.workers;
      self.submitted = false;
      self.done = function(isValid) {
        self.submitted = true;
        self.model.receiver = JSON.parse(self.model.receiver);
        self.model.receiverId = self.model.receiver.id;
        self.model.status = "unread";
        if (isValid) {
            mediator.publish('wfm:message:created', self.model);
        }
      }
    }
  , controllerAs: 'ctrl'
  };
})

.directive('messageDetail', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/message-detail.tpl.html')
  , scope: {
    message : '=message'
    }
  , controller: function($scope) {
      var self = this;
      self.message = $scope.message;
      self.showSelectButton = !! $scope.$parent.messages;
      self.selectmessage = function(event, message) {
        mediator.publish('wfm:message:selected', message);
        event.preventDefault();
        event.stopPropagation();
      }
      self.closeMessage = function(event, message) {
        mediator.publish('wfm:message:close:' + message.id);
        event.preventDefault();
        event.stopPropagation();
      }
    }
  , controllerAs: 'ctrl'
  };
})
;

},{"../../dist":33}],38:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm.message';

angular.module('wfm.message', [
  require('./directive')
, require('./sync-service')
])

},{"./directive":37,"./sync-service":39}],39:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var config = require('../config')
  , _ = require('lodash')
  ;

module.exports = 'wfm.message.sync';

function removeLocalVars(object) {
  _.keys(object).filter(function(key) {
    return key.indexOf('_') === 0;
  }).forEach(function(localKey) {
    delete object[localKey];
  });
  if (object.results) {
    _.values(object.results).forEach(function(result) {
      _.keys(result.submission).filter(function(key) {
        return key.indexOf('_') === 0;
      }).forEach(function(localKey) {
        delete result.submission[localKey];
      });
    });
  };
};

function wrapManager($q, $timeout, manager) {
  var wrappedManager = _.create(manager);
  wrappedManager.new = function() {
    var deferred = $q.defer();
    $timeout(function() {
      var message = {
        type: 'Message'
      , status: 'New'
      };
      deferred.resolve(message);
    }, 0);
    return deferred.promise;
  };

  return wrappedManager;
}

angular.module('wfm.message.sync', [require('fh-wfm-sync')])
.factory('messageSync', function($q, $timeout, syncService) {
  syncService.init($fh, config.syncOptions);
  var messageSync = {};
  messageSync.createManager = function(queryParams) {
    if (messageSync.manager) {
      return $q.when(messageSync.manager);
    } else {
      return messageSync.managerPromise = syncService.manage(config.datasetId, null, queryParams)
      .then(function(manager) {
        messageSync.manager = wrapManager($q, $timeout, manager);
        console.log('Sync is managing dataset:', config.datasetId, 'with filter: ', queryParams);
        return messageSync.manager;
      })
    }
  };
  messageSync.removeManager = function() {
    if (messageSync.manager) {
      return messageSync.manager.safeStop()
      .then(function() {
        delete messageSync.manager;
      })
    }
  }
  return messageSync;
})
.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
;

},{"../config":40,"fh-wfm-sync":53,"lodash":"lodash"}],40:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = {
  apiHost: 'http://localhost:8080',
  apiPath: '/api/wfm/message',
  datasetId : 'messages',
  syncOptions : {
    "sync_frequency" : 5,
    "storage_strategy": "dom",
    "do_console_log": false
  }
}

},{}],41:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm.result';

angular.module('wfm.result', [
  require('./service')
])

},{"./service":42}],42:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var config = require('../config')
  , _ = require('lodash')
  ;

module.exports = 'wfm.result.sync';

function wrapManager($q, $timeout, manager) {
  var wrappedManager = _.create(manager);
  wrappedManager.getByWorkorderId = function(workorderId) {
    return wrappedManager.list()
    .then(function(results) {
      return wrappedManager.filterByWorkorder(results, workorderId);
    });
  };
  wrappedManager.filterByWorkorder = function(resultsArray, workorderId) {
    var deferred = $q.defer();
    var filtered = resultsArray.filter(function(result) {
      return String(result.workorderId) === String(workorderId);
    });
    var result =  filtered && filtered.length ? filtered[0] : {};
    deferred.resolve(result);
    return deferred.promise;
  };
  wrappedManager.extractAppformSubmissionIds = function(result) {
    var submissionIds = null;
    if ( result && result.stepResults && ! _.isEmpty(result.stepResults)) {
      var appformStepResults = _.filter(result.stepResults, function(stepResult) {
        return !! stepResult.step.formId;
      });
      if (! _.isEmpty(appformStepResults)) {
        submissionIds = _.map(appformStepResults, function(stepResult) {
          return stepResult.submission.submissionId;
        }).filter(function(id) {
          return !! id;
        });
      };
    };
    return submissionIds;
  }
  return wrappedManager;
}

angular.module('wfm.result.sync', [require('fh-wfm-sync')])
.factory('resultSync', function($q, $timeout, syncService) {
  syncService.init($fh, config.syncOptions);
  var resultSync = {};
  resultSync.managerPromise = syncService.manage(config.datasetId)
  .then(function(manager) {
    resultSync.manager = wrapManager($q, $timeout, manager);
    console.log('Sync is managing dataset:', config.datasetId);
    return resultSync.manager;
  });
  return resultSync;
})

.filter('isEmpty', function () {
  return function (object) {
    return (Object.keys(object).length === 0);
  };
})

.run(function(mediator, resultSync) {
  mediator.subscribe('wfm:appform:submission:complete', function(event) {
    var metaData = event.metaData.wfm;
    var submissionResult = event.submissionResult;
    resultSync.managerPromise
    .then(function(manager) {
      return manager.getByWorkorderId(metaData.workorderId)
      .then(function(result) {
        var stepResult = result.stepResults[metaData.step.code];
        stepResult.submission = submissionResult;
        return manager.update(result);
      })
    })
    .then(function(result) {
      mediator.publish('wfm:result:remote-update:' + result.workorderId, result);
    })
  })
})
;

},{"../config":43,"fh-wfm-sync":53,"lodash":"lodash"}],43:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = {
  apiHost: 'http://localhost:8080',
  apiPath: '/api/wfm/result',
  datasetId : 'result',
  syncOptions : {
    "sync_frequency" : 5,
    "storage_strategy": "dom",
    "do_console_log": false
  }
}

},{}],44:[function(require,module,exports){
require('./risk-assessment-form.tpl.html.js');
require('./risk-assessment.tpl.html.js');

},{"./risk-assessment-form.tpl.html.js":45,"./risk-assessment.tpl.html.js":46}],45:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.risk-assessment');
} catch (e) {
  ngModule = angular.module('wfm.risk-assessment', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/risk-assessment-form.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '  <div ng-show="riskAssessmentStep === 0" layout-padding class="risk-assesssment">\n' +
    '      <h2 class="md-title">Risk assessment complete?</h2>\n' +
    '      <p class="md-body-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n' +
    '\n' +
    '      <p class="md-body-1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n' +
    '\n' +
    '    <div class="workflow-actions md-padding md-whiteframe-z4">\n' +
    '      <md-button class="md-primary md-warn" ng-click="ctrl.answerComplete($event, true)">No</md-button>\n' +
    '      <md-button class="md-primary" ng-click="ctrl.answerComplete($event, true)">Yes</md-button>\n' +
    '    </div><!-- workflow-actions-->\n' +
    '\n' +
    '  </div>\n' +
    '\n' +
    '  <div ng-if="riskAssessmentStep == 1" layout-padding>\n' +
    '\n' +
    '    <h3 class="md-title">Signature</h3>\n' +
    '    <p class="md-caption">Draw your signature inside the square</p>\n' +
    '    <signature-form value="ctrl.model.signature"></signature-form>\n' +
    '\n' +
    '    <div class="workflow-actions md-padding md-whiteframe-z4">\n' +
    '      <md-button class="md-primary md-hue-1" ng-click="ctrl.back($event)">Back</md-button>\n' +
    '      <md-button class="md-primary" ng-click="ctrl.done($event)">Continue</md-button>\n' +
    '    </div><!-- workflow-actions-->\n' +
    '  </div>\n' +
    '');
}]);

},{}],46:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.risk-assessment');
} catch (e) {
  ngModule = angular.module('wfm.risk-assessment', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/risk-assessment.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '  <md-subheader>Risk Assessment</md-subheader>\n' +
    '\n' +
    '  <md-list class="risk-assessment">\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons" ng-if="riskAssessment.complete" class="success">check_circle</md-icon>\n' +
    '      <md-icon md-font-set="material-icons" ng-if="! riskAssessment.complete" class="danger">cancel</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3 ng-if="riskAssessment.complete">Complete</h3>\n' +
    '        <h3 ng-if="! riskAssessment.complete">Uncompleted</h3>\n' +
    '        <p>Risk Assessment</p>\n' +
    '      </div>\n' +
    '    <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '    <md-list-item class="md-2-line with-image">\n' +
    '      <md-icon md-font-set="material-icons">gesture</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3><signature value="riskAssessment.signature"></signature></h3>\n' +
    '        <p>Risk Assessment signature</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '</md-list>\n' +
    '');
}]);

},{}],47:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var ngModule = angular.module('wfm.risk-assessment', ['wfm.core.mediator', require('fh-wfm-signature')])

require('../../dist');

ngModule.directive('riskAssessment', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/risk-assessment.tpl.html')
  , scope: {
      riskAssessment: "=value"
    }
  , controller: function($scope) {
      var self = this;
    }
  , controllerAs: 'ctrl'
  };
})

ngModule.directive('riskAssessmentForm', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/risk-assessment-form.tpl.html')
  , scope: {
    }
  , controller: function($scope) {
      var self = this;
      $scope.riskAssessmentStep = 0
      self.model = {};
      self.answerComplete = function(event, answer) {
        self.model.complete = answer;
        $scope.riskAssessmentStep++;
        event.preventDefault();
        event.stopPropagation();
      };
      self.back = function(event) {
        mediator.publish('wfm:workflow:step:back');
        event.preventDefault();
        event.stopPropagation();
      }
      self.done = function(event) {
        mediator.publish('wfm:workflow:step:done', self.model);
        event.preventDefault();
        event.stopPropagation();
      };
    }
  , controllerAs: 'ctrl'
  };
})
;

module.exports = 'wfm.risk-assessment';

},{"../../dist":44,"fh-wfm-signature":51}],48:[function(require,module,exports){
require('./signature-form.tpl.html.js');
require('./signature.tpl.html.js');

},{"./signature-form.tpl.html.js":49,"./signature.tpl.html.js":50}],49:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.signature');
} catch (e) {
  ngModule = angular.module('wfm.signature', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/signature-form.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<div class="signature-form">\n' +
    '  <canvas tabindex="0"></canvas>\n' +
    '</div>\n' +
    '');
}]);

},{}],50:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.signature');
} catch (e) {
  ngModule = angular.module('wfm.signature', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/signature.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<img ng-src="{{ctrl.signature}}"></img>\n' +
    '');
}]);

},{}],51:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var canvasDrawr = require('../canvas-drawr');

module.exports = 'wfm.signature';

var ngModule = angular.module('wfm.signature', ['wfm.core.mediator'])

require('../../dist');

ngModule.directive('signatureForm', function($templateCache, $document, $timeout, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/signature-form.tpl.html')
  , scope: {
      value: '=',
      options: '='
    }
  , link: function (scope, element, attrs, ctrl) {
      var options = scope.options || {};
      console.log('touch support', 'ontouchstart' in $document[0]);
      var drawr = 'ontouchstart' in $document[0]
        ? new canvasDrawr.CanvasDrawr(element, options, $document)
        : new canvasDrawr.CanvasDrawrMouse(element, options, $document);

      var $canvas = angular.element(element[0].getElementsByTagName('canvas')[0]);
      $timeout(function() {
        $canvas.on('blur', function() {
          scope.$apply(function() {
            ctrl.submit(element);
          })
        });
      })
    }
  , controller: function($scope) {
      var self = this;
      self.submit = function(element) {
        var canvas = element[0].getElementsByTagName('canvas')[0];
        $scope.value = canvas.toDataURL();
      }
    }
  , controllerAs: 'ctrl'
  };
})

ngModule.directive('signature', function($templateCache) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/signature.tpl.html')
  , scope: {
      value: '='
    }
  , controller: function($scope) {
      var self = this;
      self.signature = $scope.value;
    }
  , controllerAs: 'ctrl'
  };
})
;

},{"../../dist":48,"../canvas-drawr":52}],52:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var CanvasDrawrMouse = function (element, options) {
  var canvas = element[0].getElementsByTagName('canvas')[0];
  var ctx = canvas.getContext("2d");
  canvas.style.width = '100%';
  canvas.width = (window.innerWidth);
  canvas.height = 200;
  canvas.style.width = '';

  // set props from options, but the defaults are for the cool kids
  ctx.lineWidth = options.size || 5;
  ctx.lineCap = options.lineCap || "round";
  options.color = options.color || 'blue';

  // last known position
  var pos = { x: 0, y: 0 };

  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mousedown', setPosition);
  canvas.addEventListener('mouseup', stop);
  canvas.addEventListener('mouseout', stop);

  // new position from mouse event
  function setPosition(e) {
    e.preventDefault();
    e.stopPropagation();
    canvas.focus();
    var rect = canvas.getBoundingClientRect();
    var offset = {
      top: rect.top,
      left: rect.left
    };
    pos.x = e.clientX - offset.left;
    pos.y = e.clientY - offset.top;
  }

  function draw(e) {
    e.preventDefault();
    e.stopPropagation();
    // mouse left button must be pressed
    if (e.buttons !== 1) return;

    ctx.beginPath(); // begin

    ctx.strokeStyle = options.color;

    ctx.moveTo(pos.x, pos.y); // from

    var rect = canvas.getBoundingClientRect();
    var offset = {
      top: rect.top,
      left: rect.left
    };
    pos.x = e.clientX - offset.left;
    pos.y = e.clientY - offset.top;
    ctx.lineTo(pos.x, pos.y); // to

    ctx.stroke(); // draw it!

  }

  function stop() {
    canvas.blur();
  }
};

var CanvasDrawr = function(element, options, $document) {
  var canvas = element[0].getElementsByTagName('canvas')[0];
  var ctx = canvas.getContext('2d');
  canvas.style.width = '100%'
  canvas.width = canvas.offsetWidth;
  canvas.style.width = '';

  // set props from options, but the defaults are for the cool kids
  ctx.lineWidth = options.size || 5;
  ctx.lineCap = options.lineCap || 'round';
  options.color = options.color || 'blue';
  ctx.pX = undefined;
  ctx.pY = undefined;

  var lines = [,,];
  var rect = canvas.getBoundingClientRect();

  var offset = {
    top: rect.top + $document[0].body.scrollTop,
    left: rect.left + $document[0].body.scrollLeft
  };

  var self = {
    //bind click events
    init: function() {
      // use anguler.element#on for automatic listener cleanup
      var canvasNg = angular.element(canvas);
      //set pX and pY from first click
      canvasNg.on('touchstart', self.preDraw);
      canvasNg.on('touchmove', self.draw);
      canvasNg.on('touchend', self.stop);
      canvasNg.on('touchcancel', self.stop);
    },

    preDraw: function(event) {
      canvas.focus();
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
      ctx.strokeStyle = lines[i].color;
      ctx.beginPath();
      ctx.moveTo(lines[i].x, lines[i].y);

      ctx.lineTo(lines[i].x + changeX, lines[i].y + changeY);
      ctx.stroke();
      ctx.closePath();

      return { x: lines[i].x + changeX, y: lines[i].y + changeY };
    },

    stop: function() {
      canvas.blur();
    }
  };

  return self.init();
}

module.exports = {
  CanvasDrawr: CanvasDrawr,
  CanvasDrawrMouse: CanvasDrawrMouse
};

},{}],53:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var sync = require('../client')

module.exports = 'wfm.sync.service';

angular.module('wfm.sync.service', [])

.factory('syncService', function($q) {
  var syncService = {};
  var managerPromise;

  function ManagerWrapper(_manager) {
    this.manager = _manager;
    var self = this;

    var methodNames = ['create', 'read', 'update', 'delete', 'list', 'start', 'stop', 'safeStop', 'getQueueSize', 'forceSync', 'waitForSync'];
    methodNames.forEach(function(methodName) {
      self[methodName] = function() {
        return $q.when(self.manager[methodName].apply(self.manager, arguments));
      }
    });
  };

  syncService.init = function($fh, syncOptions) {
    sync.init($fh, syncOptions);
  }

  syncService.manage = function(datasetId, options, queryParams, metaData) {
    return $q.when(sync.manage(datasetId, options, queryParams, metaData))
    .then(function(_manager) {
      var manager = new ManagerWrapper(_manager);
      manager.stream = _manager.stream;
      return manager;
    });
  };

  return syncService;
})
;

},{"../client":54}],54:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var _ = require('lodash')
  , q = require('q')
  , defaultConfig = require('./config')
  , Rx = require('rx')
  ;

var $fh, initialized = false, notificationStream, listeners = [];

function transformDataSet(syncData) {
  var result = _.values(syncData).map(function(syncData) {
    return syncData.data;
  });
  return _.sortBy(result, function(o) { return o.id; });
}

function formatError(code, msg) {
  var error = 'Error';
  if (code && msg) {
    error += ' ' + code + ': ' + msg;
  } else if (code && !msg) {
    error += ': ' + code;
  } else if (!code && msg) {
    error += ': ' + msg;
  } else {
    error += ': no error details available'
  }
  return error;
}

function init(_$fh, _syncOptions) {
  if (initialized) {
    console.log('sync-client already initalized.');
  } else {
    console.log('sync-client initalizing.');
    $fh = _$fh;
    notificationStream = Rx.Observable.create(function (observer) {
      addListener(function(notification) {
        observer.onNext(notification);
      });
    })
    .share();
    var syncOptions = _.defaults(_syncOptions, defaultConfig.syncOptions);

    $fh.sync.init(syncOptions);
    initialized = true;
    $fh.sync.notify(function(notification) {
      listeners.forEach(function(listener) {
        listener.call(undefined, notification);
      });
    });
  }
};

function manage(datasetId, options, queryParams, metaData) {
  var deferred = q.defer();
  if (!initialized) {
    deferred.resolve('Sync not yet initialized.  Call sync-client.init() first.');
  } else {
    //manage the dataSet
    $fh.sync.manage(datasetId, options, queryParams, metaData, function() {
      var manager = new DataManager(datasetId);
      manager.stream = notificationStream.filter(function(notification) {
        return notification.dataset_id == datasetId;
      })
      deferred.resolve(manager);
    });
  }
  return deferred.promise;
}

function addListener(listener) {
  listeners.push(listener);
}

function DataManager(datasetId) {
  this.datasetId = datasetId;
}

DataManager.prototype.list = function() {
  var deferred = q.defer();
  $fh.sync.doList(this.datasetId, function(res) {
    var objects = transformDataSet(res);
    deferred.resolve(objects);
  }, function(code, msg) {
    deferred.reject(new Error(formatError(code, msg)));
  });
  return deferred.promise;
};

DataManager.prototype.create = function(object) {
  var deferred = q.defer();
  var self = this;
  $fh.sync.doCreate(self.datasetId, object, function(msg) {
    // success
    self.stream.filter(function(notification) {
      return notification.code == 'local_update_applied'
        && notification.message == 'create'
        ; // && notification.uid == object._localuid;  TODO: get the sync framework to include the temporary uid in the notification
    }).take(1).toPromise(q.Promise)
    .then(function(notification) {
      object._localuid = msg.uid;
      return self.update(object);
    })
    .then(function(result) {
      deferred.resolve(result);
    })
  }, function(code, msg) {
    // failure
    deferred.reject(new Error(formatError(code, msg)));
  });
  return deferred.promise;
};

DataManager.prototype.read = function(id) {
  var deferred = q.defer();
  $fh.sync.doRead(this.datasetId, id, function(res) {
    // success
    deferred.resolve(res.data);
  }, function(code, msg) {
    // failure
    deferred.reject(new Error(formatError(code, msg)));
  });
  return deferred.promise;
};

DataManager.prototype.update = function(object) {
  var deferred = q.defer();
  var self = this;
  var uidPromise = _.has(object, 'id')
    ? q.when(String(object.id))
    : self.read(object._localuid).then(function(_object) {
      console.log('_object', _object)
      if (_.has(_object, 'id')) {
        object.id = _object.id;
        return String(_object.id);
      } else {
        return object._localuid;
      }
    });
  uidPromise.then(function(uid) {
    console.log('updating with id', uid)
  $fh.sync.doUpdate(self.datasetId, uid, object, function(msg) {
    // success
    self.stream.filter(function(notification) {
      return notification.code === 'local_update_applied'
        && notification.message === 'update'
        && notification.uid === uid;
    }).take(1).toPromise(q.Promise)
    .then(function(notification) {
      return self.read(uid);
    })
    .then(function(result) {
      console.log('result', result)
      deferred.resolve(result);
    })
  }, function(code, msg) {
    // failure
    console.error('Error updating', object);
    deferred.reject(new Error(formatError(code, msg)));
  });
});
  return deferred.promise;
};

DataManager.prototype.delete = function(object) {
  var deferred = q.defer();
  var self = this;
  $fh.sync.doDelete(self.datasetId, object.id, function(res) {
    // success
    var uid = String(object.id);
    self.stream.filter(function(notification) {
      return notification.code === 'local_update_applied'
        && notification.message === 'delete'
        && String(notification.uid) === uid;
    }).take(1).toPromise(q.Promise)
    .then(function(notification) {
      deferred.resolve(notification.message);
    })
  }, function(code, msg) {
    // failure
    deferred.reject(new Error(formatError(code, msg)));
  });
  return deferred.promise;
};

DataManager.prototype.start = function() {
  var deferred = q.defer();
  $fh.sync.startSync(this.datasetId, function(){
    deferred.resolve('sync loop started');
  }, function(error){
    deferred.reject(error);
  });
  return deferred.promise;
};

DataManager.prototype.stop = function() {
  var deferred = q.defer();
  var self = this;
  $fh.sync.stopSync(this.datasetId, function(){
    if (self.recordDeltaReceivedSubscription) {
      self.recordDeltaReceivedSubscription.dispose();
    }
    deferred.resolve('sync loop stopped');
  }, function(error){
    deferred.reject(error);
  });
  return deferred.promise;
};

DataManager.prototype.forceSync = function() {
  var deferred = q.defer();
  $fh.sync.forceSync(this.datasetId, function(){
    deferred.resolve('sync loop will run');
  }, function(error){
    deferred.reject(error);
  });
  return deferred.promise;
};

DataManager.prototype.getQueueSize = function() {
  var deferred = q.defer();
  $fh.sync.getPending(this.datasetId, function(pending) {
    deferred.resolve(_.size(pending));
  });
  return deferred.promise;
}

DataManager.prototype.safeStop = function(userOptions) {
  var deferred = q.defer();
  var defaultOptions = {
    timeout: 2000
  }
  var self = this;
  var options = _.defaults(userOptions, defaultOptions);
  self.getQueueSize()
  .then(function(size) {
    if (size === 0) {
      self.stop().then(deferred.resolve);
    } else {
      deferred.notify('Calling forceSync sync before stop');
      return self.forceSync()
      .then(self.waitForSync.bind(self))
      .timeout(options.timeout)
      .then(self.getQueueSize.bind(self))
      .then(function(size) {
        if (size > 0) {
          deferred.reject(new Error('forceSync failed, outstanding results still present'));
        };
      })
      .then(self.stop.bind(self))
      .then(function() {
        deferred.resolve()
      }, function(error) {
        deferred.reject(new Error('forceSync timeout'));
      });
    }
  });
  return deferred.promise;
}

DataManager.prototype.waitForSync = function() {
  var deferred = q.defer();
  var self = this;
  self.stream.filter(function(notification) {
    return notification.code == 'sync_complete' || notification.code == 'sync_failed';
  }).take(1).toPromise(q.Promise)
  .then(function(notification) {
    if (notification.code === 'sync_complete') {
      deferred.resolve(notification);
    } else if (notification.code === 'sync_failed') {
      deferred.reject(new Error('Sync Failed', notification));
    }
  });
  return deferred.promise;
}

DataManager.prototype.publishRecordDeltaReceived = function(mediator) {
  var self = this;
  self.recordDeltaReceivedSubscription = self.stream.filter(function(notification) {
    return notification.code == 'record_delta_received'
  }).subscribe(function(notification) {
    mediator.publish('wfm:sync:record_delta_received:' + self.datasetId, notification);
  })
};

module.exports = {
  init: init
, manage: manage
, addListener: addListener
}

},{"./config":55,"lodash":"lodash","q":"q","rx":"rx"}],55:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = {
  syncOptions : {
    "sync_frequency" : 5,
    "storage_strategy": "dom",
    "do_console_log": false
  }
}

},{}],56:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.user.directives');
} catch (e) {
  ngModule = angular.module('wfm.user.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/group-form.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar class="content-toolbar">\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>\n' +
    '      Group #{{ctrl.model.id}}\n' +
    '    </h3>\n' +
    '\n' +
    '    <span flex></span>\n' +
    '    <md-button class="md-icon-button" aria-label="Close" ng-click="ctrl.selectGroup($event, ctrl.model)">\n' +
    '      <md-icon md-font-set="material-icons">close</md-icon>\n' +
    '    </md-button>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '<md-button class="md-fab" aria-label="New group" ui-sref="app.group.new">\n' +
    '  <md-icon md-font-set="material-icons">add</md-icon>\n' +
    '</md-button>\n' +
    '\n' +
    '<div class="wfm-maincol-scroll">\n' +
    '<form name="groupForm" ng-submit="ctrl.done(groupForm.$valid)" novalidate layout-padding layout-margin>\n' +
    '\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="groupname">Group Name</label>\n' +
    '    <input type="text" id="groupname" name="groupname" ng-model="ctrl.model.name" required>\n' +
    '    <div ng-messages="workorderForm.groupname.$error" ng-if="ctrl.submitted || groupForm.groupname.$dirty">\n' +
    '      <div ng-message="required">A name is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="assignee">Role</label>\n' +
    '    <md-select ng-model="ctrl.model.role" name="assignee" id="assignee">\n' +
    '       <md-option value="admin">Admin</md-option>\n' +
    '       <md-option value="manager">Manager</md-option>\n' +
    '       <md-option value="worker">Worker</md-option>\n' +
    '     </md-select>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-button type="submit" class="md-raised md-primary">{{ctrl.model.id || ctrl.model.id === 0 ? \'Update\' : \'Create\'}} Group</md-button>\n' +
    '</form>\n' +
    '</div>\n' +
    '');
}]);

},{}],57:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.user.directives');
} catch (e) {
  ngModule = angular.module('wfm.user.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/group-list.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar>\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>\n' +
    '      <span>Groups</span>\n' +
    '    </h3>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '<form action="#" class="persistent-search">\n' +
    '  <label for="search"><i class="material-icons">search</i></label>\n' +
    '  <input type="text" id="search" placeholder="Search" ng-model="searchValue" ng-change="ctrl.applyFilter(searchValue)">\n' +
    '</form>\n' +
    '\n' +
    '<md-list>\n' +
    '  <md-list-item class="md-2-line" ng-click="ctrl.selectGroup($event, group)" ng-repeat="group in ctrl.groups" ng-class="{active: ctrl.selected.id === group.id}">\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3>{{group.name}}</h3>\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '  </md-list-item>\n' +
    '</md-list>\n' +
    '');
}]);

},{}],58:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.user.directives');
} catch (e) {
  ngModule = angular.module('wfm.user.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/group.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-list>\n' +
    '  <md-list-item class="md-2-line" >\n' +
    '    <md-icon md-font-set="material-icons">group</md-icon>\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3>{{ctrl.group.id}}</h3>\n' +
    '      <p>Group id</p>\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '  </md-list-item>\n' +
    '\n' +
    '  <md-list-item class="md-2-line" >\n' +
    '    <md-icon md-font-set="material-icons">group</md-icon>\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3>{{ctrl.group.name}}</h3>\n' +
    '      <p>Group name</p>\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '  </md-list-item>\n' +
    '\n' +
    '  <md-list-item class="md-2-line" >\n' +
    '    <md-icon md-font-set="material-icons">group</md-icon>\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3>{{ctrl.group.role}}</h3>\n' +
    '      <p>Role</p>\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '  </md-list-item>\n' +
    '</md-list>\n' +
    '\n' +
    '<md-toolbar class="content-toolbar">\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>\n' +
    '      Members\n' +
    '    </h3>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '<md-list>\n' +
    '  <md-list-item class="md-2-line" ng-click="ctrl.selectMember($event, member)" ng-repeat="member in ctrl.members">\n' +
    '    <img alt="user.name" ng-src="{{member.avatar}}" class="md-avatar" />\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3>{{member.name}}</h3>\n' +
    '      <p>{{member.position}}</p>\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '  </md-list-item>\n' +
    '</md-list>\n' +
    '');
}]);

},{}],59:[function(require,module,exports){
require('./group-form.tpl.html.js');
require('./group-list.tpl.html.js');
require('./group.tpl.html.js');
require('./worker-form.tpl.html.js');
require('./worker-list.tpl.html.js');
require('./worker.tpl.html.js');

},{"./group-form.tpl.html.js":56,"./group-list.tpl.html.js":57,"./group.tpl.html.js":58,"./worker-form.tpl.html.js":60,"./worker-list.tpl.html.js":61,"./worker.tpl.html.js":62}],60:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.user.directives');
} catch (e) {
  ngModule = angular.module('wfm.user.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/worker-form.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar class="content-toolbar">\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>\n' +
    '      Worker ID {{ctrl.model.id}}\n' +
    '    </h3>\n' +
    '\n' +
    '    <span flex></span>\n' +
    '    <md-button class="md-icon-button" aria-label="Close" ng-click="ctrl.selectWorker($event, ctrl.model)">\n' +
    '      <md-icon md-font-set="material-icons">close</md-icon>\n' +
    '    </md-button>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '<md-button class="md-fab" aria-label="New Workorder" ui-sref="app.worker.new">\n' +
    '  <md-icon md-font-set="material-icons">add</md-icon>\n' +
    '</md-button>\n' +
    '\n' +
    '<div class="wfm-maincol-scroll">\n' +
    '\n' +
    '<form name="workerForm" ng-submit="ctrl.done(workerForm.$valid)" novalidate layout-padding layout-margin>\n' +
    '\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="workername">Worker Name</label>\n' +
    '    <input type="text" id="workername" name="workername" ng-model="ctrl.model.name" required>\n' +
    '    <div ng-messages="workerForm.workername.$error" ng-if="ctrl.submitted || workerForm.workername.$dirty">\n' +
    '      <div ng-message="required">A name is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="workername">Username</label>\n' +
    '    <input type="text" id="username" name="username" ng-model="ctrl.model.username" required>\n' +
    '    <div ng-messages="workerForm.username.$error" ng-if="ctrl.submitted || workerForm.username.$dirty">\n' +
    '      <div ng-message="required">A username is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="workername">Banner</label>\n' +
    '    <input type="text" id="banner" name="banner" ng-model="ctrl.model.banner">\n' +
    '    <div ng-messages="workerForm.banner.$error" ng-if="ctrl.submitted || workerForm.banner.$dirty"></div>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="workername">Avatar</label>\n' +
    '    <input type="text" id="avatar" name="avatar" ng-model="ctrl.model.avatar">\n' +
    '    <div ng-messages="workerForm.avatar.$error" ng-if="ctrl.submitted || workerForm.avatar.$dirty"></div>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="workername">Phone number</label>\n' +
    '    <input type="text" id="phonenumber" name="phonenumber" ng-model="ctrl.model.phone" required>\n' +
    '    <div ng-messages="workerForm.phonenumber.$error" ng-if="ctrl.submitted || workerForm.phonenumber.$dirty">\n' +
    '      <div ng-message="required">A phone number is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="workername">Email</label>\n' +
    '    <input type="text" id="email" name="email" ng-model="ctrl.model.email" required>\n' +
    '    <div ng-messages="workerForm.email.$error" ng-if="ctrl.submitted || workerForm.email.$dirty">\n' +
    '      <div ng-message="required">An email is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="workername">Position</label>\n' +
    '    <input type="text" id="position" name="position" ng-model="ctrl.model.position" required>\n' +
    '    <div ng-messages="workerForm.position.$error" ng-if="ctrl.submitted || workerForm.position.$dirty">\n' +
    '      <div ng-message="required">An position is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="assignee">Group</label>\n' +
    '    <md-select ng-model="ctrl.model.group" name="group" id="group">\n' +
    '       <md-option ng-repeat="group in ctrl.groups" value="{{group.id}}">{{group.name}}</md-option>\n' +
    '     </md-select>\n' +
    '  </md-input-container> \n' +
    '\n' +
    '  <md-button type="submit" class="md-raised md-primary">{{ctrl.model.id || ctrl.model.id === 0 ? \'Update\' : \'Create\'}} Worker</md-button>\n' +
    '</form>\n' +
    '</div>\n' +
    '');
}]);

},{}],61:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.user.directives');
} catch (e) {
  ngModule = angular.module('wfm.user.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/worker-list.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar>\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>\n' +
    '      <span>Workers</span>\n' +
    '    </h3>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '<form action="#" class="persistent-search">\n' +
    '  <label for="search"><i class="material-icons">search</i></label>\n' +
    '  <input type="text" name="search" placeholder="Search" ng-model="searchValue" ng-change="ctrl.applyFilter(searchValue)">\n' +
    '</form>\n' +
    '\n' +
    '<md-list>\n' +
    '  <md-list-item class="md-2-line" ng-click="ctrl.selectWorker($event, user)"  ng-repeat="user in ctrl.workers" ng-class="{active: ctrl.selected.id === user.id}">\n' +
    '    <img alt="user.name" ng-src="{{user.avatar}}" class="md-avatar" />\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3>{{user.name}}</h3>\n' +
    '      <p>{{user.position}}</p>\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '  </md-list-item>\n' +
    '</md-list>\n' +
    '');
}]);

},{}],62:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.user.directives');
} catch (e) {
  ngModule = angular.module('wfm.user.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/worker.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-content class="wfm-maincol-scroll wfm-maincol-scroll_with-menu">\n' +
    '  <div class="user-info-header" ng-style="ctrl.style">\n' +
    '    <h1 class="md-display-1">{{ctrl.worker.name}}</h1>\n' +
    '  </div>\n' +
    '  <md-list>\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">person</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{ctrl.worker.username}}</h3>\n' +
    '        <p>Username</p>\n' +
    '      </div>\n' +
    '      <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">phone</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{ctrl.worker.phone}}</h3>\n' +
    '        <p>Phone Number</p>\n' +
    '      </div>\n' +
    '      <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">email</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{ctrl.worker.email}}</h3>\n' +
    '        <p>Email</p>\n' +
    '      </div>\n' +
    '      <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">portrait</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{ctrl.worker.position}}</h3>\n' +
    '        <p>Position</p>\n' +
    '      </div>\n' +
    '      <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">group</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{ctrl.group.name}}</h3>\n' +
    '        <p>Group</p>\n' +
    '      </div>\n' +
    '      <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '    <md-subheader class="md-no-sticky">Notes</md-subheader>\n' +
    '    <p class="md-body-1" layout-padding layout-margin>{{ctrl.worker.notes}}</p>\n' +
    '  </md-content>\n' +
    '');
}]);

},{}],63:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var ngModule = angular.module('wfm.user.directives', ['wfm.core.mediator']);
module.exports = 'wfm.user.directives';

require('../../dist');

ngModule.directive('workerList', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/worker-list.tpl.html')
  , scope: {
      workers : '=',
      selectedModel: '='
    }
  , controller: function($scope) {
      var self = this;
      self.workers = $scope.workers;
      self.selected = $scope.selectedModel;
      self.selectWorker = function(event, worker) {
        mediator.publish('wfm:worker:selected', worker);
        event.preventDefault();
        event.stopPropagation();
      }
      self.isWorkerShown = function(worker) {
        return self.shownWorker === worker;
      };

      self.applyFilter = function(term) {
        term = term.toLowerCase();
        self.workers = $scope.workers.filter(function(worker) {
          return String(worker.id).indexOf(term) !== -1
            || String(worker.name).toLowerCase().indexOf(term) !== -1;
        });
      };
    }
  , controllerAs: 'ctrl'
  };
})
.directive('worker', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/worker.tpl.html')
  , scope: {
      worker : '=',
      group : '='
    }
  , controller: function($scope) {
      var self = this;
      self.worker = $scope.worker;
      self.group = $scope.group;
      var bannerUrl = self.worker.banner || self.worker.avatar;
      self.style = {
        'background-image': 'url(' + bannerUrl + ')',
        'background-position': self.worker.banner ? 'center center' : 'top center',
        'background-size': self.worker.banner ? 'auto' : 'contain',
        'background-repeat': 'no-repeat'
      }
    }
  , controllerAs: 'ctrl'
  };
})
.directive('workerForm', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/worker-form.tpl.html')
  , scope: {
      worker : '=value',
      groups : '='
    }
  , controller: function($scope) {
      var self = this;
      self.groups = $scope.groups;
      self.model = angular.copy($scope.worker);
      self.submitted = false;
      self.selectWorker = function(event, worker) {
        if(workorder.id) {
          mediator.publish('wfm:worker:selected', workorder);
        }
        else {
          mediator.publish('wfm:worker:list');
        }
        event.preventDefault();
        event.stopPropagation();
      }
      self.done = function(isValid) {
        self.submitted = true;
        if (isValid) {
          if (!self.model.id && self.model.id !== 0) {
            mediator.publish('wfm:worker:created', self.model);
          } else {
            mediator.publish('wfm:worker:updated', self.model);
          }
        }
      }
    }
  , controllerAs: 'ctrl'
  };
})
.directive('groupList', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/group-list.tpl.html')
  , scope: {
      groups : '=',
      selectedModel: '='
    }
  , controller: function($scope) {
      var self = this;
      self.groups = $scope.groups;
      self.selected = $scope.selectedModel;
      self.selectGroup = function(event, group) {
        mediator.publish('wfm:group:selected', group);
        event.preventDefault();
        event.stopPropagation();
      }
      self.isGroupShown = function(group) {
        return self.shownGroup === group;
      };

      self.applyFilter = function(term) {
        term = term.toLowerCase();
        self.groups = $scope.groups.filter(function(group) {
          return String(group.id).indexOf(term) !== -1
            || String(group.name).toLowerCase().indexOf(term) !== -1;
        });
      };
    }
  , controllerAs: 'ctrl'
  };
})
.directive('group', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/group.tpl.html')
  , scope: {
      group : '=',
      members : '='
    }
  , controller: function($scope) {
      var self = this;
      self.group = $scope.group;
      self.members = $scope.members;
      self.selectMember = function(event, member) {
        mediator.publish('wfm:worker:selected', member);
        event.preventDefault();
        event.stopPropagation();
      }
    }
  , controllerAs: 'ctrl'
  };
})
.directive('groupForm', function($templateCache, mediator) {
    return {
      restrict: 'E'
    , template: $templateCache.get('wfm-template/group-form.tpl.html')
    , scope: {
        group : '=value'
      }
    , controller: function($scope) {
        var self = this;
        self.model = angular.copy($scope.group);
        self.submitted = false;
        self.selectGroup = function(event, group) {
          if(group.id) {
            mediator.publish('wfm:group:selected', group);
          }
          else {
            mediator.publish('wfm:group:list');
          }
          event.preventDefault();
          event.stopPropagation();
        }
        self.done = function(isValid) {
          self.submitted = true;
          if (isValid) {
            if (!self.model.id && self.model.id !== 0) {
              mediator.publish('wfm:group:created', self.model);
            } else {
              mediator.publish('wfm:group:updated', self.model);
            }
          }
        }
      }
    , controllerAs: 'ctrl'
    };
  });

},{"../../dist":59}],64:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var ngModule = angular.module('wfm.user.services', ['wfm.core.mediator'])
module.exports = 'wfm.user.services';

var UserClient = require('../user/user-client'),
    GroupClient = require('../group/group-client'),
    MembershipClient = require('../membership/membership-client');
 
function wrapClient($q, client, methodNames) {
  var wrapper = {};
  methodNames.forEach(function(methodName) {
    wrapper[methodName] = function() {
      return $q.when(client[methodName].apply(client, arguments));
    }
  });
  return wrapper;
}

ngModule.factory('userClient', function($q, mediator) {
  var methodNames = ['create', 'read', 'update', 'delete', 'list', 'auth', 'hasSession', 'clearSession', 'verify', 'getProfile'];
  var userClient = wrapClient($q, new UserClient(mediator), methodNames);
  return userClient;
});

ngModule.factory('groupClient', function($q, mediator) {
  var methodNames = ['create', 'read', 'update', 'delete', 'list', 'membership'];
  var groupClient = wrapClient($q, new GroupClient(mediator), methodNames);
  return groupClient;
});

ngModule.factory('membershipClient', function($q, mediator) {
  var methodNames = ['create', 'read', 'update', 'delete', 'list', 'membership'];
  var groupClient = wrapClient($q, new MembershipClient(mediator), methodNames);
  return groupClient;
});

},{"../group/group-client":67,"../membership/membership-client":69,"../user/user-client":71}],65:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm.user';

angular.module('wfm.user', [
  require('./directive')
, require('./service.js')
])

},{"./directive":63,"./service.js":64}],66:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = {
  apiPath: '/api/wfm/group'
}

},{}],67:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var q = require('q');
var _ = require('lodash');
var config = require('./config-group');

var GroupClient = function(mediator) {
  this.mediator = mediator;
  this.initComplete = false;
  this.initPromise = this.init();
};

var xhr = function(_options) {
  var defaultOptions = {
    path: '/',
    method: 'get',
    contentType: 'application/json'
  }
  var options = _.defaults(_options, defaultOptions);
  var deferred = q.defer();
  $fh.cloud(options, function(res) {
    deferred.resolve(res);
  }, function(message, props) {
    var e = new Error(message);
    e.props = props;
    deferred.reject(e);
  });
  return deferred.promise;
};

GroupClient.prototype.init = function() {
  var deferred = q.defer();
  var self = this;
  $fh.on('fhinit', function(error, host) {
    if (error) {
      deferred.reject(new Error(error));
      return;
    }
    self.appid = $fh.getFHParams().appid;
    self.initComplete = true;
    deferred.resolve();
  });
  return deferred.promise;
}

GroupClient.prototype.list = function() {
  return xhr({
    path: config.apiPath
  });
};

GroupClient.prototype.read = function(id) {
  return xhr({
    path: config.apiPath + '/' + id
  });
};

GroupClient.prototype.update = function(group) {
  var self = this;
  return xhr({
    path: config.apiPath + '/' + group.id,
    method: 'put',
    data: group
  });
};

GroupClient.prototype.create = function(group) {
  return xhr({
    path: config.apiPath,
    method: 'post',
    data: group
  });
};

GroupClient.prototype.delete = function(group) {
  var self = this;
  return xhr({
    path: config.apiPath + '/' + group.id,
    method: 'delete',
    data: group
  });
};

module.exports = function(mediator) {
  return new GroupClient(mediator);
}

},{"./config-group":66,"lodash":"lodash","q":"q"}],68:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = {
  apiPath: '/api/wfm/membership'
}

},{}],69:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var q = require('q');
var _ = require('lodash');
var config = require('./config-membership');

var MembershipClient = function(mediator) {
  this.mediator = mediator;
  this.initComplete = false;
  this.initPromise = this.init();
};

var xhr = function(_options) {
  var defaultOptions = {
    path: '/',
    method: 'get',
    contentType: 'application/json'
  }
  var options = _.defaults(_options, defaultOptions);
  var deferred = q.defer();
  $fh.cloud(options, function(res) {
    deferred.resolve(res);
  }, function(message, props) {
    var e = new Error(message);
    e.props = props;
    deferred.reject(e);
  });
  return deferred.promise;
};

MembershipClient.prototype.init = function() {
  var deferred = q.defer();
  var self = this;
  $fh.on('fhinit', function(error, host) {
    if (error) {
      deferred.reject(new Error(error));
      return;
    }
    self.appid = $fh.getFHParams().appid;
    self.initComplete = true;
    deferred.resolve();
  });
  return deferred.promise;
}

MembershipClient.prototype.list = function() {
  return xhr({
    path: config.apiPath
  });
};

MembershipClient.prototype.read = function(id) {
  return xhr({
    path: config.apiPath + '/' + id
  });
};

MembershipClient.prototype.update = function(membership) {
  var self = this;
  return xhr({
    path: config.apiPath + '/' + membership.id,
    method: 'put',
    data: membership
  });
};

MembershipClient.prototype.create = function(membership) {
  return xhr({
    path: config.apiPath,
    method: 'post',
    data: membership
  });
};

MembershipClient.prototype.delete = function(membership) {
  var self = this;
  return xhr({
    path: config.apiPath + '/' + membership.id,
    method: 'delete',
    data: membership
  });
};

module.exports = function(mediator) {
  return new MembershipClient(mediator);
}

},{"./config-membership":68,"lodash":"lodash","q":"q"}],70:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = {
  apiHost: 'http://localhost:8080',
  apiPath: '/api/wfm/user',
  authpolicyPath: '/box/srv/1.1/admin/authpolicy'
}

},{}],71:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var q = require('q');
var _ = require('lodash');
var config = require('./config-user');

var UserClient = function(mediator) {
  this.mediator = mediator;
  this.initComplete = false;
  this.initPromise = this.init();
};

var xhr = function(_options) {
  var defaultOptions = {
    path: '/',
    method: 'get',
    contentType: 'application/json'
  }
  var options = _.defaults(_options, defaultOptions);
  var deferred = q.defer();
  $fh.cloud(options, function(res) {
    deferred.resolve(res);
  }, function(message, props) {
    var e = new Error(message);
    e.props = props;
    deferred.reject(e);
  });
  return deferred.promise;
};

var storeProfile = function(profileData) {
  localStorage.setItem('fh.wfm.profileData', JSON.stringify(profileData));
};

var retrieveProfileData = function() {
  var json = localStorage.getItem('fh.wfm.profileData');
  return json ? JSON.parse(json) : null;
}

UserClient.prototype.init = function() {
  var deferred = q.defer();
  var self = this;
  $fh.on('fhinit', function(error, host) {
    if (error) {
      deferred.reject(new Error(error));
      return;
    }
    self.appid = $fh.getFHParams().appid;
    self.initComplete = true;
    deferred.resolve();
  });
  return deferred.promise;
}

UserClient.prototype.list = function() {
  return xhr({
    path: config.apiPath
  });
};

UserClient.prototype.read = function(id) {
  return xhr({
    path: config.apiPath + '/' + id
  });
};

UserClient.prototype.update = function(user) {
  var self = this;
  return xhr({
    path: config.apiPath + '/' + user.id,
    method: 'put',
    data: user
  });
};

UserClient.prototype.delete = function(user) {
  var self = this;
  return xhr({
    path: config.apiPath + '/' + user.id,
    method: 'delete',
    data: user
  });
};

UserClient.prototype.create = function(user) {
  return xhr({
    path: config.apiPath,
    method: 'post',
    data: user
  });
};

UserClient.prototype.auth = function(username, password) {
  var deferred = q.defer();
  var self = this;
  this.initPromise.then(function() {
    $fh.auth({
      policyId: 'wfm',
      clientToken: self.appid,
      params: {
        userId: username,
        password: password
      }
    }, function (res) {
      // res.sessionToken; // The platform session identifier
      // res.authResponse; // The authetication information returned from the authetication service.
      var profileData = res.authResponse;
      if (typeof profileData === 'string' || profileData instanceof String) {
        try {
          profileData = JSON.parse(profileData);
        } catch(e) {
          console.error(e)
          console.log('Unable to parse the $fh.auth response. Using a workaround');
          profileData = JSON.parse(profileData.replace(/,\s/g, ',').replace(/[^,={}]+/g, '"$&"').replace(/=/g, ':'))
        }
      }
      storeProfile(profileData);
      self.mediator.publish('wfm:auth:profile:change', profileData);
      deferred.resolve(res);
    }, function (msg, err) {
      console.log(msg, err);
      var errorMsg = err.message;
      /* Possible errors:
      unknown_policyId - The policyId provided did not match any defined policy. Check the Auth Policies defined. See Auth Policies Administration
      user_not_found - The Auth Policy associated with the policyId provided has been set up to require that all users authenticating exist on the platform, but this user does not exists.
      user_not_approved - - The Auth Policy associated with the policyId provided has been set up to require that all users authenticating are in a list of approved users, but this user is not in that list.
      user_disabled - The user has been disabled from logging in.
      user_purge_data - The user has been flagged for data purge and all local data should be deleted.
      device_disabled - The device has been disabled. No user or apps can log in from the requesting device.
      device_purge_data - The device has been flagged for data purge and all local data should be deleted.
      */
      if (errorMsg == "user_purge_data" || errorMsg == "device_purge_data") {
        // TODO: User or device has been black listed from administration console and all local data should be wiped
        console.log('User or device has been black listed from administration console and all local data should be wiped');
      } else {
        console.log("Authentication failed - " + errorMsg);
        deferred.reject(errorMsg);
      }
    });
  })
  return deferred.promise;
}

UserClient.prototype.hasSession = function() {
  var deferred = q.defer();
  $fh.auth.hasSession(function(err, exists){
    if(err) {
      console.log('Failed to check session: ', err);
      deferred.reject(err);
    } else if (exists){
      //user is already authenticated
      //optionally we can also verify the session is acutally valid from client. This requires network connection.
      deferred.resolve(true)
    } else {
      deferred.resolve(false);
    }
  });
  return deferred.promise;
}

UserClient.prototype.clearSession = function() {
  var deferred = q.defer();
  var self = this;
  $fh.auth.clearSession(function(err){
    if(err) {
      console.log('Failed to clear session: ', err);
      deferred.reject(err);
    } else {
      storeProfile(null);
      self.mediator.publish('wfm:auth:profile:change', null);
      deferred.resolve(true);
    }
  });
  return deferred.promise;
}

UserClient.prototype.verify = function() {
  var deferred = q.defer();
  $fh.auth.verify(function(err, valid){
    if(err){
      console.log('failed to verify session');
      deferred.reject(err);
      return;
    } else if(valid) {
      console.log('session is valid');
      deferred.resolve(true)
    } else {
      console.log('session is not valid');
      deferred.resolve(false);
    }
  });
  return deferred.promise;
}

UserClient.prototype.getProfile = function() {
  return q.when(retrieveProfileData());
}

module.exports = function(mediator) {
  return new UserClient(mediator);
}

},{"./config-user":70,"lodash":"lodash","q":"q"}],72:[function(require,module,exports){
require('./vehicle-inspection-form.tpl.html.js');
require('./vehicle-inspection.tpl.html.js');

},{"./vehicle-inspection-form.tpl.html.js":73,"./vehicle-inspection.tpl.html.js":74}],73:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.workorder');
} catch (e) {
  ngModule = angular.module('wfm.workorder', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/vehicle-inspection-form.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '  <div layout="row" class="wfm-inspection-row">\n' +
    '    <div flex="40" layout="row" layout-align="start center">\n' +
    '      <span class="md-body-2">\n' +
    '        <md-icon md-font-set="material-icons">local_gas_station</md-icon>\n' +
    '        Fuel (%)\n' +
    '      </span>\n' +
    '    </div>\n' +
    '    <md-slider flex md-discrete ng-model="ctrl.model.fuel" step="25" min="0" max="100" aria-label="rating">\n' +
    '    </md-slider>\n' +
    '  </div>\n' +
    '\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '  <div layout="row" class="wfm-inspection-row">\n' +
    '    <div flex="30" layout="row" layout-align="start center">\n' +
    '      <span class="md-body-2">\n' +
    '        <md-icon md-font-set="material-icons">album</md-icon>\n' +
    '        Tires\n' +
    '      </span>\n' +
    '    </div>\n' +
    '    <div flex layout-align="start start">\n' +
    '      <md-radio-group layout ng-model="ctrl.model.tires">\n' +
    '        <md-radio-button ng-value="false" >Fail</md-radio-button>\n' +
    '        <md-radio-button ng-value="true"> Pass </md-radio-button>\n' +
    '      </md-radio-group>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '  <div layout="row" class="wfm-inspection-row">\n' +
    '    <div flex="30" layout="row" layout-align="start center">\n' +
    '      <span class="md-body-2">\n' +
    '        <md-icon md-font-set="material-icons">brightness_low</md-icon>\n' +
    '        Lights\n' +
    '      </span>\n' +
    '    </div>\n' +
    '    <div flex layout-align="start start">\n' +
    '      <md-radio-group layout ng-model="ctrl.model.lights">\n' +
    '        <md-radio-button ng-value="false">Fail</md-radio-button>\n' +
    '        <md-radio-button ng-value="true"> Pass </md-radio-button>\n' +
    '      </md-radio-group>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '\n' +
    '    <div class="workflow-actions md-padding md-whiteframe-z4">\n' +
    '      <md-button class="md-primary md-hue-1" ng-click="ctrl.back($event)">Back</md-button>\n' +
    '      <md-button class="md-primary" ng-click="ctrl.done($event)">Continue</md-button>\n' +
    '    </div><!-- workflow-actions-->\n' +
    '');
}]);

},{}],74:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.workorder');
} catch (e) {
  ngModule = angular.module('wfm.workorder', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/vehicle-inspection.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '\n' +
    '  <md-subheader>Vehicle Inspection</md-subheader>\n' +
    '\n' +
    '  <md-list class="risk-assessment">\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">local_gas_station</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{vehicleInspection.fuel}} %</h3>\n' +
    '        <p>Fuel</p>\n' +
    '      </div>\n' +
    '    <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons" ng-if="vehicleInspection.tires" class="success">check_circle</md-icon>\n' +
    '      <md-icon md-font-set="material-icons" ng-if="! vehicleInspection.tires" class="danger">cancel</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3 ng-if="vehicleInspection.tires">Pass</h3>\n' +
    '        <h3 ng-if="! vehicleInspection.tires">Fail</h3>\n' +
    '        <p>Tires</p>\n' +
    '      </div>\n' +
    '    <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons" ng-if="vehicleInspection.lights" class="success">check_circle</md-icon>\n' +
    '      <md-icon md-font-set="material-icons" ng-if="! vehicleInspection.lights" class="danger">cancel</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3 ng-if="vehicleInspection.lights">Pass</h3>\n' +
    '        <h3 ng-if="! vehicleInspection.lights">Fail</h3>\n' +
    '        <p>Lights</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '</md-list>\n' +
    '');
}]);

},{}],75:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var _ = require('lodash');

var ngModule = angular.module('wfm.vehicle-inspection', ['wfm.core.mediator']);

require('../../dist');

ngModule.directive('vehicleInspection', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/vehicle-inspection.tpl.html')
  , scope: {
      vehicleInspection: '=value'
    }
  };
})

ngModule.directive('vehicleInspectionForm', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/vehicle-inspection-form.tpl.html')
  , scope: {
    }
  , controller: function() {
    var self = this;
    self.model = {};
    self.back = function(event) {
      mediator.publish('wfm:workflow:step:back');
      event.preventDefault();
      event.stopPropagation();
    }
    self.done = function(event) {
      mediator.publish('wfm:workflow:step:done', self.model);
      event.preventDefault();
      event.stopPropagation();
    }
  }
  , controllerAs: 'ctrl'
  };
})

module.exports = 'wfm.vehicle-inspection';

},{"../../dist":72,"lodash":"lodash"}],76:[function(require,module,exports){
require('./workflow-form.tpl.html.js');
require('./workflow-progress.tpl.html.js');
require('./workflow-step-detail.tpl.html.js');
require('./workflow-step-form.tpl.html.js');

},{"./workflow-form.tpl.html.js":77,"./workflow-progress.tpl.html.js":78,"./workflow-step-detail.tpl.html.js":79,"./workflow-step-form.tpl.html.js":80}],77:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.workflow.directives');
} catch (e) {
  ngModule = angular.module('wfm.workflow.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workflow-form.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar class="content-toolbar md-primary">\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>{{ctrl.model.id ? \'Update\' : \'Create\'}} workflow</h3>\n' +
    '    <span flex></span>\n' +
    '    <md-button class="md-icon-button" aria-label="Close" ng-click="ctrl.selectWorkflow($event, workflow)">\n' +
    '      <md-icon md-font-set="material-icons">close</md-icon>\n' +
    '    </md-button>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '<div class="wfm-maincol-scroll">\n' +
    '<form name="workflowForm" ng-submit="ctrl.done(workflowForm.$valid)" novalidate layout-padding layout-margin>\n' +
    '\n' +
    '<div>\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label>Title</label>\n' +
    '    <input type="text" id="title" name="title" ng-model="ctrl.model.title" required>\n' +
    '    <div ng-messages="workflow.title.$error" ng-if="ctrl.submitted || workflowForm.title.$dirty">\n' +
    '      <div ng-message="required">A title is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '  <md-button type="submit" class="md-raised md-primary">{{ctrl.model.id ? \'Update\' : \'Create\'}} Workflow</md-button>\n' +
    '</form>\n' +
    '</div>\n' +
    '');
}]);

},{}],78:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.workflow.directives');
} catch (e) {
  ngModule = angular.module('wfm.workflow.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workflow-progress.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<div class="workflow-progress" ng-class="{close: ctrl.closed}">\n' +
    '\n' +
    '<md-button class="md-icon-button md-warm expand-collapse">\n' +
    '  <md-icon ng-show="ctrl.closed" md-font-set="material-icons" ng-click="ctrl.open()">keyboard_arrow_down</md-icon>\n' +
    '  <md-icon ng-show="!ctrl.closed" md-font-set="material-icons" ng-click="ctrl.close()">keyboard_arrow_up</md-icon>\n' +
    '</md-button>\n' +
    '\n' +
    '<div class="scroll-box">\n' +
    '  <ol>\n' +
    '    <li ng-class="{active: \'-1\' == ctrl.stepIndex, complete: -1 < ctrl.stepIndex}">\n' +
    '      <span class="md-caption"><md-icon md-font-set="material-icons">visibility</md-icon></span>Overview\n' +
    '    </li>\n' +
    '    <li ng-repeat="step in ctrl.steps" ng-class="{active: $index == ctrl.stepIndex, complete: $index < ctrl.stepIndex}">\n' +
    '      <span class="md-caption">{{$index + 1}}</span>{{step.name}}\n' +
    '    </li>\n' +
    '    <li ng-class="{active: ctrl.steps.length <= ctrl.stepIndex, complete: ctrl.steps.length <= ctrl.stepIndex}">\n' +
    '      <span class="md-caption"><md-icon md-font-set="material-icons">done</md-icon></span>Summary\n' +
    '    </li>\n' +
    '  </ol>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '</div><!-- workflow-progress -->\n' +
    '');
}]);

},{}],79:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.workflow.directives');
} catch (e) {
  ngModule = angular.module('wfm.workflow.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workflow-step-detail.tpl.html',
    '<h2 class="md-title">{{step.name}}</h2>\n' +
    '<md-list>\n' +
    '  <md-list-item class="md-2-line" >\n' +
    '    <md-icon md-font-set="material-icons">label</md-icon>\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3>{{step.code}}</h3>\n' +
    '      <p>Code</p>\n' +
    '    </div>\n' +
    '  </md-list-item>\n' +
    '  <md-divider></md-divider>\n' +
    '  <md-divider></md-divider>\n' +
    '  <div ng-show="step.formId">\n' +
    '    <md-list-item class="md-2-line">\n' +
    '      <md-icon md-font-set="material-icons">label</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{step.formId}}</h3>\n' +
    '        <p>FormId</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '  </div>\n' +
    '</md-list>\n' +
    '<div ng-show="step.templates">\n' +
    '  <div ng-show="step.templates.view">\n' +
    '    <md-list-item class="md-2-line">\n' +
    '      <md-icon md-font-set="material-icons">label</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{step.templates.view}}</h3>\n' +
    '        <p>Template view</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '  </div>\n' +
    '  <div ng-show="step.templates.form">\n' +
    '    <md-list-item class="md-2-line">\n' +
    '      <md-icon md-font-set="material-icons">label</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{step.templates.form}}</h3>\n' +
    '        <p>Template form</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '</div>\n' +
    '</div>\n' +
    '</md-list>\n' +
    '');
}]);

},{}],80:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.workflow.directives');
} catch (e) {
  ngModule = angular.module('wfm.workflow.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workflow-step-form.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar class="content-toolbar md-primary" ng-show="step">\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>Update step</h3>\n' +
    '    <span flex></span>\n' +
    '    <md-button class="md-icon-button" aria-label="Close" ng-click="ctrl.selectWorkflow($event, workflow)">\n' +
    '      <md-icon md-font-set="material-icons">close</md-icon>\n' +
    '    </md-button>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '<form name="workflowStepForm" ng-submit="ctrl.done(workflowStepForm.$valid)" novalidate layout-padding layout-margin>\n' +
    '\n' +
    '<div>\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label>Code</label>\n' +
    '    <input type="text" id="code" name="code" ng-model="ctrl.model.step.code" required>\n' +
    '    <div ng-messages="workflow.model.step.$error" ng-if="ctrl.submitted || workflowForm.title.$dirty">\n' +
    '      <div ng-message="required">A code is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label>Name</label>\n' +
    '    <input type="text" id="name" name="name" ng-model="ctrl.model.step.name" required>\n' +
    '    <div ng-messages="workflow.name.$error" ng-if="ctrl.submitted || workflowForm.name.$dirty">\n' +
    '      <div ng-message="required">A name is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label>FormID</label>\n' +
    '    <input type="text" id="formId" name="formId" ng-model="ctrl.model.step.formId">\n' +
    '  </md-input-container>\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label>form template</label>\n' +
    '    <input type="text" id="form" name="form" ng-model="ctrl.model.step.templates.form">\n' +
    '  </md-input-container>\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label>view template</label>\n' +
    '    <input type="text" id="view" name="view" ng-model="ctrl.model.step.templates.view">\n' +
    '  </md-input-container>\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '  <md-button type="submit" class="md-raised md-primary">{{ctrl.model.isNew ? \'Add\' : \'Update\'}} step</md-button>\n' +
    '</form>\n' +
    '');
}]);

},{}],81:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var _ = require('lodash');

var ngModule = angular.module('wfm.workflow.directives', [
  'wfm.core.mediator'
]);
module.exports = 'wfm.workflow.directives';

require('../../dist');

ngModule.directive('workflowProgress', function($templateCache, $timeout) {
  function parseStepIndex(ctrl, stepIndex) {
    ctrl.stepIndex = stepIndex;
    ctrl.step = ctrl.steps[ctrl.stepIndex];
  }
  function scrollToActive(element) {
    element = element[0];
    var active = element.querySelector('li.active');
    if (!active) {
      active = element.querySelector('li');
    };
    var scroller = element.querySelector('.scroll-box');
    var offset = active.offsetTop;
    scroller.scrollTop = offset;
  }
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/workflow-progress.tpl.html')
  , scope: {
      stepIndex: '=',
      workflow: '='
    }
  , link: function (scope, element, attrs) {
      $timeout(function() {
        scrollToActive(element);
      }, 0);
    }
  , controller: function($scope, $element) {
      var self = this;
      self.workflow = $scope.workflow;
      self.steps = $scope.workflow.steps;
      self.open = function() {
        self.closed = false;
      }
      self.close = function() {
        scrollToActive($element);
        self.closed = true;
      }
      parseStepIndex(self, $scope.stepIndex ? parseInt($scope.stepIndex) : 0)

      $scope.$watch('stepIndex', function() {
        console.log('stepIndex changed')
        parseStepIndex(self, $scope.stepIndex ? parseInt($scope.stepIndex) : 0);
        self.closed = true;
        $timeout(function() {
          scrollToActive($element);
        }, 0);
      });
    }
  , controllerAs: 'ctrl'
  };
})

.directive('workflowStep', function($templateRequest, $compile, mediator) {
  return {
    restrict: 'E'
  , scope: {
      step: '=' // { ..., template: "an html template to use", templatePath: "a template path to load"}
    , workorder: '='
    }
  , link: function (scope, element, attrs) {
      scope.$watch('step', function(step) {
        if (scope.step) {
          if (scope.step.formId) {
            element.html('<appform form-id="step.formId"></appform>');
            $compile(element.contents())(scope);
          } else if (scope.step.templatePath) {
            $templateRequest(scope.step.templatePath).then(function(template) {
              element.html(template);
              $compile(element.contents())(scope);
            });
          } else {
            element.html(scope.step.templates.form);
            $compile(element.contents())(scope);
          };
        };
      });
    }
  , controller: function() {
      var self = this;
      self.mediator = mediator;
    }
  , controllerAs: 'ctrl'
  };
})

.directive('workflowResult', function($compile) {
  var render = function(scope, element, attrs) {
    if (scope.workflow.steps && scope.result) {
      element.children().remove();
      scope.workflow.steps.forEach(function(step, stepIndex) {
        if (scope.result.stepResults && scope.result.stepResults[step.code]) {
          element.append('<md-divider></md-divider>');
          var template = '';
          template = '<workorder-submission-result'
          template += ' result="result.stepResults[\''+step.code+'\']"'
          template += ' step="workflow.steps[\''+stepIndex+'\']"'
          template += '></workorder-submission-result>';
          console.log(template);
          element.append(template);
        }
      });
      $compile(element.contents())(scope);
    };
  }
  return {
    restrict: 'E'
  , scope: {
      workflow: '='
    , result: '='
    }
  , link: function (scope, element, attrs) {
      render(scope, element, attrs);
    }
  };
})
.directive('workflowForm', function($templateCache, mediator) {
    return {
      restrict: 'E'
    , template: $templateCache.get('wfm-template/workflow-form.tpl.html')
    , scope: {
      workflow : '=value'
      }
    , controller: function($scope) {
        var self = this;
        self.model = angular.copy($scope.workflow);
        self.submitted = false;
        self.done = function(isValid) {
          self.submitted = true;
          if (isValid) {
            if (!self.model.id && self.model.id !== 0) {
              self.model.steps = [];
              mediator.publish('wfm:workflow:created', self.model);
            }  else {
              mediator.publish('wfm:workflow:updated', self.model);
            }
          }
        };
        self.selectWorkflow = function(event, workflow) {
          if(workflow.id) {
            mediator.publish('wfm:workflow:selected', workflow);
          }
          else {
            mediator.publish('wfm:workflow:list');
          }
          event.preventDefault();
          event.stopPropagation();
        }
      }
    , controllerAs: 'ctrl'
    };
  })
.directive('workflowStepForm', function($templateCache, mediator) {
    return {
      restrict: 'E'
    , template: $templateCache.get('wfm-template/workflow-step-form.tpl.html')
    , scope: {
      workflow : '=',
      step : '='
      }
    , controller: function($scope) {
        var self = this;
        var existingStep;
        self.submitted = false;
        if(!$scope.step){
          self.model = {
            step : {
              templates : {}
            },
            workflow : angular.copy($scope.workflow),
            isNew : true
          }
        }
        else {
          self.model = {
            workflow : angular.copy($scope.workflow),
            step : angular.copy($scope.step)
          }
          existingStep = $scope.workflow.steps.filter(function(item) {return item.code == $scope.step.code;}).length>0;
        }

        self.done = function(isValid) {
          self.submitted = true;
          if (isValid) {
              //we check if the step already exist or not, if it exsit we remove the old element
              if(existingStep){
                $scope.workflow.steps = $scope.workflow.steps.filter(function(item) {return item.code != $scope.step.code;});
              }
              //we add the new or updated step
              $scope.workflow.steps.push(self.model.step);
              mediator.publish('wfm:workflow:updated', $scope.workflow);
          }
        };

        self.selectWorkflow = function(event, workflow) {
          mediator.publish('wfm:workflow:selected', workflow);
          event.preventDefault();
          event.stopPropagation();
        }
      }
    , controllerAs: 'ctrl'
    };
  })
  .directive('workflowStepDetail', function($templateCache, mediator) {
      return {
        restrict: 'E'
      , template: $templateCache.get('wfm-template/workflow-step-detail.tpl.html')
      , scope: {
          step : '='
        }
      };
    })
;

},{"../../dist":76,"lodash":"lodash"}],82:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var config = require('../config')
  , _ = require('lodash')
  ;

module.exports = 'wfm.workflow.sync';

function wrapManager($q, $timeout, manager) {
  var wrappedManager = _.create(manager);
  wrappedManager.new = function() {
    var deferred = $q.defer();
    $timeout(function() {
      var workflow = {
        title: ''
      };
      deferred.resolve(workflow);
    }, 0);
    return deferred.promise;
  };

  return wrappedManager;
}

angular.module('wfm.workflow.sync', [require('fh-wfm-sync')])
.factory('workflowSync', function($q, $timeout, syncService) {
  syncService.init($fh, config.syncOptions);
  var workflowSync = {};
  workflowSync.createManager = function(queryParams) {
    if (workflowSync.manager) {
      return $q.when(workflowSync.manager);
    } else {
      return workflowSync.managerPromise = syncService.manage(config.datasetId, null, queryParams)
      .then(function(manager) {
        workflowSync.manager = wrapManager($q, $timeout, manager);
        console.log('Sync is managing dataset:', config.datasetId, 'with filter: ', queryParams);
        // TODO: we should refactor these utilities functions somewhere else probably
        workflowSync.manager.stepReview = function(steps, result) {
          var stepIndex = -1;
          var complete;
          if (result && result.stepResults && result.stepResults.length !== 0) {
            complete = true;
            for (var i=0; i < steps.length; i++) {
              var step = steps[i];
              var stepResult = result.stepResults[step.code];
              if (stepResult && (stepResult.status === 'complete' || stepResult.status === 'pending')) {
                stepIndex = i;
                if (stepResult.status === 'pending') {
                  complete = false;
                }
              } else {
                break;
              };
            };
          }
          return {
            nextStepIndex: stepIndex,
            complete: complete // false is any steps are "pending"
          };
        }

        workflowSync.manager.nextStepIndex = function(steps, result) {
          return this.stepReview(steps, result).nextStepIndex;
        }

        workflowSync.manager.checkStatus = function(workorder, workflow, result) {
          var status;
          var stepReview = this.stepReview(workflow.steps, result);
          if (stepReview.nextStepIndex >= workflow.steps.length - 1 && stepReview.complete) {
            status = 'Complete';
          } else if (!workorder.assignee) {
            status = 'Unassigned';
          } else if (stepReview.nextStepIndex < 0) {
            status = 'New';
          } else {
            status = 'In Progress';
          }
          return status;
        }
        return workflowSync.manager;
      })
    }
  };
  workflowSync.removeManager = function() {
    if (workflowSync.manager) {
      return workflowSync.manager.safeStop()
      .then(function() {
        delete workflowSync.manager;
      })
    }
  };
  return workflowSync;
})
;

},{"../config":84,"fh-wfm-sync":53,"lodash":"lodash"}],83:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm.workflow';

angular.module('wfm.workflow', [
  require('./directive')
, require('./service.js')
])

},{"./directive":81,"./service.js":82}],84:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = {
  apiHost: 'http://localhost:8080',
  apiPath: '/api/wfm/workflow',
  datasetId : 'workflows',
  syncOptions : {
    "sync_frequency" : 5,
    "storage_strategy": "dom",
    "do_console_log": false
  }
}

},{}],85:[function(require,module,exports){
require('./workorder-form.tpl.html.js');
require('./workorder-list.tpl.html.js');
require('./workorder.tpl.html.js');

},{"./workorder-form.tpl.html.js":86,"./workorder-list.tpl.html.js":87,"./workorder.tpl.html.js":88}],86:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.workorder.directives');
} catch (e) {
  ngModule = angular.module('wfm.workorder.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workorder-form.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar class="content-toolbar md-primary">\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>{{ctrl.model.id ? \'Update\' : \'Create\'}} work order ID {{ctrl.model.id}}</h3>\n' +
    '    <md-button class="md-icon-button" aria-label="{{ctrl.status}}">\n' +
    '      <workorder-status status="ctrl.status"></workorder-status>\n' +
    '    </md-button>\n' +
    '\n' +
    '    <span flex></span>\n' +
    '    <md-button class="md-icon-button" aria-label="Close" ng-click="ctrl.selectWorkorder($event, ctrl.model)">\n' +
    '      <md-icon md-font-set="material-icons">close</md-icon>\n' +
    '    </md-button>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '<div class="wfm-maincol-scroll">\n' +
    '<form name="workorderForm" ng-submit="ctrl.done(workorderForm.$valid)" novalidate layout-padding layout-margin>\n' +
    '\n' +
    '  <!--\n' +
    '  <md-input-container>\n' +
    '    <label for="workorderState">Status</label>\n' +
    '    <input type="text" id="inputWorkorderType" name="workorderStatus" ng-model="ctrl.model.status" disabled="true">\n' +
    '  </md-input-container>\n' +
    '  -->\n' +
    '\n' +
    '<div layout-gt-sm="row">\n' +
    '  <md-input-container class="md-block" flex-gt-sm>\n' +
    '    <label for="workorderType">Type</label>\n' +
    '    <md-select ng-model="ctrl.model.type" name="workorderType" id="workorderType">\n' +
    '       <md-option value="Job Order">Job Order</md-option>\n' +
    '       <md-option value="Type 02">Type 02</md-option>\n' +
    '       <md-option value="Type 03">Type 03</md-option>\n' +
    '       <md-option value="Type 04">Type 04</md-option>\n' +
    '     </md-select>\n' +
    '  </md-input-container>\n' +
    '\n' +
    '  <md-input-container class="md-block" flex-gt-sm>\n' +
    '    <label for="workflow">Workflow</label>\n' +
    '    <md-select ng-model="ctrl.model.workflowId" name="workflow" id="workflow" required>\n' +
    '       <md-option ng-repeat="workflow in ctrl.workflows" value="{{workflow.id}}">{{workflow.id}} - {{workflow.title}}</md-option>\n' +
    '     </md-select>\n' +
    '     <div ng-messages="workorderForm.workflow.$error" ng-if="ctrl.submitted || workorderForm.workflow.$dirty">\n' +
    '       <div ng-message="required">A workflow is required.</div>\n' +
    '     </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '<div>\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="assignee">Assignee</label>\n' +
    '    <md-select ng-model="ctrl.model.assignee" name="assignee" id="assignee">\n' +
    '       <md-option ng-repeat="worker in ctrl.workers" value="{{worker.id}}">{{worker.name}} ({{worker.position}})</md-option>\n' +
    '     </md-select>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '<div>\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label>Title</label>\n' +
    '    <input type="text" id="inputTitle" name="title" ng-model="ctrl.model.title" required>\n' +
    '    <div ng-messages="workorderForm.title.$error" ng-if="ctrl.submitted || workorderForm.title.$dirty">\n' +
    '      <div ng-message="required">A title is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '<div>\n' +
    '  <md-input-container class="md-block">\n' +
    '    <label for="inputAddress">Address</label>\n' +
    '    <input type="text"  id="inputAddress" name="address" ng-model="ctrl.model.address" required>\n' +
    '    <div ng-messages="workorderForm.address.$error" ng-show="ctrl.submitted || workorderForm.address.$dirty">\n' +
    '      <div ng-message="required">An address is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '<div layout-gt-sm="row">\n' +
    '  <md-input-container class="md-block" flex-gt-sm>\n' +
    '    <label for="inputAddress">Lattitude</label>\n' +
    '    <input type="text"  id="inputLattitude" name="lattitude" ng-model="ctrl.model.location[0]" required>\n' +
    '    <div ng-messages="workorderForm.lattitude.$error" ng-show="ctrl.submitted || workorderForm.lattitude.$dirty">\n' +
    '      <div ng-message="required">An lattitude is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '  <md-input-container class="md-block" flex-gt-sm>\n' +
    '    <label for="inputAddress">Longitude</label>\n' +
    '    <input type="text"  id="inputLattitude" name="longitude" ng-model="ctrl.model.location[1]" required>\n' +
    '    <div ng-messages="workorderForm.longitude.$error" ng-show="ctrl.submitted || workorderForm.longitude.$dirty">\n' +
    '      <div ng-message="required">An longitude is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '<div layout-gt-sm="row">\n' +
    '  <md-input-container class="md-block" flex-gt-sm>\n' +
    '    <label for="inputFinishDate">Finish Date</label>\n' +
    '    <input type="date"  id="inputFinishDate" name="finishDate" ng-model="ctrl.model.finishDate" required>\n' +
    '    <div ng-messages="workorderForm.finishDate.$error" ng-show="ctrl.submitted || workorderForm.finishDate.$dirty">\n' +
    '      <div ng-message="required">A finish date is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '  <md-input-container class="md-block" flex-gt-sm>\n' +
    '    <label for="inputFinishTime" >Finish Time</label>\n' +
    '    <input type="time"  id="inputFinishTime" name="finishTime" ng-model="ctrl.model.finishTime" required>\n' +
    '    <div ng-messages="workorderForm.finishTime.$error" ng-show="ctrl.submitted || workorderForm.finishTime.$dirty">\n' +
    '      <div ng-message="required">A finish time is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '<div>\n' +
    '  <md-input-container class="md-block" ng-class="{ \'has-error\' : workorderForm.summary.$invalid && !workorderForm.summary.$pristine }">\n' +
    '    <label for="inputSummary">Summary</label>\n' +
    '    <textarea id="inputSummary" name="summary" ng-model="ctrl.model.summary" required md-maxlength="150"></textarea>\n' +
    '\n' +
    '    <div ng-messages="workorderForm.summary.$error" ng-show="ctrl.submitted || workorderForm.summary.$dirty">\n' +
    '      <div ng-message="required">A summary date is required.</div>\n' +
    '    </div>\n' +
    '  </md-input-container>\n' +
    '</div>\n' +
    '\n' +
    '  <md-button type="submit" class="md-raised md-primary">{{ctrl.model.id ? \'Update\' : \'Create\'}} Workorder</md-button>\n' +
    '</form>\n' +
    '</div">\n' +
    '');
}]);

},{}],87:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.workorder.directives');
} catch (e) {
  ngModule = angular.module('wfm.workorder.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workorder-list.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<md-toolbar>\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h3>\n' +
    '      <span>Workorders</span>\n' +
    '    </h3>\n' +
    '  </div>\n' +
    '</md-toolbar>\n' +
    '\n' +
    '<form action="#" class="persistent-search" hide-xs hide-sm>\n' +
    '  <label for="search"><i class="material-icons">search</i></label>\n' +
    '  <input type="text" name="search" placeholder="Search" ng-model="searchValue" ng-change="ctrl.applyFilter(searchValue)">\n' +
    '</form>\n' +
    '\n' +
    '<md-list>\n' +
    '  <md-list-item\n' +
    '    ng-repeat="workorder in ctrl.workorders"\n' +
    '    ng-click="ctrl.selectWorkorder($event, workorder)"\n' +
    '    ng-class="{active: ctrl.selected.id === workorder.id}"\n' +
    '    class="md-3-line workorder-item"\n' +
    '  >\n' +
    '<!--\n' +
    '  TODO: change class name according to the color:\n' +
    '    "success" = green\n' +
    '    danger = "red"\n' +
    '    warning = "yellow"\n' +
    '    no class = grey\n' +
    '  -->\n' +
    '  <workorder-status class="" status="ctrl.resultMap[workorder.id].status"></workorder-status>\n' +
    '\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3>\n' +
    '        {{workorder.type}} -\n' +
    '        <span ng-if="workorder.id">{{workorder.id}}</span>\n' +
    '        <span ng-if="! workorder.id" style="font-style: italic;">&lt;local&gt;</span>\n' +
    '      </h3>\n' +
    '      <h4>{{workorder.title}}</h4>\n' +
    '      <p>{{workorder.address}}</p>\n' +
    '    </div>\n' +
    '    <md-divider></md-divider>\n' +
    '  </md-list-item>\n' +
    '</md-list>\n' +
    '');
}]);

},{}],88:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('wfm.workorder.directives');
} catch (e) {
  ngModule = angular.module('wfm.workorder.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workorder.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '  <md-list>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon>\n' +
    '      <workorder-status status="status"></workorder-status>\n' +
    '    </md-icon>\n' +
    '        <div class="md-list-item-text">\n' +
    '           <h3>{{status || "New"}}</h3>\n' +
    '           <p>Status</p>\n' +
    '        </div>\n' +
    '      </md-list-item>\n' +
    '    </md-button>\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '    <md-list-item class="md-2-line md-long-text">\n' +
    '      <md-icon md-font-set="material-icons">place</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '         <h3>{{workorder.location[0]}}, {{workorder.location[1]}}</h3>\n' +
    '         <p>\n' +
    '           {{workorder.address}}\n' +
    '         </p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">assignment</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{workorder.title}}</h3>\n' +
    '        <p>Workorder</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">event</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{workorder.startTimestamp | date:\'yyyy-MM-dd\' }}</h3>\n' +
    '        <p>Finish Date</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">schedule</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{workorder.startTimestamp | date:\'HH:mm:ss Z\' }}</h3>\n' +
    '        <p>Finish Time</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '    <md-list-item class="md-2-line" ng-show="assignee && assignee.name">\n' +
    '      <md-icon md-font-set="material-icons">person</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{assignee.name}}</h3>\n' +
    '        <p>Asignee</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '  </md-list>\n' +
    '\n' +
    '  <md-subheader class="md-no-sticky">Work Summary</md-subheader>\n' +
    '  <p class="md-body-1" layout-padding layout-margin>\n' +
    '    {{workorder.summary}}\n' +
    '  </p>\n' +
    '');
}]);

},{}],89:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var ngModule = angular.module('wfm.workorder.directives', ['wfm.core.mediator']);
module.exports = 'wfm.workorder.directives';

require('../../dist');

var getStatusIcon = function(status) {
  var statusIcon;
  switch(status) {
    case 'In Progress':
      statusIcon = 'autorenew';
      break;
    case 'Complete':
      statusIcon = 'assignment_turned_in';
      break;
    case 'Aborted':
      statusIcon = 'assignment_late';
      break;
    case 'On Hold':
      statusIcon = 'pause';
      break;
    case 'Unassigned':
      statusIcon = 'assignment_ind';
      break;
    case 'New':
      statusIcon = 'new_releases';
      break;
    default:
      statusIcon = 'radio_button_unchecked';
  }
  return statusIcon;
}

ngModule.directive('workorderList', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/workorder-list.tpl.html')
  , scope: {
      workorders : '=',
      resultMap: '=',
      selectedModel: '='
    }
  , controller: function($scope) {
      var self = this;
      self.workorders = $scope.workorders;
      $scope.$watch('workorders', function() {
        self.workorders = $scope.workorders;
      })
      self.resultMap = $scope.resultMap;
      self.selected = $scope.selectedModel;
      self.selectWorkorder = function(event, workorder) {
        // self.selectedWorkorderId = workorder.id;
        mediator.publish('wfm:workorder:selected', workorder);
        event.preventDefault();
        event.stopPropagation();
      }
      self.isWorkorderShown = function(workorder) {
        return self.shownWorkorder === workorder;
      };

      self.applyFilter = function(term) {
        term = term.toLowerCase();
        self.workorders = $scope.workorders.filter(function(workorder) {
          return String(workorder.id).indexOf(term) !== -1
            || String(workorder.title).toLowerCase().indexOf(term) !== -1;
        });
      };
    }
  , controllerAs: 'ctrl'
  };
})

.directive('workorder', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/workorder.tpl.html')
  , scope: {
    workorder: '=',
    assignee: '=',
    status: '='
    }
  , controller: function($scope) {
      var self = this;
      self.showSelectButton = !! $scope.$parent.workorders;
      self.selectWorkorder = function(event, workorder) {
        if(workorder.id) {
          mediator.publish('wfm:workorder:selected', workorder);
        }
        else {
          mediator.publish('wfm:workorder:list');
        }

        event.preventDefault();
        event.stopPropagation();
      }
    }
  , controllerAs: 'ctrl'
  };
})

.directive('workorderForm', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/workorder-form.tpl.html')
  , scope: {
    workorder : '=value'
  , workflows: '='
  , workers: '='
  , status: '='
    }
  , controller: function($scope) {
      var self = this;
      self.model = angular.copy($scope.workorder);
      self.workflows = $scope.workflows;
      self.workers = $scope.workers;
      self.submitted = false;
      if (self.model && self.model.startTimestamp) {
        self.model.finishDate = new Date(self.model.startTimestamp);
        self.model.finishTime = new Date(self.model.startTimestamp);
      };
      self.selectWorkorder = function(event, workorder) {
        if(workorder.id) {
          mediator.publish('wfm:workorder:selected', workorder);
        }
        else {
          mediator.publish('wfm:workorder:list');
        }
        event.preventDefault();
        event.stopPropagation();
      }
      self.done = function(isValid) {
        self.submitted = true;
        if (isValid) {
          self.model.startTimestamp = new Date(self.model.finishDate); // TODO: incorporate self.model.finishTime
          self.model.startTimestamp.setHours(
            self.model.finishTime.getHours(),
            self.model.finishTime.getMinutes(),
            self.model.finishTime.getSeconds(),
            self.model.finishTime.getMilliseconds()
          );
          self.model.finishDate = new Date(self.model.startTimestamp);
          self.model.finishTime = new Date(self.model.startTimestamp);
          if (!self.model.id && self.model.id !== 0) {
            mediator.publish('wfm:workorder:created', self.model);
          } else {
            mediator.publish('wfm:workorder:updated', self.model);
          }
        }
      }
    }
  , controllerAs: 'ctrl'
  };
})

.directive('workorderStatus', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: '<md-icon md-font-set="material-icons">{{statusIcon}}<md-tooltip>{{status}}</md-tooltip></md-icon>'
  , scope: {
      status : '=status'
    }
  , controller: function($scope) {
      $scope.statusIcon = getStatusIcon($scope.status);
    }
  , controllerAs: 'ctrl'
  }
})

.directive('workorderSubmissionResult', function($compile) {
  var render = function(scope, element, attrs) {
    if (!scope.result) {
      return;
    }
    var result = scope.result;
    var template = '';
    if (scope.step.formId) {
      var submission = result.submission;
      var tag, subId;
      if (submission._submission) {
        tag = 'submission';
        subId = submission._submission
        template = '<appform-submission submission="result.submission._submission"></appform-submission>';
      } else if (submission.submissionId) {
        template = '<appform-submission submission-id="\''+submission.submissionId+'\'"></appform-submission>';
      } else if (submission.submissionLocalId) {
        template = '<appform-submission submission-local-id="\''+submission.submissionLocalId+'\'"></appform-submission>';
      };
    } else {
      template = scope.step.templates.view;
    }
    element.append(template);
    $compile(element.contents())(scope);
  };

  return {
    restrict: 'E'
  , scope: {
      result: '='
    , step: '='
    }
  , link: function (scope, element, attrs) {
      render(scope, element, attrs);
    }
  };
})
;

},{"../../dist":85}],90:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var config = require('../config')
  , _ = require('lodash')
  ;

module.exports = 'wfm.workorder.sync';

function wrapManager($q, $timeout, manager) {
  var wrappedManager = _.create(manager);
  wrappedManager.new = function() {
    var deferred = $q.defer();
    $timeout(function() {
      var workorder = {
        type: 'Job Order'
      , status: 'New'
      };
      deferred.resolve(workorder);
    }, 0);
    return deferred.promise;
  };

  return wrappedManager;
}

angular.module('wfm.workorder.sync', [require('fh-wfm-sync')])
.factory('workorderSync', function($q, $timeout, syncService) {
  syncService.init($fh, config.syncOptions);
  var workorderSync = {};
  workorderSync.createManager = function(queryParams) {
    if (workorderSync.manager) {
      return $q.when(workorderSync.manager);
    } else {
      return workorderSync.managerPromise = syncService.manage(config.datasetId, null, queryParams)
      .then(function(manager) {
        workorderSync.manager = wrapManager($q, $timeout, manager);
        console.log('Sync is managing dataset:', config.datasetId, 'with filter: ', queryParams);
        return workorderSync.manager;
      })
    }
  };
  workorderSync.removeManager = function() {
    if (workorderSync.manager) {
      return workorderSync.manager.safeStop()
      .then(function() {
        delete workorderSync.manager;
      })
    }
  }
  return workorderSync;
})
;

},{"../config":92,"fh-wfm-sync":53,"lodash":"lodash"}],91:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm.workorder';

angular.module('wfm.workorder', [
  require('./directive')
, require('./sync-service')
])

},{"./directive":89,"./sync-service":90}],92:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = {
  apiHost: 'http://localhost:8080',
  apiPath: '/api/wfm/workorder',
  datasetId : 'workorders',
  syncOptions : {
    "sync_frequency" : 5,
    "storage_strategy": "dom",
    "do_console_log": false
  }
}

},{}],93:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],94:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var angular = require('angular');
var _ = require('lodash');
require('feedhenry');

angular.module('wfm-mobile', [
, require('angular-messages')
, require('angular-ui-router')
, require('angular-material')
, require('fh-wfm-message')
, require('fh-wfm-mediator')
, require('fh-wfm-workorder')
, require('fh-wfm-result')
, require('fh-wfm-workflow')
, require('fh-wfm-appform')
, require('fh-wfm-risk-assessment')
, require('fh-wfm-vehicle-inspection')
, require('fh-wfm-user')
, require('fh-wfm-map')
, require('fh-wfm-file')
, require('fh-wfm-camera')

, require('./workorder/workorder')
, require('./workflow/workflow')
, require('./message/message')
, require('./map/map')
, require('./setting/setting')
, require('./auth/auth')
, require('./calendar/calendar')
, require('./file/file')
])

.config(function($stateProvider, $urlRouterProvider) {
  // if none of the states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/workorders');

  $stateProvider
    .state('app', {
      abstract: true,
      templateUrl: 'app/main.tpl.html',
      resolve: {
        profileData: function(userClient) {
          return userClient.getProfile();
        },
        syncManagers: function(syncPool, profileData) {
          return syncPool.syncManagerMap(profileData);
        },
        workorderManager: function(syncManagers) {
          return syncManagers.workorders;
        },
        workflowManager: function(syncManagers) {
          return syncManagers.workflows;
        },
        resultManager: function(syncManagers) {
          return syncManagers.result;
        },
        messageManager: function(syncManagers) {
          return syncManagers.messages;
        }
      },
      controller: function($rootScope, $scope, $state, $mdSidenav, mediator, profileData, userClient, workorderSync, messageSync) {
        $scope.profileData = profileData;
        $scope.toggleSidenav = function(event, menuId) {
          $mdSidenav(menuId).toggle();
          event.stopPropagation();
        };
        $scope.navigateTo = function(state, params) {
          if (state) {
            $state.go(state, params);
          }
        }
      }
    })
})

.run(function($rootScope, $state, mediator, syncPool) {
  mediator.subscribe('wfm:auth:profile:change', function(_profileData) {
    if (_profileData === null) { // a logout
      syncPool.removeManagers().then(function() {
        $state.go('app.login', undefined, {reload: true});
      }, function(err) {
        console.err(err);
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
          $state.go('app.workorders', undefined, {reload: true});
        };
      });
    };
  });
})

.factory('syncPool', function($q, $state, mediator, workorderSync, workflowSync, resultSync, messageSync) {
  var syncPool = {};

  syncPool.removeManagers = function() {
    var promises = [];
    // add any additonal manager cleanups here
    // TODO: replace this with a mediator event that modules can listen for
    promises.push(workorderSync.removeManager());
    promises.push(messageSync.removeManager());
    promises.push(workflowSync.removeManager());
    // promises.push(resultSync.removeManager());
    return $q.all(promises);
  }

  syncPool.syncManagerMap = function(profileData) {
    if (! profileData) {
      return $q.when({});
    }
    var promises = [];
    if (profileData && profileData.id) {
      var filter = {
        key: 'assignee',
        value: profileData.id
      };
      var messageFilter = {
        key: 'receiverId',
        value: profileData.id
      }
    };
    // add any additonal manager creates here
    promises.push(workorderSync.createManager({filter: filter}));
    promises.push(workflowSync.createManager());
    promises.push(messageSync.createManager({filter: messageFilter}));
    promises.push(resultSync.managerPromise);
    return $q.all(promises).then(function(managers) {
      var map = {};
      managers.forEach(function(managerWrapper) {
        map[managerWrapper.manager.datasetId] = managerWrapper;
      });
      map.workorders.manager.publishRecordDeltaReceived(mediator)
      return map;
    });
  }

  syncPool.forceSync = function(managers) {
    var promises = [];
    _.forOwn(managers, function(manager) {
      promises.push(
        manager.forceSync()
          .then(manager.waitForSync)
          .then(function() {
            return manager;
          })
      );
    });
    return $q.all(promises)
  }

  return syncPool;
})

.run(function($rootScope, $state, $q, mediator, userClient) {
  var initPromises = [];
  var initListener = mediator.subscribe('promise:init', function(promise) {
    initPromises.push(promise);
  });
  mediator.publish('init');
  console.log(initPromises.length, 'init promises to resolve.');
  var all = (initPromises.length > 0) ? $q.all(initPromises) : $q.when(null);
  all.then(function() {
    $rootScope.ready = true;
    console.log(initPromises.length, 'init promises resolved.');
    mediator.remove('promise:init', initListener.id);
    return null;
  });

  $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
    if(toState.name !== "app.login"){
      userClient.hasSession().then(function(hasSession) {
        if(!hasSession) {
          e.preventDefault();
          $rootScope.toState = toState;
          $rootScope.toParams = toParams;
          $state.go('app.login');
        }
      });
    };
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
});

},{"./auth/auth":95,"./calendar/calendar":96,"./file/file":97,"./map/map":98,"./message/message":99,"./setting/setting":100,"./workflow/workflow":101,"./workorder/workorder":102,"angular":"angular","angular-material":"angular-material","angular-messages":"angular-messages","angular-ui-router":"angular-ui-router","feedhenry":"feedhenry","fh-wfm-appform":11,"fh-wfm-camera":18,"fh-wfm-file":23,"fh-wfm-map":29,"fh-wfm-mediator":31,"fh-wfm-message":38,"fh-wfm-result":41,"fh-wfm-risk-assessment":47,"fh-wfm-user":65,"fh-wfm-vehicle-inspection":75,"fh-wfm-workflow":83,"fh-wfm-workorder":91,"lodash":"lodash"}],95:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm-mobile.auth';

angular.module('wfm-mobile.auth', [
  'ui.router',
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.login', {
        url: '/login',
        templateUrl: 'app/auth/login.tpl.html',
        controller: 'LoginCtrl as ctrl',
        resolve: {
          hasSession: function(userClient) {
            return userClient.hasSession();
          }
        }
      })
    .state('app.profile', {
        url: '/profile',
        templateUrl: 'app/auth/profile.tpl.html',
        controller: 'ProfileCtrl as ctrl',
      })
})

.controller('LoginCtrl', function(userClient, hasSession) {
  var self = this;

  self.hasSession = hasSession;

  self.loginMessages = {success: false, error: false};

  self.login = function(valid) {
    if (valid) {
      userClient.auth(self.username, self.password)
      .then(function() {
        self.loginMessages.success = true;
      }, function(err) {
        console.log(err);
        self.loginMessages.error = true;
      });
    }
  }

  self.logout = function() {
    userClient.clearSession()
  }
})

.controller('ProfileCtrl', function() {
})
;

},{}],96:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm-mobile.calendar';

angular.module('wfm-mobile.calendar', [
  'ui.router',
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.calendar', {
      url: '/calendar',
      resolve: {
        workorders: function(workorderManager) {
          return workorderManager.list();
        }
      },
      templateUrl: 'app/calendar/calendar.tpl.html',
      controller: 'calendarCtrl as ctrl',
    })
})

.controller('calendarCtrl', function (workorders) {
  this.workorders = workorders;
})

;

},{}],97:[function(require,module,exports){
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

},{"lodash":"lodash"}],98:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm-mobile.map';

angular.module('wfm-mobile.map', [
  'ui.router',
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.map', {
      url: '/map',
      resolve: {
        workorders: function(workorderManager) {
          return workorderManager.list();
        }
      },
      templateUrl: 'app/map/map.tpl.html',
      controller: 'MapCtrl as ctrl',
    })
})

.controller('MapCtrl', function ($window, $document, $timeout, workorders) {
  this.center = [49.28, -123.12];
  this.workorders = workorders;
})

;

},{}],99:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm-mobile.messages';

angular.module('wfm-mobile.messages', [
  'ui.router',
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.message', {
        url: '/messages',
        templateUrl: 'app/message/message-list.tpl.html',
        controller: 'MessagesCtrl as ctrl',
        resolve: {
          messages: function(messageManager) {
            return messageManager.list();
          }
      }
    })
    .state('app.message-detail', {
      url: '/message/:messageId',
      templateUrl: 'app/message/message-detail.tpl.html',
      controller: 'MessageDetailController as ctrl',
      resolve: {
        message: function($stateParams, messageManager) {
          return messageManager.read($stateParams.messageId);
        }
      }
    })
})
.run(function($state, mediator) {
  mediator.subscribe('wfm:message:selected', function(message) {
    $state.go('app.message-detail', {
      messageId: message.id
    });
  });
})
.controller('MessagesCtrl', function($scope, $filter, mediator, messages) {
  var self = this;
  self.messages = messages;
})
.controller('MessageDetailController', function ($scope, $state, mediator, message, messageManager) {
  mediator.subscribeForScope('wfm:message:close:' + message.id, $scope, function() {
    $state.go('app.message');
  })
  var self = this;
  self.message = message;
  message.status = "read";
  messageManager.update(message);
})
;

module.exports = 'wfm-mobile.messages';

},{}],100:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm-mobile.setting';

angular.module('wfm-mobile.setting', [
  'ui.router',
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.setting', {
        url: '/settings',
        templateUrl: 'app/setting/setting-list.tpl.html',
        controller: 'SettingCtrl as ctrl',
      })
})

.controller('SettingCtrl', function($document) {
  var self = this;
  self.enabled = $document[0].body.classList.contains('wfm-night');;

  self.setNightTimeMode = function() {
    console.log(self.enabled);
    if (self.enabled) {
      $document[0].body.classList.add('wfm-night');
    } else {
      $document[0].body.classList.remove('wfm-night');
    }
  }
})
;

},{}],101:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';
var _ = require('lodash');

angular.module('wfm-mobile.workflow', [
  'ui.router',
, 'wfm.core.mediator'
])

.run(function($state, mediator) {
  mediator.subscribe('wfm:workorder:selected', function(workorder) {
    $state.go('app.workflow.begin', {
      workorderId: workorder.id
    });
  });
})

.config(function($stateProvider) {
  $stateProvider
    .state('app.workflow', {
      abstract: true,
      url: '/workflow/workorder/:workorderId',
      resolve: {
        workflows: function(workflowManager) {
          return workflowManager.list();
        },
        workorder: function($stateParams, workorderManager) {
          return workorderManager.read($stateParams.workorderId);
        },
        result: function($stateParams, resultManager, workflowManager, workorder, workflows) {
          var workflow = workflows.filter(function(workflow) {
            return String(workflow.id) === String(workorder.workflowId);
          });
          if (workflow.length) {
            workflow = workflow[0];
          }
          return resultManager.getByWorkorderId($stateParams.workorderId)
            .then(function(result) {
              var oldStatus = result.status;
              result.status = workflowManager.checkStatus(workorder, workflow, result);
              if (oldStatus !== result.status) {
                var create = ! (result.id || result._localuid || result.id === 0);
                if (create) {
                  return resultManager.create(result)
                } else {
                  return resultManager.update(result);
                };
              } else {
                return result;
              };
            });
        }
      },
      views: {
        '': {
          template: '<div ui-view></div>'
        },
        'toolbar@app': {
          templateUrl: 'app/workflow/workflow-toolbar.tpl.html',
          controller: function($scope, workorder) {
            $scope.workorder = workorder;
          },
          resolve: {
            workorder: function($stateParams, workorderManager) {
              return workorderManager.read($stateParams.workorderId);
            }
          }
        }
      }
    })
    .state('app.workflow.begin', {
      url: '/begin',
      templateUrl: 'app/workflow/workflow-begin.tpl.html',
      controller: 'WorkflowController as ctrl',
    })
    .state('app.workflow.steps', {
      url: '/steps',
      templateUrl: 'app/workflow/workflow-steps.tpl.html',
      controller: 'WorkflowStepController as ctrl',
    })
    .state('app.workflow.complete', {
      url: '/complete',
      templateUrl: 'app/workflow/workflow-complete.tpl.html',
      controller: 'WorkflowController as ctrl',
    })
})

.controller('WorkflowController', function($state, workflowManager, resultManager, workflows, workorder, result) {
  var self = this;
  console.log('workorder', workorder)
  self.workorder = workorder;
  var workflow = workflows.filter(function(workflow) {
    return String(workflow.id) === String(workorder.workflowId);
  });
  if (workflow.length) {
    self.workflow = workflow[0];
  }

  self.result = result;

  self.stepIndex = workflowManager.nextStepIndex(self.workflow.steps, self.result);

  self.begin = function() {
    $state.go('app.workflow.steps', {
      workorderId: workorder.id
    });
  }
})


.controller('WorkflowStepController', function($scope, $state, mediator, workflowManager, resultManager, appformClient, workflows, workorder, result, profileData) {
  console.log('manager', resultManager);
  var self = this;

  self.workorder = workorder;
  var workflow = workflows.filter(function(workflow) {
    return String(workflow.id) === String(workorder.workflowId);
  });
  if (workflow.length) {
    self.workflow = workflow[0];
  }
  self.result = result;
  self.result.stepResults = self.result.stepResults || {};
  self.result.workorderId = self.result.workorderId || workorder.id;

  self.result.status = workflowManager.checkStatus(self.workorder, self.workflow, self.result);

  self.stepIndex = workflowManager.nextStepIndex(self.workflow.steps, self.result);

  self.next = function() {
    self.stepIndex++;
    if (self.stepIndex < self.workflow.steps.length) {
      self.stepCurrent = self.workflow.steps[self.stepIndex];
    } else {
      $state.go('app.workflow.complete', {
        workorderId: self.workorder.id
      });
    }
  };

  self.next();

  var backSubscription = mediator.subscribe('wfm:workflow:step:back', function(submission) {
    self.stepIndex--;
    if (self.stepIndex >= 0) {
      self.stepCurrent = self.workflow.steps[self.stepIndex];
    } else {
      $state.go('app.workflow.begin', {
        workorderId: self.workorder.id
      });
    }
  });

  var stepSubscription = mediator.subscribe('wfm:workflow:step:done', function(submission) {
    console.log('Done called for workflow step', self.stepCurrent.code);
    var step = angular.copy(self.stepCurrent);
    delete step['$$hashKey']; // this property breaks appform submissions;
    var create = ! (self.result.id || self.result._localuid || self.result.id === 0);
    var stepResult = {
      step: step,
      submission: submission,
      type: step.formId ? 'appform' : 'static',
      status: step.formId ? 'pending' : 'complete',
      timestamp: new Date().getTime(),
      submitter: profileData.id
    }
    self.result.stepResults[step.code] = stepResult;
    self.result.status = workflowManager.checkStatus(self.workorder, self.workflow, self.result);
    var promise = ! create ? resultManager.update(self.result) : resultManager.create(self.result)
    promise.then(function(promiseResult) {
      if (create) {
        resultManager.stream.filter(function(notification) {
          return notification.code === 'remote_update_applied'
            && notification.message.hash === self.result._localuid;
        }).take(1).subscribe(function(notification) {
          self.result.id = notification.uid;
        });
      }
      console.log('result save successful');
      if (step.formId) {
        appformClient.syncStepResult(workorder, stepResult)
        .then(function(remoteSubmission) {
          self.next();
        }, function(error) {
          console.error(error);
          throw error;
        });
      } else {
        self.next();
      }
    }, function(error) {
      console.error(error);
      throw error;
    });
  });

  $scope.$on("$destroy", function() {
    mediator.remove('wfm:workflow:step:done', stepSubscription.id);
    mediator.remove('wfm:workflow:step:back', backSubscription.id);
  });
})

module.exports = 'wfm-mobile.workflow';

},{"lodash":"lodash"}],102:[function(require,module,exports){
/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

angular.module('wfm-mobile.workorders', [
  'ui.router'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.workorders', {
        url: '/workorders',
        templateUrl: 'app/workorder/workorder-list.tpl.html',
        controller: 'WorkordersCtrl as ctrl',
        resolve: {
          workorders: function(workorderManager) {
            return workorderManager.list();
          },
          resultMap: function(resultManager) {
            return resultManager.list()
            .then(function(results) {
              var map = {};
              results.forEach(function(result) {
                map[result.workorderId] = result;
              });
              return map;
            })
          }
        }
      })
})

.controller('WorkordersCtrl', function($scope, $filter, workorderManager, mediator, workorders, resultMap) {
  var self = this;
  self.workorders = workorders;
  self.resultMap = resultMap;
  mediator.subscribeForScope('wfm:auth:profile:change', $scope, function(profileData) {
    if (!profileData) {
      self.workorders = [];
    }
  })
  mediator.subscribeForScope('wfm:sync:record_delta_received:workorders', $scope, function(notification) {
    console.log(notification);
     workorderManager.list().then(function(workorders) {
       self.workorders = workorders;
     })
  })
})

;

module.exports = 'wfm-mobile.workorders';

},{}]},{},[94])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLWFwcGZvcm0vZGlzdC9hcHBmb3JtLWZpZWxkLWRhdGUudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLWFwcGZvcm0vZGlzdC9hcHBmb3JtLWZpZWxkLWRhdGV0aW1lLnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1hcHBmb3JtL2Rpc3QvYXBwZm9ybS1maWVsZC1sb2NhdGlvbi50cGwuaHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tYXBwZm9ybS9kaXN0L2FwcGZvcm0tZmllbGQtbnVtYmVyLnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1hcHBmb3JtL2Rpc3QvYXBwZm9ybS1maWVsZC1waG90by50cGwuaHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tYXBwZm9ybS9kaXN0L2FwcGZvcm0tZmllbGQtdGltZS50cGwuaHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tYXBwZm9ybS9kaXN0L2FwcGZvcm0tZmllbGQudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLWFwcGZvcm0vZGlzdC9hcHBmb3JtLXN1Ym1pc3Npb24udHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLWFwcGZvcm0vZGlzdC9hcHBmb3JtLnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1hcHBmb3JtL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLWFwcGZvcm0vbGliL2FuZ3VsYXIvYXBwZm9ybS1uZy5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tYXBwZm9ybS9saWIvYW5ndWxhci9kaXJlY3RpdmUuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLWFwcGZvcm0vbGliL2FuZ3VsYXIvc2VydmljZS5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tYXBwZm9ybS9saWIvYXBwZm9ybS1tZWRpYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tYXBwZm9ybS9saWIvYXBwZm9ybS5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tY2FtZXJhL2Rpc3QvY2FtZXJhLnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1jYW1lcmEvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tY2FtZXJhL2xpYi9hbmd1bGFyL2NhbWVyYS1uZy5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tY2FtZXJhL2xpYi9hbmd1bGFyL2RpcmVjdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tY2FtZXJhL2xpYi9hbmd1bGFyL3NlcnZpY2UuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLWNhbWVyYS9saWIvY2FtZXJhLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1maWxlL2xpYi9hbmd1bGFyL2RpcmVjdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tZmlsZS9saWIvYW5ndWxhci9maWxlLW5nLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1maWxlL2xpYi9jb25maWcuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLWZpbGUvbGliL2ZpbGUuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLW1hcC9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1tYXAvZGlzdC93b3Jrb3JkZXItbWFwLnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1tYXAvbGliL2FuZ3VsYXIvZGlyZWN0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1tYXAvbGliL2FuZ3VsYXIvbWFwLW5nLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1tYXAvbGliL2FuZ3VsYXIvc2VydmljZS5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tbWVkaWF0b3IvbGliL2FuZ3VsYXIvbWVkaWF0b3ItbmcuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLW1lZGlhdG9yL2xpYi9tZWRpYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tbWVzc2FnZS9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1tZXNzYWdlL2Rpc3QvbWVzc2FnZS1kZXRhaWwudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLW1lc3NhZ2UvZGlzdC9tZXNzYWdlLWZvcm0udHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLW1lc3NhZ2UvZGlzdC9tZXNzYWdlLWxpc3QudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLW1lc3NhZ2UvbGliL2FuZ3VsYXIvZGlyZWN0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1tZXNzYWdlL2xpYi9hbmd1bGFyL21lc3NhZ2UtbmcuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLW1lc3NhZ2UvbGliL2FuZ3VsYXIvc3luYy1zZXJ2aWNlLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1tZXNzYWdlL2xpYi9jb25maWcuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXJlc3VsdC9saWIvYW5ndWxhci9yZXN1bHQtbmcuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXJlc3VsdC9saWIvYW5ndWxhci9zZXJ2aWNlLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1yZXN1bHQvbGliL2NvbmZpZy5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tcmlzay1hc3Nlc3NtZW50L2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXJpc2stYXNzZXNzbWVudC9kaXN0L3Jpc2stYXNzZXNzbWVudC1mb3JtLnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1yaXNrLWFzc2Vzc21lbnQvZGlzdC9yaXNrLWFzc2Vzc21lbnQudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXJpc2stYXNzZXNzbWVudC9saWIvYW5ndWxhci9yaXNrLWFzc2Vzc21lbnQtbmcuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXNpZ25hdHVyZS9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1zaWduYXR1cmUvZGlzdC9zaWduYXR1cmUtZm9ybS50cGwuaHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tc2lnbmF0dXJlL2Rpc3Qvc2lnbmF0dXJlLnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1zaWduYXR1cmUvbGliL2FuZ3VsYXIvc2lnbmF0dXJlLW5nLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1zaWduYXR1cmUvbGliL2NhbnZhcy1kcmF3ci5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tc3luYy9saWIvYW5ndWxhci9zeW5jLW5nLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS1zeW5jL2xpYi9jbGllbnQuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXN5bmMvbGliL2NvbmZpZy5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tdXNlci9kaXN0L2dyb3VwLWZvcm0udHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXVzZXIvZGlzdC9ncm91cC1saXN0LnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS11c2VyL2Rpc3QvZ3JvdXAudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXVzZXIvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tdXNlci9kaXN0L3dvcmtlci1mb3JtLnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS11c2VyL2Rpc3Qvd29ya2VyLWxpc3QudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXVzZXIvZGlzdC93b3JrZXIudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXVzZXIvbGliL2FuZ3VsYXIvZGlyZWN0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS11c2VyL2xpYi9hbmd1bGFyL3NlcnZpY2UuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXVzZXIvbGliL2FuZ3VsYXIvdXNlci1uZy5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tdXNlci9saWIvZ3JvdXAvY29uZmlnLWdyb3VwLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS11c2VyL2xpYi9ncm91cC9ncm91cC1jbGllbnQuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXVzZXIvbGliL21lbWJlcnNoaXAvY29uZmlnLW1lbWJlcnNoaXAuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXVzZXIvbGliL21lbWJlcnNoaXAvbWVtYmVyc2hpcC1jbGllbnQuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXVzZXIvbGliL3VzZXIvY29uZmlnLXVzZXIuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXVzZXIvbGliL3VzZXIvdXNlci1jbGllbnQuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXZlaGljbGUtaW5zcGVjdGlvbi9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS12ZWhpY2xlLWluc3BlY3Rpb24vZGlzdC92ZWhpY2xlLWluc3BlY3Rpb24tZm9ybS50cGwuaHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0tdmVoaWNsZS1pbnNwZWN0aW9uL2Rpc3QvdmVoaWNsZS1pbnNwZWN0aW9uLnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS12ZWhpY2xlLWluc3BlY3Rpb24vbGliL2FuZ3VsYXIvdmVoaWNsZS1pbnNwZWN0aW9uLW5nLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS13b3JrZmxvdy9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS13b3JrZmxvdy9kaXN0L3dvcmtmbG93LWZvcm0udHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXdvcmtmbG93L2Rpc3Qvd29ya2Zsb3ctcHJvZ3Jlc3MudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXdvcmtmbG93L2Rpc3Qvd29ya2Zsb3ctc3RlcC1kZXRhaWwudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXdvcmtmbG93L2Rpc3Qvd29ya2Zsb3ctc3RlcC1mb3JtLnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS13b3JrZmxvdy9saWIvYW5ndWxhci9kaXJlY3RpdmUuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXdvcmtmbG93L2xpYi9hbmd1bGFyL3NlcnZpY2UuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXdvcmtmbG93L2xpYi9hbmd1bGFyL3dvcmtmbG93LW5nLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS13b3JrZmxvdy9saWIvY29uZmlnLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS13b3Jrb3JkZXIvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9maC13Zm0td29ya29yZGVyL2Rpc3Qvd29ya29yZGVyLWZvcm0udHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXdvcmtvcmRlci9kaXN0L3dvcmtvcmRlci1saXN0LnRwbC5odG1sLmpzIiwibm9kZV9tb2R1bGVzL2ZoLXdmbS13b3Jrb3JkZXIvZGlzdC93b3Jrb3JkZXIudHBsLmh0bWwuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXdvcmtvcmRlci9saWIvYW5ndWxhci9kaXJlY3RpdmUuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXdvcmtvcmRlci9saWIvYW5ndWxhci9zeW5jLXNlcnZpY2UuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXdvcmtvcmRlci9saWIvYW5ndWxhci93b3Jrb3JkZXItbmcuanMiLCJub2RlX21vZHVsZXMvZmgtd2ZtLXdvcmtvcmRlci9saWIvY29uZmlnLmpzIiwibm9kZV9tb2R1bGVzL2dydW50LWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsInNyYy9hcHAvYXBwLmpzIiwic3JjL2FwcC9hdXRoL2F1dGguanMiLCJzcmMvYXBwL2NhbGVuZGFyL2NhbGVuZGFyLmpzIiwic3JjL2FwcC9maWxlL2ZpbGUuanMiLCJzcmMvYXBwL21hcC9tYXAuanMiLCJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5qcyIsInNyYy9hcHAvc2V0dGluZy9zZXR0aW5nLmpzIiwic3JjL2FwcC93b3JrZmxvdy93b3JrZmxvdy5qcyIsInNyYy9hcHAvd29ya29yZGVyL3dvcmtvcmRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaklBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5TUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDck9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLmFwcGZvcm0uZGlyZWN0aXZlcycpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0uYXBwZm9ybS5kaXJlY3RpdmVzJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS9hcHBmb3JtLWZpZWxkLWRhdGUudHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiIGNsYXNzPVwie3tmaWVsZC5wcm9wcy5maWVsZENvZGV9fSBhcHBmb3JtLWZpZWxkLW51bWJlclwiPlxcbicgK1xuICAgICcgIDxsYWJlbCBmb3I9XCJpbnB1dERhdGVcIiBjbGFzcz1cIlwiPnt7ZmllbGQucHJvcHMubmFtZX19PC9sYWJlbD5cXG4nICtcbiAgICAnICA8aW5wdXQgdHlwZT1cImRhdGVcIlxcbicgK1xuICAgICcgICAgcGxhY2Vob2xkZXI9XCJ7e2N0cmwuZmllbGQucHJvcHMuaGVscFRleHR9fVwiXFxuJyArXG4gICAgJyAgICBuYW1lPVwiaW5wdXREYXRlXCJcXG4nICtcbiAgICAnICAgIG5nLW1vZGVsPVwiY3RybC5tb2RlbC5kYXRlXCJcXG4nICtcbiAgICAnICAgIG5nLWNoYW5nZT1cImN0cmwudXBkYXRlTW9kZWwoKVwiXFxuJyArXG4gICAgJyAgICBtaW49XCJ7e2ZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy52YWxpZGF0aW9uLm1pbn19XCJcXG4nICtcbiAgICAnICAgIG1heD1cInt7ZmllbGQucHJvcHMuZmllbGRPcHRpb25zLnZhbGlkYXRpb24ubWF4fX1cIlxcbicgK1xuICAgICcgICAgbmctcmVxdWlyZWQ9XCJjdHJsLmZpZWxkLnByb3BzLnJlcXVpcmVkXCJcXG4nICtcbiAgICAnICA+PC9pbnB1dD5cXG4nICtcbiAgICAnICA8ZGl2IG5nLW1lc3NhZ2VzPVwiJHBhcmVudC5maWVsZEZvcm0uaW5wdXROYW1lLiRlcnJvclwiIG5nLXNob3c9XCIkcGFyZW50LmZpZWxkRm9ybS5pbnB1dE5hbWUuJGRpcnR5IHx8ICRwYXJlbnQuZmllbGRGb3JtLiRzdWJtaXR0ZWRcIj5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+QSB7e2ZpZWxkLnByb3BzLm5hbWV9fSBpcyByZXF1aXJlZC48L2Rpdj5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZT1cIm51bWJlclwiPllvdSBkaWQgbm90IGVudGVyIGEgdmFsaWQgZGF0YWU8L2Rpdj5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZT1cIm1heFwiIGNsYXNzPVwiaGVscC1ibG9ja1wiPlZhbHVlIG11c3QgYmUgbGVzcyB0aGFuIHt7ZmllbGQucHJvcHMuZmllbGRPcHRpb25zLnZhbGlkYXRpb24ubWF4fX0uPC9kaXY+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJtaW5cIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5WYWx1ZSBtdXN0IGJlIGxhcmdlciB0aGFuIHt7ZmllbGQucHJvcHMuZmllbGRPcHRpb25zLnZhbGlkYXRpb24ubWlufX0uPC9kaXY+XFxuJyArXG4gICAgJyAgPC9kaXY+XFxuJyArXG4gICAgJzwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICcnKTtcbn1dKTtcbiIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5hcHBmb3JtLmRpcmVjdGl2ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLmFwcGZvcm0uZGlyZWN0aXZlcycsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvYXBwZm9ybS1maWVsZC1kYXRldGltZS50cGwuaHRtbCcsXG4gICAgJzwhLS1cXG4nICtcbiAgICAnIENPTkZJREVOVElBTFxcbicgK1xuICAgICcgQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXFxuJyArXG4gICAgJyBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXFxuJyArXG4gICAgJy0tPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPHAgY2xhc3M9XCJtZC1jYXB0aW9uXCI+e3tmaWVsZC5wcm9wcy5uYW1lfX08L3A+XFxuJyArXG4gICAgJzxkaXYgbGF5b3V0PVwicm93XCI+XFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lciBmbGV4IGNsYXNzPVwibWQtYmxvY2tcIiBjbGFzcz1cInt7ZmllbGQucHJvcHMuZmllbGRDb2RlfX0gYXBwZm9ybS1maWVsZC1udW1iZXJcIj5cXG4nICtcbiAgICAnICAgIDxsYWJlbCBmb3I9XCJpbnB1dERhdGVcIiBjbGFzcz1cIlwiPkRhdGU8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPGlucHV0IHR5cGU9XCJkYXRlXCJcXG4nICtcbiAgICAnICAgICAgcGxhY2Vob2xkZXI9XCJ7e2N0cmwuZmllbGQucHJvcHMuaGVscFRleHR9fVwiXFxuJyArXG4gICAgJyAgICAgIG5hbWU9XCJpbnB1dERhdGVcIlxcbicgK1xuICAgICcgICAgICBuZy1tb2RlbD1cImN0cmwubW9kZWwuZGF0ZVwiXFxuJyArXG4gICAgJyAgICAgIG5nLWNoYW5nZT1cImN0cmwudXBkYXRlTW9kZWwoKVwiXFxuJyArXG4gICAgJyAgICAgIG1pbj1cInt7ZmllbGQucHJvcHMuZmllbGRPcHRpb25zLnZhbGlkYXRpb24ubWlufX1cIlxcbicgK1xuICAgICcgICAgICBtYXg9XCJ7e2ZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy52YWxpZGF0aW9uLm1heH19XCJcXG4nICtcbiAgICAnICAgICAgbmctcmVxdWlyZWQ9XCJjdHJsLmZpZWxkLnByb3BzLnJlcXVpcmVkXCJcXG4nICtcbiAgICAnICAgID48L2lucHV0PlxcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlcz1cIiRwYXJlbnQuZmllbGRGb3JtLmlucHV0TmFtZS4kZXJyb3JcIiBuZy1zaG93PVwiJHBhcmVudC5maWVsZEZvcm0uaW5wdXROYW1lLiRkaXJ0eSB8fCAkcGFyZW50LmZpZWxkRm9ybS4kc3VibWl0dGVkXCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+QSB7e2ZpZWxkLnByb3BzLm5hbWV9fSBpcyByZXF1aXJlZC48L2Rpdj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBuZy1tZXNzYWdlPVwibnVtYmVyXCI+WW91IGRpZCBub3QgZW50ZXIgYSB2YWxpZCBkYXRlPC9kaXY+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cIm1heFwiIGNsYXNzPVwiaGVscC1ibG9ja1wiPlZhbHVlIG11c3QgYmUgbGVzcyB0aGFuIHt7ZmllbGQucHJvcHMuZmllbGRPcHRpb25zLnZhbGlkYXRpb24ubWF4fX0uPC9kaXY+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cIm1pblwiIGNsYXNzPVwiaGVscC1ibG9ja1wiPlZhbHVlIG11c3QgYmUgbGFyZ2VyIHRoYW4ge3tmaWVsZC5wcm9wcy5maWVsZE9wdGlvbnMudmFsaWRhdGlvbi5taW59fS48L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXIgZmxleCBjbGFzcz1cIm1kLWJsb2NrXCIgY2xhc3M9XCJ7e2ZpZWxkLnByb3BzLmZpZWxkQ29kZX19IGFwcGZvcm0tZmllbGQtbnVtYmVyXCI+XFxuJyArXG4gICAgJyAgICA8bGFiZWwgZm9yPVwiaW5wdXRUaW1lXCIgY2xhc3M9XCJcIj5UaW1lPC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDxpbnB1dCB0eXBlPVwidGltZVwiXFxuJyArXG4gICAgJyAgICAgIHBsYWNlaG9sZGVyPVwie3tjdHJsLmZpZWxkLnByb3BzLmhlbHBUZXh0fX1cIlxcbicgK1xuICAgICcgICAgICBuYW1lPVwiaW5wdXRUaW1lXCJcXG4nICtcbiAgICAnICAgICAgbmctbW9kZWw9XCJjdHJsLm1vZGVsLnRpbWVcIlxcbicgK1xuICAgICcgICAgICBuZy1yZXF1aXJlZD1cImN0cmwuZmllbGQucHJvcHMucmVxdWlyZWRcIlxcbicgK1xuICAgICcgICAgPjwvaW5wdXQ+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2VzPVwiJHBhcmVudC5maWVsZEZvcm0uaW5wdXROYW1lLiRlcnJvclwiIG5nLXNob3c9XCIkcGFyZW50LmZpZWxkRm9ybS5pbnB1dE5hbWUuJGRpcnR5IHx8ICRwYXJlbnQuZmllbGRGb3JtLiRzdWJtaXR0ZWRcIj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5BIHt7ZmllbGQucHJvcHMubmFtZX19IGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJudW1iZXJcIj5Zb3UgZGlkIG5vdCBlbnRlciBhIHZhbGlkIHRpbWU8L2Rpdj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBuZy1tZXNzYWdlPVwibWF4XCIgY2xhc3M9XCJoZWxwLWJsb2NrXCI+VmFsdWUgbXVzdCBiZSBsZXNzIHRoYW4ge3tmaWVsZC5wcm9wcy5maWVsZE9wdGlvbnMudmFsaWRhdGlvbi5tYXh9fS48L2Rpdj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBuZy1tZXNzYWdlPVwibWluXCIgY2xhc3M9XCJoZWxwLWJsb2NrXCI+VmFsdWUgbXVzdCBiZSBsYXJnZXIgdGhhbiB7e2ZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy52YWxpZGF0aW9uLm1pbn19LjwvZGl2PlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJzwvZGl2PlxcbicgK1xuICAgICcnKTtcbn1dKTtcbiIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5hcHBmb3JtLmRpcmVjdGl2ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLmFwcGZvcm0uZGlyZWN0aXZlcycsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvYXBwZm9ybS1maWVsZC1sb2NhdGlvbi50cGwuaHRtbCcsXG4gICAgJzwhLS1cXG4nICtcbiAgICAnIENPTkZJREVOVElBTFxcbicgK1xuICAgICcgQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXFxuJyArXG4gICAgJyBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXFxuJyArXG4gICAgJy0tPlxcbicgK1xuICAgICc8cCBjbGFzcz1cIm1kLWNhcHRpb25cIj57e2ZpZWxkLnByb3BzLm5hbWV9fTwvcD5cXG4nICtcbiAgICAnPHA+e3tmaWVsZC5wcm9wcy5oZWxwVGV4dH19PC9wPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPG1kLWJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbmctY2xpY2s9XCJjdHJsLnNldExvY2F0aW9uKCRldmVudClcIiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCI+XFxuJyArXG4gICAgJyAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmxvY2F0aW9uX3NlYXJjaGluZzwvbWQtaWNvbj5cXG4nICtcbiAgICAnICBHZXQgTG9jYXRpb25cXG4nICtcbiAgICAnPC9tZC1idXR0b24+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8ZGl2IGxheW91dD1cInJvd1wiPlxcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJ7e2ZpZWxkLnByb3BzLmZpZWxkQ29kZX19IGFwcGZvcm0tZmllbGQtbG9jYXRpb24gbWQtYmxvY2tcIiBmbGV4PlxcbicgK1xuICAgICcgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIlxcbicgK1xuICAgICcgICAgICBwbGFjZWhvbGRlcj1cIkxhdGl0dWRlXCJcXG4nICtcbiAgICAnICAgICAgbmFtZT1cImlucHV0TmFtZVhcIlxcbicgK1xuICAgICcgICAgICBuZy1tb2RlbD1cImN0cmwubW9kZWwudmFsdWUubGF0XCJcXG4nICtcbiAgICAnICAgICAgbmctcmVxdWlyZWQ9XCJjdHJsLmZpZWxkLnByb3BzLnJlcXVpcmVkXCJcXG4nICtcbiAgICAnICAgID48L2lucHV0PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZXM9XCIkcGFyZW50LmZpZWxkRm9ybS5pbnB1dE5hbWVYLiRlcnJvclwiIG5nLXNob3c9XCIkcGFyZW50LmZpZWxkRm9ybS5pbnB1dE5hbWVYLiRkaXJ0eSB8fCAkcGFyZW50LmZpZWxkRm9ybS4kc3VibWl0dGVkXCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+QSB7e2ZpZWxkLnByb3BzLm5hbWV9fSBsYXRpdHVkZSBpcyByZXF1aXJlZC48L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwie3tmaWVsZC5wcm9wcy5maWVsZENvZGV9fSBhcHBmb3JtLWZpZWxkLWxvY2F0aW9uIG1kLWJsb2NrXCIgZmxleD5cXG4nICtcbiAgICAnICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcXG4nICtcbiAgICAnICAgICAgcGxhY2Vob2xkZXI9XCJMb25naXR1ZGVcIlxcbicgK1xuICAgICcgICAgICBuYW1lPVwiaW5wdXROYW1lWVwiXFxuJyArXG4gICAgJyAgICAgIG5nLW1vZGVsPVwiY3RybC5tb2RlbC52YWx1ZS5sb25nXCJcXG4nICtcbiAgICAnICAgICAgbmctcmVxdWlyZWQ9XCJjdHJsLmZpZWxkLnByb3BzLnJlcXVpcmVkXCJcXG4nICtcbiAgICAnICAgID48L2lucHV0PlxcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlcz1cIiRwYXJlbnQuZmllbGRGb3JtLmlucHV0TmFtZVkuJGVycm9yXCIgbmctc2hvdz1cIiRwYXJlbnQuZmllbGRGb3JtLmlucHV0TmFtZVkuJGRpcnR5IHx8ICRwYXJlbnQuZmllbGRGb3JtLiRzdWJtaXR0ZWRcIj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5BIHt7ZmllbGQucHJvcHMubmFtZX19IGxvbmdpdHVkZSBpcyByZXF1aXJlZC48L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICc8L2Rpdj5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0uYXBwZm9ybS5kaXJlY3RpdmVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5hcHBmb3JtLmRpcmVjdGl2ZXMnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL2FwcGZvcm0tZmllbGQtbnVtYmVyLnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJzxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiIGNsYXNzPVwie3tmaWVsZC5wcm9wcy5maWVsZENvZGV9fSBhcHBmb3JtLWZpZWxkLW51bWJlclwiPlxcbicgK1xuICAgICcgIDxsYWJlbCBmb3I9XCJpbnB1dE5hbWVcIiBjbGFzcz1cIlwiPnt7ZmllbGQucHJvcHMubmFtZX19PC9sYWJlbD5cXG4nICtcbiAgICAnICA8aW5wdXQgdHlwZT1cIm51bWJlclwiXFxuJyArXG4gICAgJyAgICBwbGFjZWhvbGRlcj1cInt7Y3RybC5maWVsZC5wcm9wcy5oZWxwVGV4dH19XCJcXG4nICtcbiAgICAnICAgIG5hbWU9XCJpbnB1dE5hbWVcIlxcbicgK1xuICAgICcgICAgbmctbW9kZWw9XCJjdHJsLm1vZGVsLnZhbHVlXCJcXG4nICtcbiAgICAnICAgIG1pbj1cInt7ZmllbGQucHJvcHMuZmllbGRPcHRpb25zLnZhbGlkYXRpb24ubWlufX1cIlxcbicgK1xuICAgICcgICAgbWF4PVwie3tmaWVsZC5wcm9wcy5maWVsZE9wdGlvbnMudmFsaWRhdGlvbi5tYXh9fVwiXFxuJyArXG4gICAgJyAgICBuZy1yZXF1aXJlZD1cImN0cmwuZmllbGQucHJvcHMucmVxdWlyZWRcIlxcbicgK1xuICAgICcgID48L2lucHV0PlxcbicgK1xuICAgICcgIDxkaXYgbmctbWVzc2FnZXM9XCIkcGFyZW50LmZpZWxkRm9ybS5pbnB1dE5hbWUuJGVycm9yXCIgbmctc2hvdz1cIiRwYXJlbnQuZmllbGRGb3JtLmlucHV0TmFtZS4kZGlydHkgfHwgJHBhcmVudC5maWVsZEZvcm0uJHN1Ym1pdHRlZFwiPlxcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5BIHt7ZmllbGQucHJvcHMubmFtZX19IGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlPVwibnVtYmVyXCI+WW91IGRpZCBub3QgZW50ZXIgYSB2YWxpZCBudW1iZXI8L2Rpdj5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZT1cIm1heFwiIGNsYXNzPVwiaGVscC1ibG9ja1wiPlZhbHVlIG11c3QgYmUgbGVzcyB0aGFuIHt7ZmllbGQucHJvcHMuZmllbGRPcHRpb25zLnZhbGlkYXRpb24ubWF4fX0uPC9kaXY+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJtaW5cIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5WYWx1ZSBtdXN0IGJlIGxhcmdlciB0aGFuIHt7ZmllbGQucHJvcHMuZmllbGRPcHRpb25zLnZhbGlkYXRpb24ubWlufX0uPC9kaXY+XFxuJyArXG4gICAgJyAgPC9kaXY+XFxuJyArXG4gICAgJzwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICcnKTtcbn1dKTtcbiIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5hcHBmb3JtLmRpcmVjdGl2ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLmFwcGZvcm0uZGlyZWN0aXZlcycsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvYXBwZm9ybS1maWVsZC1waG90by50cGwuaHRtbCcsXG4gICAgJzwhLS1cXG4nICtcbiAgICAnIENPTkZJREVOVElBTFxcbicgK1xuICAgICcgQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXFxuJyArXG4gICAgJyBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXFxuJyArXG4gICAgJy0tPlxcbicgK1xuICAgICc8ZGl2PlxcbicgK1xuICAgICcgIDxtZC1idXR0b24gdHlwZT1cImJ1dHRvblwiIG5nLWNsaWNrPVwiY3RybC5jYXB0dXJlKCRldmVudClcIiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCI+e3tjdHJsLm1vZGVsLnZhbHVlID8gXFwnUmVwbGFjZVxcJyA6IFxcJ1Rha2UgYVxcJ319IHBob3RvPC9tZC1idXR0b24+XFxuJyArXG4gICAgJyAgPGJyPlxcbicgK1xuICAgICcgIDxpbWcgY2xhc3M9XFwnYXBwZm9ybS1waG90b1xcJyBuZy1pZj1cImZpZWxkLnZhbHVlLmxvY2FsVVJJXCIgbmctc3JjPVwie3tmaWVsZC52YWx1ZS5sb2NhbFVSSX19XCIgYWx0PVwicGhvdG9cIj48L2ltZz5cXG4nICtcbiAgICAnICA8aW1nIGNsYXNzPVxcJ2FwcGZvcm0tcGhvdG9cXCcgbmctaWY9XCJjdHJsLm1vZGVsLnZhbHVlXCIgbmctc3JjPVwie3tjdHJsLm1vZGVsLnZhbHVlfX1cIiBhbHQ9XCJwaG90b1wiPjwvaW1nPlxcbicgK1xuICAgICc8L2Rpdj5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0uYXBwZm9ybS5kaXJlY3RpdmVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5hcHBmb3JtLmRpcmVjdGl2ZXMnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL2FwcGZvcm0tZmllbGQtdGltZS50cGwuaHRtbCcsXG4gICAgJzwhLS1cXG4nICtcbiAgICAnIENPTkZJREVOVElBTFxcbicgK1xuICAgICcgQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXFxuJyArXG4gICAgJyBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXFxuJyArXG4gICAgJy0tPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCIgY2xhc3M9XCJ7e2ZpZWxkLnByb3BzLmZpZWxkQ29kZX19IGFwcGZvcm0tZmllbGQtbnVtYmVyXCI+XFxuJyArXG4gICAgJyAgPGxhYmVsIGZvcj1cImlucHV0VGltZVwiIGNsYXNzPVwiXCI+e3tmaWVsZC5wcm9wcy5uYW1lfX08L2xhYmVsPlxcbicgK1xuICAgICcgIDxpbnB1dCB0eXBlPVwidGltZVwiXFxuJyArXG4gICAgJyAgICBwbGFjZWhvbGRlcj1cInt7Y3RybC5maWVsZC5wcm9wcy5oZWxwVGV4dH19XCJcXG4nICtcbiAgICAnICAgIG5hbWU9XCJpbnB1dFRpbWVcIlxcbicgK1xuICAgICcgICAgbmctbW9kZWw9XCJjdHJsLm1vZGVsLnRpbWVcIlxcbicgK1xuICAgICcgICAgbmctY2hhbmdlPVwiY3RybC51cGRhdGVNb2RlbCgpXCJcXG4nICtcbiAgICAnICAgIG5nLXJlcXVpcmVkPVwiY3RybC5maWVsZC5wcm9wcy5yZXF1aXJlZFwiXFxuJyArXG4gICAgJyAgPjwvaW5wdXQ+XFxuJyArXG4gICAgJyAgPGRpdiBuZy1tZXNzYWdlcz1cIiRwYXJlbnQuZmllbGRGb3JtLmlucHV0TmFtZS4kZXJyb3JcIiBuZy1zaG93PVwiJHBhcmVudC5maWVsZEZvcm0uaW5wdXROYW1lLiRkaXJ0eSB8fCAkcGFyZW50LmZpZWxkRm9ybS4kc3VibWl0dGVkXCI+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPkEge3tmaWVsZC5wcm9wcy5uYW1lfX0gaXMgcmVxdWlyZWQuPC9kaXY+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJudW1iZXJcIj5Zb3UgZGlkIG5vdCBlbnRlciBhIHZhbGlkIHRpbWU8L2Rpdj5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZT1cIm1heFwiIGNsYXNzPVwiaGVscC1ibG9ja1wiPlZhbHVlIG11c3QgYmUgbGVzcyB0aGFuIHt7ZmllbGQucHJvcHMuZmllbGRPcHRpb25zLnZhbGlkYXRpb24ubWF4fX0uPC9kaXY+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJtaW5cIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5WYWx1ZSBtdXN0IGJlIGxhcmdlciB0aGFuIHt7ZmllbGQucHJvcHMuZmllbGRPcHRpb25zLnZhbGlkYXRpb24ubWlufX0uPC9kaXY+XFxuJyArXG4gICAgJyAgPC9kaXY+XFxuJyArXG4gICAgJzwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICcnKTtcbn1dKTtcbiIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5hcHBmb3JtLmRpcmVjdGl2ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLmFwcGZvcm0uZGlyZWN0aXZlcycsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvYXBwZm9ybS1maWVsZC50cGwuaHRtbCcsXG4gICAgJzwhLS1cXG4nICtcbiAgICAnIENPTkZJREVOVElBTFxcbicgK1xuICAgICcgQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXFxuJyArXG4gICAgJyBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXFxuJyArXG4gICAgJy0tPlxcbicgK1xuICAgICc8bmctZm9ybSBuYW1lPVwiZmllbGRGb3JtXCIgbmctc3VibWl0PVwiY3RybC5zdWJtaXQoKVwiPlxcbicgK1xuICAgICcgIDxkaXYgbmctc3dpdGNoPVwiY3RybC5maWVsZC5wcm9wcy50eXBlXCI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPGRpdiBuZy1zd2l0Y2gtd2hlbj1cIm51bWJlclwiPlxcbicgK1xuICAgICcgICAgICA8YXBwZm9ybS1maWVsZC1udW1iZXIgbW9kZWw9XCJjdHJsLm1vZGVsXCIgZmllbGQ9XCJjdHJsLmZpZWxkXCI+PC9hcHBmb3JtLWZpZWxkLW51bWJlcj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxkaXYgbmctc3dpdGNoLXdoZW49XCJkYXRlVGltZVwiIG5nLXN3aXRjaD1cImN0cmwuZmllbGQucHJvcHMuZmllbGRPcHRpb25zLmRlZmluaXRpb24uZGF0ZXRpbWVVbml0XCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctc3dpdGNoLXdoZW49XCJkYXRlXCI+XFxuJyArXG4gICAgJyAgICAgICAgPGFwcGZvcm0tZmllbGQtZGF0ZSBtb2RlbD1cImN0cmwubW9kZWxcIiBmaWVsZD1cImN0cmwuZmllbGRcIj48L2FwcGZvcm0tZmllbGQtZGF0ZT5cXG4nICtcbiAgICAnICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgICA8ZGl2IG5nLXN3aXRjaC13aGVuPVwiZGF0ZXRpbWVcIj5cXG4nICtcbiAgICAnICAgICAgICAgPGFwcGZvcm0tZmllbGQtZGF0ZXRpbWUgbW9kZWw9XCJjdHJsLm1vZGVsXCIgZmllbGQ9XCJjdHJsLmZpZWxkXCI+PC9hcHBmb3JtLWZpZWxkLWRhdGV0aW1lPlxcbicgK1xuICAgICcgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgICA8ZGl2IG5nLXN3aXRjaC13aGVuPVwidGltZVwiPlxcbicgK1xuICAgICcgICAgICAgICA8YXBwZm9ybS1maWVsZC10aW1lIG1vZGVsPVwiY3RybC5tb2RlbFwiIGZpZWxkPVwiY3RybC5maWVsZFwiPjwvYXBwZm9ybS1maWVsZC10aW1lPlxcbicgK1xuICAgICcgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgICA8ZGl2IG5nLXN3aXRjaC1kZWZhdWx0PlxcbicgK1xuICAgICcgICAgICAgICB7e2N0cmwuZmllbGQucHJvcHMuZmllbGRPcHRpb25zLmRlZmluaXRpb24uZGF0ZXRpbWVVbml0fX1cXG4nICtcbiAgICAnICAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPGRpdiBuZy1zd2l0Y2gtd2hlbj1cImxvY2F0aW9uXCI+XFxuJyArXG4gICAgJyAgICAgIDxhcHBmb3JtLWZpZWxkLWxvY2F0aW9uIG1vZGVsPVwiY3RybC5tb2RlbFwiIGZpZWxkPVwiY3RybC5maWVsZFwiPjwvYXBwZm9ybS1maWVsZC1sb2NhdGlvbj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxkaXYgbmctc3dpdGNoLXdoZW49XCJzaWduYXR1cmVcIiBmbGV4IGNsYXNzPVwiYXBwZm9ybS1zaWduYXR1cmVcIj5cXG4nICtcbiAgICAnICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCI+XFxuJyArXG4gICAgJyAgICAgICAgPHAgY2xhc3M9XCJtZC1jYXB0aW9uXCI+e3tjdHJsLmZpZWxkLnByb3BzLm5hbWV9fTwvcD5cXG4nICtcbiAgICAnICAgICAgICA8c2lnbmF0dXJlLWZvcm0gdmFsdWU9XCJjdHJsLm1vZGVsLnZhbHVlXCI+PC9zaWduYXR1cmUtZm9ybT5cXG4nICtcbiAgICAnICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLXN3aXRjaC13aGVuPVwicGhvdG9cIiBmbGV4IGNsYXNzPVwiYXBwZm9ybS1waG90b1wiPlxcbicgK1xuICAgICcgICAgICA8YXBwZm9ybS1maWVsZC1waG90byBtb2RlbD1cImN0cmwubW9kZWxcIiBmaWVsZD1cImN0cmwuZmllbGRcIj48L2FwcGZvcm0tZmllbGQtcGhvdG8+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLXN3aXRjaC1kZWZhdWx0IGZsZXg+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiPlxcbicgK1xuICAgICcgICAgICAgIDxsYWJlbD57e2N0cmwuZmllbGQucHJvcHMudHlwZX19PC9sYWJlbD5cXG4nICtcbiAgICAnICAgICAgICA8aW5wdXRcXG4nICtcbiAgICAnICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcXG4nICtcbiAgICAnICAgICAgICAgIG5hbWU9XCJpbnB1dE5hbWVcIlxcbicgK1xuICAgICcgICAgICAgICAgbmctbW9kZWw9XCJjdHJsLm1vZGVsLnZhbHVlXCJcXG4nICtcbiAgICAnICAgICAgICAgIG5nLXJlcXVpcmVkPVwiY3RybC5maWVsZC5wcm9wcy5yZXF1aXJlZFwiXFxuJyArXG4gICAgJyAgICAgICAgICBuZy1jbGFzcz1cImN0cmwuZmllbGQucHJvcHMudHlwZVwiXFxuJyArXG4gICAgJyAgICAgICAgPjwvaW5wdXQ+XFxuJyArXG4gICAgJyAgICAgICAgPGRpdiBuZy1tZXNzYWdlcz1cImZpZWxkRm9ybS5pbnB1dE5hbWUuJGVycm9yXCIgbmctc2hvdz1cImZpZWxkRm9ybS5pbnB1dE5hbWUuJGRpcnR5IHx8IGZpZWxkRm9ybS4kc3VibWl0dGVkXCI+XFxuJyArXG4gICAgJyAgICAgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiIG5nLXNob3c9XCJjdHJsLmZpZWxkLnByb3BzLmhlbHBUZXh0XCI+e3tjdHJsLmZpZWxkLnByb3BzLmhlbHBUZXh0fX08L2Rpdj5cXG4nICtcbiAgICAnICAgICAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCIgbmctaGlkZT1cImN0cmwuZmllbGQucHJvcHMuaGVscFRleHRcIj5BIHt7Y3RybC5maWVsZC5wcm9wcy5uYW1lfX0gaXMgcmVxdWlyZWQuPC9kaXY+XFxuJyArXG4gICAgJyAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDwvZGl2PlxcbicgK1xuICAgICc8L25nLWZvcm0+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLmFwcGZvcm0uZGlyZWN0aXZlcycpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0uYXBwZm9ybS5kaXJlY3RpdmVzJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS9hcHBmb3JtLXN1Ym1pc3Npb24udHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxtZC1zdWJoZWFkZXI+e3tjdHJsLmZvcm0ucHJvcHMubmFtZX19PC9tZC1zdWJoZWFkZXI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8bWQtbGlzdCBjbGFzcz1cImFwcGZvcm0tdmlld1wiPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8bWQtbGlzdC1pdGVtIG5nLWlmPVwiISBjdHJsLmZpZWxkc1wiIGNsYXNzPVwibG9hZGluZ1wiPlxcbicgK1xuICAgICcgICAgTG9hZGluZyBhcHBGb3JtIHN1Ym1pc3Npb24uLi5cXG4nICtcbiAgICAnICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPGRpdiBuZy1yZXBlYXQ9XCJmaWVsZCBpbiBjdHJsLmZpZWxkc1wiPlxcbicgK1xuICAgICcgICAgPG5nLXN3aXRjaCBvbj1cImZpZWxkLnByb3BzLnR5cGVcIj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBuZy1zd2l0Y2gtd2hlbj1cInNpZ25hdHVyZVwiPlxcbicgK1xuICAgICcgICAgICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmUgd2l0aC1pbWFnZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmdlc3R1cmU8L21kLWljb24+XFxuJyArXG4gICAgJyAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPGgzPlxcbicgK1xuICAgICcgICAgICAgICAgICAgIDxzaWduYXR1cmUgbmctaWY9XCJmaWVsZC52YWx1ZS5sb2NhbFVSSVwiIHZhbHVlPVwiZmllbGQudmFsdWUubG9jYWxVUklcIiBhbHQ9XCJTaWduYXR1cmVcIj48L3NpZ25hdHVyZT5cXG4nICtcbiAgICAnICAgICAgICAgICAgICA8c2lnbmF0dXJlIG5nLWlmPVwiIWZpZWxkLnZhbHVlLmxvY2FsVVJJXCIgdmFsdWU9XCJmaWVsZC52YWx1ZS5pbWdIZWFkZXIgKyBmaWVsZC52YWx1ZS5kYXRhXCIgYWx0PVwiU2lnbmF0dXJlXCI+PC9zaWduYXR1cmU+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDwvaDM+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDxwPnt7ZmllbGQucHJvcHMubmFtZX19PC9wPlxcbicgK1xuICAgICcgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgICAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJyAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJyAgICAgIDwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgICAgPGRpdiBuZy1zd2l0Y2gtd2hlbj1cImxvY2F0aW9uXCI+XFxuJyArXG4gICAgJyAgICAgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTMtbGluZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPnBsYWNlPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDxoMz57e2ZpZWxkLnZhbHVlLmxhdH19Tiwge3tmaWVsZC52YWx1ZS5sb25nfX1XPC9oMz5cXG4nICtcbiAgICAnICAgICAgICAgICAgPHA+e3tmaWVsZC5wcm9wcy5uYW1lfX08L3A+XFxuJyArXG4gICAgJyAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgICAgICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnICAgICAgPC9kaXY+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLXN3aXRjaC13aGVuPVwibnVtYmVyXCI+XFxuJyArXG4gICAgJyAgICAgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTItbGluZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmZpbHRlcl80PC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDxoMz57e2ZpZWxkLnZhbHVlfX08L2gzPlxcbicgK1xuICAgICcgICAgICAgICAgICA8cD57e2ZpZWxkLnByb3BzLm5hbWV9fTwvcD5cXG4nICtcbiAgICAnICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICAgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICcgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctc3dpdGNoLXdoZW49XCJwaG90b1wiPlxcbicgK1xuICAgICcgICAgICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmUgd2l0aC1pbWFnZVwiPlxcbicgK1xuICAgICcgICAgICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmNhbWVyYTwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlxcbicgK1xuICAgICcgICAgICAgICAgICA8aDM+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgPGltZyBuZy1pZj1cImZpZWxkLnZhbHVlLmxvY2FsVVJJXCIgbmctc3JjPVwie3tmaWVsZC52YWx1ZS5sb2NhbFVSSX19XCIgYWx0PVwicGhvdG9cIj48L2ltZz5cXG4nICtcbiAgICAnICAgICAgICAgICAgICA8aW1nIG5nLWlmPVwiIWZpZWxkLnZhbHVlLmxvY2FsVVJJXCIgbmctc3JjPVwie3tmaWVsZC52YWx1ZS5pbWdIZWFkZXIgKyBmaWVsZC52YWx1ZS5kYXRhfX1cIiBhbHQ9XCJwaG90b1wiPjwvaW1nPlxcbicgK1xuICAgICcgICAgICAgICAgICA8L2gzPlxcbicgK1xuICAgICcgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgICAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJyAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJyAgICAgIDwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgICAgPGRpdiBuZy1zd2l0Y2gtZGVmYXVsdD5cXG4nICtcbiAgICAnICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lXCI+XFxuJyArXG4gICAgJyAgICAgICAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+dGV4dF9mb3JtYXQ8L21kLWljb24+XFxuJyArXG4gICAgJyAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgPGgzPnt7ZmllbGQudmFsdWV9fTwvaDM+XFxuJyArXG4gICAgJyAgICAgICAgICAgIDxwPnt7ZmllbGQucHJvcHMubmFtZX19PC9wPlxcbicgK1xuICAgICcgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgICAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJyAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJyAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgPC9uZy1zd2l0Y2g+XFxuJyArXG4gICAgJyAgPC9kaXY+XFxuJyArXG4gICAgJzwvbWQtbGlzdD5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0uYXBwZm9ybS5kaXJlY3RpdmVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5hcHBmb3JtLmRpcmVjdGl2ZXMnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL2FwcGZvcm0udHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnPGRpdiBjbGFzcz1cImFwcC1mb3JtXCIgbGF5b3V0LXBhZGRpbmcgPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGZvcm0gbmFtZT1cIndvcmtvcmRlckZvcm1cIiBub3ZhbGlkYXRlPlxcbicgK1xuICAgICcgIDxkaXYgbmctcmVwZWF0PVwiZmllbGQgaW4gY3RybC5maWVsZHNcIj5cXG4nICtcbiAgICAnICAgIDxhcHBmb3JtLWZpZWxkIGZpZWxkPVwiZmllbGRcIiBtb2RlbD1cImN0cmwubW9kZWxbZmllbGQucHJvcHMuZmllbGRDb2RlIHx8IGZpZWxkLnByb3BzLl9pZF1cIj48L2FwcGZvcm0tZmllbGQ+XFxuJyArXG4gICAgJyAgPC9kaXY+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDxkaXYgY2xhc3M9XCJ3b3JrZmxvdy1hY3Rpb25zIG1kLXBhZGRpbmcgbWQtd2hpdGVmcmFtZS16NFwiPlxcbicgK1xuICAgICcgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXByaW1hcnkgbWQtaHVlLTFcIiBuZy1jbGljaz1cImN0cmwuYmFjaygkZXZlbnQpXCI+QmFjazwvbWQtYnV0dG9uPlxcbicgK1xuICAgICcgICAgPG1kLWJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbmctY2xpY2s9XCJjdHJsLmRvbmUoJGV2ZW50LCB3b3Jrb3JkZXJGb3JtLiR2YWxpZClcIiBjbGFzcz1cIm1kLXByaW1hcnlcIj5Db250aW51ZTwvbWQtYnV0dG9uPlxcbicgK1xuICAgICcgIDwvZGl2PjwhLS0gd29ya2Zsb3ctYWN0aW9ucy0tPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPC9mb3JtPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPC9kaXY+PCEtLSBhcHAtZm9ybSAtLT5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCJyZXF1aXJlKCcuL2FwcGZvcm0tZmllbGQtZGF0ZS50cGwuaHRtbC5qcycpO1xucmVxdWlyZSgnLi9hcHBmb3JtLWZpZWxkLWRhdGV0aW1lLnRwbC5odG1sLmpzJyk7XG5yZXF1aXJlKCcuL2FwcGZvcm0tZmllbGQtbG9jYXRpb24udHBsLmh0bWwuanMnKTtcbnJlcXVpcmUoJy4vYXBwZm9ybS1maWVsZC1udW1iZXIudHBsLmh0bWwuanMnKTtcbnJlcXVpcmUoJy4vYXBwZm9ybS1maWVsZC1waG90by50cGwuaHRtbC5qcycpO1xucmVxdWlyZSgnLi9hcHBmb3JtLWZpZWxkLXRpbWUudHBsLmh0bWwuanMnKTtcbnJlcXVpcmUoJy4vYXBwZm9ybS1maWVsZC50cGwuaHRtbC5qcycpO1xucmVxdWlyZSgnLi9hcHBmb3JtLXN1Ym1pc3Npb24udHBsLmh0bWwuanMnKTtcbnJlcXVpcmUoJy4vYXBwZm9ybS50cGwuaHRtbC5qcycpO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS5hcHBmb3JtJztcblxuYW5ndWxhci5tb2R1bGUoJ3dmbS5hcHBmb3JtJywgW1xuICAnd2ZtLmNvcmUubWVkaWF0b3InXG4sIHJlcXVpcmUoJy4vZGlyZWN0aXZlJylcbl0pXG5cbi5ydW4oZnVuY3Rpb24obWVkaWF0b3IpIHtcbiAgcmVxdWlyZSgnLi4vYXBwZm9ybS1tZWRpYXRvcicpKG1lZGlhdG9yKTtcbn0pO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0uYXBwZm9ybS5kaXJlY3RpdmVzJywgW1xuICAnd2ZtLmNvcmUubWVkaWF0b3InLFxuICByZXF1aXJlKCcuL3NlcnZpY2UnKSxcbiAgcmVxdWlyZSgnZmgtd2ZtLXNpZ25hdHVyZScpXG5dKTtcbm1vZHVsZS5leHBvcnRzID0gJ3dmbS5hcHBmb3JtLmRpcmVjdGl2ZXMnO1xuXG52YXIgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xucmVxdWlyZSgnLi4vLi4vZGlzdCcpO1xuXG5uZ01vZHVsZS5ydW4oZnVuY3Rpb24oYXBwZm9ybUNsaWVudCkge1xuICBhcHBmb3JtQ2xpZW50LmluaXQoKTtcbn0pXG5cbm5nTW9kdWxlLmRpcmVjdGl2ZSgnYXBwZm9ybVN1Ym1pc3Npb24nLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgJHEsIGFwcGZvcm1DbGllbnQpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnXG4gICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL2FwcGZvcm0tc3VibWlzc2lvbi50cGwuaHRtbCcpXG4gICwgc2NvcGU6IHtcbiAgICAgIHN1Ym1pc3Npb25Mb2NhbElkOiAnPXN1Ym1pc3Npb25Mb2NhbElkJ1xuICAgICwgc3VibWlzc2lvbklkOiAnPXN1Ym1pc3Npb25JZCdcbiAgICAsIHN1Ym1pc3Npb246ICc9c3VibWlzc2lvbidcbiAgICB9XG4gICwgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgc3VibWlzc2lvblByb21pc2U7XG4gICAgICBpZiAoJHNjb3BlLnN1Ym1pc3Npb24pIHtcbiAgICAgICAgc3VibWlzc2lvblByb21pc2UgPSAkcS53aGVuKCRzY29wZS5zdWJtaXNzaW9uKTtcbiAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLnN1Ym1pc3Npb25JZCkge1xuICAgICAgICBzdWJtaXNzaW9uUHJvbWlzZSA9IGFwcGZvcm1DbGllbnQuZ2V0U3VibWlzc2lvbigkc2NvcGUuc3VibWlzc2lvbklkKTtcbiAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLnN1Ym1pc3Npb25Mb2NhbElkKSB7XG4gICAgICAgIHN1Ym1pc3Npb25Qcm9taXNlID0gYXBwZm9ybUNsaWVudC5nZXRTdWJtaXNzaW9uTG9jYWwoJHNjb3BlLnN1Ym1pc3Npb25Mb2NhbElkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2FwcGZvcm1TdWJtaXNzaW9uIGNhbGxlZCB3aXRoIG5vIHN1Ym1pc3Npb24nKTtcbiAgICAgIH1cbiAgICAgIHN1Ym1pc3Npb25Qcm9taXNlLnRoZW4oZnVuY3Rpb24oc3VibWlzc2lvbikge1xuICAgICAgICB2YXIgZm9ybVByb21pc2UgPSBzdWJtaXNzaW9uLmZvcm0gPyAkcS53aGVuKHN1Ym1pc3Npb24uZm9ybSkgOiBhcHBmb3JtQ2xpZW50LmdldEZvcm0oc3VibWlzc2lvbi5wcm9wcy5mb3JtSWQpO1xuICAgICAgICByZXR1cm4gZm9ybVByb21pc2UudGhlbihmdW5jdGlvbihmb3JtKSB7XG4gICAgICAgICAgc2VsZi5mb3JtID0gZm9ybTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFwcGZvcm1DbGllbnQuZ2V0RmllbGRzKHN1Ym1pc3Npb24pO1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGZpZWxkcykge1xuICAgICAgICBzZWxmLmZpZWxkcyA9IGZpZWxkcztcbiAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfVxuICAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gIH07XG59KTtcblxubmdNb2R1bGUuZGlyZWN0aXZlKCdhcHBmb3JtJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUsICRxLCBtZWRpYXRvciwgYXBwZm9ybUNsaWVudCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRSdcbiAgLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvYXBwZm9ybS50cGwuaHRtbCcpXG4gICwgc2NvcGU6IHtcbiAgICAgIGZvcm06ICc9JyxcbiAgICAgIGZvcm1JZDogJz0nXG4gICAgfVxuICAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGZvcm07XG4gICAgdmFyIGZvcm1Qcm9taXNlID0gJHNjb3BlLmZvcm0gPyAkcS53aGVuKCRzY29wZS5mb3JtKSA6IGFwcGZvcm1DbGllbnQuZ2V0Rm9ybSgkc2NvcGUuZm9ybUlkKTtcbiAgICBmb3JtUHJvbWlzZS50aGVuKGZ1bmN0aW9uKF9mb3JtKSB7XG4gICAgICBmb3JtID0gX2Zvcm07XG4gICAgICBzZWxmLmZpZWxkcyA9IGZvcm0uZmllbGRzO1xuICAgICAgc2VsZi5tb2RlbCA9IHt9O1xuICAgICAgXy5mb3JFYWNoKHNlbGYuZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICBzZWxmLm1vZGVsW2ZpZWxkLnByb3BzLmZpZWxkQ29kZSB8fCBmaWVsZC5wcm9wcy5faWRdID0ge307XG4gICAgICB9KTtcbiAgICB9KVxuICAgIHNlbGYuYmFjayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya2Zsb3c6c3RlcDpiYWNrJyk7XG4gICAgfVxuICAgIHNlbGYuZG9uZSA9IGZ1bmN0aW9uKGV2ZW50LCBpc1ZhbGlkKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ3BhcmVudEZvcm1TdWJtaXR0ZWQnKTtcbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCcsIGV2ZW50KVxuICAgICAgICB2YXIgZmlyc3RJbnZhbGlkID0gJGVsZW1lbnRbMF0ucXVlcnlTZWxlY3RvcignaW5wdXQubmctaW52YWxpZCcpO1xuICAgICAgICAvLyBpZiB3ZSBmaW5kIG9uZSwgc2V0IGZvY3VzXG4gICAgICAgIGlmIChmaXJzdEludmFsaWQpIHtcbiAgICAgICAgICBmaXJzdEludmFsaWQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHN1Ym1pc3Npb25GaWVsZHMgPSBbXTtcbiAgICAgICAgXy5mb3JFYWNoKHNlbGYuZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHNlbGYubW9kZWxbZmllbGQucHJvcHMuZmllbGRDb2RlIHx8IGZpZWxkLnByb3BzLl9pZF0udmFsdWU7XG4gICAgICAgICAgc3VibWlzc2lvbkZpZWxkcy5wdXNoKHtcbiAgICAgICAgICAgIGZpZWxkSWQ6IGZpZWxkLnByb3BzLl9pZCxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICBhcHBmb3JtQ2xpZW50LmNyZWF0ZVN1Ym1pc3Npb24oZm9ybSwgc3VibWlzc2lvbkZpZWxkcylcbiAgICAgICAgLnRoZW4oYXBwZm9ybUNsaWVudC5zdWJtaXRTdWJtaXNzaW9uKVxuICAgICAgICAudGhlbihhcHBmb3JtQ2xpZW50LmNvbXBvc2VTdWJtaXNzaW9uUmVzdWx0KVxuICAgICAgICAudGhlbihmdW5jdGlvbihzdWJtaXNzaW9uUmVzdWx0KSB7XG4gICAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOndvcmtmbG93OnN0ZXA6ZG9uZScsIHN1Ym1pc3Npb25SZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3N1Ym1pc3Npb25GaWVsZHMnLCBzdWJtaXNzaW9uRmllbGRzKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuICB9XG4gICwgY29udHJvbGxlckFzOiAnY3RybCdcbiAgfTtcbn0pO1xuXG5uZ01vZHVsZS5kaXJlY3RpdmUoJ2FwcGZvcm1GaWVsZCcsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCAkdGltZW91dCwgbWVkaWF0b3IpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnXG4gICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL2FwcGZvcm0tZmllbGQudHBsLmh0bWwnKVxuICAsIHNjb3BlOiB7XG4gICAgICBmaWVsZDogJz0nLFxuICAgICAgbW9kZWw6ICc9J1xuICAgIH1cbiAgLCBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XG4gICAgICB2YXIgcGFyZW50Rm9ybSA9IGVsZW1lbnQucGFyZW50KCk7XG4gICAgICB3aGlsZSAocGFyZW50Rm9ybSAmJiBwYXJlbnRGb3JtLnByb3AoJ3RhZ05hbWUnKSAhPT0gJ0ZPUk0nKSB7XG4gICAgICAgIHBhcmVudEZvcm0gPSBwYXJlbnRGb3JtLnBhcmVudCgpO1xuICAgICAgfTtcbiAgICAgIGlmIChwYXJlbnRGb3JtKSB7XG4gICAgICAgIHZhciBmb3JtQ29udHJvbGxlciA9IGVsZW1lbnQuZmluZCgnbmctZm9ybScpLmNvbnRyb2xsZXIoJ2Zvcm0nKTtcbiAgICAgICAgc2NvcGUuJG9uKCdwYXJlbnRGb3JtU3VibWl0dGVkJyxmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIGN0cmwuc3VibWl0KGVsZW1lbnQpO1xuICAgICAgICAgIGZvcm1Db250cm9sbGVyLiRzZXRTdWJtaXR0ZWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cbiAgLCBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5maWVsZCA9ICRzY29wZS5maWVsZDtcbiAgICBzZWxmLm1vZGVsID0ge307XG4gICAgaWYgKCRzY29wZS5tb2RlbCAmJiAkc2NvcGUubW9kZWwudmFsdWUpIHtcbiAgICAgIHNlbGYubW9kZWwgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLm1vZGVsKTtcbiAgICB9IGVsc2UgaWYgKHNlbGYuZmllbGQucHJvcHMuZmllbGRPcHRpb25zLmRlZmluaXRpb24gJiYgc2VsZi5maWVsZC5wcm9wcy5maWVsZE9wdGlvbnMuZGVmaW5pdGlvbi5kZWZhdWx0VmFsdWUpIHtcbiAgICAgIHNlbGYubW9kZWwudmFsdWUgPSBzZWxmLmZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy5kZWZpbml0aW9uLmRlZmF1bHRWYWx1ZTtcbiAgICB9O1xuICAgIHNlbGYuc3VibWl0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuXG4gICAgICBpZiAoc2VsZi5maWVsZC5wcm9wcy50eXBlID09PSAnbG9jYXRpb24nKSB7XG4gICAgICAgIHZhciBpbnB1dHMgPSBlbGVtZW50WzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xuICAgICAgICBzZWxmLm1vZGVsLnZhbHVlID0ge1xuICAgICAgICAgIGxhdDogaW5wdXRzWzBdLnZhbHVlLFxuICAgICAgICAgIGxvbmc6IGlucHV0c1sxXS52YWx1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAkc2NvcGUubW9kZWwudmFsdWUgPSBzZWxmLm1vZGVsLnZhbHVlO1xuICAgIH1cbiAgfVxuICAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gIH07XG59KTtcblxubmdNb2R1bGUuZGlyZWN0aXZlKCdhcHBmb3JtRmllbGRMb2NhdGlvbicsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCAkdGltZW91dCwgbWVkaWF0b3IpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnXG4gICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL2FwcGZvcm0tZmllbGQtbG9jYXRpb24udHBsLmh0bWwnKVxuICAsIHNjb3BlOiB7XG4gICAgICBmaWVsZDogJz0nXG4gICAgLCBtb2RlbDogJz0nXG4gICAgfVxuICAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxmLmZpZWxkID0gJHNjb3BlLmZpZWxkO1xuICAgIHNlbGYubW9kZWwgPSAkc2NvcGUubW9kZWwgPyBhbmd1bGFyLmNvcHkoJHNjb3BlLm1vZGVsKSA6IHt9O1xuICAgIHNlbGYubW9kZWwudmFsdWUgPSBzZWxmLm1vZGVsLnZhbHVlIHx8IHt9O1xuICAgIHNlbGYuaXNWYWxpZCA9IGZ1bmN0aW9uKGZvcm0sIGVsZW1lbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3JtJywgZm9ybSk7XG4gICAgICBjb25zb2xlLmxvZygnZWxlbWVudCcsIGVsZW1lbnQpO1xuICAgIH1cbiAgICBzZWxmLnNldExvY2F0aW9uID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKHBvcykge1xuICAgICAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYubW9kZWwudmFsdWUubGF0ID0gcGFyc2VGbG9hdChwb3MuY29vcmRzLmxhdGl0dWRlKTtcbiAgICAgICAgICBzZWxmLm1vZGVsLnZhbHVlLmxvbmcgPSBwYXJzZUZsb2F0KHBvcy5jb29yZHMubG9uZ2l0dWRlKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygncG9zaXRpb24gc2V0Jywgc2VsZi5tb2RlbC52YWx1ZSlcbiAgICAgICAgfSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgYWxlcnQoJ1VuYWJsZSB0byBnZXQgY3VycmVudCBwb3NpdGlvbicpO1xuICAgICAgICBzZWxmLm1vZGVsLnZhbHVlLmxhdCA9IC0xO1xuICAgICAgICBzZWxmLm1vZGVsLnZhbHVlLmxvbmcgPSAtMTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gIH07XG59KTtcblxubmdNb2R1bGUuZGlyZWN0aXZlKCdhcHBmb3JtRmllbGRQaG90bycsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCAkd2luZG93LCBtZWRpYXRvciwgbW9iaWxlQ2FtZXJhLCBkZXNrdG9wQ2FtZXJhKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICAsIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS9hcHBmb3JtLWZpZWxkLXBob3RvLnRwbC5odG1sJylcbiAgLCBzY29wZToge1xuICAgICAgZmllbGQ6ICc9J1xuICAgICwgbW9kZWw6ICc9J1xuICAgIH1cbiAgLCBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5maWVsZCA9ICRzY29wZS5maWVsZDtcbiAgICBzZWxmLm1vZGVsID0gJHNjb3BlLm1vZGVsOyAvLyA/IGFuZ3VsYXIuY29weSgkc2NvcGUubW9kZWwpIDoge307XG4gICAgc2VsZi5pc1ZhbGlkID0gZnVuY3Rpb24oZm9ybSwgZWxlbWVudCkge1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm0nLCBmb3JtKTtcbiAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50JywgZWxlbWVudCk7XG4gICAgfVxuICAgIHNlbGYuY2FwdHVyZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKCR3aW5kb3cuY29yZG92YSkge1xuICAgICAgICBtb2JpbGVDYW1lcmEuY2FwdHVyZSgpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGNhcHR1cmUpIHtcbiAgICAgICAgICBzZWxmLm1vZGVsLnZhbHVlID0gY2FwdHVyZTtcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlc2t0b3BDYW1lcmEuY2FwdHVyZSgpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGFVcmwpIHtcbiAgICAgICAgICBzZWxmLm1vZGVsLnZhbHVlID0gZGF0YVVybDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICwgY29udHJvbGxlckFzOiAnY3RybCdcbiAgfTtcbn0pO1xuXG5uZ01vZHVsZS5kaXJlY3RpdmUoJ2FwcGZvcm1GaWVsZE51bWJlcicsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCAkd2luZG93LCAkZG9jdW1lbnQsICR0aW1lb3V0LCBtZWRpYXRvcikge1xuIHJldHVybiB7XG4gICByZXN0cmljdDogJ0UnXG4gLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvYXBwZm9ybS1maWVsZC1udW1iZXIudHBsLmh0bWwnKVxuICwgc2NvcGU6IHtcbiAgIGZpZWxkOiAnPScsXG4gICBtb2RlbDogJz0nLFxuIH1cbiAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgc2VsZi5maWVsZCA9ICRzY29wZS5maWVsZDtcbiAgIHNlbGYubW9kZWwgPSAkc2NvcGUubW9kZWw7XG4gICBpZiAoc2VsZi5maWVsZC5wcm9wcy5maWVsZE9wdGlvbnMuZGVmaW5pdGlvbiAmJiBzZWxmLmZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy5kZWZpbml0aW9uLmRlZmF1bHRWYWx1ZSkge1xuICAgICBzZWxmLm1vZGVsLnZhbHVlID0gcGFyc2VGbG9hdChzZWxmLmZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy5kZWZpbml0aW9uLmRlZmF1bHRWYWx1ZSk7XG4gICB9O1xuIH1cbiAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gfTtcbn0pO1xuXG5mdW5jdGlvbiBnZXREYXRlKGQpe1xuICByZXR1cm4gJ1lZWVktTU0tREQnLnJlcGxhY2UoJ1lZWVknLCBkLmdldEZ1bGxZZWFyKCkpLnJlcGxhY2UoJ01NJywgdHdvRGlnaShkLmdldE1vbnRoKCkrMSkpLnJlcGxhY2UoJ0REJywgdHdvRGlnaShkLmdldERhdGUoKSkpO1xufTtcblxuZnVuY3Rpb24gZ2V0VGltZShkKXtcbiAgcmV0dXJuICdISDptbScucmVwbGFjZSgnSEgnLCB0d29EaWdpKGQuZ2V0SG91cnMoKSkpLnJlcGxhY2UoJ21tJywgdHdvRGlnaShkLmdldE1pbnV0ZXMoKSkpO1xufTtcblxuZnVuY3Rpb24gdHdvRGlnaShudW0pe1xuICBpZiAobnVtIDwgMTApe1xuICAgIHJldHVybiAnMCcgKyBudW0udG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCk7XG4gIH1cbn1cblxubmdNb2R1bGUuZGlyZWN0aXZlKCdhcHBmb3JtRmllbGREYXRldGltZScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCAkd2luZG93LCAkZG9jdW1lbnQsICR0aW1lb3V0LCBtZWRpYXRvcikge1xuIHJldHVybiB7XG4gICByZXN0cmljdDogJ0UnXG4gLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvYXBwZm9ybS1maWVsZC1kYXRldGltZS50cGwuaHRtbCcpXG4gLCBzY29wZToge1xuICAgZmllbGQ6ICc9JyxcbiAgIG1vZGVsOiAnPScsXG4gfVxuICwgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG4gICB2YXIgc2VsZiA9IHRoaXM7XG4gICBzZWxmLmZpZWxkID0gJHNjb3BlLmZpZWxkO1xuICAgc2VsZi5tb2RlbCA9ICRzY29wZS5tb2RlbDtcbiAgIGlmIChzZWxmLmZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy5kZWZpbml0aW9uICYmIHNlbGYuZmllbGQucHJvcHMuZmllbGRPcHRpb25zLmRlZmluaXRpb24uZGVmYXVsdFZhbHVlKSB7XG4gICAgIHNlbGYubW9kZWwudmFsdWUgPSBuZXcgRGF0ZShzZWxmLmZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy5kZWZpbml0aW9uLmRlZmF1bHRWYWx1ZSk7XG4gICB9O1xuICAgc2VsZi51cGRhdGVNb2RlbCA9IGZ1bmN0aW9uKCkge1xuICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHNlbGYubW9kZWwuZGF0ZSk7XG4gICAgIHZhciB0aW1lID0gbmV3IERhdGUoc2VsZi5tb2RlbC50aW1lKTtcbiAgICAgJHNjb3BlLm1vZGVsLnZhbHVlID0gZ2V0RGF0ZShkYXRlKSArICcgJyArIGdldFRpbWUodGltZSk7XG4gICB9XG4gfVxuICwgY29udHJvbGxlckFzOiAnY3RybCdcbiB9O1xufSk7XG5cbm5nTW9kdWxlLmRpcmVjdGl2ZSgnYXBwZm9ybUZpZWxkRGF0ZScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCAkd2luZG93LCAkZG9jdW1lbnQsICR0aW1lb3V0LCBtZWRpYXRvcikge1xuIHJldHVybiB7XG4gICByZXN0cmljdDogJ0UnXG4gLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvYXBwZm9ybS1maWVsZC1kYXRlLnRwbC5odG1sJylcbiAsIHNjb3BlOiB7XG4gICBmaWVsZDogJz0nLFxuICAgbW9kZWw6ICc9JyxcbiB9XG4gLCBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgIHZhciBzZWxmID0gdGhpcztcbiAgIHNlbGYuZmllbGQgPSAkc2NvcGUuZmllbGQ7XG4gICBzZWxmLm1vZGVsID0gJHNjb3BlLm1vZGVsO1xuICAgaWYgKHNlbGYuZmllbGQucHJvcHMuZmllbGRPcHRpb25zLmRlZmluaXRpb24gJiYgc2VsZi5maWVsZC5wcm9wcy5maWVsZE9wdGlvbnMuZGVmaW5pdGlvbi5kZWZhdWx0VmFsdWUpIHtcbiAgICAgc2VsZi5tb2RlbC52YWx1ZSA9IG5ldyBEYXRlKHNlbGYuZmllbGQucHJvcHMuZmllbGRPcHRpb25zLmRlZmluaXRpb24uZGVmYXVsdFZhbHVlKTtcbiAgIH07XG4gICBzZWxmLnVwZGF0ZU1vZGVsID0gZnVuY3Rpb24oKSB7XG4gICAgIHZhciBkYXRlID0gbmV3IERhdGUoc2VsZi5tb2RlbC5kYXRlKTtcbiAgICAgJHNjb3BlLm1vZGVsLnZhbHVlID0gZ2V0RGF0ZShkYXRlKTtcbiAgIH1cbiB9XG4gLCBjb250cm9sbGVyQXM6ICdjdHJsJ1xuIH07XG59KTtcblxubmdNb2R1bGUuZGlyZWN0aXZlKCdhcHBmb3JtRmllbGRUaW1lJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUsICR3aW5kb3csICRkb2N1bWVudCwgJHRpbWVvdXQsIG1lZGlhdG9yKSB7XG4gcmV0dXJuIHtcbiAgIHJlc3RyaWN0OiAnRSdcbiAsIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS9hcHBmb3JtLWZpZWxkLXRpbWUudHBsLmh0bWwnKVxuICwgc2NvcGU6IHtcbiAgIGZpZWxkOiAnPScsXG4gICBtb2RlbDogJz0nLFxuIH1cbiAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgc2VsZi5maWVsZCA9ICRzY29wZS5maWVsZDtcbiAgIHNlbGYubW9kZWwgPSAkc2NvcGUubW9kZWw7XG4gICBpZiAoc2VsZi5maWVsZC5wcm9wcy5maWVsZE9wdGlvbnMuZGVmaW5pdGlvbiAmJiBzZWxmLmZpZWxkLnByb3BzLmZpZWxkT3B0aW9ucy5kZWZpbml0aW9uLmRlZmF1bHRWYWx1ZSkge1xuICAgICBzZWxmLm1vZGVsLnZhbHVlID0gbmV3IERhdGUoc2VsZi5maWVsZC5wcm9wcy5maWVsZE9wdGlvbnMuZGVmaW5pdGlvbi5kZWZhdWx0VmFsdWUpO1xuICAgfTtcbiAgIHNlbGYudXBkYXRlTW9kZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgdmFyIHRpbWUgPSBuZXcgRGF0ZShzZWxmLm1vZGVsLnRpbWUpO1xuICAgICAkc2NvcGUubW9kZWwudmFsdWUgPSBnZXRUaW1lKHRpbWUpO1xuICAgfVxuIH1cbiAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gfTtcbn0pO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuLi9hcHBmb3JtJylcblxubW9kdWxlLmV4cG9ydHMgPSAnd2ZtLmFwcGZvcm0uc2VydmljZSc7XG5cbmFuZ3VsYXIubW9kdWxlKCd3Zm0uYXBwZm9ybS5zZXJ2aWNlJywgW10pXG5cbi5zZXJ2aWNlKCdhcHBmb3JtQ2xpZW50JywgZnVuY3Rpb24oJHEpIHtcbiAgdmFyIHNlcnZpY2UgPSB7fTtcblxuICB2YXIgbWV0aG9kcyA9IFtcbiAgICAnaW5pdCcsXG4gICAgJ2xpc3QnLFxuICAgICdnZXRGb3JtJyxcbiAgICAnZ2V0U3VibWlzc2lvbkxvY2FsJyxcbiAgICAnZ2V0U3VibWlzc2lvbicsXG4gICAgJ2dldFN1Ym1pc3Npb25zJyxcbiAgICAnZ2V0RmllbGRzJyxcbiAgICAnY3JlYXRlU3VibWlzc2lvbicsXG4gICAgJ3N1Ym1pdFN1Ym1pc3Npb24nLFxuICAgICd1cGxvYWRTdWJtaXNzaW9uJyxcbiAgICAnY29tcG9zZVN1Ym1pc3Npb25SZXN1bHQnLFxuICAgICdzeW5jU3RlcFJlc3VsdCcsXG4gICAgJ3dhdGNoU3VibWlzc2lvbk1vZGVsJ1xuICBdO1xuXG4gIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICBzZXJ2aWNlW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkcS53aGVuKGNsaWVudFttZXRob2RdLmFwcGx5KGNsaWVudCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG59KTtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9hcHBmb3JtJylcblxuZnVuY3Rpb24gd3JhcHBlcihtZWRpYXRvcikge1xuICB2YXIgaW5pdFByb21pc2UgPSBjbGllbnQuaW5pdCgpO1xuICBtZWRpYXRvci5zdWJzY3JpYmUoJ3dmbTphcHBmb3JtOmluaXQnLCBmdW5jdGlvbigpIHtcbiAgICBpbml0UHJvbWlzZVxuICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgbWVkaWF0b3IucHVibGlzaCgnZG9uZTp3Zm06YXBwZm9ybTppbml0Jyk7XG4gICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ2Vycm9yOmFwcGZvcm06aW5pdCcsIGVycm9yKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgbWVkaWF0b3Iuc3Vic2NyaWJlKCdpbml0JywgZnVuY3Rpb24oKSB7XG4gICAgbWVkaWF0b3IucHVibGlzaCgncHJvbWlzZTppbml0JywgaW5pdFByb21pc2UpO1xuICB9KTtcblxuICBtZWRpYXRvci5zdWJzY3JpYmUoJ3dmbTphcHBmb3JtOmZvcm06bGlzdCcsIGZ1bmN0aW9uKCkge1xuICAgIGNsaWVudC5saXN0KClcbiAgICAudGhlbihmdW5jdGlvbihmb3Jtcykge1xuICAgICAgbWVkaWF0b3IucHVibGlzaCgnZG9uZTp3Zm06YXBwZm9ybTpmb3JtOmxpc3QnLCBmb3Jtcyk7XG4gICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ2Vycm9yOmFwcGZvcm06Zm9ybTpsaXN0JywgZXJyb3IpO1xuICAgIH0pO1xuICB9KTtcblxuICBtZWRpYXRvci5zdWJzY3JpYmUoJ3dmbTphcHBmb3JtOmZvcm06cmVhZCcsIGZ1bmN0aW9uKGZvcm1JZCkge1xuICAgIGNsaWVudC5nZXRGb3JtKGZvcm1JZClcbiAgICAudGhlbihmdW5jdGlvbihmb3JtKSB7XG4gICAgICBtZWRpYXRvci5wdWJsaXNoKCdkb25lOndmbTphcHBmb3JtOmZvcm06cmVhZDonICsgZm9ybUlkLCBmb3JtKTtcbiAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgbWVkaWF0b3IucHVibGlzaCgnZXJyb3I6YXBwZm9ybTpmb3JtOnJlYWQ6JyArIGZvcm1JZCwgZXJyb3IpO1xuICAgIH0pO1xuICB9KTtcblxuICBtZWRpYXRvci5zdWJzY3JpYmUoJ3dmbTphcHBmb3JtOnN1Ym1pc3Npb246bG9jYWw6cmVhZCcsIGZ1bmN0aW9uKHN1Ym1pc3Npb25Mb2NhbElkKSB7XG4gICAgY2xpZW50LmdldFN1Ym1pc3Npb25Mb2NhbChzdWJtaXNzaW9uTG9jYWxJZClcbiAgICAudGhlbihmdW5jdGlvbihzdWJtaXNzaW9uKSB7XG4gICAgICBtZWRpYXRvci5wdWJsaXNoKCdkb25lOndmbTphcHBmb3JtOnN1Ym1pc3Npb246bG9jYWw6cmVhZDonK3N1Ym1pc3Npb25Mb2NhbElkLCBzdWJtaXNzaW9uKTtcbiAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgbWVkaWF0b3IucHVibGlzaCgnZXJyb3I6YXBwZm9ybTpzdWJtaXNzaW9uOmxvY2FsOnJlYWQ6JytzdWJtaXNzaW9uTG9jYWxJZCwgZXJyb3IpO1xuICAgIH0pO1xuICB9KTtcblxuICBtZWRpYXRvci5zdWJzY3JpYmUoJ3dmbTphcHBmb3JtOnN1Ym1pc3Npb246cmVtb3RlOnJlYWQnLCBmdW5jdGlvbihzdWJtaXNzaW9uSWQpIHtcbiAgICBjbGllbnQuZ2V0U3VibWlzc2lvbihzdWJtaXNzaW9uSWQpXG4gICAgLnRoZW4oZnVuY3Rpb24oc3VibWlzc2lvbikge1xuICAgICAgbWVkaWF0b3IucHVibGlzaCgnZG9uZTp3Zm06YXBwZm9ybTpzdWJtaXNzaW9uOnJlbW90ZTpyZWFkOicrc3VibWlzc2lvbklkLCBzdWJtaXNzaW9uKTtcbiAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgbWVkaWF0b3IucHVibGlzaCgnZXJyb3I6YXBwZm9ybTpzdWJtaXNzaW9uOnJlbW90ZTpyZWFkOicrc3VibWlzc2lvbklkLCBlcnJvcik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIG1lZGlhdG9yLnN1YnNjcmliZSgnd2ZtOmFwcGZvcm06c3VibWlzc2lvbjpsaXN0OnJlbW90ZTpyZWFkJywgZnVuY3Rpb24oc3VibWlzc2lvbklkcywgaWQpIHtcbiAgICBjbGllbnQuZ2V0U3VibWlzc2lvbnMoc3VibWlzc2lvbklkcylcbiAgICAudGhlbihmdW5jdGlvbihzdWJtaXNzaW9ucykge1xuICAgICAgbWVkaWF0b3IucHVibGlzaCgnZG9uZTp3Zm06YXBwZm9ybTpzdWJtaXNzaW9uOmxpc3Q6cmVtb3RlOnJlYWQ6JytpZCwgc3VibWlzc2lvbnMpO1xuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBtZWRpYXRvci5wdWJsaXNoKCdlcnJvcjphcHBmb3JtOnN1Ym1pc3Npb246bGlzdDpyZW1vdGU6cmVhZDonK2lkLCBlcnJvcik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIG1lZGlhdG9yLnN1YnNjcmliZSgnd2ZtOmFwcGZvcm06c3VibWlzc2lvbjpmaWVsZDpsaXN0JywgZnVuY3Rpb24oc3VibWlzc2lvbikge1xuICAgIGNsaWVudC5nZXRGaWVsZHMoc3VibWlzc2lvbilcbiAgICAudGhlbihmdW5jdGlvbihmaWVsZHMpIHtcbiAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ2RvbmU6d2ZtOmFwcGZvcm06c3VibWlzc2lvbjpmaWVsZDpsaXN0Oicrc3VibWlzc2lvbi5nZXRMb2NhbElkKCksIGZpZWxkcyk7XG4gICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ2Vycm9yOmFwcGZvcm06c3VibWlzc2lvbjpmaWVsZDpsaXN0Oicrc3VibWlzc2lvbi5nZXRMb2NhbElkKCksIGVycm9yKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgbWVkaWF0b3Iuc3Vic2NyaWJlKCd3Zm06YXBwZm9ybTpzdWJtaXNzaW9uOmNyZWF0ZScsIGZ1bmN0aW9uKGZvcm0sIHN1Ym1pc3Npb25GaWVsZHMsIHRzKSB7XG4gICAgY2xpZW50LmNyZWF0ZVN1Ym1pc3Npb24oZm9ybSwgc3VibWlzc2lvbkZpZWxkcylcbiAgICAudGhlbihmdW5jdGlvbihzdWJtaXNzaW9uKSB7XG4gICAgICBtZWRpYXRvci5wdWJsaXNoKCdkb25lOndmbTphcHBmb3JtOnN1Ym1pc3Npb246Y3JlYXRlOicgKyB0cywgc3VibWlzc2lvbik7XG4gICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ2Vycm9yOmFwcGZvcm06c3VibWlzc2lvbjpjcmVhdGU6JyArIHRzLCBlcnJvcik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIG1lZGlhdG9yLnN1YnNjcmliZSgnd2ZtOmFwcGZvcm06c3VibWlzc2lvbjpzdWJtaXQnLCBmdW5jdGlvbihzdWJtaXNzaW9uKSB7XG4gICAgY2xpZW50LnN1Ym1pdFN1Ym1pc3Npb24oc3VibWlzc2lvbilcbiAgICAudGhlbihmdW5jdGlvbihzdWJtaXNzaW9uKSB7XG4gICAgICBtZWRpYXRvci5wdWJsaXNoKCdkb25lOndmbTphcHBmb3JtOnN1Ym1pc3Npb246c3VibWl0OicgKyBzdWJtaXNzaW9uLmdldExvY2FsSWQoKSwgc3VibWlzc2lvbik7XG4gICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ2Vycm9yOmFwcGZvcm06c3VibWlzc2lvbjpzdWJtaXQ6JyArIHN1Ym1pc3Npb24uZ2V0TG9jYWxJZCgpLCBlcnJvcik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIG1lZGlhdG9yLnN1YnNjcmliZSgnd2ZtOmFwcGZvcm06c3VibWlzc2lvbjp1cGxvYWQnLCBmdW5jdGlvbihzdWJtaXNzaW9uKSB7XG4gICAgY2xpZW50LnVwbG9hZFN1Ym1pc3Npb24oc3VibWlzc2lvbilcbiAgICAudGhlbihmdW5jdGlvbihzdWJtaXNzaW9uSWQpIHtcbiAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ2RvbmU6d2ZtOmFwcGZvcm06c3VibWlzc2lvbjp1cGxvYWQ6JyArIHN1Ym1pc3Npb24ucHJvcHMuX2x1ZGlkLCBzdWJtaXNzaW9uSWQpO1xuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBtZWRpYXRvci5wdWJsaXNoKCdlcnJvcjphcHBmb3JtOnN1Ym1pc3Npb246dXBsb2FkOicgKyBzdWJtaXNzaW9uLnByb3BzLl9sdWRpZCwgZXJyb3IpO1xuICAgIH0pO1xuICB9KTtcblxuICBjbGllbnQuYWRkU3VibWlzc2lvbkNvbXBsZXRlTGlzdGVuZXIoZnVuY3Rpb24oc3VibWlzc2lvblJlc3VsdCwgbWV0YURhdGEpIHtcbiAgICBpZiAobWV0YURhdGEpIHtcbiAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgc3VibWlzc2lvblJlc3VsdDogc3VibWlzc2lvblJlc3VsdCxcbiAgICAgICAgbWV0YURhdGE6IG1ldGFEYXRhXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnbWV0YURhdGEnLCBtZXRhRGF0YSk7XG4gICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06YXBwZm9ybTpzdWJtaXNzaW9uOmNvbXBsZXRlJywgZXZlbnQpXG4gICAgfVxuICB9KVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB3cmFwcGVyO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBxID0gcmVxdWlyZSgncScpO1xudmFyIF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxudmFyIGNsaWVudCA9IHt9O1xudmFyIGluaXRQcm9taXNlO1xuXG5jbGllbnQuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoaW5pdFByb21pc2UpIHtcbiAgICByZXR1cm4gaW5pdFByb21pc2U7XG4gIH1cbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYubGlzdGVuZXJzID0gW107XG4gIGluaXRQcm9taXNlID0gZGVmZXJyZWQucHJvbWlzZTtcbiAgJGZoLm9uKCdmaGluaXQnLCBmdW5jdGlvbihlcnJvciwgaG9zdCkge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAkZmguZm9ybXMuaW5pdChmdW5jdGlvbihlcnJvcikge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoZXJyb3IpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGb3JtcyBpbml0aWFsaXplZC4nKTtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgJGZoLmZvcm1zLm9uKFwic3VibWlzc2lvbjpzdWJtaXR0ZWRcIiwgZnVuY3Rpb24oc3VibWlzc2lvbklkKSB7XG4gICAgdmFyIHN1Ym1pc3Npb24gPSB0aGlzO1xuICAgIHZhciBtZXRhRGF0YSA9IHN1Ym1pc3Npb24uZ2V0KCdtZXRhRGF0YScpO1xuICAgIGlmIChzZWxmLmxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgIHNlbGYuY29tcG9zZVN1Ym1pc3Npb25SZXN1bHQoc3VibWlzc2lvbikudGhlbihmdW5jdGlvbihzdWJtaXNzaW9uUmVzdWx0KSB7XG4gICAgICAgIHNlbGYubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgICAgICBsaXN0ZW5lcihzdWJtaXNzaW9uUmVzdWx0LCBtZXRhRGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGluaXRQcm9taXNlO1xufTtcblxuY2xpZW50LmFkZFN1Ym1pc3Npb25Db21wbGV0ZUxpc3RlbmVyID0gZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG59O1xuXG5jbGllbnQubGlzdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIGluaXRQcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgJGZoLmZvcm1zLmdldEZvcm1zKGZ1bmN0aW9uKGVycm9yLCBmb3Jtc01vZGVsKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZm9ybXMgPSBmb3Jtc01vZGVsLnByb3BzLmZvcm1zO1xuICAgICAgZGVmZXJyZWQucmVzb2x2ZShmb3Jtcyk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbmNsaWVudC5nZXRGb3JtID0gZnVuY3Rpb24oZm9ybUlkKSB7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgaW5pdFByb21pc2UudGhlbihmdW5jdGlvbigpIHtcbiAgICAkZmguZm9ybXMuZ2V0Rm9ybSh7Zm9ybUlkOiBmb3JtSWR9LCBmdW5jdGlvbiAoZXJyb3IsIGZvcm0pIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKGVycm9yKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRlZmVycmVkLnJlc29sdmUoZm9ybSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn1cblxuY2xpZW50LmdldFN1Ym1pc3Npb25Mb2NhbCA9IGZ1bmN0aW9uKHN1Ym1pc3Npb25Mb2NhbElkKSB7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgaW5pdFByb21pc2UudGhlbihmdW5jdGlvbigpIHtcbiAgICAkZmguZm9ybXMuZ2V0U3VibWlzc2lvbnMoZnVuY3Rpb24oZXJyb3IsIHN1Ym1pc3Npb25zKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzdWJtaXNzaW9ucy5nZXRTdWJtaXNzaW9uQnlNZXRhKHtfbHVkaWQ6IHN1Ym1pc3Npb25Mb2NhbElkfSwgZnVuY3Rpb24oZXJyb3IsIHN1Ym1pc3Npb24pIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHN1Ym1pc3Npb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn1cblxuY2xpZW50LmdldFN1Ym1pc3Npb24gPSBmdW5jdGlvbihzdWJtaXNzaW9uSWQpIHtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICBpbml0UHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICRmaC5mb3Jtcy5kb3dubG9hZFN1Ym1pc3Npb24oe3N1Ym1pc3Npb25JZDogc3VibWlzc2lvbklkfSwgZnVuY3Rpb24oZXJyb3IsIHN1Ym1pc3Npb24pIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKGVycm9yKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRlZmVycmVkLnJlc29sdmUoc3VibWlzc2lvbik7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn1cblxuY2xpZW50LmdldFN1Ym1pc3Npb25zID0gZnVuY3Rpb24oc3VibWlzc2lvbklkcykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBwcm9taXNlcyA9IHN1Ym1pc3Npb25JZHMubWFwKGZ1bmN0aW9uKHN1Ym1pc3Npb25JZCkge1xuICAgIHJldHVybiBpbml0UHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5nZXRTdWJtaXNzaW9uKHN1Ym1pc3Npb25JZCk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcS5hbGxTZXR0bGVkKHByb21pc2VzKTtcbn1cblxuY2xpZW50LmdldEZpZWxkcyA9IGZ1bmN0aW9uKHN1Ym1pc3Npb24pIHtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICBpbml0UHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuICAgIHN1Ym1pc3Npb24uZ2V0Rm9ybShmdW5jdGlvbihlcnJvciwgZm9ybSkge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGZpZWxkcyA9IGZvcm0uZmllbGRzO1xuICAgICAgdmFyIHFzID0gW107XG4gICAgICBfLmZvck93bihmaWVsZHMsIGZ1bmN0aW9uKGZpZWxkLCBrZXkpIHtcbiAgICAgICAgdmFyIF9kZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgICAgICAgcXMucHVzaChfZGVmZXJyZWQucHJvbWlzZSk7XG4gICAgICAgIHN1Ym1pc3Npb24uZ2V0SW5wdXRWYWx1ZUJ5RmllbGRJZChmaWVsZC5nZXRGaWVsZElkKCksIGZ1bmN0aW9uKGVycm9yLCBmaWVsZFZhbHVlcykge1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgX2RlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmllbGQudmFsdWUgPSBmaWVsZFZhbHVlc1swXTtcbiAgICAgICAgICBfZGVmZXJyZWQucmVzb2x2ZShmaWVsZFZhbHVlcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBxLmFsbChxcykudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShmaWVsZHMpO1xuICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn1cblxuLyoqXG4qIFRoZSBmaWVsZHMgcGFyYW1ldGVyIGlzIGFuIGFycmF5IG9mIHtmaWVsZElkOiA8Li4uPiwgdmFsdWU6IDwuLi4+fSBvYmplY3RzXG4qL1xuY2xpZW50LmNyZWF0ZVN1Ym1pc3Npb24gPSBmdW5jdGlvbihmb3JtLCBzdWJtaXNzaW9uRmllbGRzKSB7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgaW5pdFByb21pc2UudGhlbihmdW5jdGlvbigpIHtcbiAgICB2YXIgc3VibWlzc2lvbiA9IGZvcm0ubmV3U3VibWlzc2lvbigpO1xuICAgIHZhciBkcyA9IFtdO1xuICAgIF8uZm9yRWFjaChzdWJtaXNzaW9uRmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgdmFyIGQgPSBxLmRlZmVyKCk7XG4gICAgICBkcy5wdXNoKGQucHJvbWlzZSk7XG4gICAgICBzdWJtaXNzaW9uLmFkZElucHV0VmFsdWUoZmllbGQsIGZ1bmN0aW9uKGVycm9yLCByZXN1bHQpIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgZC5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGQucmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBxLmFsbChkcylcbiAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoc3VibWlzc2lvbik7XG4gICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoZXJyb3IpKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuY2xpZW50LnN1Ym1pdFN1Ym1pc3Npb24gPSBmdW5jdGlvbihzdWJtaXNzaW9uKSB7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgaW5pdFByb21pc2UudGhlbihmdW5jdGlvbigpIHtcbiAgICBzdWJtaXNzaW9uLnN1Ym1pdChmdW5jdGlvbihlcnJvciwgc3VibWl0UmVzcG9uc2UpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKGVycm9yKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH07XG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKHN1Ym1pc3Npb24pO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG5jbGllbnQudXBsb2FkU3VibWlzc2lvbiA9IGZ1bmN0aW9uKHN1Ym1pc3Npb24pIHtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICBpbml0UHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuICAgIHN1Ym1pc3Npb24udXBsb2FkKGZ1bmN0aW9uKGVycm9yLCB1cGxvYWRUYXNrKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9O1xuICAgICAgdXBsb2FkVGFzay5zdWJtaXNzaW9uTW9kZWwoZnVuY3Rpb24oZXJyb3IsIHN1Ym1pc3Npb25Nb2RlbCkge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKGVycm9yKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHN1Ym1pc3Npb25Nb2RlbCk7XG4gICAgICB9KVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG5jbGllbnQuY29tcG9zZVN1Ym1pc3Npb25SZXN1bHQgPSBmdW5jdGlvbihzdWJtaXNzaW9uKSB7XG4gIHZhciBzdWJtaXNzaW9uUmVzdWx0ID0ge1xuICAgICAgc3VibWlzc2lvbkxvY2FsSWQ6IHN1Ym1pc3Npb24ucHJvcHMuX2x1ZGlkXG4gICAgLCBmb3JtSWQ6IHN1Ym1pc3Npb24ucHJvcHMuZm9ybUlkXG4gICAgLCBzdGF0dXM6IHN1Ym1pc3Npb24ucHJvcHMuc3RhdHVzXG4gIH07XG4gIGlmIChzdWJtaXNzaW9uLnByb3BzLl9pZCkge1xuICAgIHN1Ym1pc3Npb25SZXN1bHQuc3VibWlzc2lvbklkID0gc3VibWlzc2lvbi5wcm9wcy5faWQ7XG4gIH1cbiAgcmV0dXJuIHEud2hlbihzdWJtaXNzaW9uUmVzdWx0KTtcbn07XG5cbmNsaWVudC5zeW5jU3RlcFJlc3VsdCA9IGZ1bmN0aW9uKHdvcmtvcmRlciwgc3RlcFJlc3VsdCkge1xuICAvLyBraWNrLW9mZiBhbiBhcHBmb3JtIHVwbG9hZCwgdXBkYXRlIHRoZSB3b3Jrb3JkZXIgd2hlbiBjb21wbGV0ZVxuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgcmV0dXJuIGluaXRQcm9taXNlXG4gICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc2VsZi5nZXRTdWJtaXNzaW9uTG9jYWwoc3RlcFJlc3VsdC5zdWJtaXNzaW9uLnN1Ym1pc3Npb25Mb2NhbElkKTtcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHN1Ym1pc3Npb24pIHtcbiAgICAgIHN1Ym1pc3Npb24uc2V0KCdtZXRhRGF0YScsIHtcbiAgICAgICAgd2ZtOiB7XG4gICAgICAgICAgd29ya29yZGVySWQ6IHdvcmtvcmRlci5pZCxcbiAgICAgICAgICBzdGVwOiBzdGVwUmVzdWx0LnN0ZXAsXG4gICAgICAgICAgdGltZXN0YW1wOiBzdGVwUmVzdWx0LnRpbWVzdGFtcFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdWJtaXNzaW9uO1xuICAgIH0pXG4gICAgLnRoZW4oc2VsZi51cGxvYWRTdWJtaXNzaW9uKVxuICAgIC50aGVuKGZ1bmN0aW9uKHN1Ym1pc3Npb25Nb2RlbCkge1xuICAgICAgc2VsZi53YXRjaFN1Ym1pc3Npb25Nb2RlbChzdWJtaXNzaW9uTW9kZWwpOyAvLyBuZWVkIHRoaXMgdG8gdHJpZ2dldCB0aGUgZ2xvYmFsIGV2ZW50XG4gICAgICByZXR1cm4gc3VibWlzc2lvbk1vZGVsO1xuICAgIH0pO1xufTtcblxuY2xpZW50LndhdGNoU3VibWlzc2lvbk1vZGVsID0gZnVuY3Rpb24oc3VibWlzc2lvbk1vZGVsKSB7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgc3VibWlzc2lvbk1vZGVsLm9uKCdzdWJtaXR0ZWQnLCBmdW5jdGlvbihzdWJtaXNzaW9uSWQpIHtcbiAgICAkZmguZm9ybXMuZG93bmxvYWRTdWJtaXNzaW9uKHtzdWJtaXNzaW9uSWQ6IHN1Ym1pc3Npb25JZH0sIGZ1bmN0aW9uKGVycm9yLCByZW1vdGVTdWJtaXNzaW9uKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfTtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUocmVtb3RlU3VibWlzc2lvbik7XG4gICAgfSk7XG4gIH0pO1xuICAvLyAgVE9ETzogRG8gd2UgbmVlZCBhIHRpbWVvdXQgaGVyZSB0byBjbGVhbnVwIHN1Ym1pc3Npb25Nb2RlbCBsaXN0ZW5lcnM/XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGllbnQ7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0uY2FtZXJhLmRpcmVjdGl2ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLmNhbWVyYS5kaXJlY3RpdmVzJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS9jYW1lcmEudHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnPGRpdiBjbGFzcz1cIndmbS1jYW1lcmFcIiBmbGV4PlxcbicgK1xuICAgICcgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJCYWNrXCIgbmctY2xpY2s9XCJjdHJsLmNhbmNlbCgpXCIgZmxleD5cXG4nICtcbiAgICAnICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5hcnJvd19iYWNrPC9tZC1pY29uPlxcbicgK1xuICAgICcgIDwvbWQtYnV0dG9uPlxcbicgK1xuICAgICcgIDx2aWRlbyAgbmctc2hvdz1cImN0cmwuY2FtZXJhT25cIiBhdXRvcGxheT48L3ZpZGVvPlxcbicgK1xuICAgICcgIDxjYW52YXMgbmctaGlkZT1cImN0cmwuY2FtZXJhT25cIj48L2NhbnZhcz5cXG4nICtcbiAgICAnICA8ZGl2IGNsYXNzPVwid2ZtLWNhbWVyYS1hY3Rpb25zXCIgc3R5bGU9XCJ6LWluZGV4OiAxMDAwXCI+XFxuJyArXG4gICAgJyAgICA8bWQtYnV0dG9uIG5nLXNob3c9XCJjdHJsLmNhbWVyYU9uXCIgY2xhc3M9XCJ3Zm0tY2FtZXJhLWJ0blwiIG5nLWNsaWNrPVwiY3RybC5zbmFwKClcIj48L21kLWJ1dHRvbj5cXG4nICtcbiAgICAnICAgIDxtZC1idXR0b24gbmctaGlkZT1cImN0cmwuY2FtZXJhT25cIiBjbGFzcz1cIndmbS1jYW1lcmEtY29uZmlybWF0aW9uLWJ0biBtZC13YXJuXCIgbmctY2xpY2s9XCJjdHJsLnN0YXJ0Q2FtZXJhKClcIj5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmNsb3NlPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgPC9tZC1idXR0b24+XFxuJyArXG4gICAgJyAgICA8bWQtYnV0dG9uIG5nLWhpZGU9XCJjdHJsLmNhbWVyYU9uXCIgY2xhc3M9XCJ3Zm0tY2FtZXJhLWNvbmZpcm1hdGlvbi1idG5cIiBuZy1jbGljaz1cImN0cmwuZG9uZSgpXCI+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5jaGVjazwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgIDwvbWQtYnV0dG9uPlxcbicgK1xuICAgICcgIDwvZGl2PlxcbicgK1xuICAgICc8L2Rpdj5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCJyZXF1aXJlKCcuL2NhbWVyYS50cGwuaHRtbC5qcycpO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS5jYW1lcmEnO1xuXG5hbmd1bGFyLm1vZHVsZSgnd2ZtLmNhbWVyYScsIFtcbiAgcmVxdWlyZSgnLi9kaXJlY3RpdmUnKVxuLCByZXF1aXJlKCcuL3NlcnZpY2UnKVxuXSk7XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5jYW1lcmEuZGlyZWN0aXZlcycsIFsnd2ZtLmNvcmUubWVkaWF0b3InXSk7XG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0uY2FtZXJhLmRpcmVjdGl2ZXMnO1xuXG5yZXF1aXJlKCcuLi8uLi9kaXN0Jyk7XG5cbm5nTW9kdWxlLmRpcmVjdGl2ZSgnY2FtZXJhJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUsIG1lZGlhdG9yLCAkd2luZG93LCAkdGltZW91dCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL2NhbWVyYS50cGwuaHRtbCcpLFxuICAgIHNjb3BlOiB7XG4gICAgICBtb2RlbDogJz0nLFxuICAgICAgYXV0b3N0YXJ0OiAnPSdcbiAgICB9LFxuICAgIGNvbXBpbGU6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LmF0dHIoJ2ZsZXgnLCB0cnVlKTtcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICBlbGVtZW50ID0gJGVsZW1lbnRbMF0sXG4gICAgICAgICAgY2FudmFzID0gZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJylbMF0sXG4gICAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLFxuICAgICAgICAgIHZpZGVvID0gZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndmlkZW8nKVswXSxcbiAgICAgICAgICBzdHJlYW0sIHdpZHRoLCBoZWlnaHQsIHpvb207XG5cbiAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICB2aWRlby5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuXG4gICAgICAgIHNlbGYuY2FtZXJhT24gPSBmYWxzZTtcbiAgICAgICAgaWYgKCRzY29wZS5hdXRvc3RhcnQpIHtcbiAgICAgICAgICBzZWxmLnN0YXJ0Q2FtZXJhKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnRleHQuc2NhbGUoLTEsIDEpO1xuXG4gICAgICBzZWxmLnNuYXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHN4ID0gKHZpZGVvLmNsaWVudFdpZHRoIC0gd2lkdGggKSAvIDI7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHZpZGVvLCBzeC96b29tLCAwLCB3aWR0aC96b29tLCBoZWlnaHQvem9vbSwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHNlbGYuc3RvcENhbWVyYSgpO1xuICAgICAgfTtcblxuICAgICAgc2VsZi5zdGFydENhbWVyYSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBUT0RPOiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9nZXR1c2VybWVkaWEtanNcbiAgICAgICAgdmFyIGdldFVzZXJNZWRpYSA9IG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgfHwgbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhXG4gICAgICAgIGdldFVzZXJNZWRpYS5jYWxsKG5hdmlnYXRvciwgeyAndmlkZW8nOiB0cnVlIH0sIGZ1bmN0aW9uKF9zdHJlYW0pIHtcbiAgICAgICAgICBzdHJlYW0gPSBfc3RyZWFtO1xuICAgICAgICAgIHZpZGVvLnNyYyA9ICR3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xuICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNjb3BlLm1vZGVsID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYuY2FtZXJhT24gPSB0cnVlO1xuICAgICAgICAgICAgdmFyIHZpZGVvV2lkdGg7XG4gICAgICAgICAgICB2aWRlby5vbmxvYWRzdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2aWRlb1dpZHRoID0gdmlkZW8uY2xpZW50V2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2aWRlby5vbmNhbnBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgem9vbSA9IHZpZGVvV2lkdGggLyB2aWRlby5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgICAgdmlkZW8uc3R5bGUubGVmdCA9IC0odmlkZW8uY2xpZW50V2lkdGggLSB3aWR0aCApIC8gMiArICdweCc7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ZpZGVvIGNhcHR1cmUgZXJyb3I6ICcsIGVycm9yLmNvZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2VsZi5zdG9wQ2FtZXJhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdLnN0b3AoKTtcbiAgICAgICAgc2VsZi5jYW1lcmFPbiA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBzZWxmLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLnN0b3BDYW1lcmEoKTtcbiAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOmNhbWVyYTpjYW5jZWwnKTtcbiAgICAgIH1cblxuICAgICAgc2VsZi5kb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS5tb2RlbCA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgIH1cblxuICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5zdG9wQ2FtZXJhKCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gIH07XG59KVxuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBjYW1lcmEgPSByZXF1aXJlKCcuLi9jYW1lcmEnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAnd2ZtLmNhbWVyYS5zZXJ2aWNlJztcblxuYW5ndWxhci5tb2R1bGUoJ3dmbS5jYW1lcmEuc2VydmljZScsIFsnd2ZtLmNvcmUubWVkaWF0b3InXSlcblxuLmZhY3RvcnkoJ21vYmlsZUNhbWVyYScsIGZ1bmN0aW9uKCRxLCAkd2luZG93LCBtZWRpYXRvcikge1xuICByZXR1cm4gY2FtZXJhO1xufSlcblxuLmZhY3RvcnkoJ2Rlc2t0b3BDYW1lcmEnLCBmdW5jdGlvbigkbWREaWFsb2csIG1lZGlhdG9yKSB7XG4gIHZhciBjYW1lcmEgPSB7fTtcbiAgY2FtZXJhLmNhcHR1cmUgPSBmdW5jdGlvbihldikge1xuICAgIHJldHVybiAkbWREaWFsb2cuc2hvdyh7XG4gICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiBDYW1lcmFDdHJsKCRzY29wZSwgbWVkaWF0b3IpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAkc2NvcGUuZGF0YSA9IG51bGw7XG5cbiAgICAgICAgJHNjb3BlLiR3YXRjaCgnZGF0YScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICghIF8uaXNFbXB0eSgkc2NvcGUuZGF0YSkgKSB7XG4gICAgICAgICAgICAkbWREaWFsb2cuaGlkZSgkc2NvcGUuZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIG1lZGlhdG9yLnN1YnNjcmliZUZvclNjb3BlKCd3Zm06Y2FtZXJhOmNhbmNlbCcsICRzY29wZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJG1kRGlhbG9nLmNhbmNlbCgnUGhvdG8gY2FwdHVyZSBjYW5jZWxsZWQuJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiAnPGNhbWVyYSBtb2RlbD1cImRhdGFcIiBhdXRvc3RhcnQ9XCJ0cnVlXCI+PC9jYW1lcmE+JyxcbiAgICAgIHBhcmVudDogYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpLFxuICAgICAgdGFyZ2V0RXZlbnQ6IGV2LFxuICAgICAgY2xpY2tPdXRzaWRlVG9DbG9zZTogZmFsc2UsXG4gICAgICBmdWxsc2NyZWVuOiB0cnVlXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIGNhbWVyYTtcbn0pXG47XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHEgPSByZXF1aXJlKCdxJyk7XG5cbmZ1bmN0aW9uIENhbWVyYSgpIHtcbiAgdGhpcy5pbml0KCk7XG59O1xuXG5DYW1lcmEucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIGlmICh3aW5kb3cuY29yZG92YSkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkZXZpY2VyZWFkeVwiLCBmdW5jdGlvbiBjYW1lcmFSZWFkeSgpIHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICB9LCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICB9O1xuXG4gIHNlbGYuaW5pdFByb21pc2UgPSBkZWZlcnJlZC5wcm9taXNlO1xuICByZXR1cm4gc2VsZi5pbml0UHJvbWlzZTtcbn07XG5cbkNhbWVyYS5wcm90b3R5cGUuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cubmF2aWdhdG9yLmNhbWVyYS5jbGVhbnVwKCk7XG59O1xuXG5DYW1lcmEucHJvdG90eXBlLmNhcHR1cmUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICBzZWxmLmluaXRQcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgd2luZG93Lm5hdmlnYXRvci5jYW1lcmEuZ2V0UGljdHVyZShmdW5jdGlvbiBjYXB0dXJlU3VjY2VzcyhmaWxlVVJJKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBmaWxlVVJJLnN1YnN0cihmaWxlVVJJLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoe1xuICAgICAgICBmaWxlTmFtZTogZmlsZU5hbWUsXG4gICAgICAgIGZpbGVVUkk6IGZpbGVVUklcbiAgICAgIH0pO1xuICAgIH0sIGZ1bmN0aW9uIGNhcHR1cmVGYWlsdXJlKGVycm9yKSB7XG4gICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuICAgIH0sIHtcbiAgICAgIHF1YWxpdHk6IDEwMCxcbiAgICAgIGRlc3RpbmF0aW9uVHlwZTogd2luZG93Lm5hdmlnYXRvci5jYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLFxuICAgICAgZW5jb2RpbmdUeXBlOiB3aW5kb3cuQ2FtZXJhLkVuY29kaW5nVHlwZS5KUEVHLFxuICAgICAgY29ycmVjdE9yaWVudGF0aW9uOiB0cnVlXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbnZhciBjYW1lcmEgPSBuZXcgQ2FtZXJhKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGNhbWVyYTtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS5maWxlLmRpcmVjdGl2ZXMnO1xuXG5hbmd1bGFyLm1vZHVsZSgnd2ZtLmZpbGUuZGlyZWN0aXZlcycsIFtdKVxuXG4uZGlyZWN0aXZlKCd3Zm1JbWcnLCBmdW5jdGlvbigkcSkge1xuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICRmaC5vbignZmhpbml0JywgZnVuY3Rpb24oZXJyb3IsIGhvc3QpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKGVycm9yKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBjbG91ZFVybCA9ICRmaC5nZXRDbG91ZFVSTCgpO1xuICAgICAgZGVmZXJyZWQucmVzb2x2ZShjbG91ZFVybCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfTtcblxuICB2YXIgaW5pdFByb21pc2UgPSBpbml0KCk7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHNjb3BlOiB7XG4gICAgICB1aWQ6ICc9J1xuICAgIH0sXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICBzY29wZS4kd2F0Y2goJ3VpZCcsIGZ1bmN0aW9uKHVpZCkge1xuICAgICAgICBpbml0UHJvbWlzZS50aGVuKGZ1bmN0aW9uKGNsb3VkVXJsKSB7XG4gICAgICAgICAgZWxlbWVudFswXS5zcmMgPSBjbG91ZFVybCArIGNvbmZpZy5hcGlQYXRoICsgJy9nZXQvJyArIHVpZDtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50WzBdLnNyYyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59KVxuO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuLi9maWxlJyksXG4gICAgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyksXG4gICAgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0uZmlsZS5zZXJ2aWNlJztcblxuYW5ndWxhci5tb2R1bGUoJ3dmbS5maWxlLnNlcnZpY2UnLCBbXG4gIHJlcXVpcmUoJy4vZGlyZWN0aXZlJylcbl0pXG5cbi5mYWN0b3J5KCdmaWxlQ2xpZW50JywgZnVuY3Rpb24oJHEpIHtcbiAgdmFyIGZpbGVDbGllbnQgPSB7fTtcblxuICBfLmZvck93bihjbGllbnQsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmlsZUNsaWVudFtrZXldID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAkcS53aGVuKGNsaWVudFtrZXldLmFwcGx5KGNsaWVudCwgYXJndW1lbnRzKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbGVDbGllbnRba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZpbGVDbGllbnQ7XG59KVxuO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhcGlIb3N0OiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJ1xuLCBhcGlQYXRoOiAnL2ZpbGUvd2ZtJ1xufVxuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpLFxuICAgIHEgPSByZXF1aXJlKCdxJyk7XG5cbnZhciBjbGllbnQgPSB7fTtcblxuY2xpZW50LmluaXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGRlZmVycmVkRmhpbml0ID0gcS5kZWZlcigpO1xuICAkZmgub24oJ2ZoaW5pdCcsIGZ1bmN0aW9uKGVycm9yLCBob3N0KSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBkZWZlcnJlZEZoaW5pdC5yZWplY3QobmV3IEVycm9yKGVycm9yKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsaWVudC5jbG91ZFVybCA9ICRmaC5nZXRDbG91ZFVSTCgpO1xuICAgIGRlZmVycmVkRmhpbml0LnJlc29sdmUoKTtcbiAgfSk7XG5cbiAgdmFyIGRlZmVycmVkUmVhZHkgPSBxLmRlZmVyKCk7XG4gIGlmICh3aW5kb3cuY29yZG92YSkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkZXZpY2VyZWFkeVwiLCBmdW5jdGlvbiBjYW1lcmFSZWFkeSgpIHtcbiAgICAgIGRlZmVycmVkUmVhZHkucmVzb2x2ZSgpO1xuICAgIH0sIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBkZWZlcnJlZFJlYWR5LnJlc29sdmUoKTtcbiAgfTtcblxuICBjbGllbnQuaW5pdFByb21pc2UgPSBxLmFsbChbZGVmZXJyZWRGaGluaXQucHJvbWlzZSwgZGVmZXJyZWRSZWFkeS5wcm9taXNlXSlcbiAgcmV0dXJuIGNsaWVudC5pbml0UHJvbWlzZTtcbn07XG5cbmNsaWVudC51cGxvYWREYXRhVXJsID0gZnVuY3Rpb24odXNlcklkLCBkYXRhVXJsKSB7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgZGVmZXJyZWQucmVqZWN0KCdCb3RoIHVzZXJJZCBhbmQgYSBkYXRhVXJsIHBhcmFtZXRlcnMgYXJlIHJlcXVpcmVkLicpO1xuICB9IGVsc2Uge1xuICAgICRmaC5jbG91ZCh7XG4gICAgICBwYXRoOiBjb25maWcuYXBpUGF0aCArICcvb3duZXIvJyt1c2VySWQrJy91cGxvYWQvYmFzZTY0L3Bob3RvLnBuZycsXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIGRhdGE6IGRhdGFVcmxcbiAgICB9LFxuICAgIGZ1bmN0aW9uKHJlcykge1xuICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXMpO1xuICAgIH0sXG4gICAgZnVuY3Rpb24obWVzc2FnZSwgcHJvcHMpIHtcbiAgICAgIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgZS5wcm9wcyA9IHByb3BzO1xuICAgICAgZGVmZXJyZWQucmVqZWN0KGUpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufVxuXG5jbGllbnQubGlzdCA9IGZ1bmN0aW9uKHVzZXJJZCkge1xuICB2YXIgdXJsID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMCA/IGNvbmZpZy5hcGlQYXRoICsgJy9hbGwnXG4gICAgOiBjb25maWcuYXBpUGF0aCArICcvb3duZXIvJyArIHVzZXJJZDtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICAkZmguY2xvdWQoe1xuICAgICAgcGF0aDogdXJsLFxuICAgICAgbWV0aG9kOiAnZ2V0J1xuICAgIH0sXG4gICAgZnVuY3Rpb24ocmVzKSB7XG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlcyk7XG4gICAgfSxcbiAgICBmdW5jdGlvbihtZXNzYWdlLCBwcm9wcykge1xuICAgICAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICBlLnByb3BzID0gcHJvcHM7XG4gICAgICBkZWZlcnJlZC5yZWplY3QoZSk7XG4gICAgfVxuICApO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbmZ1bmN0aW9uIGZpbGVVcGxvYWQoZmlsZVVSSSwgc2VydmVyVVJJLCBmaWxlVXBsb2FkT3B0aW9ucykge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIHZhciB0cmFuc2ZlciA9IG5ldyBGaWxlVHJhbnNmZXIoKTtcbiAgdHJhbnNmZXIudXBsb2FkKGZpbGVVUkksIHNlcnZlclVSSSwgZnVuY3Rpb24gdXBsb2FkU3VjY2VzcyhyZXNwb25zZSkge1xuICAgIGRlZmVycmVkLnJlc29sdmUocmVzcG9uc2UpO1xuICB9LCBmdW5jdGlvbiB1cGxvYWRGYWlsdXJlKGVycm9yKSB7XG4gICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcbiAgfSwgZmlsZVVwbG9hZE9wdGlvbnMpO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbmZ1bmN0aW9uIGZpbGVVcGxvYWRSZXRyeShmaWxlVVJJLCBzZXJ2ZXJVUkksIGZpbGVVcGxvYWRPcHRpb25zLCB0aW1lb3V0LCByZXRyaWVzKSB7XG4gIHJldHVybiBmaWxlVXBsb2FkKGZpbGVVUkksIHNlcnZlclVSSSwgZmlsZVVwbG9hZE9wdGlvbnMpXG4gIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgaWYgKHJldHJpZXMgPT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgdXBsb2FkIHRvIFwiICsgSlNPTi5zdHJpbmdpZnkoc2VydmVyVVJJKSk7XG4gICAgfTtcbiAgICByZXR1cm4gcS5kZWxheSh0aW1lb3V0KVxuICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmaWxlVXBsb2FkUmV0cnkoZmlsZVVSSSwgc2VydmVyVVJJLCBmaWxlVXBsb2FkT3B0aW9ucywgdGltZW91dCwgcmV0cmllcyAtIDEpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNsaWVudC51cGxvYWRGaWxlID0gZnVuY3Rpb24odXNlcklkLCBmaWxlVVJJLCBvcHRpb25zKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBxLnJlamVjdCgndXNlcklkIGFuZCBmaWxlVVJJIHBhcmFtZXRlcnMgYXJlIHJlcXVpcmVkLicpO1xuICB9IGVsc2Uge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBmaWxlVXBsb2FkT3B0aW9ucyA9IG5ldyBGaWxlVXBsb2FkT3B0aW9ucygpO1xuICAgIGZpbGVVcGxvYWRPcHRpb25zLmZpbGVLZXkgPSBvcHRpb25zLmZpbGVLZXkgfHwgJ2JpbmFyeWZpbGUnO1xuICAgIGZpbGVVcGxvYWRPcHRpb25zLmZpbGVOYW1lID0gb3B0aW9ucy5maWxlTmFtZTtcbiAgICBmaWxlVXBsb2FkT3B0aW9ucy5taW1lVHlwZSA9IG9wdGlvbnMubWltZVR5cGUgfHwgJ2ltYWdlL2pwZWcnO1xuICAgIGZpbGVVcGxvYWRPcHRpb25zLnBhcmFtcyA9IHtcbiAgICAgIG93bmVySWQ6IHVzZXJJZCxcbiAgICAgIGZpbGVOYW1lOiBvcHRpb25zLmZpbGVOYW1lXG4gICAgfTtcbiAgICB2YXIgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCAyMDAwO1xuICAgIHZhciByZXRyaWVzID0gb3B0aW9ucy5yZXRyaWVzIHx8IDE7XG4gICAgcmV0dXJuIGNsaWVudC5pbml0UHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlcnZlclVSSSA9IHdpbmRvdy5lbmNvZGVVUkkoY2xpZW50LmNsb3VkVXJsICsgY29uZmlnLmFwaVBhdGggKyAnL3VwbG9hZC9iaW5hcnknKTtcbiAgICAgIHJldHVybiBmaWxlVXBsb2FkUmV0cnkoZmlsZVVSSSwgc2VydmVyVVJJLCBmaWxlVXBsb2FkT3B0aW9ucywgdGltZW91dCwgcmV0cmllcyk7XG4gICAgfSlcbiAgfTtcbn07XG5cbmNsaWVudC5pbml0KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xpZW50O1xuIiwicmVxdWlyZSgnLi93b3Jrb3JkZXItbWFwLnRwbC5odG1sLmpzJyk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ubWFwLmRpcmVjdGl2ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLm1hcC5kaXJlY3RpdmVzJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS93b3Jrb3JkZXItbWFwLnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJzxkaXYgaWQ9XFwnZ21hcF9jYW52YXNcXCc+PC9kaXY+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ubWFwLmRpcmVjdGl2ZXMnLCBbJ3dmbS5jb3JlLm1lZGlhdG9yJ10pO1xubW9kdWxlLmV4cG9ydHMgPSAnd2ZtLm1hcC5kaXJlY3RpdmVzJztcblxucmVxdWlyZSgnLi4vLi4vZGlzdCcpO1xuXG5uZ01vZHVsZS5kaXJlY3RpdmUoJ3dvcmtvcmRlck1hcCcsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCBtZWRpYXRvciwgJHdpbmRvdywgJGRvY3VtZW50LCAkdGltZW91dCkge1xuICBmdW5jdGlvbiBpbml0TWFwKGVsZW1lbnQsIGNlbnRlcikge1xuICAgIHZhciBteU9wdGlvbnMgPSB7XG4gICAgICB6b29tOjE0LFxuICAgICAgY2VudGVyOm5ldyBnb29nbGUubWFwcy5MYXRMbmcoY2VudGVyWzBdLCBjZW50ZXJbMV0pLFxuICAgICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUFxuICAgIH07XG4gICAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZWxlbWVudFswXS5xdWVyeVNlbGVjdG9yKCcjZ21hcF9jYW52YXMnKSwgbXlPcHRpb25zKTtcbiAgICByZXR1cm4gbWFwO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJlc2l6ZU1hcChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICB2YXIgbWFwRWxlbWVudCA9IGVsZW1lbnRbMF0ucXVlcnlTZWxlY3RvcignI2dtYXBfY2FudmFzJylcbiAgICB2YXIgaGVpZ2h0ID0gcGFyZW50LmNsaWVudEhlaWdodDtcbiAgICB2YXIgd2lkdGggPSBwYXJlbnQuY2xpZW50V2lkdGg7XG4gICAgbWFwRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgIG1hcEVsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG5cbiAgICBjb25zb2xlLmxvZygnTWFwIGRpbWVuc2lvbnM6Jywgd2lkdGgsIGhlaWdodCk7XG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcihtYXBFbGVtZW50LCAncmVzaXplJyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gYWRkTWFya2VycyhtYXAsIGVsZW1lbnQsIHdvcmtvcmRlcnMpIHtcbiAgICB3b3Jrb3JkZXJzLmZvckVhY2goZnVuY3Rpb24od29ya29yZGVyKSB7XG4gICAgICBpZiAod29ya29yZGVyLmxvY2F0aW9uKSB7XG4gICAgICAgIC8vIHZhciBsYXQgPSBjZW50ZXJbMF0gKyAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAwLjA1O1xuICAgICAgICAvLyB2YXIgbG9uZyA9IGNlbnRlclsxXSArIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDAuMjtcbiAgICAgICAgdmFyIGxhdCA9IHdvcmtvcmRlci5sb2NhdGlvblswXTtcbiAgICAgICAgdmFyIGxvbmcgPSB3b3Jrb3JkZXIubG9jYXRpb25bMV07XG4gICAgICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHttYXA6IG1hcCxwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxvbmcpfSk7XG4gICAgICAgIHZhciBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe2NvbnRlbnQ6JzxzdHJvbmc+V29ya29yZGVyICMnK3dvcmtvcmRlci5pZCsnPC9zdHJvbmc+PGJyPicrd29ya29yZGVyLmFkZHJlc3MrJzxicj4nfSk7XG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICBpbmZvd2luZG93Lm9wZW4obWFwLG1hcmtlcik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGZpbmRQYXJlbnQoZG9jdW1lbnQsIGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgdmFyIG1hdGNoZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICB2YXIgcGFyZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIHdoaWxlKHBhcmVudCkge1xuICAgICAgdmFyIGlzUGFyZW50TWF0Y2ggPSBBcnJheS5wcm90b3R5cGUuc29tZS5jYWxsKG1hdGNoZXMsIGZ1bmN0aW9uKF9tYXRjaCkge1xuICAgICAgICByZXR1cm4gcGFyZW50ID09PSBfbWF0Y2g7XG4gICAgICB9KTtcbiAgICAgIGlmIChpc1BhcmVudE1hdGNoKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfTtcbiAgICAgIHZhciBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnNvbGUubG9nKCdwYXJlbnQnLCBwYXJlbnQpXG4gICAgfVxuICAgIHJldHVybiBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS93b3Jrb3JkZXItbWFwLnRwbC5odG1sJyksXG4gICAgc2NvcGU6IHtcbiAgICAgIGxpc3Q6ICc9JyxcbiAgICAgIGNlbnRlcjogJz0nLFxuICAgICAgd29ya29yZGVyczogJz0nLFxuICAgICAgY29udGFpbmVyU2VsZWN0b3I6ICdAJ1xuICAgIH0sXG4gICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuICAgICAgdmFyIG1hcCA9IGluaXRNYXAoZWxlbWVudCwgc2NvcGUuY2VudGVyIHx8IFs0OS4yNywgLTEyMy4wOF0pO1xuICAgICAgYWRkTWFya2VycyhtYXAsIGVsZW1lbnQsIHNjb3BlLndvcmtvcmRlcnMpO1xuICAgICAgdmFyIHBhcmVudCA9IGZpbmRQYXJlbnQoJGRvY3VtZW50WzBdLCBlbGVtZW50WzBdLCBzY29wZS5jb250YWluZXJTZWxlY3Rvcik7XG4gICAgICB2YXIgcmVzaXplTGlzdGVuZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzaXplTWFwKGVsZW1lbnQsIHBhcmVudCk7XG4gICAgICB9XG4gICAgICAkdGltZW91dChyZXNpemVMaXN0ZW5lcik7XG4gICAgICBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdykub24oJ3Jlc2l6ZScsIHJlc2l6ZUxpc3RlbmVyKTsgLy8gVE9ETzogdGhyb3R0bGUgdGhpc1xuICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdykub2ZmKCdyZXNpemUnLCByZXNpemVMaXN0ZW5lcik7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgJHdpbmRvdywgJGVsZW1lbnQpIHtcblxuICAgIH0sXG4gICAgY29udHJvbGxlckFzOiAnY3RybCdcbiAgfTtcbn0pXG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAnd2ZtLm1hcCc7XG5cbmFuZ3VsYXIubW9kdWxlKCd3Zm0ubWFwJywgW1xuICByZXF1aXJlKCcuL2RpcmVjdGl2ZScpXG4sIHJlcXVpcmUoJy4vc2VydmljZScpXG5dKVxuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ubWFwLnNlcnZpY2VzJywgWyd3Zm0uY29yZS5tZWRpYXRvciddKTtcbm1vZHVsZS5leHBvcnRzID0gJ3dmbS5tYXAuc2VydmljZXMnO1xuXG5uZ01vZHVsZS5mYWN0b3J5KCdtYXBDbGllbnQnLCBmdW5jdGlvbigpIHtcbiAgdmFyIG1hcENsaWVudCA9IHt9O1xuICBtYXBDbGllbnQuZ2V0Q29vcmRzID0gZnVuY3Rpb24oYWRkcmVzcykge1xuICAgIC8vIGludm9rZSB0aGUgZ29vZ2xlIEFQSSB0byByZXR1cm4gdGhlIGNvLW9yZGluYXRlcyBvZiB0aGUgZ2l2ZW4gbG9jYXRpb25cbiAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vZ2VvY29kaW5nL2ludHJvXG4gIH1cbn0pXG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vbWVkaWF0b3InKTtcblxuYW5ndWxhci5tb2R1bGUoJ3dmbS5jb3JlLm1lZGlhdG9yJywgWyduZyddKVxuXG4uZmFjdG9yeSgnbWVkaWF0b3InLCBmdW5jdGlvbiBtZWRpYXRvclNlcnZpY2UoJHEsICRsb2cpIHtcbiAgdmFyIG9yaWdpbmFsUmVxdWVzdCA9IG1lZGlhdG9yLnJlcXVlc3Q7XG5cbiAgLy8gbW9ua2V5IHBhdGNoIHRoZSByZXF1ZXN0IGZ1bmN0aW9uLCB3cmFwcGluZyB0aGUgcmV0dXJuZWQgcHJvbWlzZSBhcyBhbiBhbmd1bGFyIHByb21pc2VcbiAgbWVkaWF0b3IucmVxdWVzdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcm9taXNlID0gb3JpZ2luYWxSZXF1ZXN0LmFwcGx5KG1lZGlhdG9yLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiAkcS53aGVuKHByb21pc2UpO1xuICB9O1xuXG4gIG1lZGlhdG9yLnN1YnNjcmliZUZvclNjb3BlID0gZnVuY3Rpb24odG9waWMsc2NvcGUsZm4pIHtcbiAgICB2YXIgc3Vic2NyaWJlciA9IG1lZGlhdG9yLnN1YnNjcmliZSh0b3BpYyxmbik7XG4gICAgc2NvcGUuJG9uKFwiJGRlc3Ryb3lcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBtZWRpYXRvci5yZW1vdmUodG9waWMsIHN1YnNjcmliZXIuaWQpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgcmV0dXJuIG1lZGlhdG9yO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS5jb3JlLm1lZGlhdG9yJztcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xudmFyIE1lZGlhdG9yID0gcmVxdWlyZSgnbWVkaWF0b3ItanMnKS5NZWRpYXRvcjtcbnZhciBxID0gcmVxdWlyZSgncScpO1xuXG52YXIgbWVkaWF0b3IgPSBuZXcgTWVkaWF0b3IoKTtcblxubWVkaWF0b3IucHJvbWlzZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIHZhciBjYiA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICB9O1xuICB2YXIgYXJncyA9IFtdO1xuICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcmdzLCBhcmd1bWVudHMpO1xuICBhcmdzLnNwbGljZSgxLCAwLCBjYik7XG4gIG1lZGlhdG9yLm9uY2UuYXBwbHkobWVkaWF0b3IsIGFyZ3MpO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn1cblxubWVkaWF0b3IucmVxdWVzdCA9IGZ1bmN0aW9uKHRvcGljLCBwYXJhbWV0ZXJzLCBvcHRpb25zKSB7XG4gIHZhciB0b3BpY3MgPSB7fSwgc3VicyA9IHt9LCBjb21wbGV0ZSA9IGZhbHNlLCB0aW1lb3V0O1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHRvcGljcy5yZXF1ZXN0ID0gdG9waWM7XG4gIHRvcGljcy5kb25lID0gb3B0aW9ucy5kb25lVG9waWMgfHwgJ2RvbmU6JyArIHRvcGljO1xuICB0b3BpY3MuZXJyb3IgPSBvcHRpb25zLmVycm9yVG9waWMgfHwgJ2Vycm9yOicgKyB0b3BpYztcblxuICB2YXIgdWlkID0gbnVsbDtcbiAgaWYgKF8uaGFzKG9wdGlvbnMsICd1aWQnKSkge1xuICAgIHVpZCA9IG9wdGlvbnMudWlkO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbWV0ZXJzICE9PSBcInVuZGVmaW5lZFwiICYmIHBhcmFtZXRlcnMgIT09IG51bGwpIHtcbiAgICB1aWQgPSBwYXJhbWV0ZXJzIGluc3RhbmNlb2YgQXJyYXkgPyBwYXJhbWV0ZXJzWzBdIDogcGFyYW1ldGVycztcbiAgfVxuXG4gIGlmICh1aWQgIT09IG51bGwpIHtcbiAgICAgdG9waWNzLmRvbmUgKz0gJzonICsgdWlkO1xuICAgICB0b3BpY3MuZXJyb3IgKz0gJzonICsgdWlkO1xuICB9XG5cbiAgaWYgKCFvcHRpb25zLnRpbWVvdXQpIHtcbiAgICBvcHRpb25zLnRpbWVvdXQgPSAyMDAwO1xuICB9O1xuXG4gIHZhciBjbGVhblVwID0gZnVuY3Rpb24oKSB7XG4gICAgY29tcGxldGUgPSB0cnVlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICBtZWRpYXRvci5yZW1vdmUodG9waWNzLmRvbmUsIHN1YnMuZG9uZS5pZCk7XG4gICAgbWVkaWF0b3IucmVtb3ZlKHRvcGljcy5lcnJvciwgc3Vicy5lcnJvci5pZCk7XG4gIH07XG5cbiAgc3Vicy5kb25lID0gbWVkaWF0b3Iuc3Vic2NyaWJlKHRvcGljcy5kb25lLCBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICBjbGVhblVwKCk7XG4gICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuICB9KTtcblxuICBzdWJzLmVycm9yID0gbWVkaWF0b3Iuc3Vic2NyaWJlKHRvcGljcy5lcnJvciwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICBjbGVhblVwKCk7XG4gICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcbiAgfSk7XG5cbiAgdmFyIGFyZ3MgPSBbdG9waWNzLnJlcXVlc3RdO1xuICBpZiAocGFyYW1ldGVycyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJncywgcGFyYW1ldGVycyk7XG4gIH0gZWxzZSB7XG4gICAgYXJncy5wdXNoKHBhcmFtZXRlcnMpO1xuICB9XG4gIG1lZGlhdG9yLnB1Ymxpc2guYXBwbHkobWVkaWF0b3IsIGFyZ3MpO1xuXG4gIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGlmICghY29tcGxldGUpIHtcbiAgICAgIGNsZWFuVXAoKTtcbiAgICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoJ01lZGlhdG9yIHJlcXVlc3QgdGltZW91dCBmb3IgdG9waWMgJyArICB0b3BpYykpO1xuICAgIH1cbiAgfSwgb3B0aW9ucy50aW1lb3V0KTtcblxuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWVkaWF0b3I7XG4iLCJyZXF1aXJlKCcuL21lc3NhZ2UtZGV0YWlsLnRwbC5odG1sLmpzJyk7XG5yZXF1aXJlKCcuL21lc3NhZ2UtZm9ybS50cGwuaHRtbC5qcycpO1xucmVxdWlyZSgnLi9tZXNzYWdlLWxpc3QudHBsLmh0bWwuanMnKTtcbiIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5tZXNzYWdlLmRpcmVjdGl2ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLm1lc3NhZ2UuZGlyZWN0aXZlcycsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvbWVzc2FnZS1kZXRhaWwudHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnPG1kLXRvb2xiYXIgY2xhc3M9XCJjb250ZW50LXRvb2xiYXJcIj5cXG4nICtcbiAgICAnICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci10b29sc1wiPlxcbicgK1xuICAgICcgICAgPG1kLWJ1dHRvbiBuZy1jbGljaz1cImN0cmwuY2xvc2VNZXNzYWdlKCRldmVudCwgY3RybC5tZXNzYWdlKVwiIGhpZGUtZ3Qtc20gY2xhc3M9XCJtZC1pY29uLWJ1dHRvblwiPlxcbicgK1xuICAgICcgICAgICA8bWQtaWNvbiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+Y2xvc2U8L21kLWljb24+XFxuJyArXG4gICAgJyAgICA8L21kLWJ1dHRvbj5cXG4nICtcbiAgICAnICAgIDxoMz5cXG4nICtcbiAgICAnICAgICB7e2N0cmwubWVzc2FnZS5zdWJqZWN0fX1cXG4nICtcbiAgICAnICAgIDwvaDM+XFxuJyArXG4gICAgJyAgPC9kaXY+XFxuJyArXG4gICAgJzwvbWQtdG9vbGJhcj5cXG4nICtcbiAgICAnPGRpdiBjbGFzcz1cIndmbS1tYWluY29sLXNjcm9sbFwiPlxcbicgK1xuICAgICcgIDxkaXYgY2xhc3M9XCJtZXNzYWdlXCIgbGF5b3V0LXBhZGRpbmcgbGF5b3V0LW1hcmdpbj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1oZWFkZXJcIj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBjbGFzcz1cIm1kLWJvZHktMVwiPlxcbicgK1xuICAgICcgICAgICAgIDxzcGFuPkZyb206PC9zcGFuPiB7e2N0cmwubWVzc2FnZS5zZW5kZXIubmFtZX19XFxuJyArXG4gICAgJyAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICA8ZGl2IGNsYXNzPVwibWQtYm9keS0xXCI+XFxuJyArXG4gICAgJyAgICAgICAgPHNwYW4+VG86PC9zcGFuPiB7e2N0cmwubWVzc2FnZS5yZWNlaXZlci5uYW1lfX1cXG4nICtcbiAgICAnICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgY2xhc3M9XCJtZC1ib2R5LTFcIj5cXG4nICtcbiAgICAnICAgICAgICA8c3Bhbj5TdGF0dXM6PC9zcGFuPiB7e2N0cmwubWVzc2FnZS5zdGF0dXN9fVxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgICAgPCEtLTxkaXYgY2xhc3M9XCJtZC1ib2R5LTEgdGltZS1zdGFtcFwiPjExOjM4IEFNICgzIGhvdXJzIGFnbyk8L2Rpdj4tLT5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8cCBjbGFzcz1cIm1kLWJvZHktMVwiPnt7Y3RybC5tZXNzYWdlLmNvbnRlbnR9fTwvcD5cXG4nICtcbiAgICAnICA8L2Rpdj5cXG4nICtcbiAgICAnPC9kaXY+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLm1lc3NhZ2UuZGlyZWN0aXZlcycpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ubWVzc2FnZS5kaXJlY3RpdmVzJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS9tZXNzYWdlLWZvcm0udHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnPG1kLXRvb2xiYXIgY2xhc3M9XCJjb250ZW50LXRvb2xiYXIgbWQtcHJpbWFyeVwiPlxcbicgK1xuICAgICcgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXRvb2xzXCI+XFxuJyArXG4gICAgJyAgICA8aDM+TmV3IG1lc3NhZ2U8L2gzPlxcbicgK1xuICAgICcgIDwvZGl2PlxcbicgK1xuICAgICc8L21kLXRvb2xiYXI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8Zm9ybSBuYW1lPVwibWVzc2FnZUZvcm1cIiBuZy1zdWJtaXQ9XCJjdHJsLmRvbmUobWVzc2FnZUZvcm0uJHZhbGlkKVwiIG5vdmFsaWRhdGUgbGF5b3V0LXBhZGRpbmcgbGF5b3V0LW1hcmdpbj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPCEtLVxcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJyAgICA8bGFiZWwgZm9yPVwibWVzc2FnZVN0YXRlXCI+U3RhdHVzPC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaW5wdXRtZXNzYWdlVHlwZVwiIG5hbWU9XCJtZXNzYWdlU3RhdHVzXCIgbmctbW9kZWw9XCJjdHJsLm1vZGVsLnN0YXR1c1wiIGRpc2FibGVkPVwidHJ1ZVwiPlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICcgIC0tPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxkaXY+XFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCIgbmctY2xhc3M9XCJ7IFxcJ2hhcy1lcnJvclxcJyA6IG1lc3NhZ2VGb3JtLnJlY2VpdmVyLiRpbnZhbGlkICYmICFtZXNzYWdlRm9ybS5yZWNlaXZlci4kcHJpc3RpbmUgfVwiPlxcbicgK1xuICAgICcgICAgPGxhYmVsIGZvcj1cInNlbGVjdFJlY2VpdmVyXCI+VG88L2xhYmVsPlxcbicgK1xuICAgICcgICAgPG1kLXNlbGVjdCBuZy1tb2RlbD1cImN0cmwubW9kZWwucmVjZWl2ZXJcIiBuYW1lPVwicmVjZWl2ZXJcIiBpZD1cInNlbGVjdFJlY2VpdmVyXCIgcmVxdWlyZWQ+XFxuJyArXG4gICAgJyAgICAgICA8bWQtb3B0aW9uIG5nLXJlcGVhdD1cIndvcmtlciBpbiBjdHJsLndvcmtlcnNcIiB2YWx1ZT1cInt7d29ya2VyfX1cIj57e3dvcmtlci5uYW1lfX0gKHt7d29ya2VyLnBvc2l0aW9ufX0pPC9tZC1vcHRpb24+XFxuJyArXG4gICAgJyAgICAgPC9tZC1zZWxlY3Q+XFxuJyArXG4gICAgJyAgICAgPGRpdiBuZy1tZXNzYWdlcz1cIm1lc3NhZ2VGb3JtLnJlY2VpdmVyLiRlcnJvclwiIG5nLWlmPVwiY3RybC5zdWJtaXR0ZWQgfHwgbWVzc2FnZUZvcm0ucmVjZWl2ZXIuJGRpcnR5XCI+XFxuJyArXG4gICAgJyAgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPlRoZSBUbzogZmllbGQgaXMgcmVxdWlyZWQuPC9kaXY+XFxuJyArXG4gICAgJyAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJzwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGRpdj5cXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIiBuZy1jbGFzcz1cInsgXFwnaGFzLWVycm9yXFwnIDogbWVzc2FnZUZvcm0uc3ViamVjdC4kaW52YWxpZCAmJiAhbWVzc2FnZUZvcm0uc3ViamVjdC4kcHJpc3RpbmUgfVwiPlxcbicgK1xuICAgICcgICAgPGxhYmVsIGZvcj1cImlucHV0U3ViamVjdFwiPlN1YmplY3Q8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpbnB1dFN1YmplY3RcIiBuYW1lPVwic3ViamVjdFwiIG5nLW1vZGVsPVwiY3RybC5tb2RlbC5zdWJqZWN0XCIgcmVxdWlyZWQ+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2VzPVwibWVzc2FnZUZvcm0uc3ViamVjdC4kZXJyb3JcIiBuZy1pZj1cImN0cmwuc3VibWl0dGVkIHx8IG1lc3NhZ2VGb3JtLnN1YmplY3QuJGRpcnR5XCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+QSBzdWJqZWN0IGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJzwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGRpdj5cXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIiBuZy1jbGFzcz1cInsgXFwnaGFzLWVycm9yXFwnIDogbWVzc2FnZUZvcm0uY29udGVudC4kaW52YWxpZCAmJiAhbWVzc2FnZUZvcm0uY29udGVudC4kcHJpc3RpbmUgfVwiPlxcbicgK1xuICAgICcgICAgPGxhYmVsIGZvcj1cImlucHV0Q29udGVudFwiPk1lc3NhZ2U8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPHRleHRhcmVhIGlkPVwiaW5wdXRDb250ZW50XCIgbmFtZT1cImNvbnRlbnRcIiBuZy1tb2RlbD1cImN0cmwubW9kZWwuY29udGVudFwiIHJlcXVpcmVkIG1kLW1heGxlbmd0aD1cIjM1MFwiPjwvdGV4dGFyZWE+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlcz1cIm1lc3NhZ2VGb3JtLmNvbnRlbnQuJGVycm9yXCIgbmctc2hvdz1cImN0cmwuc3VibWl0dGVkIHx8IG1lc3NhZ2VGb3JtLmNvbnRlbnQuJGRpcnR5XCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+TWVzc2FnZSBjb250ZW50IGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJzwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8bWQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCI+U2VuZCBtZXNzYWdlPC9tZC1idXR0b24+XFxuJyArXG4gICAgJzwvZm9ybT5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ubWVzc2FnZS5kaXJlY3RpdmVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5tZXNzYWdlLmRpcmVjdGl2ZXMnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL21lc3NhZ2UtbGlzdC50cGwuaHRtbCcsXG4gICAgJzwhLS1cXG4nICtcbiAgICAnIENPTkZJREVOVElBTFxcbicgK1xuICAgICcgQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXFxuJyArXG4gICAgJyBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXFxuJyArXG4gICAgJy0tPlxcbicgK1xuICAgICc8bWQtdG9vbGJhcj5cXG4nICtcbiAgICAnICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci10b29sc1wiPlxcbicgK1xuICAgICcgICAgPGgzPlxcbicgK1xuICAgICcgICAgICA8c3Bhbj5NZXNzYWdlczwvc3Bhbj5cXG4nICtcbiAgICAnICAgIDwvaDM+XFxuJyArXG4gICAgJyAgPC9kaXY+XFxuJyArXG4gICAgJzwvbWQtdG9vbGJhcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxmb3JtIGFjdGlvbj1cIiNcIiBjbGFzcz1cInBlcnNpc3RlbnQtc2VhcmNoXCI+XFxuJyArXG4gICAgJyAgPGxhYmVsIGZvcj1cInNlYXJjaFwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5zZWFyY2g8L2k+PC9sYWJlbD5cXG4nICtcbiAgICAnICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCI+XFxuJyArXG4gICAgJzwvZm9ybT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8ZGl2IGNsYXNzPVwibWVzc2FnZXNcIj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLWxpc3Q+XFxuJyArXG4gICAgJyAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMy1saW5lXCIgbmctcmVwZWF0PVwibWVzc2FnZSBpbiBjdHJsLmxpc3QgfCByZXZlcnNlXCIgbmctY2xpY2s9XCJjdHJsLnNlbGVjdE1lc3NhZ2UoJGV2ZW50LCBtZXNzYWdlKVwiIGNsYXNzPVwibWQtMy1saW5lIHdvcmtvcmRlci1pdGVtXCJcXG4nICtcbiAgICAnICAgICBuZy1jbGFzcz1cInthY3RpdmU6IGN0cmwuc2VsZWN0ZWQuaWQgPT09IG1lc3NhZ2UuaWQsIG5ldzogbWVzc2FnZS5zdGF0dXMgPT09IFxcJ3VucmVhZFxcJ31cIj5cXG4nICtcbiAgICAnICAgICAgPGltZyBuZy1zcmM9XCJ7e21lc3NhZ2Uuc2VuZGVyLmF2YXRhcn19XCIgY2xhc3M9XCJtZC1hdmF0YXJcIiBhbHQ9XCJ7e21lc3NhZ2Uuc2VuZGVyLm5hbWV9fVwiIC8+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiIGxheW91dD1cImNvbHVtblwiPlxcbicgK1xuICAgICcgICAgICAgIDwhLS08c3BhbiBjbGFzcz1cIm1kLWNhcHRpb24gdGltZS1zdGFtcFwiPjEzIG1pbnMgYWdvPC9zcGFuPi0tPlxcbicgK1xuICAgICcgICAgICAgIDxoMz57e21lc3NhZ2Uuc2VuZGVyLm5hbWV9fTwvaDM+XFxuJyArXG4gICAgJyAgICAgICAgPGg0Pnt7bWVzc2FnZS5zdWJqZWN0fX08L2g0PlxcbicgK1xuICAgICcgICAgICAgIDxwPnt7bWVzc2FnZS5jb250ZW50fX08L3A+XFxuJyArXG4gICAgJyAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICA8bWQtZGl2aWRlciBtZC1pbnNldD48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJyAgICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnICA8L21kLWxpc3Q+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8L2Rpdj5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5tZXNzYWdlLmRpcmVjdGl2ZXMnLCBbJ3dmbS5jb3JlLm1lZGlhdG9yJ10pO1xubW9kdWxlLmV4cG9ydHMgPSAnd2ZtLm1lc3NhZ2UuZGlyZWN0aXZlcyc7XG5cbnJlcXVpcmUoJy4uLy4uL2Rpc3QnKTtcblxubmdNb2R1bGUuZGlyZWN0aXZlKCdtZXNzYWdlTGlzdCcsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCBtZWRpYXRvcikge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRSdcbiAgLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvbWVzc2FnZS1saXN0LnRwbC5odG1sJylcbiAgLCBzY29wZToge1xuICAgICAgbGlzdCA6ICc9bGlzdCcsXG4gICAgICBzZWxlY3RlZE1vZGVsOiAnPSdcbiAgICB9XG4gICwgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5saXN0ID0gJHNjb3BlLmxpc3Q7XG4gICAgICAgIHNlbGYuc2VsZWN0ZWQgPSAkc2NvcGUuc2VsZWN0ZWRNb2RlbDtcbiAgICAgICAgc2VsZi5zZWxlY3RNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQsIG1lc3NhZ2UpIHtcbiAgICAgICAgc2VsZi5zZWxlY3RlZE1lc3NhZ2VJZCA9IG1lc3NhZ2UuaWQ7XG4gICAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3dmbTptZXNzYWdlOnNlbGVjdGVkJywgbWVzc2FnZSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgICAgc2VsZi5pc21lc3NhZ2VTaG93biA9IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuc2hvd25tZXNzYWdlID09PSBtZXNzYWdlO1xuICAgICAgfTtcbiAgICB9XG4gICwgY29udHJvbGxlckFzOiAnY3RybCdcbiAgfTtcbn0pXG5cbi5kaXJlY3RpdmUoJ21lc3NhZ2VGb3JtJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUsIG1lZGlhdG9yKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICAsIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS9tZXNzYWdlLWZvcm0udHBsLmh0bWwnKVxuICAsIHNjb3BlOiB7XG4gICAgbWVzc2FnZSA6ICc9dmFsdWUnXG4gICwgd29ya2VyczogJz0nXG4gICAgfVxuICAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi5tb2RlbCA9IGFuZ3VsYXIuY29weSgkc2NvcGUubWVzc2FnZSk7XG4gICAgICBzZWxmLndvcmtlcnMgPSAkc2NvcGUud29ya2VycztcbiAgICAgIHNlbGYuc3VibWl0dGVkID0gZmFsc2U7XG4gICAgICBzZWxmLmRvbmUgPSBmdW5jdGlvbihpc1ZhbGlkKSB7XG4gICAgICAgIHNlbGYuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5tb2RlbC5yZWNlaXZlciA9IEpTT04ucGFyc2Uoc2VsZi5tb2RlbC5yZWNlaXZlcik7XG4gICAgICAgIHNlbGYubW9kZWwucmVjZWl2ZXJJZCA9IHNlbGYubW9kZWwucmVjZWl2ZXIuaWQ7XG4gICAgICAgIHNlbGYubW9kZWwuc3RhdHVzID0gXCJ1bnJlYWRcIjtcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3dmbTptZXNzYWdlOmNyZWF0ZWQnLCBzZWxmLm1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgLCBjb250cm9sbGVyQXM6ICdjdHJsJ1xuICB9O1xufSlcblxuLmRpcmVjdGl2ZSgnbWVzc2FnZURldGFpbCcsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCBtZWRpYXRvcikge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRSdcbiAgLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvbWVzc2FnZS1kZXRhaWwudHBsLmh0bWwnKVxuICAsIHNjb3BlOiB7XG4gICAgbWVzc2FnZSA6ICc9bWVzc2FnZSdcbiAgICB9XG4gICwgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLm1lc3NhZ2UgPSAkc2NvcGUubWVzc2FnZTtcbiAgICAgIHNlbGYuc2hvd1NlbGVjdEJ1dHRvbiA9ICEhICRzY29wZS4kcGFyZW50Lm1lc3NhZ2VzO1xuICAgICAgc2VsZi5zZWxlY3RtZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQsIG1lc3NhZ2UpIHtcbiAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOm1lc3NhZ2U6c2VsZWN0ZWQnLCBtZXNzYWdlKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgICBzZWxmLmNsb3NlTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50LCBtZXNzYWdlKSB7XG4gICAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3dmbTptZXNzYWdlOmNsb3NlOicgKyBtZXNzYWdlLmlkKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gIH07XG59KVxuO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS5tZXNzYWdlJztcblxuYW5ndWxhci5tb2R1bGUoJ3dmbS5tZXNzYWdlJywgW1xuICByZXF1aXJlKCcuL2RpcmVjdGl2ZScpXG4sIHJlcXVpcmUoJy4vc3luYy1zZXJ2aWNlJylcbl0pXG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpXG4gICwgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpXG4gIDtcblxubW9kdWxlLmV4cG9ydHMgPSAnd2ZtLm1lc3NhZ2Uuc3luYyc7XG5cbmZ1bmN0aW9uIHJlbW92ZUxvY2FsVmFycyhvYmplY3QpIHtcbiAgXy5rZXlzKG9iamVjdCkuZmlsdGVyKGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBrZXkuaW5kZXhPZignXycpID09PSAwO1xuICB9KS5mb3JFYWNoKGZ1bmN0aW9uKGxvY2FsS2V5KSB7XG4gICAgZGVsZXRlIG9iamVjdFtsb2NhbEtleV07XG4gIH0pO1xuICBpZiAob2JqZWN0LnJlc3VsdHMpIHtcbiAgICBfLnZhbHVlcyhvYmplY3QucmVzdWx0cykuZm9yRWFjaChmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgIF8ua2V5cyhyZXN1bHQuc3VibWlzc2lvbikuZmlsdGVyKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5LmluZGV4T2YoJ18nKSA9PT0gMDtcbiAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24obG9jYWxLZXkpIHtcbiAgICAgICAgZGVsZXRlIHJlc3VsdC5zdWJtaXNzaW9uW2xvY2FsS2V5XTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufTtcblxuZnVuY3Rpb24gd3JhcE1hbmFnZXIoJHEsICR0aW1lb3V0LCBtYW5hZ2VyKSB7XG4gIHZhciB3cmFwcGVkTWFuYWdlciA9IF8uY3JlYXRlKG1hbmFnZXIpO1xuICB3cmFwcGVkTWFuYWdlci5uZXcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG1lc3NhZ2UgPSB7XG4gICAgICAgIHR5cGU6ICdNZXNzYWdlJ1xuICAgICAgLCBzdGF0dXM6ICdOZXcnXG4gICAgICB9O1xuICAgICAgZGVmZXJyZWQucmVzb2x2ZShtZXNzYWdlKTtcbiAgICB9LCAwKTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfTtcblxuICByZXR1cm4gd3JhcHBlZE1hbmFnZXI7XG59XG5cbmFuZ3VsYXIubW9kdWxlKCd3Zm0ubWVzc2FnZS5zeW5jJywgW3JlcXVpcmUoJ2ZoLXdmbS1zeW5jJyldKVxuLmZhY3RvcnkoJ21lc3NhZ2VTeW5jJywgZnVuY3Rpb24oJHEsICR0aW1lb3V0LCBzeW5jU2VydmljZSkge1xuICBzeW5jU2VydmljZS5pbml0KCRmaCwgY29uZmlnLnN5bmNPcHRpb25zKTtcbiAgdmFyIG1lc3NhZ2VTeW5jID0ge307XG4gIG1lc3NhZ2VTeW5jLmNyZWF0ZU1hbmFnZXIgPSBmdW5jdGlvbihxdWVyeVBhcmFtcykge1xuICAgIGlmIChtZXNzYWdlU3luYy5tYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gJHEud2hlbihtZXNzYWdlU3luYy5tYW5hZ2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1lc3NhZ2VTeW5jLm1hbmFnZXJQcm9taXNlID0gc3luY1NlcnZpY2UubWFuYWdlKGNvbmZpZy5kYXRhc2V0SWQsIG51bGwsIHF1ZXJ5UGFyYW1zKVxuICAgICAgLnRoZW4oZnVuY3Rpb24obWFuYWdlcikge1xuICAgICAgICBtZXNzYWdlU3luYy5tYW5hZ2VyID0gd3JhcE1hbmFnZXIoJHEsICR0aW1lb3V0LCBtYW5hZ2VyKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1N5bmMgaXMgbWFuYWdpbmcgZGF0YXNldDonLCBjb25maWcuZGF0YXNldElkLCAnd2l0aCBmaWx0ZXI6ICcsIHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VTeW5jLm1hbmFnZXI7XG4gICAgICB9KVxuICAgIH1cbiAgfTtcbiAgbWVzc2FnZVN5bmMucmVtb3ZlTWFuYWdlciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChtZXNzYWdlU3luYy5tYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZVN5bmMubWFuYWdlci5zYWZlU3RvcCgpXG4gICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgZGVsZXRlIG1lc3NhZ2VTeW5jLm1hbmFnZXI7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWVzc2FnZVN5bmM7XG59KVxuLmZpbHRlcigncmV2ZXJzZScsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZnVuY3Rpb24oaXRlbXMpIHtcbiAgICByZXR1cm4gaXRlbXMuc2xpY2UoKS5yZXZlcnNlKCk7XG4gIH07XG59KTtcbjtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBpSG9zdDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcsXG4gIGFwaVBhdGg6ICcvYXBpL3dmbS9tZXNzYWdlJyxcbiAgZGF0YXNldElkIDogJ21lc3NhZ2VzJyxcbiAgc3luY09wdGlvbnMgOiB7XG4gICAgXCJzeW5jX2ZyZXF1ZW5jeVwiIDogNSxcbiAgICBcInN0b3JhZ2Vfc3RyYXRlZ3lcIjogXCJkb21cIixcbiAgICBcImRvX2NvbnNvbGVfbG9nXCI6IGZhbHNlXG4gIH1cbn1cbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0ucmVzdWx0JztcblxuYW5ndWxhci5tb2R1bGUoJ3dmbS5yZXN1bHQnLCBbXG4gIHJlcXVpcmUoJy4vc2VydmljZScpXG5dKVxuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKVxuICAsIF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxuICA7XG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS5yZXN1bHQuc3luYyc7XG5cbmZ1bmN0aW9uIHdyYXBNYW5hZ2VyKCRxLCAkdGltZW91dCwgbWFuYWdlcikge1xuICB2YXIgd3JhcHBlZE1hbmFnZXIgPSBfLmNyZWF0ZShtYW5hZ2VyKTtcbiAgd3JhcHBlZE1hbmFnZXIuZ2V0QnlXb3Jrb3JkZXJJZCA9IGZ1bmN0aW9uKHdvcmtvcmRlcklkKSB7XG4gICAgcmV0dXJuIHdyYXBwZWRNYW5hZ2VyLmxpc3QoKVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdHMpIHtcbiAgICAgIHJldHVybiB3cmFwcGVkTWFuYWdlci5maWx0ZXJCeVdvcmtvcmRlcihyZXN1bHRzLCB3b3Jrb3JkZXJJZCk7XG4gICAgfSk7XG4gIH07XG4gIHdyYXBwZWRNYW5hZ2VyLmZpbHRlckJ5V29ya29yZGVyID0gZnVuY3Rpb24ocmVzdWx0c0FycmF5LCB3b3Jrb3JkZXJJZCkge1xuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgdmFyIGZpbHRlcmVkID0gcmVzdWx0c0FycmF5LmZpbHRlcihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgIHJldHVybiBTdHJpbmcocmVzdWx0LndvcmtvcmRlcklkKSA9PT0gU3RyaW5nKHdvcmtvcmRlcklkKTtcbiAgICB9KTtcbiAgICB2YXIgcmVzdWx0ID0gIGZpbHRlcmVkICYmIGZpbHRlcmVkLmxlbmd0aCA/IGZpbHRlcmVkWzBdIDoge307XG4gICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuICB3cmFwcGVkTWFuYWdlci5leHRyYWN0QXBwZm9ybVN1Ym1pc3Npb25JZHMgPSBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICB2YXIgc3VibWlzc2lvbklkcyA9IG51bGw7XG4gICAgaWYgKCByZXN1bHQgJiYgcmVzdWx0LnN0ZXBSZXN1bHRzICYmICEgXy5pc0VtcHR5KHJlc3VsdC5zdGVwUmVzdWx0cykpIHtcbiAgICAgIHZhciBhcHBmb3JtU3RlcFJlc3VsdHMgPSBfLmZpbHRlcihyZXN1bHQuc3RlcFJlc3VsdHMsIGZ1bmN0aW9uKHN0ZXBSZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuICEhIHN0ZXBSZXN1bHQuc3RlcC5mb3JtSWQ7XG4gICAgICB9KTtcbiAgICAgIGlmICghIF8uaXNFbXB0eShhcHBmb3JtU3RlcFJlc3VsdHMpKSB7XG4gICAgICAgIHN1Ym1pc3Npb25JZHMgPSBfLm1hcChhcHBmb3JtU3RlcFJlc3VsdHMsIGZ1bmN0aW9uKHN0ZXBSZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gc3RlcFJlc3VsdC5zdWJtaXNzaW9uLnN1Ym1pc3Npb25JZDtcbiAgICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgcmV0dXJuICEhIGlkO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gc3VibWlzc2lvbklkcztcbiAgfVxuICByZXR1cm4gd3JhcHBlZE1hbmFnZXI7XG59XG5cbmFuZ3VsYXIubW9kdWxlKCd3Zm0ucmVzdWx0LnN5bmMnLCBbcmVxdWlyZSgnZmgtd2ZtLXN5bmMnKV0pXG4uZmFjdG9yeSgncmVzdWx0U3luYycsIGZ1bmN0aW9uKCRxLCAkdGltZW91dCwgc3luY1NlcnZpY2UpIHtcbiAgc3luY1NlcnZpY2UuaW5pdCgkZmgsIGNvbmZpZy5zeW5jT3B0aW9ucyk7XG4gIHZhciByZXN1bHRTeW5jID0ge307XG4gIHJlc3VsdFN5bmMubWFuYWdlclByb21pc2UgPSBzeW5jU2VydmljZS5tYW5hZ2UoY29uZmlnLmRhdGFzZXRJZClcbiAgLnRoZW4oZnVuY3Rpb24obWFuYWdlcikge1xuICAgIHJlc3VsdFN5bmMubWFuYWdlciA9IHdyYXBNYW5hZ2VyKCRxLCAkdGltZW91dCwgbWFuYWdlcik7XG4gICAgY29uc29sZS5sb2coJ1N5bmMgaXMgbWFuYWdpbmcgZGF0YXNldDonLCBjb25maWcuZGF0YXNldElkKTtcbiAgICByZXR1cm4gcmVzdWx0U3luYy5tYW5hZ2VyO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdFN5bmM7XG59KVxuXG4uZmlsdGVyKCdpc0VtcHR5JywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHJldHVybiAoT2JqZWN0LmtleXMob2JqZWN0KS5sZW5ndGggPT09IDApO1xuICB9O1xufSlcblxuLnJ1bihmdW5jdGlvbihtZWRpYXRvciwgcmVzdWx0U3luYykge1xuICBtZWRpYXRvci5zdWJzY3JpYmUoJ3dmbTphcHBmb3JtOnN1Ym1pc3Npb246Y29tcGxldGUnLCBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBtZXRhRGF0YSA9IGV2ZW50Lm1ldGFEYXRhLndmbTtcbiAgICB2YXIgc3VibWlzc2lvblJlc3VsdCA9IGV2ZW50LnN1Ym1pc3Npb25SZXN1bHQ7XG4gICAgcmVzdWx0U3luYy5tYW5hZ2VyUHJvbWlzZVxuICAgIC50aGVuKGZ1bmN0aW9uKG1hbmFnZXIpIHtcbiAgICAgIHJldHVybiBtYW5hZ2VyLmdldEJ5V29ya29yZGVySWQobWV0YURhdGEud29ya29yZGVySWQpXG4gICAgICAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgdmFyIHN0ZXBSZXN1bHQgPSByZXN1bHQuc3RlcFJlc3VsdHNbbWV0YURhdGEuc3RlcC5jb2RlXTtcbiAgICAgICAgc3RlcFJlc3VsdC5zdWJtaXNzaW9uID0gc3VibWlzc2lvblJlc3VsdDtcbiAgICAgICAgcmV0dXJuIG1hbmFnZXIudXBkYXRlKHJlc3VsdCk7XG4gICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06cmVzdWx0OnJlbW90ZS11cGRhdGU6JyArIHJlc3VsdC53b3Jrb3JkZXJJZCwgcmVzdWx0KTtcbiAgICB9KVxuICB9KVxufSlcbjtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBpSG9zdDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcsXG4gIGFwaVBhdGg6ICcvYXBpL3dmbS9yZXN1bHQnLFxuICBkYXRhc2V0SWQgOiAncmVzdWx0JyxcbiAgc3luY09wdGlvbnMgOiB7XG4gICAgXCJzeW5jX2ZyZXF1ZW5jeVwiIDogNSxcbiAgICBcInN0b3JhZ2Vfc3RyYXRlZ3lcIjogXCJkb21cIixcbiAgICBcImRvX2NvbnNvbGVfbG9nXCI6IGZhbHNlXG4gIH1cbn1cbiIsInJlcXVpcmUoJy4vcmlzay1hc3Nlc3NtZW50LWZvcm0udHBsLmh0bWwuanMnKTtcbnJlcXVpcmUoJy4vcmlzay1hc3Nlc3NtZW50LnRwbC5odG1sLmpzJyk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ucmlzay1hc3Nlc3NtZW50Jyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5yaXNrLWFzc2Vzc21lbnQnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL3Jpc2stYXNzZXNzbWVudC1mb3JtLnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJyAgPGRpdiBuZy1zaG93PVwicmlza0Fzc2Vzc21lbnRTdGVwID09PSAwXCIgbGF5b3V0LXBhZGRpbmcgY2xhc3M9XCJyaXNrLWFzc2Vzc3NtZW50XCI+XFxuJyArXG4gICAgJyAgICAgIDxoMiBjbGFzcz1cIm1kLXRpdGxlXCI+UmlzayBhc3Nlc3NtZW50IGNvbXBsZXRlPzwvaDI+XFxuJyArXG4gICAgJyAgICAgIDxwIGNsYXNzPVwibWQtYm9keS0xXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci48L3A+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgICA8cCBjbGFzcz1cIm1kLWJvZHktMVwiPkV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uPC9wPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxkaXYgY2xhc3M9XCJ3b3JrZmxvdy1hY3Rpb25zIG1kLXBhZGRpbmcgbWQtd2hpdGVmcmFtZS16NFwiPlxcbicgK1xuICAgICcgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcHJpbWFyeSBtZC13YXJuXCIgbmctY2xpY2s9XCJjdHJsLmFuc3dlckNvbXBsZXRlKCRldmVudCwgdHJ1ZSlcIj5ObzwvbWQtYnV0dG9uPlxcbicgK1xuICAgICcgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcHJpbWFyeVwiIG5nLWNsaWNrPVwiY3RybC5hbnN3ZXJDb21wbGV0ZSgkZXZlbnQsIHRydWUpXCI+WWVzPC9tZC1idXR0b24+XFxuJyArXG4gICAgJyAgICA8L2Rpdj48IS0tIHdvcmtmbG93LWFjdGlvbnMtLT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPC9kaXY+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDxkaXYgbmctaWY9XCJyaXNrQXNzZXNzbWVudFN0ZXAgPT0gMVwiIGxheW91dC1wYWRkaW5nPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxoMyBjbGFzcz1cIm1kLXRpdGxlXCI+U2lnbmF0dXJlPC9oMz5cXG4nICtcbiAgICAnICAgIDxwIGNsYXNzPVwibWQtY2FwdGlvblwiPkRyYXcgeW91ciBzaWduYXR1cmUgaW5zaWRlIHRoZSBzcXVhcmU8L3A+XFxuJyArXG4gICAgJyAgICA8c2lnbmF0dXJlLWZvcm0gdmFsdWU9XCJjdHJsLm1vZGVsLnNpZ25hdHVyZVwiPjwvc2lnbmF0dXJlLWZvcm0+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPGRpdiBjbGFzcz1cIndvcmtmbG93LWFjdGlvbnMgbWQtcGFkZGluZyBtZC13aGl0ZWZyYW1lLXo0XCI+XFxuJyArXG4gICAgJyAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1wcmltYXJ5IG1kLWh1ZS0xXCIgbmctY2xpY2s9XCJjdHJsLmJhY2soJGV2ZW50KVwiPkJhY2s8L21kLWJ1dHRvbj5cXG4nICtcbiAgICAnICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXByaW1hcnlcIiBuZy1jbGljaz1cImN0cmwuZG9uZSgkZXZlbnQpXCI+Q29udGludWU8L21kLWJ1dHRvbj5cXG4nICtcbiAgICAnICAgIDwvZGl2PjwhLS0gd29ya2Zsb3ctYWN0aW9ucy0tPlxcbicgK1xuICAgICcgIDwvZGl2PlxcbicgK1xuICAgICcnKTtcbn1dKTtcbiIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5yaXNrLWFzc2Vzc21lbnQnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLnJpc2stYXNzZXNzbWVudCcsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvcmlzay1hc3Nlc3NtZW50LnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJyAgPG1kLXN1YmhlYWRlcj5SaXNrIEFzc2Vzc21lbnQ8L21kLXN1YmhlYWRlcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLWxpc3QgY2xhc3M9XCJyaXNrLWFzc2Vzc21lbnRcIj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lXCIgPlxcbicgK1xuICAgICcgICAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCIgbmctaWY9XCJyaXNrQXNzZXNzbWVudC5jb21wbGV0ZVwiIGNsYXNzPVwic3VjY2Vzc1wiPmNoZWNrX2NpcmNsZTwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiIG5nLWlmPVwiISByaXNrQXNzZXNzbWVudC5jb21wbGV0ZVwiIGNsYXNzPVwiZGFuZ2VyXCI+Y2FuY2VsPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgICA8aDMgbmctaWY9XCJyaXNrQXNzZXNzbWVudC5jb21wbGV0ZVwiPkNvbXBsZXRlPC9oMz5cXG4nICtcbiAgICAnICAgICAgICA8aDMgbmctaWY9XCIhIHJpc2tBc3Nlc3NtZW50LmNvbXBsZXRlXCI+VW5jb21wbGV0ZWQ8L2gzPlxcbicgK1xuICAgICcgICAgICAgIDxwPlJpc2sgQXNzZXNzbWVudDwvcD5cXG4nICtcbiAgICAnICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJyAgICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lIHdpdGgtaW1hZ2VcIj5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmdlc3R1cmU8L21kLWljb24+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlxcbicgK1xuICAgICcgICAgICAgIDxoMz48c2lnbmF0dXJlIHZhbHVlPVwicmlza0Fzc2Vzc21lbnQuc2lnbmF0dXJlXCI+PC9zaWduYXR1cmU+PC9oMz5cXG4nICtcbiAgICAnICAgICAgICA8cD5SaXNrIEFzc2Vzc21lbnQgc2lnbmF0dXJlPC9wPlxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPC9tZC1saXN0PlxcbicgK1xuICAgICcnKTtcbn1dKTtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLnJpc2stYXNzZXNzbWVudCcsIFsnd2ZtLmNvcmUubWVkaWF0b3InLCByZXF1aXJlKCdmaC13Zm0tc2lnbmF0dXJlJyldKVxuXG5yZXF1aXJlKCcuLi8uLi9kaXN0Jyk7XG5cbm5nTW9kdWxlLmRpcmVjdGl2ZSgncmlza0Fzc2Vzc21lbnQnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgbWVkaWF0b3IpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnXG4gICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL3Jpc2stYXNzZXNzbWVudC50cGwuaHRtbCcpXG4gICwgc2NvcGU6IHtcbiAgICAgIHJpc2tBc3Nlc3NtZW50OiBcIj12YWx1ZVwiXG4gICAgfVxuICAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIH1cbiAgLCBjb250cm9sbGVyQXM6ICdjdHJsJ1xuICB9O1xufSlcblxubmdNb2R1bGUuZGlyZWN0aXZlKCdyaXNrQXNzZXNzbWVudEZvcm0nLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgbWVkaWF0b3IpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnXG4gICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL3Jpc2stYXNzZXNzbWVudC1mb3JtLnRwbC5odG1sJylcbiAgLCBzY29wZToge1xuICAgIH1cbiAgLCBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICRzY29wZS5yaXNrQXNzZXNzbWVudFN0ZXAgPSAwXG4gICAgICBzZWxmLm1vZGVsID0ge307XG4gICAgICBzZWxmLmFuc3dlckNvbXBsZXRlID0gZnVuY3Rpb24oZXZlbnQsIGFuc3dlcikge1xuICAgICAgICBzZWxmLm1vZGVsLmNvbXBsZXRlID0gYW5zd2VyO1xuICAgICAgICAkc2NvcGUucmlza0Fzc2Vzc21lbnRTdGVwKys7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfTtcbiAgICAgIHNlbGYuYmFjayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3dmbTp3b3JrZmxvdzpzdGVwOmJhY2snKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgICBzZWxmLmRvbmUgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya2Zsb3c6c3RlcDpkb25lJywgc2VsZi5tb2RlbCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfTtcbiAgICB9XG4gICwgY29udHJvbGxlckFzOiAnY3RybCdcbiAgfTtcbn0pXG47XG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS5yaXNrLWFzc2Vzc21lbnQnO1xuIiwicmVxdWlyZSgnLi9zaWduYXR1cmUtZm9ybS50cGwuaHRtbC5qcycpO1xucmVxdWlyZSgnLi9zaWduYXR1cmUudHBsLmh0bWwuanMnKTtcbiIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS5zaWduYXR1cmUnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLnNpZ25hdHVyZScsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvc2lnbmF0dXJlLWZvcm0udHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnPGRpdiBjbGFzcz1cInNpZ25hdHVyZS1mb3JtXCI+XFxuJyArXG4gICAgJyAgPGNhbnZhcyB0YWJpbmRleD1cIjBcIj48L2NhbnZhcz5cXG4nICtcbiAgICAnPC9kaXY+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLnNpZ25hdHVyZScpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0uc2lnbmF0dXJlJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS9zaWduYXR1cmUudHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnPGltZyBuZy1zcmM9XCJ7e2N0cmwuc2lnbmF0dXJlfX1cIj48L2ltZz5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGNhbnZhc0RyYXdyID0gcmVxdWlyZSgnLi4vY2FudmFzLWRyYXdyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS5zaWduYXR1cmUnO1xuXG52YXIgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLnNpZ25hdHVyZScsIFsnd2ZtLmNvcmUubWVkaWF0b3InXSlcblxucmVxdWlyZSgnLi4vLi4vZGlzdCcpO1xuXG5uZ01vZHVsZS5kaXJlY3RpdmUoJ3NpZ25hdHVyZUZvcm0nLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgJGRvY3VtZW50LCAkdGltZW91dCwgbWVkaWF0b3IpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnXG4gICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL3NpZ25hdHVyZS1mb3JtLnRwbC5odG1sJylcbiAgLCBzY29wZToge1xuICAgICAgdmFsdWU6ICc9JyxcbiAgICAgIG9wdGlvbnM6ICc9J1xuICAgIH1cbiAgLCBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHNjb3BlLm9wdGlvbnMgfHwge307XG4gICAgICBjb25zb2xlLmxvZygndG91Y2ggc3VwcG9ydCcsICdvbnRvdWNoc3RhcnQnIGluICRkb2N1bWVudFswXSk7XG4gICAgICB2YXIgZHJhd3IgPSAnb250b3VjaHN0YXJ0JyBpbiAkZG9jdW1lbnRbMF1cbiAgICAgICAgPyBuZXcgY2FudmFzRHJhd3IuQ2FudmFzRHJhd3IoZWxlbWVudCwgb3B0aW9ucywgJGRvY3VtZW50KVxuICAgICAgICA6IG5ldyBjYW52YXNEcmF3ci5DYW52YXNEcmF3ck1vdXNlKGVsZW1lbnQsIG9wdGlvbnMsICRkb2N1bWVudCk7XG5cbiAgICAgIHZhciAkY2FudmFzID0gYW5ndWxhci5lbGVtZW50KGVsZW1lbnRbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpWzBdKTtcbiAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAkY2FudmFzLm9uKCdibHVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY3RybC5zdWJtaXQoZWxlbWVudCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgIH1cbiAgLCBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHNlbGYuc3VibWl0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICB2YXIgY2FudmFzID0gZWxlbWVudFswXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJylbMF07XG4gICAgICAgICRzY29wZS52YWx1ZSA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgIH1cbiAgICB9XG4gICwgY29udHJvbGxlckFzOiAnY3RybCdcbiAgfTtcbn0pXG5cbm5nTW9kdWxlLmRpcmVjdGl2ZSgnc2lnbmF0dXJlJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnXG4gICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL3NpZ25hdHVyZS50cGwuaHRtbCcpXG4gICwgc2NvcGU6IHtcbiAgICAgIHZhbHVlOiAnPSdcbiAgICB9XG4gICwgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLnNpZ25hdHVyZSA9ICRzY29wZS52YWx1ZTtcbiAgICB9XG4gICwgY29udHJvbGxlckFzOiAnY3RybCdcbiAgfTtcbn0pXG47XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIENhbnZhc0RyYXdyTW91c2UgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICB2YXIgY2FudmFzID0gZWxlbWVudFswXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJylbMF07XG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBjYW52YXMuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gIGNhbnZhcy53aWR0aCA9ICh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gIGNhbnZhcy5oZWlnaHQgPSAyMDA7XG4gIGNhbnZhcy5zdHlsZS53aWR0aCA9ICcnO1xuXG4gIC8vIHNldCBwcm9wcyBmcm9tIG9wdGlvbnMsIGJ1dCB0aGUgZGVmYXVsdHMgYXJlIGZvciB0aGUgY29vbCBraWRzXG4gIGN0eC5saW5lV2lkdGggPSBvcHRpb25zLnNpemUgfHwgNTtcbiAgY3R4LmxpbmVDYXAgPSBvcHRpb25zLmxpbmVDYXAgfHwgXCJyb3VuZFwiO1xuICBvcHRpb25zLmNvbG9yID0gb3B0aW9ucy5jb2xvciB8fCAnYmx1ZSc7XG5cbiAgLy8gbGFzdCBrbm93biBwb3NpdGlvblxuICB2YXIgcG9zID0geyB4OiAwLCB5OiAwIH07XG5cbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRyYXcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2V0UG9zaXRpb24pO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3ApO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBzdG9wKTtcblxuICAvLyBuZXcgcG9zaXRpb24gZnJvbSBtb3VzZSBldmVudFxuICBmdW5jdGlvbiBzZXRQb3NpdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY2FudmFzLmZvY3VzKCk7XG4gICAgdmFyIHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIG9mZnNldCA9IHtcbiAgICAgIHRvcDogcmVjdC50b3AsXG4gICAgICBsZWZ0OiByZWN0LmxlZnRcbiAgICB9O1xuICAgIHBvcy54ID0gZS5jbGllbnRYIC0gb2Zmc2V0LmxlZnQ7XG4gICAgcG9zLnkgPSBlLmNsaWVudFkgLSBvZmZzZXQudG9wO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhdyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgLy8gbW91c2UgbGVmdCBidXR0b24gbXVzdCBiZSBwcmVzc2VkXG4gICAgaWYgKGUuYnV0dG9ucyAhPT0gMSkgcmV0dXJuO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpOyAvLyBiZWdpblxuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gb3B0aW9ucy5jb2xvcjtcblxuICAgIGN0eC5tb3ZlVG8ocG9zLngsIHBvcy55KTsgLy8gZnJvbVxuXG4gICAgdmFyIHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIG9mZnNldCA9IHtcbiAgICAgIHRvcDogcmVjdC50b3AsXG4gICAgICBsZWZ0OiByZWN0LmxlZnRcbiAgICB9O1xuICAgIHBvcy54ID0gZS5jbGllbnRYIC0gb2Zmc2V0LmxlZnQ7XG4gICAgcG9zLnkgPSBlLmNsaWVudFkgLSBvZmZzZXQudG9wO1xuICAgIGN0eC5saW5lVG8ocG9zLngsIHBvcy55KTsgLy8gdG9cblxuICAgIGN0eC5zdHJva2UoKTsgLy8gZHJhdyBpdCFcblxuICB9XG5cbiAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBjYW52YXMuYmx1cigpO1xuICB9XG59O1xuXG52YXIgQ2FudmFzRHJhd3IgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zLCAkZG9jdW1lbnQpIHtcbiAgdmFyIGNhbnZhcyA9IGVsZW1lbnRbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpWzBdO1xuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGNhbnZhcy5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICBjYW52YXMud2lkdGggPSBjYW52YXMub2Zmc2V0V2lkdGg7XG4gIGNhbnZhcy5zdHlsZS53aWR0aCA9ICcnO1xuXG4gIC8vIHNldCBwcm9wcyBmcm9tIG9wdGlvbnMsIGJ1dCB0aGUgZGVmYXVsdHMgYXJlIGZvciB0aGUgY29vbCBraWRzXG4gIGN0eC5saW5lV2lkdGggPSBvcHRpb25zLnNpemUgfHwgNTtcbiAgY3R4LmxpbmVDYXAgPSBvcHRpb25zLmxpbmVDYXAgfHwgJ3JvdW5kJztcbiAgb3B0aW9ucy5jb2xvciA9IG9wdGlvbnMuY29sb3IgfHwgJ2JsdWUnO1xuICBjdHgucFggPSB1bmRlZmluZWQ7XG4gIGN0eC5wWSA9IHVuZGVmaW5lZDtcblxuICB2YXIgbGluZXMgPSBbLCxdO1xuICB2YXIgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICB2YXIgb2Zmc2V0ID0ge1xuICAgIHRvcDogcmVjdC50b3AgKyAkZG9jdW1lbnRbMF0uYm9keS5zY3JvbGxUb3AsXG4gICAgbGVmdDogcmVjdC5sZWZ0ICsgJGRvY3VtZW50WzBdLmJvZHkuc2Nyb2xsTGVmdFxuICB9O1xuXG4gIHZhciBzZWxmID0ge1xuICAgIC8vYmluZCBjbGljayBldmVudHNcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIHVzZSBhbmd1bGVyLmVsZW1lbnQjb24gZm9yIGF1dG9tYXRpYyBsaXN0ZW5lciBjbGVhbnVwXG4gICAgICB2YXIgY2FudmFzTmcgPSBhbmd1bGFyLmVsZW1lbnQoY2FudmFzKTtcbiAgICAgIC8vc2V0IHBYIGFuZCBwWSBmcm9tIGZpcnN0IGNsaWNrXG4gICAgICBjYW52YXNOZy5vbigndG91Y2hzdGFydCcsIHNlbGYucHJlRHJhdyk7XG4gICAgICBjYW52YXNOZy5vbigndG91Y2htb3ZlJywgc2VsZi5kcmF3KTtcbiAgICAgIGNhbnZhc05nLm9uKCd0b3VjaGVuZCcsIHNlbGYuc3RvcCk7XG4gICAgICBjYW52YXNOZy5vbigndG91Y2hjYW5jZWwnLCBzZWxmLnN0b3ApO1xuICAgIH0sXG5cbiAgICBwcmVEcmF3OiBmdW5jdGlvbihldmVudCkge1xuICAgICAgY2FudmFzLmZvY3VzKCk7XG4gICAgICByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgb2Zmc2V0ID0ge1xuICAgICAgICB0b3A6IHJlY3QudG9wICsgJGRvY3VtZW50WzBdLmJvZHkuc2Nyb2xsVG9wLFxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyAkZG9jdW1lbnRbMF0uYm9keS5zY3JvbGxMZWZ0XG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50LnRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHRvdWNoID0gZXZlbnQudG91Y2hlc1tpXTtcbiAgICAgICAgdmFyIGlkICAgICAgPSB0b3VjaC5pZGVudGlmaWVyO1xuXG4gICAgICAgIGxpbmVzW2lkXSA9IHtcbiAgICAgICAgICB4ICAgICA6IHRvdWNoLnBhZ2VYIC0gb2Zmc2V0LmxlZnQsXG4gICAgICAgICAgeSAgICAgOiB0b3VjaC5wYWdlWSAtIG9mZnNldC50b3AsXG4gICAgICAgICAgY29sb3IgOiBvcHRpb25zLmNvbG9yXG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgfSxcblxuICAgIGRyYXc6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50LnRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHRvdWNoID0gZXZlbnQudG91Y2hlc1tpXTtcbiAgICAgICAgdmFyIGlkID0gdG91Y2guaWRlbnRpZmllcixcblxuICAgICAgICBtb3ZlWCA9IHRvdWNoLnBhZ2VYIC0gb2Zmc2V0LmxlZnQgLSBsaW5lc1tpZF0ueCxcbiAgICAgICAgbW92ZVkgPSB0b3VjaC5wYWdlWSAtIG9mZnNldC50b3AgLSBsaW5lc1tpZF0ueTtcblxuICAgICAgICB2YXIgcmV0ID0gc2VsZi5tb3ZlKGlkLCBtb3ZlWCwgbW92ZVkpO1xuICAgICAgICBsaW5lc1tpZF0ueCA9IHJldC54O1xuICAgICAgICBsaW5lc1tpZF0ueSA9IHJldC55O1xuICAgICAgfTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9LFxuXG4gICAgbW92ZTogZnVuY3Rpb24oaSwgY2hhbmdlWCwgY2hhbmdlWSkge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gbGluZXNbaV0uY29sb3I7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKGxpbmVzW2ldLngsIGxpbmVzW2ldLnkpO1xuXG4gICAgICBjdHgubGluZVRvKGxpbmVzW2ldLnggKyBjaGFuZ2VYLCBsaW5lc1tpXS55ICsgY2hhbmdlWSk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgIHJldHVybiB7IHg6IGxpbmVzW2ldLnggKyBjaGFuZ2VYLCB5OiBsaW5lc1tpXS55ICsgY2hhbmdlWSB9O1xuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIGNhbnZhcy5ibHVyKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBzZWxmLmluaXQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENhbnZhc0RyYXdyOiBDYW52YXNEcmF3cixcbiAgQ2FudmFzRHJhd3JNb3VzZTogQ2FudmFzRHJhd3JNb3VzZVxufTtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3luYyA9IHJlcXVpcmUoJy4uL2NsaWVudCcpXG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS5zeW5jLnNlcnZpY2UnO1xuXG5hbmd1bGFyLm1vZHVsZSgnd2ZtLnN5bmMuc2VydmljZScsIFtdKVxuXG4uZmFjdG9yeSgnc3luY1NlcnZpY2UnLCBmdW5jdGlvbigkcSkge1xuICB2YXIgc3luY1NlcnZpY2UgPSB7fTtcbiAgdmFyIG1hbmFnZXJQcm9taXNlO1xuXG4gIGZ1bmN0aW9uIE1hbmFnZXJXcmFwcGVyKF9tYW5hZ2VyKSB7XG4gICAgdGhpcy5tYW5hZ2VyID0gX21hbmFnZXI7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIG1ldGhvZE5hbWVzID0gWydjcmVhdGUnLCAncmVhZCcsICd1cGRhdGUnLCAnZGVsZXRlJywgJ2xpc3QnLCAnc3RhcnQnLCAnc3RvcCcsICdzYWZlU3RvcCcsICdnZXRRdWV1ZVNpemUnLCAnZm9yY2VTeW5jJywgJ3dhaXRGb3JTeW5jJ107XG4gICAgbWV0aG9kTmFtZXMuZm9yRWFjaChmdW5jdGlvbihtZXRob2ROYW1lKSB7XG4gICAgICBzZWxmW21ldGhvZE5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAkcS53aGVuKHNlbGYubWFuYWdlclttZXRob2ROYW1lXS5hcHBseShzZWxmLm1hbmFnZXIsIGFyZ3VtZW50cykpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHN5bmNTZXJ2aWNlLmluaXQgPSBmdW5jdGlvbigkZmgsIHN5bmNPcHRpb25zKSB7XG4gICAgc3luYy5pbml0KCRmaCwgc3luY09wdGlvbnMpO1xuICB9XG5cbiAgc3luY1NlcnZpY2UubWFuYWdlID0gZnVuY3Rpb24oZGF0YXNldElkLCBvcHRpb25zLCBxdWVyeVBhcmFtcywgbWV0YURhdGEpIHtcbiAgICByZXR1cm4gJHEud2hlbihzeW5jLm1hbmFnZShkYXRhc2V0SWQsIG9wdGlvbnMsIHF1ZXJ5UGFyYW1zLCBtZXRhRGF0YSkpXG4gICAgLnRoZW4oZnVuY3Rpb24oX21hbmFnZXIpIHtcbiAgICAgIHZhciBtYW5hZ2VyID0gbmV3IE1hbmFnZXJXcmFwcGVyKF9tYW5hZ2VyKTtcbiAgICAgIG1hbmFnZXIuc3RyZWFtID0gX21hbmFnZXIuc3RyZWFtO1xuICAgICAgcmV0dXJuIG1hbmFnZXI7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHN5bmNTZXJ2aWNlO1xufSlcbjtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpXG4gICwgcSA9IHJlcXVpcmUoJ3EnKVxuICAsIGRlZmF1bHRDb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpXG4gICwgUnggPSByZXF1aXJlKCdyeCcpXG4gIDtcblxudmFyICRmaCwgaW5pdGlhbGl6ZWQgPSBmYWxzZSwgbm90aWZpY2F0aW9uU3RyZWFtLCBsaXN0ZW5lcnMgPSBbXTtcblxuZnVuY3Rpb24gdHJhbnNmb3JtRGF0YVNldChzeW5jRGF0YSkge1xuICB2YXIgcmVzdWx0ID0gXy52YWx1ZXMoc3luY0RhdGEpLm1hcChmdW5jdGlvbihzeW5jRGF0YSkge1xuICAgIHJldHVybiBzeW5jRGF0YS5kYXRhO1xuICB9KTtcbiAgcmV0dXJuIF8uc29ydEJ5KHJlc3VsdCwgZnVuY3Rpb24obykgeyByZXR1cm4gby5pZDsgfSk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKGNvZGUsIG1zZykge1xuICB2YXIgZXJyb3IgPSAnRXJyb3InO1xuICBpZiAoY29kZSAmJiBtc2cpIHtcbiAgICBlcnJvciArPSAnICcgKyBjb2RlICsgJzogJyArIG1zZztcbiAgfSBlbHNlIGlmIChjb2RlICYmICFtc2cpIHtcbiAgICBlcnJvciArPSAnOiAnICsgY29kZTtcbiAgfSBlbHNlIGlmICghY29kZSAmJiBtc2cpIHtcbiAgICBlcnJvciArPSAnOiAnICsgbXNnO1xuICB9IGVsc2Uge1xuICAgIGVycm9yICs9ICc6IG5vIGVycm9yIGRldGFpbHMgYXZhaWxhYmxlJ1xuICB9XG4gIHJldHVybiBlcnJvcjtcbn1cblxuZnVuY3Rpb24gaW5pdChfJGZoLCBfc3luY09wdGlvbnMpIHtcbiAgaWYgKGluaXRpYWxpemVkKSB7XG4gICAgY29uc29sZS5sb2coJ3N5bmMtY2xpZW50IGFscmVhZHkgaW5pdGFsaXplZC4nKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnc3luYy1jbGllbnQgaW5pdGFsaXppbmcuJyk7XG4gICAgJGZoID0gXyRmaDtcbiAgICBub3RpZmljYXRpb25TdHJlYW0gPSBSeC5PYnNlcnZhYmxlLmNyZWF0ZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIGFkZExpc3RlbmVyKGZ1bmN0aW9uKG5vdGlmaWNhdGlvbikge1xuICAgICAgICBvYnNlcnZlci5vbk5leHQobm90aWZpY2F0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLnNoYXJlKCk7XG4gICAgdmFyIHN5bmNPcHRpb25zID0gXy5kZWZhdWx0cyhfc3luY09wdGlvbnMsIGRlZmF1bHRDb25maWcuc3luY09wdGlvbnMpO1xuXG4gICAgJGZoLnN5bmMuaW5pdChzeW5jT3B0aW9ucyk7XG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICRmaC5zeW5jLm5vdGlmeShmdW5jdGlvbihub3RpZmljYXRpb24pIHtcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVyLmNhbGwodW5kZWZpbmVkLCBub3RpZmljYXRpb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIG1hbmFnZShkYXRhc2V0SWQsIG9wdGlvbnMsIHF1ZXJ5UGFyYW1zLCBtZXRhRGF0YSkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIGlmICghaW5pdGlhbGl6ZWQpIHtcbiAgICBkZWZlcnJlZC5yZXNvbHZlKCdTeW5jIG5vdCB5ZXQgaW5pdGlhbGl6ZWQuICBDYWxsIHN5bmMtY2xpZW50LmluaXQoKSBmaXJzdC4nKTtcbiAgfSBlbHNlIHtcbiAgICAvL21hbmFnZSB0aGUgZGF0YVNldFxuICAgICRmaC5zeW5jLm1hbmFnZShkYXRhc2V0SWQsIG9wdGlvbnMsIHF1ZXJ5UGFyYW1zLCBtZXRhRGF0YSwgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbWFuYWdlciA9IG5ldyBEYXRhTWFuYWdlcihkYXRhc2V0SWQpO1xuICAgICAgbWFuYWdlci5zdHJlYW0gPSBub3RpZmljYXRpb25TdHJlYW0uZmlsdGVyKGZ1bmN0aW9uKG5vdGlmaWNhdGlvbikge1xuICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9uLmRhdGFzZXRfaWQgPT0gZGF0YXNldElkO1xuICAgICAgfSlcbiAgICAgIGRlZmVycmVkLnJlc29sdmUobWFuYWdlcik7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gRGF0YU1hbmFnZXIoZGF0YXNldElkKSB7XG4gIHRoaXMuZGF0YXNldElkID0gZGF0YXNldElkO1xufVxuXG5EYXRhTWFuYWdlci5wcm90b3R5cGUubGlzdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gICRmaC5zeW5jLmRvTGlzdCh0aGlzLmRhdGFzZXRJZCwgZnVuY3Rpb24ocmVzKSB7XG4gICAgdmFyIG9iamVjdHMgPSB0cmFuc2Zvcm1EYXRhU2V0KHJlcyk7XG4gICAgZGVmZXJyZWQucmVzb2x2ZShvYmplY3RzKTtcbiAgfSwgZnVuY3Rpb24oY29kZSwgbXNnKSB7XG4gICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihmb3JtYXRFcnJvcihjb2RlLCBtc2cpKSk7XG4gIH0pO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbkRhdGFNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gICRmaC5zeW5jLmRvQ3JlYXRlKHNlbGYuZGF0YXNldElkLCBvYmplY3QsIGZ1bmN0aW9uKG1zZykge1xuICAgIC8vIHN1Y2Nlc3NcbiAgICBzZWxmLnN0cmVhbS5maWx0ZXIoZnVuY3Rpb24obm90aWZpY2F0aW9uKSB7XG4gICAgICByZXR1cm4gbm90aWZpY2F0aW9uLmNvZGUgPT0gJ2xvY2FsX3VwZGF0ZV9hcHBsaWVkJ1xuICAgICAgICAmJiBub3RpZmljYXRpb24ubWVzc2FnZSA9PSAnY3JlYXRlJ1xuICAgICAgICA7IC8vICYmIG5vdGlmaWNhdGlvbi51aWQgPT0gb2JqZWN0Ll9sb2NhbHVpZDsgIFRPRE86IGdldCB0aGUgc3luYyBmcmFtZXdvcmsgdG8gaW5jbHVkZSB0aGUgdGVtcG9yYXJ5IHVpZCBpbiB0aGUgbm90aWZpY2F0aW9uXG4gICAgfSkudGFrZSgxKS50b1Byb21pc2UocS5Qcm9taXNlKVxuICAgIC50aGVuKGZ1bmN0aW9uKG5vdGlmaWNhdGlvbikge1xuICAgICAgb2JqZWN0Ll9sb2NhbHVpZCA9IG1zZy51aWQ7XG4gICAgICByZXR1cm4gc2VsZi51cGRhdGUob2JqZWN0KTtcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuICAgIH0pXG4gIH0sIGZ1bmN0aW9uKGNvZGUsIG1zZykge1xuICAgIC8vIGZhaWx1cmVcbiAgICBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKGZvcm1hdEVycm9yKGNvZGUsIG1zZykpKTtcbiAgfSk7XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuRGF0YU1hbmFnZXIucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbihpZCkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gICRmaC5zeW5jLmRvUmVhZCh0aGlzLmRhdGFzZXRJZCwgaWQsIGZ1bmN0aW9uKHJlcykge1xuICAgIC8vIHN1Y2Nlc3NcbiAgICBkZWZlcnJlZC5yZXNvbHZlKHJlcy5kYXRhKTtcbiAgfSwgZnVuY3Rpb24oY29kZSwgbXNnKSB7XG4gICAgLy8gZmFpbHVyZVxuICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoZm9ybWF0RXJyb3IoY29kZSwgbXNnKSkpO1xuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG5EYXRhTWFuYWdlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgdWlkUHJvbWlzZSA9IF8uaGFzKG9iamVjdCwgJ2lkJylcbiAgICA/IHEud2hlbihTdHJpbmcob2JqZWN0LmlkKSlcbiAgICA6IHNlbGYucmVhZChvYmplY3QuX2xvY2FsdWlkKS50aGVuKGZ1bmN0aW9uKF9vYmplY3QpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdfb2JqZWN0JywgX29iamVjdClcbiAgICAgIGlmIChfLmhhcyhfb2JqZWN0LCAnaWQnKSkge1xuICAgICAgICBvYmplY3QuaWQgPSBfb2JqZWN0LmlkO1xuICAgICAgICByZXR1cm4gU3RyaW5nKF9vYmplY3QuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdC5fbG9jYWx1aWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIHVpZFByb21pc2UudGhlbihmdW5jdGlvbih1aWQpIHtcbiAgICBjb25zb2xlLmxvZygndXBkYXRpbmcgd2l0aCBpZCcsIHVpZClcbiAgJGZoLnN5bmMuZG9VcGRhdGUoc2VsZi5kYXRhc2V0SWQsIHVpZCwgb2JqZWN0LCBmdW5jdGlvbihtc2cpIHtcbiAgICAvLyBzdWNjZXNzXG4gICAgc2VsZi5zdHJlYW0uZmlsdGVyKGZ1bmN0aW9uKG5vdGlmaWNhdGlvbikge1xuICAgICAgcmV0dXJuIG5vdGlmaWNhdGlvbi5jb2RlID09PSAnbG9jYWxfdXBkYXRlX2FwcGxpZWQnXG4gICAgICAgICYmIG5vdGlmaWNhdGlvbi5tZXNzYWdlID09PSAndXBkYXRlJ1xuICAgICAgICAmJiBub3RpZmljYXRpb24udWlkID09PSB1aWQ7XG4gICAgfSkudGFrZSgxKS50b1Byb21pc2UocS5Qcm9taXNlKVxuICAgIC50aGVuKGZ1bmN0aW9uKG5vdGlmaWNhdGlvbikge1xuICAgICAgcmV0dXJuIHNlbGYucmVhZCh1aWQpO1xuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICBjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KVxuICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuICAgIH0pXG4gIH0sIGZ1bmN0aW9uKGNvZGUsIG1zZykge1xuICAgIC8vIGZhaWx1cmVcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZycsIG9iamVjdCk7XG4gICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihmb3JtYXRFcnJvcihjb2RlLCBtc2cpKSk7XG4gIH0pO1xufSk7XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuRGF0YU1hbmFnZXIucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgJGZoLnN5bmMuZG9EZWxldGUoc2VsZi5kYXRhc2V0SWQsIG9iamVjdC5pZCwgZnVuY3Rpb24ocmVzKSB7XG4gICAgLy8gc3VjY2Vzc1xuICAgIHZhciB1aWQgPSBTdHJpbmcob2JqZWN0LmlkKTtcbiAgICBzZWxmLnN0cmVhbS5maWx0ZXIoZnVuY3Rpb24obm90aWZpY2F0aW9uKSB7XG4gICAgICByZXR1cm4gbm90aWZpY2F0aW9uLmNvZGUgPT09ICdsb2NhbF91cGRhdGVfYXBwbGllZCdcbiAgICAgICAgJiYgbm90aWZpY2F0aW9uLm1lc3NhZ2UgPT09ICdkZWxldGUnXG4gICAgICAgICYmIFN0cmluZyhub3RpZmljYXRpb24udWlkKSA9PT0gdWlkO1xuICAgIH0pLnRha2UoMSkudG9Qcm9taXNlKHEuUHJvbWlzZSlcbiAgICAudGhlbihmdW5jdGlvbihub3RpZmljYXRpb24pIHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUobm90aWZpY2F0aW9uLm1lc3NhZ2UpO1xuICAgIH0pXG4gIH0sIGZ1bmN0aW9uKGNvZGUsIG1zZykge1xuICAgIC8vIGZhaWx1cmVcbiAgICBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKGZvcm1hdEVycm9yKGNvZGUsIG1zZykpKTtcbiAgfSk7XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuRGF0YU1hbmFnZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgJGZoLnN5bmMuc3RhcnRTeW5jKHRoaXMuZGF0YXNldElkLCBmdW5jdGlvbigpe1xuICAgIGRlZmVycmVkLnJlc29sdmUoJ3N5bmMgbG9vcCBzdGFydGVkJyk7XG4gIH0sIGZ1bmN0aW9uKGVycm9yKXtcbiAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG5EYXRhTWFuYWdlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgJGZoLnN5bmMuc3RvcFN5bmModGhpcy5kYXRhc2V0SWQsIGZ1bmN0aW9uKCl7XG4gICAgaWYgKHNlbGYucmVjb3JkRGVsdGFSZWNlaXZlZFN1YnNjcmlwdGlvbikge1xuICAgICAgc2VsZi5yZWNvcmREZWx0YVJlY2VpdmVkU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgZGVmZXJyZWQucmVzb2x2ZSgnc3luYyBsb29wIHN0b3BwZWQnKTtcbiAgfSwgZnVuY3Rpb24oZXJyb3Ipe1xuICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG4gIH0pO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbkRhdGFNYW5hZ2VyLnByb3RvdHlwZS5mb3JjZVN5bmMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICAkZmguc3luYy5mb3JjZVN5bmModGhpcy5kYXRhc2V0SWQsIGZ1bmN0aW9uKCl7XG4gICAgZGVmZXJyZWQucmVzb2x2ZSgnc3luYyBsb29wIHdpbGwgcnVuJyk7XG4gIH0sIGZ1bmN0aW9uKGVycm9yKXtcbiAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG5EYXRhTWFuYWdlci5wcm90b3R5cGUuZ2V0UXVldWVTaXplID0gZnVuY3Rpb24oKSB7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgJGZoLnN5bmMuZ2V0UGVuZGluZyh0aGlzLmRhdGFzZXRJZCwgZnVuY3Rpb24ocGVuZGluZykge1xuICAgIGRlZmVycmVkLnJlc29sdmUoXy5zaXplKHBlbmRpbmcpKTtcbiAgfSk7XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufVxuXG5EYXRhTWFuYWdlci5wcm90b3R5cGUuc2FmZVN0b3AgPSBmdW5jdGlvbih1c2VyT3B0aW9ucykge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0aW1lb3V0OiAyMDAwXG4gIH1cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgb3B0aW9ucyA9IF8uZGVmYXVsdHModXNlck9wdGlvbnMsIGRlZmF1bHRPcHRpb25zKTtcbiAgc2VsZi5nZXRRdWV1ZVNpemUoKVxuICAudGhlbihmdW5jdGlvbihzaXplKSB7XG4gICAgaWYgKHNpemUgPT09IDApIHtcbiAgICAgIHNlbGYuc3RvcCgpLnRoZW4oZGVmZXJyZWQucmVzb2x2ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmVycmVkLm5vdGlmeSgnQ2FsbGluZyBmb3JjZVN5bmMgc3luYyBiZWZvcmUgc3RvcCcpO1xuICAgICAgcmV0dXJuIHNlbGYuZm9yY2VTeW5jKClcbiAgICAgIC50aGVuKHNlbGYud2FpdEZvclN5bmMuYmluZChzZWxmKSlcbiAgICAgIC50aW1lb3V0KG9wdGlvbnMudGltZW91dClcbiAgICAgIC50aGVuKHNlbGYuZ2V0UXVldWVTaXplLmJpbmQoc2VsZikpXG4gICAgICAudGhlbihmdW5jdGlvbihzaXplKSB7XG4gICAgICAgIGlmIChzaXplID4gMCkge1xuICAgICAgICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoJ2ZvcmNlU3luYyBmYWlsZWQsIG91dHN0YW5kaW5nIHJlc3VsdHMgc3RpbGwgcHJlc2VudCcpKTtcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgICAudGhlbihzZWxmLnN0b3AuYmluZChzZWxmKSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKClcbiAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoJ2ZvcmNlU3luYyB0aW1lb3V0JykpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59XG5cbkRhdGFNYW5hZ2VyLnByb3RvdHlwZS53YWl0Rm9yU3luYyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5zdHJlYW0uZmlsdGVyKGZ1bmN0aW9uKG5vdGlmaWNhdGlvbikge1xuICAgIHJldHVybiBub3RpZmljYXRpb24uY29kZSA9PSAnc3luY19jb21wbGV0ZScgfHwgbm90aWZpY2F0aW9uLmNvZGUgPT0gJ3N5bmNfZmFpbGVkJztcbiAgfSkudGFrZSgxKS50b1Byb21pc2UocS5Qcm9taXNlKVxuICAudGhlbihmdW5jdGlvbihub3RpZmljYXRpb24pIHtcbiAgICBpZiAobm90aWZpY2F0aW9uLmNvZGUgPT09ICdzeW5jX2NvbXBsZXRlJykge1xuICAgICAgZGVmZXJyZWQucmVzb2x2ZShub3RpZmljYXRpb24pO1xuICAgIH0gZWxzZSBpZiAobm90aWZpY2F0aW9uLmNvZGUgPT09ICdzeW5jX2ZhaWxlZCcpIHtcbiAgICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoJ1N5bmMgRmFpbGVkJywgbm90aWZpY2F0aW9uKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59XG5cbkRhdGFNYW5hZ2VyLnByb3RvdHlwZS5wdWJsaXNoUmVjb3JkRGVsdGFSZWNlaXZlZCA9IGZ1bmN0aW9uKG1lZGlhdG9yKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5yZWNvcmREZWx0YVJlY2VpdmVkU3Vic2NyaXB0aW9uID0gc2VsZi5zdHJlYW0uZmlsdGVyKGZ1bmN0aW9uKG5vdGlmaWNhdGlvbikge1xuICAgIHJldHVybiBub3RpZmljYXRpb24uY29kZSA9PSAncmVjb3JkX2RlbHRhX3JlY2VpdmVkJ1xuICB9KS5zdWJzY3JpYmUoZnVuY3Rpb24obm90aWZpY2F0aW9uKSB7XG4gICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOnN5bmM6cmVjb3JkX2RlbHRhX3JlY2VpdmVkOicgKyBzZWxmLmRhdGFzZXRJZCwgbm90aWZpY2F0aW9uKTtcbiAgfSlcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0OiBpbml0XG4sIG1hbmFnZTogbWFuYWdlXG4sIGFkZExpc3RlbmVyOiBhZGRMaXN0ZW5lclxufVxuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzeW5jT3B0aW9ucyA6IHtcbiAgICBcInN5bmNfZnJlcXVlbmN5XCIgOiA1LFxuICAgIFwic3RvcmFnZV9zdHJhdGVneVwiOiBcImRvbVwiLFxuICAgIFwiZG9fY29uc29sZV9sb2dcIjogZmFsc2VcbiAgfVxufVxuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLnVzZXIuZGlyZWN0aXZlcycpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0udXNlci5kaXJlY3RpdmVzJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS9ncm91cC1mb3JtLnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJzxtZC10b29sYmFyIGNsYXNzPVwiY29udGVudC10b29sYmFyXCI+XFxuJyArXG4gICAgJyAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItdG9vbHNcIj5cXG4nICtcbiAgICAnICAgIDxoMz5cXG4nICtcbiAgICAnICAgICAgR3JvdXAgI3t7Y3RybC5tb2RlbC5pZH19XFxuJyArXG4gICAgJyAgICA8L2gzPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxzcGFuIGZsZXg+PC9zcGFuPlxcbicgK1xuICAgICcgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgbmctY2xpY2s9XCJjdHJsLnNlbGVjdEdyb3VwKCRldmVudCwgY3RybC5tb2RlbClcIj5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmNsb3NlPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgPC9tZC1idXR0b24+XFxuJyArXG4gICAgJyAgPC9kaXY+XFxuJyArXG4gICAgJzwvbWQtdG9vbGJhcj5cXG4nICtcbiAgICAnPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWZhYlwiIGFyaWEtbGFiZWw9XCJOZXcgZ3JvdXBcIiB1aS1zcmVmPVwiYXBwLmdyb3VwLm5ld1wiPlxcbicgK1xuICAgICcgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5hZGQ8L21kLWljb24+XFxuJyArXG4gICAgJzwvbWQtYnV0dG9uPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGRpdiBjbGFzcz1cIndmbS1tYWluY29sLXNjcm9sbFwiPlxcbicgK1xuICAgICc8Zm9ybSBuYW1lPVwiZ3JvdXBGb3JtXCIgbmctc3VibWl0PVwiY3RybC5kb25lKGdyb3VwRm9ybS4kdmFsaWQpXCIgbm92YWxpZGF0ZSBsYXlvdXQtcGFkZGluZyBsYXlvdXQtbWFyZ2luPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIj5cXG4nICtcbiAgICAnICAgIDxsYWJlbCBmb3I9XCJncm91cG5hbWVcIj5Hcm91cCBOYW1lPC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZ3JvdXBuYW1lXCIgbmFtZT1cImdyb3VwbmFtZVwiIG5nLW1vZGVsPVwiY3RybC5tb2RlbC5uYW1lXCIgcmVxdWlyZWQ+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2VzPVwid29ya29yZGVyRm9ybS5ncm91cG5hbWUuJGVycm9yXCIgbmctaWY9XCJjdHJsLnN1Ym1pdHRlZCB8fCBncm91cEZvcm0uZ3JvdXBuYW1lLiRkaXJ0eVwiPlxcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPkEgbmFtZSBpcyByZXF1aXJlZC48L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIj5cXG4nICtcbiAgICAnICAgIDxsYWJlbCBmb3I9XCJhc3NpZ25lZVwiPlJvbGU8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPG1kLXNlbGVjdCBuZy1tb2RlbD1cImN0cmwubW9kZWwucm9sZVwiIG5hbWU9XCJhc3NpZ25lZVwiIGlkPVwiYXNzaWduZWVcIj5cXG4nICtcbiAgICAnICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCJhZG1pblwiPkFkbWluPC9tZC1vcHRpb24+XFxuJyArXG4gICAgJyAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwibWFuYWdlclwiPk1hbmFnZXI8L21kLW9wdGlvbj5cXG4nICtcbiAgICAnICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCJ3b3JrZXJcIj5Xb3JrZXI8L21kLW9wdGlvbj5cXG4nICtcbiAgICAnICAgICA8L21kLXNlbGVjdD5cXG4nICtcbiAgICAnICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLWJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiPnt7Y3RybC5tb2RlbC5pZCB8fCBjdHJsLm1vZGVsLmlkID09PSAwID8gXFwnVXBkYXRlXFwnIDogXFwnQ3JlYXRlXFwnfX0gR3JvdXA8L21kLWJ1dHRvbj5cXG4nICtcbiAgICAnPC9mb3JtPlxcbicgK1xuICAgICc8L2Rpdj5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0udXNlci5kaXJlY3RpdmVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS51c2VyLmRpcmVjdGl2ZXMnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL2dyb3VwLWxpc3QudHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnPG1kLXRvb2xiYXI+XFxuJyArXG4gICAgJyAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItdG9vbHNcIj5cXG4nICtcbiAgICAnICAgIDxoMz5cXG4nICtcbiAgICAnICAgICAgPHNwYW4+R3JvdXBzPC9zcGFuPlxcbicgK1xuICAgICcgICAgPC9oMz5cXG4nICtcbiAgICAnICA8L2Rpdj5cXG4nICtcbiAgICAnPC9tZC10b29sYmFyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzPVwicGVyc2lzdGVudC1zZWFyY2hcIj5cXG4nICtcbiAgICAnICA8bGFiZWwgZm9yPVwic2VhcmNoXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnNlYXJjaDwvaT48L2xhYmVsPlxcbicgK1xuICAgICcgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBuZy1tb2RlbD1cInNlYXJjaFZhbHVlXCIgbmctY2hhbmdlPVwiY3RybC5hcHBseUZpbHRlcihzZWFyY2hWYWx1ZSlcIj5cXG4nICtcbiAgICAnPC9mb3JtPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPG1kLWxpc3Q+XFxuJyArXG4gICAgJyAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTItbGluZVwiIG5nLWNsaWNrPVwiY3RybC5zZWxlY3RHcm91cCgkZXZlbnQsIGdyb3VwKVwiIG5nLXJlcGVhdD1cImdyb3VwIGluIGN0cmwuZ3JvdXBzXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBjdHJsLnNlbGVjdGVkLmlkID09PSBncm91cC5pZH1cIj5cXG4nICtcbiAgICAnICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlxcbicgK1xuICAgICcgICAgICA8aDM+e3tncm91cC5uYW1lfX08L2gzPlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJyAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJzwvbWQtbGlzdD5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0udXNlci5kaXJlY3RpdmVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS51c2VyLmRpcmVjdGl2ZXMnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL2dyb3VwLnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJzxtZC1saXN0PlxcbicgK1xuICAgICcgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmVcIiA+XFxuJyArXG4gICAgJyAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+Z3JvdXA8L21kLWljb24+XFxuJyArXG4gICAgJyAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgPGgzPnt7Y3RybC5ncm91cC5pZH19PC9oMz5cXG4nICtcbiAgICAnICAgICAgPHA+R3JvdXAgaWQ8L3A+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4nICtcbiAgICAnICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTItbGluZVwiID5cXG4nICtcbiAgICAnICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5ncm91cDwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlxcbicgK1xuICAgICcgICAgICA8aDM+e3tjdHJsLmdyb3VwLm5hbWV9fTwvaDM+XFxuJyArXG4gICAgJyAgICAgIDxwPkdyb3VwIG5hbWU8L3A+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4nICtcbiAgICAnICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTItbGluZVwiID5cXG4nICtcbiAgICAnICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5ncm91cDwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlxcbicgK1xuICAgICcgICAgICA8aDM+e3tjdHJsLmdyb3VwLnJvbGV9fTwvaDM+XFxuJyArXG4gICAgJyAgICAgIDxwPlJvbGU8L3A+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4nICtcbiAgICAnICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnPC9tZC1saXN0PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPG1kLXRvb2xiYXIgY2xhc3M9XCJjb250ZW50LXRvb2xiYXJcIj5cXG4nICtcbiAgICAnICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci10b29sc1wiPlxcbicgK1xuICAgICcgICAgPGgzPlxcbicgK1xuICAgICcgICAgICBNZW1iZXJzXFxuJyArXG4gICAgJyAgICA8L2gzPlxcbicgK1xuICAgICcgIDwvZGl2PlxcbicgK1xuICAgICc8L21kLXRvb2xiYXI+XFxuJyArXG4gICAgJzxtZC1saXN0PlxcbicgK1xuICAgICcgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmVcIiBuZy1jbGljaz1cImN0cmwuc2VsZWN0TWVtYmVyKCRldmVudCwgbWVtYmVyKVwiIG5nLXJlcGVhdD1cIm1lbWJlciBpbiBjdHJsLm1lbWJlcnNcIj5cXG4nICtcbiAgICAnICAgIDxpbWcgYWx0PVwidXNlci5uYW1lXCIgbmctc3JjPVwie3ttZW1iZXIuYXZhdGFyfX1cIiBjbGFzcz1cIm1kLWF2YXRhclwiIC8+XFxuJyArXG4gICAgJyAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgPGgzPnt7bWVtYmVyLm5hbWV9fTwvaDM+XFxuJyArXG4gICAgJyAgICAgIDxwPnt7bWVtYmVyLnBvc2l0aW9ufX08L3A+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4nICtcbiAgICAnICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnPC9tZC1saXN0PlxcbicgK1xuICAgICcnKTtcbn1dKTtcbiIsInJlcXVpcmUoJy4vZ3JvdXAtZm9ybS50cGwuaHRtbC5qcycpO1xucmVxdWlyZSgnLi9ncm91cC1saXN0LnRwbC5odG1sLmpzJyk7XG5yZXF1aXJlKCcuL2dyb3VwLnRwbC5odG1sLmpzJyk7XG5yZXF1aXJlKCcuL3dvcmtlci1mb3JtLnRwbC5odG1sLmpzJyk7XG5yZXF1aXJlKCcuL3dvcmtlci1saXN0LnRwbC5odG1sLmpzJyk7XG5yZXF1aXJlKCcuL3dvcmtlci50cGwuaHRtbC5qcycpO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLnVzZXIuZGlyZWN0aXZlcycpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0udXNlci5kaXJlY3RpdmVzJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS93b3JrZXItZm9ybS50cGwuaHRtbCcsXG4gICAgJzwhLS1cXG4nICtcbiAgICAnIENPTkZJREVOVElBTFxcbicgK1xuICAgICcgQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXFxuJyArXG4gICAgJyBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXFxuJyArXG4gICAgJy0tPlxcbicgK1xuICAgICc8bWQtdG9vbGJhciBjbGFzcz1cImNvbnRlbnQtdG9vbGJhclwiPlxcbicgK1xuICAgICcgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXRvb2xzXCI+XFxuJyArXG4gICAgJyAgICA8aDM+XFxuJyArXG4gICAgJyAgICAgIFdvcmtlciBJRCB7e2N0cmwubW9kZWwuaWR9fVxcbicgK1xuICAgICcgICAgPC9oMz5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8c3BhbiBmbGV4Pjwvc3Bhbj5cXG4nICtcbiAgICAnICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIG5nLWNsaWNrPVwiY3RybC5zZWxlY3RXb3JrZXIoJGV2ZW50LCBjdHJsLm1vZGVsKVwiPlxcbicgK1xuICAgICcgICAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+Y2xvc2U8L21kLWljb24+XFxuJyArXG4gICAgJyAgICA8L21kLWJ1dHRvbj5cXG4nICtcbiAgICAnICA8L2Rpdj5cXG4nICtcbiAgICAnPC9tZC10b29sYmFyPlxcbicgK1xuICAgICc8bWQtYnV0dG9uIGNsYXNzPVwibWQtZmFiXCIgYXJpYS1sYWJlbD1cIk5ldyBXb3Jrb3JkZXJcIiB1aS1zcmVmPVwiYXBwLndvcmtlci5uZXdcIj5cXG4nICtcbiAgICAnICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+YWRkPC9tZC1pY29uPlxcbicgK1xuICAgICc8L21kLWJ1dHRvbj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxkaXYgY2xhc3M9XCJ3Zm0tbWFpbmNvbC1zY3JvbGxcIj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxmb3JtIG5hbWU9XCJ3b3JrZXJGb3JtXCIgbmctc3VibWl0PVwiY3RybC5kb25lKHdvcmtlckZvcm0uJHZhbGlkKVwiIG5vdmFsaWRhdGUgbGF5b3V0LXBhZGRpbmcgbGF5b3V0LW1hcmdpbj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCI+XFxuJyArXG4gICAgJyAgICA8bGFiZWwgZm9yPVwid29ya2VybmFtZVwiPldvcmtlciBOYW1lPC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwid29ya2VybmFtZVwiIG5hbWU9XCJ3b3JrZXJuYW1lXCIgbmctbW9kZWw9XCJjdHJsLm1vZGVsLm5hbWVcIiByZXF1aXJlZD5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZXM9XCJ3b3JrZXJGb3JtLndvcmtlcm5hbWUuJGVycm9yXCIgbmctaWY9XCJjdHJsLnN1Ym1pdHRlZCB8fCB3b3JrZXJGb3JtLndvcmtlcm5hbWUuJGRpcnR5XCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+QSBuYW1lIGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiPlxcbicgK1xuICAgICcgICAgPGxhYmVsIGZvcj1cIndvcmtlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XFxuJyArXG4gICAgJyAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgbmctbW9kZWw9XCJjdHJsLm1vZGVsLnVzZXJuYW1lXCIgcmVxdWlyZWQ+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2VzPVwid29ya2VyRm9ybS51c2VybmFtZS4kZXJyb3JcIiBuZy1pZj1cImN0cmwuc3VibWl0dGVkIHx8IHdvcmtlckZvcm0udXNlcm5hbWUuJGRpcnR5XCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+QSB1c2VybmFtZSBpcyByZXF1aXJlZC48L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIj5cXG4nICtcbiAgICAnICAgIDxsYWJlbCBmb3I9XCJ3b3JrZXJuYW1lXCI+QmFubmVyPC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYmFubmVyXCIgbmFtZT1cImJhbm5lclwiIG5nLW1vZGVsPVwiY3RybC5tb2RlbC5iYW5uZXJcIj5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZXM9XCJ3b3JrZXJGb3JtLmJhbm5lci4kZXJyb3JcIiBuZy1pZj1cImN0cmwuc3VibWl0dGVkIHx8IHdvcmtlckZvcm0uYmFubmVyLiRkaXJ0eVwiPjwvZGl2PlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIj5cXG4nICtcbiAgICAnICAgIDxsYWJlbCBmb3I9XCJ3b3JrZXJuYW1lXCI+QXZhdGFyPC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYXZhdGFyXCIgbmFtZT1cImF2YXRhclwiIG5nLW1vZGVsPVwiY3RybC5tb2RlbC5hdmF0YXJcIj5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZXM9XCJ3b3JrZXJGb3JtLmF2YXRhci4kZXJyb3JcIiBuZy1pZj1cImN0cmwuc3VibWl0dGVkIHx8IHdvcmtlckZvcm0uYXZhdGFyLiRkaXJ0eVwiPjwvZGl2PlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIj5cXG4nICtcbiAgICAnICAgIDxsYWJlbCBmb3I9XCJ3b3JrZXJuYW1lXCI+UGhvbmUgbnVtYmVyPC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicGhvbmVudW1iZXJcIiBuYW1lPVwicGhvbmVudW1iZXJcIiBuZy1tb2RlbD1cImN0cmwubW9kZWwucGhvbmVcIiByZXF1aXJlZD5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZXM9XCJ3b3JrZXJGb3JtLnBob25lbnVtYmVyLiRlcnJvclwiIG5nLWlmPVwiY3RybC5zdWJtaXR0ZWQgfHwgd29ya2VyRm9ybS5waG9uZW51bWJlci4kZGlydHlcIj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5BIHBob25lIG51bWJlciBpcyByZXF1aXJlZC48L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIj5cXG4nICtcbiAgICAnICAgIDxsYWJlbCBmb3I9XCJ3b3JrZXJuYW1lXCI+RW1haWw8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIG5nLW1vZGVsPVwiY3RybC5tb2RlbC5lbWFpbFwiIHJlcXVpcmVkPlxcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlcz1cIndvcmtlckZvcm0uZW1haWwuJGVycm9yXCIgbmctaWY9XCJjdHJsLnN1Ym1pdHRlZCB8fCB3b3JrZXJGb3JtLmVtYWlsLiRkaXJ0eVwiPlxcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPkFuIGVtYWlsIGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiPlxcbicgK1xuICAgICcgICAgPGxhYmVsIGZvcj1cIndvcmtlcm5hbWVcIj5Qb3NpdGlvbjwvbGFiZWw+XFxuJyArXG4gICAgJyAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInBvc2l0aW9uXCIgbmFtZT1cInBvc2l0aW9uXCIgbmctbW9kZWw9XCJjdHJsLm1vZGVsLnBvc2l0aW9uXCIgcmVxdWlyZWQ+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2VzPVwid29ya2VyRm9ybS5wb3NpdGlvbi4kZXJyb3JcIiBuZy1pZj1cImN0cmwuc3VibWl0dGVkIHx8IHdvcmtlckZvcm0ucG9zaXRpb24uJGRpcnR5XCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+QW4gcG9zaXRpb24gaXMgcmVxdWlyZWQuPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCI+XFxuJyArXG4gICAgJyAgICA8bGFiZWwgZm9yPVwiYXNzaWduZWVcIj5Hcm91cDwvbGFiZWw+XFxuJyArXG4gICAgJyAgICA8bWQtc2VsZWN0IG5nLW1vZGVsPVwiY3RybC5tb2RlbC5ncm91cFwiIG5hbWU9XCJncm91cFwiIGlkPVwiZ3JvdXBcIj5cXG4nICtcbiAgICAnICAgICAgIDxtZC1vcHRpb24gbmctcmVwZWF0PVwiZ3JvdXAgaW4gY3RybC5ncm91cHNcIiB2YWx1ZT1cInt7Z3JvdXAuaWR9fVwiPnt7Z3JvdXAubmFtZX19PC9tZC1vcHRpb24+XFxuJyArXG4gICAgJyAgICAgPC9tZC1zZWxlY3Q+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+IFxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8bWQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCI+e3tjdHJsLm1vZGVsLmlkIHx8IGN0cmwubW9kZWwuaWQgPT09IDAgPyBcXCdVcGRhdGVcXCcgOiBcXCdDcmVhdGVcXCd9fSBXb3JrZXI8L21kLWJ1dHRvbj5cXG4nICtcbiAgICAnPC9mb3JtPlxcbicgK1xuICAgICc8L2Rpdj5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0udXNlci5kaXJlY3RpdmVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS51c2VyLmRpcmVjdGl2ZXMnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL3dvcmtlci1saXN0LnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJzxtZC10b29sYmFyPlxcbicgK1xuICAgICcgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXRvb2xzXCI+XFxuJyArXG4gICAgJyAgICA8aDM+XFxuJyArXG4gICAgJyAgICAgIDxzcGFuPldvcmtlcnM8L3NwYW4+XFxuJyArXG4gICAgJyAgICA8L2gzPlxcbicgK1xuICAgICcgIDwvZGl2PlxcbicgK1xuICAgICc8L21kLXRvb2xiYXI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8Zm9ybSBhY3Rpb249XCIjXCIgY2xhc3M9XCJwZXJzaXN0ZW50LXNlYXJjaFwiPlxcbicgK1xuICAgICcgIDxsYWJlbCBmb3I9XCJzZWFyY2hcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+c2VhcmNoPC9pPjwvbGFiZWw+XFxuJyArXG4gICAgJyAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgbmctbW9kZWw9XCJzZWFyY2hWYWx1ZVwiIG5nLWNoYW5nZT1cImN0cmwuYXBwbHlGaWx0ZXIoc2VhcmNoVmFsdWUpXCI+XFxuJyArXG4gICAgJzwvZm9ybT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxtZC1saXN0PlxcbicgK1xuICAgICcgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmVcIiBuZy1jbGljaz1cImN0cmwuc2VsZWN0V29ya2VyKCRldmVudCwgdXNlcilcIiAgbmctcmVwZWF0PVwidXNlciBpbiBjdHJsLndvcmtlcnNcIiBuZy1jbGFzcz1cInthY3RpdmU6IGN0cmwuc2VsZWN0ZWQuaWQgPT09IHVzZXIuaWR9XCI+XFxuJyArXG4gICAgJyAgICA8aW1nIGFsdD1cInVzZXIubmFtZVwiIG5nLXNyYz1cInt7dXNlci5hdmF0YXJ9fVwiIGNsYXNzPVwibWQtYXZhdGFyXCIgLz5cXG4nICtcbiAgICAnICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlxcbicgK1xuICAgICcgICAgICA8aDM+e3t1c2VyLm5hbWV9fTwvaDM+XFxuJyArXG4gICAgJyAgICAgIDxwPnt7dXNlci5wb3NpdGlvbn19PC9wPlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJyAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJzwvbWQtbGlzdD5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0udXNlci5kaXJlY3RpdmVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS51c2VyLmRpcmVjdGl2ZXMnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL3dvcmtlci50cGwuaHRtbCcsXG4gICAgJzwhLS1cXG4nICtcbiAgICAnIENPTkZJREVOVElBTFxcbicgK1xuICAgICcgQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXFxuJyArXG4gICAgJyBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXFxuJyArXG4gICAgJy0tPlxcbicgK1xuICAgICc8bWQtY29udGVudCBjbGFzcz1cIndmbS1tYWluY29sLXNjcm9sbCB3Zm0tbWFpbmNvbC1zY3JvbGxfd2l0aC1tZW51XCI+XFxuJyArXG4gICAgJyAgPGRpdiBjbGFzcz1cInVzZXItaW5mby1oZWFkZXJcIiBuZy1zdHlsZT1cImN0cmwuc3R5bGVcIj5cXG4nICtcbiAgICAnICAgIDxoMSBjbGFzcz1cIm1kLWRpc3BsYXktMVwiPnt7Y3RybC53b3JrZXIubmFtZX19PC9oMT5cXG4nICtcbiAgICAnICA8L2Rpdj5cXG4nICtcbiAgICAnICA8bWQtbGlzdD5cXG4nICtcbiAgICAnICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmVcIiA+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5wZXJzb248L21kLWljb24+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlxcbicgK1xuICAgICcgICAgICAgIDxoMz57e2N0cmwud29ya2VyLnVzZXJuYW1lfX08L2gzPlxcbicgK1xuICAgICcgICAgICAgIDxwPlVzZXJuYW1lPC9wPlxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICcgICAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTItbGluZVwiID5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPnBob25lPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgICA8aDM+e3tjdHJsLndvcmtlci5waG9uZX19PC9oMz5cXG4nICtcbiAgICAnICAgICAgICA8cD5QaG9uZSBOdW1iZXI8L3A+XFxuJyArXG4gICAgJyAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJyAgICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lXCIgPlxcbicgK1xuICAgICcgICAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+ZW1haWw8L21kLWljb24+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlxcbicgK1xuICAgICcgICAgICAgIDxoMz57e2N0cmwud29ya2VyLmVtYWlsfX08L2gzPlxcbicgK1xuICAgICcgICAgICAgIDxwPkVtYWlsPC9wPlxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICcgICAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTItbGluZVwiID5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPnBvcnRyYWl0PC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgICA8aDM+e3tjdHJsLndvcmtlci5wb3NpdGlvbn19PC9oMz5cXG4nICtcbiAgICAnICAgICAgICA8cD5Qb3NpdGlvbjwvcD5cXG4nICtcbiAgICAnICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4nICtcbiAgICAnICAgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmVcIiA+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5ncm91cDwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgICAgPGgzPnt7Y3RybC5ncm91cC5uYW1lfX08L2gzPlxcbicgK1xuICAgICcgICAgICAgIDxwPkdyb3VwPC9wPlxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICcgICAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPG1kLXN1YmhlYWRlciBjbGFzcz1cIm1kLW5vLXN0aWNreVwiPk5vdGVzPC9tZC1zdWJoZWFkZXI+XFxuJyArXG4gICAgJyAgICA8cCBjbGFzcz1cIm1kLWJvZHktMVwiIGxheW91dC1wYWRkaW5nIGxheW91dC1tYXJnaW4+e3tjdHJsLndvcmtlci5ub3Rlc319PC9wPlxcbicgK1xuICAgICcgIDwvbWQtY29udGVudD5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS51c2VyLmRpcmVjdGl2ZXMnLCBbJ3dmbS5jb3JlLm1lZGlhdG9yJ10pO1xubW9kdWxlLmV4cG9ydHMgPSAnd2ZtLnVzZXIuZGlyZWN0aXZlcyc7XG5cbnJlcXVpcmUoJy4uLy4uL2Rpc3QnKTtcblxubmdNb2R1bGUuZGlyZWN0aXZlKCd3b3JrZXJMaXN0JywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUsIG1lZGlhdG9yKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICAsIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS93b3JrZXItbGlzdC50cGwuaHRtbCcpXG4gICwgc2NvcGU6IHtcbiAgICAgIHdvcmtlcnMgOiAnPScsXG4gICAgICBzZWxlY3RlZE1vZGVsOiAnPSdcbiAgICB9XG4gICwgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLndvcmtlcnMgPSAkc2NvcGUud29ya2VycztcbiAgICAgIHNlbGYuc2VsZWN0ZWQgPSAkc2NvcGUuc2VsZWN0ZWRNb2RlbDtcbiAgICAgIHNlbGYuc2VsZWN0V29ya2VyID0gZnVuY3Rpb24oZXZlbnQsIHdvcmtlcikge1xuICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya2VyOnNlbGVjdGVkJywgd29ya2VyKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgICBzZWxmLmlzV29ya2VyU2hvd24gPSBmdW5jdGlvbih3b3JrZXIpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuc2hvd25Xb3JrZXIgPT09IHdvcmtlcjtcbiAgICAgIH07XG5cbiAgICAgIHNlbGYuYXBwbHlGaWx0ZXIgPSBmdW5jdGlvbih0ZXJtKSB7XG4gICAgICAgIHRlcm0gPSB0ZXJtLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHNlbGYud29ya2VycyA9ICRzY29wZS53b3JrZXJzLmZpbHRlcihmdW5jdGlvbih3b3JrZXIpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHdvcmtlci5pZCkuaW5kZXhPZih0ZXJtKSAhPT0gLTFcbiAgICAgICAgICAgIHx8IFN0cmluZyh3b3JrZXIubmFtZSkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRlcm0pICE9PSAtMTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cbiAgLCBjb250cm9sbGVyQXM6ICdjdHJsJ1xuICB9O1xufSlcbi5kaXJlY3RpdmUoJ3dvcmtlcicsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCBtZWRpYXRvcikge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRSdcbiAgLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvd29ya2VyLnRwbC5odG1sJylcbiAgLCBzY29wZToge1xuICAgICAgd29ya2VyIDogJz0nLFxuICAgICAgZ3JvdXAgOiAnPSdcbiAgICB9XG4gICwgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLndvcmtlciA9ICRzY29wZS53b3JrZXI7XG4gICAgICBzZWxmLmdyb3VwID0gJHNjb3BlLmdyb3VwO1xuICAgICAgdmFyIGJhbm5lclVybCA9IHNlbGYud29ya2VyLmJhbm5lciB8fCBzZWxmLndvcmtlci5hdmF0YXI7XG4gICAgICBzZWxmLnN0eWxlID0ge1xuICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArIGJhbm5lclVybCArICcpJyxcbiAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiBzZWxmLndvcmtlci5iYW5uZXIgPyAnY2VudGVyIGNlbnRlcicgOiAndG9wIGNlbnRlcicsXG4gICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiBzZWxmLndvcmtlci5iYW5uZXIgPyAnYXV0bycgOiAnY29udGFpbicsXG4gICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnXG4gICAgICB9XG4gICAgfVxuICAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gIH07XG59KVxuLmRpcmVjdGl2ZSgnd29ya2VyRm9ybScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCBtZWRpYXRvcikge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRSdcbiAgLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvd29ya2VyLWZvcm0udHBsLmh0bWwnKVxuICAsIHNjb3BlOiB7XG4gICAgICB3b3JrZXIgOiAnPXZhbHVlJyxcbiAgICAgIGdyb3VwcyA6ICc9J1xuICAgIH1cbiAgLCBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHNlbGYuZ3JvdXBzID0gJHNjb3BlLmdyb3VwcztcbiAgICAgIHNlbGYubW9kZWwgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLndvcmtlcik7XG4gICAgICBzZWxmLnN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgc2VsZi5zZWxlY3RXb3JrZXIgPSBmdW5jdGlvbihldmVudCwgd29ya2VyKSB7XG4gICAgICAgIGlmKHdvcmtvcmRlci5pZCkge1xuICAgICAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3dmbTp3b3JrZXI6c2VsZWN0ZWQnLCB3b3Jrb3JkZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3dmbTp3b3JrZXI6bGlzdCcpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgICAgc2VsZi5kb25lID0gZnVuY3Rpb24oaXNWYWxpZCkge1xuICAgICAgICBzZWxmLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgaWYgKCFzZWxmLm1vZGVsLmlkICYmIHNlbGYubW9kZWwuaWQgIT09IDApIHtcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3dmbTp3b3JrZXI6Y3JlYXRlZCcsIHNlbGYubW9kZWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya2VyOnVwZGF0ZWQnLCBzZWxmLm1vZGVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICwgY29udHJvbGxlckFzOiAnY3RybCdcbiAgfTtcbn0pXG4uZGlyZWN0aXZlKCdncm91cExpc3QnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgbWVkaWF0b3IpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnXG4gICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL2dyb3VwLWxpc3QudHBsLmh0bWwnKVxuICAsIHNjb3BlOiB7XG4gICAgICBncm91cHMgOiAnPScsXG4gICAgICBzZWxlY3RlZE1vZGVsOiAnPSdcbiAgICB9XG4gICwgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLmdyb3VwcyA9ICRzY29wZS5ncm91cHM7XG4gICAgICBzZWxmLnNlbGVjdGVkID0gJHNjb3BlLnNlbGVjdGVkTW9kZWw7XG4gICAgICBzZWxmLnNlbGVjdEdyb3VwID0gZnVuY3Rpb24oZXZlbnQsIGdyb3VwKSB7XG4gICAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3dmbTpncm91cDpzZWxlY3RlZCcsIGdyb3VwKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgICBzZWxmLmlzR3JvdXBTaG93biA9IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgIHJldHVybiBzZWxmLnNob3duR3JvdXAgPT09IGdyb3VwO1xuICAgICAgfTtcblxuICAgICAgc2VsZi5hcHBseUZpbHRlciA9IGZ1bmN0aW9uKHRlcm0pIHtcbiAgICAgICAgdGVybSA9IHRlcm0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgc2VsZi5ncm91cHMgPSAkc2NvcGUuZ3JvdXBzLmZpbHRlcihmdW5jdGlvbihncm91cCkge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcoZ3JvdXAuaWQpLmluZGV4T2YodGVybSkgIT09IC0xXG4gICAgICAgICAgICB8fCBTdHJpbmcoZ3JvdXAubmFtZSkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRlcm0pICE9PSAtMTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cbiAgLCBjb250cm9sbGVyQXM6ICdjdHJsJ1xuICB9O1xufSlcbi5kaXJlY3RpdmUoJ2dyb3VwJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUsIG1lZGlhdG9yKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICAsIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS9ncm91cC50cGwuaHRtbCcpXG4gICwgc2NvcGU6IHtcbiAgICAgIGdyb3VwIDogJz0nLFxuICAgICAgbWVtYmVycyA6ICc9J1xuICAgIH1cbiAgLCBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHNlbGYuZ3JvdXAgPSAkc2NvcGUuZ3JvdXA7XG4gICAgICBzZWxmLm1lbWJlcnMgPSAkc2NvcGUubWVtYmVycztcbiAgICAgIHNlbGYuc2VsZWN0TWVtYmVyID0gZnVuY3Rpb24oZXZlbnQsIG1lbWJlcikge1xuICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya2VyOnNlbGVjdGVkJywgbWVtYmVyKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gIH07XG59KVxuLmRpcmVjdGl2ZSgnZ3JvdXBGb3JtJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUsIG1lZGlhdG9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnRSdcbiAgICAsIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS9ncm91cC1mb3JtLnRwbC5odG1sJylcbiAgICAsIHNjb3BlOiB7XG4gICAgICAgIGdyb3VwIDogJz12YWx1ZSdcbiAgICAgIH1cbiAgICAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYubW9kZWwgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLmdyb3VwKTtcbiAgICAgICAgc2VsZi5zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgc2VsZi5zZWxlY3RHcm91cCA9IGZ1bmN0aW9uKGV2ZW50LCBncm91cCkge1xuICAgICAgICAgIGlmKGdyb3VwLmlkKSB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06Z3JvdXA6c2VsZWN0ZWQnLCBncm91cCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOmdyb3VwOmxpc3QnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLmRvbmUgPSBmdW5jdGlvbihpc1ZhbGlkKSB7XG4gICAgICAgICAgc2VsZi5zdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICBpZiAoIXNlbGYubW9kZWwuaWQgJiYgc2VsZi5tb2RlbC5pZCAhPT0gMCkge1xuICAgICAgICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06Z3JvdXA6Y3JlYXRlZCcsIHNlbGYubW9kZWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOmdyb3VwOnVwZGF0ZWQnLCBzZWxmLm1vZGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gICAgfTtcbiAgfSk7XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS51c2VyLnNlcnZpY2VzJywgWyd3Zm0uY29yZS5tZWRpYXRvciddKVxubW9kdWxlLmV4cG9ydHMgPSAnd2ZtLnVzZXIuc2VydmljZXMnO1xuXG52YXIgVXNlckNsaWVudCA9IHJlcXVpcmUoJy4uL3VzZXIvdXNlci1jbGllbnQnKSxcbiAgICBHcm91cENsaWVudCA9IHJlcXVpcmUoJy4uL2dyb3VwL2dyb3VwLWNsaWVudCcpLFxuICAgIE1lbWJlcnNoaXBDbGllbnQgPSByZXF1aXJlKCcuLi9tZW1iZXJzaGlwL21lbWJlcnNoaXAtY2xpZW50Jyk7XG4gXG5mdW5jdGlvbiB3cmFwQ2xpZW50KCRxLCBjbGllbnQsIG1ldGhvZE5hbWVzKSB7XG4gIHZhciB3cmFwcGVyID0ge307XG4gIG1ldGhvZE5hbWVzLmZvckVhY2goZnVuY3Rpb24obWV0aG9kTmFtZSkge1xuICAgIHdyYXBwZXJbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkcS53aGVuKGNsaWVudFttZXRob2ROYW1lXS5hcHBseShjbGllbnQsIGFyZ3VtZW50cykpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5uZ01vZHVsZS5mYWN0b3J5KCd1c2VyQ2xpZW50JywgZnVuY3Rpb24oJHEsIG1lZGlhdG9yKSB7XG4gIHZhciBtZXRob2ROYW1lcyA9IFsnY3JlYXRlJywgJ3JlYWQnLCAndXBkYXRlJywgJ2RlbGV0ZScsICdsaXN0JywgJ2F1dGgnLCAnaGFzU2Vzc2lvbicsICdjbGVhclNlc3Npb24nLCAndmVyaWZ5JywgJ2dldFByb2ZpbGUnXTtcbiAgdmFyIHVzZXJDbGllbnQgPSB3cmFwQ2xpZW50KCRxLCBuZXcgVXNlckNsaWVudChtZWRpYXRvciksIG1ldGhvZE5hbWVzKTtcbiAgcmV0dXJuIHVzZXJDbGllbnQ7XG59KTtcblxubmdNb2R1bGUuZmFjdG9yeSgnZ3JvdXBDbGllbnQnLCBmdW5jdGlvbigkcSwgbWVkaWF0b3IpIHtcbiAgdmFyIG1ldGhvZE5hbWVzID0gWydjcmVhdGUnLCAncmVhZCcsICd1cGRhdGUnLCAnZGVsZXRlJywgJ2xpc3QnLCAnbWVtYmVyc2hpcCddO1xuICB2YXIgZ3JvdXBDbGllbnQgPSB3cmFwQ2xpZW50KCRxLCBuZXcgR3JvdXBDbGllbnQobWVkaWF0b3IpLCBtZXRob2ROYW1lcyk7XG4gIHJldHVybiBncm91cENsaWVudDtcbn0pO1xuXG5uZ01vZHVsZS5mYWN0b3J5KCdtZW1iZXJzaGlwQ2xpZW50JywgZnVuY3Rpb24oJHEsIG1lZGlhdG9yKSB7XG4gIHZhciBtZXRob2ROYW1lcyA9IFsnY3JlYXRlJywgJ3JlYWQnLCAndXBkYXRlJywgJ2RlbGV0ZScsICdsaXN0JywgJ21lbWJlcnNoaXAnXTtcbiAgdmFyIGdyb3VwQ2xpZW50ID0gd3JhcENsaWVudCgkcSwgbmV3IE1lbWJlcnNoaXBDbGllbnQobWVkaWF0b3IpLCBtZXRob2ROYW1lcyk7XG4gIHJldHVybiBncm91cENsaWVudDtcbn0pO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS51c2VyJztcblxuYW5ndWxhci5tb2R1bGUoJ3dmbS51c2VyJywgW1xuICByZXF1aXJlKCcuL2RpcmVjdGl2ZScpXG4sIHJlcXVpcmUoJy4vc2VydmljZS5qcycpXG5dKVxuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhcGlQYXRoOiAnL2FwaS93Zm0vZ3JvdXAnXG59XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHEgPSByZXF1aXJlKCdxJyk7XG52YXIgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLWdyb3VwJyk7XG5cbnZhciBHcm91cENsaWVudCA9IGZ1bmN0aW9uKG1lZGlhdG9yKSB7XG4gIHRoaXMubWVkaWF0b3IgPSBtZWRpYXRvcjtcbiAgdGhpcy5pbml0Q29tcGxldGUgPSBmYWxzZTtcbiAgdGhpcy5pbml0UHJvbWlzZSA9IHRoaXMuaW5pdCgpO1xufTtcblxudmFyIHhociA9IGZ1bmN0aW9uKF9vcHRpb25zKSB7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBwYXRoOiAnLycsXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nXG4gIH1cbiAgdmFyIG9wdGlvbnMgPSBfLmRlZmF1bHRzKF9vcHRpb25zLCBkZWZhdWx0T3B0aW9ucyk7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgJGZoLmNsb3VkKG9wdGlvbnMsIGZ1bmN0aW9uKHJlcykge1xuICAgIGRlZmVycmVkLnJlc29sdmUocmVzKTtcbiAgfSwgZnVuY3Rpb24obWVzc2FnZSwgcHJvcHMpIHtcbiAgICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICBlLnByb3BzID0gcHJvcHM7XG4gICAgZGVmZXJyZWQucmVqZWN0KGUpO1xuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG5Hcm91cENsaWVudC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgJGZoLm9uKCdmaGluaXQnLCBmdW5jdGlvbihlcnJvciwgaG9zdCkge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZWxmLmFwcGlkID0gJGZoLmdldEZIUGFyYW1zKCkuYXBwaWQ7XG4gICAgc2VsZi5pbml0Q29tcGxldGUgPSB0cnVlO1xuICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgfSk7XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufVxuXG5Hcm91cENsaWVudC5wcm90b3R5cGUubGlzdCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4geGhyKHtcbiAgICBwYXRoOiBjb25maWcuYXBpUGF0aFxuICB9KTtcbn07XG5cbkdyb3VwQ2xpZW50LnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24oaWQpIHtcbiAgcmV0dXJuIHhocih7XG4gICAgcGF0aDogY29uZmlnLmFwaVBhdGggKyAnLycgKyBpZFxuICB9KTtcbn07XG5cbkdyb3VwQ2xpZW50LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihncm91cCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHJldHVybiB4aHIoe1xuICAgIHBhdGg6IGNvbmZpZy5hcGlQYXRoICsgJy8nICsgZ3JvdXAuaWQsXG4gICAgbWV0aG9kOiAncHV0JyxcbiAgICBkYXRhOiBncm91cFxuICB9KTtcbn07XG5cbkdyb3VwQ2xpZW50LnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbihncm91cCkge1xuICByZXR1cm4geGhyKHtcbiAgICBwYXRoOiBjb25maWcuYXBpUGF0aCxcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBkYXRhOiBncm91cFxuICB9KTtcbn07XG5cbkdyb3VwQ2xpZW50LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbihncm91cCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHJldHVybiB4aHIoe1xuICAgIHBhdGg6IGNvbmZpZy5hcGlQYXRoICsgJy8nICsgZ3JvdXAuaWQsXG4gICAgbWV0aG9kOiAnZGVsZXRlJyxcbiAgICBkYXRhOiBncm91cFxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obWVkaWF0b3IpIHtcbiAgcmV0dXJuIG5ldyBHcm91cENsaWVudChtZWRpYXRvcik7XG59XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFwaVBhdGg6ICcvYXBpL3dmbS9tZW1iZXJzaGlwJ1xufVxuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBxID0gcmVxdWlyZSgncScpO1xudmFyIF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbnZhciBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy1tZW1iZXJzaGlwJyk7XG5cbnZhciBNZW1iZXJzaGlwQ2xpZW50ID0gZnVuY3Rpb24obWVkaWF0b3IpIHtcbiAgdGhpcy5tZWRpYXRvciA9IG1lZGlhdG9yO1xuICB0aGlzLmluaXRDb21wbGV0ZSA9IGZhbHNlO1xuICB0aGlzLmluaXRQcm9taXNlID0gdGhpcy5pbml0KCk7XG59O1xuXG52YXIgeGhyID0gZnVuY3Rpb24oX29wdGlvbnMpIHtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHBhdGg6ICcvJyxcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbidcbiAgfVxuICB2YXIgb3B0aW9ucyA9IF8uZGVmYXVsdHMoX29wdGlvbnMsIGRlZmF1bHRPcHRpb25zKTtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICAkZmguY2xvdWQob3B0aW9ucywgZnVuY3Rpb24ocmVzKSB7XG4gICAgZGVmZXJyZWQucmVzb2x2ZShyZXMpO1xuICB9LCBmdW5jdGlvbihtZXNzYWdlLCBwcm9wcykge1xuICAgIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIGUucHJvcHMgPSBwcm9wcztcbiAgICBkZWZlcnJlZC5yZWplY3QoZSk7XG4gIH0pO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbk1lbWJlcnNoaXBDbGllbnQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGRlZmVycmVkID0gcS5kZWZlcigpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gICRmaC5vbignZmhpbml0JywgZnVuY3Rpb24oZXJyb3IsIGhvc3QpIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoZXJyb3IpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2VsZi5hcHBpZCA9ICRmaC5nZXRGSFBhcmFtcygpLmFwcGlkO1xuICAgIHNlbGYuaW5pdENvbXBsZXRlID0gdHJ1ZTtcbiAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gIH0pO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn1cblxuTWVtYmVyc2hpcENsaWVudC5wcm90b3R5cGUubGlzdCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4geGhyKHtcbiAgICBwYXRoOiBjb25maWcuYXBpUGF0aFxuICB9KTtcbn07XG5cbk1lbWJlcnNoaXBDbGllbnQucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbihpZCkge1xuICByZXR1cm4geGhyKHtcbiAgICBwYXRoOiBjb25maWcuYXBpUGF0aCArICcvJyArIGlkXG4gIH0pO1xufTtcblxuTWVtYmVyc2hpcENsaWVudC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24obWVtYmVyc2hpcCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHJldHVybiB4aHIoe1xuICAgIHBhdGg6IGNvbmZpZy5hcGlQYXRoICsgJy8nICsgbWVtYmVyc2hpcC5pZCxcbiAgICBtZXRob2Q6ICdwdXQnLFxuICAgIGRhdGE6IG1lbWJlcnNoaXBcbiAgfSk7XG59O1xuXG5NZW1iZXJzaGlwQ2xpZW50LnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbihtZW1iZXJzaGlwKSB7XG4gIHJldHVybiB4aHIoe1xuICAgIHBhdGg6IGNvbmZpZy5hcGlQYXRoLFxuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGRhdGE6IG1lbWJlcnNoaXBcbiAgfSk7XG59O1xuXG5NZW1iZXJzaGlwQ2xpZW50LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbihtZW1iZXJzaGlwKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgcmV0dXJuIHhocih7XG4gICAgcGF0aDogY29uZmlnLmFwaVBhdGggKyAnLycgKyBtZW1iZXJzaGlwLmlkLFxuICAgIG1ldGhvZDogJ2RlbGV0ZScsXG4gICAgZGF0YTogbWVtYmVyc2hpcFxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obWVkaWF0b3IpIHtcbiAgcmV0dXJuIG5ldyBNZW1iZXJzaGlwQ2xpZW50KG1lZGlhdG9yKTtcbn1cbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBpSG9zdDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcsXG4gIGFwaVBhdGg6ICcvYXBpL3dmbS91c2VyJyxcbiAgYXV0aHBvbGljeVBhdGg6ICcvYm94L3Nydi8xLjEvYWRtaW4vYXV0aHBvbGljeSdcbn1cbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcSA9IHJlcXVpcmUoJ3EnKTtcbnZhciBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWctdXNlcicpO1xuXG52YXIgVXNlckNsaWVudCA9IGZ1bmN0aW9uKG1lZGlhdG9yKSB7XG4gIHRoaXMubWVkaWF0b3IgPSBtZWRpYXRvcjtcbiAgdGhpcy5pbml0Q29tcGxldGUgPSBmYWxzZTtcbiAgdGhpcy5pbml0UHJvbWlzZSA9IHRoaXMuaW5pdCgpO1xufTtcblxudmFyIHhociA9IGZ1bmN0aW9uKF9vcHRpb25zKSB7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBwYXRoOiAnLycsXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nXG4gIH1cbiAgdmFyIG9wdGlvbnMgPSBfLmRlZmF1bHRzKF9vcHRpb25zLCBkZWZhdWx0T3B0aW9ucyk7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgJGZoLmNsb3VkKG9wdGlvbnMsIGZ1bmN0aW9uKHJlcykge1xuICAgIGRlZmVycmVkLnJlc29sdmUocmVzKTtcbiAgfSwgZnVuY3Rpb24obWVzc2FnZSwgcHJvcHMpIHtcbiAgICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICBlLnByb3BzID0gcHJvcHM7XG4gICAgZGVmZXJyZWQucmVqZWN0KGUpO1xuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG52YXIgc3RvcmVQcm9maWxlID0gZnVuY3Rpb24ocHJvZmlsZURhdGEpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZoLndmbS5wcm9maWxlRGF0YScsIEpTT04uc3RyaW5naWZ5KHByb2ZpbGVEYXRhKSk7XG59O1xuXG52YXIgcmV0cmlldmVQcm9maWxlRGF0YSA9IGZ1bmN0aW9uKCkge1xuICB2YXIganNvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaC53Zm0ucHJvZmlsZURhdGEnKTtcbiAgcmV0dXJuIGpzb24gPyBKU09OLnBhcnNlKGpzb24pIDogbnVsbDtcbn1cblxuVXNlckNsaWVudC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgJGZoLm9uKCdmaGluaXQnLCBmdW5jdGlvbihlcnJvciwgaG9zdCkge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZWxmLmFwcGlkID0gJGZoLmdldEZIUGFyYW1zKCkuYXBwaWQ7XG4gICAgc2VsZi5pbml0Q29tcGxldGUgPSB0cnVlO1xuICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgfSk7XG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufVxuXG5Vc2VyQ2xpZW50LnByb3RvdHlwZS5saXN0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB4aHIoe1xuICAgIHBhdGg6IGNvbmZpZy5hcGlQYXRoXG4gIH0pO1xufTtcblxuVXNlckNsaWVudC5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uKGlkKSB7XG4gIHJldHVybiB4aHIoe1xuICAgIHBhdGg6IGNvbmZpZy5hcGlQYXRoICsgJy8nICsgaWRcbiAgfSk7XG59O1xuXG5Vc2VyQ2xpZW50LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbih1c2VyKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgcmV0dXJuIHhocih7XG4gICAgcGF0aDogY29uZmlnLmFwaVBhdGggKyAnLycgKyB1c2VyLmlkLFxuICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgZGF0YTogdXNlclxuICB9KTtcbn07XG5cblVzZXJDbGllbnQucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKHVzZXIpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICByZXR1cm4geGhyKHtcbiAgICBwYXRoOiBjb25maWcuYXBpUGF0aCArICcvJyArIHVzZXIuaWQsXG4gICAgbWV0aG9kOiAnZGVsZXRlJyxcbiAgICBkYXRhOiB1c2VyXG4gIH0pO1xufTtcblxuVXNlckNsaWVudC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24odXNlcikge1xuICByZXR1cm4geGhyKHtcbiAgICBwYXRoOiBjb25maWcuYXBpUGF0aCxcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBkYXRhOiB1c2VyXG4gIH0pO1xufTtcblxuVXNlckNsaWVudC5wcm90b3R5cGUuYXV0aCA9IGZ1bmN0aW9uKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5pbml0UHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICRmaC5hdXRoKHtcbiAgICAgIHBvbGljeUlkOiAnd2ZtJyxcbiAgICAgIGNsaWVudFRva2VuOiBzZWxmLmFwcGlkLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHVzZXJJZDogdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIC8vIHJlcy5zZXNzaW9uVG9rZW47IC8vIFRoZSBwbGF0Zm9ybSBzZXNzaW9uIGlkZW50aWZpZXJcbiAgICAgIC8vIHJlcy5hdXRoUmVzcG9uc2U7IC8vIFRoZSBhdXRoZXRpY2F0aW9uIGluZm9ybWF0aW9uIHJldHVybmVkIGZyb20gdGhlIGF1dGhldGljYXRpb24gc2VydmljZS5cbiAgICAgIHZhciBwcm9maWxlRGF0YSA9IHJlcy5hdXRoUmVzcG9uc2U7XG4gICAgICBpZiAodHlwZW9mIHByb2ZpbGVEYXRhID09PSAnc3RyaW5nJyB8fCBwcm9maWxlRGF0YSBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHByb2ZpbGVEYXRhID0gSlNPTi5wYXJzZShwcm9maWxlRGF0YSk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgICBjb25zb2xlLmxvZygnVW5hYmxlIHRvIHBhcnNlIHRoZSAkZmguYXV0aCByZXNwb25zZS4gVXNpbmcgYSB3b3JrYXJvdW5kJyk7XG4gICAgICAgICAgcHJvZmlsZURhdGEgPSBKU09OLnBhcnNlKHByb2ZpbGVEYXRhLnJlcGxhY2UoLyxcXHMvZywgJywnKS5yZXBsYWNlKC9bXiw9e31dKy9nLCAnXCIkJlwiJykucmVwbGFjZSgvPS9nLCAnOicpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzdG9yZVByb2ZpbGUocHJvZmlsZURhdGEpO1xuICAgICAgc2VsZi5tZWRpYXRvci5wdWJsaXNoKCd3Zm06YXV0aDpwcm9maWxlOmNoYW5nZScsIHByb2ZpbGVEYXRhKTtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzKTtcbiAgICB9LCBmdW5jdGlvbiAobXNnLCBlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKG1zZywgZXJyKTtcbiAgICAgIHZhciBlcnJvck1zZyA9IGVyci5tZXNzYWdlO1xuICAgICAgLyogUG9zc2libGUgZXJyb3JzOlxuICAgICAgdW5rbm93bl9wb2xpY3lJZCAtIFRoZSBwb2xpY3lJZCBwcm92aWRlZCBkaWQgbm90IG1hdGNoIGFueSBkZWZpbmVkIHBvbGljeS4gQ2hlY2sgdGhlIEF1dGggUG9saWNpZXMgZGVmaW5lZC4gU2VlIEF1dGggUG9saWNpZXMgQWRtaW5pc3RyYXRpb25cbiAgICAgIHVzZXJfbm90X2ZvdW5kIC0gVGhlIEF1dGggUG9saWN5IGFzc29jaWF0ZWQgd2l0aCB0aGUgcG9saWN5SWQgcHJvdmlkZWQgaGFzIGJlZW4gc2V0IHVwIHRvIHJlcXVpcmUgdGhhdCBhbGwgdXNlcnMgYXV0aGVudGljYXRpbmcgZXhpc3Qgb24gdGhlIHBsYXRmb3JtLCBidXQgdGhpcyB1c2VyIGRvZXMgbm90IGV4aXN0cy5cbiAgICAgIHVzZXJfbm90X2FwcHJvdmVkIC0gLSBUaGUgQXV0aCBQb2xpY3kgYXNzb2NpYXRlZCB3aXRoIHRoZSBwb2xpY3lJZCBwcm92aWRlZCBoYXMgYmVlbiBzZXQgdXAgdG8gcmVxdWlyZSB0aGF0IGFsbCB1c2VycyBhdXRoZW50aWNhdGluZyBhcmUgaW4gYSBsaXN0IG9mIGFwcHJvdmVkIHVzZXJzLCBidXQgdGhpcyB1c2VyIGlzIG5vdCBpbiB0aGF0IGxpc3QuXG4gICAgICB1c2VyX2Rpc2FibGVkIC0gVGhlIHVzZXIgaGFzIGJlZW4gZGlzYWJsZWQgZnJvbSBsb2dnaW5nIGluLlxuICAgICAgdXNlcl9wdXJnZV9kYXRhIC0gVGhlIHVzZXIgaGFzIGJlZW4gZmxhZ2dlZCBmb3IgZGF0YSBwdXJnZSBhbmQgYWxsIGxvY2FsIGRhdGEgc2hvdWxkIGJlIGRlbGV0ZWQuXG4gICAgICBkZXZpY2VfZGlzYWJsZWQgLSBUaGUgZGV2aWNlIGhhcyBiZWVuIGRpc2FibGVkLiBObyB1c2VyIG9yIGFwcHMgY2FuIGxvZyBpbiBmcm9tIHRoZSByZXF1ZXN0aW5nIGRldmljZS5cbiAgICAgIGRldmljZV9wdXJnZV9kYXRhIC0gVGhlIGRldmljZSBoYXMgYmVlbiBmbGFnZ2VkIGZvciBkYXRhIHB1cmdlIGFuZCBhbGwgbG9jYWwgZGF0YSBzaG91bGQgYmUgZGVsZXRlZC5cbiAgICAgICovXG4gICAgICBpZiAoZXJyb3JNc2cgPT0gXCJ1c2VyX3B1cmdlX2RhdGFcIiB8fCBlcnJvck1zZyA9PSBcImRldmljZV9wdXJnZV9kYXRhXCIpIHtcbiAgICAgICAgLy8gVE9ETzogVXNlciBvciBkZXZpY2UgaGFzIGJlZW4gYmxhY2sgbGlzdGVkIGZyb20gYWRtaW5pc3RyYXRpb24gY29uc29sZSBhbmQgYWxsIGxvY2FsIGRhdGEgc2hvdWxkIGJlIHdpcGVkXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIG9yIGRldmljZSBoYXMgYmVlbiBibGFjayBsaXN0ZWQgZnJvbSBhZG1pbmlzdHJhdGlvbiBjb25zb2xlIGFuZCBhbGwgbG9jYWwgZGF0YSBzaG91bGQgYmUgd2lwZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aGVudGljYXRpb24gZmFpbGVkIC0gXCIgKyBlcnJvck1zZyk7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvck1zZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pXG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufVxuXG5Vc2VyQ2xpZW50LnByb3RvdHlwZS5oYXNTZXNzaW9uID0gZnVuY3Rpb24oKSB7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgJGZoLmF1dGguaGFzU2Vzc2lvbihmdW5jdGlvbihlcnIsIGV4aXN0cyl7XG4gICAgaWYoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGNoZWNrIHNlc3Npb246ICcsIGVycik7XG4gICAgICBkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiAgICB9IGVsc2UgaWYgKGV4aXN0cyl7XG4gICAgICAvL3VzZXIgaXMgYWxyZWFkeSBhdXRoZW50aWNhdGVkXG4gICAgICAvL29wdGlvbmFsbHkgd2UgY2FuIGFsc28gdmVyaWZ5IHRoZSBzZXNzaW9uIGlzIGFjdXRhbGx5IHZhbGlkIGZyb20gY2xpZW50LiBUaGlzIHJlcXVpcmVzIG5ldHdvcmsgY29ubmVjdGlvbi5cbiAgICAgIGRlZmVycmVkLnJlc29sdmUodHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZGVmZXJyZWQucmVzb2x2ZShmYWxzZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59XG5cblVzZXJDbGllbnQucHJvdG90eXBlLmNsZWFyU2Vzc2lvbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZGVmZXJyZWQgPSBxLmRlZmVyKCk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgJGZoLmF1dGguY2xlYXJTZXNzaW9uKGZ1bmN0aW9uKGVycil7XG4gICAgaWYoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGNsZWFyIHNlc3Npb246ICcsIGVycik7XG4gICAgICBkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RvcmVQcm9maWxlKG51bGwpO1xuICAgICAgc2VsZi5tZWRpYXRvci5wdWJsaXNoKCd3Zm06YXV0aDpwcm9maWxlOmNoYW5nZScsIG51bGwpO1xuICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn1cblxuVXNlckNsaWVudC5wcm90b3R5cGUudmVyaWZ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBkZWZlcnJlZCA9IHEuZGVmZXIoKTtcbiAgJGZoLmF1dGgudmVyaWZ5KGZ1bmN0aW9uKGVyciwgdmFsaWQpe1xuICAgIGlmKGVycil7XG4gICAgICBjb25zb2xlLmxvZygnZmFpbGVkIHRvIHZlcmlmeSBzZXNzaW9uJyk7XG4gICAgICBkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYodmFsaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzZXNzaW9uIGlzIHZhbGlkJyk7XG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzZXNzaW9uIGlzIG5vdCB2YWxpZCcpO1xuICAgICAgZGVmZXJyZWQucmVzb2x2ZShmYWxzZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59XG5cblVzZXJDbGllbnQucHJvdG90eXBlLmdldFByb2ZpbGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHEud2hlbihyZXRyaWV2ZVByb2ZpbGVEYXRhKCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1lZGlhdG9yKSB7XG4gIHJldHVybiBuZXcgVXNlckNsaWVudChtZWRpYXRvcik7XG59XG4iLCJyZXF1aXJlKCcuL3ZlaGljbGUtaW5zcGVjdGlvbi1mb3JtLnRwbC5odG1sLmpzJyk7XG5yZXF1aXJlKCcuL3ZlaGljbGUtaW5zcGVjdGlvbi50cGwuaHRtbC5qcycpO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLndvcmtvcmRlcicpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ud29ya29yZGVyJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS92ZWhpY2xlLWluc3BlY3Rpb24tZm9ybS50cGwuaHRtbCcsXG4gICAgJzwhLS1cXG4nICtcbiAgICAnIENPTkZJREVOVElBTFxcbicgK1xuICAgICcgQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXFxuJyArXG4gICAgJyBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXFxuJyArXG4gICAgJy0tPlxcbicgK1xuICAgICcgIDxkaXYgbGF5b3V0PVwicm93XCIgY2xhc3M9XCJ3Zm0taW5zcGVjdGlvbi1yb3dcIj5cXG4nICtcbiAgICAnICAgIDxkaXYgZmxleD1cIjQwXCIgbGF5b3V0PVwicm93XCIgbGF5b3V0LWFsaWduPVwic3RhcnQgY2VudGVyXCI+XFxuJyArXG4gICAgJyAgICAgIDxzcGFuIGNsYXNzPVwibWQtYm9keS0yXCI+XFxuJyArXG4gICAgJyAgICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmxvY2FsX2dhc19zdGF0aW9uPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICAgIEZ1ZWwgKCUpXFxuJyArXG4gICAgJyAgICAgIDwvc3Bhbj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgPG1kLXNsaWRlciBmbGV4IG1kLWRpc2NyZXRlIG5nLW1vZGVsPVwiY3RybC5tb2RlbC5mdWVsXCIgc3RlcD1cIjI1XCIgbWluPVwiMFwiIG1heD1cIjEwMFwiIGFyaWEtbGFiZWw9XCJyYXRpbmdcIj5cXG4nICtcbiAgICAnICAgIDwvbWQtc2xpZGVyPlxcbicgK1xuICAgICcgIDwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPGRpdiBsYXlvdXQ9XCJyb3dcIiBjbGFzcz1cIndmbS1pbnNwZWN0aW9uLXJvd1wiPlxcbicgK1xuICAgICcgICAgPGRpdiBmbGV4PVwiMzBcIiBsYXlvdXQ9XCJyb3dcIiBsYXlvdXQtYWxpZ249XCJzdGFydCBjZW50ZXJcIj5cXG4nICtcbiAgICAnICAgICAgPHNwYW4gY2xhc3M9XCJtZC1ib2R5LTJcIj5cXG4nICtcbiAgICAnICAgICAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+YWxidW08L21kLWljb24+XFxuJyArXG4gICAgJyAgICAgICAgVGlyZXNcXG4nICtcbiAgICAnICAgICAgPC9zcGFuPlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8ZGl2IGZsZXggbGF5b3V0LWFsaWduPVwic3RhcnQgc3RhcnRcIj5cXG4nICtcbiAgICAnICAgICAgPG1kLXJhZGlvLWdyb3VwIGxheW91dCBuZy1tb2RlbD1cImN0cmwubW9kZWwudGlyZXNcIj5cXG4nICtcbiAgICAnICAgICAgICA8bWQtcmFkaW8tYnV0dG9uIG5nLXZhbHVlPVwiZmFsc2VcIiA+RmFpbDwvbWQtcmFkaW8tYnV0dG9uPlxcbicgK1xuICAgICcgICAgICAgIDxtZC1yYWRpby1idXR0b24gbmctdmFsdWU9XCJ0cnVlXCI+IFBhc3MgPC9tZC1yYWRpby1idXR0b24+XFxuJyArXG4gICAgJyAgICAgIDwvbWQtcmFkaW8tZ3JvdXA+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICA8L2Rpdj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDxkaXYgbGF5b3V0PVwicm93XCIgY2xhc3M9XCJ3Zm0taW5zcGVjdGlvbi1yb3dcIj5cXG4nICtcbiAgICAnICAgIDxkaXYgZmxleD1cIjMwXCIgbGF5b3V0PVwicm93XCIgbGF5b3V0LWFsaWduPVwic3RhcnQgY2VudGVyXCI+XFxuJyArXG4gICAgJyAgICAgIDxzcGFuIGNsYXNzPVwibWQtYm9keS0yXCI+XFxuJyArXG4gICAgJyAgICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmJyaWdodG5lc3NfbG93PC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICAgIExpZ2h0c1xcbicgK1xuICAgICcgICAgICA8L3NwYW4+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDxkaXYgZmxleCBsYXlvdXQtYWxpZ249XCJzdGFydCBzdGFydFwiPlxcbicgK1xuICAgICcgICAgICA8bWQtcmFkaW8tZ3JvdXAgbGF5b3V0IG5nLW1vZGVsPVwiY3RybC5tb2RlbC5saWdodHNcIj5cXG4nICtcbiAgICAnICAgICAgICA8bWQtcmFkaW8tYnV0dG9uIG5nLXZhbHVlPVwiZmFsc2VcIj5GYWlsPC9tZC1yYWRpby1idXR0b24+XFxuJyArXG4gICAgJyAgICAgICAgPG1kLXJhZGlvLWJ1dHRvbiBuZy12YWx1ZT1cInRydWVcIj4gUGFzcyA8L21kLXJhZGlvLWJ1dHRvbj5cXG4nICtcbiAgICAnICAgICAgPC9tZC1yYWRpby1ncm91cD5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgIDwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8ZGl2IGNsYXNzPVwid29ya2Zsb3ctYWN0aW9ucyBtZC1wYWRkaW5nIG1kLXdoaXRlZnJhbWUtejRcIj5cXG4nICtcbiAgICAnICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXByaW1hcnkgbWQtaHVlLTFcIiBuZy1jbGljaz1cImN0cmwuYmFjaygkZXZlbnQpXCI+QmFjazwvbWQtYnV0dG9uPlxcbicgK1xuICAgICcgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcHJpbWFyeVwiIG5nLWNsaWNrPVwiY3RybC5kb25lKCRldmVudClcIj5Db250aW51ZTwvbWQtYnV0dG9uPlxcbicgK1xuICAgICcgICAgPC9kaXY+PCEtLSB3b3JrZmxvdy1hY3Rpb25zLS0+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLndvcmtvcmRlcicpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ud29ya29yZGVyJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS92ZWhpY2xlLWluc3BlY3Rpb24udHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLXN1YmhlYWRlcj5WZWhpY2xlIEluc3BlY3Rpb248L21kLXN1YmhlYWRlcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLWxpc3QgY2xhc3M9XCJyaXNrLWFzc2Vzc21lbnRcIj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lXCIgPlxcbicgK1xuICAgICcgICAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+bG9jYWxfZ2FzX3N0YXRpb248L21kLWljb24+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlxcbicgK1xuICAgICcgICAgICAgIDxoMz57e3ZlaGljbGVJbnNwZWN0aW9uLmZ1ZWx9fSAlPC9oMz5cXG4nICtcbiAgICAnICAgICAgICA8cD5GdWVsPC9wPlxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4nICtcbiAgICAnICAgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmVcIiA+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIiBuZy1pZj1cInZlaGljbGVJbnNwZWN0aW9uLnRpcmVzXCIgY2xhc3M9XCJzdWNjZXNzXCI+Y2hlY2tfY2lyY2xlPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCIgbmctaWY9XCIhIHZlaGljbGVJbnNwZWN0aW9uLnRpcmVzXCIgY2xhc3M9XCJkYW5nZXJcIj5jYW5jZWw8L21kLWljb24+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlxcbicgK1xuICAgICcgICAgICAgIDxoMyBuZy1pZj1cInZlaGljbGVJbnNwZWN0aW9uLnRpcmVzXCI+UGFzczwvaDM+XFxuJyArXG4gICAgJyAgICAgICAgPGgzIG5nLWlmPVwiISB2ZWhpY2xlSW5zcGVjdGlvbi50aXJlc1wiPkZhaWw8L2gzPlxcbicgK1xuICAgICcgICAgICAgIDxwPlRpcmVzPC9wPlxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4nICtcbiAgICAnICAgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmVcIiA+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIiBuZy1pZj1cInZlaGljbGVJbnNwZWN0aW9uLmxpZ2h0c1wiIGNsYXNzPVwic3VjY2Vzc1wiPmNoZWNrX2NpcmNsZTwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiIG5nLWlmPVwiISB2ZWhpY2xlSW5zcGVjdGlvbi5saWdodHNcIiBjbGFzcz1cImRhbmdlclwiPmNhbmNlbDwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgICAgPGgzIG5nLWlmPVwidmVoaWNsZUluc3BlY3Rpb24ubGlnaHRzXCI+UGFzczwvaDM+XFxuJyArXG4gICAgJyAgICAgICAgPGgzIG5nLWlmPVwiISB2ZWhpY2xlSW5zcGVjdGlvbi5saWdodHNcIj5GYWlsPC9oMz5cXG4nICtcbiAgICAnICAgICAgICA8cD5MaWdodHM8L3A+XFxuJyArXG4gICAgJyAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8L21kLWxpc3Q+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbnZhciBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0udmVoaWNsZS1pbnNwZWN0aW9uJywgWyd3Zm0uY29yZS5tZWRpYXRvciddKTtcblxucmVxdWlyZSgnLi4vLi4vZGlzdCcpO1xuXG5uZ01vZHVsZS5kaXJlY3RpdmUoJ3ZlaGljbGVJbnNwZWN0aW9uJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUsIG1lZGlhdG9yKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICAsIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS92ZWhpY2xlLWluc3BlY3Rpb24udHBsLmh0bWwnKVxuICAsIHNjb3BlOiB7XG4gICAgICB2ZWhpY2xlSW5zcGVjdGlvbjogJz12YWx1ZSdcbiAgICB9XG4gIH07XG59KVxuXG5uZ01vZHVsZS5kaXJlY3RpdmUoJ3ZlaGljbGVJbnNwZWN0aW9uRm9ybScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCBtZWRpYXRvcikge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRSdcbiAgLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvdmVoaWNsZS1pbnNwZWN0aW9uLWZvcm0udHBsLmh0bWwnKVxuICAsIHNjb3BlOiB7XG4gICAgfVxuICAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxmLm1vZGVsID0ge307XG4gICAgc2VsZi5iYWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3dmbTp3b3JrZmxvdzpzdGVwOmJhY2snKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgc2VsZi5kb25lID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3dmbTp3b3JrZmxvdzpzdGVwOmRvbmUnLCBzZWxmLm1vZGVsKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cbiAgLCBjb250cm9sbGVyQXM6ICdjdHJsJ1xuICB9O1xufSlcblxubW9kdWxlLmV4cG9ydHMgPSAnd2ZtLnZlaGljbGUtaW5zcGVjdGlvbic7XG4iLCJyZXF1aXJlKCcuL3dvcmtmbG93LWZvcm0udHBsLmh0bWwuanMnKTtcbnJlcXVpcmUoJy4vd29ya2Zsb3ctcHJvZ3Jlc3MudHBsLmh0bWwuanMnKTtcbnJlcXVpcmUoJy4vd29ya2Zsb3ctc3RlcC1kZXRhaWwudHBsLmh0bWwuanMnKTtcbnJlcXVpcmUoJy4vd29ya2Zsb3ctc3RlcC1mb3JtLnRwbC5odG1sLmpzJyk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ud29ya2Zsb3cuZGlyZWN0aXZlcycpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ud29ya2Zsb3cuZGlyZWN0aXZlcycsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvd29ya2Zsb3ctZm9ybS50cGwuaHRtbCcsXG4gICAgJzwhLS1cXG4nICtcbiAgICAnIENPTkZJREVOVElBTFxcbicgK1xuICAgICcgQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXFxuJyArXG4gICAgJyBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXFxuJyArXG4gICAgJy0tPlxcbicgK1xuICAgICc8bWQtdG9vbGJhciBjbGFzcz1cImNvbnRlbnQtdG9vbGJhciBtZC1wcmltYXJ5XCI+XFxuJyArXG4gICAgJyAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItdG9vbHNcIj5cXG4nICtcbiAgICAnICAgIDxoMz57e2N0cmwubW9kZWwuaWQgPyBcXCdVcGRhdGVcXCcgOiBcXCdDcmVhdGVcXCd9fSB3b3JrZmxvdzwvaDM+XFxuJyArXG4gICAgJyAgICA8c3BhbiBmbGV4Pjwvc3Bhbj5cXG4nICtcbiAgICAnICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIG5nLWNsaWNrPVwiY3RybC5zZWxlY3RXb3JrZmxvdygkZXZlbnQsIHdvcmtmbG93KVwiPlxcbicgK1xuICAgICcgICAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+Y2xvc2U8L21kLWljb24+XFxuJyArXG4gICAgJyAgICA8L21kLWJ1dHRvbj5cXG4nICtcbiAgICAnICA8L2Rpdj5cXG4nICtcbiAgICAnPC9tZC10b29sYmFyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGRpdiBjbGFzcz1cIndmbS1tYWluY29sLXNjcm9sbFwiPlxcbicgK1xuICAgICc8Zm9ybSBuYW1lPVwid29ya2Zsb3dGb3JtXCIgbmctc3VibWl0PVwiY3RybC5kb25lKHdvcmtmbG93Rm9ybS4kdmFsaWQpXCIgbm92YWxpZGF0ZSBsYXlvdXQtcGFkZGluZyBsYXlvdXQtbWFyZ2luPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGRpdj5cXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIj5cXG4nICtcbiAgICAnICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XFxuJyArXG4gICAgJyAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCIgbmctbW9kZWw9XCJjdHJsLm1vZGVsLnRpdGxlXCIgcmVxdWlyZWQ+XFxuJyArXG4gICAgJyAgICA8ZGl2IG5nLW1lc3NhZ2VzPVwid29ya2Zsb3cudGl0bGUuJGVycm9yXCIgbmctaWY9XCJjdHJsLnN1Ym1pdHRlZCB8fCB3b3JrZmxvd0Zvcm0udGl0bGUuJGRpcnR5XCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+QSB0aXRsZSBpcyByZXF1aXJlZC48L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICc8L2Rpdj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPG1kLWJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiPnt7Y3RybC5tb2RlbC5pZCA/IFxcJ1VwZGF0ZVxcJyA6IFxcJ0NyZWF0ZVxcJ319IFdvcmtmbG93PC9tZC1idXR0b24+XFxuJyArXG4gICAgJzwvZm9ybT5cXG4nICtcbiAgICAnPC9kaXY+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLndvcmtmbG93LmRpcmVjdGl2ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLndvcmtmbG93LmRpcmVjdGl2ZXMnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnd2ZtLXRlbXBsYXRlL3dvcmtmbG93LXByb2dyZXNzLnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJzxkaXYgY2xhc3M9XCJ3b3JrZmxvdy1wcm9ncmVzc1wiIG5nLWNsYXNzPVwie2Nsb3NlOiBjdHJsLmNsb3NlZH1cIj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvbiBtZC13YXJtIGV4cGFuZC1jb2xsYXBzZVwiPlxcbicgK1xuICAgICcgIDxtZC1pY29uIG5nLXNob3c9XCJjdHJsLmNsb3NlZFwiIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIiBuZy1jbGljaz1cImN0cmwub3BlbigpXCI+a2V5Ym9hcmRfYXJyb3dfZG93bjwvbWQtaWNvbj5cXG4nICtcbiAgICAnICA8bWQtaWNvbiBuZy1zaG93PVwiIWN0cmwuY2xvc2VkXCIgbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiIG5nLWNsaWNrPVwiY3RybC5jbG9zZSgpXCI+a2V5Ym9hcmRfYXJyb3dfdXA8L21kLWljb24+XFxuJyArXG4gICAgJzwvbWQtYnV0dG9uPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGRpdiBjbGFzcz1cInNjcm9sbC1ib3hcIj5cXG4nICtcbiAgICAnICA8b2w+XFxuJyArXG4gICAgJyAgICA8bGkgbmctY2xhc3M9XCJ7YWN0aXZlOiBcXCctMVxcJyA9PSBjdHJsLnN0ZXBJbmRleCwgY29tcGxldGU6IC0xIDwgY3RybC5zdGVwSW5kZXh9XCI+XFxuJyArXG4gICAgJyAgICAgIDxzcGFuIGNsYXNzPVwibWQtY2FwdGlvblwiPjxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj52aXNpYmlsaXR5PC9tZC1pY29uPjwvc3Bhbj5PdmVydmlld1xcbicgK1xuICAgICcgICAgPC9saT5cXG4nICtcbiAgICAnICAgIDxsaSBuZy1yZXBlYXQ9XCJzdGVwIGluIGN0cmwuc3RlcHNcIiBuZy1jbGFzcz1cInthY3RpdmU6ICRpbmRleCA9PSBjdHJsLnN0ZXBJbmRleCwgY29tcGxldGU6ICRpbmRleCA8IGN0cmwuc3RlcEluZGV4fVwiPlxcbicgK1xuICAgICcgICAgICA8c3BhbiBjbGFzcz1cIm1kLWNhcHRpb25cIj57eyRpbmRleCArIDF9fTwvc3Bhbj57e3N0ZXAubmFtZX19XFxuJyArXG4gICAgJyAgICA8L2xpPlxcbicgK1xuICAgICcgICAgPGxpIG5nLWNsYXNzPVwie2FjdGl2ZTogY3RybC5zdGVwcy5sZW5ndGggPD0gY3RybC5zdGVwSW5kZXgsIGNvbXBsZXRlOiBjdHJsLnN0ZXBzLmxlbmd0aCA8PSBjdHJsLnN0ZXBJbmRleH1cIj5cXG4nICtcbiAgICAnICAgICAgPHNwYW4gY2xhc3M9XCJtZC1jYXB0aW9uXCI+PG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmRvbmU8L21kLWljb24+PC9zcGFuPlN1bW1hcnlcXG4nICtcbiAgICAnICAgIDwvbGk+XFxuJyArXG4gICAgJyAgPC9vbD5cXG4nICtcbiAgICAnPC9kaXY+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICdcXG4nICtcbiAgICAnPC9kaXY+PCEtLSB3b3JrZmxvdy1wcm9ncmVzcyAtLT5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ud29ya2Zsb3cuZGlyZWN0aXZlcycpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ud29ya2Zsb3cuZGlyZWN0aXZlcycsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvd29ya2Zsb3ctc3RlcC1kZXRhaWwudHBsLmh0bWwnLFxuICAgICc8aDIgY2xhc3M9XCJtZC10aXRsZVwiPnt7c3RlcC5uYW1lfX08L2gyPlxcbicgK1xuICAgICc8bWQtbGlzdD5cXG4nICtcbiAgICAnICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lXCIgPlxcbicgK1xuICAgICcgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmxhYmVsPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgIDxoMz57e3N0ZXAuY29kZX19PC9oMz5cXG4nICtcbiAgICAnICAgICAgPHA+Q29kZTwvcD5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICcgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4nICtcbiAgICAnICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJyAgPGRpdiBuZy1zaG93PVwic3RlcC5mb3JtSWRcIj5cXG4nICtcbiAgICAnICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmVcIj5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmxhYmVsPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgICA8aDM+e3tzdGVwLmZvcm1JZH19PC9oMz5cXG4nICtcbiAgICAnICAgICAgICA8cD5Gb3JtSWQ8L3A+XFxuJyArXG4gICAgJyAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJyAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJyAgPC9kaXY+XFxuJyArXG4gICAgJzwvbWQtbGlzdD5cXG4nICtcbiAgICAnPGRpdiBuZy1zaG93PVwic3RlcC50ZW1wbGF0ZXNcIj5cXG4nICtcbiAgICAnICA8ZGl2IG5nLXNob3c9XCJzdGVwLnRlbXBsYXRlcy52aWV3XCI+XFxuJyArXG4gICAgJyAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lXCI+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5sYWJlbDwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgICAgPGgzPnt7c3RlcC50ZW1wbGF0ZXMudmlld319PC9oMz5cXG4nICtcbiAgICAnICAgICAgICA8cD5UZW1wbGF0ZSB2aWV3PC9wPlxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICcgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICcgIDwvZGl2PlxcbicgK1xuICAgICcgIDxkaXYgbmctc2hvdz1cInN0ZXAudGVtcGxhdGVzLmZvcm1cIj5cXG4nICtcbiAgICAnICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmVcIj5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmxhYmVsPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgICA8aDM+e3tzdGVwLnRlbXBsYXRlcy5mb3JtfX08L2gzPlxcbicgK1xuICAgICcgICAgICAgIDxwPlRlbXBsYXRlIGZvcm08L3A+XFxuJyArXG4gICAgJyAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJyAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJzwvZGl2PlxcbicgK1xuICAgICc8L2Rpdj5cXG4nICtcbiAgICAnPC9tZC1saXN0PlxcbicgK1xuICAgICcnKTtcbn1dKTtcbiIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS53b3JrZmxvdy5kaXJlY3RpdmVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS53b3JrZmxvdy5kaXJlY3RpdmVzJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS93b3JrZmxvdy1zdGVwLWZvcm0udHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnPG1kLXRvb2xiYXIgY2xhc3M9XCJjb250ZW50LXRvb2xiYXIgbWQtcHJpbWFyeVwiIG5nLXNob3c9XCJzdGVwXCI+XFxuJyArXG4gICAgJyAgPGRpdiBjbGFzcz1cIm1kLXRvb2xiYXItdG9vbHNcIj5cXG4nICtcbiAgICAnICAgIDxoMz5VcGRhdGUgc3RlcDwvaDM+XFxuJyArXG4gICAgJyAgICA8c3BhbiBmbGV4Pjwvc3Bhbj5cXG4nICtcbiAgICAnICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIG5nLWNsaWNrPVwiY3RybC5zZWxlY3RXb3JrZmxvdygkZXZlbnQsIHdvcmtmbG93KVwiPlxcbicgK1xuICAgICcgICAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+Y2xvc2U8L21kLWljb24+XFxuJyArXG4gICAgJyAgICA8L21kLWJ1dHRvbj5cXG4nICtcbiAgICAnICA8L2Rpdj5cXG4nICtcbiAgICAnPC9tZC10b29sYmFyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGZvcm0gbmFtZT1cIndvcmtmbG93U3RlcEZvcm1cIiBuZy1zdWJtaXQ9XCJjdHJsLmRvbmUod29ya2Zsb3dTdGVwRm9ybS4kdmFsaWQpXCIgbm92YWxpZGF0ZSBsYXlvdXQtcGFkZGluZyBsYXlvdXQtbWFyZ2luPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGRpdj5cXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIj5cXG4nICtcbiAgICAnICAgIDxsYWJlbD5Db2RlPC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY29kZVwiIG5hbWU9XCJjb2RlXCIgbmctbW9kZWw9XCJjdHJsLm1vZGVsLnN0ZXAuY29kZVwiIHJlcXVpcmVkPlxcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlcz1cIndvcmtmbG93Lm1vZGVsLnN0ZXAuJGVycm9yXCIgbmctaWY9XCJjdHJsLnN1Ym1pdHRlZCB8fCB3b3JrZmxvd0Zvcm0udGl0bGUuJGRpcnR5XCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+QSBjb2RlIGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCI+XFxuJyArXG4gICAgJyAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XFxuJyArXG4gICAgJyAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIG5nLW1vZGVsPVwiY3RybC5tb2RlbC5zdGVwLm5hbWVcIiByZXF1aXJlZD5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZXM9XCJ3b3JrZmxvdy5uYW1lLiRlcnJvclwiIG5nLWlmPVwiY3RybC5zdWJtaXR0ZWQgfHwgd29ya2Zsb3dGb3JtLm5hbWUuJGRpcnR5XCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+QSBuYW1lIGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCI+XFxuJyArXG4gICAgJyAgICA8bGFiZWw+Rm9ybUlEPC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZm9ybUlkXCIgbmFtZT1cImZvcm1JZFwiIG5nLW1vZGVsPVwiY3RybC5tb2RlbC5zdGVwLmZvcm1JZFwiPlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiPlxcbicgK1xuICAgICcgICAgPGxhYmVsPmZvcm0gdGVtcGxhdGU8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmb3JtXCIgbmFtZT1cImZvcm1cIiBuZy1tb2RlbD1cImN0cmwubW9kZWwuc3RlcC50ZW1wbGF0ZXMuZm9ybVwiPlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiPlxcbicgK1xuICAgICcgICAgPGxhYmVsPnZpZXcgdGVtcGxhdGU8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ2aWV3XCIgbmFtZT1cInZpZXdcIiBuZy1tb2RlbD1cImN0cmwubW9kZWwuc3RlcC50ZW1wbGF0ZXMudmlld1wiPlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPC9kaXY+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDxtZC1idXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwibWQtcmFpc2VkIG1kLXByaW1hcnlcIj57e2N0cmwubW9kZWwuaXNOZXcgPyBcXCdBZGRcXCcgOiBcXCdVcGRhdGVcXCd9fSBzdGVwPC9tZC1idXR0b24+XFxuJyArXG4gICAgJzwvZm9ybT5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxudmFyIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS53b3JrZmxvdy5kaXJlY3RpdmVzJywgW1xuICAnd2ZtLmNvcmUubWVkaWF0b3InXG5dKTtcbm1vZHVsZS5leHBvcnRzID0gJ3dmbS53b3JrZmxvdy5kaXJlY3RpdmVzJztcblxucmVxdWlyZSgnLi4vLi4vZGlzdCcpO1xuXG5uZ01vZHVsZS5kaXJlY3RpdmUoJ3dvcmtmbG93UHJvZ3Jlc3MnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgJHRpbWVvdXQpIHtcbiAgZnVuY3Rpb24gcGFyc2VTdGVwSW5kZXgoY3RybCwgc3RlcEluZGV4KSB7XG4gICAgY3RybC5zdGVwSW5kZXggPSBzdGVwSW5kZXg7XG4gICAgY3RybC5zdGVwID0gY3RybC5zdGVwc1tjdHJsLnN0ZXBJbmRleF07XG4gIH1cbiAgZnVuY3Rpb24gc2Nyb2xsVG9BY3RpdmUoZWxlbWVudCkge1xuICAgIGVsZW1lbnQgPSBlbGVtZW50WzBdO1xuICAgIHZhciBhY3RpdmUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpLmFjdGl2ZScpO1xuICAgIGlmICghYWN0aXZlKSB7XG4gICAgICBhY3RpdmUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpJyk7XG4gICAgfTtcbiAgICB2YXIgc2Nyb2xsZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGwtYm94Jyk7XG4gICAgdmFyIG9mZnNldCA9IGFjdGl2ZS5vZmZzZXRUb3A7XG4gICAgc2Nyb2xsZXIuc2Nyb2xsVG9wID0gb2Zmc2V0O1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICAsIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS93b3JrZmxvdy1wcm9ncmVzcy50cGwuaHRtbCcpXG4gICwgc2NvcGU6IHtcbiAgICAgIHN0ZXBJbmRleDogJz0nLFxuICAgICAgd29ya2Zsb3c6ICc9J1xuICAgIH1cbiAgLCBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgc2Nyb2xsVG9BY3RpdmUoZWxlbWVudCk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gICwgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCAkZWxlbWVudCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi53b3JrZmxvdyA9ICRzY29wZS53b3JrZmxvdztcbiAgICAgIHNlbGYuc3RlcHMgPSAkc2NvcGUud29ya2Zsb3cuc3RlcHM7XG4gICAgICBzZWxmLm9wZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5jbG9zZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHNlbGYuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2Nyb2xsVG9BY3RpdmUoJGVsZW1lbnQpO1xuICAgICAgICBzZWxmLmNsb3NlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBwYXJzZVN0ZXBJbmRleChzZWxmLCAkc2NvcGUuc3RlcEluZGV4ID8gcGFyc2VJbnQoJHNjb3BlLnN0ZXBJbmRleCkgOiAwKVxuXG4gICAgICAkc2NvcGUuJHdhdGNoKCdzdGVwSW5kZXgnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N0ZXBJbmRleCBjaGFuZ2VkJylcbiAgICAgICAgcGFyc2VTdGVwSW5kZXgoc2VsZiwgJHNjb3BlLnN0ZXBJbmRleCA/IHBhcnNlSW50KCRzY29wZS5zdGVwSW5kZXgpIDogMCk7XG4gICAgICAgIHNlbGYuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2Nyb2xsVG9BY3RpdmUoJGVsZW1lbnQpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgLCBjb250cm9sbGVyQXM6ICdjdHJsJ1xuICB9O1xufSlcblxuLmRpcmVjdGl2ZSgnd29ya2Zsb3dTdGVwJywgZnVuY3Rpb24oJHRlbXBsYXRlUmVxdWVzdCwgJGNvbXBpbGUsIG1lZGlhdG9yKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICAsIHNjb3BlOiB7XG4gICAgICBzdGVwOiAnPScgLy8geyAuLi4sIHRlbXBsYXRlOiBcImFuIGh0bWwgdGVtcGxhdGUgdG8gdXNlXCIsIHRlbXBsYXRlUGF0aDogXCJhIHRlbXBsYXRlIHBhdGggdG8gbG9hZFwifVxuICAgICwgd29ya29yZGVyOiAnPSdcbiAgICB9XG4gICwgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgc2NvcGUuJHdhdGNoKCdzdGVwJywgZnVuY3Rpb24oc3RlcCkge1xuICAgICAgICBpZiAoc2NvcGUuc3RlcCkge1xuICAgICAgICAgIGlmIChzY29wZS5zdGVwLmZvcm1JZCkge1xuICAgICAgICAgICAgZWxlbWVudC5odG1sKCc8YXBwZm9ybSBmb3JtLWlkPVwic3RlcC5mb3JtSWRcIj48L2FwcGZvcm0+Jyk7XG4gICAgICAgICAgICAkY29tcGlsZShlbGVtZW50LmNvbnRlbnRzKCkpKHNjb3BlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNjb3BlLnN0ZXAudGVtcGxhdGVQYXRoKSB7XG4gICAgICAgICAgICAkdGVtcGxhdGVSZXF1ZXN0KHNjb3BlLnN0ZXAudGVtcGxhdGVQYXRoKS50aGVuKGZ1bmN0aW9uKHRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuaHRtbCh0ZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICRjb21waWxlKGVsZW1lbnQuY29udGVudHMoKSkoc2NvcGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaHRtbChzY29wZS5zdGVwLnRlbXBsYXRlcy5mb3JtKTtcbiAgICAgICAgICAgICRjb21waWxlKGVsZW1lbnQuY29udGVudHMoKSkoc2NvcGUpO1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gICwgY29udHJvbGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLm1lZGlhdG9yID0gbWVkaWF0b3I7XG4gICAgfVxuICAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gIH07XG59KVxuXG4uZGlyZWN0aXZlKCd3b3JrZmxvd1Jlc3VsdCcsIGZ1bmN0aW9uKCRjb21waWxlKSB7XG4gIHZhciByZW5kZXIgPSBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICBpZiAoc2NvcGUud29ya2Zsb3cuc3RlcHMgJiYgc2NvcGUucmVzdWx0KSB7XG4gICAgICBlbGVtZW50LmNoaWxkcmVuKCkucmVtb3ZlKCk7XG4gICAgICBzY29wZS53b3JrZmxvdy5zdGVwcy5mb3JFYWNoKGZ1bmN0aW9uKHN0ZXAsIHN0ZXBJbmRleCkge1xuICAgICAgICBpZiAoc2NvcGUucmVzdWx0LnN0ZXBSZXN1bHRzICYmIHNjb3BlLnJlc3VsdC5zdGVwUmVzdWx0c1tzdGVwLmNvZGVdKSB7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmQoJzxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj4nKTtcbiAgICAgICAgICB2YXIgdGVtcGxhdGUgPSAnJztcbiAgICAgICAgICB0ZW1wbGF0ZSA9ICc8d29ya29yZGVyLXN1Ym1pc3Npb24tcmVzdWx0J1xuICAgICAgICAgIHRlbXBsYXRlICs9ICcgcmVzdWx0PVwicmVzdWx0LnN0ZXBSZXN1bHRzW1xcJycrc3RlcC5jb2RlKydcXCddXCInXG4gICAgICAgICAgdGVtcGxhdGUgKz0gJyBzdGVwPVwid29ya2Zsb3cuc3RlcHNbXFwnJytzdGVwSW5kZXgrJ1xcJ11cIidcbiAgICAgICAgICB0ZW1wbGF0ZSArPSAnPjwvd29ya29yZGVyLXN1Ym1pc3Npb24tcmVzdWx0Pic7XG4gICAgICAgICAgY29uc29sZS5sb2codGVtcGxhdGUpO1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKHRlbXBsYXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAkY29tcGlsZShlbGVtZW50LmNvbnRlbnRzKCkpKHNjb3BlKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICAsIHNjb3BlOiB7XG4gICAgICB3b3JrZmxvdzogJz0nXG4gICAgLCByZXN1bHQ6ICc9J1xuICAgIH1cbiAgLCBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICByZW5kZXIoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKTtcbiAgICB9XG4gIH07XG59KVxuLmRpcmVjdGl2ZSgnd29ya2Zsb3dGb3JtJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUsIG1lZGlhdG9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnRSdcbiAgICAsIHRlbXBsYXRlOiAkdGVtcGxhdGVDYWNoZS5nZXQoJ3dmbS10ZW1wbGF0ZS93b3JrZmxvdy1mb3JtLnRwbC5odG1sJylcbiAgICAsIHNjb3BlOiB7XG4gICAgICB3b3JrZmxvdyA6ICc9dmFsdWUnXG4gICAgICB9XG4gICAgLCBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLm1vZGVsID0gYW5ndWxhci5jb3B5KCRzY29wZS53b3JrZmxvdyk7XG4gICAgICAgIHNlbGYuc3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgIHNlbGYuZG9uZSA9IGZ1bmN0aW9uKGlzVmFsaWQpIHtcbiAgICAgICAgICBzZWxmLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgIGlmICghc2VsZi5tb2RlbC5pZCAmJiBzZWxmLm1vZGVsLmlkICE9PSAwKSB7XG4gICAgICAgICAgICAgIHNlbGYubW9kZWwuc3RlcHMgPSBbXTtcbiAgICAgICAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOndvcmtmbG93OmNyZWF0ZWQnLCBzZWxmLm1vZGVsKTtcbiAgICAgICAgICAgIH0gIGVsc2Uge1xuICAgICAgICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya2Zsb3c6dXBkYXRlZCcsIHNlbGYubW9kZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc2VsZi5zZWxlY3RXb3JrZmxvdyA9IGZ1bmN0aW9uKGV2ZW50LCB3b3JrZmxvdykge1xuICAgICAgICAgIGlmKHdvcmtmbG93LmlkKSB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya2Zsb3c6c2VsZWN0ZWQnLCB3b3JrZmxvdyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOndvcmtmbG93Omxpc3QnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICwgY29udHJvbGxlckFzOiAnY3RybCdcbiAgICB9O1xuICB9KVxuLmRpcmVjdGl2ZSgnd29ya2Zsb3dTdGVwRm9ybScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCBtZWRpYXRvcikge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0UnXG4gICAgLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvd29ya2Zsb3ctc3RlcC1mb3JtLnRwbC5odG1sJylcbiAgICAsIHNjb3BlOiB7XG4gICAgICB3b3JrZmxvdyA6ICc9JyxcbiAgICAgIHN0ZXAgOiAnPSdcbiAgICAgIH1cbiAgICAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBleGlzdGluZ1N0ZXA7XG4gICAgICAgIHNlbGYuc3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgIGlmKCEkc2NvcGUuc3RlcCl7XG4gICAgICAgICAgc2VsZi5tb2RlbCA9IHtcbiAgICAgICAgICAgIHN0ZXAgOiB7XG4gICAgICAgICAgICAgIHRlbXBsYXRlcyA6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd29ya2Zsb3cgOiBhbmd1bGFyLmNvcHkoJHNjb3BlLndvcmtmbG93KSxcbiAgICAgICAgICAgIGlzTmV3IDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzZWxmLm1vZGVsID0ge1xuICAgICAgICAgICAgd29ya2Zsb3cgOiBhbmd1bGFyLmNvcHkoJHNjb3BlLndvcmtmbG93KSxcbiAgICAgICAgICAgIHN0ZXAgOiBhbmd1bGFyLmNvcHkoJHNjb3BlLnN0ZXApXG4gICAgICAgICAgfVxuICAgICAgICAgIGV4aXN0aW5nU3RlcCA9ICRzY29wZS53b3JrZmxvdy5zdGVwcy5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge3JldHVybiBpdGVtLmNvZGUgPT0gJHNjb3BlLnN0ZXAuY29kZTt9KS5sZW5ndGg+MDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuZG9uZSA9IGZ1bmN0aW9uKGlzVmFsaWQpIHtcbiAgICAgICAgICBzZWxmLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgLy93ZSBjaGVjayBpZiB0aGUgc3RlcCBhbHJlYWR5IGV4aXN0IG9yIG5vdCwgaWYgaXQgZXhzaXQgd2UgcmVtb3ZlIHRoZSBvbGQgZWxlbWVudFxuICAgICAgICAgICAgICBpZihleGlzdGluZ1N0ZXApe1xuICAgICAgICAgICAgICAgICRzY29wZS53b3JrZmxvdy5zdGVwcyA9ICRzY29wZS53b3JrZmxvdy5zdGVwcy5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge3JldHVybiBpdGVtLmNvZGUgIT0gJHNjb3BlLnN0ZXAuY29kZTt9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvL3dlIGFkZCB0aGUgbmV3IG9yIHVwZGF0ZWQgc3RlcFxuICAgICAgICAgICAgICAkc2NvcGUud29ya2Zsb3cuc3RlcHMucHVzaChzZWxmLm1vZGVsLnN0ZXApO1xuICAgICAgICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya2Zsb3c6dXBkYXRlZCcsICRzY29wZS53b3JrZmxvdyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHNlbGYuc2VsZWN0V29ya2Zsb3cgPSBmdW5jdGlvbihldmVudCwgd29ya2Zsb3cpIHtcbiAgICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya2Zsb3c6c2VsZWN0ZWQnLCB3b3JrZmxvdyk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICwgY29udHJvbGxlckFzOiAnY3RybCdcbiAgICB9O1xuICB9KVxuICAuZGlyZWN0aXZlKCd3b3JrZmxvd1N0ZXBEZXRhaWwnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgbWVkaWF0b3IpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnRSdcbiAgICAgICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL3dvcmtmbG93LXN0ZXAtZGV0YWlsLnRwbC5odG1sJylcbiAgICAgICwgc2NvcGU6IHtcbiAgICAgICAgICBzdGVwIDogJz0nXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSlcbjtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJylcbiAgLCBfID0gcmVxdWlyZSgnbG9kYXNoJylcbiAgO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0ud29ya2Zsb3cuc3luYyc7XG5cbmZ1bmN0aW9uIHdyYXBNYW5hZ2VyKCRxLCAkdGltZW91dCwgbWFuYWdlcikge1xuICB2YXIgd3JhcHBlZE1hbmFnZXIgPSBfLmNyZWF0ZShtYW5hZ2VyKTtcbiAgd3JhcHBlZE1hbmFnZXIubmV3ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHZhciB3b3JrZmxvdyA9IHtcbiAgICAgICAgdGl0bGU6ICcnXG4gICAgICB9O1xuICAgICAgZGVmZXJyZWQucmVzb2x2ZSh3b3JrZmxvdyk7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH07XG5cbiAgcmV0dXJuIHdyYXBwZWRNYW5hZ2VyO1xufVxuXG5hbmd1bGFyLm1vZHVsZSgnd2ZtLndvcmtmbG93LnN5bmMnLCBbcmVxdWlyZSgnZmgtd2ZtLXN5bmMnKV0pXG4uZmFjdG9yeSgnd29ya2Zsb3dTeW5jJywgZnVuY3Rpb24oJHEsICR0aW1lb3V0LCBzeW5jU2VydmljZSkge1xuICBzeW5jU2VydmljZS5pbml0KCRmaCwgY29uZmlnLnN5bmNPcHRpb25zKTtcbiAgdmFyIHdvcmtmbG93U3luYyA9IHt9O1xuICB3b3JrZmxvd1N5bmMuY3JlYXRlTWFuYWdlciA9IGZ1bmN0aW9uKHF1ZXJ5UGFyYW1zKSB7XG4gICAgaWYgKHdvcmtmbG93U3luYy5tYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gJHEud2hlbih3b3JrZmxvd1N5bmMubWFuYWdlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB3b3JrZmxvd1N5bmMubWFuYWdlclByb21pc2UgPSBzeW5jU2VydmljZS5tYW5hZ2UoY29uZmlnLmRhdGFzZXRJZCwgbnVsbCwgcXVlcnlQYXJhbXMpXG4gICAgICAudGhlbihmdW5jdGlvbihtYW5hZ2VyKSB7XG4gICAgICAgIHdvcmtmbG93U3luYy5tYW5hZ2VyID0gd3JhcE1hbmFnZXIoJHEsICR0aW1lb3V0LCBtYW5hZ2VyKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1N5bmMgaXMgbWFuYWdpbmcgZGF0YXNldDonLCBjb25maWcuZGF0YXNldElkLCAnd2l0aCBmaWx0ZXI6ICcsIHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgLy8gVE9ETzogd2Ugc2hvdWxkIHJlZmFjdG9yIHRoZXNlIHV0aWxpdGllcyBmdW5jdGlvbnMgc29tZXdoZXJlIGVsc2UgcHJvYmFibHlcbiAgICAgICAgd29ya2Zsb3dTeW5jLm1hbmFnZXIuc3RlcFJldmlldyA9IGZ1bmN0aW9uKHN0ZXBzLCByZXN1bHQpIHtcbiAgICAgICAgICB2YXIgc3RlcEluZGV4ID0gLTE7XG4gICAgICAgICAgdmFyIGNvbXBsZXRlO1xuICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0ZXBSZXN1bHRzICYmIHJlc3VsdC5zdGVwUmVzdWx0cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaSA8IHN0ZXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhciBzdGVwID0gc3RlcHNbaV07XG4gICAgICAgICAgICAgIHZhciBzdGVwUmVzdWx0ID0gcmVzdWx0LnN0ZXBSZXN1bHRzW3N0ZXAuY29kZV07XG4gICAgICAgICAgICAgIGlmIChzdGVwUmVzdWx0ICYmIChzdGVwUmVzdWx0LnN0YXR1cyA9PT0gJ2NvbXBsZXRlJyB8fCBzdGVwUmVzdWx0LnN0YXR1cyA9PT0gJ3BlbmRpbmcnKSkge1xuICAgICAgICAgICAgICAgIHN0ZXBJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgaWYgKHN0ZXBSZXN1bHQuc3RhdHVzID09PSAncGVuZGluZycpIHtcbiAgICAgICAgICAgICAgICAgIGNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5leHRTdGVwSW5kZXg6IHN0ZXBJbmRleCxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZSAvLyBmYWxzZSBpcyBhbnkgc3RlcHMgYXJlIFwicGVuZGluZ1wiXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdvcmtmbG93U3luYy5tYW5hZ2VyLm5leHRTdGVwSW5kZXggPSBmdW5jdGlvbihzdGVwcywgcmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RlcFJldmlldyhzdGVwcywgcmVzdWx0KS5uZXh0U3RlcEluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgd29ya2Zsb3dTeW5jLm1hbmFnZXIuY2hlY2tTdGF0dXMgPSBmdW5jdGlvbih3b3Jrb3JkZXIsIHdvcmtmbG93LCByZXN1bHQpIHtcbiAgICAgICAgICB2YXIgc3RhdHVzO1xuICAgICAgICAgIHZhciBzdGVwUmV2aWV3ID0gdGhpcy5zdGVwUmV2aWV3KHdvcmtmbG93LnN0ZXBzLCByZXN1bHQpO1xuICAgICAgICAgIGlmIChzdGVwUmV2aWV3Lm5leHRTdGVwSW5kZXggPj0gd29ya2Zsb3cuc3RlcHMubGVuZ3RoIC0gMSAmJiBzdGVwUmV2aWV3LmNvbXBsZXRlKSB7XG4gICAgICAgICAgICBzdGF0dXMgPSAnQ29tcGxldGUnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXdvcmtvcmRlci5hc3NpZ25lZSkge1xuICAgICAgICAgICAgc3RhdHVzID0gJ1VuYXNzaWduZWQnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3RlcFJldmlldy5uZXh0U3RlcEluZGV4IDwgMCkge1xuICAgICAgICAgICAgc3RhdHVzID0gJ05ldyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdJbiBQcm9ncmVzcyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdvcmtmbG93U3luYy5tYW5hZ2VyO1xuICAgICAgfSlcbiAgICB9XG4gIH07XG4gIHdvcmtmbG93U3luYy5yZW1vdmVNYW5hZ2VyID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHdvcmtmbG93U3luYy5tYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gd29ya2Zsb3dTeW5jLm1hbmFnZXIuc2FmZVN0b3AoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGRlbGV0ZSB3b3JrZmxvd1N5bmMubWFuYWdlcjtcbiAgICAgIH0pXG4gICAgfVxuICB9O1xuICByZXR1cm4gd29ya2Zsb3dTeW5jO1xufSlcbjtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0ud29ya2Zsb3cnO1xuXG5hbmd1bGFyLm1vZHVsZSgnd2ZtLndvcmtmbG93JywgW1xuICByZXF1aXJlKCcuL2RpcmVjdGl2ZScpXG4sIHJlcXVpcmUoJy4vc2VydmljZS5qcycpXG5dKVxuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhcGlIb3N0OiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyxcbiAgYXBpUGF0aDogJy9hcGkvd2ZtL3dvcmtmbG93JyxcbiAgZGF0YXNldElkIDogJ3dvcmtmbG93cycsXG4gIHN5bmNPcHRpb25zIDoge1xuICAgIFwic3luY19mcmVxdWVuY3lcIiA6IDUsXG4gICAgXCJzdG9yYWdlX3N0cmF0ZWd5XCI6IFwiZG9tXCIsXG4gICAgXCJkb19jb25zb2xlX2xvZ1wiOiBmYWxzZVxuICB9XG59XG4iLCJyZXF1aXJlKCcuL3dvcmtvcmRlci1mb3JtLnRwbC5odG1sLmpzJyk7XG5yZXF1aXJlKCcuL3dvcmtvcmRlci1saXN0LnRwbC5odG1sLmpzJyk7XG5yZXF1aXJlKCcuL3dvcmtvcmRlci50cGwuaHRtbC5qcycpO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLndvcmtvcmRlci5kaXJlY3RpdmVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS53b3Jrb3JkZXIuZGlyZWN0aXZlcycsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvd29ya29yZGVyLWZvcm0udHBsLmh0bWwnLFxuICAgICc8IS0tXFxuJyArXG4gICAgJyBDT05GSURFTlRJQUxcXG4nICtcbiAgICAnIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxcbicgK1xuICAgICcgVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxcbicgK1xuICAgICctLT5cXG4nICtcbiAgICAnPG1kLXRvb2xiYXIgY2xhc3M9XCJjb250ZW50LXRvb2xiYXIgbWQtcHJpbWFyeVwiPlxcbicgK1xuICAgICcgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLXRvb2xzXCI+XFxuJyArXG4gICAgJyAgICA8aDM+e3tjdHJsLm1vZGVsLmlkID8gXFwnVXBkYXRlXFwnIDogXFwnQ3JlYXRlXFwnfX0gd29yayBvcmRlciBJRCB7e2N0cmwubW9kZWwuaWR9fTwvaDM+XFxuJyArXG4gICAgJyAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b25cIiBhcmlhLWxhYmVsPVwie3tjdHJsLnN0YXR1c319XCI+XFxuJyArXG4gICAgJyAgICAgIDx3b3Jrb3JkZXItc3RhdHVzIHN0YXR1cz1cImN0cmwuc3RhdHVzXCI+PC93b3Jrb3JkZXItc3RhdHVzPlxcbicgK1xuICAgICcgICAgPC9tZC1idXR0b24+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPHNwYW4gZmxleD48L3NwYW4+XFxuJyArXG4gICAgJyAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b25cIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBuZy1jbGljaz1cImN0cmwuc2VsZWN0V29ya29yZGVyKCRldmVudCwgY3RybC5tb2RlbClcIj5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPmNsb3NlPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgPC9tZC1idXR0b24+XFxuJyArXG4gICAgJyAgPC9kaXY+XFxuJyArXG4gICAgJzwvbWQtdG9vbGJhcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxkaXYgY2xhc3M9XCJ3Zm0tbWFpbmNvbC1zY3JvbGxcIj5cXG4nICtcbiAgICAnPGZvcm0gbmFtZT1cIndvcmtvcmRlckZvcm1cIiBuZy1zdWJtaXQ9XCJjdHJsLmRvbmUod29ya29yZGVyRm9ybS4kdmFsaWQpXCIgbm92YWxpZGF0ZSBsYXlvdXQtcGFkZGluZyBsYXlvdXQtbWFyZ2luPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8IS0tXFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnICAgIDxsYWJlbCBmb3I9XCJ3b3Jrb3JkZXJTdGF0ZVwiPlN0YXR1czwvbGFiZWw+XFxuJyArXG4gICAgJyAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImlucHV0V29ya29yZGVyVHlwZVwiIG5hbWU9XCJ3b3Jrb3JkZXJTdGF0dXNcIiBuZy1tb2RlbD1cImN0cmwubW9kZWwuc3RhdHVzXCIgZGlzYWJsZWQ9XCJ0cnVlXCI+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJyAgLS0+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8ZGl2IGxheW91dC1ndC1zbT1cInJvd1wiPlxcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiIGZsZXgtZ3Qtc20+XFxuJyArXG4gICAgJyAgICA8bGFiZWwgZm9yPVwid29ya29yZGVyVHlwZVwiPlR5cGU8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPG1kLXNlbGVjdCBuZy1tb2RlbD1cImN0cmwubW9kZWwudHlwZVwiIG5hbWU9XCJ3b3Jrb3JkZXJUeXBlXCIgaWQ9XCJ3b3Jrb3JkZXJUeXBlXCI+XFxuJyArXG4gICAgJyAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiSm9iIE9yZGVyXCI+Sm9iIE9yZGVyPC9tZC1vcHRpb24+XFxuJyArXG4gICAgJyAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiVHlwZSAwMlwiPlR5cGUgMDI8L21kLW9wdGlvbj5cXG4nICtcbiAgICAnICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCJUeXBlIDAzXCI+VHlwZSAwMzwvbWQtb3B0aW9uPlxcbicgK1xuICAgICcgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIlR5cGUgMDRcIj5UeXBlIDA0PC9tZC1vcHRpb24+XFxuJyArXG4gICAgJyAgICAgPC9tZC1zZWxlY3Q+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiIGZsZXgtZ3Qtc20+XFxuJyArXG4gICAgJyAgICA8bGFiZWwgZm9yPVwid29ya2Zsb3dcIj5Xb3JrZmxvdzwvbGFiZWw+XFxuJyArXG4gICAgJyAgICA8bWQtc2VsZWN0IG5nLW1vZGVsPVwiY3RybC5tb2RlbC53b3JrZmxvd0lkXCIgbmFtZT1cIndvcmtmbG93XCIgaWQ9XCJ3b3JrZmxvd1wiIHJlcXVpcmVkPlxcbicgK1xuICAgICcgICAgICAgPG1kLW9wdGlvbiBuZy1yZXBlYXQ9XCJ3b3JrZmxvdyBpbiBjdHJsLndvcmtmbG93c1wiIHZhbHVlPVwie3t3b3JrZmxvdy5pZH19XCI+e3t3b3JrZmxvdy5pZH19IC0ge3t3b3JrZmxvdy50aXRsZX19PC9tZC1vcHRpb24+XFxuJyArXG4gICAgJyAgICAgPC9tZC1zZWxlY3Q+XFxuJyArXG4gICAgJyAgICAgPGRpdiBuZy1tZXNzYWdlcz1cIndvcmtvcmRlckZvcm0ud29ya2Zsb3cuJGVycm9yXCIgbmctaWY9XCJjdHJsLnN1Ym1pdHRlZCB8fCB3b3Jrb3JkZXJGb3JtLndvcmtmbG93LiRkaXJ0eVwiPlxcbicgK1xuICAgICcgICAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5BIHdvcmtmbG93IGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgIDwvZGl2PlxcbicgK1xuICAgICcgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbicgK1xuICAgICc8L2Rpdj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJzxkaXY+XFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCI+XFxuJyArXG4gICAgJyAgICA8bGFiZWwgZm9yPVwiYXNzaWduZWVcIj5Bc3NpZ25lZTwvbGFiZWw+XFxuJyArXG4gICAgJyAgICA8bWQtc2VsZWN0IG5nLW1vZGVsPVwiY3RybC5tb2RlbC5hc3NpZ25lZVwiIG5hbWU9XCJhc3NpZ25lZVwiIGlkPVwiYXNzaWduZWVcIj5cXG4nICtcbiAgICAnICAgICAgIDxtZC1vcHRpb24gbmctcmVwZWF0PVwid29ya2VyIGluIGN0cmwud29ya2Vyc1wiIHZhbHVlPVwie3t3b3JrZXIuaWR9fVwiPnt7d29ya2VyLm5hbWV9fSAoe3t3b3JrZXIucG9zaXRpb259fSk8L21kLW9wdGlvbj5cXG4nICtcbiAgICAnICAgICA8L21kLXNlbGVjdD5cXG4nICtcbiAgICAnICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnPC9kaXY+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8ZGl2PlxcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiPlxcbicgK1xuICAgICcgICAgPGxhYmVsPlRpdGxlPC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaW5wdXRUaXRsZVwiIG5hbWU9XCJ0aXRsZVwiIG5nLW1vZGVsPVwiY3RybC5tb2RlbC50aXRsZVwiIHJlcXVpcmVkPlxcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlcz1cIndvcmtvcmRlckZvcm0udGl0bGUuJGVycm9yXCIgbmctaWY9XCJjdHJsLnN1Ym1pdHRlZCB8fCB3b3Jrb3JkZXJGb3JtLnRpdGxlLiRkaXJ0eVwiPlxcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPkEgdGl0bGUgaXMgcmVxdWlyZWQuPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnPC9kaXY+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8ZGl2PlxcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiPlxcbicgK1xuICAgICcgICAgPGxhYmVsIGZvcj1cImlucHV0QWRkcmVzc1wiPkFkZHJlc3M8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIGlkPVwiaW5wdXRBZGRyZXNzXCIgbmFtZT1cImFkZHJlc3NcIiBuZy1tb2RlbD1cImN0cmwubW9kZWwuYWRkcmVzc1wiIHJlcXVpcmVkPlxcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlcz1cIndvcmtvcmRlckZvcm0uYWRkcmVzcy4kZXJyb3JcIiBuZy1zaG93PVwiY3RybC5zdWJtaXR0ZWQgfHwgd29ya29yZGVyRm9ybS5hZGRyZXNzLiRkaXJ0eVwiPlxcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPkFuIGFkZHJlc3MgaXMgcmVxdWlyZWQuPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnPC9kaXY+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8ZGl2IGxheW91dC1ndC1zbT1cInJvd1wiPlxcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiIGZsZXgtZ3Qtc20+XFxuJyArXG4gICAgJyAgICA8bGFiZWwgZm9yPVwiaW5wdXRBZGRyZXNzXCI+TGF0dGl0dWRlPC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICBpZD1cImlucHV0TGF0dGl0dWRlXCIgbmFtZT1cImxhdHRpdHVkZVwiIG5nLW1vZGVsPVwiY3RybC5tb2RlbC5sb2NhdGlvblswXVwiIHJlcXVpcmVkPlxcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlcz1cIndvcmtvcmRlckZvcm0ubGF0dGl0dWRlLiRlcnJvclwiIG5nLXNob3c9XCJjdHJsLnN1Ym1pdHRlZCB8fCB3b3Jrb3JkZXJGb3JtLmxhdHRpdHVkZS4kZGlydHlcIj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5BbiBsYXR0aXR1ZGUgaXMgcmVxdWlyZWQuPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIiBmbGV4LWd0LXNtPlxcbicgK1xuICAgICcgICAgPGxhYmVsIGZvcj1cImlucHV0QWRkcmVzc1wiPkxvbmdpdHVkZTwvbGFiZWw+XFxuJyArXG4gICAgJyAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgaWQ9XCJpbnB1dExhdHRpdHVkZVwiIG5hbWU9XCJsb25naXR1ZGVcIiBuZy1tb2RlbD1cImN0cmwubW9kZWwubG9jYXRpb25bMV1cIiByZXF1aXJlZD5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZXM9XCJ3b3Jrb3JkZXJGb3JtLmxvbmdpdHVkZS4kZXJyb3JcIiBuZy1zaG93PVwiY3RybC5zdWJtaXR0ZWQgfHwgd29ya29yZGVyRm9ybS5sb25naXR1ZGUuJGRpcnR5XCI+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+QW4gbG9uZ2l0dWRlIGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJzwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGRpdiBsYXlvdXQtZ3Qtc209XCJyb3dcIj5cXG4nICtcbiAgICAnICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVwibWQtYmxvY2tcIiBmbGV4LWd0LXNtPlxcbicgK1xuICAgICcgICAgPGxhYmVsIGZvcj1cImlucHV0RmluaXNoRGF0ZVwiPkZpbmlzaCBEYXRlPC9sYWJlbD5cXG4nICtcbiAgICAnICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiICBpZD1cImlucHV0RmluaXNoRGF0ZVwiIG5hbWU9XCJmaW5pc2hEYXRlXCIgbmctbW9kZWw9XCJjdHJsLm1vZGVsLmZpbmlzaERhdGVcIiByZXF1aXJlZD5cXG4nICtcbiAgICAnICAgIDxkaXYgbmctbWVzc2FnZXM9XCJ3b3Jrb3JkZXJGb3JtLmZpbmlzaERhdGUuJGVycm9yXCIgbmctc2hvdz1cImN0cmwuc3VibWl0dGVkIHx8IHdvcmtvcmRlckZvcm0uZmluaXNoRGF0ZS4kZGlydHlcIj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5BIGZpbmlzaCBkYXRlIGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJyAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cIm1kLWJsb2NrXCIgZmxleC1ndC1zbT5cXG4nICtcbiAgICAnICAgIDxsYWJlbCBmb3I9XCJpbnB1dEZpbmlzaFRpbWVcIiA+RmluaXNoIFRpbWU8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPGlucHV0IHR5cGU9XCJ0aW1lXCIgIGlkPVwiaW5wdXRGaW5pc2hUaW1lXCIgbmFtZT1cImZpbmlzaFRpbWVcIiBuZy1tb2RlbD1cImN0cmwubW9kZWwuZmluaXNoVGltZVwiIHJlcXVpcmVkPlxcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlcz1cIndvcmtvcmRlckZvcm0uZmluaXNoVGltZS4kZXJyb3JcIiBuZy1zaG93PVwiY3RybC5zdWJtaXR0ZWQgfHwgd29ya29yZGVyRm9ybS5maW5pc2hUaW1lLiRkaXJ0eVwiPlxcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPkEgZmluaXNoIHRpbWUgaXMgcmVxdWlyZWQuPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L2Rpdj5cXG4nICtcbiAgICAnICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4nICtcbiAgICAnPC9kaXY+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICc8ZGl2PlxcbicgK1xuICAgICcgIDxtZC1pbnB1dC1jb250YWluZXIgY2xhc3M9XCJtZC1ibG9ja1wiIG5nLWNsYXNzPVwieyBcXCdoYXMtZXJyb3JcXCcgOiB3b3Jrb3JkZXJGb3JtLnN1bW1hcnkuJGludmFsaWQgJiYgIXdvcmtvcmRlckZvcm0uc3VtbWFyeS4kcHJpc3RpbmUgfVwiPlxcbicgK1xuICAgICcgICAgPGxhYmVsIGZvcj1cImlucHV0U3VtbWFyeVwiPlN1bW1hcnk8L2xhYmVsPlxcbicgK1xuICAgICcgICAgPHRleHRhcmVhIGlkPVwiaW5wdXRTdW1tYXJ5XCIgbmFtZT1cInN1bW1hcnlcIiBuZy1tb2RlbD1cImN0cmwubW9kZWwuc3VtbWFyeVwiIHJlcXVpcmVkIG1kLW1heGxlbmd0aD1cIjE1MFwiPjwvdGV4dGFyZWE+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPGRpdiBuZy1tZXNzYWdlcz1cIndvcmtvcmRlckZvcm0uc3VtbWFyeS4kZXJyb3JcIiBuZy1zaG93PVwiY3RybC5zdWJtaXR0ZWQgfHwgd29ya29yZGVyRm9ybS5zdW1tYXJ5LiRkaXJ0eVwiPlxcbicgK1xuICAgICcgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPkEgc3VtbWFyeSBkYXRlIGlzIHJlcXVpcmVkLjwvZGl2PlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuJyArXG4gICAgJzwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8bWQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCI+e3tjdHJsLm1vZGVsLmlkID8gXFwnVXBkYXRlXFwnIDogXFwnQ3JlYXRlXFwnfX0gV29ya29yZGVyPC9tZC1idXR0b24+XFxuJyArXG4gICAgJzwvZm9ybT5cXG4nICtcbiAgICAnPC9kaXZcIj5cXG4nICtcbiAgICAnJyk7XG59XSk7XG4iLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd3Zm0ud29ya29yZGVyLmRpcmVjdGl2ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLndvcmtvcmRlci5kaXJlY3RpdmVzJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ3dmbS10ZW1wbGF0ZS93b3Jrb3JkZXItbGlzdC50cGwuaHRtbCcsXG4gICAgJzwhLS1cXG4nICtcbiAgICAnIENPTkZJREVOVElBTFxcbicgK1xuICAgICcgQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXFxuJyArXG4gICAgJyBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXFxuJyArXG4gICAgJy0tPlxcbicgK1xuICAgICc8bWQtdG9vbGJhcj5cXG4nICtcbiAgICAnICA8ZGl2IGNsYXNzPVwibWQtdG9vbGJhci10b29sc1wiPlxcbicgK1xuICAgICcgICAgPGgzPlxcbicgK1xuICAgICcgICAgICA8c3Bhbj5Xb3Jrb3JkZXJzPC9zcGFuPlxcbicgK1xuICAgICcgICAgPC9oMz5cXG4nICtcbiAgICAnICA8L2Rpdj5cXG4nICtcbiAgICAnPC9tZC10b29sYmFyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzPVwicGVyc2lzdGVudC1zZWFyY2hcIiBoaWRlLXhzIGhpZGUtc20+XFxuJyArXG4gICAgJyAgPGxhYmVsIGZvcj1cInNlYXJjaFwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5zZWFyY2g8L2k+PC9sYWJlbD5cXG4nICtcbiAgICAnICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBuZy1tb2RlbD1cInNlYXJjaFZhbHVlXCIgbmctY2hhbmdlPVwiY3RybC5hcHBseUZpbHRlcihzZWFyY2hWYWx1ZSlcIj5cXG4nICtcbiAgICAnPC9mb3JtPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnPG1kLWxpc3Q+XFxuJyArXG4gICAgJyAgPG1kLWxpc3QtaXRlbVxcbicgK1xuICAgICcgICAgbmctcmVwZWF0PVwid29ya29yZGVyIGluIGN0cmwud29ya29yZGVyc1wiXFxuJyArXG4gICAgJyAgICBuZy1jbGljaz1cImN0cmwuc2VsZWN0V29ya29yZGVyKCRldmVudCwgd29ya29yZGVyKVwiXFxuJyArXG4gICAgJyAgICBuZy1jbGFzcz1cInthY3RpdmU6IGN0cmwuc2VsZWN0ZWQuaWQgPT09IHdvcmtvcmRlci5pZH1cIlxcbicgK1xuICAgICcgICAgY2xhc3M9XCJtZC0zLWxpbmUgd29ya29yZGVyLWl0ZW1cIlxcbicgK1xuICAgICcgID5cXG4nICtcbiAgICAnPCEtLVxcbicgK1xuICAgICcgIFRPRE86IGNoYW5nZSBjbGFzcyBuYW1lIGFjY29yZGluZyB0byB0aGUgY29sb3I6XFxuJyArXG4gICAgJyAgICBcInN1Y2Nlc3NcIiA9IGdyZWVuXFxuJyArXG4gICAgJyAgICBkYW5nZXIgPSBcInJlZFwiXFxuJyArXG4gICAgJyAgICB3YXJuaW5nID0gXCJ5ZWxsb3dcIlxcbicgK1xuICAgICcgICAgbm8gY2xhc3MgPSBncmV5XFxuJyArXG4gICAgJyAgLS0+XFxuJyArXG4gICAgJyAgPHdvcmtvcmRlci1zdGF0dXMgY2xhc3M9XCJcIiBzdGF0dXM9XCJjdHJsLnJlc3VsdE1hcFt3b3Jrb3JkZXIuaWRdLnN0YXR1c1wiPjwvd29ya29yZGVyLXN0YXR1cz5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgPGgzPlxcbicgK1xuICAgICcgICAgICAgIHt7d29ya29yZGVyLnR5cGV9fSAtXFxuJyArXG4gICAgJyAgICAgICAgPHNwYW4gbmctaWY9XCJ3b3Jrb3JkZXIuaWRcIj57e3dvcmtvcmRlci5pZH19PC9zcGFuPlxcbicgK1xuICAgICcgICAgICAgIDxzcGFuIG5nLWlmPVwiISB3b3Jrb3JkZXIuaWRcIiBzdHlsZT1cImZvbnQtc3R5bGU6IGl0YWxpYztcIj4mbHQ7bG9jYWwmZ3Q7PC9zcGFuPlxcbicgK1xuICAgICcgICAgICA8L2gzPlxcbicgK1xuICAgICcgICAgICA8aDQ+e3t3b3Jrb3JkZXIudGl0bGV9fTwvaDQ+XFxuJyArXG4gICAgJyAgICAgIDxwPnt7d29ya29yZGVyLmFkZHJlc3N9fTwvcD5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICcgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICc8L21kLWxpc3Q+XFxuJyArXG4gICAgJycpO1xufV0pO1xuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLndvcmtvcmRlci5kaXJlY3RpdmVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3dmbS53b3Jrb3JkZXIuZGlyZWN0aXZlcycsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd3Zm0tdGVtcGxhdGUvd29ya29yZGVyLnRwbC5odG1sJyxcbiAgICAnPCEtLVxcbicgK1xuICAgICcgQ09ORklERU5USUFMXFxuJyArXG4gICAgJyBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cXG4nICtcbiAgICAnIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cXG4nICtcbiAgICAnLS0+XFxuJyArXG4gICAgJyAgPG1kLWxpc3Q+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTItbGluZVwiID5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24+XFxuJyArXG4gICAgJyAgICAgIDx3b3Jrb3JkZXItc3RhdHVzIHN0YXR1cz1cInN0YXR1c1wiPjwvd29ya29yZGVyLXN0YXR1cz5cXG4nICtcbiAgICAnICAgIDwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgICAgICA8aDM+e3tzdGF0dXMgfHwgXCJOZXdcIn19PC9oMz5cXG4nICtcbiAgICAnICAgICAgICAgICA8cD5TdGF0dXM8L3A+XFxuJyArXG4gICAgJyAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICAgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICcgICAgPC9tZC1idXR0b24+XFxuJyArXG4gICAgJyAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTItbGluZSBtZC1sb25nLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgPG1kLWljb24gbWQtZm9udC1zZXQ9XCJtYXRlcmlhbC1pY29uc1wiPnBsYWNlPC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgICAgPGgzPnt7d29ya29yZGVyLmxvY2F0aW9uWzBdfX0sIHt7d29ya29yZGVyLmxvY2F0aW9uWzFdfX08L2gzPlxcbicgK1xuICAgICcgICAgICAgICA8cD5cXG4nICtcbiAgICAnICAgICAgICAgICB7e3dvcmtvcmRlci5hZGRyZXNzfX1cXG4nICtcbiAgICAnICAgICAgICAgPC9wPlxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICcgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmVcIiA+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5hc3NpZ25tZW50PC9tZC1pY29uPlxcbicgK1xuICAgICcgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC1pdGVtLXRleHRcIj5cXG4nICtcbiAgICAnICAgICAgICA8aDM+e3t3b3Jrb3JkZXIudGl0bGV9fTwvaDM+XFxuJyArXG4gICAgJyAgICAgICAgPHA+V29ya29yZGVyPC9wPlxcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnICAgIDwvbWQtbGlzdC1pdGVtPlxcbicgK1xuICAgICcgICAgPG1kLWRpdmlkZXI+PC9tZC1kaXZpZGVyPlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC0yLWxpbmVcIiA+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5ldmVudDwvbWQtaWNvbj5cXG4nICtcbiAgICAnICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtaXRlbS10ZXh0XCI+XFxuJyArXG4gICAgJyAgICAgICAgPGgzPnt7d29ya29yZGVyLnN0YXJ0VGltZXN0YW1wIHwgZGF0ZTpcXCd5eXl5LU1NLWRkXFwnIH19PC9oMz5cXG4nICtcbiAgICAnICAgICAgICA8cD5GaW5pc2ggRGF0ZTwvcD5cXG4nICtcbiAgICAnICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtMi1saW5lXCIgPlxcbicgK1xuICAgICcgICAgICA8bWQtaWNvbiBtZC1mb250LXNldD1cIm1hdGVyaWFsLWljb25zXCI+c2NoZWR1bGU8L21kLWljb24+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlxcbicgK1xuICAgICcgICAgICAgIDxoMz57e3dvcmtvcmRlci5zdGFydFRpbWVzdGFtcCB8IGRhdGU6XFwnSEg6bW06c3MgWlxcJyB9fTwvaDM+XFxuJyArXG4gICAgJyAgICAgICAgPHA+RmluaXNoIFRpbWU8L3A+XFxuJyArXG4gICAgJyAgICAgIDwvZGl2PlxcbicgK1xuICAgICcgICAgPC9tZC1saXN0LWl0ZW0+XFxuJyArXG4gICAgJyAgICA8bWQtZGl2aWRlcj48L21kLWRpdmlkZXI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLTItbGluZVwiIG5nLXNob3c9XCJhc3NpZ25lZSAmJiBhc3NpZ25lZS5uYW1lXCI+XFxuJyArXG4gICAgJyAgICAgIDxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj5wZXJzb248L21kLWljb24+XFxuJyArXG4gICAgJyAgICAgIDxkaXYgY2xhc3M9XCJtZC1saXN0LWl0ZW0tdGV4dFwiPlxcbicgK1xuICAgICcgICAgICAgIDxoMz57e2Fzc2lnbmVlLm5hbWV9fTwvaDM+XFxuJyArXG4gICAgJyAgICAgICAgPHA+QXNpZ25lZTwvcD5cXG4nICtcbiAgICAnICAgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgICA8L21kLWxpc3QtaXRlbT5cXG4nICtcbiAgICAnICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgPC9tZC1saXN0PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICA8bWQtc3ViaGVhZGVyIGNsYXNzPVwibWQtbm8tc3RpY2t5XCI+V29yayBTdW1tYXJ5PC9tZC1zdWJoZWFkZXI+XFxuJyArXG4gICAgJyAgPHAgY2xhc3M9XCJtZC1ib2R5LTFcIiBsYXlvdXQtcGFkZGluZyBsYXlvdXQtbWFyZ2luPlxcbicgK1xuICAgICcgICAge3t3b3Jrb3JkZXIuc3VtbWFyeX19XFxuJyArXG4gICAgJyAgPC9wPlxcbicgK1xuICAgICcnKTtcbn1dKTtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnd2ZtLndvcmtvcmRlci5kaXJlY3RpdmVzJywgWyd3Zm0uY29yZS5tZWRpYXRvciddKTtcbm1vZHVsZS5leHBvcnRzID0gJ3dmbS53b3Jrb3JkZXIuZGlyZWN0aXZlcyc7XG5cbnJlcXVpcmUoJy4uLy4uL2Rpc3QnKTtcblxudmFyIGdldFN0YXR1c0ljb24gPSBmdW5jdGlvbihzdGF0dXMpIHtcbiAgdmFyIHN0YXR1c0ljb247XG4gIHN3aXRjaChzdGF0dXMpIHtcbiAgICBjYXNlICdJbiBQcm9ncmVzcyc6XG4gICAgICBzdGF0dXNJY29uID0gJ2F1dG9yZW5ldyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdDb21wbGV0ZSc6XG4gICAgICBzdGF0dXNJY29uID0gJ2Fzc2lnbm1lbnRfdHVybmVkX2luJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0Fib3J0ZWQnOlxuICAgICAgc3RhdHVzSWNvbiA9ICdhc3NpZ25tZW50X2xhdGUnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnT24gSG9sZCc6XG4gICAgICBzdGF0dXNJY29uID0gJ3BhdXNlJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1VuYXNzaWduZWQnOlxuICAgICAgc3RhdHVzSWNvbiA9ICdhc3NpZ25tZW50X2luZCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdOZXcnOlxuICAgICAgc3RhdHVzSWNvbiA9ICduZXdfcmVsZWFzZXMnO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHN0YXR1c0ljb24gPSAncmFkaW9fYnV0dG9uX3VuY2hlY2tlZCc7XG4gIH1cbiAgcmV0dXJuIHN0YXR1c0ljb247XG59XG5cbm5nTW9kdWxlLmRpcmVjdGl2ZSgnd29ya29yZGVyTGlzdCcsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCBtZWRpYXRvcikge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRSdcbiAgLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvd29ya29yZGVyLWxpc3QudHBsLmh0bWwnKVxuICAsIHNjb3BlOiB7XG4gICAgICB3b3Jrb3JkZXJzIDogJz0nLFxuICAgICAgcmVzdWx0TWFwOiAnPScsXG4gICAgICBzZWxlY3RlZE1vZGVsOiAnPSdcbiAgICB9XG4gICwgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLndvcmtvcmRlcnMgPSAkc2NvcGUud29ya29yZGVycztcbiAgICAgICRzY29wZS4kd2F0Y2goJ3dvcmtvcmRlcnMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi53b3Jrb3JkZXJzID0gJHNjb3BlLndvcmtvcmRlcnM7XG4gICAgICB9KVxuICAgICAgc2VsZi5yZXN1bHRNYXAgPSAkc2NvcGUucmVzdWx0TWFwO1xuICAgICAgc2VsZi5zZWxlY3RlZCA9ICRzY29wZS5zZWxlY3RlZE1vZGVsO1xuICAgICAgc2VsZi5zZWxlY3RXb3Jrb3JkZXIgPSBmdW5jdGlvbihldmVudCwgd29ya29yZGVyKSB7XG4gICAgICAgIC8vIHNlbGYuc2VsZWN0ZWRXb3Jrb3JkZXJJZCA9IHdvcmtvcmRlci5pZDtcbiAgICAgICAgbWVkaWF0b3IucHVibGlzaCgnd2ZtOndvcmtvcmRlcjpzZWxlY3RlZCcsIHdvcmtvcmRlcik7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgICAgc2VsZi5pc1dvcmtvcmRlclNob3duID0gZnVuY3Rpb24od29ya29yZGVyKSB7XG4gICAgICAgIHJldHVybiBzZWxmLnNob3duV29ya29yZGVyID09PSB3b3Jrb3JkZXI7XG4gICAgICB9O1xuXG4gICAgICBzZWxmLmFwcGx5RmlsdGVyID0gZnVuY3Rpb24odGVybSkge1xuICAgICAgICB0ZXJtID0gdGVybS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBzZWxmLndvcmtvcmRlcnMgPSAkc2NvcGUud29ya29yZGVycy5maWx0ZXIoZnVuY3Rpb24od29ya29yZGVyKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh3b3Jrb3JkZXIuaWQpLmluZGV4T2YodGVybSkgIT09IC0xXG4gICAgICAgICAgICB8fCBTdHJpbmcod29ya29yZGVyLnRpdGxlKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGVybSkgIT09IC0xO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuICAsIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gIH07XG59KVxuXG4uZGlyZWN0aXZlKCd3b3Jrb3JkZXInLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSwgbWVkaWF0b3IpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnXG4gICwgdGVtcGxhdGU6ICR0ZW1wbGF0ZUNhY2hlLmdldCgnd2ZtLXRlbXBsYXRlL3dvcmtvcmRlci50cGwuaHRtbCcpXG4gICwgc2NvcGU6IHtcbiAgICB3b3Jrb3JkZXI6ICc9JyxcbiAgICBhc3NpZ25lZTogJz0nLFxuICAgIHN0YXR1czogJz0nXG4gICAgfVxuICAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi5zaG93U2VsZWN0QnV0dG9uID0gISEgJHNjb3BlLiRwYXJlbnQud29ya29yZGVycztcbiAgICAgIHNlbGYuc2VsZWN0V29ya29yZGVyID0gZnVuY3Rpb24oZXZlbnQsIHdvcmtvcmRlcikge1xuICAgICAgICBpZih3b3Jrb3JkZXIuaWQpIHtcbiAgICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya29yZGVyOnNlbGVjdGVkJywgd29ya29yZGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya29yZGVyOmxpc3QnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgLCBjb250cm9sbGVyQXM6ICdjdHJsJ1xuICB9O1xufSlcblxuLmRpcmVjdGl2ZSgnd29ya29yZGVyRm9ybScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCBtZWRpYXRvcikge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRSdcbiAgLCB0ZW1wbGF0ZTogJHRlbXBsYXRlQ2FjaGUuZ2V0KCd3Zm0tdGVtcGxhdGUvd29ya29yZGVyLWZvcm0udHBsLmh0bWwnKVxuICAsIHNjb3BlOiB7XG4gICAgd29ya29yZGVyIDogJz12YWx1ZSdcbiAgLCB3b3JrZmxvd3M6ICc9J1xuICAsIHdvcmtlcnM6ICc9J1xuICAsIHN0YXR1czogJz0nXG4gICAgfVxuICAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi5tb2RlbCA9IGFuZ3VsYXIuY29weSgkc2NvcGUud29ya29yZGVyKTtcbiAgICAgIHNlbGYud29ya2Zsb3dzID0gJHNjb3BlLndvcmtmbG93cztcbiAgICAgIHNlbGYud29ya2VycyA9ICRzY29wZS53b3JrZXJzO1xuICAgICAgc2VsZi5zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgIGlmIChzZWxmLm1vZGVsICYmIHNlbGYubW9kZWwuc3RhcnRUaW1lc3RhbXApIHtcbiAgICAgICAgc2VsZi5tb2RlbC5maW5pc2hEYXRlID0gbmV3IERhdGUoc2VsZi5tb2RlbC5zdGFydFRpbWVzdGFtcCk7XG4gICAgICAgIHNlbGYubW9kZWwuZmluaXNoVGltZSA9IG5ldyBEYXRlKHNlbGYubW9kZWwuc3RhcnRUaW1lc3RhbXApO1xuICAgICAgfTtcbiAgICAgIHNlbGYuc2VsZWN0V29ya29yZGVyID0gZnVuY3Rpb24oZXZlbnQsIHdvcmtvcmRlcikge1xuICAgICAgICBpZih3b3Jrb3JkZXIuaWQpIHtcbiAgICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya29yZGVyOnNlbGVjdGVkJywgd29ya29yZGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya29yZGVyOmxpc3QnKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICAgIHNlbGYuZG9uZSA9IGZ1bmN0aW9uKGlzVmFsaWQpIHtcbiAgICAgICAgc2VsZi5zdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIHNlbGYubW9kZWwuc3RhcnRUaW1lc3RhbXAgPSBuZXcgRGF0ZShzZWxmLm1vZGVsLmZpbmlzaERhdGUpOyAvLyBUT0RPOiBpbmNvcnBvcmF0ZSBzZWxmLm1vZGVsLmZpbmlzaFRpbWVcbiAgICAgICAgICBzZWxmLm1vZGVsLnN0YXJ0VGltZXN0YW1wLnNldEhvdXJzKFxuICAgICAgICAgICAgc2VsZi5tb2RlbC5maW5pc2hUaW1lLmdldEhvdXJzKCksXG4gICAgICAgICAgICBzZWxmLm1vZGVsLmZpbmlzaFRpbWUuZ2V0TWludXRlcygpLFxuICAgICAgICAgICAgc2VsZi5tb2RlbC5maW5pc2hUaW1lLmdldFNlY29uZHMoKSxcbiAgICAgICAgICAgIHNlbGYubW9kZWwuZmluaXNoVGltZS5nZXRNaWxsaXNlY29uZHMoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgc2VsZi5tb2RlbC5maW5pc2hEYXRlID0gbmV3IERhdGUoc2VsZi5tb2RlbC5zdGFydFRpbWVzdGFtcCk7XG4gICAgICAgICAgc2VsZi5tb2RlbC5maW5pc2hUaW1lID0gbmV3IERhdGUoc2VsZi5tb2RlbC5zdGFydFRpbWVzdGFtcCk7XG4gICAgICAgICAgaWYgKCFzZWxmLm1vZGVsLmlkICYmIHNlbGYubW9kZWwuaWQgIT09IDApIHtcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1Ymxpc2goJ3dmbTp3b3Jrb3JkZXI6Y3JlYXRlZCcsIHNlbGYubW9kZWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWJsaXNoKCd3Zm06d29ya29yZGVyOnVwZGF0ZWQnLCBzZWxmLm1vZGVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICwgY29udHJvbGxlckFzOiAnY3RybCdcbiAgfTtcbn0pXG5cbi5kaXJlY3RpdmUoJ3dvcmtvcmRlclN0YXR1cycsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlLCBtZWRpYXRvcikge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRSdcbiAgLCB0ZW1wbGF0ZTogJzxtZC1pY29uIG1kLWZvbnQtc2V0PVwibWF0ZXJpYWwtaWNvbnNcIj57e3N0YXR1c0ljb259fTxtZC10b29sdGlwPnt7c3RhdHVzfX08L21kLXRvb2x0aXA+PC9tZC1pY29uPidcbiAgLCBzY29wZToge1xuICAgICAgc3RhdHVzIDogJz1zdGF0dXMnXG4gICAgfVxuICAsIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgJHNjb3BlLnN0YXR1c0ljb24gPSBnZXRTdGF0dXNJY29uKCRzY29wZS5zdGF0dXMpO1xuICAgIH1cbiAgLCBjb250cm9sbGVyQXM6ICdjdHJsJ1xuICB9XG59KVxuXG4uZGlyZWN0aXZlKCd3b3Jrb3JkZXJTdWJtaXNzaW9uUmVzdWx0JywgZnVuY3Rpb24oJGNvbXBpbGUpIHtcbiAgdmFyIHJlbmRlciA9IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgIGlmICghc2NvcGUucmVzdWx0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBzY29wZS5yZXN1bHQ7XG4gICAgdmFyIHRlbXBsYXRlID0gJyc7XG4gICAgaWYgKHNjb3BlLnN0ZXAuZm9ybUlkKSB7XG4gICAgICB2YXIgc3VibWlzc2lvbiA9IHJlc3VsdC5zdWJtaXNzaW9uO1xuICAgICAgdmFyIHRhZywgc3ViSWQ7XG4gICAgICBpZiAoc3VibWlzc2lvbi5fc3VibWlzc2lvbikge1xuICAgICAgICB0YWcgPSAnc3VibWlzc2lvbic7XG4gICAgICAgIHN1YklkID0gc3VibWlzc2lvbi5fc3VibWlzc2lvblxuICAgICAgICB0ZW1wbGF0ZSA9ICc8YXBwZm9ybS1zdWJtaXNzaW9uIHN1Ym1pc3Npb249XCJyZXN1bHQuc3VibWlzc2lvbi5fc3VibWlzc2lvblwiPjwvYXBwZm9ybS1zdWJtaXNzaW9uPic7XG4gICAgICB9IGVsc2UgaWYgKHN1Ym1pc3Npb24uc3VibWlzc2lvbklkKSB7XG4gICAgICAgIHRlbXBsYXRlID0gJzxhcHBmb3JtLXN1Ym1pc3Npb24gc3VibWlzc2lvbi1pZD1cIlxcJycrc3VibWlzc2lvbi5zdWJtaXNzaW9uSWQrJ1xcJ1wiPjwvYXBwZm9ybS1zdWJtaXNzaW9uPic7XG4gICAgICB9IGVsc2UgaWYgKHN1Ym1pc3Npb24uc3VibWlzc2lvbkxvY2FsSWQpIHtcbiAgICAgICAgdGVtcGxhdGUgPSAnPGFwcGZvcm0tc3VibWlzc2lvbiBzdWJtaXNzaW9uLWxvY2FsLWlkPVwiXFwnJytzdWJtaXNzaW9uLnN1Ym1pc3Npb25Mb2NhbElkKydcXCdcIj48L2FwcGZvcm0tc3VibWlzc2lvbj4nO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcGxhdGUgPSBzY29wZS5zdGVwLnRlbXBsYXRlcy52aWV3O1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZCh0ZW1wbGF0ZSk7XG4gICAgJGNvbXBpbGUoZWxlbWVudC5jb250ZW50cygpKShzY29wZSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnXG4gICwgc2NvcGU6IHtcbiAgICAgIHJlc3VsdDogJz0nXG4gICAgLCBzdGVwOiAnPSdcbiAgICB9XG4gICwgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgcmVuZGVyKHNjb3BlLCBlbGVtZW50LCBhdHRycyk7XG4gICAgfVxuICB9O1xufSlcbjtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJylcbiAgLCBfID0gcmVxdWlyZSgnbG9kYXNoJylcbiAgO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0ud29ya29yZGVyLnN5bmMnO1xuXG5mdW5jdGlvbiB3cmFwTWFuYWdlcigkcSwgJHRpbWVvdXQsIG1hbmFnZXIpIHtcbiAgdmFyIHdyYXBwZWRNYW5hZ2VyID0gXy5jcmVhdGUobWFuYWdlcik7XG4gIHdyYXBwZWRNYW5hZ2VyLm5ldyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgd29ya29yZGVyID0ge1xuICAgICAgICB0eXBlOiAnSm9iIE9yZGVyJ1xuICAgICAgLCBzdGF0dXM6ICdOZXcnXG4gICAgICB9O1xuICAgICAgZGVmZXJyZWQucmVzb2x2ZSh3b3Jrb3JkZXIpO1xuICAgIH0sIDApO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIHJldHVybiB3cmFwcGVkTWFuYWdlcjtcbn1cblxuYW5ndWxhci5tb2R1bGUoJ3dmbS53b3Jrb3JkZXIuc3luYycsIFtyZXF1aXJlKCdmaC13Zm0tc3luYycpXSlcbi5mYWN0b3J5KCd3b3Jrb3JkZXJTeW5jJywgZnVuY3Rpb24oJHEsICR0aW1lb3V0LCBzeW5jU2VydmljZSkge1xuICBzeW5jU2VydmljZS5pbml0KCRmaCwgY29uZmlnLnN5bmNPcHRpb25zKTtcbiAgdmFyIHdvcmtvcmRlclN5bmMgPSB7fTtcbiAgd29ya29yZGVyU3luYy5jcmVhdGVNYW5hZ2VyID0gZnVuY3Rpb24ocXVlcnlQYXJhbXMpIHtcbiAgICBpZiAod29ya29yZGVyU3luYy5tYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gJHEud2hlbih3b3Jrb3JkZXJTeW5jLm1hbmFnZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gd29ya29yZGVyU3luYy5tYW5hZ2VyUHJvbWlzZSA9IHN5bmNTZXJ2aWNlLm1hbmFnZShjb25maWcuZGF0YXNldElkLCBudWxsLCBxdWVyeVBhcmFtcylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKG1hbmFnZXIpIHtcbiAgICAgICAgd29ya29yZGVyU3luYy5tYW5hZ2VyID0gd3JhcE1hbmFnZXIoJHEsICR0aW1lb3V0LCBtYW5hZ2VyKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1N5bmMgaXMgbWFuYWdpbmcgZGF0YXNldDonLCBjb25maWcuZGF0YXNldElkLCAnd2l0aCBmaWx0ZXI6ICcsIHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHdvcmtvcmRlclN5bmMubWFuYWdlcjtcbiAgICAgIH0pXG4gICAgfVxuICB9O1xuICB3b3Jrb3JkZXJTeW5jLnJlbW92ZU1hbmFnZXIgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAod29ya29yZGVyU3luYy5tYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gd29ya29yZGVyU3luYy5tYW5hZ2VyLnNhZmVTdG9wKClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBkZWxldGUgd29ya29yZGVyU3luYy5tYW5hZ2VyO1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHdvcmtvcmRlclN5bmM7XG59KVxuO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS53b3Jrb3JkZXInO1xuXG5hbmd1bGFyLm1vZHVsZSgnd2ZtLndvcmtvcmRlcicsIFtcbiAgcmVxdWlyZSgnLi9kaXJlY3RpdmUnKVxuLCByZXF1aXJlKCcuL3N5bmMtc2VydmljZScpXG5dKVxuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhcGlIb3N0OiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyxcbiAgYXBpUGF0aDogJy9hcGkvd2ZtL3dvcmtvcmRlcicsXG4gIGRhdGFzZXRJZCA6ICd3b3Jrb3JkZXJzJyxcbiAgc3luY09wdGlvbnMgOiB7XG4gICAgXCJzeW5jX2ZyZXF1ZW5jeVwiIDogNSxcbiAgICBcInN0b3JhZ2Vfc3RyYXRlZ3lcIjogXCJkb21cIixcbiAgICBcImRvX2NvbnNvbGVfbG9nXCI6IGZhbHNlXG4gIH1cbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xudmFyIF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbnJlcXVpcmUoJ2ZlZWRoZW5yeScpO1xuXG5hbmd1bGFyLm1vZHVsZSgnd2ZtLW1vYmlsZScsIFtcbiwgcmVxdWlyZSgnYW5ndWxhci1tZXNzYWdlcycpXG4sIHJlcXVpcmUoJ2FuZ3VsYXItdWktcm91dGVyJylcbiwgcmVxdWlyZSgnYW5ndWxhci1tYXRlcmlhbCcpXG4sIHJlcXVpcmUoJ2ZoLXdmbS1tZXNzYWdlJylcbiwgcmVxdWlyZSgnZmgtd2ZtLW1lZGlhdG9yJylcbiwgcmVxdWlyZSgnZmgtd2ZtLXdvcmtvcmRlcicpXG4sIHJlcXVpcmUoJ2ZoLXdmbS1yZXN1bHQnKVxuLCByZXF1aXJlKCdmaC13Zm0td29ya2Zsb3cnKVxuLCByZXF1aXJlKCdmaC13Zm0tYXBwZm9ybScpXG4sIHJlcXVpcmUoJ2ZoLXdmbS1yaXNrLWFzc2Vzc21lbnQnKVxuLCByZXF1aXJlKCdmaC13Zm0tdmVoaWNsZS1pbnNwZWN0aW9uJylcbiwgcmVxdWlyZSgnZmgtd2ZtLXVzZXInKVxuLCByZXF1aXJlKCdmaC13Zm0tbWFwJylcbiwgcmVxdWlyZSgnZmgtd2ZtLWZpbGUnKVxuLCByZXF1aXJlKCdmaC13Zm0tY2FtZXJhJylcblxuLCByZXF1aXJlKCcuL3dvcmtvcmRlci93b3Jrb3JkZXInKVxuLCByZXF1aXJlKCcuL3dvcmtmbG93L3dvcmtmbG93JylcbiwgcmVxdWlyZSgnLi9tZXNzYWdlL21lc3NhZ2UnKVxuLCByZXF1aXJlKCcuL21hcC9tYXAnKVxuLCByZXF1aXJlKCcuL3NldHRpbmcvc2V0dGluZycpXG4sIHJlcXVpcmUoJy4vYXV0aC9hdXRoJylcbiwgcmVxdWlyZSgnLi9jYWxlbmRhci9jYWxlbmRhcicpXG4sIHJlcXVpcmUoJy4vZmlsZS9maWxlJylcbl0pXG5cbi5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAvLyBpZiBub25lIG9mIHRoZSBzdGF0ZXMgYXJlIG1hdGNoZWQsIHVzZSB0aGlzIGFzIHRoZSBmYWxsYmFja1xuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvd29ya29yZGVycycpO1xuXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdhcHAnLCB7XG4gICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4udHBsLmh0bWwnLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBwcm9maWxlRGF0YTogZnVuY3Rpb24odXNlckNsaWVudCkge1xuICAgICAgICAgIHJldHVybiB1c2VyQ2xpZW50LmdldFByb2ZpbGUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3luY01hbmFnZXJzOiBmdW5jdGlvbihzeW5jUG9vbCwgcHJvZmlsZURhdGEpIHtcbiAgICAgICAgICByZXR1cm4gc3luY1Bvb2wuc3luY01hbmFnZXJNYXAocHJvZmlsZURhdGEpO1xuICAgICAgICB9LFxuICAgICAgICB3b3Jrb3JkZXJNYW5hZ2VyOiBmdW5jdGlvbihzeW5jTWFuYWdlcnMpIHtcbiAgICAgICAgICByZXR1cm4gc3luY01hbmFnZXJzLndvcmtvcmRlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIHdvcmtmbG93TWFuYWdlcjogZnVuY3Rpb24oc3luY01hbmFnZXJzKSB7XG4gICAgICAgICAgcmV0dXJuIHN5bmNNYW5hZ2Vycy53b3JrZmxvd3M7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3VsdE1hbmFnZXI6IGZ1bmN0aW9uKHN5bmNNYW5hZ2Vycykge1xuICAgICAgICAgIHJldHVybiBzeW5jTWFuYWdlcnMucmVzdWx0O1xuICAgICAgICB9LFxuICAgICAgICBtZXNzYWdlTWFuYWdlcjogZnVuY3Rpb24oc3luY01hbmFnZXJzKSB7XG4gICAgICAgICAgcmV0dXJuIHN5bmNNYW5hZ2Vycy5tZXNzYWdlcztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRyb290U2NvcGUsICRzY29wZSwgJHN0YXRlLCAkbWRTaWRlbmF2LCBtZWRpYXRvciwgcHJvZmlsZURhdGEsIHVzZXJDbGllbnQsIHdvcmtvcmRlclN5bmMsIG1lc3NhZ2VTeW5jKSB7XG4gICAgICAgICRzY29wZS5wcm9maWxlRGF0YSA9IHByb2ZpbGVEYXRhO1xuICAgICAgICAkc2NvcGUudG9nZ2xlU2lkZW5hdiA9IGZ1bmN0aW9uKGV2ZW50LCBtZW51SWQpIHtcbiAgICAgICAgICAkbWRTaWRlbmF2KG1lbnVJZCkudG9nZ2xlKCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5uYXZpZ2F0ZVRvID0gZnVuY3Rpb24oc3RhdGUsIHBhcmFtcykge1xuICAgICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgJHN0YXRlLmdvKHN0YXRlLCBwYXJhbXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG59KVxuXG4ucnVuKGZ1bmN0aW9uKCRyb290U2NvcGUsICRzdGF0ZSwgbWVkaWF0b3IsIHN5bmNQb29sKSB7XG4gIG1lZGlhdG9yLnN1YnNjcmliZSgnd2ZtOmF1dGg6cHJvZmlsZTpjaGFuZ2UnLCBmdW5jdGlvbihfcHJvZmlsZURhdGEpIHtcbiAgICBpZiAoX3Byb2ZpbGVEYXRhID09PSBudWxsKSB7IC8vIGEgbG9nb3V0XG4gICAgICBzeW5jUG9vbC5yZW1vdmVNYW5hZ2VycygpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICRzdGF0ZS5nbygnYXBwLmxvZ2luJywgdW5kZWZpbmVkLCB7cmVsb2FkOiB0cnVlfSk7XG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnIoZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzeW5jUG9vbC5zeW5jTWFuYWdlck1hcChfcHJvZmlsZURhdGEpICAvLyBjcmVhdGVkIG1hbmFnZXJzIHdpbGwgYmUgY2FjaGVkXG4gICAgICAudGhlbihzeW5jUG9vbC5mb3JjZVN5bmMpXG4gICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCRyb290U2NvcGUudG9TdGF0ZSkge1xuICAgICAgICAgICRzdGF0ZS5nbygkcm9vdFNjb3BlLnRvU3RhdGUsICRyb290U2NvcGUudG9QYXJhbXMsIHtyZWxvYWQ6IHRydWV9KTtcbiAgICAgICAgICBkZWxldGUgJHJvb3RTY29wZS50b1N0YXRlO1xuICAgICAgICAgIGRlbGV0ZSAkcm9vdFNjb3BlLnRvUGFyYW1zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRzdGF0ZS5nbygnYXBwLndvcmtvcmRlcnMnLCB1bmRlZmluZWQsIHtyZWxvYWQ6IHRydWV9KTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pO1xufSlcblxuLmZhY3RvcnkoJ3N5bmNQb29sJywgZnVuY3Rpb24oJHEsICRzdGF0ZSwgbWVkaWF0b3IsIHdvcmtvcmRlclN5bmMsIHdvcmtmbG93U3luYywgcmVzdWx0U3luYywgbWVzc2FnZVN5bmMpIHtcbiAgdmFyIHN5bmNQb29sID0ge307XG5cbiAgc3luY1Bvb2wucmVtb3ZlTWFuYWdlcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICAvLyBhZGQgYW55IGFkZGl0b25hbCBtYW5hZ2VyIGNsZWFudXBzIGhlcmVcbiAgICAvLyBUT0RPOiByZXBsYWNlIHRoaXMgd2l0aCBhIG1lZGlhdG9yIGV2ZW50IHRoYXQgbW9kdWxlcyBjYW4gbGlzdGVuIGZvclxuICAgIHByb21pc2VzLnB1c2god29ya29yZGVyU3luYy5yZW1vdmVNYW5hZ2VyKCkpO1xuICAgIHByb21pc2VzLnB1c2gobWVzc2FnZVN5bmMucmVtb3ZlTWFuYWdlcigpKTtcbiAgICBwcm9taXNlcy5wdXNoKHdvcmtmbG93U3luYy5yZW1vdmVNYW5hZ2VyKCkpO1xuICAgIC8vIHByb21pc2VzLnB1c2gocmVzdWx0U3luYy5yZW1vdmVNYW5hZ2VyKCkpO1xuICAgIHJldHVybiAkcS5hbGwocHJvbWlzZXMpO1xuICB9XG5cbiAgc3luY1Bvb2wuc3luY01hbmFnZXJNYXAgPSBmdW5jdGlvbihwcm9maWxlRGF0YSkge1xuICAgIGlmICghIHByb2ZpbGVEYXRhKSB7XG4gICAgICByZXR1cm4gJHEud2hlbih7fSk7XG4gICAgfVxuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIGlmIChwcm9maWxlRGF0YSAmJiBwcm9maWxlRGF0YS5pZCkge1xuICAgICAgdmFyIGZpbHRlciA9IHtcbiAgICAgICAga2V5OiAnYXNzaWduZWUnLFxuICAgICAgICB2YWx1ZTogcHJvZmlsZURhdGEuaWRcbiAgICAgIH07XG4gICAgICB2YXIgbWVzc2FnZUZpbHRlciA9IHtcbiAgICAgICAga2V5OiAncmVjZWl2ZXJJZCcsXG4gICAgICAgIHZhbHVlOiBwcm9maWxlRGF0YS5pZFxuICAgICAgfVxuICAgIH07XG4gICAgLy8gYWRkIGFueSBhZGRpdG9uYWwgbWFuYWdlciBjcmVhdGVzIGhlcmVcbiAgICBwcm9taXNlcy5wdXNoKHdvcmtvcmRlclN5bmMuY3JlYXRlTWFuYWdlcih7ZmlsdGVyOiBmaWx0ZXJ9KSk7XG4gICAgcHJvbWlzZXMucHVzaCh3b3JrZmxvd1N5bmMuY3JlYXRlTWFuYWdlcigpKTtcbiAgICBwcm9taXNlcy5wdXNoKG1lc3NhZ2VTeW5jLmNyZWF0ZU1hbmFnZXIoe2ZpbHRlcjogbWVzc2FnZUZpbHRlcn0pKTtcbiAgICBwcm9taXNlcy5wdXNoKHJlc3VsdFN5bmMubWFuYWdlclByb21pc2UpO1xuICAgIHJldHVybiAkcS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24obWFuYWdlcnMpIHtcbiAgICAgIHZhciBtYXAgPSB7fTtcbiAgICAgIG1hbmFnZXJzLmZvckVhY2goZnVuY3Rpb24obWFuYWdlcldyYXBwZXIpIHtcbiAgICAgICAgbWFwW21hbmFnZXJXcmFwcGVyLm1hbmFnZXIuZGF0YXNldElkXSA9IG1hbmFnZXJXcmFwcGVyO1xuICAgICAgfSk7XG4gICAgICBtYXAud29ya29yZGVycy5tYW5hZ2VyLnB1Ymxpc2hSZWNvcmREZWx0YVJlY2VpdmVkKG1lZGlhdG9yKVxuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9KTtcbiAgfVxuXG4gIHN5bmNQb29sLmZvcmNlU3luYyA9IGZ1bmN0aW9uKG1hbmFnZXJzKSB7XG4gICAgdmFyIHByb21pc2VzID0gW107XG4gICAgXy5mb3JPd24obWFuYWdlcnMsIGZ1bmN0aW9uKG1hbmFnZXIpIHtcbiAgICAgIHByb21pc2VzLnB1c2goXG4gICAgICAgIG1hbmFnZXIuZm9yY2VTeW5jKClcbiAgICAgICAgICAudGhlbihtYW5hZ2VyLndhaXRGb3JTeW5jKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIG1hbmFnZXI7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuICRxLmFsbChwcm9taXNlcylcbiAgfVxuXG4gIHJldHVybiBzeW5jUG9vbDtcbn0pXG5cbi5ydW4oZnVuY3Rpb24oJHJvb3RTY29wZSwgJHN0YXRlLCAkcSwgbWVkaWF0b3IsIHVzZXJDbGllbnQpIHtcbiAgdmFyIGluaXRQcm9taXNlcyA9IFtdO1xuICB2YXIgaW5pdExpc3RlbmVyID0gbWVkaWF0b3Iuc3Vic2NyaWJlKCdwcm9taXNlOmluaXQnLCBmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgaW5pdFByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gIH0pO1xuICBtZWRpYXRvci5wdWJsaXNoKCdpbml0Jyk7XG4gIGNvbnNvbGUubG9nKGluaXRQcm9taXNlcy5sZW5ndGgsICdpbml0IHByb21pc2VzIHRvIHJlc29sdmUuJyk7XG4gIHZhciBhbGwgPSAoaW5pdFByb21pc2VzLmxlbmd0aCA+IDApID8gJHEuYWxsKGluaXRQcm9taXNlcykgOiAkcS53aGVuKG51bGwpO1xuICBhbGwudGhlbihmdW5jdGlvbigpIHtcbiAgICAkcm9vdFNjb3BlLnJlYWR5ID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhpbml0UHJvbWlzZXMubGVuZ3RoLCAnaW5pdCBwcm9taXNlcyByZXNvbHZlZC4nKTtcbiAgICBtZWRpYXRvci5yZW1vdmUoJ3Byb21pc2U6aW5pdCcsIGluaXRMaXN0ZW5lci5pZCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0pO1xuXG4gICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uKGUsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpIHtcbiAgICBpZih0b1N0YXRlLm5hbWUgIT09IFwiYXBwLmxvZ2luXCIpe1xuICAgICAgdXNlckNsaWVudC5oYXNTZXNzaW9uKCkudGhlbihmdW5jdGlvbihoYXNTZXNzaW9uKSB7XG4gICAgICAgIGlmKCFoYXNTZXNzaW9uKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICRyb290U2NvcGUudG9TdGF0ZSA9IHRvU3RhdGU7XG4gICAgICAgICAgJHJvb3RTY29wZS50b1BhcmFtcyA9IHRvUGFyYW1zO1xuICAgICAgICAgICRzdGF0ZS5nbygnYXBwLmxvZ2luJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIH0pO1xuICAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlRXJyb3InLCBmdW5jdGlvbihldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcywgZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdTdGF0ZSBjaGFuZ2UgZXJyb3I6ICcsIGVycm9yLCB7XG4gICAgICBldmVudDogZXZlbnQsXG4gICAgICB0b1N0YXRlOiB0b1N0YXRlLFxuICAgICAgdG9QYXJhbXM6IHRvUGFyYW1zLFxuICAgICAgZnJvbVN0YXRlOiBmcm9tU3RhdGUsXG4gICAgICBmcm9tUGFyYW1zOiBmcm9tUGFyYW1zLFxuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfSk7XG4gICAgaWYgKGVycm9yWydnZXQgc3RhY2snXSkge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvclsnZ2V0IHN0YWNrJ10oKSk7XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xufSk7XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAnd2ZtLW1vYmlsZS5hdXRoJztcblxuYW5ndWxhci5tb2R1bGUoJ3dmbS1tb2JpbGUuYXV0aCcsIFtcbiAgJ3VpLnJvdXRlcicsXG4sICd3Zm0uY29yZS5tZWRpYXRvcidcbl0pXG5cbi5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIpIHtcbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2FwcC5sb2dpbicsIHtcbiAgICAgICAgdXJsOiAnL2xvZ2luJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvYXV0aC9sb2dpbi50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwgYXMgY3RybCcsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBoYXNTZXNzaW9uOiBmdW5jdGlvbih1c2VyQ2xpZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlckNsaWVudC5oYXNTZXNzaW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIC5zdGF0ZSgnYXBwLnByb2ZpbGUnLCB7XG4gICAgICAgIHVybDogJy9wcm9maWxlJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvYXV0aC9wcm9maWxlLnRwbC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1Byb2ZpbGVDdHJsIGFzIGN0cmwnLFxuICAgICAgfSlcbn0pXG5cbi5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBmdW5jdGlvbih1c2VyQ2xpZW50LCBoYXNTZXNzaW9uKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBzZWxmLmhhc1Nlc3Npb24gPSBoYXNTZXNzaW9uO1xuXG4gIHNlbGYubG9naW5NZXNzYWdlcyA9IHtzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGZhbHNlfTtcblxuICBzZWxmLmxvZ2luID0gZnVuY3Rpb24odmFsaWQpIHtcbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIHVzZXJDbGllbnQuYXV0aChzZWxmLnVzZXJuYW1lLCBzZWxmLnBhc3N3b3JkKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYubG9naW5NZXNzYWdlcy5zdWNjZXNzID0gdHJ1ZTtcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICBzZWxmLmxvZ2luTWVzc2FnZXMuZXJyb3IgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZi5sb2dvdXQgPSBmdW5jdGlvbigpIHtcbiAgICB1c2VyQ2xpZW50LmNsZWFyU2Vzc2lvbigpXG4gIH1cbn0pXG5cbi5jb250cm9sbGVyKCdQcm9maWxlQ3RybCcsIGZ1bmN0aW9uKCkge1xufSlcbjtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0tbW9iaWxlLmNhbGVuZGFyJztcblxuYW5ndWxhci5tb2R1bGUoJ3dmbS1tb2JpbGUuY2FsZW5kYXInLCBbXG4gICd1aS5yb3V0ZXInLFxuLCAnd2ZtLmNvcmUubWVkaWF0b3InXG5dKVxuXG4uY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdhcHAuY2FsZW5kYXInLCB7XG4gICAgICB1cmw6ICcvY2FsZW5kYXInLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICB3b3Jrb3JkZXJzOiBmdW5jdGlvbih3b3Jrb3JkZXJNYW5hZ2VyKSB7XG4gICAgICAgICAgcmV0dXJuIHdvcmtvcmRlck1hbmFnZXIubGlzdCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY2FsZW5kYXIvY2FsZW5kYXIudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ2NhbGVuZGFyQ3RybCBhcyBjdHJsJyxcbiAgICB9KVxufSlcblxuLmNvbnRyb2xsZXIoJ2NhbGVuZGFyQ3RybCcsIGZ1bmN0aW9uICh3b3Jrb3JkZXJzKSB7XG4gIHRoaXMud29ya29yZGVycyA9IHdvcmtvcmRlcnM7XG59KVxuXG47XG4iLCIvKipcbiogQ09ORklERU5USUFMXG4qIENvcHlyaWdodCAyMDE2IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzLlxuKiBUaGlzIGlzIHVucHVibGlzaGVkIHByb3ByaWV0YXJ5IHNvdXJjZSBjb2RlIG9mIFJlZCBIYXQuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAnd2ZtLW1vYmlsZS5maWxlJztcblxudmFyIF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuYW5ndWxhci5tb2R1bGUoJ3dmbS1tb2JpbGUuZmlsZScsIFtcbiAgJ3VpLnJvdXRlcicsXG4gICd3Zm0uY29yZS5tZWRpYXRvcidcbl0pXG5cbi5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIpIHtcbiAgJHN0YXRlUHJvdmlkZXJcbiAgLnN0YXRlKCdhcHAuZmlsZScsIHtcbiAgICB1cmw6ICcvZmlsZScsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvZmlsZS9maWxlLWxpc3QudHBsLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdGaWxlTGlzdEN0cmwgYXMgY3RybCcsXG4gICAgcmVzb2x2ZToge1xuICAgICAgcHJvZmlsZURhdGE6IGZ1bmN0aW9uKHVzZXJDbGllbnQpIHtcbiAgICAgICAgcmV0dXJuIHVzZXJDbGllbnQuZ2V0UHJvZmlsZSgpO1xuICAgICAgfSxcbiAgICAgIGZpbGVzOiBmdW5jdGlvbihmaWxlQ2xpZW50LCBwcm9maWxlRGF0YSkge1xuICAgICAgICByZXR1cm4gZmlsZUNsaWVudC5saXN0KHByb2ZpbGVEYXRhLmlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59KVxuXG4uY29udHJvbGxlcignRmlsZUxpc3RDdHJsJywgZnVuY3Rpb24oJHN0YXRlLCAkd2luZG93LCAkbWREaWFsb2csIG1vYmlsZUNhbWVyYSwgZGVza3RvcENhbWVyYSwgZmlsZUNsaWVudCwgZmlsZXMsIHByb2ZpbGVEYXRhKSB7XG4gIHNlbGYgPSB0aGlzO1xuICBzZWxmLmZpbGVzID0gZmlsZXMuc2xpY2UoKS5yZXZlcnNlKCk7XG5cbiAgdmFyIGNhcHR1cmVUaGVuVXBsb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCR3aW5kb3cuY29yZG92YSkge1xuICAgICAgcmV0dXJuIG1vYmlsZUNhbWVyYS5jYXB0dXJlKClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGNhcHR1cmUpIHtcbiAgICAgICAgcmV0dXJuIGZpbGVDbGllbnQudXBsb2FkRmlsZShwcm9maWxlRGF0YS5pZCwgY2FwdHVyZS5maWxlVVJJLCB7ZmlsZU5hbWU6IGNhcHR1cmUuZmlsZU5hbWV9KS50aGVuKG1vYmlsZUNhbWVyYS5jbGVhckNhY2hlKTtcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkZXNrdG9wQ2FtZXJhLmNhcHR1cmUoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YVVybCkge1xuICAgICAgICByZXR1cm4gZmlsZUNsaWVudC51cGxvYWREYXRhVXJsKHByb2ZpbGVEYXRhLmlkLCBkYXRhVXJsKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzZWxmLmNhcHR1cmVQaG90byA9IGZ1bmN0aW9uKCkge1xuICAgIGNhcHR1cmVUaGVuVXBsb2FkKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQaG90byB1cGxvYWQgY29tcGxldGUnKTtcbiAgICAgICRzdGF0ZS5nbygnYXBwLmZpbGUnLCB1bmRlZmluZWQsIHtyZWxvYWQ6dHJ1ZX0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9KTtcbiAgfVxufSlcbjtcbiIsIi8qKlxuKiBDT05GSURFTlRJQUxcbiogQ29weXJpZ2h0IDIwMTYgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuXG4qIFRoaXMgaXMgdW5wdWJsaXNoZWQgcHJvcHJpZXRhcnkgc291cmNlIGNvZGUgb2YgUmVkIEhhdC5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICd3Zm0tbW9iaWxlLm1hcCc7XG5cbmFuZ3VsYXIubW9kdWxlKCd3Zm0tbW9iaWxlLm1hcCcsIFtcbiAgJ3VpLnJvdXRlcicsXG4sICd3Zm0uY29yZS5tZWRpYXRvcidcbl0pXG5cbi5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIpIHtcbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2FwcC5tYXAnLCB7XG4gICAgICB1cmw6ICcvbWFwJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgd29ya29yZGVyczogZnVuY3Rpb24od29ya29yZGVyTWFuYWdlcikge1xuICAgICAgICAgIHJldHVybiB3b3Jrb3JkZXJNYW5hZ2VyLmxpc3QoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21hcC9tYXAudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ01hcEN0cmwgYXMgY3RybCcsXG4gICAgfSlcbn0pXG5cbi5jb250cm9sbGVyKCdNYXBDdHJsJywgZnVuY3Rpb24gKCR3aW5kb3csICRkb2N1bWVudCwgJHRpbWVvdXQsIHdvcmtvcmRlcnMpIHtcbiAgdGhpcy5jZW50ZXIgPSBbNDkuMjgsIC0xMjMuMTJdO1xuICB0aGlzLndvcmtvcmRlcnMgPSB3b3Jrb3JkZXJzO1xufSlcblxuO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS1tb2JpbGUubWVzc2FnZXMnO1xuXG5hbmd1bGFyLm1vZHVsZSgnd2ZtLW1vYmlsZS5tZXNzYWdlcycsIFtcbiAgJ3VpLnJvdXRlcicsXG4sICd3Zm0uY29yZS5tZWRpYXRvcidcbl0pXG5cbi5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIpIHtcbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2FwcC5tZXNzYWdlJywge1xuICAgICAgICB1cmw6ICcvbWVzc2FnZXMnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlL21lc3NhZ2UtbGlzdC50cGwuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlc0N0cmwgYXMgY3RybCcsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBtZXNzYWdlczogZnVuY3Rpb24obWVzc2FnZU1hbmFnZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlTWFuYWdlci5saXN0KCk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLnN0YXRlKCdhcHAubWVzc2FnZS1kZXRhaWwnLCB7XG4gICAgICB1cmw6ICcvbWVzc2FnZS86bWVzc2FnZUlkJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21lc3NhZ2UvbWVzc2FnZS1kZXRhaWwudHBsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VEZXRhaWxDb250cm9sbGVyIGFzIGN0cmwnLFxuICAgICAgcmVzb2x2ZToge1xuICAgICAgICBtZXNzYWdlOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIG1lc3NhZ2VNYW5hZ2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2VNYW5hZ2VyLnJlYWQoJHN0YXRlUGFyYW1zLm1lc3NhZ2VJZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxufSlcbi5ydW4oZnVuY3Rpb24oJHN0YXRlLCBtZWRpYXRvcikge1xuICBtZWRpYXRvci5zdWJzY3JpYmUoJ3dmbTptZXNzYWdlOnNlbGVjdGVkJywgZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICRzdGF0ZS5nbygnYXBwLm1lc3NhZ2UtZGV0YWlsJywge1xuICAgICAgbWVzc2FnZUlkOiBtZXNzYWdlLmlkXG4gICAgfSk7XG4gIH0pO1xufSlcbi5jb250cm9sbGVyKCdNZXNzYWdlc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRmaWx0ZXIsIG1lZGlhdG9yLCBtZXNzYWdlcykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYubWVzc2FnZXMgPSBtZXNzYWdlcztcbn0pXG4uY29udHJvbGxlcignTWVzc2FnZURldGFpbENvbnRyb2xsZXInLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsIG1lZGlhdG9yLCBtZXNzYWdlLCBtZXNzYWdlTWFuYWdlcikge1xuICBtZWRpYXRvci5zdWJzY3JpYmVGb3JTY29wZSgnd2ZtOm1lc3NhZ2U6Y2xvc2U6JyArIG1lc3NhZ2UuaWQsICRzY29wZSwgZnVuY3Rpb24oKSB7XG4gICAgJHN0YXRlLmdvKCdhcHAubWVzc2FnZScpO1xuICB9KVxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIG1lc3NhZ2Uuc3RhdHVzID0gXCJyZWFkXCI7XG4gIG1lc3NhZ2VNYW5hZ2VyLnVwZGF0ZShtZXNzYWdlKTtcbn0pXG47XG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS1tb2JpbGUubWVzc2FnZXMnO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS1tb2JpbGUuc2V0dGluZyc7XG5cbmFuZ3VsYXIubW9kdWxlKCd3Zm0tbW9iaWxlLnNldHRpbmcnLCBbXG4gICd1aS5yb3V0ZXInLFxuLCAnd2ZtLmNvcmUubWVkaWF0b3InXG5dKVxuXG4uY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdhcHAuc2V0dGluZycsIHtcbiAgICAgICAgdXJsOiAnL3NldHRpbmdzJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvc2V0dGluZy9zZXR0aW5nLWxpc3QudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnU2V0dGluZ0N0cmwgYXMgY3RybCcsXG4gICAgICB9KVxufSlcblxuLmNvbnRyb2xsZXIoJ1NldHRpbmdDdHJsJywgZnVuY3Rpb24oJGRvY3VtZW50KSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5lbmFibGVkID0gJGRvY3VtZW50WzBdLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCd3Zm0tbmlnaHQnKTs7XG5cbiAgc2VsZi5zZXROaWdodFRpbWVNb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coc2VsZi5lbmFibGVkKTtcbiAgICBpZiAoc2VsZi5lbmFibGVkKSB7XG4gICAgICAkZG9jdW1lbnRbMF0uYm9keS5jbGFzc0xpc3QuYWRkKCd3Zm0tbmlnaHQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJGRvY3VtZW50WzBdLmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd2ZtLW5pZ2h0Jyk7XG4gICAgfVxuICB9XG59KVxuO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG52YXIgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG5hbmd1bGFyLm1vZHVsZSgnd2ZtLW1vYmlsZS53b3JrZmxvdycsIFtcbiAgJ3VpLnJvdXRlcicsXG4sICd3Zm0uY29yZS5tZWRpYXRvcidcbl0pXG5cbi5ydW4oZnVuY3Rpb24oJHN0YXRlLCBtZWRpYXRvcikge1xuICBtZWRpYXRvci5zdWJzY3JpYmUoJ3dmbTp3b3Jrb3JkZXI6c2VsZWN0ZWQnLCBmdW5jdGlvbih3b3Jrb3JkZXIpIHtcbiAgICAkc3RhdGUuZ28oJ2FwcC53b3JrZmxvdy5iZWdpbicsIHtcbiAgICAgIHdvcmtvcmRlcklkOiB3b3Jrb3JkZXIuaWRcbiAgICB9KTtcbiAgfSk7XG59KVxuXG4uY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdhcHAud29ya2Zsb3cnLCB7XG4gICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgIHVybDogJy93b3JrZmxvdy93b3Jrb3JkZXIvOndvcmtvcmRlcklkJyxcbiAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgd29ya2Zsb3dzOiBmdW5jdGlvbih3b3JrZmxvd01hbmFnZXIpIHtcbiAgICAgICAgICByZXR1cm4gd29ya2Zsb3dNYW5hZ2VyLmxpc3QoKTtcbiAgICAgICAgfSxcbiAgICAgICAgd29ya29yZGVyOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIHdvcmtvcmRlck1hbmFnZXIpIHtcbiAgICAgICAgICByZXR1cm4gd29ya29yZGVyTWFuYWdlci5yZWFkKCRzdGF0ZVBhcmFtcy53b3Jrb3JkZXJJZCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3VsdDogZnVuY3Rpb24oJHN0YXRlUGFyYW1zLCByZXN1bHRNYW5hZ2VyLCB3b3JrZmxvd01hbmFnZXIsIHdvcmtvcmRlciwgd29ya2Zsb3dzKSB7XG4gICAgICAgICAgdmFyIHdvcmtmbG93ID0gd29ya2Zsb3dzLmZpbHRlcihmdW5jdGlvbih3b3JrZmxvdykge1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh3b3JrZmxvdy5pZCkgPT09IFN0cmluZyh3b3Jrb3JkZXIud29ya2Zsb3dJZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHdvcmtmbG93Lmxlbmd0aCkge1xuICAgICAgICAgICAgd29ya2Zsb3cgPSB3b3JrZmxvd1swXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdE1hbmFnZXIuZ2V0QnlXb3Jrb3JkZXJJZCgkc3RhdGVQYXJhbXMud29ya29yZGVySWQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgdmFyIG9sZFN0YXR1cyA9IHJlc3VsdC5zdGF0dXM7XG4gICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMgPSB3b3JrZmxvd01hbmFnZXIuY2hlY2tTdGF0dXMod29ya29yZGVyLCB3b3JrZmxvdywgcmVzdWx0KTtcbiAgICAgICAgICAgICAgaWYgKG9sZFN0YXR1cyAhPT0gcmVzdWx0LnN0YXR1cykge1xuICAgICAgICAgICAgICAgIHZhciBjcmVhdGUgPSAhIChyZXN1bHQuaWQgfHwgcmVzdWx0Ll9sb2NhbHVpZCB8fCByZXN1bHQuaWQgPT09IDApO1xuICAgICAgICAgICAgICAgIGlmIChjcmVhdGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRNYW5hZ2VyLmNyZWF0ZShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRNYW5hZ2VyLnVwZGF0ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJyc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldz48L2Rpdj4nXG4gICAgICAgIH0sXG4gICAgICAgICd0b29sYmFyQGFwcCc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC93b3JrZmxvdy93b3JrZmxvdy10b29sYmFyLnRwbC5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsIHdvcmtvcmRlcikge1xuICAgICAgICAgICAgJHNjb3BlLndvcmtvcmRlciA9IHdvcmtvcmRlcjtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIHdvcmtvcmRlcjogZnVuY3Rpb24oJHN0YXRlUGFyYW1zLCB3b3Jrb3JkZXJNYW5hZ2VyKSB7XG4gICAgICAgICAgICAgIHJldHVybiB3b3Jrb3JkZXJNYW5hZ2VyLnJlYWQoJHN0YXRlUGFyYW1zLndvcmtvcmRlcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5zdGF0ZSgnYXBwLndvcmtmbG93LmJlZ2luJywge1xuICAgICAgdXJsOiAnL2JlZ2luJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3dvcmtmbG93L3dvcmtmbG93LWJlZ2luLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdXb3JrZmxvd0NvbnRyb2xsZXIgYXMgY3RybCcsXG4gICAgfSlcbiAgICAuc3RhdGUoJ2FwcC53b3JrZmxvdy5zdGVwcycsIHtcbiAgICAgIHVybDogJy9zdGVwcycsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC93b3JrZmxvdy93b3JrZmxvdy1zdGVwcy50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnV29ya2Zsb3dTdGVwQ29udHJvbGxlciBhcyBjdHJsJyxcbiAgICB9KVxuICAgIC5zdGF0ZSgnYXBwLndvcmtmbG93LmNvbXBsZXRlJywge1xuICAgICAgdXJsOiAnL2NvbXBsZXRlJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3dvcmtmbG93L3dvcmtmbG93LWNvbXBsZXRlLnRwbC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdXb3JrZmxvd0NvbnRyb2xsZXIgYXMgY3RybCcsXG4gICAgfSlcbn0pXG5cbi5jb250cm9sbGVyKCdXb3JrZmxvd0NvbnRyb2xsZXInLCBmdW5jdGlvbigkc3RhdGUsIHdvcmtmbG93TWFuYWdlciwgcmVzdWx0TWFuYWdlciwgd29ya2Zsb3dzLCB3b3Jrb3JkZXIsIHJlc3VsdCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGNvbnNvbGUubG9nKCd3b3Jrb3JkZXInLCB3b3Jrb3JkZXIpXG4gIHNlbGYud29ya29yZGVyID0gd29ya29yZGVyO1xuICB2YXIgd29ya2Zsb3cgPSB3b3JrZmxvd3MuZmlsdGVyKGZ1bmN0aW9uKHdvcmtmbG93KSB7XG4gICAgcmV0dXJuIFN0cmluZyh3b3JrZmxvdy5pZCkgPT09IFN0cmluZyh3b3Jrb3JkZXIud29ya2Zsb3dJZCk7XG4gIH0pO1xuICBpZiAod29ya2Zsb3cubGVuZ3RoKSB7XG4gICAgc2VsZi53b3JrZmxvdyA9IHdvcmtmbG93WzBdO1xuICB9XG5cbiAgc2VsZi5yZXN1bHQgPSByZXN1bHQ7XG5cbiAgc2VsZi5zdGVwSW5kZXggPSB3b3JrZmxvd01hbmFnZXIubmV4dFN0ZXBJbmRleChzZWxmLndvcmtmbG93LnN0ZXBzLCBzZWxmLnJlc3VsdCk7XG5cbiAgc2VsZi5iZWdpbiA9IGZ1bmN0aW9uKCkge1xuICAgICRzdGF0ZS5nbygnYXBwLndvcmtmbG93LnN0ZXBzJywge1xuICAgICAgd29ya29yZGVySWQ6IHdvcmtvcmRlci5pZFxuICAgIH0pO1xuICB9XG59KVxuXG5cbi5jb250cm9sbGVyKCdXb3JrZmxvd1N0ZXBDb250cm9sbGVyJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGUsIG1lZGlhdG9yLCB3b3JrZmxvd01hbmFnZXIsIHJlc3VsdE1hbmFnZXIsIGFwcGZvcm1DbGllbnQsIHdvcmtmbG93cywgd29ya29yZGVyLCByZXN1bHQsIHByb2ZpbGVEYXRhKSB7XG4gIGNvbnNvbGUubG9nKCdtYW5hZ2VyJywgcmVzdWx0TWFuYWdlcik7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBzZWxmLndvcmtvcmRlciA9IHdvcmtvcmRlcjtcbiAgdmFyIHdvcmtmbG93ID0gd29ya2Zsb3dzLmZpbHRlcihmdW5jdGlvbih3b3JrZmxvdykge1xuICAgIHJldHVybiBTdHJpbmcod29ya2Zsb3cuaWQpID09PSBTdHJpbmcod29ya29yZGVyLndvcmtmbG93SWQpO1xuICB9KTtcbiAgaWYgKHdvcmtmbG93Lmxlbmd0aCkge1xuICAgIHNlbGYud29ya2Zsb3cgPSB3b3JrZmxvd1swXTtcbiAgfVxuICBzZWxmLnJlc3VsdCA9IHJlc3VsdDtcbiAgc2VsZi5yZXN1bHQuc3RlcFJlc3VsdHMgPSBzZWxmLnJlc3VsdC5zdGVwUmVzdWx0cyB8fCB7fTtcbiAgc2VsZi5yZXN1bHQud29ya29yZGVySWQgPSBzZWxmLnJlc3VsdC53b3Jrb3JkZXJJZCB8fCB3b3Jrb3JkZXIuaWQ7XG5cbiAgc2VsZi5yZXN1bHQuc3RhdHVzID0gd29ya2Zsb3dNYW5hZ2VyLmNoZWNrU3RhdHVzKHNlbGYud29ya29yZGVyLCBzZWxmLndvcmtmbG93LCBzZWxmLnJlc3VsdCk7XG5cbiAgc2VsZi5zdGVwSW5kZXggPSB3b3JrZmxvd01hbmFnZXIubmV4dFN0ZXBJbmRleChzZWxmLndvcmtmbG93LnN0ZXBzLCBzZWxmLnJlc3VsdCk7XG5cbiAgc2VsZi5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgc2VsZi5zdGVwSW5kZXgrKztcbiAgICBpZiAoc2VsZi5zdGVwSW5kZXggPCBzZWxmLndvcmtmbG93LnN0ZXBzLmxlbmd0aCkge1xuICAgICAgc2VsZi5zdGVwQ3VycmVudCA9IHNlbGYud29ya2Zsb3cuc3RlcHNbc2VsZi5zdGVwSW5kZXhdO1xuICAgIH0gZWxzZSB7XG4gICAgICAkc3RhdGUuZ28oJ2FwcC53b3JrZmxvdy5jb21wbGV0ZScsIHtcbiAgICAgICAgd29ya29yZGVySWQ6IHNlbGYud29ya29yZGVyLmlkXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgc2VsZi5uZXh0KCk7XG5cbiAgdmFyIGJhY2tTdWJzY3JpcHRpb24gPSBtZWRpYXRvci5zdWJzY3JpYmUoJ3dmbTp3b3JrZmxvdzpzdGVwOmJhY2snLCBmdW5jdGlvbihzdWJtaXNzaW9uKSB7XG4gICAgc2VsZi5zdGVwSW5kZXgtLTtcbiAgICBpZiAoc2VsZi5zdGVwSW5kZXggPj0gMCkge1xuICAgICAgc2VsZi5zdGVwQ3VycmVudCA9IHNlbGYud29ya2Zsb3cuc3RlcHNbc2VsZi5zdGVwSW5kZXhdO1xuICAgIH0gZWxzZSB7XG4gICAgICAkc3RhdGUuZ28oJ2FwcC53b3JrZmxvdy5iZWdpbicsIHtcbiAgICAgICAgd29ya29yZGVySWQ6IHNlbGYud29ya29yZGVyLmlkXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBzdGVwU3Vic2NyaXB0aW9uID0gbWVkaWF0b3Iuc3Vic2NyaWJlKCd3Zm06d29ya2Zsb3c6c3RlcDpkb25lJywgZnVuY3Rpb24oc3VibWlzc2lvbikge1xuICAgIGNvbnNvbGUubG9nKCdEb25lIGNhbGxlZCBmb3Igd29ya2Zsb3cgc3RlcCcsIHNlbGYuc3RlcEN1cnJlbnQuY29kZSk7XG4gICAgdmFyIHN0ZXAgPSBhbmd1bGFyLmNvcHkoc2VsZi5zdGVwQ3VycmVudCk7XG4gICAgZGVsZXRlIHN0ZXBbJyQkaGFzaEtleSddOyAvLyB0aGlzIHByb3BlcnR5IGJyZWFrcyBhcHBmb3JtIHN1Ym1pc3Npb25zO1xuICAgIHZhciBjcmVhdGUgPSAhIChzZWxmLnJlc3VsdC5pZCB8fCBzZWxmLnJlc3VsdC5fbG9jYWx1aWQgfHwgc2VsZi5yZXN1bHQuaWQgPT09IDApO1xuICAgIHZhciBzdGVwUmVzdWx0ID0ge1xuICAgICAgc3RlcDogc3RlcCxcbiAgICAgIHN1Ym1pc3Npb246IHN1Ym1pc3Npb24sXG4gICAgICB0eXBlOiBzdGVwLmZvcm1JZCA/ICdhcHBmb3JtJyA6ICdzdGF0aWMnLFxuICAgICAgc3RhdHVzOiBzdGVwLmZvcm1JZCA/ICdwZW5kaW5nJyA6ICdjb21wbGV0ZScsXG4gICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgc3VibWl0dGVyOiBwcm9maWxlRGF0YS5pZFxuICAgIH1cbiAgICBzZWxmLnJlc3VsdC5zdGVwUmVzdWx0c1tzdGVwLmNvZGVdID0gc3RlcFJlc3VsdDtcbiAgICBzZWxmLnJlc3VsdC5zdGF0dXMgPSB3b3JrZmxvd01hbmFnZXIuY2hlY2tTdGF0dXMoc2VsZi53b3Jrb3JkZXIsIHNlbGYud29ya2Zsb3csIHNlbGYucmVzdWx0KTtcbiAgICB2YXIgcHJvbWlzZSA9ICEgY3JlYXRlID8gcmVzdWx0TWFuYWdlci51cGRhdGUoc2VsZi5yZXN1bHQpIDogcmVzdWx0TWFuYWdlci5jcmVhdGUoc2VsZi5yZXN1bHQpXG4gICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHByb21pc2VSZXN1bHQpIHtcbiAgICAgIGlmIChjcmVhdGUpIHtcbiAgICAgICAgcmVzdWx0TWFuYWdlci5zdHJlYW0uZmlsdGVyKGZ1bmN0aW9uKG5vdGlmaWNhdGlvbikge1xuICAgICAgICAgIHJldHVybiBub3RpZmljYXRpb24uY29kZSA9PT0gJ3JlbW90ZV91cGRhdGVfYXBwbGllZCdcbiAgICAgICAgICAgICYmIG5vdGlmaWNhdGlvbi5tZXNzYWdlLmhhc2ggPT09IHNlbGYucmVzdWx0Ll9sb2NhbHVpZDtcbiAgICAgICAgfSkudGFrZSgxKS5zdWJzY3JpYmUoZnVuY3Rpb24obm90aWZpY2F0aW9uKSB7XG4gICAgICAgICAgc2VsZi5yZXN1bHQuaWQgPSBub3RpZmljYXRpb24udWlkO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQgc2F2ZSBzdWNjZXNzZnVsJyk7XG4gICAgICBpZiAoc3RlcC5mb3JtSWQpIHtcbiAgICAgICAgYXBwZm9ybUNsaWVudC5zeW5jU3RlcFJlc3VsdCh3b3Jrb3JkZXIsIHN0ZXBSZXN1bHQpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlbW90ZVN1Ym1pc3Npb24pIHtcbiAgICAgICAgICBzZWxmLm5leHQoKTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLm5leHQoKTtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9KTtcbiAgfSk7XG5cbiAgJHNjb3BlLiRvbihcIiRkZXN0cm95XCIsIGZ1bmN0aW9uKCkge1xuICAgIG1lZGlhdG9yLnJlbW92ZSgnd2ZtOndvcmtmbG93OnN0ZXA6ZG9uZScsIHN0ZXBTdWJzY3JpcHRpb24uaWQpO1xuICAgIG1lZGlhdG9yLnJlbW92ZSgnd2ZtOndvcmtmbG93OnN0ZXA6YmFjaycsIGJhY2tTdWJzY3JpcHRpb24uaWQpO1xuICB9KTtcbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS1tb2JpbGUud29ya2Zsb3cnO1xuIiwiLyoqXG4qIENPTkZJREVOVElBTFxuKiBDb3B5cmlnaHQgMjAxNiBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlcy5cbiogVGhpcyBpcyB1bnB1Ymxpc2hlZCBwcm9wcmlldGFyeSBzb3VyY2UgY29kZSBvZiBSZWQgSGF0LlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCd3Zm0tbW9iaWxlLndvcmtvcmRlcnMnLCBbXG4gICd1aS5yb3V0ZXInXG5dKVxuXG4uY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdhcHAud29ya29yZGVycycsIHtcbiAgICAgICAgdXJsOiAnL3dvcmtvcmRlcnMnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC93b3Jrb3JkZXIvd29ya29yZGVyLWxpc3QudHBsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnV29ya29yZGVyc0N0cmwgYXMgY3RybCcsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICB3b3Jrb3JkZXJzOiBmdW5jdGlvbih3b3Jrb3JkZXJNYW5hZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya29yZGVyTWFuYWdlci5saXN0KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXN1bHRNYXA6IGZ1bmN0aW9uKHJlc3VsdE1hbmFnZXIpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRNYW5hZ2VyLmxpc3QoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0cykge1xuICAgICAgICAgICAgICB2YXIgbWFwID0ge307XG4gICAgICAgICAgICAgIHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBtYXBbcmVzdWx0LndvcmtvcmRlcklkXSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiBtYXA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbn0pXG5cbi5jb250cm9sbGVyKCdXb3Jrb3JkZXJzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJGZpbHRlciwgd29ya29yZGVyTWFuYWdlciwgbWVkaWF0b3IsIHdvcmtvcmRlcnMsIHJlc3VsdE1hcCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYud29ya29yZGVycyA9IHdvcmtvcmRlcnM7XG4gIHNlbGYucmVzdWx0TWFwID0gcmVzdWx0TWFwO1xuICBtZWRpYXRvci5zdWJzY3JpYmVGb3JTY29wZSgnd2ZtOmF1dGg6cHJvZmlsZTpjaGFuZ2UnLCAkc2NvcGUsIGZ1bmN0aW9uKHByb2ZpbGVEYXRhKSB7XG4gICAgaWYgKCFwcm9maWxlRGF0YSkge1xuICAgICAgc2VsZi53b3Jrb3JkZXJzID0gW107XG4gICAgfVxuICB9KVxuICBtZWRpYXRvci5zdWJzY3JpYmVGb3JTY29wZSgnd2ZtOnN5bmM6cmVjb3JkX2RlbHRhX3JlY2VpdmVkOndvcmtvcmRlcnMnLCAkc2NvcGUsIGZ1bmN0aW9uKG5vdGlmaWNhdGlvbikge1xuICAgIGNvbnNvbGUubG9nKG5vdGlmaWNhdGlvbik7XG4gICAgIHdvcmtvcmRlck1hbmFnZXIubGlzdCgpLnRoZW4oZnVuY3Rpb24od29ya29yZGVycykge1xuICAgICAgIHNlbGYud29ya29yZGVycyA9IHdvcmtvcmRlcnM7XG4gICAgIH0pXG4gIH0pXG59KVxuXG47XG5cbm1vZHVsZS5leHBvcnRzID0gJ3dmbS1tb2JpbGUud29ya29yZGVycyc7XG4iXX0=
