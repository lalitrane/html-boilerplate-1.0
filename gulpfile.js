// Module Declaration
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const fileinclude = require('gulp-file-include');
const server = require('browser-sync').create();
const { watch, series } = require('gulp');

// Path  Declaration
const paths = {
    root: {
        src: './',
        dest: './build/'
    },
    css: {
        dest: './build/css'
    },
    scripts: {
        dest: './build/js'
    },
    assets: {
        dest: './build/assets'
    }
};

// Reload Server
async function reload() {
    server.reload();
}

// Compilecss, Minify and move to build Folder
async function compileCss() {
    gulp.src(['src/scss/*.scss'])
        .pipe(sass())
        .pipe(prefix())
        .pipe(minify())
        .pipe(gulp.dest(paths.css.dest));
}
exports.compileCss = compileCss;

// Add dependencies, then concat into one JS, minify and move to build Folder
async function addDependencies() {
    gulp.src(['node_modules/jquery/dist/jquery.min.js',
        'node_modules/tiny-slider/dist/min/tiny-slider.js',
        'src/js/working.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/aos/dist/aos.js'])
        .pipe(concat('main.js'))
        .pipe(terser())
        .pipe(gulp.dest(paths.scripts.dest));
}

exports.addDependencies = addDependencies;

// Copy assets to build folder
async function copyAssets() {
    gulp.src(['src/assets/**/*'])
        .pipe(gulp.dest(paths.assets.dest));
}

exports.copyAssets = copyAssets;

// Build files html and reload server
async function buildAndReload() {
    await includeHTML();
    await compileCss();
    await addDependencies();
    await copyAssets();
    reload();
}

async function includeHTML() {
    return gulp.src([
        'src/html/**/*.html',
        '!src/html/header.html', // ignore
        '!src/html/footer.html' // ignore
    ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(paths.root.dest));
}
exports.includeHTML = includeHTML;

exports.default = async function () {
    // Serve files from the build folder
    server.init({
        server: {
            baseDir: paths.root.dest
        }
    });


    // Build and reload at the first time
    buildAndReload();

    // Watch task
    watch(["src/html/**/*",
        "assets/**/*",
        "src/scss/*.scss",
        "src/js/*.js",
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/tiny-slider/dist/min/tiny-slider.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/aos/dist/aos.js'], series(buildAndReload));
};