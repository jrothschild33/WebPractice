module.exports = {
  pages: {
    index: {
      //入口
      entry: 'src/main.js',
    },
  },
  lintOnSave: false, //关闭语法检查

  // 开启代理服务器（方式一）
  // 缺点：只能控制单个服务器，且只有public文件夹中找不到资源时才会请求代理服务器

  /* devServer: {
    proxy: 'http://localhost:5000'
  }, */

  //开启代理服务器（方式二）
  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/atguigu': '' }, // 重写路径，不然后端服务器路径错误
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值，如果为false(默认)则如实回答，如果是ture则谎称与服务器同源
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/demo': '' },
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      },
    },
  },
}
