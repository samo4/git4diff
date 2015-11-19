var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('dojs', function() {
	return gulp.src('./node_modules/reveal.js/js/*.js', {base: './node_modules/reveal.js'})
		.pipe(concat('js/scripts.js'))
		//.pipe(uglify())
		.pipe(gulp.dest('./public/'));
});		

gulp.task('docss', function() {
	return gulp.src('./node_modules/reveal.js/css/**/*.css', {base: './node_modules/reveal.js'})
		//.pipe(sourcemaps.init())
		.pipe(minifyCss({
		  keepSpecialComments: 0
		}))
		.pipe(rename({ extname: '.min.css' }))
		//.pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/'));
});

gulp.task('default', ['docss', 'dojs'], function() {
  // place code for your default task here
});