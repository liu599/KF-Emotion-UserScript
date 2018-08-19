const gulpfile = require('gulp');
const concat = require('gulp-concat');

gulpfile.task('combineFiles', () => {
  gulpfile.src(['meta.js', 'output/kf.js'])
      .pipe(concat('kf.js'))
      .pipe(gulpfile.dest('dist/'));
});
gulpfile.task('default', ['combineFiles']);
