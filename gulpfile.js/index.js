const { watch, series } = require("gulp");

const config = require('./config');
const js = require('./tasks/js').js(config.files.js, config.files.jsOrder, config.localServerProjectPath);
js.displayName = 'js';

const hello = function (done) {
    console.log(`Groeten van ${config.voornaam}!`);
    done();
}

const sass = require('./tasks/sass').sass(config.localServerProjectPath, config.files.sass);
sass.displayName = 'sass';

const html = require('./tasks/html').html(config.localServerProjectPath);

const watchFiles = () => {
    watch(['./js/**/*.js'], series(js));
    watch(['./css/**/*.scss'], series(sass));
    watch(['./*.html'], series(html));
};

exports.default = hello;
exports.js = js;
exports.watch = watchFiles;