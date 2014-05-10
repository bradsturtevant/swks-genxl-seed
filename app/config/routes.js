'use strict';

angular.module('swks')
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise("/error?code=404");
  });
