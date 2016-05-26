/*
var expect = require('chai').expect;
var ctrl = require('../../../../controllers/api/posts');

describe('controllers.api.posts', function(){
	it('exists', function(){
		expect(ctrl).to.exist;
	});
});
*/

var expect = require('chai').expect;
var api = require('../../support/api');
var user = require('../../support/user');
var Post = require('../../../../models/post');

describe('controllers.api.posts', function(){

	beforeEach(function(done){
		Post.remove({}, done);
	});

	describe('GET /api/posts', function(){

		beforeEach(function(done){
			var posts = [
				{body: 'post1', username: 'john'},
				{body: 'post2', username: 'amy'},
				{body: 'post3', username: 'austin'}
			];

			Post.create(posts, done);

		});

		it('has 3 posts', function(done){
			api.get('/api/posts')
				.expect(200)
				.expect(function(posts){
					console.log('LENGTH'+posts.body.length);
					if(posts.body.length !== 3){
						expect(posts.body).to.have.length(3);
						//return "posts count should be 3";
					}
				})
				.end(done);
		});

/*
		it('exists', function(done){
			api.get('/api/posts')
				.expect(200)
				.end(done);
		});
*/

	});


	describe('POST /api/posts', function(){
		var token;

		beforeEach(function(done){
			user.create('john', '123', function(err, user){
				token = user.token;
				done(err);
			});
		});

		beforeEach(function(done){
			api.post('/api/posts')
				.send({body:'hello, world 7'})
				.set('X-Auth', token)
				.expect(201)
				.end(done);
		});

		it('added 1 new post', function(done){
			Post.findOne(function(err, post){
				expect(post.body).to.equal('hello, world 7');
				done(err);
			});
		});
	});

});
