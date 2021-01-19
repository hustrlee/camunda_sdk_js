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
    instance = new CamundaBpmRestApi.TaskDto();
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

  describe('TaskDto', function() {
    it('should create an instance of TaskDto', function() {
      // uncomment below and update the code to test TaskDto
      //var instane = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be.a(CamundaBpmRestApi.TaskDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

    it('should have the property assignee (base name: "assignee")', function() {
      // uncomment below and update the code to test the property assignee
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

    it('should have the property due (base name: "due")', function() {
      // uncomment below and update the code to test the property due
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

    it('should have the property followUp (base name: "followUp")', function() {
      // uncomment below and update the code to test the property followUp
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

    it('should have the property delegationState (base name: "delegationState")', function() {
      // uncomment below and update the code to test the property delegationState
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

    it('should have the property executionId (base name: "executionId")', function() {
      // uncomment below and update the code to test the property executionId
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

    it('should have the property parentTaskId (base name: "parentTaskId")', function() {
      // uncomment below and update the code to test the property parentTaskId
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

    it('should have the property processDefinitionId (base name: "processDefinitionId")', function() {
      // uncomment below and update the code to test the property processDefinitionId
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

    it('should have the property processInstanceId (base name: "processInstanceId")', function() {
      // uncomment below and update the code to test the property processInstanceId
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

    it('should have the property caseExecutionId (base name: "caseExecutionId")', function() {
      // uncomment below and update the code to test the property caseExecutionId
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

    it('should have the property caseDefinitionId (base name: "caseDefinitionId")', function() {
      // uncomment below and update the code to test the property caseDefinitionId
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

    it('should have the property caseInstanceId (base name: "caseInstanceId")', function() {
      // uncomment below and update the code to test the property caseInstanceId
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

    it('should have the property taskDefinitionKey (base name: "taskDefinitionKey")', function() {
      // uncomment below and update the code to test the property taskDefinitionKey
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

    it('should have the property suspended (base name: "suspended")', function() {
      // uncomment below and update the code to test the property suspended
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

    it('should have the property formKey (base name: "formKey")', function() {
      // uncomment below and update the code to test the property formKey
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instance = new CamundaBpmRestApi.TaskDto();
      //expect(instance).to.be();
    });

  });

}));
