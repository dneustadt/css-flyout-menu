var gulp = require('gulp'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    rename = require('gulp-rename');

var sassConfig = {
    inputDirectory: 'src/*.scss',
    outputDirectory: 'dist',
    options: {
        outputStyle: 'expanded'
    }
};

gulp.task('default', ['build-css']);

gulp.task('build-css', function() {
    return gulp
        .src(sassConfig.inputDirectory)
        .pipe(sass(sassConfig.options).on('error', sass.logError))
        .pipe(gulp.dest(sassConfig.outputDirectory))
        .pipe(rename({ suffix: '.min' }))
        .pipe(csso())
        .pipe(gulp.dest(sassConfig.outputDirectory));
});

gulp.task('watch', function() {
    gulp.watch('src/*.scss', ['build-css']);
});