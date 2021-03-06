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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CamundaBpmRestApi);
  }
}(this, function(expect, CamundaBpmRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ExternalTaskQueryDto', function() {
    it('should create an instance of ExternalTaskQueryDto', function() {
      // uncomment below and update the code to test ExternalTaskQueryDto
      //var instane = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be.a(CamundaBpmRestApi.ExternalTaskQueryDto);
    });

    it('should have the property externalTaskId (base name: "externalTaskId")', function() {
      // uncomment below and update the code to test the property externalTaskId
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property externalTaskIdIn (base name: "externalTaskIdIn")', function() {
      // uncomment below and update the code to test the property externalTaskIdIn
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property topicName (base name: "topicName")', function() {
      // uncomment below and update the code to test the property topicName
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property workerId (base name: "workerId")', function() {
      // uncomment below and update the code to test the property workerId
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property locked (base name: "locked")', function() {
      // uncomment below and update the code to test the property locked
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property notLocked (base name: "notLocked")', function() {
      // uncomment below and update the code to test the property notLocked
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property withRetriesLeft (base name: "withRetriesLeft")', function() {
      // uncomment below and update the code to test the property withRetriesLeft
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property noRetriesLeft (base name: "noRetriesLeft")', function() {
      // uncomment below and update the code to test the property noRetriesLeft
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property lockExpirationAfter (base name: "lockExpirationAfter")', function() {
      // uncomment below and update the code to test the property lockExpirationAfter
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property lockExpirationBefore (base name: "lockExpirationBefore")', function() {
      // uncomment below and update the code to test the property lockExpirationBefore
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property activityId (base name: "activityId")', function() {
      // uncomment below and update the code to test the property activityId
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property activityIdIn (base name: "activityIdIn")', function() {
      // uncomment below and update the code to test the property activityIdIn
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property executionId (base name: "executionId")', function() {
      // uncomment below and update the code to test the property executionId
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property processInstanceId (base name: "processInstanceId")', function() {
      // uncomment below and update the code to test the property processInstanceId
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property processInstanceIdIn (base name: "processInstanceIdIn")', function() {
      // uncomment below and update the code to test the property processInstanceIdIn
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property processDefinitionId (base name: "processDefinitionId")', function() {
      // uncomment below and update the code to test the property processDefinitionId
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property tenantIdIn (base name: "tenantIdIn")', function() {
      // uncomment below and update the code to test the property tenantIdIn
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property suspended (base name: "suspended")', function() {
      // uncomment below and update the code to test the property suspended
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property priorityHigherThanOrEquals (base name: "priorityHigherThanOrEquals")', function() {
      // uncomment below and update the code to test the property priorityHigherThanOrEquals
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property priorityLowerThanOrEquals (base name: "priorityLowerThanOrEquals")', function() {
      // uncomment below and update the code to test the property priorityLowerThanOrEquals
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

    it('should have the property sorting (base name: "sorting")', function() {
      // uncomment below and update the code to test the property sorting
      //var instance = new CamundaBpmRestApi.ExternalTaskQueryDto();
      //expect(instance).to.be();
    });

  });

}));
