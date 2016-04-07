/* jshint camelcase:false  */
(function(){
  'use strict';

  angular.module('jjWeatherModule',[])
  .factory('weatherApi',['$http', function($http){
    function conditions(zip){
    return $http.jsonp('http://api.wunderground.com/api/f0e6fdcbf9d5f727/conditions/q/' + zip + '.json?callback=JSON_CALLBACK');
    }

    return {conditions:conditions};
  }])

  .directive('jjWeather', [function(){

    var o = {};

    o.restrict = 'A';                                                                                 // herre is to tell how it can be use A = atribute,C = class,D,M = comment
    o.templateUrl = '/components/directives/jj-weather/jj-weather.html';
    o.scope       = {zip:'='};                                                                                      // true create his how schope and hereda from his parent - false the used there own + there one from his parents. {} = Is asolated and only work with his own scope
    o.link        =   function(scope, element, attrs){                         // Link is a function that take 3 parameters ( $scope, element= is th div, atributte ) Is like havin a controller in the div
                      };

    o.controller  =  ['$scope', 'weatherApi', function($scope, weatherApi){
                       $scope.$on('position', function(event, pos){
                         if($scope.zip){return;}
                         console.log('i am the weather ', pos);
                         var query = pos.coords.latitude +','+ pos.coords.longitude;
                         weatherApi(query);
                       });

                      function getConditions(query){
                        weatherApi.conditions($scope.zip).then(function(response){
                          $scope.temperature = response.data.current_observation.temp_f;
                          $scope.icon = response.data.current_observation.icon_url;
                        });

                      }
                      if($scope.zip){getConditions($scope.zip);}
                    }];
    return o;
  }]);
})();
