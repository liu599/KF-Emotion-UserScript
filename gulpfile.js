'use strict';

/* 导入模块 */

const gulp = require('gulp');
const gutil = require('gulp-util');
const concat = require('gulp-concat');





// 监视任务
gulp.task('watchjs', function () {

    gulp.src(['src/meta.js','src/main.js'])
        .pipe(concat('kf.js'))
        .pipe(gulp.dest('dist/'));
    
    gulp.watch('src/*',['watchjs']);
   
});



/* 生成文件 */
gulp.task('default', ['watchjs']);

