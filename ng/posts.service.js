angular.module("SocialApp")
.service("PostsService", function($http){
	var postsService = this;

	postsService.fetch = function(){
		return 	$http({
					method : 'GET',
					url : '/api/posts'
				});
	}

	postsService.create = function(post){
		return 	$http({
	        		method:'POST',
	        		url:'/api/posts',
	        		data:{
		            	//username:'john',
		            	body:post
	    	      	}
	        	});
	}
});