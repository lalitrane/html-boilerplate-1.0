const { src, dest, watch, series } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
const concat = require('gulp-concat');



function compilecss() {

    return src('scss/*.scss')
        .pipe(sass())
        .pipe(prefix())
        .pipe(minify())
        .pipe(dest('css'))
}



// function movejs(){
//     return src(['node_modules/jquery/dist/jquery.min.js','node_modules/bootstrap/dist/js/bootstrap.min.js'])
//     .pipe(dest('dist/js'))
// }

function dependenciesjs() {
    return src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/tiny-slider/dist/min/tiny-slider.js', 'js/main-dev.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/aos/dist/aos.js'])
        .pipe(concat('main.js'))
        .pipe(dest('js/nonminified'));


}

function jsmin() {
    return src('js/nonminified/*.js')
        .pipe(terser())
        .pipe(dest('javascript'))
}





// function copyfonts(){

//     return src('src/fonts/*') 
//     .pipe(dest('dist/fonts'))
// }



function watchTask() {
    watch('scss/*.scss', series(compilecss));
    watch(['node_modules/jquery/dist/jquery.min.js', 'node_modules/tiny-slider/dist/min/tiny-slider.js', 'js/main-dev.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/aos/dist/aos.js'], dependenciesjs);
    watch('js/nonminified/*.js', jsmin);
    //watch('src/images/*.{jpg,png}',optimizeimg);
}




exports.default = series(
    compilecss,
    dependenciesjs,
    jsmin,
    watchTask
    //optimizeimg,
    //movejs,


)