/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('visaPort')
  .controller('TravelCtrl', ['$scope', '$interval', 'Travel','$http', function($scope, $interval, Travel, $http){
    $scope.country = '';
    $scope.hasSearched = false;

     var passportImages = [
      '../assets/image/passport/UniteState-passport.jpg',
      '../assets/image/passport/DominicanRep_passport.jpg',
      '../assets/image/passport/Jordan-passport.jpg',
      '../assets/image/passport/China_passport.jpg',
      '../assets/image/passport/India_Passport.jpg',
      '../assets/image/passport/Japanpassport.png',
      '../assets/image/passport/UnitedKingdom_passport.jpg',
      '../assets/image/passport/lebano-passport.png',
      '../assets/image/passport/KORPassport.jpg',
      '../assets/image/passport/Mexican_passport.jpg',
      '../assets/image/passport/Germany_passport.jpg',
      '../assets/image/passport/Kenyan_passport.jpg',
      '../assets/image/passport/Canada-passport.jpg',
      '../assets/image/passport/Russia_Passport.jpg',
      '../assets/image/passport/Thailand_Passport.jpg',
      '../assets/image/passport/Brazil_Passport.jpg',
      '../assets/image/passport/France-passport.jpg',
      '../assets/image/passport/Australian_Passport1.jpg'
    ],
      visaMap =['../assets/image/visamaps/visamapUSA.png'
    ];

   $scope.findCountry = function(){
      Travel.findCountry($scope.countryTo, $scope.countryFrom).then(function(response){
        $scope.countryOne = response.data;
        console.log(response.data);
        $scope.hasSearched = true;
      });
    };

   $scope.selectCollection = function(collection){
     Travel.allCountry(collection).then(function(response){
       $scope.passImage(collection);
       $scope.allCountry = response.data.Country;
    });
   };

   $scope.passImage = function(country){
    if(country === 'usavisarequire'){
      $scope.flag    = passportImages[0];
      $scope.visaMap = visaMap[0];
    }
    if(country === 'dominicanvisarequire'){
      $scope.flag  = passportImages[1];
    }
    if(country === 'Jordanvisarequire'){
      $scope.flag  = passportImages[2];
    }
    if(country === 'Chinavisarequire'){
      $scope.flag  = passportImages[3];
    }
    if(country === 'Indiavisarequire'){
      $scope.flag  = passportImages[4];
    }
    if(country === 'Japanvisarequire'){
      $scope.flag  = passportImages[5];
    }
    if(country === 'UKvisarequire'){
      $scope.flag  = passportImages[6];
    }
    if(country === 'lebanovisarequire'){
      $scope.flag  = passportImages[7];
    }
    if(country === 'SKvisarequire'){
      $scope.flag  = passportImages[8];
    }
    if(country === 'Mexicovisarequire'){
      $scope.flag  = passportImages[9];
    }
    if(country === 'Germanyvisarequire'){
      $scope.flag  = passportImages[10];
    }
    if(country === 'Kenyavisarequire'){
      $scope.flag  = passportImages[11];
    }
    if(country === 'Canadavisarequire'){
      $scope.flag  = passportImages[12];
    }
    if(country === 'Russiavisarequire'){
      $scope.flag  = passportImages[13];
    }
    if(country === 'Thailandvisarequire'){
      $scope.flag  = passportImages[14];
    }
    if(country === 'Brazilvisarequire'){
      $scope.flag  = passportImages[15];
    }
    if(country === 'Francevisarequire'){
      $scope.flag  = passportImages[16];
    }
    if(country === 'Australiavisarequire'){
      $scope.flag  = passportImages[17];
    }
   };
  }]);
})();
