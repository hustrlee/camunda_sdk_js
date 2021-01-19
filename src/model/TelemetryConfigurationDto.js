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
 * The TelemetryConfigurationDto model module.
 * @module model/TelemetryConfigurationDto
 * @version 7.14.0
 */
class TelemetryConfigurationDto {
    /**
     * Constructs a new <code>TelemetryConfigurationDto</code>.
     * @alias module:model/TelemetryConfigurationDto
     */
    constructor() { 
        
        TelemetryConfigurationDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TelemetryConfigurationDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TelemetryConfigurationDto} obj Optional instance to populate.
     * @return {module:model/TelemetryConfigurationDto} The populated <code>TelemetryConfigurationDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TelemetryConfigurationDto();

            if (data.hasOwnProperty('enableTelemetry')) {
                obj['enableTelemetry'] = ApiClient.convertToType(data['enableTelemetry'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Specifies if the telemetry data should be sent or not.
 * @member {Boolean} enableTelemetry
 */
TelemetryConfigurationDto.prototype['enableTelemetry'] = undefined;






export default TelemetryConfigurationDto;

