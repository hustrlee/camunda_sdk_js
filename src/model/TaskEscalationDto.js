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
 * The TaskEscalationDto model module.
 * @module model/TaskEscalationDto
 * @version 7.14.0
 */
class TaskEscalationDto {
    /**
     * Constructs a new <code>TaskEscalationDto</code>.
     * @alias module:model/TaskEscalationDto
     */
    constructor() { 
        
        TaskEscalationDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskEscalationDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskEscalationDto} obj Optional instance to populate.
     * @return {module:model/TaskEscalationDto} The populated <code>TaskEscalationDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskEscalationDto();

            if (data.hasOwnProperty('escalationCode')) {
                obj['escalationCode'] = ApiClient.convertToType(data['escalationCode'], 'String');
            }
            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], {'String': VariableValueDto});
            }
        }
        return obj;
    }


}

/**
 * An escalation code that indicates the predefined escalation. It is used to identify the BPMN escalation handler.
 * @member {String} escalationCode
 */
TaskEscalationDto.prototype['escalationCode'] = undefined;

/**
 * A JSON object containing variable key-value pairs.
 * @member {Object.<String, module:model/VariableValueDto>} variables
 */
TaskEscalationDto.prototype['variables'] = undefined;






export default TaskEscalationDto;

