'use strict';

/* 导入模块 */

const gulp = require('gulp');
const gutil = require('gulp-util');
const concat = require('gulp-concat');

const babel = require('gulp-babel');
const es2015 = require("babel-preset-es2015");




// 监视任务
gulp.task('watchjs', function () {

    gulp.src(['src/meta.js','src/main.js'])
        .pipe(concat('kf.js'))
        .pipe(babel({
            presets: ['es2015']
          }))
        .pipe(gulp.dest('dist/'));

    gulp.src(['src/meta.js','src/main.js'])
            .pipe(concat('kf2016.js'))
            .pipe(babel({
                presets: ['es2016']
              }))
            .pipe(gulp.dest('dist/'));

    gulp.watch('src/*',['watchjs']);

});



/* 生成文件 */
gulp.task('default', ['watchjs']);
