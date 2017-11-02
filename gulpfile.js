// Dependencies
var gulp = require ('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    svgstore = require('gulp-svgstore'),
    rename = require('gulp-rename');

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};
var paths = {
    sass: ['css/sass/**/*.scss']
}; 
var supported = [
    'last 2 versions',
    'ie >= 9',
];
var plugins = [	
    autoprefixer({browsers: supported}),
	cssnano
  ];

gulp.task('sass', function() {
  return gulp.src('css/sass/theme.scss')
    .pipe(sass(sassOptions))
    .on('error', sass.logError)
    .pipe(postcss(plugins))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('css'))
});

gulp.task('watch', ['sass'], function() {
    gulp.watch(paths.sass, ['sass']);
});


// Task: images
gulp.task('images', function(){
    return gulp.src('exports/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('img'))
});

// Task: svg
gulp.task('svg', function(){
    return gulp.src('exports/icons/*.svg')
        .pipe(svgstore())
        .pipe(gulp.dest('img'))
});