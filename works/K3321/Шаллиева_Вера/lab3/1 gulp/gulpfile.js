const gulp = require('gulp');
const {series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

function serve() {
    browserSync.init({
        server: {
            baseDir: "C:\\Users\\shall\\my-web3" 
        }
    });

    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('css/*.css').on('change', browserSync.reload);
    gulp.watch('js/*.js').on('change', browserSync.reload);
}

function text(cb) {
    console.log("Я многим обязана своим родителям! Особено папе и маме");
    cb();
}

function num(cb) {
    console.log('12345609876');
    cb();
}

exports.serve = serve;
exports.default = serve;


exports.ser = series(text, num);
exports.par = parallel(text, num);