const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');

gulp.task('compress', (cb) => {
  pump([
    gulp.src('./src/angular.fusiontime.js'),
    uglify(),
    gulp.dest('dist'),
  ], cb);
});
