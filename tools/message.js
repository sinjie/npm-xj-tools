"use strict";
exports.validateMsg = {
    number: '请输入数字',
    positiveInteger: '请输入正整数',
    positiveIntegerLen1to5: '仅支持1~99999内的正整数',
    positiveIntegerMaxHour: '请输入0~876000内的整数',
    nonNegativeInteger: '请输入非负整数',
    positiveNumber: '请输入正数',
    nonNegativeNumber: '请输入非负数',
    phone: '请输入正确的手机号码',
    email: '请输入正确的邮箱',
    codeLen1to32: '请输入32个字符以内的数字、字母或下划线',
    usernameLen4to16: '请输入4-16个字符以内的数字或字母',
    usernameLen5to18: '请输入5-18个字符的数字、字母或_，必须以字母开头',
    passwordLen8to32: '至少1个大写字母，1个小写字母和1个数字，长度为8-32位',
    passwordLen8to32WithSymbol: "\u81F3\u5C111\u4E2A\u5927\u5199\u5B57\u6BCD\uFF0C1\u4E2A\u5C0F\u5199\u5B57\u6BCD\u548C1\u4E2A\u6570\u5B57\uFF0C\u53EF\u5305\u542B\u7279\u6B8A\u7B26\u53F7\uFF0C\u957F\u5EA6\u4E3A8-32\u4F4D",
    passwordLen8to16WithSymbol: "\u81F3\u5C111\u4E2A\u5927\u5199\u5B57\u6BCD\uFF0C1\u4E2A\u5C0F\u5199\u5B57\u6BCD\u548C1\u4E2A\u6570\u5B57\uFF0C\u53EF\u5305\u542B\u7279\u6B8A\u7B26\u53F7\uFF0C\u957F\u5EA6\u4E3A8-16\u4F4D",
    idCard: '请输入正确的身份证号码',
    percentage2Decimal: '请输入0-100，保留两位小数',
    percentagePositive: '请输入100以内的正整数',
    percentagePositiveN0: '请输入0-100的整数',
    max1Decimal: '请保留一位小数',
    max2Decimal: '请保留两位小数',
    max8IntN2Decimal: '最多输入8位整数，2位小数',
    chineseNumbersOrLetters: '请输入中文、数字或字母',
    postcode: '请输入正确的邮编',
    letterOrNumber: '请输入字母或数字',
    ipv4: '格式错误',
    ipv4Subnet: '格式错误',
    SSHSecretKeyLen2to64: '请输入正确的密钥名称',
    normalUrl: '请输入合法的地址',
    netName: '名称应以大写字母或小写字母开头，最长为128字符，且只包含“0-9, a-z, A-Z, "\'-_()[].:^”'
};
