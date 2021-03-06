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
import ProcessEngineDto from '../model/ProcessEngineDto';

/**
* Engine service.
* @module api/EngineApi
* @version 7.14.0
*/
export default class EngineApi {

    /**
    * Constructs a new EngineApi. 
    * @alias module:api/EngineApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Retrieves the names of all process engines available on your platform. **Note**: You cannot prepend `/engine/{name}` to this method.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ProcessEngineDto>} and HTTP response
     */
    getProcessEngineNamesWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ProcessEngineDto];
      return this.apiClient.callApi(
        '/engine', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves the names of all process engines available on your platform. **Note**: You cannot prepend `/engine/{name}` to this method.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ProcessEngineDto>}
     */
    getProcessEngineNames() {
      return this.getProcessEngineNamesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
