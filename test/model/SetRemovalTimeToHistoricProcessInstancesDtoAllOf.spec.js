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
    instance = new CamundaBpmRestApi.SetRemovalTimeToHistoricProcessInstancesDtoAllOf();
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

  describe('SetRemovalTimeToHistoricProcessInstancesDtoAllOf', function() {
    it('should create an instance of SetRemovalTimeToHistoricProcessInstancesDtoAllOf', function() {
      // uncomment below and update the code to test SetRemovalTimeToHistoricProcessInstancesDtoAllOf
      //var instane = new CamundaBpmRestApi.SetRemovalTimeToHistoricProcessInstancesDtoAllOf();
      //expect(instance).to.be.a(CamundaBpmRestApi.SetRemovalTimeToHistoricProcessInstancesDtoAllOf);
    });

    it('should have the property historicProcessInstanceIds (base name: "historicProcessInstanceIds")', function() {
      // uncomment below and update the code to test the property historicProcessInstanceIds
      //var instance = new CamundaBpmRestApi.SetRemovalTimeToHistoricProcessInstancesDtoAllOf();
      //expect(instance).to.be();
    });

    it('should have the property historicProcessInstanceQuery (base name: "historicProcessInstanceQuery")', function() {
      // uncomment below and update the code to test the property historicProcessInstanceQuery
      //var instance = new CamundaBpmRestApi.SetRemovalTimeToHistoricProcessInstancesDtoAllOf();
      //expect(instance).to.be();
    });

    it('should have the property hierarchical (base name: "hierarchical")', function() {
      // uncomment below and update the code to test the property hierarchical
      //var instance = new CamundaBpmRestApi.SetRemovalTimeToHistoricProcessInstancesDtoAllOf();
      //expect(instance).to.be();
    });

  });

}));
