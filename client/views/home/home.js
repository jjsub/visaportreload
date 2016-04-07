(function(){
  'use strict';

  angular.module('visaPort')
  .controller('HomeCtrl', ['$scope', 'Home', function($scope,Home){
    Home.getMessage().then(function(response){
     // $scope.mean = response.data.mean;

      //$interval(function(){
        //$scope.mean = _.shuffle($scope.mean);
     // }, 100);
    });
  }]);
})();

