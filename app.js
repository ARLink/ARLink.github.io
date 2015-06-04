'use strict';

var app = angular.module('portfolio', ['ngRoute','portfolio.home','portfolio.contact']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.otherwise({redirectTo: '/home'});
}]);

app.controller('appCtrl', function($scope) {
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
});
