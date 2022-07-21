
/**
  * 根据value获取lable值
  * @param {Array<{label: String, value: Number | String}>} arr 数据源
  * @param {Number | String} value 值
  * @returns
  */
interface Some {
  [propName:string]:any;
}

 interface valueLabel extends Some {
  label:string;
  value:number|string;
 }
exports.getLabelByValueFromArray = (arr:valueLabel[], value:number|string, labelName = 'label', valueKey = 'value'):object|string => {
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

const cloneDeep = (obj:Some) => {
  const objClone:Some = Array.isArray(obj) ? [] : {}
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
exports.cloneDeep = cloneDeep

/**
 * 树节点塞选
 * @param {Array} arr 树结构数组
 * @param {String || Numnber} val 塞选值
 * @param {String} key 塞选字段
 * @param {String} children 子数据字段
 * @returns {Array} 树结构数组，包含塞选字段的数据
 */

interface ArrItem {
  children?: ArrItem[]
  [propName: string]: any
}

interface Args {
  arr: ArrItem[]
  val: number | string
  children?: string
  key?: string
  readonly [propName: string]: any
}

function filterTree<T = ArrItem>(args: Args):T[] {
  const key = args.key ?? 'id'
  const children = args.children ?? 'children'
  const node:T[] = []
  args.arr.map((item) => {
    if (item[key].indexOf(args.val) >= 0) {
      node.push(item as T)
      return
    }
    if (item[children] && item[children].length > 0) {
      const child = filterTree({arr: item[children], val: args.val})
      if (child.length > 0) {
        item[children] = child
        node.push(item as T)
      }
      return
    }
    return
  })
  return node
}

exports.filterTree = filterTree