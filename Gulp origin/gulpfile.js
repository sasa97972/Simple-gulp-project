var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	cache = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer');;

gulp.task('sass', function() {
	return gulp.src(['app/sass/**/*.+(scss|sass)', '!app/sass/**/_*.+(scss|sass)'])
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(autoprefixer(['last 3 versions'], { cascade: true }))
	.pipe(gulp.dest('app/css/'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function() {
	return gulp.src([
		'app/libs/jquery/jquery.min.js',
		'app/libs/**/*.+(min.js|js)'
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js/'))
});

gulp.task('css', function() {
	return gulp.src('app/libs/**/*.+(min.css|css)')
	.pipe(concat('libs.min.css'))
	.pipe(cssnano())
	.pipe(gulp.dest('app/css/'))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('clean', function(){
	return del.sync('dist');
});

gulp.task('img', function(){
	return gulp.src('app/img/**/*')
	.pipe(imagemin([
	    imagemin.gifsicle({interlaced: true}),
	    imagemin.jpegtran({progressive: true}),
	    imagemin.optipng({optimizationLevel: 5}),
	    imagemin.svgo({plugins: [{removeViewBox: true}]})
	]))
	.pipe(gulp.dest('dist/img'));
});

gulp.task('watch', ['browser-sync', 'sass', 'css', 'scripts'], function() {
	gulp.watch('app/sass/**/*.+(scss|sass)', ['sass']);
	gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'img', 'sass', 'css', 'scripts'], function() {
	var buildCss = gulp.src('app/css/**/*')
	.pipe(concat('styles.min.css'))
	.pipe(cssnano())
	.pipe(gulp.dest('dist/css/'));

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts/'));

	var buildJs = gulp.src('app/js/**/*')
	.pipe(concat('scripts.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js/'));

	var buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist/'));
});