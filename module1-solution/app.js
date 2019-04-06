(function () {

'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.lunchItems = "";
      $scope.determineCount = function () {
        var str = $scope.lunchItems;
        var items = str.split(',')
        var count = items.length;
        //'count is for testing purposes only'
        return count;

        $scope.conditionalMessage = function () {
          if ($scope.lunchItems.length < 3) {
              return "Enjoy!"
          } else {
            return "Too Much!"
          }
        };


      };
      $scope.displayTest = function () {
        if (items.length < 3) {
            return "too little"
        } else {
          return "too little"
        }
      }
  }

})();
