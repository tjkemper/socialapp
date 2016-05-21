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
			
			window.localStorage.token = response.data; //add token to localStorage
			userService.addJwtTokenToRequests(response.data); //add token to all requests
			
			//userService.token = response.data;
			//$http.defaults.headers.common['X-Auth'] = response.data;
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

	userService.addJwtTokenToRequests = function(token){
		$http.defaults.headers.common['X-Auth'] = token;
	}

	userService.removeJwtTokenFromRequests = function(){
		$http.defaults.headers.common['X-Auth'] = null;
	}

});