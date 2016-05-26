angular.module("SocialApp")
.controller("PostsCtrl", function(PostsService, $scope){
	var postsData = this;
	postsData.posts = [];

	PostsService.fetch().then(function(response){
	  	postsData.posts = response.data;
	},function(response){});

	postsData.addPost = function(){
	  	if(postsData.newMsg){
        	PostsService.create(postsData.newMsg).then(function(response){
	        	postsData.newMsg = null;  
	        },function(response){});

	    }
	}

	$scope.$on('ws:new_post', function(_, post){
		$scope.$apply(function(){
			postsData.posts.unshift(post);
		});
	});

});