var expect = require('chai').expect;
var db = require('../../db');


describe('making a post', function(){
	it('creates an account and a new post', function(){
		//go to homepage
		browser.get('http://localhost:3001');

		//click 'login'
		element(by.css('nav .register')).click();

		//fill out and submit login form
		element(by.model('registerCtrl.username')).sendKeys('john');
		element(by.model('registerCtrl.password')).sendKeys('123');
		element(by.id('registerBtn')).click();

		//go to posts page
		element(by.css('.posts')).click();

		//submit a new post on the posts page
		var post = 'post from protractor!' + Math.random();
		element(by.model('postsCtrl.newMsg')).sendKeys(post);
		element(by.id('addPostBtn')).click();

		//the user should now see their post as the first post on the page		
		element.all(by.css('ul.list-group li')).first().getText().then(function(text){
			//console.log(text);
			expect(text).to.contain(post);
		});

	});

	afterEach(function(){
		db.connection.db.dropDatabase();
	});
});