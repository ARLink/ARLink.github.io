'use strict';

angular.module('portfolio', ['ngRoute','portfolio.home','portfolio.contact'
])
.config(['$routeProvider', function($routeProvider){
	$routeProvider.otherwise({redirectTo: '/home'});
}]);
