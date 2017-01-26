'use strict';

/* 导入模块 */

const gulp = require('gulp');
const gutil = require('gulp-util');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
//const replace = require('gulp-replace');
const replace = require('gulp-string-replace');
const browserify = require('browserify');
const babel = require('gulp-babel');
const es2015 = require("babel-preset-es2015");
const es2016 = require("babel-preset-es2016");

const babelify = require('babelify');
const source = require('vinyl-source-stream');

const runSequence = require('run-sequence');

function getArg(key) {
  const index = process.argv.indexOf(key);
  const next = process.argv[index + 1];
  return (index < 0) ? null : (!next || next[0] === "-") ? true : next;
}


/* browserify任务 */
gulp.task('browserifyTask', function () {
     return browserify({
            entries: 'src/main.js',
            debug: true
        }).transform(babelify, {presets: ['es2015', 'es2016', 'es2017']})
          .bundle()
          .pipe(source('main.js'))
          .pipe(gulp.dest('dist/'));
})
/* 合并文件任务 */
gulp.task('combineFiles',function(){
    let versionNumber = getArg('--pv'); //命令行传入版本参数 gulp --pv <version>
    versionNumber = (versionNumber===null)?'publish':versionNumber;
    gulp.src(['src/meta.js','dist/main.js'])
        .pipe(concat('kf.js'))
        .pipe(replace(/\/\/ @version/, `// @version     ${versionNumber}`))
        .pipe(replace(/versionNo = '[1-9].[0-9].[0-9]';/, `versionNo = '${versionNumber}';`))
        .pipe(replace(/\(imagepath\)/g,`(imgpath)`))
        .pipe(gulp.dest('dist/'));
})

/* browserifyES2016任务 */
gulp.task('browserifyTaskES2016', function () {
     return browserify({
            entries: 'src/main.js',
            debug: true
        }).transform(babelify, {presets: ['es2016', 'es2017']})
          .bundle()
          .pipe(source('mainES2016.js'))
          .pipe(gulp.dest('dist/'));
})
/* 合并文件任务ES2016 */
gulp.task('combineFilesES2016',function(){
    let versionNumber = getArg('--pv'); //命令行传入版本参数 gulp --pv <version>
    versionNumber = (versionNumber===null)?'publish':versionNumber;
    gulp.src(['src/meta.js','dist/mainES2016.js'])
        .pipe(concat('kfES2016.js'))
        .pipe(replace(/\/\/ @version/, `// @version     ${versionNumber}`))
        .pipe(replace(/versionNo = '[1-9].[0-9].[0-9]';/, `versionNo = '${versionNumber}';`))
        .pipe(replace(/\(imagepath\)/g,`(imgpath)`))
        .pipe(gulp.dest('dist/'));

})




// 监视任务
gulp.task('watchjs', function () {
    //
    // gulp.src(['src/meta.js','src/main.js'])
    //     .pipe(concat('kf.js'))
    //     .pipe(babel({
    //         presets: ['es2015']
    //       }))
    //     .pipe(gulp.dest('dist/'));
    //
    // gulp.src(['src/meta.js','src/main.js'])
    //         .pipe(concat('kf2016.js'))
    //         .pipe(babel({
    //             presets: ['es2016']
    //           }))
    //         .pipe(gulp.dest('dist/'));
    let versionNumber = getArg('--pv'); //命令行传入版本参数 gulp --pv <version>
    versionNumber = (versionNumber===null)?'publish':versionNumber;
    gulp.src('package.json')
        .pipe(replace(/"version": "[0-9].[0-9].[0-9]"/, `"version": "${versionNumber}"`))
    gulp.watch('src/*',['browserifyTask','combineFiles']);

});

gulp.task('runtasks',function(callback){
     runSequence(['browserifyTask','browserifyTaskES2016'],
            ['combineFiles','combineFilesES2016'],
            callback);
});


/* 生成文件 */
gulp.task('default', ['runtasks','watchjs']);
