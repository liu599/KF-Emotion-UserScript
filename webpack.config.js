const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  mode: 'production',
  entry:{
    app: './tsc/main.js'
  },
  // 指定合并之后文件的保存路径
  output:{
    // path是指定合并后文件的保存目录,这个目录需要是绝对的
    path: path.join(__dirname, './output'),
    // 是用来指定合并之后文件的文件名
    filename: 'kf.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin(
        {
          uglifyOptions: {
            output: {
              comments: false,
              beautify: true,
            },
            mangle: false,
            compress: {
              drop_console: true
            },
          },
        }),
    ],
  }
};
module.exports = config;
