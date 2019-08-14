'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('BrandedCall', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var opts = {from: 'from', to: 'to', reason: 'reason'};
      var promise = client.preview.trusted_comms.brandedCalls.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://preview.twilio.com/TrustedComms/Business/BrandedCalls';

      var values = {From: 'from', To: 'to', Reason: 'reason', };
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
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'bg_color': '#fff',
          'caller': 'Owl Bank',
          'created_at': '2019-05-01T20:00:00Z',
          'font_color': '#000',
          'from': '+15000000000',
          'logo': 'https://www.twilio.com/marketing/bundles/company/img/logos/red/twilio-logo-red.png',
          'reason': 'Hello Jhon, your appointment has been confirmed.',
          'status': 'unknown',
          'to': '+573000000000',
          'use_case': 'conversational',
          'url': 'https://preview.twilio.com/TrustedComms/Business/BrandedCalls'
      });

      holodeck.mock(new Response(201, body));

      var opts = {from: 'from', to: 'to', reason: 'reason'};
      var promise = client.preview.trusted_comms.brandedCalls.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
