'use strict';

angular.module('wspomagaczDietyApp')
  .controller('AllProductsCtrl', function ($scope, allProductsService) {
    $scope.product = ''
    allProductsService.getAllProducts().then(function successCallback(response) {
      $scope.product = response.data;
    }, function errorCallback(response) {
      console.log('ERROR: ' + response)
    });
  });
