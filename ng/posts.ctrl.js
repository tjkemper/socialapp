angular.module("SocialApp")
.controller("PostsCtrl", function(PostsService){
	var postsData = this;
	postsData.posts = [];

	PostsService.fetch().then(function(response){
	  	postsData.posts = response.data;
	},function(response){});

	postsData.addPost = function(){
	  	if(postsData.newMsg){
        	PostsService.create(postsData.newMsg).then(function(response){
	        	postsData.posts.unshift(response.data);
	        	postsData.newMsg = null;  
	        },function(response){});

	    }
	}

});