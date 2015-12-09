var gulp          = require('gulp');
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var concat        = require('gulp-concat');

var paths = {
  vendorStyles: [
    './bower_components/bootstrap/dist/css/bootstrap.min.css',
    './bower_components/components-font-awesome/css/font-awesome.min.css'
  ],
  fonts: [
    './bower_components/components-font-awesome/fonts/*'
  ]
};

gulp.task('sass', function() {
  gulp.src('./src/assets/scss/style.scss')
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      })
    )
    .pipe(gulp.dest('./static'));
});

gulp.task('vendor:css', function(){
  return gulp.src(paths.vendorStyles)
    .pipe(concat({ path: 'vendor.css' }))
    .pipe(gulp.dest('./static'));
});

gulp.task('fonts', function(){
  gulp.src(paths.fonts)
    .pipe(gulp.dest('./static/fonts'))
})


gulp.task('watch', function() {
  gulp.watch('./src/assets/scss/**/*.scss', ['sass']);
});
