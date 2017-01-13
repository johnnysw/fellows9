/**
 * Created by apple on 17/1/13.
 */
var gulp = require('gulp');

gulp.task('copy',function(){
    gulp.src('src/index.html').pipe(gulp.dest('dist'));
});
gulp.task('copy-img',function(){
    gulp.src('src/images/*.{png,jpg}').pipe(gulp.dest('dist/images'))
});
gulp.task('copy-all',function(){
    gulp.src('src/images/**/*.png').pipe(gulp.dest('dist/images'))
});
gulp.task('copy-png',function(){
    gulp.src(['src/images/**/*.png','!src/images/open*.png']).pipe(gulp.dest('dist/images'))
});
gulp.task('watch',function(){
    gulp.watch('src/index.html',['copy']);
});
