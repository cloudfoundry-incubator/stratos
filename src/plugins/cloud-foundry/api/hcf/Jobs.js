/* DO NOT EDIT: This code has been generated by the cf-dotnet-sdk-builder */

(function () {
  'use strict';

  angular
    .module('cloud-foundry.api')
    .run(registerApi);

  registerApi.$inject = [
    '$http',
    'apiManager'
  ];

  function registerApi($http, apiManager) {
    apiManager.register('cloud-foundry.api.Jobs', new JobsApi($http));
  }

  function JobsApi($http) {
    this.$http = $http;
  }

  /* eslint-disable camelcase */
  angular.extend(JobsApi.prototype, {

   /*
    * Retrieve Job that is queued
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/jobs/retrieve_job_that_is_queued.html
    */
    RetrieveJobThatIsQueued: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/jobs/' + guid + '';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * Retrieve Job that was successful
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/jobs/retrieve_job_that_was_successful.html
    */
    RetrieveJobThatWasSuccessful: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/jobs/' + guid + '';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * Retrieve Job with known failure
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/jobs/retrieve_job_with_known_failure.html
    */
    RetrieveJobWithKnownFailure: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/jobs/' + guid + '';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * Retrieve Job with unknown failure
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/jobs/retrieve_job_with_unknown_failure.html
    */
    RetrieveJobWithUnknownFailure: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/jobs/' + guid + '';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    }

  });
  /* eslint-enable camelcase */

})();
