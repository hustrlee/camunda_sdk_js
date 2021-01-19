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
 * The RedeploymentDto model module.
 * @module model/RedeploymentDto
 * @version 7.14.0
 */
class RedeploymentDto {
    /**
     * Constructs a new <code>RedeploymentDto</code>.
     * A JSON object with the following properties:
     * @alias module:model/RedeploymentDto
     */
    constructor() { 
        
        RedeploymentDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RedeploymentDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RedeploymentDto} obj Optional instance to populate.
     * @return {module:model/RedeploymentDto} The populated <code>RedeploymentDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RedeploymentDto();

            if (data.hasOwnProperty('resourceIds')) {
                obj['resourceIds'] = ApiClient.convertToType(data['resourceIds'], ['String']);
            }
            if (data.hasOwnProperty('resourceNames')) {
                obj['resourceNames'] = ApiClient.convertToType(data['resourceNames'], ['String']);
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A list of deployment resource ids to re-deploy.
 * @member {Array.<String>} resourceIds
 */
RedeploymentDto.prototype['resourceIds'] = undefined;

/**
 * A list of deployment resource names to re-deploy.
 * @member {Array.<String>} resourceNames
 */
RedeploymentDto.prototype['resourceNames'] = undefined;

/**
 * Sets the source of the deployment.
 * @member {String} source
 */
RedeploymentDto.prototype['source'] = undefined;






export default RedeploymentDto;

