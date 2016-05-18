var gulp = require('gulp');
var fs = require('fs');

fs.readdirSync(__dirname + '/gulp').forEach(function(task){
	require('./gulp/' + task);
});

gulp.task('dev', ['watch:js', 'watch:css', 'dev:server', 'dev:mongo']);



//gulp.task('js', function(){
//	gulp.src('ng/**/*.js')
//		.pipe(concat('app.js'))
//		.pipe(gulp.dest('assets'));
//});



/*
gulp.task('welcome', function(){
	console.log('welcome to gulp!');
});

gulp.task('hello',['welcome'], function(){
	console.log('hello world');
});
*/
