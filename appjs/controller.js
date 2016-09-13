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

$scope.pagetitle = $location.path().substr(1);
$scope.bricks = [
{src:'images/portraits/abs22.jpg',id:1},
{src:'images/nature/water.jpg',id:2},
{src:'images/nature/flowers.jpg',id:3},
{src:'images/nature/kitty.jpg',id:4},
{src:'images/comics/comic24.jpg',id:5},
{src:'images/comics/comic34.jpg',id:6},
{src:'images/comics/comic12.jpg',id:7},
{src:'images/comics/comic15.jpg',id:8},
{src:'images/comics/comic25.1.jpg',id:9},
{src:'images/comics/comic28.jpg',id:10},
];

$scope.pbricks = [
{src:'images/portraits/abs22.jpg',id:1},
{src:'images/portraits/jin22.jpg',id:2},
{src:'images/portraits/nivi22.jpg',id:3},
{src:'images/portraits/feez 21st.jpg',id:4},
{src:'images/portraits/pujo.jpg',id:5},
{src:'images/portraits/pink mom.jpg',id:6},
{src:'images/portraits/anusha.jpg',id:7},
{src:'images/portraits/anu mami.jpg',id:8},

];

$scope.nbricks = [
{src:'images/nature/flowers.jpg',id:1},
{src:'images/nature/kitty.jpg',id:2},
{src:'images/nature/banana.jpg',id:3},
];
$scope.sbricks = [
{src:'images/nature/dahlias.jpg',id:1},
{src:'images/comics/comic24.jpg',id:2},
{src:'images/nature/scenery.jpg',id:3},
{src:'images/nature/desert.jpg',id:4},
{src:'images/nature/water.jpg',id:5},
];
$scope.cbricks = [
{src:'images/comics/comic34.jpg',id:1},
{src:'images/comics/comic6.jpg',id:2},
{src:'images/comics/comic8.jpg',id:3},
{src:'images/comics/comic12.jpg',id:4},
{src:'images/comics/comic13-1.jpg',id:5},
{src:'images/comics/comic15.jpg',id:6},
{src:'images/comics/comic9.jpg',id:7},
{src:'images/comics/comic25.1.jpg',id:8},
{src:'images/comics/comic28.jpg',id:9},
{src:'images/comics/comic26.jpg',id:10},
];
$scope.img_id = "";
$scope.category = "";
$scope.show_image = function(img_src,img_id){
$(".main").animate({'opacity':"0.1"});
$(".image-viewer").addClass("showme").append("<img class='col-md-6 view-img' src='"+img_src+"'/>");
$(".image-viewer").append("<div class='desc col-md-6 '>Desc</div>");
};
$scope.close = function(){
	$(".main").animate({'opacity':1},100);
	$(".image-viewer").removeClass("showme",100);
	$(".image-viewer").find(".view-img").remove();
	$(".image-viewer").find(".desc").remove();

};

}]);
