webpackJsonp([1],{"+E39":function(t,n,e){t.exports=!e("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ZMJ":function(t,n,e){var r=e("lOnJ");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},"/LM/":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o,i=e("bOdI"),u=e.n(i),c=[],a=[],f=140,l=.06;function s(){for(var t=void 0,n=void 0,e=0;e<f;e++)for(var r=0;r<f;r++)t=Math.random(),c[e][r]=t>l?0:1,n=document.getElementById(e+"_"+r),1==c[e][r]?n.style.backgroundColor="white":n.style.backgroundColor="black"}function v(){for(var t=void 0,n=0;n<f;n++)for(var e=0;e<f;e++)d(n,e);for(var r=0;r<f;r++)for(var o=0;o<f;o++)c[r][o]=a[r][o],t=document.getElementById(r+"_"+o),1==c[r][o]?t.style.backgroundColor="white":t.style.backgroundColor="black"}function d(t,n){for(var e=0,r=t-1;r<=t+1;r++)for(var o=n+-1;o<=n+1;o++)t==r&&n==o||r>=0&&r<f&&o>=0&&o<f&&(e+=c[r][o]);var i=c[t][n];a[t][n]=0==i?3==e?1:0:e>3||e<2?0:1}!function(){for(var t=0;t<f;t++){c[t]=[],a[t]=[];for(var n=0;n<f;n++)c[t][n]=0,a[t][n]=0}}();var p=(r={name:"lifeGame",data:function(){return{title:"生命游戏",data:c,startTxt:"开始",start:!1}},created:function(){},mounted:function(){s()},computed:{}},u()(r,"created",function(){document.title="生命游戏"}),u()(r,"methods",{getColor:function(t,n){return 0==c[t][n]?"black":"white"},begin:function(){window.clearInterval(o),this.start?(this.start=!1,window.clearInterval(o),this.startTxt="开始"):(this.start=!0,o=window.setInterval(v,100),this.startTxt="停止")},reset:function(){this.start=!1,window.clearInterval(o),this.startTxt="开始",function(){for(var t=void 0,n=0;n<f;n++)for(var e=0;e<f;e++)c[n][e]=0,t=document.getElementById(n+"_"+e),1==c[n][e]?t.style.backgroundColor="white":t.style.backgroundColor="black"}()},onClick:function(t,n){!function(t,n){var e=c[t][n];c[t][n]=1==e?0:1;var r=document.getElementById(t+"_"+n);1==c[t][n]?r.style.backgroundColor="white":r.style.backgroundColor="black"}(t,n)},ran:function(){s()},step:function(){this.start=!1,window.clearInterval(o),this.startTxt="开始",v()}}),r),b={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bak"},[t._m(0),t._v(" "),e("br"),t._v(" "),e("div",[e("div",{staticClass:"bd"},t._l(t.data,function(n,r){return e("div",{key:r},t._l(t.data[r],function(n,o){return e("div",{key:o,staticClass:"cell",style:{top:5*r+"px",left:5*o+"px",backgroundColor:t.getColor(r,o)},attrs:{id:r+"_"+o},on:{click:function(n){t.onClick(r,o)}}})}))})),t._v(" "),e("div",{staticClass:"btns"},[e("button",{staticClass:"btn",on:{click:t.begin}},[t._v(t._s(t.startTxt))]),t._v(" "),e("button",{staticClass:"btn",on:{click:t.reset}},[t._v("重置")]),t._v(" "),e("button",{staticClass:"btn",on:{click:t.ran}},[t._v("随机")]),t._v(" "),e("button",{staticClass:"btn",on:{click:t.step}},[t._v("下一步")])])])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"title"},[n("h3",[this._v("生命游戏")])])}]};var y=e("VU/8")(p,b,!1,function(t){e("XNb1")},"data-v-f8bb708e",null);n.default=y.exports},"77Pl":function(t,n,e){var r=e("EqjI");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"7KvD":function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},"9bBU":function(t,n,e){e("mClu");var r=e("FeBl").Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},C4MV:function(t,n,e){t.exports={default:e("9bBU"),__esModule:!0}},D2L2:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},EqjI:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},FeBl:function(t,n){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},MmMw:function(t,n,e){var r=e("EqjI");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},ON07:function(t,n,e){var r=e("EqjI"),o=e("7KvD").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},S82l:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},SfB7:function(t,n,e){t.exports=!e("+E39")&&!e("S82l")(function(){return 7!=Object.defineProperty(e("ON07")("div"),"a",{get:function(){return 7}}).a})},X8DO:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},XNb1:function(t,n){},bOdI:function(t,n,e){"use strict";n.__esModule=!0;var r,o=e("C4MV"),i=(r=o)&&r.__esModule?r:{default:r};n.default=function(t,n,e){return n in t?(0,i.default)(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},evD5:function(t,n,e){var r=e("77Pl"),o=e("SfB7"),i=e("MmMw"),u=Object.defineProperty;n.f=e("+E39")?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},hJx8:function(t,n,e){var r=e("evD5"),o=e("X8DO");t.exports=e("+E39")?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},kM2E:function(t,n,e){var r=e("7KvD"),o=e("FeBl"),i=e("+ZMJ"),u=e("hJx8"),c=e("D2L2"),a=function(t,n,e){var f,l,s,v=t&a.F,d=t&a.G,p=t&a.S,b=t&a.P,y=t&a.B,h=t&a.W,_=d?o:o[n]||(o[n]={}),w=_.prototype,m=d?r:p?r[n]:(r[n]||{}).prototype;for(f in d&&(e=n),e)(l=!v&&m&&void 0!==m[f])&&c(_,f)||(s=l?m[f]:e[f],_[f]=d&&"function"!=typeof m[f]?e[f]:y&&l?i(s,r):h&&m[f]==s?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(s):b&&"function"==typeof s?i(Function.call,s):s,b&&((_.virtual||(_.virtual={}))[f]=s,t&a.R&&w&&!w[f]&&u(w,f,s)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},lOnJ:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},mClu:function(t,n,e){var r=e("kM2E");r(r.S+r.F*!e("+E39"),"Object",{defineProperty:e("evD5").f})}});
//# sourceMappingURL=1.39c4fd7c89ea61af0dd9.js.map