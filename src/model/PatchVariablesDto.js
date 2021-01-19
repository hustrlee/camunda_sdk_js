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
 * The PatchVariablesDto model module.
 * @module model/PatchVariablesDto
 * @version 7.14.0
 */
class PatchVariablesDto {
    /**
     * Constructs a new <code>PatchVariablesDto</code>.
     * @alias module:model/PatchVariablesDto
     */
    constructor() { 
        
        PatchVariablesDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchVariablesDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchVariablesDto} obj Optional instance to populate.
     * @return {module:model/PatchVariablesDto} The populated <code>PatchVariablesDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchVariablesDto();

            if (data.hasOwnProperty('modifications')) {
                obj['modifications'] = ApiClient.convertToType(data['modifications'], {'String': VariableValueDto});
            }
            if (data.hasOwnProperty('deletions')) {
                obj['deletions'] = ApiClient.convertToType(data['deletions'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A JSON object containing variable key-value pairs.
 * @member {Object.<String, module:model/VariableValueDto>} modifications
 */
PatchVariablesDto.prototype['modifications'] = undefined;

/**
 * An array of String keys of variables to be deleted.
 * @member {Array.<String>} deletions
 */
PatchVariablesDto.prototype['deletions'] = undefined;






export default PatchVariablesDto;

