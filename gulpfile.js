var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

gulp.task('less', function () {
  return gulp.src('./less/agency.less')
      .pipe(less())
      .pipe(minifyCSS())
      .pipe(gulp.dest('./css'));
});