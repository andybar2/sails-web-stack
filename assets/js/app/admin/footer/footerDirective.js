(function() {
  'use strict';

  angular
    .module('adminModule')
    .directive('appfooter', footerDirective);

  function footerDirective() {
    // Usage:
    //   <appfooter/>
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: "templates/admin/footer/footerView.html"
    };

    return directive;
  }
})();