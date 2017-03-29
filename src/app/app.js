'use strict';

var angular = require('angular');

//Requiring the client SDK with Drag & Drop Apps Functionality.
window.async = require('async');
window._ = require('underscore');
require('fh-js-sdk/dist/feedhenry-forms.js');



angular.module('wfm-mobile', [
  require('angular-messages')
, require('angular-ui-router')
, require('angular-material')
, require('fh-wfm-sync')
, require('fh-wfm-message')
, require('fh-wfm-mediator')
, require('fh-wfm-workorder-angular')({
  mode: "user",
  mainColumnViewId: "content@app"
})
, require('fh-wfm-workflow-angular')({
  mode: "user",
  mainColumnViewId: "content@app",
  toolbarViewId: "toolbar@app"
})
, require('fh-wfm-appform')
, require('fh-wfm-risk-assessment')
, require('fh-wfm-vehicle-inspection')
, require('fh-wfm-user-angular')({})
, require('fh-wfm-map')({
  viewId: 'content'
})
, require('fh-wfm-camera')
, require('./message/message')
, require('./setting/setting')
, require('fh-wfm-file-angular')({
  userMode: true,
  uploadEnabled: true,
  mainColumnViewId: "content",
  detailStateMount: "app.file-detail"
})
]);

//Initialising the application with required service, config and initialising script.
require('./initialisation');
