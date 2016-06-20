'use strict';

angular.module('wspomagaczDietyApp')
  .service('firstService', function ($http) {

    this.getProduct = function (value) {
      $http({
        method: 'GET',
        url: 'http://localhost:8080/search?product=' + value
      }).then(function successCallback(response) {
        console.log(response)
      }, function errorCallback(response) {
        console.log(response)
      });
    }
  });
