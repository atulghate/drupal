 const gulp = require('gulp');
 const sass = require('gulp-sass')(require('sass'));
 var uglifycss = require('gulp-uglifycss');

gulp.task('sass', () => {
    return gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'))
})
gulp.task('message', async function () {
    return console.log('gulp is running..');
});
 
gulp.task('css', async function () {
  gulp.src('./css/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});

  // gulp.task('run',['scss','css']);

gulp.task('watch',  function(){
  // gulp.watch('sass/*.scss',['ssss']); 
  gulp.watch('css/*.css',['css']);
});

// gulp.task('default',['run','watch']);
// gulp.task('watch',function(){
//     gulp.watch('sass/*scss',gulp.series('sass'));
// });