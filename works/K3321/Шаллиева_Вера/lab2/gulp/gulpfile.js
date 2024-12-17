var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "C:\\Users\\shall\\my-project", // Исправление пути
            index: "index.html"
        }
    });
});

gulp.task('default', gulp.series('browser-sync'));

