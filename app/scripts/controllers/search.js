'use strict';

angular.module('wspomagaczDietyApp')
  .controller('SearchCtrl', function ($scope, searchService) {
    $scope.product = '';
    $scope.search = function() {
        searchService.getProduct($scope.productName).then(function successCallback(response) {
            $scope.product = response.data;
        }, function errorCallback(response) {
            console.log('ERROR: ' + response)
        });
    };
  });
