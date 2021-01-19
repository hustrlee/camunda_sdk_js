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
 * The IncidentStatisticsResultDto model module.
 * @module model/IncidentStatisticsResultDto
 * @version 7.14.0
 */
class IncidentStatisticsResultDto {
    /**
     * Constructs a new <code>IncidentStatisticsResultDto</code>.
     * @alias module:model/IncidentStatisticsResultDto
     */
    constructor() { 
        
        IncidentStatisticsResultDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IncidentStatisticsResultDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IncidentStatisticsResultDto} obj Optional instance to populate.
     * @return {module:model/IncidentStatisticsResultDto} The populated <code>IncidentStatisticsResultDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IncidentStatisticsResultDto();

            if (data.hasOwnProperty('incidentType')) {
                obj['incidentType'] = ApiClient.convertToType(data['incidentType'], 'String');
            }
            if (data.hasOwnProperty('incidentCount')) {
                obj['incidentCount'] = ApiClient.convertToType(data['incidentCount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The type of the incident the number of incidents is aggregated for. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
 * @member {String} incidentType
 */
IncidentStatisticsResultDto.prototype['incidentType'] = undefined;

/**
 * The total number of incidents for the corresponding incident type.
 * @member {Number} incidentCount
 */
IncidentStatisticsResultDto.prototype['incidentCount'] = undefined;






export default IncidentStatisticsResultDto;
