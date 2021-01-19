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
    instance = new CamundaBpmRestApi.CorrelationMessageDto();
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

  describe('CorrelationMessageDto', function() {
    it('should create an instance of CorrelationMessageDto', function() {
      // uncomment below and update the code to test CorrelationMessageDto
      //var instane = new CamundaBpmRestApi.CorrelationMessageDto();
      //expect(instance).to.be.a(CamundaBpmRestApi.CorrelationMessageDto);
    });

    it('should have the property messageName (base name: "messageName")', function() {
      // uncomment below and update the code to test the property messageName
      //var instance = new CamundaBpmRestApi.CorrelationMessageDto();
      //expect(instance).to.be();
    });

    it('should have the property businessKey (base name: "businessKey")', function() {
      // uncomment below and update the code to test the property businessKey
      //var instance = new CamundaBpmRestApi.CorrelationMessageDto();
      //expect(instance).to.be();
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instance = new CamundaBpmRestApi.CorrelationMessageDto();
      //expect(instance).to.be();
    });

    it('should have the property withoutTenantId (base name: "withoutTenantId")', function() {
      // uncomment below and update the code to test the property withoutTenantId
      //var instance = new CamundaBpmRestApi.CorrelationMessageDto();
      //expect(instance).to.be();
    });

    it('should have the property processInstanceId (base name: "processInstanceId")', function() {
      // uncomment below and update the code to test the property processInstanceId
      //var instance = new CamundaBpmRestApi.CorrelationMessageDto();
      //expect(instance).to.be();
    });

    it('should have the property correlationKeys (base name: "correlationKeys")', function() {
      // uncomment below and update the code to test the property correlationKeys
      //var instance = new CamundaBpmRestApi.CorrelationMessageDto();
      //expect(instance).to.be();
    });

    it('should have the property localCorrelationKeys (base name: "localCorrelationKeys")', function() {
      // uncomment below and update the code to test the property localCorrelationKeys
      //var instance = new CamundaBpmRestApi.CorrelationMessageDto();
      //expect(instance).to.be();
    });

    it('should have the property processVariables (base name: "processVariables")', function() {
      // uncomment below and update the code to test the property processVariables
      //var instance = new CamundaBpmRestApi.CorrelationMessageDto();
      //expect(instance).to.be();
    });

    it('should have the property processVariablesLocal (base name: "processVariablesLocal")', function() {
      // uncomment below and update the code to test the property processVariablesLocal
      //var instance = new CamundaBpmRestApi.CorrelationMessageDto();
      //expect(instance).to.be();
    });

    it('should have the property all (base name: "all")', function() {
      // uncomment below and update the code to test the property all
      //var instance = new CamundaBpmRestApi.CorrelationMessageDto();
      //expect(instance).to.be();
    });

    it('should have the property resultEnabled (base name: "resultEnabled")', function() {
      // uncomment below and update the code to test the property resultEnabled
      //var instance = new CamundaBpmRestApi.CorrelationMessageDto();
      //expect(instance).to.be();
    });

    it('should have the property variablesInResultEnabled (base name: "variablesInResultEnabled")', function() {
      // uncomment below and update the code to test the property variablesInResultEnabled
      //var instance = new CamundaBpmRestApi.CorrelationMessageDto();
      //expect(instance).to.be();
    });

  });

}));
