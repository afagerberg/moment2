// DT173G moment 2, Av Alice Fagerberg HT21

//hämtar gulp-paket med valda huvudfunktioner
const {src, dest, parallel, series, watch} = require('gulp');

//Variabler med paket
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const webp = require('gulp-webp');
const sass = require('gulp-sass')(require('sass'));

//sökvägar
const files = {
    htmlPath: "src/**/*.html",
    sassPath: "src/sass/*.scss",
    jsPath: "src/js/*.js",
    imagePath: "src/images/*"
}

//HTML task kopiera till pub
function copyHTML() {
    return src(files.htmlPath)
    .pipe(dest('pub'));
}


//sass task
function sassTask() {
    return src(files.sassPath)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(dest('pub/css')
    );
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

    watch([files.htmlPath, files.sassPath, files.jsPath, files.imagePath], parallel(copyHTML, sassTask, jsTask, imageTask, webpTask)).on('change', browserSync.reload);
}

//exporterar taskfunktioner med metoder
exports.default = series(
    parallel(copyHTML, sassTask, jsTask, imageTask, webpTask),
    watchTask
);