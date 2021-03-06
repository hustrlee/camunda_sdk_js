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
import VariableValueDto from './VariableValueDto';

/**
 * The TaskBpmnErrorDto model module.
 * @module model/TaskBpmnErrorDto
 * @version 7.14.0
 */
class TaskBpmnErrorDto {
    /**
     * Constructs a new <code>TaskBpmnErrorDto</code>.
     * @alias module:model/TaskBpmnErrorDto
     */
    constructor() { 
        
        TaskBpmnErrorDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskBpmnErrorDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskBpmnErrorDto} obj Optional instance to populate.
     * @return {module:model/TaskBpmnErrorDto} The populated <code>TaskBpmnErrorDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskBpmnErrorDto();

            if (data.hasOwnProperty('errorCode')) {
                obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'String');
            }
            if (data.hasOwnProperty('errorMessage')) {
                obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
            }
            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], {'String': VariableValueDto});
            }
        }
        return obj;
    }


}

/**
 * An error code that indicates the predefined error. It is used to identify the BPMN error handler.
 * @member {String} errorCode
 */
TaskBpmnErrorDto.prototype['errorCode'] = undefined;

/**
 * An error message that describes the error.
 * @member {String} errorMessage
 */
TaskBpmnErrorDto.prototype['errorMessage'] = undefined;

/**
 * A JSON object containing variable key-value pairs.
 * @member {Object.<String, module:model/VariableValueDto>} variables
 */
TaskBpmnErrorDto.prototype['variables'] = undefined;






export default TaskBpmnErrorDto;

