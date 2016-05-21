angular.module("SocialApp")
.controller('LoginCtrl', function(UserService, $scope){
	var loginData = this;

	loginData.login = function(username, password){
		UserService.login(username, password)
		.then(function(response){
			console.log(response);
			$scope.$emit('login', response.data);
		});
	}
});