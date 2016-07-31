var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('sass',function() {
	return gulp.src('src/assets/styles/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('src/assets/styles/css'))
	.pipe(browserSync.reload({
		stream : true
	}))
});


gulp.task('autoprefixer',function() {
	return gulp.src('src/assets/styles/css/*.css')
	.pipe(autoprefixer({
		browsers : ['last 2 versions'],
		cascade : false
	}))
	.pipe(gulp.dest('src/assets/styles/css'));
});

gulp.task('browserSync',function() {
	browserSync.init({
		server: {
			baseDir: 'src'
		},
	})
})


gulp.task('watch',['browserSync'],function() {
	gulp.watch('src/assets/styles/scss/*.scss',['sass']);
	gulp.watch('src/assets/styles/css/*.css',['autoprefixer']);
	gulp.watch('src/*.html',browserSync.reload);
	gulp.watch('src/assets/scripts/*.js',browserSync.reload)
});




// gulp.task('watch',['sass','autoprefixer'],function() {
// 	gulp.watch('src/assets/styles/scss/*.scss',['sass']);
// 	gulp.watch('src/assets/styles/css/*.css',['autoprefixer']);

// });

