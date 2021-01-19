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
 * The IdentityLinkDto model module.
 * @module model/IdentityLinkDto
 * @version 7.14.0
 */
class IdentityLinkDto {
    /**
     * Constructs a new <code>IdentityLinkDto</code>.
     * @alias module:model/IdentityLinkDto
     * @param type {String} The type of the identity link. The value of the this property can be user-defined. The Process Engine provides three pre-defined Identity Link `type`s:  * `candidate` * `assignee` - reserved for the task assignee * `owner` - reserved for the task owner  **Note**: When adding or removing an Identity Link, the `type` property must be defined.
     */
    constructor(type) { 
        
        IdentityLinkDto.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>IdentityLinkDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdentityLinkDto} obj Optional instance to populate.
     * @return {module:model/IdentityLinkDto} The populated <code>IdentityLinkDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdentityLinkDto();

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The id of the user participating in this link. Either `userId` or `groupId` is set.
 * @member {String} userId
 */
IdentityLinkDto.prototype['userId'] = undefined;

/**
 * The id of the group participating in this link. Either `groupId` or `userId` is set.
 * @member {String} groupId
 */
IdentityLinkDto.prototype['groupId'] = undefined;

/**
 * The type of the identity link. The value of the this property can be user-defined. The Process Engine provides three pre-defined Identity Link `type`s:  * `candidate` * `assignee` - reserved for the task assignee * `owner` - reserved for the task owner  **Note**: When adding or removing an Identity Link, the `type` property must be defined.
 * @member {String} type
 */
IdentityLinkDto.prototype['type'] = undefined;






export default IdentityLinkDto;

