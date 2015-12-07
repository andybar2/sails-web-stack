(function() {
  'use strict';

  angular
    .module('adminModule')
    .factory('usersService', usersService);

  usersService.$inject = ['$q','$http'];

  /* @ngInject */
  function usersService($q, $http) {
    var usersService = {
      searchUsers: function(keyword){
        var deferred  = $q.defer();
        var condition = {};

        if (keyword && keyword.trim() != '') {
          condition = {
            or: [
              { username: { contains: keyword.trim() } },
              { email: { contains: keyword.trim() } }
            ]
          };
        }

        $http.get('/user?where=' + JSON.stringify(condition) + '&sort=username%20ASC').then(function(res) {
          deferred.resolve(res.data);
        }, function(err) {
          deferred.reject(err.data);
        });

        return deferred.promise;
      },

      addUser: function(user){
        var deferred  = $q.defer();
        
        $http.post('/user/add', user).then(function(res) {
          deferred.resolve(res.data);
        }, function(err) {
          deferred.reject(err.data);
        });

        return deferred.promise;
      }
    };

    return usersService;
  }
})();