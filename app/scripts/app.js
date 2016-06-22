'use strict';

/**
 * @ngdoc overview
 * @name wspomagaczDietyApp
 * @description
 * # wspomagaczDietyApp
 *
 * Main module of the application.
 */
angular
  .module('wspomagaczDietyApp', [
    'ngAnimate',
    'ui.router'
  ])

  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })

      .state('search', {
        url: '/search',
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })

      .state('allProducts', {
        url: '/all',
        templateUrl: 'views/allProducts.html',
        controller: 'AllProductsCtrl'
      })
  }
);
