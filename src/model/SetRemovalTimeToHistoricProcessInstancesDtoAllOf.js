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
import HistoricProcessInstanceQueryDto from './HistoricProcessInstanceQueryDto';

/**
 * The SetRemovalTimeToHistoricProcessInstancesDtoAllOf model module.
 * @module model/SetRemovalTimeToHistoricProcessInstancesDtoAllOf
 * @version 7.14.0
 */
class SetRemovalTimeToHistoricProcessInstancesDtoAllOf {
    /**
     * Constructs a new <code>SetRemovalTimeToHistoricProcessInstancesDtoAllOf</code>.
     * @alias module:model/SetRemovalTimeToHistoricProcessInstancesDtoAllOf
     */
    constructor() { 
        
        SetRemovalTimeToHistoricProcessInstancesDtoAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SetRemovalTimeToHistoricProcessInstancesDtoAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetRemovalTimeToHistoricProcessInstancesDtoAllOf} obj Optional instance to populate.
     * @return {module:model/SetRemovalTimeToHistoricProcessInstancesDtoAllOf} The populated <code>SetRemovalTimeToHistoricProcessInstancesDtoAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetRemovalTimeToHistoricProcessInstancesDtoAllOf();

            if (data.hasOwnProperty('historicProcessInstanceIds')) {
                obj['historicProcessInstanceIds'] = ApiClient.convertToType(data['historicProcessInstanceIds'], ['String']);
            }
            if (data.hasOwnProperty('historicProcessInstanceQuery')) {
                obj['historicProcessInstanceQuery'] = HistoricProcessInstanceQueryDto.constructFromObject(data['historicProcessInstanceQuery']);
            }
            if (data.hasOwnProperty('hierarchical')) {
                obj['hierarchical'] = ApiClient.convertToType(data['hierarchical'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The id of the process instance.
 * @member {Array.<String>} historicProcessInstanceIds
 */
SetRemovalTimeToHistoricProcessInstancesDtoAllOf.prototype['historicProcessInstanceIds'] = undefined;

/**
 * @member {module:model/HistoricProcessInstanceQueryDto} historicProcessInstanceQuery
 */
SetRemovalTimeToHistoricProcessInstancesDtoAllOf.prototype['historicProcessInstanceQuery'] = undefined;

/**
 * Sets the removal time to all historic process instances in the hierarchy. Value may only be `true`, as `false` is the default behavior.
 * @member {Boolean} hierarchical
 */
SetRemovalTimeToHistoricProcessInstancesDtoAllOf.prototype['hierarchical'] = undefined;






export default SetRemovalTimeToHistoricProcessInstancesDtoAllOf;
