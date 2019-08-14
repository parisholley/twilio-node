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

describe('UsageRecord', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'usage_records': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'commands': {
                      'billing_units': 'USD',
                      'billed': 0,
                      'total': 3,
                      'from_sim': 1,
                      'to_sim': 2,
                      'home': {
                          'billing_units': 'USD',
                          'billed': 0,
                          'total': 3,
                          'from_sim': 1,
                          'to_sim': 2
                      },
                      'national_roaming': {
                          'billing_units': 'USD',
                          'billed': 0,
                          'total': 0,
                          'from_sim': 0,
                          'to_sim': 0
                      },
                      'international_roaming': []
                  },
                  'data': {
                      'billing_units': 'USD',
                      'billed': 0.35,
                      'total': 3494609,
                      'upload': 731560,
                      'download': 2763049,
                      'units': 'bytes',
                      'home': {
                          'billing_units': 'USD',
                          'billed': 0.35,
                          'total': 3494609,
                          'upload': 731560,
                          'download': 2763049,
                          'units': 'bytes'
                      },
                      'national_roaming': {
                          'billing_units': 'USD',
                          'billed': 0,
                          'total': 0,
                          'upload': 0,
                          'download': 0,
                          'units': 'bytes'
                      },
                      'international_roaming': []
                  },
                  'period': {
                      'start': '2015-07-30T20:00:00Z',
                      'end': '2015-07-30T20:00:00Z'
                  }
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'commands': {},
                  'data': {},
                  'period': {}
              }
          ],
          'meta': {
              'first_page_url': 'https://wireless.twilio.com/v1/UsageRecords?Start=2015-07-30T20%3A00%3A00Z&End=2015-07-30T20%3A00%3A00Z&PageSize=50&Page=0',
              'key': 'usage_records',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://wireless.twilio.com/v1/UsageRecords?Start=2015-07-30T20%3A00%3A00Z&End=2015-07-30T20%3A00%3A00Z&PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.wireless.v1.usageRecords.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'usage_records': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'commands': {
                      'billing_units': 'USD',
                      'billed': 0,
                      'total': 3,
                      'from_sim': 1,
                      'to_sim': 2,
                      'home': {
                          'billing_units': 'USD',
                          'billed': 0,
                          'total': 3,
                          'from_sim': 1,
                          'to_sim': 2
                      },
                      'national_roaming': {
                          'billing_units': 'USD',
                          'billed': 0,
                          'total': 0,
                          'from_sim': 0,
                          'to_sim': 0
                      },
                      'international_roaming': []
                  },
                  'data': {
                      'billing_units': 'USD',
                      'billed': 0.35,
                      'total': 3494609,
                      'upload': 731560,
                      'download': 2763049,
                      'units': 'bytes',
                      'home': {
                          'billing_units': 'USD',
                          'billed': 0.35,
                          'total': 3494609,
                          'upload': 731560,
                          'download': 2763049,
                          'units': 'bytes'
                      },
                      'national_roaming': {
                          'billing_units': 'USD',
                          'billed': 0,
                          'total': 0,
                          'upload': 0,
                          'download': 0,
                          'units': 'bytes'
                      },
                      'international_roaming': []
                  },
                  'period': {
                      'start': '2015-07-30T20:00:00Z',
                      'end': '2015-07-30T20:00:00Z'
                  }
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'commands': {},
                  'data': {},
                  'period': {}
              }
          ],
          'meta': {
              'first_page_url': 'https://wireless.twilio.com/v1/UsageRecords?Start=2015-07-30T20%3A00%3A00Z&End=2015-07-30T20%3A00%3A00Z&PageSize=50&Page=0',
              'key': 'usage_records',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://wireless.twilio.com/v1/UsageRecords?Start=2015-07-30T20%3A00%3A00Z&End=2015-07-30T20%3A00%3A00Z&PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.wireless.v1.usageRecords.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://wireless.twilio.com/v1/UsageRecords',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'usage_records': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'commands': {
                      'billing_units': 'USD',
                      'billed': 0,
                      'total': 3,
                      'from_sim': 1,
                      'to_sim': 2,
                      'home': {
                          'billing_units': 'USD',
                          'billed': 0,
                          'total': 3,
                          'from_sim': 1,
                          'to_sim': 2
                      },
                      'national_roaming': {
                          'billing_units': 'USD',
                          'billed': 0,
                          'total': 0,
                          'from_sim': 0,
                          'to_sim': 0
                      },
                      'international_roaming': []
                  },
                  'data': {
                      'billing_units': 'USD',
                      'billed': 0.35,
                      'total': 3494609,
                      'upload': 731560,
                      'download': 2763049,
                      'units': 'bytes',
                      'home': {
                          'billing_units': 'USD',
                          'billed': 0.35,
                          'total': 3494609,
                          'upload': 731560,
                          'download': 2763049,
                          'units': 'bytes'
                      },
                      'national_roaming': {
                          'billing_units': 'USD',
                          'billed': 0,
                          'total': 0,
                          'upload': 0,
                          'download': 0,
                          'units': 'bytes'
                      },
                      'international_roaming': []
                  },
                  'period': {
                      'start': '2015-07-30T20:00:00Z',
                      'end': '2015-07-30T20:00:00Z'
                  }
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'commands': {},
                  'data': {},
                  'period': {}
              }
          ],
          'meta': {
              'first_page_url': 'https://wireless.twilio.com/v1/UsageRecords?Start=2015-07-30T20%3A00%3A00Z&End=2015-07-30T20%3A00%3A00Z&PageSize=50&Page=0',
              'key': 'usage_records',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://wireless.twilio.com/v1/UsageRecords?Start=2015-07-30T20%3A00%3A00Z&End=2015-07-30T20%3A00%3A00Z&PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.wireless.v1.usageRecords.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.wireless.v1.usageRecords.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://wireless.twilio.com/v1/UsageRecords';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = JSON.stringify({
          'usage_records': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'commands': {
                      'billing_units': 'USD',
                      'billed': 0,
                      'total': 3,
                      'from_sim': 1,
                      'to_sim': 2,
                      'home': {
                          'billing_units': 'USD',
                          'billed': 0,
                          'total': 3,
                          'from_sim': 1,
                          'to_sim': 2
                      },
                      'national_roaming': {
                          'billing_units': 'USD',
                          'billed': 0,
                          'total': 0,
                          'from_sim': 0,
                          'to_sim': 0
                      },
                      'international_roaming': []
                  },
                  'data': {
                      'billing_units': 'USD',
                      'billed': 0.35,
                      'total': 3494609,
                      'upload': 731560,
                      'download': 2763049,
                      'units': 'bytes',
                      'home': {
                          'billing_units': 'USD',
                          'billed': 0.35,
                          'total': 3494609,
                          'upload': 731560,
                          'download': 2763049,
                          'units': 'bytes'
                      },
                      'national_roaming': {
                          'billing_units': 'USD',
                          'billed': 0,
                          'total': 0,
                          'upload': 0,
                          'download': 0,
                          'units': 'bytes'
                      },
                      'international_roaming': []
                  },
                  'period': {
                      'start': '2015-07-30T20:00:00Z',
                      'end': '2015-07-30T20:00:00Z'
                  }
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'commands': {},
                  'data': {},
                  'period': {}
              }
          ],
          'meta': {
              'first_page_url': 'https://wireless.twilio.com/v1/UsageRecords?Start=2015-07-30T20%3A00%3A00Z&End=2015-07-30T20%3A00%3A00Z&PageSize=50&Page=0',
              'key': 'usage_records',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://wireless.twilio.com/v1/UsageRecords?Start=2015-07-30T20%3A00%3A00Z&End=2015-07-30T20%3A00%3A00Z&PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.wireless.v1.usageRecords.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
