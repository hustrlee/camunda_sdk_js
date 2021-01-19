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
 * The BatchDto model module.
 * @module model/BatchDto
 * @version 7.14.0
 */
class BatchDto {
    /**
     * Constructs a new <code>BatchDto</code>.
     * @alias module:model/BatchDto
     */
    constructor() { 
        
        BatchDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BatchDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchDto} obj Optional instance to populate.
     * @return {module:model/BatchDto} The populated <code>BatchDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('totalJobs')) {
                obj['totalJobs'] = ApiClient.convertToType(data['totalJobs'], 'Number');
            }
            if (data.hasOwnProperty('jobsCreated')) {
                obj['jobsCreated'] = ApiClient.convertToType(data['jobsCreated'], 'Number');
            }
            if (data.hasOwnProperty('batchJobsPerSeed')) {
                obj['batchJobsPerSeed'] = ApiClient.convertToType(data['batchJobsPerSeed'], 'Number');
            }
            if (data.hasOwnProperty('invocationsPerBatchJob')) {
                obj['invocationsPerBatchJob'] = ApiClient.convertToType(data['invocationsPerBatchJob'], 'Number');
            }
            if (data.hasOwnProperty('seedJobDefinitionId')) {
                obj['seedJobDefinitionId'] = ApiClient.convertToType(data['seedJobDefinitionId'], 'String');
            }
            if (data.hasOwnProperty('monitorJobDefinitionId')) {
                obj['monitorJobDefinitionId'] = ApiClient.convertToType(data['monitorJobDefinitionId'], 'String');
            }
            if (data.hasOwnProperty('batchJobDefinitionId')) {
                obj['batchJobDefinitionId'] = ApiClient.convertToType(data['batchJobDefinitionId'], 'String');
            }
            if (data.hasOwnProperty('suspended')) {
                obj['suspended'] = ApiClient.convertToType(data['suspended'], 'Boolean');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('createUserId')) {
                obj['createUserId'] = ApiClient.convertToType(data['createUserId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The id of the batch.
 * @member {String} id
 */
BatchDto.prototype['id'] = undefined;

/**
 * The type of the batch.
 * @member {String} type
 */
BatchDto.prototype['type'] = undefined;

/**
 * The total jobs of a batch is the number of batch execution jobs required to complete the batch.
 * @member {Number} totalJobs
 */
BatchDto.prototype['totalJobs'] = undefined;

/**
 * The number of batch execution jobs already created by the seed job.
 * @member {Number} jobsCreated
 */
BatchDto.prototype['jobsCreated'] = undefined;

/**
 * The number of batch execution jobs created per seed job invocation. The batch seed job is invoked until it has created all batch execution jobs required by the batch (see totalJobs property).
 * @member {Number} batchJobsPerSeed
 */
BatchDto.prototype['batchJobsPerSeed'] = undefined;

/**
 * Every batch execution job invokes the command executed by the batch invocationsPerBatchJob times. E.g., for a process instance migration batch this specifies the number of process instances which are migrated per batch execution job.
 * @member {Number} invocationsPerBatchJob
 */
BatchDto.prototype['invocationsPerBatchJob'] = undefined;

/**
 * The job definition id for the seed jobs of this batch.
 * @member {String} seedJobDefinitionId
 */
BatchDto.prototype['seedJobDefinitionId'] = undefined;

/**
 * The job definition id for the monitor jobs of this batch.
 * @member {String} monitorJobDefinitionId
 */
BatchDto.prototype['monitorJobDefinitionId'] = undefined;

/**
 * The job definition id for the batch execution jobs of this batch.
 * @member {String} batchJobDefinitionId
 */
BatchDto.prototype['batchJobDefinitionId'] = undefined;

/**
 * Indicates whether this batch is suspended or not.
 * @member {Boolean} suspended
 */
BatchDto.prototype['suspended'] = undefined;

/**
 * The tenant id of the batch.
 * @member {String} tenantId
 */
BatchDto.prototype['tenantId'] = undefined;

/**
 * The id of the user that created the batch.
 * @member {String} createUserId
 */
BatchDto.prototype['createUserId'] = undefined;






export default BatchDto;

