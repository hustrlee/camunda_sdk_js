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
 * The AbstractSetRemovalTimeDto model module.
 * @module model/AbstractSetRemovalTimeDto
 * @version 7.14.0
 */
class AbstractSetRemovalTimeDto {
    /**
     * Constructs a new <code>AbstractSetRemovalTimeDto</code>.
     * @alias module:model/AbstractSetRemovalTimeDto
     */
    constructor() { 
        
        AbstractSetRemovalTimeDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AbstractSetRemovalTimeDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AbstractSetRemovalTimeDto} obj Optional instance to populate.
     * @return {module:model/AbstractSetRemovalTimeDto} The populated <code>AbstractSetRemovalTimeDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AbstractSetRemovalTimeDto();

            if (data.hasOwnProperty('absoluteRemovalTime')) {
                obj['absoluteRemovalTime'] = ApiClient.convertToType(data['absoluteRemovalTime'], 'Date');
            }
            if (data.hasOwnProperty('clearedRemovalTime')) {
                obj['clearedRemovalTime'] = ApiClient.convertToType(data['clearedRemovalTime'], 'Boolean');
            }
            if (data.hasOwnProperty('calculatedRemovalTime')) {
                obj['calculatedRemovalTime'] = ApiClient.convertToType(data['calculatedRemovalTime'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The date for which the instances shall be removed. Value may not be `null`.  **Note:** Cannot be set in conjunction with `clearedRemovalTime` or `calculatedRemovalTime`.
 * @member {Date} absoluteRemovalTime
 */
AbstractSetRemovalTimeDto.prototype['absoluteRemovalTime'] = undefined;

/**
 * Sets the removal time to `null`. Value may only be `true`, as `false` is the default behavior.  **Note:** Cannot be set in conjunction with `absoluteRemovalTime` or `calculatedRemovalTime`.
 * @member {Boolean} clearedRemovalTime
 */
AbstractSetRemovalTimeDto.prototype['clearedRemovalTime'] = undefined;

/**
 * The removal time is calculated based on the engine's configuration settings. Value may only be `true`, as `false` is the default behavior.  **Note:** Cannot be set in conjunction with `absoluteRemovalTime` or `clearedRemovalTime`.
 * @member {Boolean} calculatedRemovalTime
 */
AbstractSetRemovalTimeDto.prototype['calculatedRemovalTime'] = undefined;






export default AbstractSetRemovalTimeDto;

