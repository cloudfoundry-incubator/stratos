/* DO NOT EDIT: This code has been generated by the cf-dotnet-sdk-builder */

(function () {
  'use strict';

  angular
    .module('cloud-foundry.api')
    .run(registerApi);

  registerApi.$inject = [
    '$http',
    'app.api.apiManager'
  ];

  function registerApi($http, apiManager) {
    apiManager.register('cloud-foundry.api.ServicePlans', new ServicePlansApi($http));
  }

  function ServicePlansApi($http) {
    this.$http = $http;
  }

  /* eslint-disable camelcase */
  angular.extend(ServicePlansApi.prototype, {

   /*
    * Delete a Particular Service Plans
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/service_plans/delete_a_particular_service_plans.html
    */
    DeleteServicePlans: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/service_plans/' + guid + '';
      config.method = 'DELETE';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * List all Service Instances for the Service Plan
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/service_plans/list_all_service_instances_for_the_service_plan.html
    */
    ListAllServiceInstancesForServicePlan: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/service_plans/' + guid + '/service_instances';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * List all Service Plans
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/service_plans/list_all_service_plans.html
    */
    ListAllServicePlans: function (params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/service_plans';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * Retrieve a Particular Service Plan
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/service_plans/retrieve_a_particular_service_plan.html
    */
    RetrieveServicePlan: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/service_plans/' + guid + '';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * Updating a Service Plan
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/service_plans/updating_a_service_plan.html
    */
    UpdateServicePlan: function (value, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/service_plans';
      config.method = 'PUT';
      config.data = value;

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    }

  });
  /* eslint-enable camelcase */

})();
