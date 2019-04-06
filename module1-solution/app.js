(function () {

'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.lunchItems = "";
      $scope.determineCount = function () {
        //var lunchItems = ["item1", "item2", "Item3"];
        //var lunchItems = ["item1", "item2", "Item3"];
        var str = $scope.lunchItems;
        var items = str.split(',')
        var count = items.length;
        return count;

        $scope.conditionalMessage = function () {
          if ($scope.lunchItems.length < 3) {
              return "too little"
          } else {
            return "too little"
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
