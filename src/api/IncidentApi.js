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
import CountResultDto from '../model/CountResultDto';
import ExceptionDto from '../model/ExceptionDto';
import IncidentDto from '../model/IncidentDto';

/**
* Incident service.
* @module api/IncidentApi
* @version 7.14.0
*/
export default class IncidentApi {

    /**
    * Constructs a new IncidentApi. 
    * @alias module:api/IncidentApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Incident
     * Retrieves an incident by ID.
     * @param {String} id The id of the incident to be retrieved.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IncidentDto} and HTTP response
     */
    getIncidentWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getIncident");
      }

      let pathParams = {
        'id': id
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
      let returnType = IncidentDto;
      return this.apiClient.callApi(
        '/incident/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Incident
     * Retrieves an incident by ID.
     * @param {String} id The id of the incident to be retrieved.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IncidentDto}
     */
    getIncident(id) {
      return this.getIncidentWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get List
     * Queries for incidents that fulfill given parameters. The size of the result set can be retrieved by using the [Get Incident Count](https://docs.camunda.org/manual/7.14/reference/rest/incident/get-query-count/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.incidentId Restricts to incidents that have the given id.
     * @param {String} opts.incidentType Restricts to incidents that belong to the given incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
     * @param {String} opts.incidentMessage Restricts to incidents that have the given incident message.
     * @param {String} opts.incidentMessageLike Restricts to incidents that incidents message is a substring of the given value. The string can include the wildcard character '%' to express like-strategy: starts with (`string%`), ends with (`%string`) or contains (`%string%`).
     * @param {String} opts.processDefinitionId Restricts to incidents that belong to a process definition with the given id.
     * @param {String} opts.processDefinitionKeyIn Restricts to incidents that belong to a process definition with the given keys. Must be a comma-separated list.
     * @param {String} opts.processInstanceId Restricts to incidents that belong to a process instance with the given id.
     * @param {String} opts.executionId Restricts to incidents that belong to an execution with the given id.
     * @param {Date} opts.incidentTimestampBefore Restricts to incidents that have an incidentTimestamp date before the given date. By default, the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {Date} opts.incidentTimestampAfter Restricts to incidents that have an incidentTimestamp date after the given date. By default*, the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {String} opts.activityId Restricts to incidents that belong to an activity with the given id.
     * @param {String} opts.failedActivityId Restricts to incidents that were created due to the failure of an activity with the given id.
     * @param {String} opts.causeIncidentId Restricts to incidents that have the given incident id as cause incident.
     * @param {String} opts.rootCauseIncidentId Restricts to incidents that have the given incident id as root cause incident.
     * @param {String} opts.configuration Restricts to incidents that have the given parameter set as configuration.
     * @param {String} opts.tenantIdIn Restricts to incidents that have one of the given comma-separated tenant ids.
     * @param {String} opts.jobDefinitionIdIn Restricts to incidents that have one of the given comma-separated job definition ids.
     * @param {module:model/String} opts.sortBy Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @param {module:model/String} opts.sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/IncidentDto>} and HTTP response
     */
    getIncidentsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'incidentId': opts['incidentId'],
        'incidentType': opts['incidentType'],
        'incidentMessage': opts['incidentMessage'],
        'incidentMessageLike': opts['incidentMessageLike'],
        'processDefinitionId': opts['processDefinitionId'],
        'processDefinitionKeyIn': opts['processDefinitionKeyIn'],
        'processInstanceId': opts['processInstanceId'],
        'executionId': opts['executionId'],
        'incidentTimestampBefore': opts['incidentTimestampBefore'],
        'incidentTimestampAfter': opts['incidentTimestampAfter'],
        'activityId': opts['activityId'],
        'failedActivityId': opts['failedActivityId'],
        'causeIncidentId': opts['causeIncidentId'],
        'rootCauseIncidentId': opts['rootCauseIncidentId'],
        'configuration': opts['configuration'],
        'tenantIdIn': opts['tenantIdIn'],
        'jobDefinitionIdIn': opts['jobDefinitionIdIn'],
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [IncidentDto];
      return this.apiClient.callApi(
        '/incident', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get List
     * Queries for incidents that fulfill given parameters. The size of the result set can be retrieved by using the [Get Incident Count](https://docs.camunda.org/manual/7.14/reference/rest/incident/get-query-count/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.incidentId Restricts to incidents that have the given id.
     * @param {String} opts.incidentType Restricts to incidents that belong to the given incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
     * @param {String} opts.incidentMessage Restricts to incidents that have the given incident message.
     * @param {String} opts.incidentMessageLike Restricts to incidents that incidents message is a substring of the given value. The string can include the wildcard character '%' to express like-strategy: starts with (`string%`), ends with (`%string`) or contains (`%string%`).
     * @param {String} opts.processDefinitionId Restricts to incidents that belong to a process definition with the given id.
     * @param {String} opts.processDefinitionKeyIn Restricts to incidents that belong to a process definition with the given keys. Must be a comma-separated list.
     * @param {String} opts.processInstanceId Restricts to incidents that belong to a process instance with the given id.
     * @param {String} opts.executionId Restricts to incidents that belong to an execution with the given id.
     * @param {Date} opts.incidentTimestampBefore Restricts to incidents that have an incidentTimestamp date before the given date. By default, the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {Date} opts.incidentTimestampAfter Restricts to incidents that have an incidentTimestamp date after the given date. By default*, the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {String} opts.activityId Restricts to incidents that belong to an activity with the given id.
     * @param {String} opts.failedActivityId Restricts to incidents that were created due to the failure of an activity with the given id.
     * @param {String} opts.causeIncidentId Restricts to incidents that have the given incident id as cause incident.
     * @param {String} opts.rootCauseIncidentId Restricts to incidents that have the given incident id as root cause incident.
     * @param {String} opts.configuration Restricts to incidents that have the given parameter set as configuration.
     * @param {String} opts.tenantIdIn Restricts to incidents that have one of the given comma-separated tenant ids.
     * @param {String} opts.jobDefinitionIdIn Restricts to incidents that have one of the given comma-separated job definition ids.
     * @param {module:model/String} opts.sortBy Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @param {module:model/String} opts.sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/IncidentDto>}
     */
    getIncidents(opts) {
      return this.getIncidentsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get List Count
     * Queries for the number of incidents that fulfill given parameters. Takes the same parameters as the [Get Incidents](https://docs.camunda.org/manual/7.14/reference/rest/incident/get-query/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.incidentId Restricts to incidents that have the given id.
     * @param {String} opts.incidentType Restricts to incidents that belong to the given incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
     * @param {String} opts.incidentMessage Restricts to incidents that have the given incident message.
     * @param {String} opts.incidentMessageLike Restricts to incidents that incidents message is a substring of the given value. The string can include the wildcard character '%' to express like-strategy: starts with (`string%`), ends with (`%string`) or contains (`%string%`).
     * @param {String} opts.processDefinitionId Restricts to incidents that belong to a process definition with the given id.
     * @param {String} opts.processDefinitionKeyIn Restricts to incidents that belong to a process definition with the given keys. Must be a comma-separated list.
     * @param {String} opts.processInstanceId Restricts to incidents that belong to a process instance with the given id.
     * @param {String} opts.executionId Restricts to incidents that belong to an execution with the given id.
     * @param {Date} opts.incidentTimestampBefore Restricts to incidents that have an incidentTimestamp date before the given date. By default, the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {Date} opts.incidentTimestampAfter Restricts to incidents that have an incidentTimestamp date after the given date. By default*, the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {String} opts.activityId Restricts to incidents that belong to an activity with the given id.
     * @param {String} opts.failedActivityId Restricts to incidents that were created due to the failure of an activity with the given id.
     * @param {String} opts.causeIncidentId Restricts to incidents that have the given incident id as cause incident.
     * @param {String} opts.rootCauseIncidentId Restricts to incidents that have the given incident id as root cause incident.
     * @param {String} opts.configuration Restricts to incidents that have the given parameter set as configuration.
     * @param {String} opts.tenantIdIn Restricts to incidents that have one of the given comma-separated tenant ids.
     * @param {String} opts.jobDefinitionIdIn Restricts to incidents that have one of the given comma-separated job definition ids.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CountResultDto>} and HTTP response
     */
    getIncidentsCountWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'incidentId': opts['incidentId'],
        'incidentType': opts['incidentType'],
        'incidentMessage': opts['incidentMessage'],
        'incidentMessageLike': opts['incidentMessageLike'],
        'processDefinitionId': opts['processDefinitionId'],
        'processDefinitionKeyIn': opts['processDefinitionKeyIn'],
        'processInstanceId': opts['processInstanceId'],
        'executionId': opts['executionId'],
        'incidentTimestampBefore': opts['incidentTimestampBefore'],
        'incidentTimestampAfter': opts['incidentTimestampAfter'],
        'activityId': opts['activityId'],
        'failedActivityId': opts['failedActivityId'],
        'causeIncidentId': opts['causeIncidentId'],
        'rootCauseIncidentId': opts['rootCauseIncidentId'],
        'configuration': opts['configuration'],
        'tenantIdIn': opts['tenantIdIn'],
        'jobDefinitionIdIn': opts['jobDefinitionIdIn']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [CountResultDto];
      return this.apiClient.callApi(
        '/incident/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get List Count
     * Queries for the number of incidents that fulfill given parameters. Takes the same parameters as the [Get Incidents](https://docs.camunda.org/manual/7.14/reference/rest/incident/get-query/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.incidentId Restricts to incidents that have the given id.
     * @param {String} opts.incidentType Restricts to incidents that belong to the given incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
     * @param {String} opts.incidentMessage Restricts to incidents that have the given incident message.
     * @param {String} opts.incidentMessageLike Restricts to incidents that incidents message is a substring of the given value. The string can include the wildcard character '%' to express like-strategy: starts with (`string%`), ends with (`%string`) or contains (`%string%`).
     * @param {String} opts.processDefinitionId Restricts to incidents that belong to a process definition with the given id.
     * @param {String} opts.processDefinitionKeyIn Restricts to incidents that belong to a process definition with the given keys. Must be a comma-separated list.
     * @param {String} opts.processInstanceId Restricts to incidents that belong to a process instance with the given id.
     * @param {String} opts.executionId Restricts to incidents that belong to an execution with the given id.
     * @param {Date} opts.incidentTimestampBefore Restricts to incidents that have an incidentTimestamp date before the given date. By default, the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {Date} opts.incidentTimestampAfter Restricts to incidents that have an incidentTimestamp date after the given date. By default*, the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param {String} opts.activityId Restricts to incidents that belong to an activity with the given id.
     * @param {String} opts.failedActivityId Restricts to incidents that were created due to the failure of an activity with the given id.
     * @param {String} opts.causeIncidentId Restricts to incidents that have the given incident id as cause incident.
     * @param {String} opts.rootCauseIncidentId Restricts to incidents that have the given incident id as root cause incident.
     * @param {String} opts.configuration Restricts to incidents that have the given parameter set as configuration.
     * @param {String} opts.tenantIdIn Restricts to incidents that have one of the given comma-separated tenant ids.
     * @param {String} opts.jobDefinitionIdIn Restricts to incidents that have one of the given comma-separated job definition ids.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CountResultDto>}
     */
    getIncidentsCount(opts) {
      return this.getIncidentsCountWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Resolve Incident
     * Resolves an incident with given id.
     * @param {String} id The id of the incident to be resolved.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    resolveIncidentWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling resolveIncident");
      }

      let pathParams = {
        'id': id
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
      let returnType = null;
      return this.apiClient.callApi(
        '/incident/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Resolve Incident
     * Resolves an incident with given id.
     * @param {String} id The id of the incident to be resolved.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    resolveIncident(id) {
      return this.resolveIncidentWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}