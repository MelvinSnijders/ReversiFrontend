const { src, dest } = require('gulp');

const fn = function (backendPath) {
    return function () {
        return src(["*.html"])
            .pipe(dest('./dist/'))
            .pipe(dest(backendPath + "/"));
    }
};
exports.html = fn;
