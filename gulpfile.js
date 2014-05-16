var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var browserify = require('browserify');

var paths = {
	styles: {
		src: 'styles/scss/*.scss',
		dest: 'styles'
	},
	scripts: {
		main: './scripts/src/main.js',
		src: './scripts/src/*',
		dest: 'scripts/bundle/'
	}
};

gulp.task('sass', function () {
	return gulp.src(paths.styles.src)
		.pipe(sass({ style: 'expanded' }))
		.pipe(gulp.dest(paths.styles.dest));
});

gulp.task('browserify', function() {
  return browserify(paths.scripts.main)
  	.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest(paths.scripts.dest));
})

gulp.task('watch-styles', function () {
	gulp.watch(paths.styles.src, [ 'sass' ]);
});

gulp.task('watch-scripts', function () {
	gulp.watch(paths.scripts.src, [ 'browserify' ]);
});

gulp.task('watch', [ 'watch-styles', 'watch-scripts' ]);
