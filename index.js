const fs = require('fs')
// 批量引入data目录下的js文件 并导出
const modules = fs.readdirSync('./tools').map(item => {
  return require(`./${item}`)
})

module.exports = modules
