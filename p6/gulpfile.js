var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    inlineCss = require('gulp-inline-css'),
    htmlmin = require('gulp-htmlmin');

var files = {
  css: ['src/css/*.css'],
  js: ['src/js/*.js'],
  images: ['src/img/*.*'],
  html: ['src/*.html']
};

gulp.task('minify-css', function() {
  return gulp.src(files.css)
    .pipe(cleanCSS({
      compatibility: 'ie9'
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('compressJs', function() {
  return gulp.src(files.js)
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('image-min', function() {
  return gulp.src(files.images)
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('inlineCss', function() {
  return gulp.src('src/index.html')
    .pipe(inlineCss({
      removeStyleTags: true
    }))
    .pipe(gulp.dest('src/'));
});

gulp.task('minify-html', ['inlineCss'], function() {
  return gulp.src(files.html)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['minify-css', 'compressJs', 'image-min', 'inlineCss', 'minify-html']);
