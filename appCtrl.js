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

.controller('appCtrl', ['$scope', function($scope) {
	
}]);
