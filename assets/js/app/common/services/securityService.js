(function(){
  "use strict";

  angular
    .module('commonModule')
    .factory('securityService', securityService);

  securityService.$inject = ['$q','$http'];

  /* @ngInject */
  function securityService($q, $http){
    var securityService = {

      AUTHORIZED   : 200,
      UNAUTHORIZED : 401,

      currentUser: null,

      login: function(username, password) {
        var deferred = $q.defer();

        $http.post('/login', {username: username, password: password}).then(function(res) {
          deferred.resolve();
        }, function(err) {
          deferred.reject();
        });

        return deferred.promise;
      },

      logout: function(){
        var deferred = $q.defer();

        $http.get('/logout').then(function(res){
          deferred.resolve();
        }, function(err){
          deferred.reject();
        });

        return deferred.promise;
      },

      getCurrentUser: function() {
        var deferred = $q.defer();

        $http.get('/current-user').then(function(res){
          securityService.currentUser = res.data;
          deferred.resolve(securityService.currentUser);
        }, function(err){
          securityService.currentUser = null;
          deferred.resolve(securityService.currentUser);
        });

        return deferred.promise;
      },

      isAuthenticated: function() {
        var deferred = $q.defer();

        securityService.getCurrentUser().then(function(user){
          if (user)
            deferred.resolve(securityService.AUTHORIZED);
          else
            deferred.reject(securityService.UNAUTHORIZED);
        });

        return deferred.promise;
      },

      isSuperAdmin: function() {
        var deferred = $q.defer();

        securityService.getCurrentUser().then(function(user){
          if (user && user.superAdmin)
            deferred.resolve(securityService.AUTHORIZED);
          else
            deferred.reject(securityService.UNAUTHORIZED);
        });

        return deferred.promise;
      }

    };

    return securityService;
  }

})();
