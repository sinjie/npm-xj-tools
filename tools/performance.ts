
/**
  * @desc 函数防抖
  * @param func 函数
  * @param wait 延迟执行毫秒数
  * @param immediate true 表立即执行，false 表非立即执行
  * 按钮快速多次点击，造成多次请求接口,立即执行
  * input输入搜索键盘事件，非立即执行
  */

exports.debounce = (func:()=>void, wait = 1500, immediate = true) => {
  let timeout:null| NodeJS.Timeout = null;
  return function  (this:any,...args:[]) {
    const context = this
    // const args =  Array.prototype.slice.call(arguments)
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

export class Debounced {

  /**
   *
   * @param fn 要执行的函数
   * @param wait  时间
   * @param immediate 是否在触发事件后 在时间段n开始，立即执行，否则是时间段n结束，才执行
   */
  static use(fn:Function,wait:number=1000,immediate:boolean=false){
      let timer:NodeJS.Timeout|null
      return (...args:any)=>{
          if(timer) clearTimeout(timer)
          if(immediate){
              if(!timer) fn.apply(this,args);
              timer = setTimeout(function(){//n 秒内 多次触发事件,重新计算.timeer
                  timer = null;//n 秒内没有触发事件 timeer 设置为null，保证了n 秒后能重新触发事件 flag = true = !timmer
              },wait)
          }else{
              timer = setTimeout(()=>{ fn.apply(this,args)},wait)
          }
      }
  }

}

/**
  * @desc 函数节流
  * @param func 函数
  * @param wait 延迟执行毫秒数
  */

exports.throttle = (func:()=>void, wait = 1500) => {
  let timeout:null| NodeJS.Timeout = null;
  return function (this:any,...args:[]) {
    const context = this
    // const args = arguments
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.apply(context, args)
      }, wait)
    }
  }
}
