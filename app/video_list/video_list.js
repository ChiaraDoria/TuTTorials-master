'use strict';

angular.module('tuttorialApp.video.list', ['ngRoute', 'tuttorialApp.pizza'])

    // Route Config
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/videos', {
        templateUrl: 'video_list/video_list.html',
        controller: 'VideoListCtrl'
      });
    }])

    // Controller
    .controller('VideoListCtrl', ['$scope', 'Video',
      function($scope, Video) {
        Pizza.getData('videos').then(function(data) {
          console.log(data);
          $scope.videos = data;
        });
        $scope.orderProp = 'id';
      }]);