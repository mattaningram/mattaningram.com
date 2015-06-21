var gulp = require('gulp'),
  sass = require('gulp-sass'),
  livereload = require('gulp-livereload'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  gulp.src('styles/scss/**/*.scss')
  .pipe(sass({
    includePaths: require('node-bourbon').includePaths,
    style: 'compressed',
    sourceComments: 'map',
    sourceMap: 'sass',
  }))

  // Catch any SCSS errors and prevent them from crashing gulp
  .on('error', function (error) {
    console.error(error);
    this.emit('end');
  })

  .pipe(sourcemaps.init({loadMaps: true}))

  .pipe(autoprefixer({
    browsers: ['last 4 versions']
  }))
  
  .pipe(sourcemaps.write('styles'))

  .pipe(gulp.dest('styles'))

  .pipe(livereload());
});

gulp.task('reload', function () {
  gulp.src('*.{html,js}')
    .pipe(livereload());
});

gulp.task('default', function() {
  livereload.listen();
  gulp.watch('styles/scss/**/*.scss', ['sass']);
  gulp.watch('*.{html,js}', ['reload']);
});