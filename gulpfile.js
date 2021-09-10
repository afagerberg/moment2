// DT173G moment 2, Av Alice Fagerberg HT21

//hämtar gulp-paket med valda huvudfunktioner
const {src, dest, parallel, series, watch} = require('gulp');

//Variabler med paket
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const webp = require('gulp-webp');

//sökvägar
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/css/*.css",
    jsPath: "src/js/*.js",
    imagePath: "src/images/*"
}

//HTML task kopiera till pub
function copyHTML() {
    return src(files.htmlPath)
    .pipe(dest('pub'));
}

//css-task kopierar till pub
function cssTask() {
    return src(files.cssPath)
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(cssnano())
    .pipe(sourcemaps.write('../maps'))
    .pipe(dest('pub/css'))
    .pipe(browserSync.stream());//känn av uppdatering i css till reload
    
}

//js-task kopierar till pub
function jsTask() {
    return src(files.jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('../maps'))
    .pipe(dest('pub/js'));   
}

//image-task kopierar till pub
function imageTask() {
    return src(files.imagePath)
    .pipe(imagemin())
    .pipe(dest('pub/images'))
    .pipe(webp())
    .pipe(dest('pub/images'));  ;    
}

//webp-task kopierar till pub
function webpTask() {
    return src(files.imagePath)
    .pipe(webp())
    .pipe(dest('pub/images'));    
}


//watch task - lyssnar efter förändringar i filer och kör task-funktioner på nytt
function watchTask() {
    //skapa webbserver med autoreload
    browserSync.init({
        server: "./pub"
    });

    watch([files.htmlPath, files.cssPath, files.jsPath, files.imagePath], parallel(copyHTML, cssTask, jsTask, imageTask, webpTask)).on('change', browserSync.reload);
}

//exporterar taskfunktioner med metoder
exports.default = series(
    parallel(copyHTML, cssTask, jsTask, imageTask, webpTask),
    watchTask
);