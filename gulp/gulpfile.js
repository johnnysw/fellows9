/**
 * Created by apple on 17/1/13.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('copy',function(){
    gulp.src('src/index.html').pipe(gulp.dest('dist')).pipe(connect.reload());
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
    gulp.watch('src/sass/*.scss',['sass']);

});

gulp.task('sass',function(){
    gulp.src('src/sass/style.scss').pipe(sass())
        .pipe(gulp.dest('dist/css')).pipe(connect.reload());
});

gulp.task('server',function(){
    connect.server({
        root:'dist',
        port:8888,
        livereload:true
    });
});

gulp.task('watch-html',['server','watch']);

gulp.task('concat',function(){
    gulp.src(['src/js/test1.js','src/js/test2.js'])
        .pipe(concat('main.js')).pipe(gulp.dest('dist/js'))
        .pipe(uglify()).pipe(rename('main.min.js')).pipe(gulp.dest('dist/js'));
});


gulp.task('default',['server','watch']);