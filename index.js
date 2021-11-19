// 批量引入data目录下的js文件 并导出
const modulesFiles = require.context('./tools/', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const value = modulesFiles(modulePath)
  return { ...modules, ...value }
}, {})

module.exports = modules

