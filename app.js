'use strict';

var app = angular.module('portfolio', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	// Adding this to test
	$routeProvider.when('/home', {
		templateUrl: 'partials/home/home.html',
		controller: 'homeCtrl'
	});
	$routeProvider.when('/about', {
		templateUrl: 'partials/about/about.html',
		controller: 'aboutCtrl'
	});
	$routeProvider.when('/contact', {
		templateUrl: 'partials/contact/contact.html',
		controller: 'contactCtrl'
	});
	$routeProvider.otherwise({redirectTo: '/home'});
}]);

app.controller('app', function($scope) {
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
	
	var el = document.getElementById('menu-icon');

	el.onclick = function() {
		if(document.getElementById('menu').className == "showMenu") {
			document.getElementById('menu').className = "hideMenu";
		}
		else {
			document.getElementById('menu').className = "showMenu";
		}
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
