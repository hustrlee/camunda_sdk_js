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
import AtomLink from './AtomLink';
import DeploymentDtoAllOf from './DeploymentDtoAllOf';
import LinkableDto from './LinkableDto';

/**
 * The DeploymentDto model module.
 * @module model/DeploymentDto
 * @version 7.14.0
 */
class DeploymentDto {
    /**
     * Constructs a new <code>DeploymentDto</code>.
     * @alias module:model/DeploymentDto
     * @implements module:model/DeploymentDtoAllOf
     * @implements module:model/LinkableDto
     */
    constructor() { 
        DeploymentDtoAllOf.initialize(this);LinkableDto.initialize(this);
        DeploymentDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeploymentDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentDto} obj Optional instance to populate.
     * @return {module:model/DeploymentDto} The populated <code>DeploymentDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentDto();
            DeploymentDtoAllOf.constructFromObject(data, obj);
            LinkableDto.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('deploymentTime')) {
                obj['deploymentTime'] = ApiClient.convertToType(data['deploymentTime'], 'Date');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [AtomLink]);
            }
        }
        return obj;
    }


}

/**
 * The id of the deployment.
 * @member {String} id
 */
DeploymentDto.prototype['id'] = undefined;

/**
 * The tenant id of the deployment.
 * @member {String} tenantId
 */
DeploymentDto.prototype['tenantId'] = undefined;

/**
 * The time when the deployment was created.
 * @member {Date} deploymentTime
 */
DeploymentDto.prototype['deploymentTime'] = undefined;

/**
 * The source of the deployment.
 * @member {String} source
 */
DeploymentDto.prototype['source'] = undefined;

/**
 * The name of the deployment.
 * @member {String} name
 */
DeploymentDto.prototype['name'] = undefined;

/**
 * The links associated to this resource, with `method`, `href` and `rel`.
 * @member {Array.<module:model/AtomLink>} links
 */
DeploymentDto.prototype['links'] = undefined;


// Implement DeploymentDtoAllOf interface:
/**
 * The id of the deployment.
 * @member {String} id
 */
DeploymentDtoAllOf.prototype['id'] = undefined;
/**
 * The tenant id of the deployment.
 * @member {String} tenantId
 */
DeploymentDtoAllOf.prototype['tenantId'] = undefined;
/**
 * The time when the deployment was created.
 * @member {Date} deploymentTime
 */
DeploymentDtoAllOf.prototype['deploymentTime'] = undefined;
/**
 * The source of the deployment.
 * @member {String} source
 */
DeploymentDtoAllOf.prototype['source'] = undefined;
/**
 * The name of the deployment.
 * @member {String} name
 */
DeploymentDtoAllOf.prototype['name'] = undefined;
// Implement LinkableDto interface:
/**
 * The links associated to this resource, with `method`, `href` and `rel`.
 * @member {Array.<module:model/AtomLink>} links
 */
LinkableDto.prototype['links'] = undefined;




export default DeploymentDto;

