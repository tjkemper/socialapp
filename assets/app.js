angular.module("SocialApp",[]);

angular.module("SocialApp")
.controller("PostsCtrl", function($http){
	var postsData = this;
	postsData.posts = [];

	$http({
		method:'GET',
	  	url:'/api/posts'
	}).then(function(response){
	  	postsData.posts = response.data;
	},function(response){});

	postsData.addPost = function(){
	  	if(postsData.newMsg){
        
	        $http({
	        	method:'POST',
	        	url:'/api/posts',
	        	data:{
	            	username:'john',
	            	body:postsData.newMsg.body
	          	}
	        }).then(function(response){
	        	postsData.posts.unshift(response.data);
	        	postsData.newMsg = null;  
	        },function(response){});

	    }
	}

});
  	
