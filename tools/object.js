"use strict";
/**
 * @param {Object} obj 对象
 * @param {String} prototype 属性名
 * @returns Boolean
 */
exports.hasOwn = function (obj, prototype) {
    return Object.hasOwnProperty.call(obj, prototype);
};
/**
 * 深度获取对象的值
 * @param collection Data source
 * @param keyPath Key path array
 * @param notSetValue Default value for not found
 */
// exports.getObjectIn = (collection, keyPath, notSetValue = null) =>
//   keyPath.reduce(
//     (rlt, keyIndex) => (rlt && rlt[keyIndex] ? rlt[keyIndex] : null),
//     collection
//   ) || notSetValue;
