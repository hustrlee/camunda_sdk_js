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
 * The CompleteTaskDto model module.
 * @module model/CompleteTaskDto
 * @version 7.14.0
 */
class CompleteTaskDto {
    /**
     * Constructs a new <code>CompleteTaskDto</code>.
     * @alias module:model/CompleteTaskDto
     */
    constructor() { 
        
        CompleteTaskDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompleteTaskDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompleteTaskDto} obj Optional instance to populate.
     * @return {module:model/CompleteTaskDto} The populated <code>CompleteTaskDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompleteTaskDto();

            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], {'String': VariableValueDto});
            }
            if (data.hasOwnProperty('withVariablesInReturn')) {
                obj['withVariablesInReturn'] = ApiClient.convertToType(data['withVariablesInReturn'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * A JSON object containing variable key-value pairs.
 * @member {Object.<String, module:model/VariableValueDto>} variables
 */
CompleteTaskDto.prototype['variables'] = undefined;

/**
 * Indicates whether the response should contain the process variables or not. The default is `false` with a response code of `204`. If set to `true` the response contains the process variables and has a response code of `200`. If the task is not associated with a process instance (e.g. if it's part of a case instance) no variables will be returned.
 * @member {Boolean} withVariablesInReturn
 * @default false
 */
CompleteTaskDto.prototype['withVariablesInReturn'] = false;






export default CompleteTaskDto;

