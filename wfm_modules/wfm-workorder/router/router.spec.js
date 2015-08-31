'use strict';

var request = require('request')
  , express = require('express')
  , app = express()
  , http = require('http')
  , should = require('should')
  , mediator = require('wfm-mediator/mediator')
  , config = require('../config')
  ;

// wfm routes
require('./index')(mediator, app);

var testData = ['1', '2', '3'];

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
      mediator.publish('workorder:loaded', testData[id]);
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

  describe.skip('parallel requests', function() {
    var sub;
    before(function() {
      sub = mediator.subscribe('workorder:load', function(id) {
        setTimeout(function() {
          mediator.publish('workorder:loaded', testData[id]);
        }, 20);
      });
    });
    after(function() {
      sub.unsubscribe();
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
      done2 = truel
      done1 && done();
    });
    });
  });
});
