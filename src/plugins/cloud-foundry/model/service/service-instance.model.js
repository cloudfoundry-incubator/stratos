(function () {
  'use strict';

  /**
   * @namespace cloud-foundry.model.service-instance
   * @memberof cloud-foundry.model
   * @name service-instance
   * @description Service instance model
   */
  angular
    .module('cloud-foundry.model')
    .run(registerServiceInstanceModel);

  registerServiceInstanceModel.$inject = [
    'app.model.modelManager',
    'app.api.apiManager'
  ];

  function registerServiceInstanceModel(modelManager, apiManager) {
    modelManager.register('cloud-foundry.model.service-instance', new ServiceInstance(apiManager));
  }

  /**
   * @memberof cloud-foundry.model.service-instance
   * @name ServiceInstance
   * @param {app.api.apiManager} apiManager - the API manager
   * @property {app.api.apiManager} apiManager - the API manager
   * @property {object} data - the data holder
   * @class
   */
  function ServiceInstance(apiManager) {
    this.serviceInstanceApi = apiManager.retrieve('cloud-foundry.api.ServiceInstances');
    this.data = {};

    var passThroughHeader = {
      'x-cnap-passthrough': 'true'
    };

    this.makeHttpConfig = function (cnsiGuid) {
      var headers = {'x-cnap-cnsi-list': cnsiGuid};
      angular.extend(headers, passThroughHeader);
      return {
        headers: headers
      };
    };
  }

  angular.extend(ServiceInstance.prototype, {
    /**
     * @function all
     * @memberof cloud-foundry.model.service-instance.ServiceInstance
     * @description List all service instances
     * @param {string} cnsiGuid - the CNSI guid
     * @param {object} options - the additional parameters for request
     * @returns {promise} A promise object
     * @public
     */
    all: function (cnsiGuid, options) {
      return this.serviceInstanceApi.ListAllServiceInstances(options, this.makeHttpConfig(cnsiGuid))
        .then(function (response) {
          return that.onAll(response.data);
        });
    },

    /**
     * @function createServiceInstance
     * @memberof cloud-foundry.model.service-instance.ServiceInstance
     * @description Create a service instance
     * @param {string} cnsiGuid - the CNSI guid
     * @param {object} newInstanceSpec - the service instance spec
     * @returns {promise} A promise object
     * @public
     */
    createServiceInstance: function (cnsiGuid, newInstanceSpec) {
      return this.serviceInstanceApi.CreateServiceInstance(newInstanceSpec, {}, this.makeHttpConfig(cnsiGuid))
        .then(function (response) {
          return response.data;
        });
    },

    /**
     * @function deleteServiceInstance
     * @memberof cloud-foundry.model.service-instance.ServiceInstance
     * @description Delete a service instance. This includes all service bindings, service keys and routes associated
     * with the service instance
     * @param {string} cnsiGuid - the CNSI guid
     * @param {object} serviceInstanceGuid - the service instance guid of the service instance to delete
     * @returns {promise} A promise object
     * @public
     */
    deleteServiceInstance: function (cnsiGuid, serviceInstanceGuid) {
      var params = {
        recursive: true,
        async: false
      };
      return this.serviceInstanceApi.DeleteServiceInstance(serviceInstanceGuid, params, this.makeHttpConfig(cnsiGuid))
        .then(function (response) {
          return response.data;
        });
    },

    /**
     * @function listAllServiceBindingsForServiceInstance
     * @memberof cloud-foundry.model.service-instance.ServiceInstance
     * @description List all service bindings for a service instance
     * @param {string} cnsiGuid - the CNSI guid
     * @param {object} guid - the service instance guid
     * @returns {promise} A promise object
     * @public
     */
    listAllServiceBindingsForServiceInstance: function (cnsiGuid, guid) {
      return this.serviceInstanceApi.ListAllServiceBindingsForServiceInstance(guid, {}, this.makeHttpConfig(cnsiGuid))
        .then(function (response) {
          return response.data.resources;
        });
    },

    /**
     * @function onAll
     * @memberof cloud-foundry.model.service-instance.ServiceInstance
     * @description onAll handler at model layer
     * @param {string} response - the JSON returned from API call
     * @returns {object} The response
     * @private
     */
    onAll: function (response) {
      this.data = response.resources;
      return response.resources;
    }
  });

})();
