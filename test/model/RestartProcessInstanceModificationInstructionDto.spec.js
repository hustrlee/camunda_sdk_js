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
    instance = new CamundaBpmRestApi.RestartProcessInstanceModificationInstructionDto();
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

  describe('RestartProcessInstanceModificationInstructionDto', function() {
    it('should create an instance of RestartProcessInstanceModificationInstructionDto', function() {
      // uncomment below and update the code to test RestartProcessInstanceModificationInstructionDto
      //var instane = new CamundaBpmRestApi.RestartProcessInstanceModificationInstructionDto();
      //expect(instance).to.be.a(CamundaBpmRestApi.RestartProcessInstanceModificationInstructionDto);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new CamundaBpmRestApi.RestartProcessInstanceModificationInstructionDto();
      //expect(instance).to.be();
    });

    it('should have the property activityId (base name: "activityId")', function() {
      // uncomment below and update the code to test the property activityId
      //var instance = new CamundaBpmRestApi.RestartProcessInstanceModificationInstructionDto();
      //expect(instance).to.be();
    });

    it('should have the property transitionId (base name: "transitionId")', function() {
      // uncomment below and update the code to test the property transitionId
      //var instance = new CamundaBpmRestApi.RestartProcessInstanceModificationInstructionDto();
      //expect(instance).to.be();
    });

  });

}));