/**
 * @param {Object} obj 对象
 * @param {String} prototype 属性名
 * @returns Boolean
 */
export const hasOwn = (obj, prototype) => {
  return Object.hasOwnProperty.call(obj, prototype)
}
