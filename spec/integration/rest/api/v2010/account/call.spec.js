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

describe('Call', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var opts = {to: '+15558675310', from: '+15017122661'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Calls.json`;

      var values = {To: '+15558675310', From: '+15017122661', };
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
          'annotation': null,
          'answered_by': null,
          'api_version': '2010-04-01',
          'caller_name': null,
          'date_created': 'Tue, 31 Aug 2010 20:36:28 +0000',
          'date_updated': 'Tue, 31 Aug 2010 20:36:44 +0000',
          'direction': 'inbound',
          'duration': '15',
          'end_time': 'Tue, 31 Aug 2010 20:36:44 +0000',
          'forwarded_from': '+141586753093',
          'from': '+14158675308',
          'from_formatted': '(415) 867-5308',
          'group_sid': null,
          'parent_call_sid': null,
          'phone_number_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'price': '-0.03000',
          'price_unit': 'USD',
          'sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'start_time': 'Tue, 31 Aug 2010 20:36:29 +0000',
          'status': 'completed',
          'subresource_uris': {
              'notifications': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json',
              'recordings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings.json',
              'feedback': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Feedback.json',
              'feedback_summaries': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/FeedbackSummary.json'
          },
          'to': '+14158675309',
          'to_formatted': '(415) 867-5309',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
      });

      holodeck.mock(new Response(201, body));

      var opts = {to: '+15558675310', from: '+15017122661'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls.create(opts);
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

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Calls/${sid}.json`;

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

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Calls/${sid}.json`;

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
          'annotation': null,
          'answered_by': null,
          'api_version': '2010-04-01',
          'caller_name': null,
          'date_created': 'Tue, 31 Aug 2010 20:36:28 +0000',
          'date_updated': 'Tue, 31 Aug 2010 20:36:44 +0000',
          'direction': 'inbound',
          'duration': '15',
          'end_time': 'Tue, 31 Aug 2010 20:36:44 +0000',
          'forwarded_from': '+141586753093',
          'from': '+14158675308',
          'from_formatted': '(415) 867-5308',
          'group_sid': null,
          'parent_call_sid': null,
          'phone_number_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'price': '-0.03000',
          'price_unit': 'USD',
          'sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'start_time': 'Tue, 31 Aug 2010 20:36:29 +0000',
          'status': 'completed',
          'subresource_uris': {
              'notifications': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json',
              'recordings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings.json'
          },
          'to': '+14158675309',
          'to_formatted': '(415) 867-5309',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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
          'calls': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'annotation': null,
                  'answered_by': null,
                  'api_version': '2010-04-01',
                  'caller_name': '',
                  'date_created': 'Fri, 04 Sep 2015 22:48:30 +0000',
                  'date_updated': 'Fri, 04 Sep 2015 22:48:35 +0000',
                  'direction': 'outbound-api',
                  'duration': '0',
                  'end_time': 'Fri, 04 Sep 2015 22:48:35 +0000',
                  'forwarded_from': null,
                  'from': 'kevin',
                  'from_formatted': 'kevin',
                  'group_sid': null,
                  'parent_call_sid': null,
                  'phone_number_sid': '',
                  'price': null,
                  'price_unit': 'USD',
                  'sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'start_time': 'Fri, 04 Sep 2015 22:48:31 +0000',
                  'status': 'failed',
                  'subresource_uris': {
                      'notifications': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json',
                      'recordings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings.json'
                  },
                  'to': 'sip:kevin@example.com',
                  'to_formatted': 'sip:kevin@example.com',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
              }
          ],
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls.json?PageSize=1&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 1,
          'previous_page_uri': null,
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls.json?PageSize=1&Page=0'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .calls.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'calls': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'annotation': null,
                  'answered_by': null,
                  'api_version': '2010-04-01',
                  'caller_name': '',
                  'date_created': 'Fri, 04 Sep 2015 22:48:30 +0000',
                  'date_updated': 'Fri, 04 Sep 2015 22:48:35 +0000',
                  'direction': 'outbound-api',
                  'duration': '0',
                  'end_time': 'Fri, 04 Sep 2015 22:48:35 +0000',
                  'forwarded_from': null,
                  'from': 'kevin',
                  'from_formatted': 'kevin',
                  'group_sid': null,
                  'parent_call_sid': null,
                  'phone_number_sid': '',
                  'price': null,
                  'price_unit': 'USD',
                  'sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'start_time': 'Fri, 04 Sep 2015 22:48:31 +0000',
                  'status': 'failed',
                  'subresource_uris': {
                      'notifications': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json',
                      'recordings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings.json'
                  },
                  'to': 'sip:kevin@example.com',
                  'to_formatted': 'sip:kevin@example.com',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
              }
          ],
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls.json?PageSize=1&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 1,
          'previous_page_uri': null,
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls.json?PageSize=1&Page=0'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .calls.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Calls.json',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'calls': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'annotation': null,
                  'answered_by': null,
                  'api_version': '2010-04-01',
                  'caller_name': '',
                  'date_created': 'Fri, 04 Sep 2015 22:48:30 +0000',
                  'date_updated': 'Fri, 04 Sep 2015 22:48:35 +0000',
                  'direction': 'outbound-api',
                  'duration': '0',
                  'end_time': 'Fri, 04 Sep 2015 22:48:35 +0000',
                  'forwarded_from': null,
                  'from': 'kevin',
                  'from_formatted': 'kevin',
                  'group_sid': null,
                  'parent_call_sid': null,
                  'phone_number_sid': '',
                  'price': null,
                  'price_unit': 'USD',
                  'sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'start_time': 'Fri, 04 Sep 2015 22:48:31 +0000',
                  'status': 'failed',
                  'subresource_uris': {
                      'notifications': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json',
                      'recordings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings.json'
                  },
                  'to': 'sip:kevin@example.com',
                  'to_formatted': 'sip:kevin@example.com',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
              }
          ],
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls.json?PageSize=1&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 1,
          'previous_page_uri': null,
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls.json?PageSize=1&Page=0'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .calls.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Calls.json`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = JSON.stringify({
          'calls': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'annotation': null,
                  'answered_by': null,
                  'api_version': '2010-04-01',
                  'caller_name': '',
                  'date_created': 'Fri, 04 Sep 2015 22:48:30 +0000',
                  'date_updated': 'Fri, 04 Sep 2015 22:48:35 +0000',
                  'direction': 'outbound-api',
                  'duration': '0',
                  'end_time': 'Fri, 04 Sep 2015 22:48:35 +0000',
                  'forwarded_from': null,
                  'from': 'kevin',
                  'from_formatted': 'kevin',
                  'group_sid': null,
                  'parent_call_sid': null,
                  'phone_number_sid': '',
                  'price': null,
                  'price_unit': 'USD',
                  'sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'start_time': 'Fri, 04 Sep 2015 22:48:31 +0000',
                  'status': 'failed',
                  'subresource_uris': {
                      'notifications': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json',
                      'recordings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings.json'
                  },
                  'to': 'sip:kevin@example.com',
                  'to_formatted': 'sip:kevin@example.com',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
              }
          ],
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls.json?PageSize=1&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 1,
          'previous_page_uri': null,
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls.json?PageSize=1&Page=0'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = JSON.stringify({
          'calls': [],
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls.json?PageSize=1&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 1,
          'previous_page_uri': null,
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls.json?PageSize=1&Page=0'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls.list();
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

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Calls/${sid}.json`;

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
          'annotation': null,
          'answered_by': null,
          'api_version': '2010-04-01',
          'caller_name': null,
          'date_created': 'Tue, 31 Aug 2010 20:36:28 +0000',
          'date_updated': 'Tue, 31 Aug 2010 20:36:44 +0000',
          'direction': 'inbound',
          'duration': '15',
          'end_time': 'Tue, 31 Aug 2010 20:36:44 +0000',
          'forwarded_from': '+141586753093',
          'from': '+14158675308',
          'from_formatted': '(415) 867-5308',
          'group_sid': null,
          'parent_call_sid': null,
          'phone_number_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'price': '-0.03000',
          'price_unit': 'USD',
          'sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'start_time': 'Tue, 31 Aug 2010 20:36:29 +0000',
          'status': 'completed',
          'subresource_uris': {
              'notifications': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json',
              'recordings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings.json',
              'feedback': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Feedback.json',
              'feedback_summaries': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/FeedbackSummary.json'
          },
          'to': '+14158675309',
          'to_formatted': '(415) 867-5309',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid cancel response',
    function(done) {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'annotation': null,
          'answered_by': null,
          'api_version': '2010-04-01',
          'caller_name': null,
          'date_created': 'Tue, 31 Aug 2010 20:36:28 +0000',
          'date_updated': 'Tue, 31 Aug 2010 20:36:44 +0000',
          'direction': 'inbound',
          'duration': '15',
          'end_time': 'Tue, 31 Aug 2010 20:36:44 +0000',
          'forwarded_from': '+141586753093',
          'from': '+14158675308',
          'from_formatted': '(415) 867-5308',
          'group_sid': null,
          'parent_call_sid': null,
          'phone_number_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'price': '-0.03000',
          'price_unit': 'USD',
          'sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'start_time': 'Tue, 31 Aug 2010 20:36:29 +0000',
          'status': 'canceled',
          'subresource_uris': {
              'notifications': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications.json',
              'recordings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings.json',
              'feedback': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Feedback.json',
              'feedback_summaries': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/FeedbackSummary.json'
          },
          'to': '+14158675309',
          'to_formatted': '(415) 867-5309',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
