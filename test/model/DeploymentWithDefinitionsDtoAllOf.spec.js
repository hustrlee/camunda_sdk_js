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
    instance = new CamundaBpmRestApi.DeploymentWithDefinitionsDtoAllOf();
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

  describe('DeploymentWithDefinitionsDtoAllOf', function() {
    it('should create an instance of DeploymentWithDefinitionsDtoAllOf', function() {
      // uncomment below and update the code to test DeploymentWithDefinitionsDtoAllOf
      //var instane = new CamundaBpmRestApi.DeploymentWithDefinitionsDtoAllOf();
      //expect(instance).to.be.a(CamundaBpmRestApi.DeploymentWithDefinitionsDtoAllOf);
    });

    it('should have the property deployedProcessDefinitions (base name: "deployedProcessDefinitions")', function() {
      // uncomment below and update the code to test the property deployedProcessDefinitions
      //var instance = new CamundaBpmRestApi.DeploymentWithDefinitionsDtoAllOf();
      //expect(instance).to.be();
    });

    it('should have the property deployedDecisionDefinitions (base name: "deployedDecisionDefinitions")', function() {
      // uncomment below and update the code to test the property deployedDecisionDefinitions
      //var instance = new CamundaBpmRestApi.DeploymentWithDefinitionsDtoAllOf();
      //expect(instance).to.be();
    });

    it('should have the property deployedDecisionRequirementsDefinitions (base name: "deployedDecisionRequirementsDefinitions")', function() {
      // uncomment below and update the code to test the property deployedDecisionRequirementsDefinitions
      //var instance = new CamundaBpmRestApi.DeploymentWithDefinitionsDtoAllOf();
      //expect(instance).to.be();
    });

    it('should have the property deployedCaseDefinitions (base name: "deployedCaseDefinitions")', function() {
      // uncomment below and update the code to test the property deployedCaseDefinitions
      //var instance = new CamundaBpmRestApi.DeploymentWithDefinitionsDtoAllOf();
      //expect(instance).to.be();
    });

  });

}));
