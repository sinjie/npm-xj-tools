
/**
  * 根据value获取lable值
  * @param {Array<{label: String, value: Number | String}>} arr 数据源
  * @param {Number | String} value 值
  * @returns
  */
exports.getLabelByValueFromArray = (arr, value, labelName = 'label', valueKey = 'value') => {
  if (Array.isArray(arr)) {
    const res = arr.filter(item => item[valueKey] === value)
    if (res.length) {
      return res[0][labelName]
    } else {
      return ''
    }
  } else {
    return ''
  }
}


/**
  * @desc 深拷贝
  * @param {Object} obj
  * @returns
  */

exports.cloneDeep = obj => {
  const objClone = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    for (const key in obj) {
      if (obj[key] && typeof obj[key] === 'object') {
        objClone[key] = cloneDeep(obj[key])
      } else {
        objClone[key] = obj[key]
      }
    }
  }
  return objClone
}

/**
 * 树节点塞选
 * @param {Array} arr 树结构数组
 * @param {String || Numnber} val 塞选值
 * @param {String} key 塞选字段
 * @param {String} children 子数据字段
 * @returns {Array} 树结构数组，包含塞选字段的数据
 */

exports.filterTree = ({ arr, val, key = 'id', children = 'children' }) => {
  let node = []
  arr.map(item => {
    if (item[key].indexOf(val) >= 0) {
      node.push(item)
      return
    }
    if (item[children] && item[children].length > 0) {
      let child = filterTree(item[children], val)
      if (child.length > 0) {
        item[children] = child
        node.push(item)
      }
      return
    }
    return
  })
  return node
}