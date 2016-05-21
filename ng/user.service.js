angular.module('SocialApp')
.service('UserService', function($http){
	var userService = this;

	userService.getUser = function(){
		return $http({
			method:'GET',
			url: '/api/users'
		});
	}

	userService.login = function(username, password){
		return $http({
			method:'POST',
			url:'/api/sessions',
			data: {username:username, password:password}
		}).then(function(response){
			userService.token = response.data;
			$http.defaults.headers.common['X-Auth'] = response.data;
			return userService.getUser();
		});
	}

	userService.register = function(username, password){
		return $http({
			method:'POST',
			url:'/api/users',
			data:{username:username, password:password}
		}).then(function(response){
			
		},function(response){});
	}

});