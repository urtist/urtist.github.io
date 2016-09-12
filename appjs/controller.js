var myApp = angular.module("myAppControllers",[]);
myApp.controller('navController',['$scope','$http','$timeout',function($scope,$http,$timeout){
$scope.updates = [];

$scope.nav = function(clicked)
{
	$(".navelem").removeClass("navselected");
    $("#"+clicked).find(".navelem").addClass("navselected");
	if(clicked == 'event' || clicked == 'wkshop')
	{
		$(".header").fadeOut(0).finish();
		$("."+clicked+"header").fadeIn(0).finish();
	}
	if(clicked == 'gl' || clicked == 'karnival')
	{
		$(".header").fadeOut(0).finish();
		

	}
	
};


}]);

/*EVENTS*/
myApp.controller('masonryController',['$scope','$http','$location','$timeout',function($scope,$http,$location,$timeout){
$scope.bricks = [
{src:'images/portraits/abs22.jpg'},
{src:'images/nature/water.jpg'},
{src:'images/nature/flowers.jpg'},
{src:'images/nature/kitty.jpg'},
{src:'images/comics/comic24.jpg'},
{src:'images/comics/comic34.jpg'},
{src:'images/comics/comic12.jpg'},
{src:'images/comics/comic15.jpg'},
{src:'images/comics/comic25.1.jpg'},
{src:'images/comics/comic28.jpg'},
];

$scope.pbricks = [
{src:'images/portraits/abs22.jpg'},
{src:'images/nature/water.jpg'},
{src:'images/nature/flowers.jpg'},
{src:'images/nature/kitty.jpg'},
{src:'images/comics/comic24.jpg'},
{src:'images/comics/comic34.jpg'},
{src:'images/comics/comic12.jpg'},
{src:'images/comics/comic15.jpg'},
{src:'images/comics/comic25.1.jpg'},
{src:'images/comics/comic28.jpg'},
];

$scope.nbricks = [
{src:'images/portraits/abs22.jpg'},
{src:'images/nature/water.jpg'},
{src:'images/nature/flowers.jpg'},
{src:'images/nature/kitty.jpg'},
{src:'images/comics/comic24.jpg'},
{src:'images/comics/comic34.jpg'},
{src:'images/comics/comic12.jpg'},
{src:'images/comics/comic15.jpg'},
{src:'images/comics/comic25.1.jpg'},
{src:'images/comics/comic28.jpg'},
];
$scope.sbricks = [
{src:'images/portraits/abs22.jpg'},
{src:'images/nature/water.jpg'},
{src:'images/nature/flowers.jpg'},
{src:'images/nature/kitty.jpg'},
{src:'images/comics/comic24.jpg'},
{src:'images/comics/comic34.jpg'},
{src:'images/comics/comic12.jpg'},
{src:'images/comics/comic15.jpg'},
{src:'images/comics/comic25.1.jpg'},
{src:'images/comics/comic28.jpg'},
];
$scope.cbricks = [
{src:'images/portraits/abs22.jpg'},
{src:'images/nature/water.jpg'},
{src:'images/nature/flowers.jpg'},
{src:'images/nature/kitty.jpg'},
{src:'images/comics/comic24.jpg'},
{src:'images/comics/comic34.jpg'},
{src:'images/comics/comic12.jpg'},
{src:'images/comics/comic15.jpg'},
{src:'images/comics/comic25.1.jpg'},
{src:'images/comics/comic28.jpg'},
];




}]);
