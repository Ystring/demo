var gulp = require("gulp");
var less = require("gulp-less");
const imagemin = require('gulp-imagemin');
gulp.task("style",function(){
		return gulp.src("./less/*.less")
		.pipe(less())
		.pipe(gulp.dest("./dir/css"));
})

gulp.task("image",function(){
	return gulp.src("./image/*")
	.pipe(imagemin())
	.pipe(gulp.dest("./dir/images"));
})