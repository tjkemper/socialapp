angular.module('SocialApp')
.controller('ApplicationCtrl', function($scope){
	var appData = this;
	$scope.$on('login', function(_, user){
		appData.currentUser = user;
	});
});