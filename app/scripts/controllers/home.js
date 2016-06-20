'use strict';

angular.module('wspomagaczDietyApp')
  .controller('HomeCtrl', function (firstService) {
    firstService.getProduct('dupa');
  });
