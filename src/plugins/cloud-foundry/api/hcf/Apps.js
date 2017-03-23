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
    apiManager.register('cloud-foundry.api.Apps', new AppsApi($http));
  }

  function AppsApi($http) {
    this.$http = $http;
  }

  /* eslint-disable camelcase */
  angular.extend(AppsApi.prototype, {

   /*
    * Associate Route with the App
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/apps/associate_route_with_the_app.html
    */
    AssociateRouteWithApp: function (guid, route_guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/apps/' + guid + '/routes/' + route_guid + '';
      config.method = 'PUT';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * Copy the app bits for an App
    * This endpoint will copy the package bits in the blobstore from the source app to the destination app.
    * It will always return a job which you can query for success or failure.
    * This operation will require the app to restart in order for the changes to take effect.
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/apps/copy_the_app_bits_for_an_app.html
    */
    CopyAppBitsForApp: function (guid, value, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/apps/' + guid + '/copy_bits';
      config.method = 'POST';
      config.data = value;

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * Creating a Docker App (experimental)
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/apps/creating_a_docker_app_(experimental).html
    */
    CreateDockerAppExperimental: function (value, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/apps';
      config.method = 'POST';
      config.data = value;

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * Creating an App
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/apps/creating_an_app.html
    */
    CreateApp: function (value, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/apps';
      config.method = 'POST';
      config.data = value;

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * Delete a Particular App
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/apps/delete_a_particular_app.html
    */
    DeleteApp: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/apps/' + guid + '';
      config.method = 'DELETE';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * Downloads the staged droplet for an App
    * When using a remote blobstore, such as AWS, the response is a redirect to the actual location of the bits.
    * If the client is automatically following redirects, then the OAuth token that was used to communicate with Cloud Controller will be replayed on the new redirect request.
    * Some blobstores may reject the request in that case. Clients may need to follow the redirect without including the OAuth token.
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/apps/downloads_the_staged_droplet_for_an_app.html
    */
    DownloadsStagedDropletForApp: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/apps/' + guid + '/droplet/download';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * Get App summary
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/apps/get_app_summary.html
    */
    GetAppSummary: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/apps/' + guid + '/summary';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * Get detailed stats for a STARTED App
    * Get status for each instance of an App using the app guid.
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/apps/get_detailed_stats_for_a_started_app.html
    */
    GetDetailedStatsForStartedApp: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/apps/' + guid + '/stats';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * Get the env for an App
    * Get the environment variables for an App using the app guid. Restricted to SpaceDeveloper role.
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/apps/get_the_env_for_an_app.html
    */
    GetEnvForApp: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/apps/' + guid + '/env';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * Get the instance information for a STARTED App
    * Get status for each instance of an App using the app guid. Note: Provided example response is for apps running on Diego.
    * For apps running on DEAs, instance information will appear as follows:
    * {
    * "0": {
    * "state": "RUNNING",
    * "since": 1403140717.984577,
    * "debug_ip": null,
    * "debug_port": null,
    * "console_ip": null,
    * "console_port": null
    * }
    * }.
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/apps/get_the_instance_information_for_a_started_app.html
    */
    GetInstanceInformationForStartedApp: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/apps/' + guid + '/instances';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * List all Apps
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/apps/list_all_apps.html
    */
    ListAllApps: function (params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/apps';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * List all Routes for the App
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/apps/list_all_routes_for_the_app.html
    */
    ListAllRoutesForApp: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/apps/' + guid + '/routes';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * List all Service Bindings for the App
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/apps/list_all_service_bindings_for_the_app.html
    */
    ListAllServiceBindingsForApp: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/apps/' + guid + '/service_bindings';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * Remove Route from the App
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/apps/remove_route_from_the_app.html
    */
    RemoveRouteFromApp: function (guid, route_guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/apps/' + guid + '/routes/' + route_guid + '';
      config.method = 'DELETE';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * Remove Service Binding from the App
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/apps/remove_service_binding_from_the_app.html
    */
    RemoveServiceBindingFromApp: function (guid, service_binding_guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/apps/' + guid + '/service_bindings/' + service_binding_guid + '';
      config.method = 'DELETE';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * Restage an App
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/apps/restage_an_app.html
    */
    RestageApp: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/apps/' + guid + '/restage';
      config.method = 'POST';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * Retrieve a Particular App
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/apps/retrieve_a_particular_app.html
    */
    RetrieveApp: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/apps/' + guid + '';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * Terminate the running App Instance at the given index
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/apps/terminate_the_running_app_instance_at_the_given_index.html
    */
    TerminateRunningAppInstanceAtGivenIndex: function (guid, index, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/apps/' + guid + '/instances/' + index + '';
      config.method = 'DELETE';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

   /*
    * Updating an App
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/apps/updating_an_app.html
    */
    UpdateApp: function (guid, value, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/apps/' + guid + '';
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
