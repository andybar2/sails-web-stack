(function(){
  "use strict";

  angular.module('publicModule', []);

  angular.module('publicModule').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/public/publicView.html'
      });
  }]);

})();
