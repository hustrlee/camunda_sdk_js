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
    instance = new CamundaBpmRestApi.TaskApi();
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

  describe('TaskApi', function() {
    describe('claim', function() {
      it('should call claim successfully', function(done) {
        //uncomment below and update the code to test claim
        //instance.claim(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('complete', function() {
      it('should call complete successfully', function(done) {
        //uncomment below and update the code to test complete
        //instance.complete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createTask', function() {
      it('should call createTask successfully', function(done) {
        //uncomment below and update the code to test createTask
        //instance.createTask(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('delegateTask', function() {
      it('should call delegateTask successfully', function(done) {
        //uncomment below and update the code to test delegateTask
        //instance.delegateTask(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTask', function() {
      it('should call deleteTask successfully', function(done) {
        //uncomment below and update the code to test deleteTask
        //instance.deleteTask(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeployedForm', function() {
      it('should call getDeployedForm successfully', function(done) {
        //uncomment below and update the code to test getDeployedForm
        //instance.getDeployedForm(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getForm', function() {
      it('should call getForm successfully', function(done) {
        //uncomment below and update the code to test getForm
        //instance.getForm(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFormVariables', function() {
      it('should call getFormVariables successfully', function(done) {
        //uncomment below and update the code to test getFormVariables
        //instance.getFormVariables(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRenderedForm', function() {
      it('should call getRenderedForm successfully', function(done) {
        //uncomment below and update the code to test getRenderedForm
        //instance.getRenderedForm(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTask', function() {
      it('should call getTask successfully', function(done) {
        //uncomment below and update the code to test getTask
        //instance.getTask(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTasks', function() {
      it('should call getTasks successfully', function(done) {
        //uncomment below and update the code to test getTasks
        //instance.getTasks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTasksCount', function() {
      it('should call getTasksCount successfully', function(done) {
        //uncomment below and update the code to test getTasksCount
        //instance.getTasksCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('handleBpmnError', function() {
      it('should call handleBpmnError successfully', function(done) {
        //uncomment below and update the code to test handleBpmnError
        //instance.handleBpmnError(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('handleEscalation', function() {
      it('should call handleEscalation successfully', function(done) {
        //uncomment below and update the code to test handleEscalation
        //instance.handleEscalation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('queryTasks', function() {
      it('should call queryTasks successfully', function(done) {
        //uncomment below and update the code to test queryTasks
        //instance.queryTasks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('queryTasksCount', function() {
      it('should call queryTasksCount successfully', function(done) {
        //uncomment below and update the code to test queryTasksCount
        //instance.queryTasksCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resolve', function() {
      it('should call resolve successfully', function(done) {
        //uncomment below and update the code to test resolve
        //instance.resolve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setAssignee', function() {
      it('should call setAssignee successfully', function(done) {
        //uncomment below and update the code to test setAssignee
        //instance.setAssignee(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('submit', function() {
      it('should call submit successfully', function(done) {
        //uncomment below and update the code to test submit
        //instance.submit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unclaim', function() {
      it('should call unclaim successfully', function(done) {
        //uncomment below and update the code to test unclaim
        //instance.unclaim(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTask', function() {
      it('should call updateTask successfully', function(done) {
        //uncomment below and update the code to test updateTask
        //instance.updateTask(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
