(function () {
  'use strict';

  angular
    .module('app.view.endpoints.clusters.tiles', [])
    .config(registerRoute);

  function registerRoute($stateProvider) {
    $stateProvider.state('endpoint.clusters.tiles', {
      url: '/list',
      templateUrl: 'app/view/endpoints/clusters/tiles/cluster-tiles.html',
      controller: ClusterTilesController,
      controllerAs: 'clustersCtrl',
      params: {
        // param set by Router module to prevent relisting
        // of servicesInstances and userServiceInstances
        instancesListed: false
      },
      ncyBreadcrumb: {
        label: gettext('Cloud Foundry'),
        parent: 'endpoint.dashboard'
      }
    });
  }

  /**
   * @name ClusterTilesController
   * @constructor
   * @param {object} $q - the angular $q service
   * @param {object} $state - the UI router $state service
   * @param  {$stateParams} $stateParams - UI Router state params
   * @param {app.model.modelManager} modelManager - the Model management service
   * @param {app.utils.appUtilsService} appUtilsService - the appUtilsService service
   * @property {object} $q - the angular $q service
   * @property {object} $state - the UI router $state service
   * @property  {$stateParams} $stateParams - UI Router state params
   * @property {app.model.modelManager} modelManager - the Model management service
   * @property {appUtilsService} appUtilsService - the appUtilsService service
   */
  function ClusterTilesController($q, $state, $stateParams, modelManager, appUtilsService) {
    var vm = this;

    vm.currentUserAccount = modelManager.retrieve('app.model.account');
    vm.serviceInstances = {};
    vm.state = '';
    vm.createClusterList = createClusterList;
    vm.refreshClusterModel = refreshClusterModel;
    vm.updateState = updateState;

    var serviceInstanceModel = modelManager.retrieve('app.model.serviceInstance');
    var userServiceInstanceModel = modelManager.retrieve('app.model.serviceInstance.user');
    var stackatoInfo = modelManager.retrieve('app.model.stackatoInfo');

    appUtilsService.chainStateResolve('endpoint.clusters.tiles', $state, init);

    function init() {
      return refreshClusterModel();
    }

    /**
     * @namespace app.view.endpoints.clusters
     * @memberof app.view.endpoints.clusters
     * @name createClusterList
     * @description Create the list of clusters + determine their connected status
     */
    function createClusterList() {
      vm.serviceInstances = {};
      var filteredInstances = _.filter(serviceInstanceModel.serviceInstances, {cnsi_type: 'hcf'});
      _.forEach(filteredInstances, function (serviceInstance) {
        var cloned = angular.fromJson(angular.toJson(serviceInstance));
        cloned.isConnected = _.get(userServiceInstanceModel.serviceInstances[cloned.guid], 'valid', false);

        if (cloned.isConnected) {
          cloned.hasExpired = false;
          vm.serviceInstances[cloned.guid] = cloned;
        }
      });
      updateState(false, false);
    }

    /**
     * @namespace app.view.endpoints.clusters
     * @memberof app.view.endpoints.clusters
     * @name refreshClusterList
     * @description Update the core model data + create the cluster list
     * @returns {promise} refresh cluster promise
     */
    function refreshClusterModel() {
      updateState(true, false);

      var promises = [stackatoInfo.getStackatoInfo()];
      if (!$stateParams.instancesListed) {
        promises = promises.concat([serviceInstanceModel.list(), userServiceInstanceModel.list()]);
      }
      return $q.all(promises)
        .then(function () {
          vm.createClusterList();
        })
        .catch(function () {
          updateState(false, true);
        });
    }

    /**
     * @namespace app.view.endpoints.clusters
     * @memberof app.view.endpoints.clusters
     * @name updateState
     * @description Determine the state of the model (contains clusters/doesn't contain clusters/loading/failed to load)
     * @param {boolean} loading true if loading async data
     * @param {boolean} loadError true if the async load of data failed
     */
    function updateState(loading, loadError) {
      var hasClusters = _.get(_.keys(vm.serviceInstances), 'length', 0) > 0;
      if (hasClusters) {
        vm.state = '';
      } else if (loading) {
        vm.state = 'loading';
      } else if (loadError) {
        vm.state = 'loadError';
      } else {
        vm.state = 'noClusters';
      }
    }
  }
})();
