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
import CaseDefinitionDto from './CaseDefinitionDto';
import DecisionDefinitionDto from './DecisionDefinitionDto';
import DecisionRequirementsDefinitionDto from './DecisionRequirementsDefinitionDto';
import DeploymentDto from './DeploymentDto';
import DeploymentWithDefinitionsDtoAllOf from './DeploymentWithDefinitionsDtoAllOf';
import ProcessDefinitionDto from './ProcessDefinitionDto';

/**
 * The DeploymentWithDefinitionsDto model module.
 * @module model/DeploymentWithDefinitionsDto
 * @version 7.14.0
 */
class DeploymentWithDefinitionsDto {
    /**
     * Constructs a new <code>DeploymentWithDefinitionsDto</code>.
     * @alias module:model/DeploymentWithDefinitionsDto
     * @implements module:model/DeploymentWithDefinitionsDtoAllOf
     * @implements module:model/DeploymentDto
     */
    constructor() { 
        DeploymentWithDefinitionsDtoAllOf.initialize(this);DeploymentDto.initialize(this);
        DeploymentWithDefinitionsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeploymentWithDefinitionsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentWithDefinitionsDto} obj Optional instance to populate.
     * @return {module:model/DeploymentWithDefinitionsDto} The populated <code>DeploymentWithDefinitionsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentWithDefinitionsDto();
            DeploymentWithDefinitionsDtoAllOf.constructFromObject(data, obj);
            DeploymentDto.constructFromObject(data, obj);

            if (data.hasOwnProperty('deployedProcessDefinitions')) {
                obj['deployedProcessDefinitions'] = ApiClient.convertToType(data['deployedProcessDefinitions'], {'String': ProcessDefinitionDto});
            }
            if (data.hasOwnProperty('deployedDecisionDefinitions')) {
                obj['deployedDecisionDefinitions'] = ApiClient.convertToType(data['deployedDecisionDefinitions'], {'String': DecisionDefinitionDto});
            }
            if (data.hasOwnProperty('deployedDecisionRequirementsDefinitions')) {
                obj['deployedDecisionRequirementsDefinitions'] = ApiClient.convertToType(data['deployedDecisionRequirementsDefinitions'], {'String': DecisionRequirementsDefinitionDto});
            }
            if (data.hasOwnProperty('deployedCaseDefinitions')) {
                obj['deployedCaseDefinitions'] = ApiClient.convertToType(data['deployedCaseDefinitions'], {'String': CaseDefinitionDto});
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('deploymentTime')) {
                obj['deploymentTime'] = ApiClient.convertToType(data['deploymentTime'], 'Date');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [AtomLink]);
            }
        }
        return obj;
    }


}

/**
 * A JSON Object containing a property for each of the process definitions, which are successfully deployed with that deployment. The key is the process definition id, the value is a JSON Object corresponding to the process definition.
 * @member {Object.<String, module:model/ProcessDefinitionDto>} deployedProcessDefinitions
 */
DeploymentWithDefinitionsDto.prototype['deployedProcessDefinitions'] = undefined;

/**
 * A JSON Object containing a property for each of the decision definitions, which are successfully deployed with that deployment. The key is the decision definition id, the value is a JSON Object corresponding to the decision definition.
 * @member {Object.<String, module:model/DecisionDefinitionDto>} deployedDecisionDefinitions
 */
DeploymentWithDefinitionsDto.prototype['deployedDecisionDefinitions'] = undefined;

/**
 * A JSON Object containing a property for each of the decision requirements definitions, which are successfully deployed with that deployment. The key is the decision requirements definition id, the value is a JSON Object corresponding to the decision requirements definition.
 * @member {Object.<String, module:model/DecisionRequirementsDefinitionDto>} deployedDecisionRequirementsDefinitions
 */
DeploymentWithDefinitionsDto.prototype['deployedDecisionRequirementsDefinitions'] = undefined;

/**
 * A JSON Object containing a property for each of the case definitions, which are successfully deployed with that deployment. The key is the case definition id, the value is a JSON Object corresponding to the case definition.
 * @member {Object.<String, module:model/CaseDefinitionDto>} deployedCaseDefinitions
 */
DeploymentWithDefinitionsDto.prototype['deployedCaseDefinitions'] = undefined;

/**
 * The id of the deployment.
 * @member {String} id
 */
DeploymentWithDefinitionsDto.prototype['id'] = undefined;

/**
 * The tenant id of the deployment.
 * @member {String} tenantId
 */
DeploymentWithDefinitionsDto.prototype['tenantId'] = undefined;

/**
 * The time when the deployment was created.
 * @member {Date} deploymentTime
 */
DeploymentWithDefinitionsDto.prototype['deploymentTime'] = undefined;

/**
 * The source of the deployment.
 * @member {String} source
 */
DeploymentWithDefinitionsDto.prototype['source'] = undefined;

/**
 * The name of the deployment.
 * @member {String} name
 */
DeploymentWithDefinitionsDto.prototype['name'] = undefined;

/**
 * The links associated to this resource, with `method`, `href` and `rel`.
 * @member {Array.<module:model/AtomLink>} links
 */
DeploymentWithDefinitionsDto.prototype['links'] = undefined;


// Implement DeploymentWithDefinitionsDtoAllOf interface:
/**
 * A JSON Object containing a property for each of the process definitions, which are successfully deployed with that deployment. The key is the process definition id, the value is a JSON Object corresponding to the process definition.
 * @member {Object.<String, module:model/ProcessDefinitionDto>} deployedProcessDefinitions
 */
DeploymentWithDefinitionsDtoAllOf.prototype['deployedProcessDefinitions'] = undefined;
/**
 * A JSON Object containing a property for each of the decision definitions, which are successfully deployed with that deployment. The key is the decision definition id, the value is a JSON Object corresponding to the decision definition.
 * @member {Object.<String, module:model/DecisionDefinitionDto>} deployedDecisionDefinitions
 */
DeploymentWithDefinitionsDtoAllOf.prototype['deployedDecisionDefinitions'] = undefined;
/**
 * A JSON Object containing a property for each of the decision requirements definitions, which are successfully deployed with that deployment. The key is the decision requirements definition id, the value is a JSON Object corresponding to the decision requirements definition.
 * @member {Object.<String, module:model/DecisionRequirementsDefinitionDto>} deployedDecisionRequirementsDefinitions
 */
DeploymentWithDefinitionsDtoAllOf.prototype['deployedDecisionRequirementsDefinitions'] = undefined;
/**
 * A JSON Object containing a property for each of the case definitions, which are successfully deployed with that deployment. The key is the case definition id, the value is a JSON Object corresponding to the case definition.
 * @member {Object.<String, module:model/CaseDefinitionDto>} deployedCaseDefinitions
 */
DeploymentWithDefinitionsDtoAllOf.prototype['deployedCaseDefinitions'] = undefined;
// Implement DeploymentDto interface:
/**
 * The id of the deployment.
 * @member {String} id
 */
DeploymentDto.prototype['id'] = undefined;
/**
 * The tenant id of the deployment.
 * @member {String} tenantId
 */
DeploymentDto.prototype['tenantId'] = undefined;
/**
 * The time when the deployment was created.
 * @member {Date} deploymentTime
 */
DeploymentDto.prototype['deploymentTime'] = undefined;
/**
 * The source of the deployment.
 * @member {String} source
 */
DeploymentDto.prototype['source'] = undefined;
/**
 * The name of the deployment.
 * @member {String} name
 */
DeploymentDto.prototype['name'] = undefined;
/**
 * The links associated to this resource, with `method`, `href` and `rel`.
 * @member {Array.<module:model/AtomLink>} links
 */
DeploymentDto.prototype['links'] = undefined;




export default DeploymentWithDefinitionsDto;

