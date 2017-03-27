/* DO NOT EDIT: This code has been generated by swagger-codegen */
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
    apiManager.register('cloud-foundry.api.HceArtifactApi', new HceArtifactApi($http));
  }

  /**
    * @constructor
    * @name HceArtifactApi
    * @description For more information on this API, please see:
    * https://github.com/hpcloud/hce-rest-service/blob/master/app/v2/swagger.yml
    * @param {object} $http - the Angular $http service
    * @property {object} $http - the Angular $http service
    * @property {string} baseUrl - the API base URL
    */
  function HceArtifactApi($http) {
    this.$http = $http;
    this.baseUrl = '/pp/v1/proxy/v2';
  }

  angular.extend(HceArtifactApi.prototype, {
    /**
     * @name deleteArtifact
     * @description Deletes the artifact specified in the request params.
     * @param {string} guid - the HCE instance GUID
     * @param {!number} artifactId - The id of the artifact to delete.
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    deleteArtifact: function (guid, artifactId, params, httpConfigOptions) {
      var path = this.baseUrl + '/artifacts/{artifact_id}'
        .replace('{' + 'artifact_id' + '}', artifactId);
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'DELETE',
        url: path,
        params: params || {},
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name downloadArtifact
     * @description Download the file specified by the artifact id. This operation may result in a redirect.
     * @param {string} guid - the HCE instance GUID
     * @param {!number} artifactId - The id of the artifact to download.
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    downloadArtifact: function (guid, artifactId, params, httpConfigOptions) {
      var path = this.baseUrl + '/artifacts/{artifact_id}/download'
        .replace('{' + 'artifact_id' + '}', artifactId);
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'GET',
        url: path,
        params: params || {},
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name getArtifact
     * @description Get the artifact specified in request.
     * @param {string} guid - the HCE instance GUID
     * @param {!number} artifactId - The id of the artifact.
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    getArtifact: function (guid, artifactId, params, httpConfigOptions) {
      var path = this.baseUrl + '/artifacts/{artifact_id}'
        .replace('{' + 'artifact_id' + '}', artifactId);
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'GET',
        url: path,
        params: params || {},
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name getArtifacts
     * @description List the list of artifacts associated with the specified PipelineExecution.
     * @param {string} guid - the HCE instance GUID
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    getArtifacts: function (guid, params, httpConfigOptions) {
      var path = this.baseUrl + '/artifacts';
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'GET',
        url: path,
        params: params || {},
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name uploadArtifact
     * @description Upload an artifact for the specified PipelineExecution.
     * @param {string} guid - the HCE instance GUID
     * @param {object} data - the request form data
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    uploadArtifact: function (guid, data, params, httpConfigOptions) {
      var path = this.baseUrl + '/artifacts';
      var headers = {
        'x-cnap-cnsi-list': guid
      };
      headers['Content-Type'] = 'application/x-gzip';

      var config = {
        method: 'POST',
        url: path,
        params: params || {},
        data: data,
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    }
  });
})();
