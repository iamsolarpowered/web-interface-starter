var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-ruby-sass');

gulp.task('default', ['build', 'connect', 'watch']);



// Build tasks
gulp.task('build', ['copy', 'sass']);

gulp.task('rebuild', ['build'], function() {
  gulp.src('build')
    .pipe(connect.reload());
});

gulp.task('copy', function() {
  gulp.src('app/**/*.!(scss)')
    .pipe(gulp.dest('build'));
});

gulp.task('sass', function() {
  sass('app/css/main.scss', {
    loadPath: ['build/bower_components/']
  }).pipe(gulp.dest('build/css/'));
});



// Development server
// http://localhost:8080
gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});



// Watch for changes and rebuild
gulp.task('watch', function() {
  gulp.watch('./app/**/*', ['rebuild']);
});
