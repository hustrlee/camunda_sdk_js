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
import ExceptionDto from '../model/ExceptionDto';
import PatchVariablesDto from '../model/PatchVariablesDto';
import VariableValueDto from '../model/VariableValueDto';

/**
* TaskLocalVariable service.
* @module camunda-jssdk/TaskLocalVariableApi
* @version 7.14.0
*/
export default class TaskLocalVariableApi {

    /**
    * Constructs a new TaskLocalVariableApi. 
    * @alias module:camunda-jssdk/TaskLocalVariableApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Removes a local variable from a task by id.
     * @param {String} id The id of the task to delete the variable from.
     * @param {String} varName The name of the variable to be removed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteTaskLocalVariableWithHttpInfo(id, varName) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteTaskLocalVariable");
      }
      // verify the required parameter 'varName' is set
      if (varName === undefined || varName === null) {
        throw new Error("Missing the required parameter 'varName' when calling deleteTaskLocalVariable");
      }

      let pathParams = {
        'id': id,
        'varName': varName
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
        '/task/{id}/localVariables/{varName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Removes a local variable from a task by id.
     * @param {String} id The id of the task to delete the variable from.
     * @param {String} varName The name of the variable to be removed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteTaskLocalVariable(id, varName) {
      return this.deleteTaskLocalVariableWithHttpInfo(id, varName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves a variable from the context of a given task by id.
     * @param {String} id The id of the task to retrieve the variable from.
     * @param {String} varName The name of the variable to get
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.deserializeValue Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine. (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VariableValueDto} and HTTP response
     */
    getTaskLocalVariableWithHttpInfo(id, varName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTaskLocalVariable");
      }
      // verify the required parameter 'varName' is set
      if (varName === undefined || varName === null) {
        throw new Error("Missing the required parameter 'varName' when calling getTaskLocalVariable");
      }

      let pathParams = {
        'id': id,
        'varName': varName
      };
      let queryParams = {
        'deserializeValue': opts['deserializeValue']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VariableValueDto;
      return this.apiClient.callApi(
        '/task/{id}/localVariables/{varName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves a variable from the context of a given task by id.
     * @param {String} id The id of the task to retrieve the variable from.
     * @param {String} varName The name of the variable to get
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.deserializeValue Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine. (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VariableValueDto}
     */
    getTaskLocalVariable(id, varName, opts) {
      return this.getTaskLocalVariableWithHttpInfo(id, varName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves a binary variable from the context of a given task by id. Applicable for byte array and file variables.
     * @param {String} id The id of the task to retrieve the variable for.
     * @param {String} varName The name of the variable to retrieve.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */
    getTaskLocalVariableBinaryWithHttpInfo(id, varName) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTaskLocalVariableBinary");
      }
      // verify the required parameter 'varName' is set
      if (varName === undefined || varName === null) {
        throw new Error("Missing the required parameter 'varName' when calling getTaskLocalVariableBinary");
      }

      let pathParams = {
        'id': id,
        'varName': varName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/octet-stream', 'text/plain', 'application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/task/{id}/localVariables/{varName}/data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves a binary variable from the context of a given task by id. Applicable for byte array and file variables.
     * @param {String} id The id of the task to retrieve the variable for.
     * @param {String} varName The name of the variable to retrieve.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */
    getTaskLocalVariableBinary(id, varName) {
      return this.getTaskLocalVariableBinaryWithHttpInfo(id, varName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves all variables of a given task by id.
     * @param {String} id The id of the task to retrieve the variables from.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.deserializeValues Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine. (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, module:model/{String: VariableValueDto}>} and HTTP response
     */
    getTaskLocalVariablesWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTaskLocalVariables");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'deserializeValues': opts['deserializeValues']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = {'String': VariableValueDto};
      return this.apiClient.callApi(
        '/task/{id}/localVariables', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves all variables of a given task by id.
     * @param {String} id The id of the task to retrieve the variables from.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.deserializeValues Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine. (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, module:model/{String: VariableValueDto}>}
     */
    getTaskLocalVariables(id, opts) {
      return this.getTaskLocalVariablesWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates or deletes the variables in the context of a task. Updates precede deletions. So, if a variable is updated AND deleted, the deletion overrides the update.
     * @param {String} id The id of the task to set variables for.
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchVariablesDto} opts.patchVariablesDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    modifyTaskLocalVariablesWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['patchVariablesDto'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling modifyTaskLocalVariables");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/task/{id}/localVariables', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates or deletes the variables in the context of a task. Updates precede deletions. So, if a variable is updated AND deleted, the deletion overrides the update.
     * @param {String} id The id of the task to set variables for.
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchVariablesDto} opts.patchVariablesDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    modifyTaskLocalVariables(id, opts) {
      return this.modifyTaskLocalVariablesWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Sets a variable in the context of a given task.
     * @param {String} id The id of the task to set the variable for.
     * @param {String} varName The name of the variable to set.
     * @param {Object} opts Optional parameters
     * @param {module:model/VariableValueDto} opts.variableValueDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    putTaskLocalVariableWithHttpInfo(id, varName, opts) {
      opts = opts || {};
      let postBody = opts['variableValueDto'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putTaskLocalVariable");
      }
      // verify the required parameter 'varName' is set
      if (varName === undefined || varName === null) {
        throw new Error("Missing the required parameter 'varName' when calling putTaskLocalVariable");
      }

      let pathParams = {
        'id': id,
        'varName': varName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/task/{id}/localVariables/{varName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Sets a variable in the context of a given task.
     * @param {String} id The id of the task to set the variable for.
     * @param {String} varName The name of the variable to set.
     * @param {Object} opts Optional parameters
     * @param {module:model/VariableValueDto} opts.variableValueDto 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    putTaskLocalVariable(id, varName, opts) {
      return this.putTaskLocalVariableWithHttpInfo(id, varName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Sets the serialized value for a binary variable or the binary value for a file variable.
     * @param {String} id The id of the task to retrieve the variable for.
     * @param {String} varName The name of the variable to retrieve.
     * @param {Object} opts Optional parameters
     * @param {File} opts.data The binary data to be set. For File variables, this multipart can contain the filename, binary value and MIME type of the file variable to be set Only the filename is mandatory.
     * @param {module:model/String} opts.valueType The name of the variable type. Either Bytes for a byte array variable or File for a file variable.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    setBinaryTaskLocalVariableWithHttpInfo(id, varName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setBinaryTaskLocalVariable");
      }
      // verify the required parameter 'varName' is set
      if (varName === undefined || varName === null) {
        throw new Error("Missing the required parameter 'varName' when calling setBinaryTaskLocalVariable");
      }

      let pathParams = {
        'id': id,
        'varName': varName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'data': opts['data'],
        'valueType': opts['valueType']
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/task/{id}/localVariables/{varName}/data', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Sets the serialized value for a binary variable or the binary value for a file variable.
     * @param {String} id The id of the task to retrieve the variable for.
     * @param {String} varName The name of the variable to retrieve.
     * @param {Object} opts Optional parameters
     * @param {File} opts.data The binary data to be set. For File variables, this multipart can contain the filename, binary value and MIME type of the file variable to be set Only the filename is mandatory.
     * @param {module:model/String} opts.valueType The name of the variable type. Either Bytes for a byte array variable or File for a file variable.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    setBinaryTaskLocalVariable(id, varName, opts) {
      return this.setBinaryTaskLocalVariableWithHttpInfo(id, varName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
