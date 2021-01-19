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
 * The CommentDtoAllOf model module.
 * @module model/CommentDtoAllOf
 * @version 7.14.0
 */
class CommentDtoAllOf {
    /**
     * Constructs a new <code>CommentDtoAllOf</code>.
     * @alias module:model/CommentDtoAllOf
     */
    constructor() { 
        
        CommentDtoAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommentDtoAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommentDtoAllOf} obj Optional instance to populate.
     * @return {module:model/CommentDtoAllOf} The populated <code>CommentDtoAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommentDtoAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('taskId')) {
                obj['taskId'] = ApiClient.convertToType(data['taskId'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Date');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('removalTime')) {
                obj['removalTime'] = ApiClient.convertToType(data['removalTime'], 'Date');
            }
            if (data.hasOwnProperty('rootProcessInstanceId')) {
                obj['rootProcessInstanceId'] = ApiClient.convertToType(data['rootProcessInstanceId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The id of the task comment.
 * @member {String} id
 */
CommentDtoAllOf.prototype['id'] = undefined;

/**
 * The id of the user who created the comment.
 * @member {String} userId
 */
CommentDtoAllOf.prototype['userId'] = undefined;

/**
 * The id of the task to which the comment belongs.
 * @member {String} taskId
 */
CommentDtoAllOf.prototype['taskId'] = undefined;

/**
 * The time when the comment was created. [Default format]($(docsUrl)/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} time
 */
CommentDtoAllOf.prototype['time'] = undefined;

/**
 * The content of the comment.
 * @member {String} message
 */
CommentDtoAllOf.prototype['message'] = undefined;

/**
 * The time after which the comment should be removed by the History Cleanup job. [Default format]($(docsUrl)/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} removalTime
 */
CommentDtoAllOf.prototype['removalTime'] = undefined;

/**
 * The process instance id of the root process instance that initiated the process containing the task.
 * @member {String} rootProcessInstanceId
 */
CommentDtoAllOf.prototype['rootProcessInstanceId'] = undefined;






export default CommentDtoAllOf;

