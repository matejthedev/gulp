// ----- QUICK START EXAMPLE -----

// function defaultTask(cb) {
//   // place code for your default task here
//   console.log("Hello gulp")
//   cb();
// }

// exports.default = defaultTask


// ----- WORKING WITH FILES EXAMPLES -----
// const { src, dest } = require('gulp');

// exports.default = function() {
//   return src('src/*.js')
//     .pipe(dest('output/'));
// }

// BABEL AND UGLIFY

// npm install --save-dev @babel/core @babel/cli @babel/preset-env gulp-babel gulp-uglify 
const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

exports.js = function() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest('dist/'));
}

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

exports.img = () => (
	gulp.src('src/images/*')
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 40, progressive: true})
    ]))
	.pipe(gulp.dest('dist/images'))
);