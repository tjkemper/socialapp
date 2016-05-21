angular.module('SocialApp')
.controller('ApplicationCtrl', function($scope, UserService){
	var appData = this;

	//Check to see if user is logged in
	if(window.localStorage.token){
		UserService.addJwtTokenToRequests(window.localStorage.token);
		UserService.getUser().then(function(response){
			appData.currentUser = response.data;
		}, function(response){});
	}

	$scope.$on('login', function(_, user){
		appData.currentUser = user;
	});

	appData.logout = function(){
		appData.currentUser = null;
		delete window.localStorage.token;
		UserService.removeJwtTokenFromRequests();
	}
});