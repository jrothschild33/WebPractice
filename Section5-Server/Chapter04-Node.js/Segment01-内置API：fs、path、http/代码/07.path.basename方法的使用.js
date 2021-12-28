const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'

// 输出文件全称（带扩展名）
const fullName = path.basename(fpath)
console.log(fullName)

// 输出文件名称（不带扩展名）
const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt)
