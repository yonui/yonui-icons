
const gulp = require('gulp');

gulp.task('default', (done) => {
  gulp.src([
    'font/**/*',
  ])
    .pipe(gulp.dest('./lib'));

  done();
})
