'use strict';

var app = angular.module('portfolio', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	// Adding this to test
	$routeProvider.when('/home', {
		templateUrl: 'partials/home/home.html',
		controller: 'HomeCtrl'
	});
	$routeProvider.when('/contact', {
		templateUrl: 'partials/contact/contact.html',
		controller: 'ContactCtrl'
	});
	$routeProvider.otherwise({redirectTo: '/home'});
}]);

app.controller('appCtrl', ['$scope', function($scope) {
	//Variables and Objects
	$scope.navMode = 'full';	
	//Helper Functions
	var isMobile = function(){
		if($(window).width() < 765){
			return true;
		}else{
			return false;
		};
	};
	//Init
	if(isMobile()){
		$scope.navMode = 'mobile';
	}
	$(window).resize(function(){
		$scope.$apply(function(){
			if(isMobile()){
				$scope.navMode = 'mobile';
			}else{
				$scope.navMode = 'full';
			};
			console.log("navMode: ", $scope.navMode);
		});
	});
}]);
