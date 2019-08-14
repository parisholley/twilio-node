'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Deployment', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .deployments('DLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var fleetSid = 'FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'DLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://preview.twilio.com/DeployedDevices/Fleets/${fleetSid}/Deployments/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'fleet_sid': 'FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sync_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2016-07-30T20:00:00Z',
          'date_updated': '2016-07-30T20:00:00Z',
          'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Deployments/DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .deployments('DLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .deployments('DLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var fleetSid = 'FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'DLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://preview.twilio.com/DeployedDevices/Fleets/${fleetSid}/Deployments/${sid}`;

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

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .deployments('DLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .deployments.create();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var fleetSid = 'FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://preview.twilio.com/DeployedDevices/Fleets/${fleetSid}/Deployments`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'fleet_sid': 'FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sync_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2016-07-30T20:00:00Z',
          'date_updated': '2016-07-30T20:00:00Z',
          'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Deployments/DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .deployments.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'deployments': [
              {
                  'sid': 'DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'fleet_sid': 'FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sync_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-07-30T20:00:00Z',
                  'date_updated': '2016-07-30T20:00:00Z',
                  'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Deployments/DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Deployments?PageSize=50&Page=0',
              'key': 'deployments',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Deployments?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                     .deployments.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'deployments': [
              {
                  'sid': 'DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'fleet_sid': 'FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sync_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-07-30T20:00:00Z',
                  'date_updated': '2016-07-30T20:00:00Z',
                  'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Deployments/DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Deployments?PageSize=50&Page=0',
              'key': 'deployments',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Deployments?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                     .deployments.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://preview.twilio.com/DeployedDevices/Fleets/${fleetSid}/Deployments',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'deployments': [
              {
                  'sid': 'DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'fleet_sid': 'FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sync_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-07-30T20:00:00Z',
                  'date_updated': '2016-07-30T20:00:00Z',
                  'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Deployments/DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Deployments?PageSize=50&Page=0',
              'key': 'deployments',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Deployments?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                     .deployments.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .deployments.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var fleetSid = 'FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://preview.twilio.com/DeployedDevices/Fleets/${fleetSid}/Deployments`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = JSON.stringify({
          'deployments': [],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Deployments?PageSize=50&Page=0',
              'key': 'deployments',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Deployments?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .deployments.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = JSON.stringify({
          'deployments': [
              {
                  'sid': 'DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'fleet_sid': 'FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sync_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-07-30T20:00:00Z',
                  'date_updated': '2016-07-30T20:00:00Z',
                  'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Deployments/DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Deployments?PageSize=50&Page=0',
              'key': 'deployments',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Deployments?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .deployments.list();
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

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .deployments('DLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var fleetSid = 'FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'DLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://preview.twilio.com/DeployedDevices/Fleets/${fleetSid}/Deployments/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'fleet_sid': 'FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sync_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2016-07-30T20:00:00Z',
          'date_updated': '2016-07-30T20:00:00Z',
          'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Deployments/DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .deployments('DLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
