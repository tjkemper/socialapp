angular.module('SocialApp')
.config(function($routeProvider){
	$routeProvider
	.when('/', {controller: 'PostsCtrl as postsCtrl', templateUrl: 'posts.html'})
	.when('/register', {controller: 'RegisterCtrl as registerCtrl', templateUrl: 'register.html'})
	.when('/login', {controller: 'LoginCtrl as loginCtrl', templateUrl: 'login.html'});
});