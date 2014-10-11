angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(userUrl) {
    Links.postLinks(userUrl).then(function(result){
      $scope.link.links = result.data; //?????
    })
  };
});
