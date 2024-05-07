const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// CSS task
function css() {
  return gulp
    .src('./css/*.css')
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('./css/newcss/'));
}

// Watch task
function watchFiles() {
  gulp.watch('./css/*.css', css);
}

// Define complex tasks
const build = gulp.series(css);
const watch = gulp.series(build, watchFiles);

// Export tasks
exports.css = css;
exports.watch = watch;
exports.default = build;
