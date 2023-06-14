const { src, series, parallel, watch, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCss = require("gulp-clean-css");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify");

const sassCompile = function () {
  return src("assets/src/sass/main.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(dest("assets/dist/css", { sourcemaps: "." }));
};

const uglifyJs = function () {
  return src("assets/src/js/*.js").pipe(uglify()).pipe(dest("assets/dist/js"));
};

const watchChange = function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  watch(
    ["assets/src/sass/**/*.scss", "assets/src/js/*.js"],
    parallel(sassCompile, uglifyJs)
  );
  watch(["index.html", "assets/src/js/*.js", "assets/src/sass/**/*.scss"]).on(
    "change",
    browserSync.reload
  );
};

exports.default = series(parallel(sassCompile, uglifyJs), watchChange);
