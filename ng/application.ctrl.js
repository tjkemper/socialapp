angular.module('SocialApp')
.controller('ApplicationCtrl', function($scope, UserService){
	var appData = this;
	$scope.$on('login', function(_, user){
		appData.currentUser = user;
	});

	appData.logout = function(){
		appData.currentUser = null;
		UserService.removeJwtToken();
	}
});