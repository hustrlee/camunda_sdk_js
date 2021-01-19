/**
 * Camunda BPM REST API
 * OpenApi Spec for Camunda BPM REST API.
 *
 * The version of the OpenAPI document: 7.14.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import SchemaLogEntryDto from '../model/SchemaLogEntryDto';
import SchemaLogQueryDto from '../model/SchemaLogQueryDto';

/**
* SchemaLog service.
* @module api/SchemaLogApi
* @version 7.14.0
*/
export default class SchemaLogApi {

    /**
    * Constructs a new SchemaLogApi. 
    * @alias module:api/SchemaLogApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Queries for schema log entries that fulfill given parameters.
     * @param {Object} opts Optional parameters
     * @param {String} opts.version Only return schema log entries with a specific version.
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SchemaLogEntryDto>} and HTTP response
     */
    getSchemaLogWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'version': opts['version'],
        'firstResult': opts['firstResult'],
        'maxResults': opts['maxResults']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [SchemaLogEntryDto];
      return this.apiClient.callApi(
        '/schema/log', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Queries for schema log entries that fulfill given parameters.
     * @param {Object} opts Optional parameters
     * @param {String} opts.version Only return schema log entries with a specific version.
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SchemaLogEntryDto>}
     */
    getSchemaLog(opts) {
      return this.getSchemaLogWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Queries for schema log entries that fulfill given parameters.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {module:model/SchemaLogQueryDto} opts.schemaLogQueryDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SchemaLogEntryDto>} and HTTP response
     */
    querySchemaLogWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['schemaLogQueryDto'];

      let pathParams = {
      };
      let queryParams = {
        'firstResult': opts['firstResult'],
        'maxResults': opts['maxResults']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [SchemaLogEntryDto];
      return this.apiClient.callApi(
        '/schema/log', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Queries for schema log entries that fulfill given parameters.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {module:model/SchemaLogQueryDto} opts.schemaLogQueryDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SchemaLogEntryDto>}
     */
    querySchemaLog(opts) {
      return this.querySchemaLogWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
