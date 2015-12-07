(function() {
  'use strict';

  angular
    .module('adminModule')
    .controller('headerController', headerController);

  headerController.$inject = ['$scope', '$location', 'securityService', '$localStorage', 'toastr'];

  /* @ngInject */
  function headerController($scope, $location, securityService, $localStorage, toastr) {
    $scope.currentUser = securityService.currentUser;
    $scope.storage = $localStorage;

    $scope.logout = function() {
      securityService.logout().then(function(){
        $location.path('/admin');
      }, function(){
        toastr.error("Could not log out, please try again");
      });
    }
  }
})();