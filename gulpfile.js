var gulp      = require('gulp'),
    gutil     = require('gulp-util'),
    watch     = require('gulp-watch'),
    sass      = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    lReload   = require('gulp-livereload'),
    concat    = require('gulp-concat'),
    uglify    = require('gulp-uglify'),
    imagemin  = require('gulp-imagemin');

var paths = {
  scripts: 'assets/js/**/*',
  images: 'assets/images/**/*',
  style: 'assets/style/**/*.scss'
};

gulp.task('default', function() {
  gulp.src(paths.style)
    .pipe(watch(function(files) {
      return files.pipe(sass())
        .pipe(minifyCSS(opts))
        .pipe(gulp.dest('./'))
        .pipe(lReload());
    }));
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('images', function() {
  return gulp.src(paths.images)
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('assets/images/build'));
});
