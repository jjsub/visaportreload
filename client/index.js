(function(){
  'use strict';

  angular.module('visaPort', ['ngRoute', 'LocalForageModule', 'angular-loading-bar', 'angucomplete','jjWeatherModule'])
  .config(['$routeProvider', '$httpProvider', '$localForageProvider', function($routeProvider, $httpProvider, $localForageProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/travel', {templateUrl:'/views/travel/travel.html', controller:'TravelCtrl'})
    .when('/register', {templateUrl:'/views/register/register.html', controller:'RegisterCtrl'})
    .when('/login',    {templateUrl:'/views/login/login.html',       controller:'LoginCtrl'})
    .when('/logout',   {templateUrl:'/views/logout/logout.html',     controller:'LogoutCtrl'})
    .otherwise({redirectTo:'/'});

    $httpProvider.interceptors.push('HttpInterceptor');
    $localForageProvider.config({name:'visaPort', storeName:'cache', version:1.0});
  }]).controller('IndexCtrl', ['$scope', '$interval', 'Travel','$http', 'Weather', function($scope, $interval, Travel, $http, Weather){
    $scope.img  = '';
    $scope.randomImage = function(){
    var bgImage    = ['./assets/image/SnowTracks_web.jpg',
                      './assets/image/wings-web1.jpg',
                      './assets/image/IndonesianLanding_BW_web.jpg',
                      './assets/image/CrossWalk_web.jpg',
                      './assets/image/bgimages/Motel-photo-4.jpg',
                      './assets/image/bgimages/BWCity.jpg',
                      './assets/image/bgimages/Sapsido.jpg',
                      './assets/image/bgimages/SunsetPlane.jpg',
                      './assets/image/bgimages/GreenTeaField.jpg',
                      './assets/image/bgimages/budaday.jpg',
                      './assets/image/bgimages/Birdies.jpg',
                      './assets/image/bgimages/KoreanMarket.jpg',
                      './assets/image/AirplaneWing_web.jpg'],
        shuffeled  = _.shuffle(bgImage),
        shuffeled2 = _.shuffle(shuffeled);
     // return shuffeled[0];
     $scope.img = shuffeled2[0];
    };
    $scope.randomImage();
  }]);
})();

