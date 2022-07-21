"use strict";
/**
  * @desc 函数防抖
  * @param func 函数
  * @param wait 延迟执行毫秒数
  * @param immediate true 表立即执行，false 表非立即执行
  * 按钮快速多次点击，造成多次请求接口,立即执行
  * input输入搜索键盘事件，非立即执行
  */
exports.debounce = function (func, wait, immediate) {
    if (wait === void 0) { wait = 1500; }
    if (immediate === void 0) { immediate = true; }
    var timeout = null;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        // const args =  Array.prototype.slice.call(arguments)
        if (timeout)
            clearTimeout(timeout);
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(function () {
                timeout = null;
            }, wait);
            if (callNow)
                func.apply(context, args);
        }
        else {
            timeout = setTimeout(function () {
                func.apply(context, args);
            }, wait);
        }
    };
};
/**
  * @desc 函数节流
  * @param func 函数
  * @param wait 延迟执行毫秒数
  */
exports.throttle = function (func, wait) {
    if (wait === void 0) { wait = 1500; }
    var timeout = null;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        // const args = arguments
        if (!timeout) {
            timeout = setTimeout(function () {
                timeout = null;
                func.apply(context, args);
            }, wait);
        }
    };
};
