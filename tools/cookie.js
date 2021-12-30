import Cookie from "js-cookie";

export const getCookie = (TokenName, option = {}) => {
  Cookie.get(TokenName, { ...option });
};

export const setCookie = (TokenName, token, option = {}) => {
  Cookie.set(TokenName, token, { expires: 1, ...option });
};

export const removeCookie = (TokenName, option = {}) => {
  Cookie.remove(TokenName, { ...option });
};
