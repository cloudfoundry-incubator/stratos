(function () {
  'use strict';

  angular
    .module('cloud-foundry.view.applications.application')
    .directive('applicationServiceDetail', applicationServiceDetail);

  applicationServiceDetail.$inject = [];

  function applicationServiceDetail() {
    return {
      bindToController: {
        service: '=',
        app: '='
      },
      controller: ApplicationServiceDetailController,
      controllerAs: 'applicationServiceDetailCtrl',
      scope: {},
      templateUrl: 'plugins/cloud-foundry/view/applications/application/service-detail/service-detail.html'
    };
  }

  ApplicationServiceDetailController.$inject = [
    '$state'
  ];

  function ApplicationServiceDetailController($state) {
    this.$state = $state;
  }

  angular.extend(ApplicationServiceDetailController.prototype, {
    cancel: function() {
      this.flyoutActive = false;
    },
    add: function() {
      //TBD Logic to do the add

      this.flyoutActive = false;
    }
  });

})();
