'use strict';

/* 导入模块 */

const gulp = require('gulp');
const gutil = require('gulp-util');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const browserify = require('browserify');
const babel = require('gulp-babel');
const es2015 = require("babel-preset-es2015");
const es2016 = require("babel-preset-es2016");

const babelify = require('babelify');
const source = require('vinyl-source-stream');

const runSequence = require('run-sequence');

/* 导入模块 */
gulp.task('browserifyTask', function () {
     return browserify({
            entries: 'src/main.js',
            debug: true
        }).transform(babelify, {presets: ['es2015', 'es2016', 'es2017']})
          .bundle()
          .pipe(source('main.js'))
          .pipe(gulp.dest('dist/'));
})

gulp.task('combineFiles',function(){
    gulp.src(['src/meta.js','dist/main.js'])
        .pipe(concat('kf.js'))
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

    gulp.watch('src/*',['browserifyTask','combineFiles']);

});

gulp.task('runtasks',function(callback){
     runSequence('browserifyTask',
            'combineFiles',
            callback);
});


/* 生成文件 */
gulp.task('default', ['runtasks','watchjs']);
