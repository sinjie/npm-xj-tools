/**
  * 备份数据
  * @function recover 获取
  *   @param {String} key 唯一字段
  * @function save 备份
  *   @param {String} key 唯一字段
  *   @param {Object, Array} objValue 备份的内容
  * @function delete 删除
  *   @param {String} key 唯一字段
  * 不同页面最好new不同的实例，保证相同页面的key不重复即可
  */
interface Obj {
    [propName: string]: any;
}
declare class Backup {
    obj: Obj;
    constructor();
    recover(key: string): any;
    save(key: string, objValue: string): void;
    delete(key: string): void;
}
