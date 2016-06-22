'use strict';

angular.module('wspomagaczDietyApp')
  .service('searchService', function ($http) {
    this.getProduct = function (value) {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/search?product=' + value
      })
    }
  });
