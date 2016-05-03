'use strict';

// Declare app level module which depends on views, and components
angular.module('tuttorialApp', [
  'ngRoute',
  'ui.bootstap',
  'tuttorialApp.video.list',
  'tuttorialApp.video.details',
  'tuttorialApp.video',
  'tuttorialApp.navigation'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/videos'});
}]);