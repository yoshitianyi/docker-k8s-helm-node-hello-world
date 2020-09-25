const gulp = require('gulp');
const del = require('del');
const copy = require('gulp-copy');
const install = require('gulp-install');
const tar = require('gulp-tar');
const gzip = require('gulp-gzip');
const { readFileSync: readFile } = require('fs');
const pkginfo = JSON.parse(readFile('./package.json'));

gulp.task('default', function(done) {
    console.log(`🌐️ Hello ${pkginfo.name} ${pkginfo.version} 🌐️`);
    done();
});

gulp.task('contents', function(done) {
    gulp.src('./src/**/*')
    .pipe(gulp.dest('./tmp'));
    gulp.src('./package.json')
    .pipe(copy('./tmp'))
    .pipe(install({
        production: true
    }));
    done();
});

gulp.task('tgz', function(done) {
    gulp.src('./tmp/**')
    .pipe(tar(`${pkginfo.name}_${pkginfo.version}.tar`))
    .pipe(gzip())
    .pipe(gulp.dest('./dist'))
    done();
});

gulp.task('clean', function(done) {
    del('./tmp', { force: true })
    done();
});
