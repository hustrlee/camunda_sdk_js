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
import ExecutionDto from './ExecutionDto';
import ProcessInstanceDto from './ProcessInstanceDto';
import VariableValueDto from './VariableValueDto';

/**
 * The MessageCorrelationResultWithVariableDto model module.
 * @module model/MessageCorrelationResultWithVariableDto
 * @version 7.14.0
 */
class MessageCorrelationResultWithVariableDto {
    /**
     * Constructs a new <code>MessageCorrelationResultWithVariableDto</code>.
     * The &#x60;processInstance&#x60; property only has a value if the resultType is set to &#x60;ProcessDefinition&#x60;. The processInstance with the properties as described in the [get single instance](https://docs.camunda.org/manual/7.14/reference/rest/process-instance/get/) method.  The &#x60;execution&#x60; property only has a value if the resultType is set to &#x60;Execution&#x60;. The execution with the properties as described in the [get single execution](https://docs.camunda.org/manual/7.14/reference/rest/execution/get/) method.
     * @alias module:model/MessageCorrelationResultWithVariableDto
     */
    constructor() { 
        
        MessageCorrelationResultWithVariableDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessageCorrelationResultWithVariableDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageCorrelationResultWithVariableDto} obj Optional instance to populate.
     * @return {module:model/MessageCorrelationResultWithVariableDto} The populated <code>MessageCorrelationResultWithVariableDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageCorrelationResultWithVariableDto();

            if (data.hasOwnProperty('resultType')) {
                obj['resultType'] = ApiClient.convertToType(data['resultType'], 'String');
            }
            if (data.hasOwnProperty('processInstance')) {
                obj['processInstance'] = ProcessInstanceDto.constructFromObject(data['processInstance']);
            }
            if (data.hasOwnProperty('execution')) {
                obj['execution'] = ExecutionDto.constructFromObject(data['execution']);
            }
            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], {'String': VariableValueDto});
            }
        }
        return obj;
    }


}

/**
 * Indicates if the message was correlated to a message start event or an  intermediate message catching event. In the first case, the resultType is  `ProcessDefinition` and otherwise `Execution`.
 * @member {module:model/MessageCorrelationResultWithVariableDto.ResultTypeEnum} resultType
 */
MessageCorrelationResultWithVariableDto.prototype['resultType'] = undefined;

/**
 * @member {module:model/ProcessInstanceDto} processInstance
 */
MessageCorrelationResultWithVariableDto.prototype['processInstance'] = undefined;

/**
 * @member {module:model/ExecutionDto} execution
 */
MessageCorrelationResultWithVariableDto.prototype['execution'] = undefined;

/**
 * This property is returned if the `variablesInResultEnabled` is set to `true`. Contains a list of the process variables. 
 * @member {Object.<String, module:model/VariableValueDto>} variables
 */
MessageCorrelationResultWithVariableDto.prototype['variables'] = undefined;





/**
 * Allowed values for the <code>resultType</code> property.
 * @enum {String}
 * @readonly
 */
MessageCorrelationResultWithVariableDto['ResultTypeEnum'] = {

    /**
     * value: "Execution"
     * @const
     */
    "Execution": "Execution",

    /**
     * value: "ProcessDefinition"
     * @const
     */
    "ProcessDefinition": "ProcessDefinition"
};



export default MessageCorrelationResultWithVariableDto;

