
/**
  * 备份数据
  * @function recover 获取
  *   @param {String} key 唯一字段
  * @function save 备份
  *   @param {String} key 唯一字段
  *   @param {Object, Array} objValue 备份的内容
  * @function delete 删除
  *   @param {String} key 唯一字段
  * 不同页面最好new不同的实例，保证相同页面的key不重复即可
  */
export class Backup {
  constructor() {
    this.obj = {}
  }
  recover (key) {
    return JSON.parse(this.obj[key])
  }
  save (key, objValue) {
    this.obj[key] = JSON.stringify(objValue)
  }
  delete (key) {
    delete this.obj[key]
  }
}

/* 
  * 是否是字符串
  */
export const isString = (param) => {
  return typeof param === 'string'
}

/* 
* 是否是布尔值
*/
export const isBoolean = (param) => {
  return typeof param === 'boolean'
}

/* 
* 是否是数字
*/
export const isNumber = (param) => {
  return typeof param === 'number'
}

/* 
* 是否是数组
*/
export const isArray = (param) => {
  return Object.prototype.toString.call(param) === '[object Array]'
}

/* 
* 是否是对象
*/
export const isObject = (param) => {
  return Object.prototype.toString.call(param) === '[object Object]'
}

/* 
* 是否是函数
*/
export const isFunction = (param) => {
  return Object.prototype.toString.call(param) === '[object Function]'
}

/* 
* 判断类型
*/
export const typeOf = (param) => {
  let type = typeof param
  if (isNaN(param)) type = NaN
  if (this.isArray(param)) type = 'Array'
  if (isObject(param)) type = 'Object'
  if (isFunction(param)) type = 'Function'
  return type
}