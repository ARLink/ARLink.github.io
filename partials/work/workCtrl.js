'use strict';

angular.module('portfolio')
.controller('workCtrl', ['$scope', function($scope) {
	
	$(document).ready(function() {
		if($scope.navMode == 'mobile') {
			$(".content").toggle();
		};
		
		$(".heading").click(function() {
			if($scope.navMode == 'mobile') {
				if(this.id == 'projectHeader') {
					$("#projectContent").slideToggle("fast");
				} 
				else if(this.id == 'sampleHeader') {
					$('#sampleContent').slideToggle("fast");
				};
			};
		});
	});
}]);