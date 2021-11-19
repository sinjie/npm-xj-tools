<h1 style="text-align: center;">方法列表</h1>

## 目录简介

```
├── abnormalCodeTable.js  项目错误码对照表，配合axios使用
├── array.js              数组方法
├── arrayObject.js        深数组方法
├── axios.js              二次封装axios
├── copy.js               copy相关
├── dateTime.js           日期时间处理
├── message.js            错误提示，配合regular使用
├── method.js             方法
├── object.js             对象方法
├── performance.js        性能方法
├── regular.js            正则
└── stringNumber.js       数字字符串
```

## 方法简介

- mergeArray 合并数组
  > @param {Array ...} 多个数组传入  
  > @returns {Array} 新数组

```
const newArr = mergeArray(arr1, arr2, arr3)
```

- mergeRemoveSame 合并数组并去重
  > @param {Array ...} 多个数组传入  
  > @returns {Array} 新数组

```
const newArr = mergeRemoveSame(arr1, arr2, arr3)
```

- mergeGetOnly 合并数组取不重复项
  > @param {Array ...} 多个数组传入  
  > @returns {Array} 新数组

```
const newArr = mergeGetOnly(arr1, arr2, arr3)
```

- sort 排序
  > @param {Array} arr 数组  
  > @param {String} type = undefined 数据类型  
  > type：undefined 默认字符串，number 数字，ignoreCase 忽略大小写字符串  
  > @returns {Array} 新数组

```
const newArr = sort(arr, 'number')
```

- getLabelByValueFromArray 获取 selectList 中的对应选项
  > @param {Array<{label: String, value: Number | String}>} arr 数据源  
  > @param {Number | String} value 过滤值  
  > @param {String} labelName = 'label' 或取字段名  
  > @param {String} valueKey 过滤字段名  
  > @returns {String} 对应的名称

```
const label = getLabelByValueFromArray(arr, value, [labelName, valueKey])
```

- cloneDeep 简单深拷贝
  > @param {Array ｜ Object} obj 对象或数组  
  > @returns {Array ｜ Object} 拷贝后的数据

```
const newArr = cloneDeep(arr)
```

- filterTree 树节点塞选
  > @param {Object} 对象结构参数  
  >  @property {Array} arr 树结构数组 required  
  >  @property {String || Numnber} val 塞选值 required  
  >  @property {String} key = 'id' 塞选字段  
  >  @property {String} children = 'children' 子数据字段  
  > @returns {Array} 树结构数组，包含塞选字段的数据

```
const newArr = filterTree({arr: arr1, val: '浙江', key: 'name', children: 'children'})
```

- axios 二次封装
  > @constructor  
  > @param {Object} 参数  
  > @property {baseURL=''} 服务端地址  
  >  @property {timeout=60000} 超时时间  
  >  @property {errorCallback=()=>{}} 错误回调  
  >  @property {request=()=>{}} 拦截器-请求-成功  
  >  @property {requestError=()=>{})} 拦截器-请求-失败  
  >  @property {response=()=>{})} 拦截器-返回-成功  
  >  @property {responseError=()=>{})} 拦截器-返回-失败

```
const param = {
  baseURL,
  timeout,
  errorCallback,
  request,
  requestError,
  response,
  responseError
}
const request = new axios(param)
```

- copyToClip 文字复制
  > @param {String} content 文字内容  
  > @param {Function} callback 回调函数

```
copyToClip('复制')
```

- dateFormat 时间格式化
  > @param {Time} time 文字内容  
  > @param {String} fmt = 'YY-MM-DD hh:mm:ss' 时间格式  
  > @returns {String} 格式化后的时间

```
const time = dateFormat(1637309061034)
const time = dateFormat('2020/11/11 11:11:11', 'YY-MM-DD hh:mm')
```

- passTime 距今时间
  > @param {Time} fromTime 初始时间  
  > @returns {String} 距今时间

```
const str = passTime('2020/11/11 11:11:11')
```

- remainTime 还剩多少时间
  > @param {Time} endTime 结束时间  
  > @returns {Object} 还剩多少时间  
  >  @property {d} 天  
  >  @property {h} 时  
  >  @property {m} 分  
  >  @property {s} 秒

```
const obj = passTime('2020/11/11 11:11:11')
```

- Backup 备份数据
  > @constructor  
  >  @param {Object} 参数  
  >  @function recover 获取  
  >  「 @param {String} key 唯一字段 」  
  >  @function save 备份  
  >  「 @param {String} key 唯一字段 」  
  >  「 @param {Object, Array} objValue 备份的内容 」  
  >  @function delete 删除  
  >  「 @param {String} key 唯一字段 」  
  >  不同页面最好 new 不同的实例，保证相同页面的 key 不重复即可

```
const copy = new Backup()
```

- 类型校验

```
const isString = isString(str)
const isBoolean = isBoolean(str)
const isNumber = isNumber(str)
const isArray = isArray(str)
const isObject = isObject(str)
const isFunction = isFunction(str)
const type = typeOf(str)
```

- hasOwn 判断对象是否存在某个属性
  > @param {Object} obj 对象
  > @param {String} prototype 属性名
  > @returns {Boolean}

```
const hasId = hasOwn(obj, 'id')
```

- debounce 函数防抖
  > @param func 函数
  > @param wait = 1500 延迟执行毫秒数
  > @param immediate = true, true 表立即执行，false 表非立即执行
  > 按钮快速多次点击，造成多次请求接口,立即执行
  > input 输入搜索键盘事件，非立即执行

```
debounce(func, 1500, false)
```

- throttle 函数节流
  > @param func 函数
  > @param wait = 1500 延迟执行毫秒数

```
throttle(func, 500)
```

- makeUp0 数字补 0，小于 10 的数字前面补 0，多用于时间日期

  > @param { Number } number 1-2 位数的数字或数字格式的字符串
  > @returns { String } 二位数字类型的字符串

```
const number = makeUp0(5)
// '05'
```

- trim 去首尾空格

```
const str = trim(' sdf ')
// 'sdf'
```

- toFixed 取小数位数
  > @param {Number} number 数字或数字类型的字符串
  > @param {Number} index = 2 取值位数
  > @param {String} type = 'fixed', 类型 'fixed' -- 四舍五入; 'floor' -- 截取;

```
const number = toFixed(222.222, 2, 'floor')
// '222.22'
```

- regular 规则对象

```
  number:数字
  positiveInteger: 正整数
  positiveIntegerLen1to5: 1~99999内的正整数
  positiveIntegerMaxHour: 876000内的正整数
  nonNegativeInteger: 非负整数
  positiveNumber: 正数
  nonNegativeNumber: 非负数
  phone: 手机号
  email: 邮箱
  codeLen1to32: 32个字符以内的数字、字母或下划线
  usernameLen4to16: 4-16个字符以内的数字或字母
  usernameLen5to18: 5-18个字符的数字、字母或_，必须以字母开头
  passwordLen8to32: 至少1个大写字母，1个小写字母和1个数字，长度为8-32位
  passwordLen8to32WithSymbol: 至少1个大写字母，1个小写字母和1个数字，可包含特殊符号，长度为8-32位
  passwordLen8to16WithSymbol: 至少1个大写字母，1个小写字母和1个数字，可包含特殊符号，长度为8-16位,
  idCard: 身份证号码
  percentage2Decimal: 0-100，保留两位小数
  percentagePositive: 100以内的正整数
  percentagePositiveN0: 0-100的整数
  max1Decimal: 一位小数
  max2Decimal: 两位小数
  max8IntN2Decimal: 最多输入8位整数，2位小数
  chineseNumbersOrLetters: 请输入中文、数字或字母
  postcode: 邮编
  letterOrNumber: 字母或数字
  ipv4: ip
  ipv4Subnet: ip+掩码
  SSHSecretKeyLen2to64: 2-64个字符的数字、字母或_，必须以字母开头
  normalUrl: url
```
