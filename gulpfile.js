const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

var SCSS = './src/assets/scss/**/*.scss';
var CSS = './src/assets/css/';
var JS = './src/assets/js/**/*.js';

function style() {
    return gulp.src(SCSS)
        .pipe(sass())
        .pipe(gulp.dest(CSS))
        .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server:{
            baseDir: './public/'
        }
    });
    gulp.watch(SCSS, style);
    gulp.watch('./public/*.html').on('change', browserSync.reload);
    gulp.watch(JS).on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;