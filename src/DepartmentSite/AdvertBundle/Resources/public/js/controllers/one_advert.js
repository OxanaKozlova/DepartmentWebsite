var data = [];
var news_index = 0;

(function() {
  'use strict';
  angular.module('bsuir-ecm').controller('OneAdvertCtrl', function($scope, $http) {
    $scope.advert = JSON.parse(data);
  });

  angular.module('bsuir-ecm').filter('toHTML', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);

}).call(this);