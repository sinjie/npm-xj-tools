const Cookie = require('js-cookie')

exports.getCookie = (TokenName, option = {}) => {
  return Cookie.get(TokenName, { ...option });
};

exports.setCookie = (TokenName, token, option = {}) => {
  Cookie.set(TokenName, token, { expires: 1, ...option });
};

exports.removeCookie = (TokenName, option = {}) => {
  Cookie.remove(TokenName, { ...option });
};
