!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@babel/runtime-corejs2/core-js/parse-int"),require("@babel/runtime-corejs2/core-js/date/now"),require("@babel/runtime-corejs2/core-js/number/is-integer"),require("@babel/runtime-corejs2/core-js/json/stringify")):"function"==typeof define&&define.amd?define(["@babel/runtime-corejs2/core-js/parse-int","@babel/runtime-corejs2/core-js/date/now","@babel/runtime-corejs2/core-js/number/is-integer","@babel/runtime-corejs2/core-js/json/stringify"],t):(e=e||self,function(){var r=e["ciel-localstorage"],n=e["ciel-localstorage"]=t(e._parseInt,e._Date$now,e._Number$isInteger,e._JSON$stringify);n.noConflict=function(){return e["ciel-localstorage"]=r,n}}())}(this,(function(e,t,r,n){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function i(e,t){return e(t={exports:{}},t.exports),t.exports}var o=i((function(e,t){var r;e.exports=(r=r||function(e,t){var r=Object.create||function(){function e(){}return function(t){var r;return e.prototype=t,r=new e,e.prototype=null,r}}(),n={},i=n.lib={},o=i.Base={extend:function(e){var t=r(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},s=i.WordArray=o.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length},toString:function(e){return(e||c).stringify(this)},concat:function(e){var t=this.words,r=e.words,n=this.sigBytes,i=e.sigBytes;if(this.clamp(),n%4)for(var o=0;o<i;o++){var s=r[o>>>2]>>>24-o%4*8&255;t[n+o>>>2]|=s<<24-(n+o)%4*8}else for(o=0;o<i;o+=4)t[n+o>>>2]=r[o>>>2];return this.sigBytes+=i,this},clamp:function(){var t=this.words,r=this.sigBytes;t[r>>>2]&=4294967295<<32-r%4*8,t.length=e.ceil(r/4)},clone:function(){var e=o.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var r,n=[],i=function(t){t=t;var r=987654321,n=4294967295;return function(){var i=((r=36969*(65535&r)+(r>>16)&n)<<16)+(t=18e3*(65535&t)+(t>>16)&n)&n;return i/=4294967296,(i+=.5)*(e.random()>.5?1:-1)}},o=0;o<t;o+=4){var a=i(4294967296*(r||e.random()));r=987654071*a(),n.push(4294967296*a()|0)}return new s.init(n,t)}}),a=n.enc={},c=a.Hex={stringify:function(e){for(var t=e.words,r=e.sigBytes,n=[],i=0;i<r;i++){var o=t[i>>>2]>>>24-i%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(e){for(var t=e.length,r=[],n=0;n<t;n+=2)r[n>>>3]|=parseInt(e.substr(n,2),16)<<24-n%8*4;return new s.init(r,t/2)}},u=a.Latin1={stringify:function(e){for(var t=e.words,r=e.sigBytes,n=[],i=0;i<r;i++){var o=t[i>>>2]>>>24-i%4*8&255;n.push(String.fromCharCode(o))}return n.join("")},parse:function(e){for(var t=e.length,r=[],n=0;n<t;n++)r[n>>>2]|=(255&e.charCodeAt(n))<<24-n%4*8;return new s.init(r,t)}},f=a.Utf8={stringify:function(e){try{return decodeURIComponent(escape(u.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return u.parse(unescape(encodeURIComponent(e)))}},l=i.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=f.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var r=this._data,n=r.words,i=r.sigBytes,o=this.blockSize,a=i/(4*o),c=(a=t?e.ceil(a):e.max((0|a)-this._minBufferSize,0))*o,u=e.min(4*c,i);if(c){for(var f=0;f<c;f+=o)this._doProcessBlock(n,f);var l=n.splice(0,c);r.sigBytes-=u}return new s.init(l,u)},clone:function(){var e=o.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),h=(i.Hasher=l.extend({cfg:o.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,r){return new e.init(r).finalize(t)}},_createHmacHelper:function(e){return function(t,r){return new h.HMAC.init(e,r).finalize(t)}}}),n.algo={});return n}(Math),r)})),s=i((function(e,t){var r,n,i,s,a,c,u,f;e.exports=(n=(r=f=o).lib,i=n.WordArray,s=n.Hasher,a=r.algo,c=[],u=a.SHA1=s.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var r=this._hash.words,n=r[0],i=r[1],o=r[2],s=r[3],a=r[4],u=0;u<80;u++){if(u<16)c[u]=0|e[t+u];else{var f=c[u-3]^c[u-8]^c[u-14]^c[u-16];c[u]=f<<1|f>>>31}var l=(n<<5|n>>>27)+a+c[u];l+=u<20?1518500249+(i&o|~i&s):u<40?1859775393+(i^o^s):u<60?(i&o|i&s|o&s)-1894007588:(i^o^s)-899497514,a=s,s=o,o=i<<30|i>>>2,i=n,n=l}r[0]=r[0]+n|0,r[1]=r[1]+i|0,r[2]=r[2]+o|0,r[3]=r[3]+s|0,r[4]=r[4]+a|0},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,n=8*e.sigBytes;return t[n>>>5]|=128<<24-n%32,t[14+(n+64>>>9<<4)]=Math.floor(r/4294967296),t[15+(n+64>>>9<<4)]=r,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=s.clone.call(this);return e._hash=this._hash.clone(),e}}),r.SHA1=s._createHelper(u),r.HmacSHA1=s._createHmacHelper(u),f.SHA1)})),a=i((function(e,t){e.exports=o.enc.Utf8})),c=i((function(e,t){var r,n,i;e.exports=(n=(r=i=o).lib.WordArray,r.enc.Base64={stringify:function(e){var t=e.words,r=e.sigBytes,n=this._map;e.clamp();for(var i=[],o=0;o<r;o+=3)for(var s=(t[o>>>2]>>>24-o%4*8&255)<<16|(t[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|t[o+2>>>2]>>>24-(o+2)%4*8&255,a=0;a<4&&o+.75*a<r;a++)i.push(n.charAt(s>>>6*(3-a)&63));var c=n.charAt(64);if(c)for(;i.length%4;)i.push(c);return i.join("")},parse:function(e){var t=e.length,r=this._map,i=this._reverseMap;if(!i){i=this._reverseMap=[];for(var o=0;o<r.length;o++)i[r.charCodeAt(o)]=o}var s=r.charAt(64);if(s){var a=e.indexOf(s);-1!==a&&(t=a)}return function(e,t,r){for(var i=[],o=0,s=0;s<t;s++)if(s%4){var a=r[e.charCodeAt(s-1)]<<s%4*2,c=r[e.charCodeAt(s)]>>>6-s%4*2;i[o>>>2]|=(a|c)<<24-o%4*8,o++}return n.create(i,o)}(e,t,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},i.enc.Base64)})),u=function(e){return s(e).toString()};function f(e){return e||0===e?(window.localStorage.removeItem(u(e)),void window.localStorage.removeItem(u("".concat(e,"__expires__")))):""}return{set:function(e,i,o){return(i||0===i)&&(e||0===e)?(window.localStorage.setItem(u(e),c.stringify(a.parse(n(i+"")))),o&&r(o)?window.localStorage.setItem(u("".concat(e,"__expires__")),c.stringify(a.parse(t()+1e3*o))):window.localStorage.removeItem(u("".concat(e,"__expires__"))),i):""},get:function(r){var n=window.localStorage.getItem(u("".concat(r,"__expires__")));if(n){var i=a.stringify(c.parse(n)),o=t();if(i&&o>=e(i,10))return f(u(r)),""}var s=window.localStorage.getItem(u(r));if(!s)return"";var l=a.stringify(c.parse(s));return l?JSON.parse(l):null},remove:f}}));
//# sourceMappingURL=ciel-localstorage.common.js.map
