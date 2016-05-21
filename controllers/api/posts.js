var Post = require('../../models/post');
var router = require('express').Router();


//getAllPosts
router.get('/', function(req,res,next){
	Post.find()
		.sort('-date')
		.exec(function(err, posts){
		if(err){
			return next(err);
		}
		res.status(200).json(posts);
	});
});

//addPost
router.post('/',function(req,res,next){
	var post = new Post({
		username : req.auth.username,
		body 	 : req.body.body
	});


	post.save(function(err, post){
		if(err){
			return next(err);
		}

		res.status(201).json(post);
	});

});

module.exports = router;