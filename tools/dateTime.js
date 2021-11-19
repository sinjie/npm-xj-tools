import { makeUp0 } from './stringNumber'
/**
 * 时间格式转换
 * @param {Number,'[object Date]'} time 时间戳或者时间对象 或者时间格式的字符串
 * @param {String} fmt 'YY-MM-DD hh:mm:ss'
 * @returns
 */

export const dateFormat = (time, fmt = 'YY-MM-DD hh:mm:ss') => {
  const date = Object.prototype.toString.call(new Date(time)) === '[object Date]' ? new Date(time) : new Date()

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const min = date.getMinutes()
  const second = date.getSeconds()

  const newTime = fmt
    .replace(/YY/g, year)
    .replace(/Y/g, String(year).substr(2))
    .replace(/MM/g, makeUp0(month))
    .replace(/M/g, month)
    .replace(/DD/g, makeUp0(day))
    .replace(/D/g, day)
    .replace(/hh/g, makeUp0(hour))
    .replace(/h/g, hour)
    .replace(/mm/g, makeUp0(min))
    .replace(/m/g, min)
    .replace(/ss/g, makeUp0(second))
    .replace(/s/g, second)

  return newTime
}

export const passTime = (fromTime) => {
  var time = (new Date()).getTime() - fromTime
  var m = parseInt(time / 1000 / 60)
  var h = parseInt(m / 60)
  var d = parseInt(h / 24)
  var month = parseInt(d / 30)
  var y = parseInt(month / 12)
  if (y) return y + '年前'
  if (month) return month + '个月前'
  if (d) return d + '天前'
  if (h) return h + '小时前'
  if (m) return m + '分钟前'
  return y + '刚刚'
}

export const remainTime = (endTime) => {
  var time = endTime - (new Date()).getTime()
  var obj = { d: 0, h: 0, m: 0, s: 0 }
  if (time > 0) {
    obj.d = Math.floor(time / 1000 / 3600 / 24)
    obj.h = Math.floor(time / 1000 / 3600 % 24)
    obj.m = Math.floor(time / 1000 / 60 % 60)
    obj.s = Math.floor(time / 1000 % 60)
  }
  return obj
}