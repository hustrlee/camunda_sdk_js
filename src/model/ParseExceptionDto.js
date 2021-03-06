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
import ExceptionDto from './ExceptionDto';
import ParseExceptionDtoAllOf from './ParseExceptionDtoAllOf';
import ResourceReportDto from './ResourceReportDto';

/**
 * The ParseExceptionDto model module.
 * @module model/ParseExceptionDto
 * @version 7.14.0
 */
class ParseExceptionDto {
    /**
     * Constructs a new <code>ParseExceptionDto</code>.
     * @alias module:model/ParseExceptionDto
     * @implements module:model/ParseExceptionDtoAllOf
     * @implements module:model/ExceptionDto
     */
    constructor() { 
        ParseExceptionDtoAllOf.initialize(this);ExceptionDto.initialize(this);
        ParseExceptionDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParseExceptionDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParseExceptionDto} obj Optional instance to populate.
     * @return {module:model/ParseExceptionDto} The populated <code>ParseExceptionDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParseExceptionDto();
            ParseExceptionDtoAllOf.constructFromObject(data, obj);
            ExceptionDto.constructFromObject(data, obj);

            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], {'String': ResourceReportDto});
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A JSON Object containing list of errors and warnings occurred during deployment.
 * @member {Object.<String, module:model/ResourceReportDto>} details
 */
ParseExceptionDto.prototype['details'] = undefined;

/**
 * An exception class indicating the occurred error.
 * @member {String} type
 */
ParseExceptionDto.prototype['type'] = undefined;

/**
 * A detailed message of the error.
 * @member {String} message
 */
ParseExceptionDto.prototype['message'] = undefined;


// Implement ParseExceptionDtoAllOf interface:
/**
 * A JSON Object containing list of errors and warnings occurred during deployment.
 * @member {Object.<String, module:model/ResourceReportDto>} details
 */
ParseExceptionDtoAllOf.prototype['details'] = undefined;
// Implement ExceptionDto interface:
/**
 * An exception class indicating the occurred error.
 * @member {String} type
 */
ExceptionDto.prototype['type'] = undefined;
/**
 * A detailed message of the error.
 * @member {String} message
 */
ExceptionDto.prototype['message'] = undefined;




export default ParseExceptionDto;

