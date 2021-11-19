import { validateMsg } from './message'

export const regular = {
  // 数字
  number: {
    pattern: /^[0-9]+$/,
    message: validateMsg.number
  },

  // 正整数
  positiveInteger: {
    pattern: /^[1-9]\d*$/,
    message: validateMsg.positiveInteger
  },

  // 正整数 1-5位
  positiveIntegerLen1to5: {
    pattern: /^[1-9]\d{0,4}$/,
    message: validateMsg.positiveIntegerLen1to5
  },

  // 876000内的正整数
  positiveIntegerMaxHour: {
    pattern: /^[1-9]$|^[1-9]\d$|^876000$/,
    message: validateMsg.positiveIntegerMaxHour
  },

  // 非负整数
  nonNegativeInteger: {
    pattern: /^[1-9]\d*$|0$/,
    message: validateMsg.nonNegativeInteger
  },

  // 正数
  positiveNumber: {
    pattern: /^[1-9]\d*(\.\d*)?|0\.\d*[1-9]\d*$/,
    message: validateMsg.positiveNumber
  },

  // 非负数
  nonNegativeNumber: {
    pattern: /^\d+(\.\d+)?$/,
    message: validateMsg.nonNegativeNumber
  },

  // 手机号
  phone: {
    pattern: /^1[3456789]\d{9}$/,
    message: validateMsg.phone
  },

  // 邮箱
  email: {
    pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    message: validateMsg.email
  },

  // code 1-32位
  codeLen1to32: {
    pattern: /^[a-zA-Z0-9_]{1,32}$/,
    message: validateMsg.codeLen1to32
  },

  // 用户名 4-16位
  usernameLen4to16: {
    pattern: /^[a-zA-Z0-9]{4,16}$/,
    message: validateMsg.usernameLen4to16
  },

  // 用户名 5-19位
  usernameLen5to18: {
    pattern: /^[a-zA-Z][a-zA-Z0-9_]{4,17}$/,
    message: validateMsg.usernameLen5to18
  },

  // 密码 8-32位
  passwordLen8to32: {
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,32}$/,
    message: validateMsg.passwordLen8to32
  },

  // 密码 8-32位 含特殊符号
  passwordLen8to32WithSymbol: {
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*(){}[\]/?.>,<'";:]{8,32}$/,
    message: validateMsg.passwordLen8to32WithSymbol
  },
  // 密码 8-16位 含特殊符号
  passwordLen8to16WithSymbol: {
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*(){}[\]/?.>,<'";:]{8,32}$/,
    message: validateMsg.passwordLen8to16WithSymbol
  },

  // 身份证
  idCard: {
    pattern: /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/,
    message: validateMsg.idCard
  },

  // 百分比 2位小数
  percentage2Decimal: {
    pattern: /^0$|^0\.[1-9]$|^0\.0[1-9]$|^0\.[1-9]\d$|^[1-9](\.\d{1,2})?$|^[1-9]\d(\.\d{1,2})?$|^100$/,
    message: validateMsg.percentage2Decimal
  },

  // 百分比 1-100
  percentagePositive: {
    pattern: /^[1-9]$|^[1-9]\d$|^100$/,
    message: validateMsg.percentagePositive
  },

  // 百分比 0-100
  percentagePositiveN0: {
    pattern: /^0$|^[1-9]$|^[1-9]\d$|^100$/,
    message: validateMsg.percentagePositiveN0
  },

  // 保留一位小数
  max1Decimal: {
    pattern: /^\d*(\.\d{1,1})?$/,
    message: validateMsg.max1Decimal
  },

  // 保留两位小数
  max2Decimal: {
    pattern: /^\d*(\.\d{1,2})?$/,
    message: validateMsg.max2Decimal
  },

  // 最多 8位整数 2位小数
  max8IntN2Decimal: {
    pattern: /^[1-9]\d{0,7}(\.\d{1,2})?$|^0(\.\d{1,2})?$/,
    message: validateMsg.max8IntN2Decimal
  },

  // 中文 数字 和 字母
  chineseNumbersOrLetters: {
    pattern: /^[\u4e00-\u9fa5a-zA-Z0-9]+$/,
    message: validateMsg.chineseNumbersOrLetters
  },

  // 邮编
  postcode: {
    pattern: /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/,
    message: validateMsg.postcode
  },

  // 字母和数字
  letterOrNumber: {
    pattern: /^[A-Za-z0-9]+$/,
    message: validateMsg.letterOrNumber
  },

  // 例：172.16.168.138
  ipv4: {
    pattern: /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
    message: validateMsg.ipv4
  },

  // 例：172.16.168.138/24
  ipv4Subnet: {
    pattern: /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)\/([1-9]|([1-2][0-9])|(3[0-2]))$/,
    message: validateMsg.ipv4Subnet
  },

  // SSH秘钥名称
  SSHSecretKeyLen2to64: {
    pattern: /^[a-zA-Z][a-zA-Z0-9_-]{0,127}$/,
    message: validateMsg.SSHSecretKeyLen2to64
  },

  // 网站地址
  normalUrl: {
    pattern: /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/,
    message: validateMsg.normalUrl
  },

  // 网站名称
  netName: {
    pattern: /^[a-zA-Z][a-zA-Z0-9_"'-_\(\)\[\]\.:^]{0,127}$/,
    message: validateMsg.netName
  }
}
