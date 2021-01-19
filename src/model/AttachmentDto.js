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
import AttachmentDtoAllOf from './AttachmentDtoAllOf';
import LinkableDto from './LinkableDto';

/**
 * The AttachmentDto model module.
 * @module model/AttachmentDto
 * @version 7.14.0
 */
class AttachmentDto {
    /**
     * Constructs a new <code>AttachmentDto</code>.
     * @alias module:model/AttachmentDto
     * @implements module:model/AttachmentDtoAllOf
     * @implements module:model/LinkableDto
     */
    constructor() { 
        AttachmentDtoAllOf.initialize(this);LinkableDto.initialize(this);
        AttachmentDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttachmentDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentDto} obj Optional instance to populate.
     * @return {module:model/AttachmentDto} The populated <code>AttachmentDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttachmentDto();
            AttachmentDtoAllOf.constructFromObject(data, obj);
            LinkableDto.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('taskId')) {
                obj['taskId'] = ApiClient.convertToType(data['taskId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('createTime')) {
                obj['createTime'] = ApiClient.convertToType(data['createTime'], 'Date');
            }
            if (data.hasOwnProperty('removalTime')) {
                obj['removalTime'] = ApiClient.convertToType(data['removalTime'], 'Date');
            }
            if (data.hasOwnProperty('rootProcessInstanceId')) {
                obj['rootProcessInstanceId'] = ApiClient.convertToType(data['rootProcessInstanceId'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [AtomLink]);
            }
        }
        return obj;
    }


}

/**
 * The id of the task attachment.
 * @member {String} id
 */
AttachmentDto.prototype['id'] = undefined;

/**
 * The name of the task attachment.
 * @member {String} name
 */
AttachmentDto.prototype['name'] = undefined;

/**
 * The description of the task attachment.
 * @member {String} description
 */
AttachmentDto.prototype['description'] = undefined;

/**
 * The id of the task to which the attachment belongs.
 * @member {String} taskId
 */
AttachmentDto.prototype['taskId'] = undefined;

/**
 * Indication of the type of content that this attachment refers to. Can be MIME type or any other indication.
 * @member {String} type
 */
AttachmentDto.prototype['type'] = undefined;

/**
 * The url to the remote content of the task attachment.
 * @member {String} url
 */
AttachmentDto.prototype['url'] = undefined;

/**
 * The time the variable was inserted. [Default format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} createTime
 */
AttachmentDto.prototype['createTime'] = undefined;

/**
 * The time after which the attachment should be removed by the History Cleanup job. [Default format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} removalTime
 */
AttachmentDto.prototype['removalTime'] = undefined;

/**
 * The process instance id of the root process instance that initiated the process containing the task.
 * @member {String} rootProcessInstanceId
 */
AttachmentDto.prototype['rootProcessInstanceId'] = undefined;

/**
 * The links associated to this resource, with `method`, `href` and `rel`.
 * @member {Array.<module:model/AtomLink>} links
 */
AttachmentDto.prototype['links'] = undefined;


// Implement AttachmentDtoAllOf interface:
/**
 * The id of the task attachment.
 * @member {String} id
 */
AttachmentDtoAllOf.prototype['id'] = undefined;
/**
 * The name of the task attachment.
 * @member {String} name
 */
AttachmentDtoAllOf.prototype['name'] = undefined;
/**
 * The description of the task attachment.
 * @member {String} description
 */
AttachmentDtoAllOf.prototype['description'] = undefined;
/**
 * The id of the task to which the attachment belongs.
 * @member {String} taskId
 */
AttachmentDtoAllOf.prototype['taskId'] = undefined;
/**
 * Indication of the type of content that this attachment refers to. Can be MIME type or any other indication.
 * @member {String} type
 */
AttachmentDtoAllOf.prototype['type'] = undefined;
/**
 * The url to the remote content of the task attachment.
 * @member {String} url
 */
AttachmentDtoAllOf.prototype['url'] = undefined;
/**
 * The time the variable was inserted. [Default format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} createTime
 */
AttachmentDtoAllOf.prototype['createTime'] = undefined;
/**
 * The time after which the attachment should be removed by the History Cleanup job. [Default format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} removalTime
 */
AttachmentDtoAllOf.prototype['removalTime'] = undefined;
/**
 * The process instance id of the root process instance that initiated the process containing the task.
 * @member {String} rootProcessInstanceId
 */
AttachmentDtoAllOf.prototype['rootProcessInstanceId'] = undefined;
// Implement LinkableDto interface:
/**
 * The links associated to this resource, with `method`, `href` and `rel`.
 * @member {Array.<module:model/AtomLink>} links
 */
LinkableDto.prototype['links'] = undefined;




export default AttachmentDto;

