angular.module('website.directives')
  .directive('redBlueM', [
    function () {
      return {
        replace: true,
        templateUrl: 'views/red-blue-m.html'
      }
    }]);