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

/**
 * The LinkableDto model module.
 * @module model/LinkableDto
 * @version 7.14.0
 */
class LinkableDto {
    /**
     * Constructs a new <code>LinkableDto</code>.
     * @alias module:model/LinkableDto
     */
    constructor() { 
        
        LinkableDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LinkableDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkableDto} obj Optional instance to populate.
     * @return {module:model/LinkableDto} The populated <code>LinkableDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkableDto();

            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [AtomLink]);
            }
        }
        return obj;
    }


}

/**
 * The links associated to this resource, with `method`, `href` and `rel`.
 * @member {Array.<module:model/AtomLink>} links
 */
LinkableDto.prototype['links'] = undefined;






export default LinkableDto;

