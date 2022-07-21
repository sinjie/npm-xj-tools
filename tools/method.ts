
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
 
interface Obj{
  [propName:string]:any;
}

class Backup {
  obj:Obj;
  constructor() {
    this.obj = {}
  }
  recover (key:string) {
    return JSON.parse(this.obj[key])
  }
  save (key:string, objValue:string) {
    this.obj[key] = JSON.stringify(objValue)
  }
  delete (key:string) {
    delete this.obj[key]
  }
}

exports.Backup = Backup

/* 
  * 是否是字符串
  */
exports.isString = (param:string) => {
  return typeof param === 'string'
}

/* 
* 是否是布尔值
*/
exports.isBoolean = (param:boolean) => {
  return typeof param === 'boolean'
}

/* 
* 是否是数字
*/
exports.isNumber = (param:number) => {
  return typeof param === 'number'
}

/* 
* 是否是数组
*/
exports.isArray = (param:[]) => {
  return Object.prototype.toString.call(param) === '[object Array]'
}

/* 
* 是否是对象
*/
exports.isObject = (param:object) => {
  return Object.prototype.toString.call(param) === '[object Object]'
}

/* 
* 是否是函数
*/
exports.isFunction = (param:()=>void) => {
  return Object.prototype.toString.call(param) === '[object Function]'
}

/* 
* 判断类型
*/
// exports.typeOf = (param) => {
//   let type = typeof param
//   if (isNaN(param)) type = NaN
//   if (this.isArray(param)) type = 'Array'
//   if (isObject(param)) type = 'Object'
//   if (isFunction(param)) type = 'Function'
//   return type
// }