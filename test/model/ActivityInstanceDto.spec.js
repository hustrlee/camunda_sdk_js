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
    instance = new CamundaBpmRestApi.ActivityInstanceDto();
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

  describe('ActivityInstanceDto', function() {
    it('should create an instance of ActivityInstanceDto', function() {
      // uncomment below and update the code to test ActivityInstanceDto
      //var instane = new CamundaBpmRestApi.ActivityInstanceDto();
      //expect(instance).to.be.a(CamundaBpmRestApi.ActivityInstanceDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CamundaBpmRestApi.ActivityInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property parentActivityInstanceId (base name: "parentActivityInstanceId")', function() {
      // uncomment below and update the code to test the property parentActivityInstanceId
      //var instance = new CamundaBpmRestApi.ActivityInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property activityId (base name: "activityId")', function() {
      // uncomment below and update the code to test the property activityId
      //var instance = new CamundaBpmRestApi.ActivityInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property activityName (base name: "activityName")', function() {
      // uncomment below and update the code to test the property activityName
      //var instance = new CamundaBpmRestApi.ActivityInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property activityType (base name: "activityType")', function() {
      // uncomment below and update the code to test the property activityType
      //var instance = new CamundaBpmRestApi.ActivityInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property processInstanceId (base name: "processInstanceId")', function() {
      // uncomment below and update the code to test the property processInstanceId
      //var instance = new CamundaBpmRestApi.ActivityInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property processDefinitionId (base name: "processDefinitionId")', function() {
      // uncomment below and update the code to test the property processDefinitionId
      //var instance = new CamundaBpmRestApi.ActivityInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property childActivityInstances (base name: "childActivityInstances")', function() {
      // uncomment below and update the code to test the property childActivityInstances
      //var instance = new CamundaBpmRestApi.ActivityInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property childTransitionInstances (base name: "childTransitionInstances")', function() {
      // uncomment below and update the code to test the property childTransitionInstances
      //var instance = new CamundaBpmRestApi.ActivityInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property executionIds (base name: "executionIds")', function() {
      // uncomment below and update the code to test the property executionIds
      //var instance = new CamundaBpmRestApi.ActivityInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property incidentIds (base name: "incidentIds")', function() {
      // uncomment below and update the code to test the property incidentIds
      //var instance = new CamundaBpmRestApi.ActivityInstanceDto();
      //expect(instance).to.be();
    });

    it('should have the property incidents (base name: "incidents")', function() {
      // uncomment below and update the code to test the property incidents
      //var instance = new CamundaBpmRestApi.ActivityInstanceDto();
      //expect(instance).to.be();
    });

  });

}));
