var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var runSequence = require('run-sequence');

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({sourceComments: 'map'}))
        .pipe(autoprefixer({
            browsers: ['> 5%'],
            cascade: false
        }))
        .pipe(concatCss('./src/css/main.css'))
        .pipe(gulp.dest('./'));
});

gulp.task('css', function() {
    return gulp.src([
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './src/css/main.css'
        ])
        .pipe(concat('./assets/css/main.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./'));
});

gulp.task('js', function () {
    return gulp.src([
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/bootstrap/dist/js/bootstrap.min.js',
            './src/js/**/*.{js,json}'
        ])
        .pipe(concat('./assets/js/main.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('copy', function() {
    gulp.src([
            './node_modules/bootstrap/dist/fonts/**/*.*',
            './src/fonts/**/*.*'
        ])
        .pipe(gulp.dest('./assets/fonts'));
    gulp.src('./src/images/**/*.*')
        .pipe(gulp.dest('./assets/images'));
});

gulp.task('default', function() {
    runSequence(
        'sass',
        'css',
        'js',
        'copy'
    );
});