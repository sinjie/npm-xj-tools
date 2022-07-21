"use strict";
// 单击复制
exports.copyToClip = function (content, callback) {
    if (callback === void 0) { callback = function () { }; }
    var aux = document.createElement('input');
    aux.setAttribute('value', content);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);
    callback();
};
