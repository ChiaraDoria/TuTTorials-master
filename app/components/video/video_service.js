'use strict';

angular.module('tuttorialApp.video.service', [])



    .factory('Tuttorial', function($http) {
      var videoService = {
        getData: function (id) {
          return $http.get('../data/' + id + '.json').then(function (response) {
            return response.data;
          });
        }
      }
      return videoService;
    });