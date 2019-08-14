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

describe('Fax', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.fax.v1.faxes('FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://fax.twilio.com/v1/Faxes/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'api_version': 'v1',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'direction': 'outbound',
          'from': '+14155551234',
          'media_url': 'https://www.example.com/fax.pdf',
          'media_sid': 'MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'num_pages': null,
          'price': null,
          'price_unit': null,
          'quality': null,
          'sid': 'FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'queued',
          'to': '+14155554321',
          'duration': null,
          'links': {
              'media': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media'
          },
          'url': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.fax.v1.faxes('FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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
          'faxes': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': 'v1',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'direction': 'outbound',
                  'from': '+14155551234',
                  'media_url': 'https://www.example.com/fax.pdf',
                  'media_sid': 'MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'num_pages': null,
                  'price': null,
                  'price_unit': null,
                  'quality': null,
                  'sid': 'FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'queued',
                  'to': '+14155554321',
                  'duration': null,
                  'links': {
                      'media': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media'
                  },
                  'url': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://fax.twilio.com/v1/Faxes?To=%2B14155554321&From=%2B14155551234&PageSize=50&Page=0',
              'key': 'faxes',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://fax.twilio.com/v1/Faxes?To=%2B14155554321&From=%2B14155551234&PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.fax.v1.faxes.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'faxes': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': 'v1',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'direction': 'outbound',
                  'from': '+14155551234',
                  'media_url': 'https://www.example.com/fax.pdf',
                  'media_sid': 'MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'num_pages': null,
                  'price': null,
                  'price_unit': null,
                  'quality': null,
                  'sid': 'FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'queued',
                  'to': '+14155554321',
                  'duration': null,
                  'links': {
                      'media': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media'
                  },
                  'url': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://fax.twilio.com/v1/Faxes?To=%2B14155554321&From=%2B14155551234&PageSize=50&Page=0',
              'key': 'faxes',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://fax.twilio.com/v1/Faxes?To=%2B14155554321&From=%2B14155551234&PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.fax.v1.faxes.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://fax.twilio.com/v1/Faxes',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'faxes': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': 'v1',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'direction': 'outbound',
                  'from': '+14155551234',
                  'media_url': 'https://www.example.com/fax.pdf',
                  'media_sid': 'MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'num_pages': null,
                  'price': null,
                  'price_unit': null,
                  'quality': null,
                  'sid': 'FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'queued',
                  'to': '+14155554321',
                  'duration': null,
                  'links': {
                      'media': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media'
                  },
                  'url': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://fax.twilio.com/v1/Faxes?To=%2B14155554321&From=%2B14155551234&PageSize=50&Page=0',
              'key': 'faxes',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://fax.twilio.com/v1/Faxes?To=%2B14155554321&From=%2B14155551234&PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.fax.v1.faxes.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.fax.v1.faxes.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://fax.twilio.com/v1/Faxes';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = JSON.stringify({
          'faxes': [],
          'meta': {
              'first_page_url': 'https://fax.twilio.com/v1/Faxes?DateCreatedOnOrBefore=2017-04-01T00%3A00%3A00Z&To=%2B14155554321&DateCreatedAfter=2017-03-31T00%3A00%3A00Z&From=%2B14155551234&PageSize=50&Page=0',
              'key': 'faxes',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://fax.twilio.com/v1/Faxes?DateCreatedOnOrBefore=2017-04-01T00%3A00%3A00Z&To=%2B14155554321&DateCreatedAfter=2017-03-31T00%3A00%3A00Z&From=%2B14155551234&PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.fax.v1.faxes.list();
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
          'faxes': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': 'v1',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'direction': 'outbound',
                  'from': '+14155551234',
                  'media_url': 'https://www.example.com/fax.pdf',
                  'media_sid': 'MEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'num_pages': null,
                  'price': null,
                  'price_unit': null,
                  'quality': null,
                  'sid': 'FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'queued',
                  'to': '+14155554321',
                  'duration': null,
                  'links': {
                      'media': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media'
                  },
                  'url': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://fax.twilio.com/v1/Faxes?To=%2B14155554321&From=%2B14155551234&PageSize=50&Page=0',
              'key': 'faxes',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://fax.twilio.com/v1/Faxes?To=%2B14155554321&From=%2B14155551234&PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.fax.v1.faxes.list();
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

      var opts = {to: 'to', mediaUrl: 'https://example.com'};
      var promise = client.fax.v1.faxes.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://fax.twilio.com/v1/Faxes';

      var values = {To: 'to', MediaUrl: 'https://example.com', };
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
          'api_version': 'v1',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'direction': 'outbound',
          'from': '+14155551234',
          'media_url': null,
          'media_sid': null,
          'num_pages': null,
          'price': null,
          'price_unit': null,
          'quality': 'superfine',
          'sid': 'FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'queued',
          'to': '+14155554321',
          'duration': null,
          'links': {
              'media': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media'
          },
          'url': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {to: 'to', mediaUrl: 'https://example.com'};
      var promise = client.fax.v1.faxes.create(opts);
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

      var promise = client.fax.v1.faxes('FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://fax.twilio.com/v1/Faxes/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'api_version': 'v1',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'direction': 'outbound',
          'from': '+14155551234',
          'media_url': null,
          'media_sid': null,
          'num_pages': null,
          'price': null,
          'price_unit': null,
          'quality': null,
          'sid': 'FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'canceled',
          'to': '+14155554321',
          'duration': null,
          'links': {
              'media': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media'
          },
          'url': 'https://fax.twilio.com/v1/Faxes/FXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.fax.v1.faxes('FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
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

      var promise = client.fax.v1.faxes('FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://fax.twilio.com/v1/Faxes/${sid}`;

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

      var promise = client.fax.v1.faxes('FXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
