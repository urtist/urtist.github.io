var myApp = angular.module('myApp',['wu.masonry','ngRoute','ngSanitize','myAppControllers','myAppDirectives']);
myApp.config(['$routeProvider', function($routeProvider) {
                $routeProvider.when("/", {templateUrl: "partials/home-gallery.html"});
                $routeProvider.when("/portraits", {templateUrl: "partials/p-gallery.html"});
                $routeProvider.when("/comics", {templateUrl: "partials/c-gallery.html"});
                $routeProvider.when("/still-life", {templateUrl: "partials/s-gallery.html"});
                $routeProvider.when("/nature", {templateUrl: "partials/n-gallery.html"});
                $routeProvider.when("/about", {templateUrl: "partials/about.html"});
                $routeProvider.when("/contact", {templateUrl: "partials/contact.html"});
                $routeProvider.otherwise({redirectTo: '/'});
                }]);
