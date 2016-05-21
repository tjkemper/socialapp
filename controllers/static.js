var path = require('path');
var express = require('express');
var router = express.Router();

//Serve static content
router.use(express.static(__dirname + "/../assets"));
router.use(express.static(__dirname + '/../templates'))

//serve posts.html
router.get('/', function(req,res){
	res.sendFile(path.resolve(__dirname+'/../layouts/app.html'));
});

module.exports = router;