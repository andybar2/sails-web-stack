(function(){
  "use strict";

  angular.module('app', [
    /* Angular Modules */
    'ngRoute', 'ngAnimate', 'ngStorage',
    /* Third Party Modules */
    'toastr',
    /* App Modules */
    'commonModule', 'adminModule', 'publicModule'
  ]);

  angular.module('app').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  }]);

})();
