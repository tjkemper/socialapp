var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/socialappdb', function(){
	console.log('mongodb connected');
});

module.exports = mongoose;