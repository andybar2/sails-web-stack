(function() {
  'use strict';

  angular
    .module('adminModule')
    .controller('dashboardController', dashboardController);

  dashboardController.$inject = ['$scope', '$location', 'toastr'];

  /* @ngInject */
  function dashboardController($scope, $location, toastr) {
    //TODO
  }
})();