(function() {
  'use strict';

  angular
    .module('adminModule')
    .controller('listUsersController', listUsersController);

  listUsersController.$inject = ['$scope', '$location', 'toastr', 'tooltipService', 'usersService'];

  /* @ngInject */
  function listUsersController($scope, $location, toastr, tooltipService, usersService) {
    $scope.loading = true;
    $scope.users   = [];

    $scope.search = function(){
      search($scope.keyword);
    };

    init();

    //////////////

    function init(){
      search();
    }

    function search(keyword){
      $scope.loading = true;

      usersService.searchUsers(keyword).then(function(data){
        $scope.users   = data;
        $scope.loading = false;
        tooltipService.init();
      }, function(){
        toastr.error("Error loading users");
        $scope.loading = false;
      });
    }
  }
})();