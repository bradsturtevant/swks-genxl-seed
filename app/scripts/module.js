'use strict';

var components = angular.module('swks.components', []);
angular.componentFactory.moduleDecorator(components);

var app = angular.module('swks', [
  'kennethlynne.componentFactory',
  'ngSymbiosis.utils',
  'ngSymbiosis.routeProvider',
  'ngSymbiosis.repository',
  'ngSymbiosis.model',
  'swks.components',
  'ngAnimate',
  'ajoslin.promise-tracker',
  'cgBusy',
  'chieffancypants.loadingBar',
  'ui.router',
  'ui.bootstrap',
  'ngCookies',
  'ngResource',
  'restangular',
  'ngSanitize',
  'ngTouch',
  'xeditable',
  'ngStorage'
]);
angular.componentFactory.moduleDecorator(app);