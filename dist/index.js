/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var t=decodeURIComponent,e=encodeURIComponent,r=/; */,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function n(t,e){try{return e(t)}catch(e){return t}}function i(t){return null==t}var a="object"==typeof global&&global&&global.Object===Object&&global,u="object"==typeof self&&self&&self.Object===Object&&self,c=a||u||Function("return this")(),s=c.Symbol,f=Object.prototype,l=f.hasOwnProperty,p=f.toString,h=s?s.toStringTag:void 0,y=Object.prototype.toString,v=s?s.toStringTag:void 0;function d(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":v&&v in Object(t)?function(t){var e=l.call(t,h),r=t[h];try{t[h]=void 0;var o=!0}catch(t){}var n=p.call(t);return o&&(e?t[h]=r:delete t[h]),n}(t):function(t){return y.call(t)}(t)}function g(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function _(t){if(!g(t))return!1;var e=d(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function b(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function j(t){return null!=t&&b(t.length)&&!_(t)}function m(t){return null!=t&&"object"==typeof t}function S(t){return m(t)&&j(t)}var w,O,x=(w=Object.getPrototypeOf,O=Object,function(t){return w(O(t))}),A=Function.prototype.toString,k=Object.prototype.hasOwnProperty,T=A.call(Object);function z(t){if(!m(t)||"[object Object]"!=d(t))return!1;var e=x(t);if(null===e)return!0;var r=k.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&A.call(r)==T}function E(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function C(t){return t}var F,P=Math.max,U=c["__core-js_shared__"],I=(F=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+F:"",L=Function.prototype.toString,$=/^\[object .+?Constructor\]$/,D=RegExp("^"+Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function N(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return function(t){return!(!g(t)||function(t){return!!I&&I in t}(t))&&(_(t)?D:$).test(function(t){if(null!=t){try{return L.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}(r)?r:void 0}var M=function(){try{var t=N(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),R=Date.now,B=function(t){var e=0,r=0;return function(){var o=R(),n=16-(o-r);if(r=o,n>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(M?function(t,e){return M(t,"toString",{configurable:!0,enumerable:!1,value:(r=e,function(){return r}),writable:!0});var r}:C);function q(t,e){return B(function(t,e,r){return e=P(void 0===e?t.length-1:e,0),function(){for(var o=arguments,n=-1,i=P(o.length-e,0),a=Array(i);++n<i;)a[n]=o[e+n];n=-1;for(var u=Array(e+1);++n<e;)u[n]=o[n];return u[e]=r(a),E(t,this,u)}}(t,e,C),t+"")}function J(t,e){return t===e||t!=t&&e!=e}function G(t,e){for(var r=t.length;r--;)if(J(t[r][0],e))return r;return-1}var H=Array.prototype.splice;function V(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}V.prototype.clear=function(){this.__data__=[],this.size=0},V.prototype.delete=function(t){var e=this.__data__,r=G(e,t);return!(r<0||(r==e.length-1?e.pop():H.call(e,r,1),--this.size,0))},V.prototype.get=function(t){var e=this.__data__,r=G(e,t);return r<0?void 0:e[r][1]},V.prototype.has=function(t){return G(this.__data__,t)>-1},V.prototype.set=function(t,e){var r=this.__data__,o=G(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this};var W=N(c,"Map"),Z=N(Object,"create"),K=Object.prototype.hasOwnProperty,Q=Object.prototype.hasOwnProperty;function X(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}function Y(t,e){var r,o,n=t.__data__;return("string"==(o=typeof(r=e))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==r:null===r)?n["string"==typeof e?"string":"hash"]:n.map}function tt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}function et(t){var e=this.__data__=new V(t);this.size=e.size}function rt(t,e,r){"__proto__"==e&&M?M(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}function ot(t,e,r){(void 0!==r&&!J(t[e],r)||void 0===r&&!(e in t))&&rt(t,e,r)}X.prototype.clear=function(){this.__data__=Z?Z(null):{},this.size=0},X.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},X.prototype.get=function(t){var e=this.__data__;if(Z){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return K.call(e,t)?e[t]:void 0},X.prototype.has=function(t){var e=this.__data__;return Z?void 0!==e[t]:Q.call(e,t)},X.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Z&&void 0===e?"__lodash_hash_undefined__":e,this},tt.prototype.clear=function(){this.size=0,this.__data__={hash:new X,map:new(W||V),string:new X}},tt.prototype.delete=function(t){var e=Y(this,t).delete(t);return this.size-=e?1:0,e},tt.prototype.get=function(t){return Y(this,t).get(t)},tt.prototype.has=function(t){return Y(this,t).has(t)},tt.prototype.set=function(t,e){var r=Y(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this},et.prototype.clear=function(){this.__data__=new V,this.size=0},et.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},et.prototype.get=function(t){return this.__data__.get(t)},et.prototype.has=function(t){return this.__data__.has(t)},et.prototype.set=function(t,e){var r=this.__data__;if(r instanceof V){var o=r.__data__;if(!W||o.length<199)return o.push([t,e]),this.size=++r.size,this;r=this.__data__=new tt(o)}return r.set(t,e),this.size=r.size,this};var nt=("object"==typeof exports&&exports&&!exports.nodeType&&exports&&"object"==typeof module&&module&&!module.nodeType&&module,c.Uint8Array),it=Object.create,at=function(){function t(){}return function(e){if(!g(e))return{};if(it)return it(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),ut=Object.prototype;function ct(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||ut)}function st(t){return m(t)&&"[object Arguments]"==d(t)}var ft=Object.prototype,lt=ft.hasOwnProperty,pt=ft.propertyIsEnumerable,ht=st(function(){return arguments}())?st:function(t){return m(t)&&lt.call(t,"callee")&&!pt.call(t,"callee")},yt=Array.isArray,vt="object"==typeof exports&&exports&&!exports.nodeType&&exports,dt=vt&&"object"==typeof module&&module&&!module.nodeType&&module,gt=dt&&dt.exports===vt?c.Buffer:void 0,_t=(gt?gt.isBuffer:void 0)||function(){return!1},bt={};bt["[object Float32Array]"]=bt["[object Float64Array]"]=bt["[object Int8Array]"]=bt["[object Int16Array]"]=bt["[object Int32Array]"]=bt["[object Uint8Array]"]=bt["[object Uint8ClampedArray]"]=bt["[object Uint16Array]"]=bt["[object Uint32Array]"]=!0,bt["[object Arguments]"]=bt["[object Array]"]=bt["[object ArrayBuffer]"]=bt["[object Boolean]"]=bt["[object DataView]"]=bt["[object Date]"]=bt["[object Error]"]=bt["[object Function]"]=bt["[object Map]"]=bt["[object Number]"]=bt["[object Object]"]=bt["[object RegExp]"]=bt["[object Set]"]=bt["[object String]"]=bt["[object WeakMap]"]=!1;var jt="object"==typeof exports&&exports&&!exports.nodeType&&exports,mt=jt&&"object"==typeof module&&module&&!module.nodeType&&module,St=mt&&mt.exports===jt&&a.process,wt=function(){try{return mt&&mt.require&&mt.require("util").types||St&&St.binding&&St.binding("util")}catch(t){}}(),Ot=wt&&wt.isTypedArray,xt=Ot?function(t){return function(e){return t(e)}}(Ot):function(t){return m(t)&&b(t.length)&&!!bt[d(t)]};function At(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}var kt=Object.prototype.hasOwnProperty;function Tt(t,e,r){var o=t[e];kt.call(t,e)&&J(o,r)&&(void 0!==r||e in t)||rt(t,e,r)}var zt=/^(?:0|[1-9]\d*)$/;function Et(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&zt.test(t))&&t>-1&&t%1==0&&t<e}var Ct=Object.prototype.hasOwnProperty;function Ft(t){return j(t)?function(t,e){var r=yt(t),o=!r&&ht(t),n=!r&&!o&&_t(t),i=!r&&!o&&!n&&xt(t),a=r||o||n||i,u=a?function(t,e){for(var r=-1,o=Array(t);++r<t;)o[r]=e(r);return o}(t.length,String):[],c=u.length;for(var s in t)a&&("length"==s||n&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Et(s,c))||u.push(s);return u}(t):function(t){if(!g(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=ct(t),r=[];for(var o in t)("constructor"!=o||!e&&Ct.call(t,o))&&r.push(o);return r}(t)}function Pt(t,e,r,o,n){t!==e&&function(t,e,r){for(var o=-1,n=Object(t),i=r(t),a=i.length;a--;){var u=i[++o];if(!1===e(n[u],u))break}}(e,function(i,a){if(n||(n=new et),g(i))!function(t,e,r,o,n,i,a){var u,c,s,f,l=At(t,r),p=At(e,r),h=a.get(p);if(h)ot(t,r,h);else{var y=i?i(l,p,r+"",t,e,a):void 0,v=void 0===y;if(v){var d=yt(p),b=!d&&_t(p),j=!d&&!b&&xt(p);y=p,d||b||j?yt(l)?y=l:S(l)?y=function(t,e){var r=-1,o=t.length;for(e||(e=Array(o));++r<o;)e[r]=t[r];return e}(l):b?(v=!1,y=p.slice()):j?(v=!1,f=new(s=(c=p).buffer).constructor(s.byteLength),new nt(f).set(new nt(s)),y=new c.constructor(f,c.byteOffset,c.length)):y=[]:z(p)||ht(p)?(y=l,ht(l)?y=function(t,e,r,o){var n=!r;r||(r={});for(var i=-1,a=e.length;++i<a;){var u=e[i],c=void 0;void 0===c&&(c=t[u]),n?rt(r,u,c):Tt(r,u,c)}return r}(u=l,Ft(u)):g(l)&&!_(l)||(y=function(t){return"function"!=typeof t.constructor||ct(t)?{}:at(x(t))}(p))):v=!1}v&&(a.set(p,y),n(y,p,o,i,a),a.delete(p)),ot(t,r,y)}}(t,e,a,r,Pt,o,n);else{var u=o?o(At(t,a),i,a+"",t,e,n):void 0;void 0===u&&(u=i),ot(t,a,u)}},Ft)}function Ut(t,e,r,o,n,i){return g(t)&&g(e)&&(i.set(e,t),Pt(t,e,void 0,Ut,i),i.delete(e)),t}var It,Lt=(It=function(t,e,r,o){Pt(t,e,r,o)},q(function(t,e){var r=-1,o=e.length,n=o>1?e[o-1]:void 0,i=o>2?e[2]:void 0;for(n=It.length>3&&"function"==typeof n?(o--,n):void 0,i&&function(t,e,r){if(!g(r))return!1;var o=typeof e;return!!("number"==o?j(r)&&Et(e,r.length):"string"==o&&e in r)&&J(r[e],t)}(e[0],e[1],i)&&(n=o<3?void 0:n,o=1),t=Object(t);++r<o;){var a=e[r];a&&It(t,a,r,n)}return t})),$t=q(function(t){return t.push(void 0,Ut),E(Lt,void 0,t)});"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var Dt=function(t,e){return function(t,e){t.exports=function(){function t(t,e){return t.slice(0,e).join(".")||"."}function e(t,e){for(var r=t.length,o=0;o<r;++o)if(t[o]===e)return o+1;return 0}return function(r,o,n,i){return JSON.stringify(r,function(r,o){var n="function"==typeof r,i="function"==typeof o,a=[],u=[];return function(c,s){if("object"==typeof s)if(a.length){var f=e(a,this);0===f?a[a.length]=this:(a.splice(f),u.splice(f)),u[u.length]=c;var l=e(a,s);if(0!==l)return i?o.call(this,c,s,t(u,l)):"[ref="+t(u,l)+"]"}else a[0]=s,u[0]=c;return n?r.call(this,c,s):s}}(o,i),n)}}()}(e={exports:{}}),e.exports}();const Nt=/"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,Mt=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;function Rt(t,e,r){null==r&&(null!==e&&"object"==typeof e?(r=e,e=void 0):r={});const o=r.protoAction||"error",n=r.constructorAction||"error";t&&65279===t.charCodeAt(0)&&(t=t.slice(1));const i=JSON.parse(t,e);if("ignore"===o&&"ignore"===n)return i;if(null===i||"object"!=typeof i)return i;if("ignore"!==o&&"ignore"!==n){if(!1===Nt.test(t)&&!1===Mt.test(t))return i}else if("ignore"!==o&&"ignore"===n){if(!1===Nt.test(t))return i}else if(!1===Mt.test(t))return i;return Bt(i,{protoAction:o,constructorAction:n}),i}function Bt(t,{protoAction:e="error",constructorAction:r="error"}={}){let o=[t];for(;o.length;){const t=o;o=[];for(const n of t){if("ignore"!==e&&Object.prototype.hasOwnProperty.call(n,"__proto__")){if("error"===e)throw new SyntaxError("Object contains forbidden prototype property");delete n.__proto__}if("ignore"!==r&&Object.prototype.hasOwnProperty.call(n,"constructor")){if("error"===r)throw new SyntaxError("Object contains forbidden prototype property");delete n.constructor}for(const t in n){const e=n[t];e&&"object"==typeof e&&o.push(n[t])}}}}var qt={parse:Rt,scan:Bt,safeParse:function(t,e){try{return Rt(t,e)}catch(t){return null}}},Jt=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.{0,1}\d*))(?:Z|(\+|-)([\d|:]*))?$/,Gt=/^\/Date\((d|-|.*)\)[\/|\\]$/,Ht={jsonDateParser:function(t,e){var r=e;if("string"==typeof e){var o=Jt.exec(e);if(o)r=new Date(e);else if(o=Gt.exec(e)){var n=o[1].split(/[-+,.]/);r=new Date(n[0]?+n[0]:0-+n[1])}}return r}};function Vt(t){return S(t)||z(t)}function Wt(){return null}function Zt(t){if(i(t))return t;if(z(t))return t;try{return qt.parse(t,Ht,{protoAction:"remove",constructorAction:"remove"})}catch(e){return t}}module.exports=function(){function a(t){void 0===t&&(t={}),this.options=$t({},t,{cookie:{prefix:"",options:{path:"/"}},localStorage:{prefix:""},ignoreExceptions:!1}),this._initState(t.initialState)}var u=a.prototype;return u.setUniversal=function(t,e){return this.setState(t,e),this.setCookie(t,e),this.setLocalStorage(t,e),e},u.getUniversal=function(t){var e=this.getState(t);return i(e)&&(e=this.getCookie(t)),i(e)&&(e=this.getLocalStorage(t)),e},u.syncUniversal=function(t,e){var r=this.getUniversal(t);return i(r)&&!i(e)&&(r=e),i(r)||this.setUniversal(t,r),r},u.removeUniversal=function(t){this.removeState(t),this.removeLocalStorage(t),this.removeCookie(t)},u._initState=function(t){for(var e in this._state={},t)this.syncUniversal(e,t[e])},u.setState=function(t,e){return this._state[t]=e},u.getState=function(t){return this._state[t]},u.removeState=function(t){this.setState(t,null)},u.setLocalStorage=function(t,e){if("undefined"!=typeof localStorage&&this.options.localStorage){var r=this.options.localStorage.prefix+t;try{Vt(e)?localStorage.setItem(r,Dt(e)):localStorage.setItem(r,e)}catch(t){if(!this.options.ignoreExceptions)throw t}return e}},u.getLocalStorage=function(t){if("undefined"!=typeof localStorage&&this.options.localStorage)return Zt(localStorage.getItem(this.options.localStorage.prefix+t))},u.removeLocalStorage=function(t){"undefined"!=typeof localStorage&&this.options.localStorage&&localStorage.removeItem(this.options.localStorage.prefix+t)},u.getCookies=function(){return function(e,o){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var i={},a=e.split(r),u={}.decode||t,c=0;c<a.length;c++){var s=a[c],f=s.indexOf("=");if(!(f<0)){var l=s.substr(0,f).trim(),p=s.substr(++f,s.length).trim();'"'==p[0]&&(p=p.slice(1,-1)),null==i[l]&&(i[l]=n(p,u))}}return i}(document.cookie||"")||{}},u.setCookie=function(t,r,n){if(void 0===n&&(n={}),this.options.cookie){var a=this.options.cookie.prefix+t,u=Object.assign({},this.options.cookie.options,n),c=function(t,r,n){var i=n||{},a=i.encode||e;if("function"!=typeof a)throw new TypeError("option encode is invalid");if(!o.test(t))throw new TypeError("argument name is invalid");var u=a(r);if(u&&!o.test(u))throw new TypeError("argument val is invalid");var c=t+"="+u;if(null!=i.maxAge){var s=i.maxAge-0;if(isNaN(s))throw new Error("maxAge should be a Number");c+="; Max-Age="+Math.floor(s)}if(i.domain){if(!o.test(i.domain))throw new TypeError("option domain is invalid");c+="; Domain="+i.domain}if(i.path){if(!o.test(i.path))throw new TypeError("option path is invalid");c+="; Path="+i.path}if(i.expires){if("function"!=typeof i.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+i.expires.toUTCString()}if(i.httpOnly&&(c+="; HttpOnly"),i.secure&&(c+="; Secure"),i.sameSite)switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return c}(a,i(s=r)?null:"string"==typeof s?s:Vt()?Dt(s,null,0,Wt):""+s,u);return document.cookie=c,r}var s},u.getCookie=function(t){if(this.options.cookie){var e=this.options.cookie.prefix+t,r=this.getCookies();return Zt(r[e]?decodeURIComponent(r[e]):null)}},u.removeCookie=function(t,e){this.setCookie(t,null,Object.assign({maxAge:-1},e))},a}();
//# sourceMappingURL=index.js.map
