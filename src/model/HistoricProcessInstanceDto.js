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

import ApiClient from '../ApiClient';

/**
 * The HistoricProcessInstanceDto model module.
 * @module model/HistoricProcessInstanceDto
 * @version 7.14.0
 */
class HistoricProcessInstanceDto {
    /**
     * Constructs a new <code>HistoricProcessInstanceDto</code>.
     * @alias module:model/HistoricProcessInstanceDto
     */
    constructor() { 
        
        HistoricProcessInstanceDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricProcessInstanceDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricProcessInstanceDto} obj Optional instance to populate.
     * @return {module:model/HistoricProcessInstanceDto} The populated <code>HistoricProcessInstanceDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricProcessInstanceDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('rootProcessInstanceId')) {
                obj['rootProcessInstanceId'] = ApiClient.convertToType(data['rootProcessInstanceId'], 'String');
            }
            if (data.hasOwnProperty('superProcessInstanceId')) {
                obj['superProcessInstanceId'] = ApiClient.convertToType(data['superProcessInstanceId'], 'String');
            }
            if (data.hasOwnProperty('superCaseInstanceId')) {
                obj['superCaseInstanceId'] = ApiClient.convertToType(data['superCaseInstanceId'], 'String');
            }
            if (data.hasOwnProperty('caseInstanceId')) {
                obj['caseInstanceId'] = ApiClient.convertToType(data['caseInstanceId'], 'String');
            }
            if (data.hasOwnProperty('processDefinitionName')) {
                obj['processDefinitionName'] = ApiClient.convertToType(data['processDefinitionName'], 'String');
            }
            if (data.hasOwnProperty('processDefinitionKey')) {
                obj['processDefinitionKey'] = ApiClient.convertToType(data['processDefinitionKey'], 'String');
            }
            if (data.hasOwnProperty('processDefinitionVersion')) {
                obj['processDefinitionVersion'] = ApiClient.convertToType(data['processDefinitionVersion'], 'Number');
            }
            if (data.hasOwnProperty('processDefinitionId')) {
                obj['processDefinitionId'] = ApiClient.convertToType(data['processDefinitionId'], 'String');
            }
            if (data.hasOwnProperty('businessKey')) {
                obj['businessKey'] = ApiClient.convertToType(data['businessKey'], 'String');
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Date');
            }
            if (data.hasOwnProperty('removalTime')) {
                obj['removalTime'] = ApiClient.convertToType(data['removalTime'], 'Date');
            }
            if (data.hasOwnProperty('durationInMillis')) {
                obj['durationInMillis'] = ApiClient.convertToType(data['durationInMillis'], 'Number');
            }
            if (data.hasOwnProperty('startUserId')) {
                obj['startUserId'] = ApiClient.convertToType(data['startUserId'], 'String');
            }
            if (data.hasOwnProperty('startActivityId')) {
                obj['startActivityId'] = ApiClient.convertToType(data['startActivityId'], 'String');
            }
            if (data.hasOwnProperty('deleteReason')) {
                obj['deleteReason'] = ApiClient.convertToType(data['deleteReason'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The id of the process instance.
 * @member {String} id
 */
HistoricProcessInstanceDto.prototype['id'] = undefined;

/**
 * The process instance id of the root process instance that initiated the process.
 * @member {String} rootProcessInstanceId
 */
HistoricProcessInstanceDto.prototype['rootProcessInstanceId'] = undefined;

/**
 * The id of the parent process instance, if it exists.
 * @member {String} superProcessInstanceId
 */
HistoricProcessInstanceDto.prototype['superProcessInstanceId'] = undefined;

/**
 * The id of the parent case instance, if it exists.
 * @member {String} superCaseInstanceId
 */
HistoricProcessInstanceDto.prototype['superCaseInstanceId'] = undefined;

/**
 * The id of the parent case instance, if it exists.
 * @member {String} caseInstanceId
 */
HistoricProcessInstanceDto.prototype['caseInstanceId'] = undefined;

/**
 * The name of the process definition that this process instance belongs to.
 * @member {String} processDefinitionName
 */
HistoricProcessInstanceDto.prototype['processDefinitionName'] = undefined;

/**
 * The key of the process definition that this process instance belongs to.
 * @member {String} processDefinitionKey
 */
HistoricProcessInstanceDto.prototype['processDefinitionKey'] = undefined;

/**
 * The version of the process definition that this process instance belongs to.
 * @member {Number} processDefinitionVersion
 */
HistoricProcessInstanceDto.prototype['processDefinitionVersion'] = undefined;

/**
 * The id of the process definition that this process instance belongs to.
 * @member {String} processDefinitionId
 */
HistoricProcessInstanceDto.prototype['processDefinitionId'] = undefined;

/**
 * The business key of the process instance.
 * @member {String} businessKey
 */
HistoricProcessInstanceDto.prototype['businessKey'] = undefined;

/**
 * The time the instance was started. Default [format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} startTime
 */
HistoricProcessInstanceDto.prototype['startTime'] = undefined;

/**
 * The time the instance ended. Default [format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} endTime
 */
HistoricProcessInstanceDto.prototype['endTime'] = undefined;

/**
 * The time after which the instance should be removed by the History Cleanup job. Default [format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} removalTime
 */
HistoricProcessInstanceDto.prototype['removalTime'] = undefined;

/**
 * The time the instance took to finish (in milliseconds).
 * @member {Number} durationInMillis
 */
HistoricProcessInstanceDto.prototype['durationInMillis'] = undefined;

/**
 * The id of the user who started the process instance.
 * @member {String} startUserId
 */
HistoricProcessInstanceDto.prototype['startUserId'] = undefined;

/**
 * The id of the initial activity that was executed (e.g., a start event).
 * @member {String} startActivityId
 */
HistoricProcessInstanceDto.prototype['startActivityId'] = undefined;

/**
 * The provided delete reason in case the process instance was canceled during execution.
 * @member {String} deleteReason
 */
HistoricProcessInstanceDto.prototype['deleteReason'] = undefined;

/**
 * The tenant id of the process instance.
 * @member {String} tenantId
 */
HistoricProcessInstanceDto.prototype['tenantId'] = undefined;

/**
 * Last state of the process instance, possible values are:  `ACTIVE` - running process instance  `SUSPENDED` - suspended process instances  `COMPLETED` - completed through normal end event  `EXTERNALLY_TERMINATED` - terminated externally, for instance through REST API  `INTERNALLY_TERMINATED` - terminated internally, for instance by terminating boundary event
 * @member {module:model/HistoricProcessInstanceDto.StateEnum} state
 */
HistoricProcessInstanceDto.prototype['state'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
HistoricProcessInstanceDto['StateEnum'] = {

    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",

    /**
     * value: "SUSPENDED"
     * @const
     */
    "SUSPENDED": "SUSPENDED",

    /**
     * value: "COMPLETED"
     * @const
     */
    "COMPLETED": "COMPLETED",

    /**
     * value: "EXTERNALLY_TERMINATED"
     * @const
     */
    "EXTERNALLY_TERMINATED": "EXTERNALLY_TERMINATED",

    /**
     * value: "INTERNALLY_TERMINATED"
     * @const
     */
    "INTERNALLY_TERMINATED": "INTERNALLY_TERMINATED"
};



export default HistoricProcessInstanceDto;

