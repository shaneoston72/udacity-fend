var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');

gulp.task('css', function() {
  return gulp.src('css/*')
    .pipe(uglify())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('images', function() {
  return gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('images2', function() {
  return gulp.src('views/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('default', ['css', 'scripts', 'images', 'images2']);
