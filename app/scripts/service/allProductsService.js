'use strict';

angular.module('wspomagaczDietyApp')
  .service('allProductsService', function ($http) {
    this.getAllProducts = function () {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/all'
      })
    }
  });
