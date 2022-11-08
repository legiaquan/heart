const gulp = require("gulp");
const minify = require("gulp-minify");

// gulp.task('compress', function() {
//   gulp.src('src/resources/assets/js/*.js')
//     .pipe(minify({
//         ext:{
//             src:'-debug.js',
//             min:'.js'
//         },
//         exclude: ['tasks'],
//         ignoreFiles: ['.combo.js', '-min.js']
//     }))
//     .pipe(gulp.dest('dist'))
// });

// gulp.task('js', function() {
//   /// điểm đầu là file client.js
//   return gulp.src([ "JAVASCRIPT/client.js" ])
//      /// minify js
//      .pipe(minify({
//         ext: {
//            min: '.min.js'
//         },
//         noSource: true
//      }))
//      /// dữ liệu biên dịch xong thảy vào folder
//      .pipe(gulp.dest(path.join(__dirname, '/../LARAVEL/public/js/')))
//      /// reload code browser sử dụng thư extention
//      /// chrome
//      /// chrome://extensions/?id=jnihajbhpnppcggbcgedagnkighmdlei
//      .pipe(livereload())
// });

gulp.task("compress-js", function () {
  return (
    gulp
      .src(["src/resources/assets/js/*.js"])
      .pipe(
        minify({
          ext: {
            min: ".min.js",
          },
          noSource: true,
        })
      )
      .pipe(gulp.dest('src/public/assets/js/'))
  );
});
