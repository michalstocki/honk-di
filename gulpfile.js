require('coffee-script').register();

var gulp    = require('gulp'),
    coffee  = require('gulp-coffee'),
    mocha   = require('gulp-mocha'),
    concat  = require('gulp-concat'),
    clean   = require('gulp-clean');

gulp.task('clean-build', function () {
	return gulp.src('build', {force: true})
		.pipe(clean());
});

gulp.task('build', ['clean-build'], function() {
  gulp.src(['./lib/index.coffee', './lib/**/*.coffee'])
    .pipe(coffee())
	.pipe(concat('honk-di.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('test', function() {
  gulp.src('./test/**/*.coffee', {'read': false})
    .pipe(mocha({
      reporter: 'spec'
    }))
});

gulp.task('default', ['build']);
