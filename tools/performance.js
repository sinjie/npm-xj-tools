
/**
  * @desc 函数防抖
  * @param func 函数
  * @param wait 延迟执行毫秒数
  * @param immediate true 表立即执行，false 表非立即执行
  * 按钮快速多次点击，造成多次请求接口,立即执行
  * input输入搜索键盘事件，非立即执行
  */

exports.debounce = (func, wait = 1500, immediate = true) => {
  let timeout
  return function () {
    const context = this
    const args = arguments
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      var callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
  }
}

/**
  * @desc 函数节流
  * @param func 函数
  * @param wait 延迟执行毫秒数
  */

exports.throttle = (func, wait = 1500) => {
  let timeout
  return function () {
    const context = this
    const args = arguments
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.apply(context, args)
      }, wait)
    }
  }
}