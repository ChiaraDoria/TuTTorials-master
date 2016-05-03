'use strict';

angular.module('tuttorialApp.video.details', ['ngRoute', 'tuttorialApp.video'])

    // Route Config
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/video/:tuttorialId', {
        templateUrl: 'tuttorial_details/tuttorial_details.html',
        controller: 'TuttorialDetailCtrl'
      });
    }])

    // Controller
    .controller('TuttorialDetailCtrl', ['$scope', '$routeParams', 'Tuttorial',
      function($scope, $routeParams, Tuttorial) {
       Tuttorial.getData($routeParams.tuttorialId).then(function(data) {
          $scope.video = data;
        });
      }]);