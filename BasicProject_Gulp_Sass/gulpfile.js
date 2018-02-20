var gulp = require('gulp'), // connect Gulp
    sass = require('gulp-sass'), //connect Sass
    browserSync = require('browser-sync'), // connect Browser Sync
    concat = require('gulp-concat'), // connect gulp-concat (concat files)
//    uglify = require('gulp-uglifyjs'), // connect gulp-uglifyjs (compressed JS)
    cssnano = require('gulp-cssnano'), // compressed CSS
    rename = require('gulp-rename'), // connect lib rename files
    del = require('del'), // connect lib del files folders
    imagemin = require('gulp-imagemin'), // connect lib img
    pngquant = require('imagemin-pngquant'), // connect lib png
    cache = require('gulp-cache'), // connect lib cash files
    autoprefixer = require('gulp-autoprefixer');// connect autoprefixer

gulp.task('sass', function() { // task Sass
    return gulp.src(['app/sass/**/*.sass', 'app/sass/**/*.scss']) // source
        .pipe(sass()) // transformation gulp to css
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // prefixes
        .pipe(gulp.dest('app/css')) // upload to folder
 //       .pipe(browserSync.reload({stream: true})) // update CSS on the page when changes true
});

gulp.task('browser-sync', function() { // task browser-sync
    browserSync({ // run browserSync
        server: { // server parameters
            baseDir: 'app' // server directory - app
        },
        notify: false // switch off messages
    });
});

/*gulp.task('scripts', function() {
    return gulp.src([ // all need lib
        'app/libs/jquery/dist/jquery.min.js',
        'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js' //
    ])
        .pipe(concat('libs.min.js')) // collect to libs.min.js
        .pipe(uglify()) // compressed JS
        .pipe(gulp.dest('app/js')); // upload to folder
});*/

gulp.task('style', ['sass'], function() {
    return gulp.src('app/css/style.css') // choose compressed file
        .pipe(cssnano()) // compressing
//        .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min'})) // suffix .min
        .pipe(gulp.dest('app/css')); // upload to folder
});

//watching
gulp.task('watch', ['browser-sync', 'style'], function() {
    gulp.watch(['app/sass/**/*.sass', 'app/sass/**/*.scss'], ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
//    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function() {
    return del.sync('dist'); // delete dist before assembly
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({ // cash
            // .pipe(imagemin({ // without cash
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))/**/)
        .pipe(gulp.dest('dist/img'));
});

gulp.task('build', ['clean', 'img', 'sass'], function() {

    var buildCss = gulp.src([ // Transferring libs to production
        'app/css/style.css'
//        'app/css/libs.min.css'
    ])
        .pipe(gulp.dest('dist/css'));

/*
    var buildFonts = gulp.src('app/fonts/!**!/!*') // Transferring fonts to production
        .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/!**!/!*') // Transferring scripts to production
        .pipe(gulp.dest('dist/js'))
*/

    var buildHtml = gulp.src('app/*.html') // Transferring HTML to production
        .pipe(gulp.dest('dist'));

});

gulp.task('clear', function (callback) {
    return cache.clearAll();
});

gulp.task('default', ['watch']);