(function() {
  'use strict';

  angular
    .module('commonModule')
    .factory('tooltipService', tooltipService);

  tooltipService.$inject = ['$timeout'];

  /* @ngInject */
  function tooltipService($timeout) {
    var tooltipService = {
      init: function() {
        $timeout(function(){
          $('[data-toggle="tooltip"]').tooltip();
        }, 500);
      }
    };

    return tooltipService;
  }
})();