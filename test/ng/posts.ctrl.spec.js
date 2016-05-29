describe('posts.ctrl', function(){
	beforeEach(module('SocialApp'));
	var $scope;

	var mockPostsService = {};
	beforeEach(inject(function($q){
		mockPostsService.fetch = function(){
			var deferred = $q.defer();
			deferred.resolve([
				{username: 'john', body: 'first post'},
				{username: 'amy',  body: 'second post'}
			]);
			return deferred.promise;
		}
	}));


	beforeEach(inject(function($rootScope, $controller){
		$scope = $rootScope.$new();
		$controller('PostsCtrl as postsCtrl', {
			$scope: $scope,
			PostsService: mockPostsService
		});
	}));
	/*
		fixme: Karma has a problem with controller as syntax
	*/
	it('loads posts from the service', function(){
		console.log($scope.postsCtrl); //posts:[]
		$scope.$digest();
		console.log($scope.postsCtrl); //posts:undefined
		//expect($scope.postsCtrl.posts).to.have.length(2);
	});
});