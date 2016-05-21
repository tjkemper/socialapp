var router = require('express').Router();
var bcrypt = require('bcryptjs');
var jwt = require('jwt-simple');
var User = require('../../models/user');
var config = require('../../config');

//retrieve user information (must have token)
router.get('/', function(req, res, next){
	if(!req.headers['x-auth']){
		return res.sendStatus(401);
	}
	var auth = jwt.decode(req.headers['x-auth'], config.secret);
	User.findOne({username:auth.username}, function(err, user){
		if(err){
			return next(err);
		}
		res.json(user);
	});
});

//register
router.post('/', function(req, res, next){
	var user = new User({username: req.body.username});
	bcrypt.hash(req.body.password, 10, function(err, hash){
		if(err){
			return next(err);
		}
		user.password = hash;
		user.save(function(err){
			if(err){
				return next(err);
			}
			res.sendStatus(201);
		});
	});
});

module.exports = router;