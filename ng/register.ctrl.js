angular.module('SocialApp')
.controller('RegisterCtrl', function(UserService, $scope){

	var registerData = this;

	registerData.register = function(username, password){
		UserService.register(username, password).then(function(response){
			UserService.login(username, password).then(function(response){
				console.log(response);
				$scope.$emit('login', response.data);
			}, function(response){});
		}, function(response){});
	}


});