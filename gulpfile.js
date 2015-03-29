var browserify = require('browserify'),
	gulp = require('gulp'),
	reactify = require('reactify'),
	browserSync = require('browser-sync'),
	source = require('vinyl-source-stream');

gulp.task('compile', function(){
	var b = browserify();
	b.transform(reactify);
	b.add('./src/js/main.js');
	return b.bundle()
			.pipe(source('main.js'))
			.pipe(gulp.dest('./dist'));
});



gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: './dist/'
		}
	})
});

gulp.task('copy', function(){
	gulp.src('./index.html')
		.pipe(gulp.dest('dist'))
});


// use default task to launch BrowserSync and watch JS files
gulp.task('default', ['browser-sync', 'copy'], function () {
 
    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch(["./src/js/**/*.js", "./src/views/**/*.jsx", "index.html", "app.css"], ['copy', 'compile', browserSync.reload]);
});