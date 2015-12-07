(function() {
  'use strict';

  angular
    .module('adminModule')
    .controller('addUserController', addUserController);

  addUserController.$inject = ['$scope', '$location', 'toastr', 'usersService'];

  /* @ngInject */
  function addUserController($scope, $location, toastr, usersService) {
    $scope.addUser = function(user){
      usersService.addUser(user).then(function(res){
        toastr.success(res.msg);
        $location.path('/admin/users');
      }, function(err){
        toastr.error(err.msg);
      });
    };

    init();

    //////////////

    function init(){
      //TODO
    }
  }
})();