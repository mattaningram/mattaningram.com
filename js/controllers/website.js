angular.module('website.controllers')
  .controller('WebsiteController', ['$scope',
    function ($scope) {
      var numLogos = 2;
      $scope.logoNum = Math.floor((Math.random() * numLogos) + 1);
      // $scope.logoNum = 1;
    }]);