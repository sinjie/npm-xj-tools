
/**
 * 合并
 * @param {Array ...} 多个数组传入
 * @returns {Array} 新数组
 */
function mergeArray() {
  var arr = Array.prototype.slice.apply(arguments)
  arr = arr.reduce((x, y) => {
    return x.concat(y)
  }, [])
  return arr
}

exports.mergeArray = mergeArray

/**
 * 合并去重
 * @param {Array ...} 多个数组传入，仅限单层数组
 * @returns {Array} 新数组
 */
function mergeRemoveSame() {
  var arr = Array.prototype.slice.apply(arguments)

  arr = arr.reduce((x, y) => {
    return x.concat(y)
  }, [])

  arr = arr.filter((ele, index, self) => {
    return self.indexOf(ele) === index
  })

  return arr
}

exports.mergeRemoveSame = mergeRemoveSame

/**
 * 合并取不重复的值
 * @param {Array ...} 多个数组传入，仅限单层数组
 * @returns {Array} 新数组
 */
function mergeGetOnly() {
  var arr = Array.prototype.slice.apply(arguments)
  arr = arr.reduce((x, y) => {
    return x.concat(y)
  })

  arr = arr.filter((ele, index, self) => {
    var canReturn = self.includes(ele, index + 1) || self.indexOf(ele) !== index
    return !canReturn
  })
  return arr
}

exports.mergeGetOnly = mergeGetOnly

/**
 * 排序
 * @param {Array} arr 数组
 * @param {String} type 数据类型
 * @returns {Array} 新数组
 */
exports.sort = (arr, type) => {
  if (type === undefined) {
    return arr.sort()
  }
  if (type === 'number') {
    return arr.sort((x, y) => {
      return x - y
    })
  }
  if (type === 'ignoreCase') {
    arr = arr.map(item => item.toLowerCase())
    return arr.sort()
  }
}