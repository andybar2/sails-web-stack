(function() {
  'use strict';

  angular
    .module('commonModule')
    .directive('loading', loadingDirective);

  function loadingDirective() {
    // Usage:
    //   <loading flag="loading"/>
    // At your controller, show/hide the spinner as needed:
    //   $scope.loading = true/false;
    var directive = {
      restrict: 'E',
      template: '<div ng-class="customClass"><i class="fa fa-spinner fa-pulse fa-2x text-success" ng-show="showFlag"></i></div>',
      replace: true,
      scope: {
        showFlag: "=flag",
        customClass: "=class"
      }
    };

    return directive;
  }
})();
