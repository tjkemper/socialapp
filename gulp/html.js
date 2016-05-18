var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('html', function(){
	gulp.src('layouts/**/*.html')
		.pipe(gulp.dest('layouts'))
		.pipe(livereload());
});

gulp.task('watch:html', ['html'], function(){
	livereload.listen();
	gulp.watch('layouts/**/*.html', ['html']);
});