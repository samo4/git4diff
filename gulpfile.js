var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('dojs', function() {
	gulp.src(['./node_modules/reveal.js/js/*.js', './node_modules/reveal.js/lib/js/head.min.js'], {base: './node_modules/reveal.js'})
		.pipe(concat('js/scripts.js'))
		//.pipe(uglify())
		.pipe(gulp.dest('./public/'));
		
	gulp.src(['./node_modules/reveal.js/plugin/markdown/*.js', './node_modules/reveal.js/plugin/highlight/*.js'], {base: './node_modules/reveal.js'})
		//.pipe(uglify())
		.pipe(gulp.dest('./public/'));
});		

gulp.task('docss', function() {
	 gulp.src('./src/css/*.css')
		.pipe(minifyCss({
		  keepSpecialComments: 0
		}))
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest('./public/css'));
	gulp.src(['./node_modules/reveal.js/css/**/*.css', './node_modules/reveal.js/lib/css/*.css'], {base: './node_modules/reveal.js'})
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