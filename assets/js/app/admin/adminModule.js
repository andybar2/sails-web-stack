(function(){
  "use strict";

  angular.module('adminModule', []);
  angular.module('adminModule').config(['$routeProvider', configApp]);
  angular.module('adminModule').run(['$rootScope', 'securityService', '$location', '$localStorage', runApp]);

  function configApp($routeProvider) {
    $routeProvider
      .when('/admin', {
        redirectTo: '/admin/login'
      })
      .when('/admin/login', {
        templateUrl: 'templates/admin/login/loginView.html'
      })
      .when('/admin/not-authorized', {
        templateUrl: 'templates/admin/notAuthorizedView.html'
      })
      .when('/admin/dashboard', {
        templateUrl: 'templates/admin/dashboard/dashboardView.html',
        resolve: {
          access: ['securityService', isAuthenticated],
          menu: function(){ return 'dashboard'; }
        }
      })
      .when('/admin/users', {
        templateUrl: 'templates/admin/users/listUsersView.html',
        resolve: {
          access: ['securityService', isSuperAdmin],
          menu: function(){ return 'users'; }
        }
      })
      .when('/admin/user/add', {
        templateUrl: 'templates/admin/users/addUserView.html',
        resolve: {
          access: ['securityService', isSuperAdmin],
          menu: function(){ return 'users'; }
        }
      });
  }

  function runApp($rootScope, securityService, $location, $localStorage) {
    $rootScope.$on('$routeChangeError', function(event, current, previous, access) {
      if (access != securityService.AUTHORIZED)
        $location.path('/admin/not-authorized');
    });

    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
      $localStorage.menu = current.locals.menu;
    });
  }

  function isAuthenticated(securityService) { 
    return securityService.isAuthenticated(); 
  }

  function isSuperAdmin(securityService) { 
    return securityService.isSuperAdmin(); 
  }
})();
