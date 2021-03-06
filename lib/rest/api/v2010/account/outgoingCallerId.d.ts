/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the OutgoingCallerIdList
 *
 * @param version - Version of the resource
 * @param accountSid - The SID of the Account that created the resource
 */
declare function OutgoingCallerIdList(version: V2010, accountSid: string): OutgoingCallerIdListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - A string to describe the resource
 */
interface OutgoingCallerIdInstanceUpdateOptions {
  friendlyName?: string;
}

interface OutgoingCallerIdListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): OutgoingCallerIdContext;
  /**
   * Streams OutgoingCallerIdInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: OutgoingCallerIdInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams OutgoingCallerIdInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: OutgoingCallerIdListInstanceEachOptions, callback?: (item: OutgoingCallerIdInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a outgoing_caller_id
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): OutgoingCallerIdContext;
  /**
   * Retrieve a single target page of OutgoingCallerIdInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: OutgoingCallerIdPage) => any): Promise<OutgoingCallerIdPage>;
  /**
   * Retrieve a single target page of OutgoingCallerIdInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: OutgoingCallerIdPage) => any): Promise<OutgoingCallerIdPage>;
  /**
   * Lists OutgoingCallerIdInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: OutgoingCallerIdInstance[]) => any): Promise<OutgoingCallerIdInstance[]>;
  /**
   * Lists OutgoingCallerIdInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: OutgoingCallerIdListInstanceOptions, callback?: (error: Error | null, items: OutgoingCallerIdInstance[]) => any): Promise<OutgoingCallerIdInstance[]>;
  /**
   * Retrieve a single page of OutgoingCallerIdInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: OutgoingCallerIdPage) => any): Promise<OutgoingCallerIdPage>;
  /**
   * Retrieve a single page of OutgoingCallerIdInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: OutgoingCallerIdListInstancePageOptions, callback?: (error: Error | null, items: OutgoingCallerIdPage) => any): Promise<OutgoingCallerIdPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property friendlyName - The string that identifies the OutgoingCallerId resources to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property phoneNumber - The phone number of the OutgoingCallerId resources to read
 */
interface OutgoingCallerIdListInstanceEachOptions {
  callback?: (item: OutgoingCallerIdInstance, done: (err?: Error) => void) => void;
  done?: Function;
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
  phoneNumber?: string;
}

/**
 * Options to pass to list
 *
 * @property friendlyName - The string that identifies the OutgoingCallerId resources to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property phoneNumber - The phone number of the OutgoingCallerId resources to read
 */
interface OutgoingCallerIdListInstanceOptions {
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
  phoneNumber?: string;
}

/**
 * Options to pass to page
 *
 * @property friendlyName - The string that identifies the OutgoingCallerId resources to read
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property phoneNumber - The phone number of the OutgoingCallerId resources to read
 */
interface OutgoingCallerIdListInstancePageOptions {
  friendlyName?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  phoneNumber?: string;
}

interface OutgoingCallerIdPayload extends OutgoingCallerIdResource, Page.TwilioResponsePayload {
}

interface OutgoingCallerIdResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  phone_number: string;
  sid: string;
  uri: string;
}

interface OutgoingCallerIdSolution {
  accountSid?: string;
}


declare class OutgoingCallerIdContext {
  /**
   * Initialize the OutgoingCallerIdContext
   *
   * @param version - Version of the resource
   * @param accountSid - The SID of the Account that created the resource to fetch
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2010, accountSid: string, sid: string);

  /**
   * fetch a OutgoingCallerIdInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: OutgoingCallerIdInstance) => any): Promise<OutgoingCallerIdInstance>;
  /**
   * remove a OutgoingCallerIdInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: OutgoingCallerIdInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a OutgoingCallerIdInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: OutgoingCallerIdInstance) => any): Promise<OutgoingCallerIdInstance>;
  /**
   * update a OutgoingCallerIdInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: OutgoingCallerIdInstanceUpdateOptions, callback?: (error: Error | null, items: OutgoingCallerIdInstance) => any): Promise<OutgoingCallerIdInstance>;
}


declare class OutgoingCallerIdInstance extends SerializableClass {
  /**
   * Initialize the OutgoingCallerIdContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The SID of the Account that created the resource
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2010, payload: OutgoingCallerIdPayload, accountSid: string, sid: string);

  private _proxy: OutgoingCallerIdContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a OutgoingCallerIdInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: OutgoingCallerIdInstance) => any): Promise<OutgoingCallerIdInstance>;
  friendlyName: string;
  phoneNumber: string;
  /**
   * remove a OutgoingCallerIdInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: OutgoingCallerIdInstance) => any): Promise<boolean>;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a OutgoingCallerIdInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: OutgoingCallerIdInstance) => any): Promise<OutgoingCallerIdInstance>;
  /**
   * update a OutgoingCallerIdInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: OutgoingCallerIdInstanceUpdateOptions, callback?: (error: Error | null, items: OutgoingCallerIdInstance) => any): Promise<OutgoingCallerIdInstance>;
  uri: string;
}


declare class OutgoingCallerIdPage extends Page<V2010, OutgoingCallerIdPayload, OutgoingCallerIdResource, OutgoingCallerIdInstance> {
  /**
   * Initialize the OutgoingCallerIdPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: OutgoingCallerIdSolution);

  /**
   * Build an instance of OutgoingCallerIdInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: OutgoingCallerIdPayload): OutgoingCallerIdInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { OutgoingCallerIdContext, OutgoingCallerIdInstance, OutgoingCallerIdInstanceUpdateOptions, OutgoingCallerIdList, OutgoingCallerIdListInstance, OutgoingCallerIdListInstanceEachOptions, OutgoingCallerIdListInstanceOptions, OutgoingCallerIdListInstancePageOptions, OutgoingCallerIdPage, OutgoingCallerIdPayload, OutgoingCallerIdResource, OutgoingCallerIdSolution }
