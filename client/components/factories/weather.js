/*
(function(){
  'use strict';

  angular.module('visaPort')
  .factory('Weather', ['$http', function($http){
    function getConditions(country){
      return $http.jsonp('http://api.wunderground.com/api/f0e6fdcbf9d5f727/conditions/q/' + country + '.json?callback=JSON_CALLBACK');
    }

    return {getConditions:getConditions};
  }]);
})();
*/
