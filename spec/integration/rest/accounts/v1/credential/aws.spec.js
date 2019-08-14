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

describe('Aws', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'credentials': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-31T04:00:00Z',
                  'date_updated': '2015-07-31T04:00:00Z',
                  'friendly_name': 'friendly_name',
                  'sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://accounts.twilio.com/v1/Credentials/AWS/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://accounts.twilio.com/v1/Credentials/AWS?PageSize=50&Page=0',
              'key': 'credentials',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://accounts.twilio.com/v1/Credentials/AWS?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.accounts.v1.credentials
                        .aws.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'credentials': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-31T04:00:00Z',
                  'date_updated': '2015-07-31T04:00:00Z',
                  'friendly_name': 'friendly_name',
                  'sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://accounts.twilio.com/v1/Credentials/AWS/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://accounts.twilio.com/v1/Credentials/AWS?PageSize=50&Page=0',
              'key': 'credentials',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://accounts.twilio.com/v1/Credentials/AWS?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.accounts.v1.credentials
                        .aws.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://accounts.twilio.com/v1/Credentials/AWS',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'credentials': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-31T04:00:00Z',
                  'date_updated': '2015-07-31T04:00:00Z',
                  'friendly_name': 'friendly_name',
                  'sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://accounts.twilio.com/v1/Credentials/AWS/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://accounts.twilio.com/v1/Credentials/AWS?PageSize=50&Page=0',
              'key': 'credentials',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://accounts.twilio.com/v1/Credentials/AWS?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.accounts.v1.credentials
                        .aws.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.accounts.v1.credentials
                                      .aws.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://accounts.twilio.com/v1/Credentials/AWS';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = JSON.stringify({
          'credentials': [],
          'meta': {
              'first_page_url': 'https://accounts.twilio.com/v1/Credentials/AWS?PageSize=50&Page=0',
              'key': 'credentials',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://accounts.twilio.com/v1/Credentials/AWS?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.accounts.v1.credentials
                                      .aws.list();
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
          'credentials': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-31T04:00:00Z',
                  'date_updated': '2015-07-31T04:00:00Z',
                  'friendly_name': 'friendly_name',
                  'sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://accounts.twilio.com/v1/Credentials/AWS/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://accounts.twilio.com/v1/Credentials/AWS?PageSize=50&Page=0',
              'key': 'credentials',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://accounts.twilio.com/v1/Credentials/AWS?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.accounts.v1.credentials
                                      .aws.list();
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

      var opts = {credentials: 'AKIAIOSFODNN7EXAMPLE:wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'};
      var promise = client.accounts.v1.credentials
                                      .aws.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://accounts.twilio.com/v1/Credentials/AWS';

      var values = {Credentials: 'AKIAIOSFODNN7EXAMPLE:wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY', };
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
          'date_created': '2015-07-31T04:00:00Z',
          'date_updated': '2015-07-31T04:00:00Z',
          'friendly_name': 'friendly_name',
          'sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://accounts.twilio.com/v1/Credentials/AWS/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {credentials: 'AKIAIOSFODNN7EXAMPLE:wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'};
      var promise = client.accounts.v1.credentials
                                      .aws.create(opts);
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

      var promise = client.accounts.v1.credentials
                                      .aws('CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://accounts.twilio.com/v1/Credentials/AWS/${sid}`;

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
          'date_created': '2015-07-31T04:00:00Z',
          'date_updated': '2015-07-31T04:00:00Z',
          'friendly_name': 'friendly_name',
          'sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://accounts.twilio.com/v1/Credentials/AWS/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.accounts.v1.credentials
                                      .aws('CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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

      var promise = client.accounts.v1.credentials
                                      .aws('CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://accounts.twilio.com/v1/Credentials/AWS/${sid}`;

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
          'date_created': '2015-07-31T04:00:00Z',
          'date_updated': '2015-07-31T04:00:00Z',
          'friendly_name': 'friendly_name',
          'sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://accounts.twilio.com/v1/Credentials/AWS/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.accounts.v1.credentials
                                      .aws('CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
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

      var promise = client.accounts.v1.credentials
                                      .aws('CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://accounts.twilio.com/v1/Credentials/AWS/${sid}`;

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

      var promise = client.accounts.v1.credentials
                                      .aws('CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
