var gulp = require('gulp'),
  watch = require('gulp-watch'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  px2rem = require('postcss-px2rem'),
  autoprefixer = require('autoprefixer')
  connect = require('gulp-connect');
 
gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('sass', function () {
  var processors = [
    px2rem({remUnit: <%= remUnit %>, baseDpr: <%= baseDpr %>}),
    autoprefixer({ browsers: ['> 5%'] })
  ];
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  return gulp.src('./*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./*.html', ['html']);
});

gulp.task('default', ['sass', 'webserver', 'watch']);