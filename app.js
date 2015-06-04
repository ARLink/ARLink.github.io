'use strict';

var app = angular.module('portfolio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/home', {
		templateUrl: 'partials/home/home.html',
		controller: 'homeCtrl'
	});
	$routeProvider.when('/contact', {
		templateUrl: 'partials/contact/contact.html',
		controller: 'contactCtrl'
	});
	$routeProvider.otherwise({redirectTo: '/home'});
}])

.controller('app', function($scope) {
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
