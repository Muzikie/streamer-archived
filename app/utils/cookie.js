const cookie = require('cookie');

const hex = (code, length) => {
  let result = code.toString(16);
  while (result.length < length) result = '0' + result;
  return result;
}

// eslint-disable-next-line max-statements
const myEscape = (value) => {
  let str = value.toString();
  let result = '';
  let index = 0;
  let chr, code;
  while (index < str.length) {
    chr = str.charAt(index++);
    if (/[\w*+\-./@]/.exec(chr)) {
      result += chr;
    } else {
      code = chr.charCodeAt(0);
      if (code < 256) {
        result += '%' + hex(code, 2);
      } else {
        result += '%u' + hex(code, 4).toUpperCase();
      }
    }
  }
  return result;
}

const decodeData = (value) => {
  try {
    return JSON.parse(decodeURIComponent(myEscape(atob(value))));
  } catch (error) {
    return {};
  }
}

exports.getCookies = (cookieString = '') => {
  const parsedCookies = cookie.parse(cookieString);
  const session = parsedCookies['@session'];
  return decodeData(session);
};
