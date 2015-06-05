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

	
	var menuVisible = false;
	$('#menu-icon').click(function() {
		if (menuVisible) {
			$('#menu').css({'display':'none'});
			menuVisible = false;
			return;
		}
		$('#menu').css({'display':'block'});
		menuVisible = true;
	});
	$('#menu').click(function() {
		if(isMobile()){
			$(this).css({'display':'none'});
			menuVisible = false;
		}
	});
	
	
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
				$('#menu').css({'display':'block'});
			};
			console.log("navMode: ", $scope.navMode);
		});
	});
});
