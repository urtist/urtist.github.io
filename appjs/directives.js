var myApp = angular.module('myAppDirectives',[]);
myApp.directive('compile', ['$compile', function ($compile) {

				return function(scope, element, attrs) {

				var ensureCompileRunsOnce = scope.$watch(

						function(scope) {

						return scope.$eval(attrs.compile);

						},

						function(value) {

						console.log(value);

						element.html(value);

						$compile(element.contents())(scope);

						}

				);

				};

}]);
myApp.directive('tabsAnim', function() {
        console.log("tabsAnim");
        return{
        scope:{},
        restrict: 'AEC',
        replace:'true',
        link: function(scope,elem,attrs,$location){
$(document).ready(function(){
$(".close").click(function(){
  closeall();
});
function closeall(){
    $(".imagebox").each(function(){
    
  $(".navbar").show();
  $(".category").show();
      var elem = $(this);
      setTimeout(function(){
        $(elem).animate({'opacity':"1",'margin-left':"0px"},100);
      },i*50+50);
    });
    $(".left").animate({'marginLeft':"-100%"},300,'easeInOutQuad');
}

$(".navbar-toggle").click(function(){
  closeall();
  
});
});
           }
        };
    });
