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
import ResourceOptionsDto from '../model/ResourceOptionsDto';
import UserCredentialsDto from '../model/UserCredentialsDto';
import UserDto from '../model/UserDto';
import UserProfileDto from '../model/UserProfileDto';

/**
* User service.
* @module camunda-jssdk/UserApi
* @version 7.14.0
*/
export default class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:camunda-jssdk/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Options
     * The `/user` resource supports two custom `OPTIONS` requests, one for the resource as such and one for individual user instances. The `OPTIONS` request allows checking for the set of available operations that the currently authenticated user can perform on the /user resource. If the user can perform an operation or not may depend on various things, including the user's authorizations to interact with this resource and the internal configuration of the process engine.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceOptionsDto} and HTTP response
     */
    availableOperationsWithHttpInfo() {
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
      let returnType = ResourceOptionsDto;
      return this.apiClient.callApi(
        '/user', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Options
     * The `/user` resource supports two custom `OPTIONS` requests, one for the resource as such and one for individual user instances. The `OPTIONS` request allows checking for the set of available operations that the currently authenticated user can perform on the /user resource. If the user can perform an operation or not may depend on various things, including the user's authorizations to interact with this resource and the internal configuration of the process engine.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceOptionsDto}
     */
    availableOperations() {
      return this.availableOperationsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Options
     * The `/user` resource supports two custom `OPTIONS` requests, one for the resource as such and one for individual user instances. The `OPTIONS` request allows checking for the set of available operations that the currently authenticated user can perform on the /user resource. If the user can perform an operation or not may depend on various things, including the user's authorizations to interact with this resource and the internal configuration of the process engine.
     * @param {String} id The id of the user to be deleted.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResourceOptionsDto} and HTTP response
     */
    availableUserOperationsWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling availableUserOperations");
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
      let returnType = ResourceOptionsDto;
      return this.apiClient.callApi(
        '/user/{id}', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Options
     * The `/user` resource supports two custom `OPTIONS` requests, one for the resource as such and one for individual user instances. The `OPTIONS` request allows checking for the set of available operations that the currently authenticated user can perform on the /user resource. If the user can perform an operation or not may depend on various things, including the user's authorizations to interact with this resource and the internal configuration of the process engine.
     * @param {String} id The id of the user to be deleted.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResourceOptionsDto}
     */
    availableUserOperations(id) {
      return this.availableUserOperationsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create
     * Create a new user.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserDto} opts.userDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    createUserWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['userDto'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/user/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create
     * Create a new user.
     * @param {Object} opts Optional parameters
     * @param {module:model/UserDto} opts.userDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createUser(opts) {
      return this.createUserWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete
     * Deletes a user by id.
     * @param {String} id The id of the user to be deleted.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteUserWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteUser");
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
        '/user/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete
     * Deletes a user by id.
     * @param {String} id The id of the user to be deleted.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteUser(id) {
      return this.deleteUserWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get List Count
     * Queries for the number of deployments that fulfill given parameters. Takes the same parameters as the [Get Users](https://docs.camunda.org/manual/7.14/reference/rest/user/get-query/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.id Filter by user id
     * @param {String} opts.idIn Filter by a comma-separated list of user ids.
     * @param {String} opts.firstName Filter by the first name of the user. Exact match.
     * @param {String} opts.firstNameLike Filter by the first name that the parameter is a substring of.
     * @param {String} opts.lastName Filter by the last name of the user. Exact match.
     * @param {String} opts.lastNameLike Filter by the last name that the parameter is a substring of.
     * @param {String} opts.email Filter by the email of the user. Exact match.
     * @param {String} opts.emailLike Filter by the email that the parameter is a substring of.
     * @param {String} opts.memberOfGroup Filter for users which are members of the given group.
     * @param {String} opts.memberOfTenant Filter for users which are members of the given tenant.
     * @param {String} opts.potentialStarter Only select Users that are potential starter for the given process definition.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CountResultDto} and HTTP response
     */
    getUserCountWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'id': opts['id'],
        'idIn': opts['idIn'],
        'firstName': opts['firstName'],
        'firstNameLike': opts['firstNameLike'],
        'lastName': opts['lastName'],
        'lastNameLike': opts['lastNameLike'],
        'email': opts['email'],
        'emailLike': opts['emailLike'],
        'memberOfGroup': opts['memberOfGroup'],
        'memberOfTenant': opts['memberOfTenant'],
        'potentialStarter': opts['potentialStarter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CountResultDto;
      return this.apiClient.callApi(
        '/user/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get List Count
     * Queries for the number of deployments that fulfill given parameters. Takes the same parameters as the [Get Users](https://docs.camunda.org/manual/7.14/reference/rest/user/get-query/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.id Filter by user id
     * @param {String} opts.idIn Filter by a comma-separated list of user ids.
     * @param {String} opts.firstName Filter by the first name of the user. Exact match.
     * @param {String} opts.firstNameLike Filter by the first name that the parameter is a substring of.
     * @param {String} opts.lastName Filter by the last name of the user. Exact match.
     * @param {String} opts.lastNameLike Filter by the last name that the parameter is a substring of.
     * @param {String} opts.email Filter by the email of the user. Exact match.
     * @param {String} opts.emailLike Filter by the email that the parameter is a substring of.
     * @param {String} opts.memberOfGroup Filter for users which are members of the given group.
     * @param {String} opts.memberOfTenant Filter for users which are members of the given tenant.
     * @param {String} opts.potentialStarter Only select Users that are potential starter for the given process definition.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CountResultDto}
     */
    getUserCount(opts) {
      return this.getUserCountWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Profile
     * Retrieves a user's profile.
     * @param {String} id The id of the user to retrieve.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/UserProfileDto>} and HTTP response
     */
    getUserProfileWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUserProfile");
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
      let returnType = [UserProfileDto];
      return this.apiClient.callApi(
        '/user/{id}/profile', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Profile
     * Retrieves a user's profile.
     * @param {String} id The id of the user to retrieve.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/UserProfileDto>}
     */
    getUserProfile(id) {
      return this.getUserProfileWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get List
     * Query for a list of users using a list of parameters. The size of the result set can be retrieved by using the Get User Count method. [Get User Count](https://docs.camunda.org/manual/7.14/reference/rest/user/get-query-count/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.id Filter by user id
     * @param {String} opts.idIn Filter by a comma-separated list of user ids.
     * @param {String} opts.firstName Filter by the first name of the user. Exact match.
     * @param {String} opts.firstNameLike Filter by the first name that the parameter is a substring of.
     * @param {String} opts.lastName Filter by the last name of the user. Exact match.
     * @param {String} opts.lastNameLike Filter by the last name that the parameter is a substring of.
     * @param {String} opts.email Filter by the email of the user. Exact match.
     * @param {String} opts.emailLike Filter by the email that the parameter is a substring of.
     * @param {String} opts.memberOfGroup Filter for users which are members of the given group.
     * @param {String} opts.memberOfTenant Filter for users which are members of the given tenant.
     * @param {String} opts.potentialStarter Only select Users that are potential starter for the given process definition.
     * @param {module:model/String} opts.sortBy Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @param {module:model/String} opts.sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/UserProfileDto>} and HTTP response
     */
    getUsersWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'id': opts['id'],
        'idIn': opts['idIn'],
        'firstName': opts['firstName'],
        'firstNameLike': opts['firstNameLike'],
        'lastName': opts['lastName'],
        'lastNameLike': opts['lastNameLike'],
        'email': opts['email'],
        'emailLike': opts['emailLike'],
        'memberOfGroup': opts['memberOfGroup'],
        'memberOfTenant': opts['memberOfTenant'],
        'potentialStarter': opts['potentialStarter'],
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder'],
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
      let returnType = [UserProfileDto];
      return this.apiClient.callApi(
        '/user', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get List
     * Query for a list of users using a list of parameters. The size of the result set can be retrieved by using the Get User Count method. [Get User Count](https://docs.camunda.org/manual/7.14/reference/rest/user/get-query-count/) method.
     * @param {Object} opts Optional parameters
     * @param {String} opts.id Filter by user id
     * @param {String} opts.idIn Filter by a comma-separated list of user ids.
     * @param {String} opts.firstName Filter by the first name of the user. Exact match.
     * @param {String} opts.firstNameLike Filter by the first name that the parameter is a substring of.
     * @param {String} opts.lastName Filter by the last name of the user. Exact match.
     * @param {String} opts.lastNameLike Filter by the last name that the parameter is a substring of.
     * @param {String} opts.email Filter by the email of the user. Exact match.
     * @param {String} opts.emailLike Filter by the email that the parameter is a substring of.
     * @param {String} opts.memberOfGroup Filter for users which are members of the given group.
     * @param {String} opts.memberOfTenant Filter for users which are members of the given tenant.
     * @param {String} opts.potentialStarter Only select Users that are potential starter for the given process definition.
     * @param {module:model/String} opts.sortBy Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @param {module:model/String} opts.sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     * @param {Number} opts.firstResult Pagination of results. Specifies the index of the first result to return.
     * @param {Number} opts.maxResults Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/UserProfileDto>}
     */
    getUsers(opts) {
      return this.getUsersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Unlock User
     * Unlocks a user by id.
     * @param {String} id The id of the user to be unlocked.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    unlockUserWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling unlockUser");
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
        '/user/{id}/unlock', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Unlock User
     * Unlocks a user by id.
     * @param {String} id The id of the user to be unlocked.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    unlockUser(id) {
      return this.unlockUserWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update Credentials
     * Updates a user's credentials (password)
     * @param {String} id The id of the user to be updated.
     * @param {String} password The users new password.
     * @param {String} authenticatedUserPassword The password of the authenticated user who changes the password of the user (i.e., the user with passed id as path parameter).
     * @param {Object} opts Optional parameters
     * @param {module:model/UserCredentialsDto} opts.userCredentialsDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    updateCredentialsWithHttpInfo(id, password, authenticatedUserPassword, opts) {
      opts = opts || {};
      let postBody = opts['userCredentialsDto'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateCredentials");
      }
      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling updateCredentials");
      }
      // verify the required parameter 'authenticatedUserPassword' is set
      if (authenticatedUserPassword === undefined || authenticatedUserPassword === null) {
        throw new Error("Missing the required parameter 'authenticatedUserPassword' when calling updateCredentials");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'password': password,
        'authenticatedUserPassword': authenticatedUserPassword
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/user/{id}/credentials', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update Credentials
     * Updates a user's credentials (password)
     * @param {String} id The id of the user to be updated.
     * @param {String} password The users new password.
     * @param {String} authenticatedUserPassword The password of the authenticated user who changes the password of the user (i.e., the user with passed id as path parameter).
     * @param {Object} opts Optional parameters
     * @param {module:model/UserCredentialsDto} opts.userCredentialsDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    updateCredentials(id, password, authenticatedUserPassword, opts) {
      return this.updateCredentialsWithHttpInfo(id, password, authenticatedUserPassword, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}