
describe('posts.svc', function(){
	beforeEach(module('SocialApp'));
	var PostsService, $httpBackend;

	beforeEach(inject(function(_PostsService_, _$httpBackend_){
		PostsService = _PostsService_;
		$httpBackend = _$httpBackend_;
	}));

	afterEach(function(){
		$httpBackend.flush();
	});

	describe('#fetch', function(){

		beforeEach(function(){
			$httpBackend.expect('GET', '/api/posts')
						.respond([
							{username: 'john', body: 'first post'},
							{username: 'amy',  body: 'second post'}
						]);
		});

/*
		it('exists', function(){
			expect(PostsService.fetch).to.exist;
		});
*/
		it('gets 2 posts', function(){
			PostsService.fetch().success(function(posts){
				expect(posts).to.have.length(2);
			});
		});
	});

	describe('#create', function(){

		beforeEach(function(){
			$httpBackend.expect('POST', '/api/posts')
						.respond(
							{
								username : 'john',
								body 	 : 'hello, world test'
							}
						);
		});

		it('creates post', function(){
			PostsService.create().success(function(post){
				expect(post).to.deep.equal({username:'john', body:'hello, world test'});
			});
		});



	});
});