var gulp        = require("gulp");
var sass        = require("gulp-sass");
var serve       = require('gulp-serve');
var shell       = require('gulp-shell');
var clean       = require('gulp-clean');
var runSequence = require('run-sequence');
var request     = require("request");
var fs          = require('fs');
var config      = require('dotenv').config()


// what goes where?
var buildSrc = "src";
var buildDest = "dist";

// cleanup the build output
gulp.task('init', function () {
  // Look for the environment variables
  if(process.env.URL) {
    var siteEnv = {"rootURL" : process.env.URL};
  } else {
    var siteEnv = {"rootURL" : "https://twavatar.netlify.com"};
  }

  // save the status of our environment somewhere that our SSG can access it
  fs.writeFile(buildSrc + "/site/_data/site.json", JSON.stringify(siteEnv), function(err) {
    if(err) {
      console.log(err);
    }
  });
});



// cleanup the build output
gulp.task('clean-build', function () {
  return gulp.src(buildDest, {read: false})
    .pipe(clean());
});


// local webserver for development
gulp.task('serve', serve({
  root: [buildDest],
  port: 8008,
}));


// Compile SCSS files to CSS
gulp.task("scss", function () {
  gulp.src(buildSrc + "/scss/main.scss")
    .pipe(sass({
      outputStyle: "compressed"
    }).on('error', sass.logError))
    .pipe(gulp.dest(buildDest + "/css"))
});



/*
 Run our static site generator to build the pages
*/
gulp.task('generate', shell.task('eleventy --config=eleventy.js'));





/*
  Watch src folder for changes
*/
gulp.task("watch", function () {
  gulp.watch(buildSrc + "/**/*", ["build"])
});



/*
  Let's build thus sucker.
*/
gulp.task('build', function(callback) {
  runSequence(
    ['clean-build','init'],
    ['generate', 'scss'],
    callback
  );
});
