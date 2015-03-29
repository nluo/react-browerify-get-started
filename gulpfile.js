var browserify = require('browserify'),
	gulp = require('gulp'),
	reactify = require('reactify'),
	browserSync = require('browser-sync'),
	source = require('vinyl-source-stream');

gulp.task('transform', function(){
  gulp.src('./main.js')
    .pipe(reactify)
    .pipe(gulp.dest('./dist'));
});

gulp.task('compile', function(){
	var b = browserify();
	b.transform(reactify);
	b.add('./main.js');
	return b.bundle()
			.pipe(source('./main.js'))
			.pipe(gulp.dest('./dist'));
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: './'
		}
	})
});

// use default task to launch BrowserSync and watch JS files
gulp.task('default', ['browser-sync'], function () {
 
    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch(["*.js", "*.jsx", "index.html", "app.css"], ['compile', browserSync.reload]);
});