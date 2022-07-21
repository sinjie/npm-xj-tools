"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Cookie = require('js-cookie');
exports.getCookie = function (TokenName, option) {
    if (option === void 0) { option = {}; }
    return Cookie.get(TokenName, __assign({}, option));
};
exports.setCookie = function (TokenName, token, option) {
    if (option === void 0) { option = {}; }
    Cookie.set(TokenName, token, __assign({ expires: 1 }, option));
};
exports.removeCookie = function (TokenName, option) {
    if (option === void 0) { option = {}; }
    Cookie.remove(TokenName, __assign({}, option));
};
