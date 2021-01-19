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
import EventSubscriptionQueryDtoSorting from './EventSubscriptionQueryDtoSorting';

/**
 * The EventSubscriptionQueryDto model module.
 * @module model/EventSubscriptionQueryDto
 * @version 7.14.0
 */
class EventSubscriptionQueryDto {
    /**
     * Constructs a new <code>EventSubscriptionQueryDto</code>.
     * A event subscription query which retrieves a list of event subscriptions
     * @alias module:model/EventSubscriptionQueryDto
     */
    constructor() { 
        
        EventSubscriptionQueryDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventSubscriptionQueryDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventSubscriptionQueryDto} obj Optional instance to populate.
     * @return {module:model/EventSubscriptionQueryDto} The populated <code>EventSubscriptionQueryDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventSubscriptionQueryDto();

            if (data.hasOwnProperty('eventSubscriptionId')) {
                obj['eventSubscriptionId'] = ApiClient.convertToType(data['eventSubscriptionId'], 'String');
            }
            if (data.hasOwnProperty('eventName')) {
                obj['eventName'] = ApiClient.convertToType(data['eventName'], 'String');
            }
            if (data.hasOwnProperty('eventType')) {
                obj['eventType'] = ApiClient.convertToType(data['eventType'], 'String');
            }
            if (data.hasOwnProperty('executionId')) {
                obj['executionId'] = ApiClient.convertToType(data['executionId'], 'String');
            }
            if (data.hasOwnProperty('processInstanceId')) {
                obj['processInstanceId'] = ApiClient.convertToType(data['processInstanceId'], 'String');
            }
            if (data.hasOwnProperty('activityId')) {
                obj['activityId'] = ApiClient.convertToType(data['activityId'], 'String');
            }
            if (data.hasOwnProperty('tenantIdIn')) {
                obj['tenantIdIn'] = ApiClient.convertToType(data['tenantIdIn'], ['String']);
            }
            if (data.hasOwnProperty('withoutTenantId')) {
                obj['withoutTenantId'] = ApiClient.convertToType(data['withoutTenantId'], 'Boolean');
            }
            if (data.hasOwnProperty('includeEventSubscriptionsWithoutTenantId')) {
                obj['includeEventSubscriptionsWithoutTenantId'] = ApiClient.convertToType(data['includeEventSubscriptionsWithoutTenantId'], 'Boolean');
            }
            if (data.hasOwnProperty('sorting')) {
                obj['sorting'] = ApiClient.convertToType(data['sorting'], [EventSubscriptionQueryDtoSorting]);
            }
        }
        return obj;
    }


}

/**
 * The id of the event subscription.
 * @member {String} eventSubscriptionId
 */
EventSubscriptionQueryDto.prototype['eventSubscriptionId'] = undefined;

/**
 * The name of the event this subscription belongs to as defined in the process model.
 * @member {String} eventName
 */
EventSubscriptionQueryDto.prototype['eventName'] = undefined;

/**
 * The type of the event subscription.
 * @member {module:model/EventSubscriptionQueryDto.EventTypeEnum} eventType
 */
EventSubscriptionQueryDto.prototype['eventType'] = undefined;

/**
 * The execution that is subscribed on the referenced event.
 * @member {String} executionId
 */
EventSubscriptionQueryDto.prototype['executionId'] = undefined;

/**
 * The process instance this subscription belongs to.
 * @member {String} processInstanceId
 */
EventSubscriptionQueryDto.prototype['processInstanceId'] = undefined;

/**
 * The identifier of the activity that this event subscription belongs to. This could for example be the id of a receive task.
 * @member {String} activityId
 */
EventSubscriptionQueryDto.prototype['activityId'] = undefined;

/**
 * Filter by a comma-separated list of tenant ids. Only select subscriptions that belong to one of the given tenant ids.
 * @member {Array.<String>} tenantIdIn
 */
EventSubscriptionQueryDto.prototype['tenantIdIn'] = undefined;

/**
 * Only select subscriptions which have no tenant id. Value may only be `true`, as `false` is the default behavior.
 * @member {Boolean} withoutTenantId
 */
EventSubscriptionQueryDto.prototype['withoutTenantId'] = undefined;

/**
 * Select event subscriptions which have no tenant id. Can be used in combination with tenantIdIn parameter. Value may only be `true`, as `false` is the default behavior.
 * @member {Boolean} includeEventSubscriptionsWithoutTenantId
 */
EventSubscriptionQueryDto.prototype['includeEventSubscriptionsWithoutTenantId'] = undefined;

/**
 * Apply sorting of the result
 * @member {Array.<module:model/EventSubscriptionQueryDtoSorting>} sorting
 */
EventSubscriptionQueryDto.prototype['sorting'] = undefined;





/**
 * Allowed values for the <code>eventType</code> property.
 * @enum {String}
 * @readonly
 */
EventSubscriptionQueryDto['EventTypeEnum'] = {

    /**
     * value: "message"
     * @const
     */
    "message": "message",

    /**
     * value: "signal"
     * @const
     */
    "signal": "signal",

    /**
     * value: "compensate"
     * @const
     */
    "compensate": "compensate",

    /**
     * value: "conditional"
     * @const
     */
    "conditional": "conditional"
};



export default EventSubscriptionQueryDto;

