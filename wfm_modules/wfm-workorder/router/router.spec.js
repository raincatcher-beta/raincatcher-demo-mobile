'use strict';

var request = require('request')
  , express = require('express')
  , app = express()
  , http = require('http')
  , should = require('should')
  , mediator = require('wfm-mediator')
  , config = require('../config')
  ;

// wfm routes
require('./index')(mediator, app);

var testData = ['1', '2', '3'];
mediator.subscribeOnce('workorders:load', this, function() {
  mediator.publish('workorders:loaded', this, testData);
});

describe('Rest API:', function () {
  before(function(done){
    var server = http.createServer(app);
    server.listen(9001, 'localhost', done);
  });

  it('retrieve all workorders', function(done) {
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
  })
});
