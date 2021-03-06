'use strict';

angular.module('portfolio')
.controller('aboutCtrl', ['$scope', function($scope) {
	$(document).ready(function() {
		if($scope.navMode == 'mobile') {
			$(".content").toggle();
		};
		
		$(".heading").click(function() {
			if($scope.navMode == 'mobile') {
				if(this.id == 'aboutHeader') {
					$("#aboutContent").slideToggle("fast");
				} 
				else if(this.id == 'contactHeader') {
					$('#contactContent').slideToggle("fast");
				};
			};
		});
	});
}]);
