const Cookie = require('js-cookie')

declare type stringName = string;

exports.getCookie = (TokenName:stringName, option = {}) => {
  return Cookie.get(TokenName, { ...option });
};

exports.setCookie = (TokenName:stringName, token:stringName, option = {}) => {
  Cookie.set(TokenName, token, { expires: 1, ...option });
};

exports.removeCookie = (TokenName:stringName, option = {}) => {
  Cookie.remove(TokenName, { ...option });
};