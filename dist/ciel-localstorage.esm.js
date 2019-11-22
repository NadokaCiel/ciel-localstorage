import _parseInt from '@babel/runtime-corejs2/core-js/parse-int';
import _Date$now from '@babel/runtime-corejs2/core-js/date/now';
import _Number$isInteger from '@babel/runtime-corejs2/core-js/number/is-integer';
import _JSON$stringify from '@babel/runtime-corejs2/core-js/json/stringify';
import SHA1 from 'crypto-js/sha1';
import Base64 from 'crypto-js/enc-base64';

var sha1=function(string){return SHA1(string).toString()};function setLocalStorage(key,value,expired){return value||0===value?(window.localStorage.setItem(sha1(key),Base64.stringify(_JSON$stringify(value))),expired&&_Number$isInteger(expired)&&window.localStorage.setItem(sha1("".concat(key,"__expires__")),Base64.stringify(_Date$now()+1e3*expired)),value):""}function getLocalStorage(key){var expired=Base64.parse(window.localStorage.getItem(sha1("".concat(key,"__expires__")))),now=_Date$now();if(expired&&now>=_parseInt(expired,10))return removeLocalStorage(sha1(key)),"";var value=Base64.parse(window.localStorage.getItem(sha1(key)));return value?JSON.parse(value):null}function removeLocalStorage(key){window.localStorage.removeItem(sha1(key)),window.localStorage.removeItem(sha1("".concat(key,"__expires__")));}

var index = {set:setLocalStorage,get:getLocalStorage,remove:removeLocalStorage};

export default index;
//# sourceMappingURL=ciel-localstorage.esm.js.map
