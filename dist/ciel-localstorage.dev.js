(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@babel/runtime-corejs2/core-js/parse-int'), require('@babel/runtime-corejs2/core-js/date/now'), require('@babel/runtime-corejs2/core-js/number/is-integer'), require('@babel/runtime-corejs2/core-js/json/stringify'), require('crypto-js/sha1'), require('crypto-js/enc-base64')) :
  typeof define === 'function' && define.amd ? define(['@babel/runtime-corejs2/core-js/parse-int', '@babel/runtime-corejs2/core-js/date/now', '@babel/runtime-corejs2/core-js/number/is-integer', '@babel/runtime-corejs2/core-js/json/stringify', 'crypto-js/sha1', 'crypto-js/enc-base64'], factory) :
  (global = global || self, (function () {
    var current = global['ciel-localstorage'];
    var exports = global['ciel-localstorage'] = factory(global._parseInt, global._Date$now, global._Number$isInteger, global._JSON$stringify, global.SHA1, global.Base64);
    exports.noConflict = function () { global['ciel-localstorage'] = current; return exports; };
  }()));
}(this, (function (_parseInt, _Date$now, _Number$isInteger, _JSON$stringify, SHA1, Base64) { 'use strict';

  _parseInt = _parseInt && _parseInt.hasOwnProperty('default') ? _parseInt['default'] : _parseInt;
  _Date$now = _Date$now && _Date$now.hasOwnProperty('default') ? _Date$now['default'] : _Date$now;
  _Number$isInteger = _Number$isInteger && _Number$isInteger.hasOwnProperty('default') ? _Number$isInteger['default'] : _Number$isInteger;
  _JSON$stringify = _JSON$stringify && _JSON$stringify.hasOwnProperty('default') ? _JSON$stringify['default'] : _JSON$stringify;
  SHA1 = SHA1 && SHA1.hasOwnProperty('default') ? SHA1['default'] : SHA1;
  Base64 = Base64 && Base64.hasOwnProperty('default') ? Base64['default'] : Base64;

  var sha1=function(string){return SHA1(string).toString()};function setLocalStorage(key,value,expired){return value||0===value?(window.localStorage.setItem(sha1(key),Base64.stringify(_JSON$stringify(value))),expired&&_Number$isInteger(expired)&&window.localStorage.setItem(sha1("".concat(key,"__expires__")),Base64.stringify(_Date$now()+1e3*expired)),value):""}function getLocalStorage(key){var expired=Base64.parse(window.localStorage.getItem(sha1("".concat(key,"__expires__")))),now=_Date$now();if(expired&&now>=_parseInt(expired,10))return removeLocalStorage(sha1(key)),"";var value=Base64.parse(window.localStorage.getItem(sha1(key)));return value?JSON.parse(value):null}function removeLocalStorage(key){window.localStorage.removeItem(sha1(key)),window.localStorage.removeItem(sha1("".concat(key,"__expires__")));}

  var index = {set:setLocalStorage,get:getLocalStorage,remove:removeLocalStorage};

  return index;

})));
//# sourceMappingURL=ciel-localstorage.dev.js.map
