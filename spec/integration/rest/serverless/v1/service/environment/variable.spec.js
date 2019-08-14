'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Variable', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .environments('ZEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .variables.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var environmentSid = 'ZEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://serverless.twilio.com/v1/Services/${serviceSid}/Environments/${environmentSid}/Variables`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = JSON.stringify({
          'variables': [],
          'meta': {
              'first_page_url': 'https://serverless.twilio.com/v1/Services/ZS00000000000000000000000000000000/Environments/ZE00000000000000000000000000000000/Variables?PageSize=50&Page=0',
              'key': 'variables',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://serverless.twilio.com/v1/Services/ZS00000000000000000000000000000000/Environments/ZE00000000000000000000000000000000/Variables?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .environments('ZEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .variables.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .environments('ZEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .variables('ZVXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var environmentSid = 'ZEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'ZVXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://serverless.twilio.com/v1/Services/${serviceSid}/Environments/${environmentSid}/Variables/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'ZV00000000000000000000000000000000',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ZS00000000000000000000000000000000',
          'environment_sid': 'ZE00000000000000000000000000000000',
          'key': 'test-key',
          'value': 'test-value',
          'date_created': '2018-11-10T20:00:00Z',
          'date_updated': '2018-11-10T20:00:00Z',
          'url': 'https://serverless.twilio.com/v1/Services/ZS00000000000000000000000000000000/Environments/ZE00000000000000000000000000000000/Variables/ZV00000000000000000000000000000000'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .environments('ZEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .variables('ZVXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var opts = {key: 'key', value: 'value'};
      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .environments('ZEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .variables.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var environmentSid = 'ZEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://serverless.twilio.com/v1/Services/${serviceSid}/Environments/${environmentSid}/Variables`;

      var values = {Key: 'key', Value: 'value', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'ZV00000000000000000000000000000000',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ZS00000000000000000000000000000000',
          'environment_sid': 'ZE00000000000000000000000000000000',
          'key': 'new-key',
          'value': 'new-value',
          'date_created': '2018-11-10T20:00:00Z',
          'date_updated': '2018-11-10T20:00:00Z',
          'url': 'https://serverless.twilio.com/v1/Services/ZS00000000000000000000000000000000/Environments/ZE00000000000000000000000000000000/Variables/ZV00000000000000000000000000000000'
      });

      holodeck.mock(new Response(201, body));

      var opts = {key: 'key', value: 'value'};
      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .environments('ZEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .variables.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .environments('ZEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .variables('ZVXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var environmentSid = 'ZEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'ZVXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://serverless.twilio.com/v1/Services/${serviceSid}/Environments/${environmentSid}/Variables/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'ZV00000000000000000000000000000000',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ZS00000000000000000000000000000000',
          'environment_sid': 'ZE00000000000000000000000000000000',
          'key': 'update-key',
          'value': 'update-value',
          'date_created': '2018-11-10T20:00:00Z',
          'date_updated': '2018-11-11T20:00:00Z',
          'url': 'https://serverless.twilio.com/v1/Services/ZS00000000000000000000000000000000/Environments/ZE00000000000000000000000000000000/Variables/ZV00000000000000000000000000000000'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .environments('ZEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .variables('ZVXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid remove request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .environments('ZEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .variables('ZVXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var environmentSid = 'ZEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'ZVXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://serverless.twilio.com/v1/Services/${serviceSid}/Environments/${environmentSid}/Variables/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .environments('ZEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .variables('ZVXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
