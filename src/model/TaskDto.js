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
 * The TaskDto model module.
 * @module model/TaskDto
 * @version 7.14.0
 */
class TaskDto {
    /**
     * Constructs a new <code>TaskDto</code>.
     * @alias module:model/TaskDto
     */
    constructor() { 
        
        TaskDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskDto} obj Optional instance to populate.
     * @return {module:model/TaskDto} The populated <code>TaskDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = ApiClient.convertToType(data['assignee'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('due')) {
                obj['due'] = ApiClient.convertToType(data['due'], 'Date');
            }
            if (data.hasOwnProperty('followUp')) {
                obj['followUp'] = ApiClient.convertToType(data['followUp'], 'Date');
            }
            if (data.hasOwnProperty('delegationState')) {
                obj['delegationState'] = ApiClient.convertToType(data['delegationState'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('executionId')) {
                obj['executionId'] = ApiClient.convertToType(data['executionId'], 'String');
            }
            if (data.hasOwnProperty('parentTaskId')) {
                obj['parentTaskId'] = ApiClient.convertToType(data['parentTaskId'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
            if (data.hasOwnProperty('processDefinitionId')) {
                obj['processDefinitionId'] = ApiClient.convertToType(data['processDefinitionId'], 'String');
            }
            if (data.hasOwnProperty('processInstanceId')) {
                obj['processInstanceId'] = ApiClient.convertToType(data['processInstanceId'], 'String');
            }
            if (data.hasOwnProperty('caseExecutionId')) {
                obj['caseExecutionId'] = ApiClient.convertToType(data['caseExecutionId'], 'String');
            }
            if (data.hasOwnProperty('caseDefinitionId')) {
                obj['caseDefinitionId'] = ApiClient.convertToType(data['caseDefinitionId'], 'String');
            }
            if (data.hasOwnProperty('caseInstanceId')) {
                obj['caseInstanceId'] = ApiClient.convertToType(data['caseInstanceId'], 'String');
            }
            if (data.hasOwnProperty('taskDefinitionKey')) {
                obj['taskDefinitionKey'] = ApiClient.convertToType(data['taskDefinitionKey'], 'String');
            }
            if (data.hasOwnProperty('suspended')) {
                obj['suspended'] = ApiClient.convertToType(data['suspended'], 'Boolean');
            }
            if (data.hasOwnProperty('formKey')) {
                obj['formKey'] = ApiClient.convertToType(data['formKey'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The task id.
 * @member {String} id
 */
TaskDto.prototype['id'] = undefined;

/**
 * The task name.
 * @member {String} name
 */
TaskDto.prototype['name'] = undefined;

/**
 * The assignee's id.
 * @member {String} assignee
 */
TaskDto.prototype['assignee'] = undefined;

/**
 * The owner's id.
 * @member {String} owner
 */
TaskDto.prototype['owner'] = undefined;

/**
 * The date the task was created on. [Default format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} created
 */
TaskDto.prototype['created'] = undefined;

/**
 * The task's due date. [Default format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} due
 */
TaskDto.prototype['due'] = undefined;

/**
 * The follow-up date for the task. [Default format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} followUp
 */
TaskDto.prototype['followUp'] = undefined;

/**
 * The task's delegation state. Possible values are `PENDING` and `RESOLVED`.
 * @member {module:model/TaskDto.DelegationStateEnum} delegationState
 */
TaskDto.prototype['delegationState'] = undefined;

/**
 * The task's description.
 * @member {String} description
 */
TaskDto.prototype['description'] = undefined;

/**
 * The id of the execution the task belongs to.
 * @member {String} executionId
 */
TaskDto.prototype['executionId'] = undefined;

/**
 * The id the parent task, if this task is a subtask.
 * @member {String} parentTaskId
 */
TaskDto.prototype['parentTaskId'] = undefined;

/**
 * The task's priority.
 * @member {Number} priority
 */
TaskDto.prototype['priority'] = undefined;

/**
 * The id of the process definition the task belongs to.
 * @member {String} processDefinitionId
 */
TaskDto.prototype['processDefinitionId'] = undefined;

/**
 * The id of the process instance the task belongs to.
 * @member {String} processInstanceId
 */
TaskDto.prototype['processInstanceId'] = undefined;

/**
 * The id of the case execution the task belongs to.
 * @member {String} caseExecutionId
 */
TaskDto.prototype['caseExecutionId'] = undefined;

/**
 * The id of the case definition the task belongs to.
 * @member {String} caseDefinitionId
 */
TaskDto.prototype['caseDefinitionId'] = undefined;

/**
 * The id of the case instance the task belongs to.
 * @member {String} caseInstanceId
 */
TaskDto.prototype['caseInstanceId'] = undefined;

/**
 * The task's key.
 * @member {String} taskDefinitionKey
 */
TaskDto.prototype['taskDefinitionKey'] = undefined;

/**
 * Whether the task belongs to a process instance that is suspended.
 * @member {Boolean} suspended
 */
TaskDto.prototype['suspended'] = undefined;

/**
 * If not `null`, the form key for the task.
 * @member {String} formKey
 */
TaskDto.prototype['formKey'] = undefined;

/**
 * If not `null`, the tenant id of the task.
 * @member {String} tenantId
 */
TaskDto.prototype['tenantId'] = undefined;





/**
 * Allowed values for the <code>delegationState</code> property.
 * @enum {String}
 * @readonly
 */
TaskDto['DelegationStateEnum'] = {

    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",

    /**
     * value: "RESOLVED"
     * @const
     */
    "RESOLVED": "RESOLVED"
};



export default TaskDto;

