import _parseInt from '@babel/runtime-corejs2/core-js/parse-int';
import _Date$now from '@babel/runtime-corejs2/core-js/date/now';
import _Number$isInteger from '@babel/runtime-corejs2/core-js/number/is-integer';
import _JSON$stringify from '@babel/runtime-corejs2/core-js/json/stringify';

function setLocalStorage(key,value,expired){return value||0===value?(window.localStorage.setItem(key,_JSON$stringify(value)),expired&&_Number$isInteger(expired)&&window.localStorage.setItem("".concat(key,"__expires__"),_Date$now()+1e3*expired),value):""}function getLocalStorage(key){var expired=window.localStorage.getItem("".concat(key,"__expires__")),now=_Date$now();if(expired&&now>=_parseInt(expired,10))return removeLocalStorage(key),"";var value=window.localStorage.getItem(key);return value?JSON.parse(value):null}function removeLocalStorage(key){window.localStorage.removeItem(key),window.localStorage.removeItem("".concat(key,"__expires__"));}

var index = {set:setLocalStorage,get:getLocalStorage,remove:removeLocalStorage};

export default index;
//# sourceMappingURL=ciel-localstorage.esm.js.map
