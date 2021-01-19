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
import LinkableDto from './LinkableDto';
import ProcessInstanceDtoAllOf from './ProcessInstanceDtoAllOf';

/**
 * The ProcessInstanceDto model module.
 * @module model/ProcessInstanceDto
 * @version 7.14.0
 */
class ProcessInstanceDto {
    /**
     * Constructs a new <code>ProcessInstanceDto</code>.
     * @alias module:model/ProcessInstanceDto
     * @implements module:model/ProcessInstanceDtoAllOf
     * @implements module:model/LinkableDto
     */
    constructor() { 
        ProcessInstanceDtoAllOf.initialize(this);LinkableDto.initialize(this);
        ProcessInstanceDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProcessInstanceDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessInstanceDto} obj Optional instance to populate.
     * @return {module:model/ProcessInstanceDto} The populated <code>ProcessInstanceDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProcessInstanceDto();
            ProcessInstanceDtoAllOf.constructFromObject(data, obj);
            LinkableDto.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('definitionId')) {
                obj['definitionId'] = ApiClient.convertToType(data['definitionId'], 'String');
            }
            if (data.hasOwnProperty('businessKey')) {
                obj['businessKey'] = ApiClient.convertToType(data['businessKey'], 'String');
            }
            if (data.hasOwnProperty('caseInstanceId')) {
                obj['caseInstanceId'] = ApiClient.convertToType(data['caseInstanceId'], 'String');
            }
            if (data.hasOwnProperty('ended')) {
                obj['ended'] = ApiClient.convertToType(data['ended'], 'Boolean');
            }
            if (data.hasOwnProperty('suspended')) {
                obj['suspended'] = ApiClient.convertToType(data['suspended'], 'Boolean');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [AtomLink]);
            }
        }
        return obj;
    }


}

/**
 * The id of the process instance.
 * @member {String} id
 */
ProcessInstanceDto.prototype['id'] = undefined;

/**
 * The id of the process definition that this process instance belongs to.
 * @member {String} definitionId
 */
ProcessInstanceDto.prototype['definitionId'] = undefined;

/**
 * The business key of the process instance.
 * @member {String} businessKey
 */
ProcessInstanceDto.prototype['businessKey'] = undefined;

/**
 * The id of the case instance associated with the process instance.
 * @member {String} caseInstanceId
 */
ProcessInstanceDto.prototype['caseInstanceId'] = undefined;

/**
 * A flag indicating whether the process instance has ended or not. Deprecated: will always be false!
 * @member {Boolean} ended
 */
ProcessInstanceDto.prototype['ended'] = undefined;

/**
 * A flag indicating whether the process instance is suspended or not.
 * @member {Boolean} suspended
 */
ProcessInstanceDto.prototype['suspended'] = undefined;

/**
 * The tenant id of the process instance.
 * @member {String} tenantId
 */
ProcessInstanceDto.prototype['tenantId'] = undefined;

/**
 * The links associated to this resource, with `method`, `href` and `rel`.
 * @member {Array.<module:model/AtomLink>} links
 */
ProcessInstanceDto.prototype['links'] = undefined;


// Implement ProcessInstanceDtoAllOf interface:
/**
 * The id of the process instance.
 * @member {String} id
 */
ProcessInstanceDtoAllOf.prototype['id'] = undefined;
/**
 * The id of the process definition that this process instance belongs to.
 * @member {String} definitionId
 */
ProcessInstanceDtoAllOf.prototype['definitionId'] = undefined;
/**
 * The business key of the process instance.
 * @member {String} businessKey
 */
ProcessInstanceDtoAllOf.prototype['businessKey'] = undefined;
/**
 * The id of the case instance associated with the process instance.
 * @member {String} caseInstanceId
 */
ProcessInstanceDtoAllOf.prototype['caseInstanceId'] = undefined;
/**
 * A flag indicating whether the process instance has ended or not. Deprecated: will always be false!
 * @member {Boolean} ended
 */
ProcessInstanceDtoAllOf.prototype['ended'] = undefined;
/**
 * A flag indicating whether the process instance is suspended or not.
 * @member {Boolean} suspended
 */
ProcessInstanceDtoAllOf.prototype['suspended'] = undefined;
/**
 * The tenant id of the process instance.
 * @member {String} tenantId
 */
ProcessInstanceDtoAllOf.prototype['tenantId'] = undefined;
// Implement LinkableDto interface:
/**
 * The links associated to this resource, with `method`, `href` and `rel`.
 * @member {Array.<module:model/AtomLink>} links
 */
LinkableDto.prototype['links'] = undefined;




export default ProcessInstanceDto;
