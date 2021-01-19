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
 * The AtomLink model module.
 * @module model/AtomLink
 * @version 7.14.0
 */
class AtomLink {
    /**
     * Constructs a new <code>AtomLink</code>.
     * @alias module:model/AtomLink
     */
    constructor() { 
        
        AtomLink.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AtomLink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AtomLink} obj Optional instance to populate.
     * @return {module:model/AtomLink} The populated <code>AtomLink</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AtomLink();

            if (data.hasOwnProperty('rel')) {
                obj['rel'] = ApiClient.convertToType(data['rel'], 'String');
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The relation of the link to the object that belongs to.
 * @member {String} rel
 */
AtomLink.prototype['rel'] = undefined;

/**
 * The url of the link.
 * @member {String} href
 */
AtomLink.prototype['href'] = undefined;

/**
 * The http method.
 * @member {String} method
 */
AtomLink.prototype['method'] = undefined;






export default AtomLink;

