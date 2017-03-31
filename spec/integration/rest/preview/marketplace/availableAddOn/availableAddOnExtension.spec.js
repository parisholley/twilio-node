'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../holodeck');
var Request = require('../../../../../../lib/http/request');
var Response = require('../../../../../../lib/http/response');
var RestException = require('../../../../../../lib/base/RestException');
var Twilio = require('../../../../../../lib');


var client;
var holodeck;

describe('AvailableAddOnExtension', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.marketplace.availableAddOns('XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                              .extensions('XFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        availableAddOnSid: 'XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'XFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/marketplace/AvailableAddOns/<%= availableAddOnSid %>/Extensions/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'sid': 'XFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'available_add_on_sid': 'XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'Incoming Voice Call',
          'product_name': 'Programmable Voice',
          'unique_name': 'voice-incoming',
          'url': 'https://preview.twilio.com/marketplace/AvailableAddOns/XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Extensions/XFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.marketplace.availableAddOns('XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                              .extensions('XFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.marketplace.availableAddOns('XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                              .extensions.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        availableAddOnSid: 'XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/marketplace/AvailableAddOns/<%= availableAddOnSid %>/Extensions')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'extensions': [
              {
                  'sid': 'XFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'available_add_on_sid': 'XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'Incoming Voice Call',
                  'product_name': 'Programmable Voice',
                  'unique_name': 'voice-incoming',
                  'url': 'https://preview.twilio.com/marketplace/AvailableAddOns/XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Extensions/XFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://preview.twilio.com/marketplace/AvailableAddOns/XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Extensions?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/marketplace/AvailableAddOns/XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Extensions?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'extensions'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.marketplace.availableAddOns('XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                              .extensions.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'extensions': [],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://preview.twilio.com/marketplace/AvailableAddOns/XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Extensions?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/marketplace/AvailableAddOns/XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Extensions?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'extensions'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.marketplace.availableAddOns('XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                              .extensions.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});
