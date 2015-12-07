(function() {
  'use strict';

  angular
    .module('adminModule')
    .controller('loginController', loginController);

  loginController.$inject = ['$scope', '$location', 'securityService', '$localStorage', 'toastr'];

  /* @ngInject */
  function loginController($scope, $location, securityService, $localStorage, toastr) {
    $scope.loading = true;

    init();

    $scope.login = function(user) {
      securityService.login(user.username, user.password).then(function(){
        $localStorage.$reset();
        $location.path('/admin/dashboard');
      }, function(){
        toastr.error("Invalid user name or password");
      });
    };

    //////////////

    function init(){
      securityService.isAuthenticated().then(function(){
        $location.path('/admin/dashboard');
      }, function(){
        $scope.loading = false;
      });
    }
  }
})();