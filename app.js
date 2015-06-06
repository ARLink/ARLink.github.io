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
	$routeProvider.when('/work', {
		templateUrl: 'partials/work/work.html',
		controller: 'workCtrl'
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

	$(function() {
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
			if($scope.navMode == 'mobile'){
				$(this).css({'display':'none'});
				menuVisible = false;
			};
		});
	});
	
	
	//Init
	if(isMobile()){
		$scope.navMode = 'mobile';
	}
	$(window).resize(function(){
		$scope.$apply(function(){
			if(isMobile()){
				$scope.navMode = 'mobile';
				$('.content').css({'display':'none'});
			}else if(!isMobile()){
				$scope.navMode = 'full';
				$('#menu').css({'display':'block'});
				$('.content').css({'display':'block'});
			};
		});
	});
});
