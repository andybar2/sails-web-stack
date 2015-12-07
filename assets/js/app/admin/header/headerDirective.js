(function() {
  'use strict';

  angular
    .module('adminModule')
    .directive('appheader', headerDirective);

  function headerDirective() {
    // Usage:
    //   <appheader/>
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: "templates/admin/header/headerView.html"
    };

    return directive;
  }
})();