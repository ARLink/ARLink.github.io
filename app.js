var app = angular.module("portfolio", []);
var controllers = {};

controllers.mainController = function($scope){
	//Variables and Objects
	$scope.navMode = 'full';
	
	//Helper Functions
	$scope.scrollTo = function(section){
		$('html, body').animate({
			scrollTop: $(section).offset().top-65
		}, 600);
		
		if($scope.navMode == 'mobile'){
			$(".navbar-toggle").click();
		}
	};
	
	$scope.toTop = function(){
		$('html, body').animate({
			scrollTop: $('#page-top').offset().top-65
		}, 600);
	}

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
		});
	});
};
 
app.controller(controllers);