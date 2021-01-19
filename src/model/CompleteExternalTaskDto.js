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
 * The CompleteExternalTaskDto model module.
 * @module model/CompleteExternalTaskDto
 * @version 7.14.0
 */
class CompleteExternalTaskDto {
    /**
     * Constructs a new <code>CompleteExternalTaskDto</code>.
     * @alias module:model/CompleteExternalTaskDto
     */
    constructor() { 
        
        CompleteExternalTaskDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompleteExternalTaskDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompleteExternalTaskDto} obj Optional instance to populate.
     * @return {module:model/CompleteExternalTaskDto} The populated <code>CompleteExternalTaskDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompleteExternalTaskDto();

            if (data.hasOwnProperty('workerId')) {
                obj['workerId'] = ApiClient.convertToType(data['workerId'], 'String');
            }
            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], {'String': VariableValueDto});
            }
            if (data.hasOwnProperty('localVariables')) {
                obj['localVariables'] = ApiClient.convertToType(data['localVariables'], {'String': VariableValueDto});
            }
        }
        return obj;
    }


}

/**
 * The id of the worker that completes the task. Must match the id of the worker who has most recently locked the task.
 * @member {String} workerId
 */
CompleteExternalTaskDto.prototype['workerId'] = undefined;

/**
 * A JSON object containing variable key-value pairs. Each key is a variable name and each value a JSON variable value object with the following properties:
 * @member {Object.<String, module:model/VariableValueDto>} variables
 */
CompleteExternalTaskDto.prototype['variables'] = undefined;

/**
 * A JSON object containing local variable key-value pairs. Local variables are set only in the scope of external task. Each key is a variable name and each value a JSON variable value object with the following properties:
 * @member {Object.<String, module:model/VariableValueDto>} localVariables
 */
CompleteExternalTaskDto.prototype['localVariables'] = undefined;






export default CompleteExternalTaskDto;
