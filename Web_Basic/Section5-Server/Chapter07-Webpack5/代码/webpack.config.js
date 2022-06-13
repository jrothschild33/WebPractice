const { resolve } = require('path') // node 内置核心模块，用来处理路径问题。
module.exports = {
  entry: './src/js/index.js', // 入口文件
  output: {
    // 输出配置
    filename: './built.js', // 输出文件名
    path: resolve(__dirname, 'build/js'), // 输出文件路径配置
  },
  mode: 'development', //开发环境
}
