
/**
 * 数字补0，小于10的数字前面补0，多用于时间日期
 * @param { Number } number 1-2位数的数字或数字格式的字符串
 * @returns { String }
 */

exports.makeUp0 = (type:number) => (type < 10 ? String(type).padStart(2, '0') : String(type))

/*
  * 去首尾空格
  * */
exports.trim = (str:string) => {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

/**
  * 取小数位数
  * @param {Number} number 数字或数字类型的字符串
  * @param {Number} index  取值位数(默认2位小数)
  * @param {String} type  类型  'fixed' -- 四舍五入;  'floor' -- 截取;
   */
exports.toFixed = (number:number, index = 2, type = 'fixed') => {
    if (type === 'fixed') {
      return number.toFixed(index)
    }
    if (type === 'floor') {
      return Math.floor(number * Math.pow(10, index)) / Math.pow(10, index)
    }
}
