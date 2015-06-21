angular.module('website.directives')
  .directive('randomLineM', [
    function () {
      return {
        replace: true,
        templateUrl: 'views/random-line-m.html',
        link: function (scope, elem, attrs) {
          var numLines = 240;
          var radius = 75;
          scope.lines = [];

          for (var i=0; i<numLines; i++) {
            var rand1 = -Math.PI + Math.random()*Math.PI*2;
            var rand2 = -Math.PI + Math.random()*Math.PI*2;
            scope.lines.push({
              x1: 50+radius*Math.cos(rand1),
              y1: 50+radius*Math.sin(rand1),
              x2: 50+radius*Math.cos(rand2),
              y2: 50+radius*Math.sin(rand2),
              delayVal: .3+Math.random()*1.5,
              opacityVal: 0.1+Math.random()*0.9
            });
          }
        }
      }
    }]);