var gulp          = require('gulp');
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');

gulp.task('sass', function() {
  gulp.src('./src/assets/scss/style.scss')
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      })
    )
    .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function() {
  gulp.watch('./src/assets/scss/**/*.scss', ['sass']);
});
