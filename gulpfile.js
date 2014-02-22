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
  watch({glob: 'assets/style/**/*.scss'}, function(files) {
    return files.pipe(sass())
      .pipe(gulp.dest('./'));
  });
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('images', function() {
  return gulp.src(paths.images)
    .pipe(imagemin({optimizationLevel: 9}))
    .pipe(gulp.dest('assets/images/build'));
});
