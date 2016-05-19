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

      .state('table', {
        url: '/table',
        templateUrl: 'views/table.html',
        controller: 'TableCtrl'
      })
  }
);
