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
    instance = new CamundaBpmRestApi.HistoricProcessInstanceDto();
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

  describe('HistoricProcessInstanceDto', function() {
    it('should create an instance of HistoricProcessInstanceDto', function() {
      // uncomment below and update the code to test HistoricProcessInstanceDto
      //var instane = new CamundaBpmRestApi.HistoricProcessInstanceDto();
      //expect(instance).to.be.a(CamundaBpmRestApi.HistoricProcessInstanceDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CamundaBpmRestApi.HistoricProcessInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property rootProcessInstanceId (base name: "rootProcessInstanceId")', function() {
      // uncomment below and update the code to test the property rootProcessInstanceId
      //var instance = new CamundaBpmRestApi.HistoricProcessInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property superProcessInstanceId (base name: "superProcessInstanceId")', function() {
      // uncomment below and update the code to test the property superProcessInstanceId
      //var instance = new CamundaBpmRestApi.HistoricProcessInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property superCaseInstanceId (base name: "superCaseInstanceId")', function() {
      // uncomment below and update the code to test the property superCaseInstanceId
      //var instance = new CamundaBpmRestApi.HistoricProcessInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property caseInstanceId (base name: "caseInstanceId")', function() {
      // uncomment below and update the code to test the property caseInstanceId
      //var instance = new CamundaBpmRestApi.HistoricProcessInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property processDefinitionName (base name: "processDefinitionName")', function() {
      // uncomment below and update the code to test the property processDefinitionName
      //var instance = new CamundaBpmRestApi.HistoricProcessInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property processDefinitionKey (base name: "processDefinitionKey")', function() {
      // uncomment below and update the code to test the property processDefinitionKey
      //var instance = new CamundaBpmRestApi.HistoricProcessInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property processDefinitionVersion (base name: "processDefinitionVersion")', function() {
      // uncomment below and update the code to test the property processDefinitionVersion
      //var instance = new CamundaBpmRestApi.HistoricProcessInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property processDefinitionId (base name: "processDefinitionId")', function() {
      // uncomment below and update the code to test the property processDefinitionId
      //var instance = new CamundaBpmRestApi.HistoricProcessInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property businessKey (base name: "businessKey")', function() {
      // uncomment below and update the code to test the property businessKey
      //var instance = new CamundaBpmRestApi.HistoricProcessInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instance = new CamundaBpmRestApi.HistoricProcessInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property endTime (base name: "endTime")', function() {
      // uncomment below and update the code to test the property endTime
      //var instance = new CamundaBpmRestApi.HistoricProcessInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property removalTime (base name: "removalTime")', function() {
      // uncomment below and update the code to test the property removalTime
      //var instance = new CamundaBpmRestApi.HistoricProcessInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property durationInMillis (base name: "durationInMillis")', function() {
      // uncomment below and update the code to test the property durationInMillis
      //var instance = new CamundaBpmRestApi.HistoricProcessInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property startUserId (base name: "startUserId")', function() {
      // uncomment below and update the code to test the property startUserId
      //var instance = new CamundaBpmRestApi.HistoricProcessInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property startActivityId (base name: "startActivityId")', function() {
      // uncomment below and update the code to test the property startActivityId
      //var instance = new CamundaBpmRestApi.HistoricProcessInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property deleteReason (base name: "deleteReason")', function() {
      // uncomment below and update the code to test the property deleteReason
      //var instance = new CamundaBpmRestApi.HistoricProcessInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instance = new CamundaBpmRestApi.HistoricProcessInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new CamundaBpmRestApi.HistoricProcessInstanceDto();
      //expect(instance).to.be();
    });

  });

}));
