// 目录作为模块(找不到会报错)
// const m = require('./filem')
// console.log(m)

// 目录作为模块
// 在被加载的目录下查找 package.json 文件，寻找 main 属性，作为 require() 加载入口
// 如果目录没有 package.json 文件，或 main 入口不存在或无法解析， Node.js 将会试图加载目录下的 index.js 文件
require('./file')
