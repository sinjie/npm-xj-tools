/**
  * 根据value获取lable值
  * @param {Array<{label: String, value: Number | String}>} arr 数据源
  * @param {Number | String} value 值
  * @returns
  */
interface Some {
    [propName: string]: any;
}
interface valueLabel extends Some {
    label: string;
    value: number | string;
}
/**
  * @desc 深拷贝
  * @param {Object} obj
  * @returns
  */
declare const cloneDeep: (obj: Some) => Some;
/**
 * 树节点塞选
 * @param {Array} arr 树结构数组
 * @param {String || Numnber} val 塞选值
 * @param {String} key 塞选字段
 * @param {String} children 子数据字段
 * @returns {Array} 树结构数组，包含塞选字段的数据
 */
interface ArrItem {
    children?: ArrItem[];
    [propName: string]: any;
}
interface Args {
    arr: ArrItem[];
    val: number | string;
    children?: string;
    key?: string;
    readonly [propName: string]: any;
}
declare function filterTree<T = ArrItem>(args: Args): T[];
