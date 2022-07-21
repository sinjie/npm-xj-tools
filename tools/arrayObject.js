"use strict";
exports.getLabelByValueFromArray = function (arr, value, labelName, valueKey) {
    if (labelName === void 0) { labelName = 'label'; }
    if (valueKey === void 0) { valueKey = 'value'; }
    if (Array.isArray(arr)) {
        var res = arr.filter(function (item) { return item[valueKey] === value; });
        if (res.length) {
            return res[0][labelName];
        }
        else {
            return '';
        }
    }
    else {
        return '';
    }
};
/**
  * @desc 深拷贝
  * @param {Object} obj
  * @returns
  */
var cloneDeep = function (obj) {
    var objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === 'object') {
        for (var key in obj) {
            if (obj[key] && typeof obj[key] === 'object') {
                objClone[key] = cloneDeep(obj[key]);
            }
            else {
                objClone[key] = obj[key];
            }
        }
    }
    return objClone;
};
exports.cloneDeep = cloneDeep;
function filterTree(args) {
    var _a, _b;
    var key = (_a = args.key) !== null && _a !== void 0 ? _a : 'id';
    var children = (_b = args.children) !== null && _b !== void 0 ? _b : 'children';
    var node = [];
    args.arr.map(function (item) {
        if (item[key].indexOf(args.val) >= 0) {
            node.push(item);
            return;
        }
        if (item[children] && item[children].length > 0) {
            var child = filterTree({ arr: item[children], val: args.val });
            if (child.length > 0) {
                item[children] = child;
                node.push(item);
            }
            return;
        }
        return;
    });
    return node;
}
exports.filterTree = filterTree;
