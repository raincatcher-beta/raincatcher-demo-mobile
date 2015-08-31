'use strict';

var request = require('request')
  , express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , http = require('http')
  , should = require('should')
  , mediator = require('wfm-mediator/mediator')
  , config = require('../config')
  , _ = require('lodash')
  ;

app.use(bodyParser.json());

// wfm routes
require('./index')(mediator, app);

var testData = [ {id: 0, value: 'one'}, {id: 1, value: 'two'}, {id: 2, value: 'three'} ];

describe('Rest API:', function () {
  before(function(done){
    var server = http.createServer(app);
    server.listen(9001, 'localhost', done);
  });

  it('retrieve all workorders', function(done) {
    mediator.once('workorders:load', function() {
      mediator.publish('workorders:loaded', testData);
    });
    var url = 'http://localhost:9001' + config.apiPath;
    var req = request.get(url, function (err, res, body) {
      if (err) {
        throw new Error(err);
      }
      // console.log(body);
      try {
        body = JSON.parse(body);
      } catch(e) {
        console.log(body);
        throw e;
      }
      body.should.not.be.empty();
      body.should.be.eql(testData);
      done();
    });
  });

  it('retrieve a workorder', function(done) {
    mediator.once('workorder:load', function(id) {
      mediator.publish('workorder:loaded:' + id, testData[id]);
    });

    var url = 'http://localhost:9001' + config.apiPath + '/0';
    var req = request.get(url, function (err, res, body) {
      if (err) {
        throw new Error(err);
      }
      // console.log(body);
      try {
        body = JSON.parse(body);
      } catch(e) {
        console.log(body);
        throw e;
      }
      body.should.not.be.empty();
      body.should.be.eql(testData[0]);
      done();
    });
  });

  it('save a workorder', function(done) {
    mediator.once('workorder:save', function(workorder) {
      testData[workorder.index] = workorder;
      mediator.publish('workorder:saved:' + workorder.id, workorder);
    });
    var url = 'http://localhost:9001' + config.apiPath + '/1';
    var newData = _.clone(testData[1]);
    newData.index = 1;
    newData.value = 'One updated';
    var options = {method: 'PUT', uri: url, body: newData, json: true};
    var req = request(options, function (err, res, body) {
      if (err) {
        throw new Error(err);
      }
      // console.log(body);
      body.should.not.be.empty();
      body.should.be.eql(newData);
      testData[1].should.be.eql(newData);
      done();
    });
  });

  describe('parallel requests', function() {
    var load;
    before(function() {
      load = function(id) {
        setTimeout(function() {
          mediator.publish('workorder:loaded:' + id, testData[id]);
        }, 20);
      };
      mediator.subscribe('workorder:load', load);
    });
    after(function() {
      mediator.remove('workorder:load', load);
    });

    it('retrieve 2 workorders', function(done) {

    var url = 'http://localhost:9001' + config.apiPath + '/0';
    var done1 = false, done2 = false;
    var req = request.get(url, function (err, res, body) {
      if (err) {
        throw new Error(err);
      }
      // console.log(body);
      try {
        body = JSON.parse(body);
      } catch(e) {
        console.log(body);
        throw e;
      }
      body.should.not.be.empty();
      body.should.be.eql(testData[0]);
      done1 = true;
      done2 && done();
    });
    var url = 'http://localhost:9001' + config.apiPath + '/1';
    var req = request.get(url, function (err, res, body) {
      if (err) {
        throw new Error(err);
      }
      // console.log(body);
      try {
        body = JSON.parse(body);
      } catch(e) {
        console.log(body);
        throw e;
      }
      body.should.not.be.empty();
      body.should.be.eql(testData[1]);
      done2 = true;
      done1 && done();
    });
    });
  });
});
