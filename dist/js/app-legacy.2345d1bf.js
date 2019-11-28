(function(e){function n(n){for(var o,r,u=n[0],c=n[1],l=n[2],s=0,d=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(n);while(d.length)d.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,r=1;r<t.length;r++){var u=t[r];0!==i[u]&&(o=!1)}o&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={app:0},i={app:0},a=[];function u(e){return c.p+"js/"+({"layout-main":"layout-main"}[e]||e)+"-legacy."+{"chunk-26e2225f":"e0533917","chunk-2cc00e86":"65ab2c64","chunk-2d21f801":"9a54e40a","chunk-2d22d5ba":"fd82b12c","chunk-3b16e77d":"84a78541","chunk-44088d1d":"162a0c4b","chunk-5853d3f6":"739860c6","chunk-65ff0dd5":"9aca7579","layout-main":"1ea90b9f"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={"chunk-26e2225f":1,"chunk-2cc00e86":1,"chunk-3b16e77d":1,"chunk-44088d1d":1,"chunk-5853d3f6":1,"chunk-65ff0dd5":1,"layout-main":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var o="css/"+({"layout-main":"layout-main"}[e]||e)+"."+{"chunk-26e2225f":"261d2029","chunk-2cc00e86":"32b322a2","chunk-2d21f801":"31d6cfe0","chunk-2d22d5ba":"31d6cfe0","chunk-3b16e77d":"d9247fcc","chunk-44088d1d":"62274379","chunk-5853d3f6":"12bc8088","chunk-65ff0dd5":"2e6ecf4b","layout-main":"1631cdb3"}[e]+".css",i=c.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===i))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],s=l.getAttribute("data-href");if(s===o||s===i)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],f.parentNode.removeChild(f),t(a)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(n,t){o=i[e]=[n,t]}));n.push(o[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(e);var d=new Error;l=function(n){s.onerror=s.onload=null,clearTimeout(f);var t=i[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,t[1](d)}i[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var f=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"094a":function(e,n,t){"use strict";t.r(n);t("d3b7");var o=[{path:"/login",name:"login",component:function(){return t.e("chunk-3b16e77d").then(t.bind(null,"b854"))},meta:{title:"登录",noAuth:!0}},{path:"/register",name:"register",component:function(){return t.e("chunk-2cc00e86").then(t.bind(null,"b4f1"))},meta:{title:"注册",noAuth:!0}}];n["default"]=o},"233e":function(e,n,t){},"23d1":function(e,n,t){"use strict";var o=t("233e"),r=t.n(o);r.a},"32bb":function(e,n,t){"use strict";t.r(n);t("99af"),t("4160"),t("d3b7"),t("159b"),t("ddb0");var o=t("445b"),r=[{path:"/",name:"index",component:function(){return t.e("layout-main").then(t.bind(null,"99b7"))},children:[{path:"",name:"apply",component:function(){return t.e("chunk-5853d3f6").then(t.bind(null,"0eea"))},meta:{title:"借款",noAuth:!0}},{path:"repay",name:"repay",component:function(){return t.e("chunk-26e2225f").then(t.bind(null,"9ebe"))},meta:{title:"我要还款",noAuth:!0}},{path:"mine",name:"mine",component:function(){return t.e("chunk-2d21f801").then(t.bind(null,"d9a7"))},meta:{title:"我的"}}]},{path:"/video",name:"video",component:function(){return t.e("chunk-2d22d5ba").then(t.bind(null,"f6c7"))}},{path:"*",name:"404",component:function(){return t.e("chunk-44088d1d").then(t.bind(null,"187d"))},meta:{title:"我的",noAuth:!0}}];o.keys().forEach((function(e){var n=o(e).default;"./index.js"!==e&&(r=r.concat(n))})),n["default"]=r},"445b":function(e,n,t){var o={"./account.js":"094a","./index.js":"32bb"};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id="445b"},"56d7":function(e,n,t){"use strict";t.r(n);t("4160"),t("d3b7"),t("159b"),t("96cf"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("8bbf"),r=t.n(o),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],u={},c=u,l=(t("23d1"),t("2877")),s=Object(l["a"])(c,i,a,!1,null,"31c95e73",null),d=s.exports,f=t("6389"),h=t.n(f),p=t("32bb"),A=navigator.userAgent.toLowerCase(),m=function(e){if(void 0!==e&&window.document.title!==e&&(document.title=e,/iphone|ipad|ipod/.test(A))){var n=document.createElement("iframe");n.style.display="none",n.setAttribute("src","data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var t=function e(){setTimeout((function(){n.removeEventListener("load",e),document.body.removeChild(n)}),0)};n.addEventListener("load",t),document.body.appendChild(n)}};t("a434");function v(e,n){var t=n.before,o=n.after;return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];t&&t.call(this,r),e.apply(this,r),o&&o.call(this,r)}}var b,g=v;(function(){var e={};b={on:function(n,t){e[n]||(e[n]=[]),e[n].push(t)},once:function(e,n){var t=g(n,{after:function(){b.off(e,t)}});b.on(e,t)},emit:function(n,t){var o=e[n];o&&o.forEach((function(e){e(t)}))},off:function(n,t){var o=e[n];t?o.forEach((function(e,n){e===t&&o.splice(n,1)})):e[n]=[]}}})();var y=b,w={loginStatus:0,login:function(){w.loginStatus=1}},k=t("4e9a");function x(e,n,t){t=Object(k["a"])(t),T(e.meta.noAuth)?(m(e.meta.title||"evolution"),y.emit("beforeEachRoute",{to:e,from:n,next:t}),t()):t("/login")}function T(e){return!!e||1===w.loginStatus}r.a.use(h.a);var E=new h.a({mode:"hash",routes:p["default"],scrollBehavior:function(e,n,t){return t||{x:0,y:0}}});E.beforeEach(x),E.beforeEach((function(e,n,t){t()}));var _=E,C=t("5880"),B=t.n(C),S={tabbarRedPoint:{}},j=S,O={setRedPoint:function(e,n){e.tabbarRedPoint=n}},N=O,P={},Q=P;r.a.use(B.a);var I=new B.a.Store({state:j,mutations:N,actions:Q}),R=(t("6669"),t("5310")),D=t.n(R),L=t("c262"),U=t.n(L),z=(t("e25e"),{install:function(e){e.directive("preventScrollThrough",{bind:function(e,n,t){n.modifiers.prevent?e.addEventListener("touchmove",M):J()},unbind:function(e,n,t){n.modifiers.prevent?e.removeEventListener("touchmove",M):W()}})}});function M(e){e.preventDefault()}function J(){var e=document.body.scrollTop||document.documentElement.scrollTop;document.body.style.cssText+="position:fixed;width:100%;top:-"+e+"px;"}function W(){var e=document.body;e.style.position="";var n=e.style.top;document.body.scrollTop=document.documentElement.scrollTop=-parseInt(n),e.style.top=""}var V=z,G=t("1861"),q=t.n(G),H=function(e,n,t){n=n||1e3*(Math.floor(String(e).length/10)+2.5);var o={content:String(e),duration:n};t&&(o.parentNode=t),q()(o)},$={Toast:H},X=$,F={install:function(e){e.prototype.$Toast=X.Toast}},K=F,Y=[V,K],Z=Y;t("f4e0"),t("7b04");t.e("chunk-65ff0dd5").then(t.t.bind(null,"3ee2",7));var ee=Modernizr.cssvwunit&&Modernizr.cssvhunit&&Modernizr.cssvmaxunit&&Modernizr.cssvminunit;ee?D.a.init():D.a.init({hacks:U.a}),r.a.config.productionTip=!1,r.a.config.devtools=!1,Z.forEach((function(e){r.a.use(e)}));var ne=new r.a({router:_,store:I,render:function(e){return e(d)}});ne.$mount("#app")},5880:function(e,n){e.exports=Vuex},6389:function(e,n){e.exports=VueRouter},6669:function(e,n,t){t("a15b"),t("b0c0"),t("e25e"),t("4d63"),t("ac1f"),t("25f0"),t("5319"),t("1276");var o=t("62f5");
/*!
 * modernizr v3.7.1
 * Build https://modernizr.com/download?-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-webp-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera
 *  Veeck

 * MIT License
 */(function(e,n,t){var r=[],i={_version:"3.7.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout((function(){n(t[e])}),0)},addTest:function(e,n,t){r.push({name:e,fn:n,options:t})},addAsyncTest:function(e){r.push({name:null,fn:e})}},a=function(){};a.prototype=i,a=new a;var u,c=[];function l(e,n){return o(e)===n}function s(){var e,n,t,o,i,u,s;for(var d in r)if(r.hasOwnProperty(d)){if(e=[],n=r[d],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=l(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)u=e[i],s=u.split("."),1===s.length?a[s[0]]=o:(!a[s[0]]||a[s[0]]instanceof Boolean||(a[s[0]]=new Boolean(a[s[0]])),a[s[0]][s[1]]=o),c.push((o?"":"no-")+s.join("-"))}}(function(){var e={}.hasOwnProperty;u=l(e,"undefined")||l(e.call,"undefined")?function(e,n){return n in e&&l(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}})();var d=n.documentElement,f="svg"===d.nodeName.toLowerCase();function h(e){var n=d.className,t=a._config.classPrefix||"";if(f&&(n=n.baseVal),a._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}a._config.enableClasses&&(e.length>0&&(n+=" "+t+e.join(" "+t)),f?d.className.baseVal=n:d.className=n)}function p(e,n){if("object"===o(e))for(var t in e)u(e,t)&&p(t,e[t]);else{e=e.toLowerCase();var r=e.split("."),i=a[r[0]];if(2===r.length&&(i=i[r[1]]),"undefined"!==typeof i)return a;n="function"===typeof n?n():n,1===r.length?a[r[0]]=n:(!a[r[0]]||a[r[0]]instanceof Boolean||(a[r[0]]=new Boolean(a[r[0]])),a[r[0]][r[1]]=n),h([(n&&!1!==n?"":"no-")+r.join("-")]),a._trigger(e,n)}return a}function A(){return"function"!==typeof n.createElement?n.createElement(arguments[0]):f?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function m(){var e=n.body;return e||(e=A(f?"svg":"body"),e.fake=!0),e}function v(e,t,o,r){var i,a,u,c,l="modernizr",s=A("div"),f=m();if(parseInt(o,10))while(o--)u=A("div"),u.id=r?r[o]:l+(o+1),s.appendChild(u);return i=A("style"),i.type="text/css",i.id="s"+l,(f.fake?f:s).appendChild(i),f.appendChild(s),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),s.id=l,f.fake&&(f.style.background="",f.style.overflow="hidden",c=d.style.overflow,d.style.overflow="hidden",d.appendChild(f)),a=t(s,e),f.fake?(f.parentNode.removeChild(f),d.style.overflow=c,d.offsetHeight):s.parentNode.removeChild(s),!!a}i._l={},i.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),a.hasOwnProperty(e)&&setTimeout((function(){a._trigger(e,a[e])}),0)},i._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout((function(){var e,o;for(e=0;e<t.length;e++)o=t[e],o(n)}),0),delete this._l[e]}},a._q.push((function(){i.addTest=p})),
/*!
  {
    "name": "Webp",
    "async": true,
    "property": "webp",
    "tags": ["image"],
    "builderAliases": ["img_webp"],
    "authors": ["Krister Kari", "@amandeep", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
    "notes": [{
      "name": "Webp Info",
      "href": "https://developers.google.com/speed/webp/"
    }, {
      "name": "Chromium blog - Chrome 32 Beta: Animated WebP images and faster Chrome for Android touch input",
      "href": "https://blog.chromium.org/2013/11/chrome-32-beta-animated-webp-images-and.html"
    }, {
      "name": "Webp Lossless Spec",
      "href": "https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification"
    }, {
      "name": "Article about WebP support",
      "href": "https://optimus.keycdn.com/support/webp-support/"
    }, {
      "name": "Chromium WebP announcement",
      "href": "https://blog.chromium.org/2011/11/lossless-and-transparency-encoding-in.html?m=1"
    }]
  }
  !*/
a.addAsyncTest((function(){var e=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],n=e.shift();function t(e,n,t){var o=new Image;function r(n){var r=!(!n||"load"!==n.type)&&1===o.width,i="webp"===e;p(e,i&&r?new Boolean(r):r),t&&t(n)}o.onerror=r,o.onload=r,o.src=n}t(n.name,n.uri,(function(n){if(n&&"load"===n.type)for(var o=0;o<e.length;o++)t(e[o].name,e[o].uri)}))}));var b=i.testStyles=v;function g(n,t,o){var r;if("getComputedStyle"in e){r=getComputedStyle.call(e,n,t);var i=e.console;if(null!==r)o&&(r=r.getPropertyValue(o));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else r=!t&&n.currentStyle&&n.currentStyle[o];return r}function y(e,n){return e-1===n||e===n||e+1===n}
/*!
  {
    "name": "CSS vw unit",
    "property": "cssvwunit",
    "caniuse": "viewport-units",
    "tags": ["css"],
    "builderAliases": ["css_vwunit"],
    "notes": [{
      "name": "Related Modernizr Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/572"
    },{
      "name": "JSFiddle Example",
      "href": "https://jsfiddle.net/FWeinb/etnYC/"
    }]
  }
  !*/
b("#modernizr { width: 50vw; }",(function(n){var t=parseInt(e.innerWidth/2,10),o=parseInt(g(n,null,"width"),10);a.addTest("cssvwunit",y(o,t))})),
/*!
  {
    "name": "CSS vh unit",
    "property": "cssvhunit",
    "caniuse": "viewport-units",
    "tags": ["css"],
    "builderAliases": ["css_vhunit"],
    "notes": [{
      "name": "Related Modernizr Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/572"
    },{
      "name": "Similar JSFiddle",
      "href": "https://jsfiddle.net/FWeinb/etnYC/"
    }]
  }
  !*/
b("#modernizr { height: 50vh; }",(function(n){var t=parseInt(e.innerHeight/2,10),o=parseInt(g(n,null,"height"),10);a.addTest("cssvhunit",y(o,t))})),
/*!
  {
    "name": "CSS vmax unit",
    "property": "cssvmaxunit",
    "caniuse": "viewport-units",
    "tags": ["css"],
    "builderAliases": ["css_vmaxunit"],
    "notes": [{
      "name": "Related Modernizr Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/572"
    },{
      "name": "JSFiddle Example",
      "href": "https://jsfiddle.net/glsee/JDsWQ/4/"
    }]
  }
  !*/
b("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",(function(e){var n=e.childNodes[2],t=e.childNodes[1],o=e.childNodes[0],r=parseInt((t.offsetWidth-t.clientWidth)/2,10),i=o.clientWidth/100,u=o.clientHeight/100,c=parseInt(50*Math.max(i,u),10),l=parseInt(g(n,null,"width"),10);a.addTest("cssvmaxunit",y(c,l)||y(c,l-r))}),3),
/*!
  {
    "name": "CSS vmin unit",
    "property": "cssvminunit",
    "caniuse": "viewport-units",
    "tags": ["css"],
    "builderAliases": ["css_vminunit"],
    "notes": [{
      "name": "Related Modernizr Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/572"
    },{
      "name": "JSFiddle Example",
      "href": "https://jsfiddle.net/glsee/JRmdq/8/"
    }]
  }
  !*/
b("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",(function(e){var n=e.childNodes[2],t=e.childNodes[1],o=e.childNodes[0],r=parseInt((t.offsetWidth-t.clientWidth)/2,10),i=o.clientWidth/100,u=o.clientHeight/100,c=parseInt(50*Math.min(i,u),10),l=parseInt(g(n,null,"width"),10);a.addTest("cssvminunit",y(c,l)||y(c,l-r))}),3),s(),delete i.addTest,delete i.addAsyncTest;for(var w=0;w<a._q.length;w++)a._q[w]();e.Modernizr=a})(window,document)},"8bbf":function(e,n){e.exports=Vue},f4e0:function(e,n){var t={timeout:[],interval:[]},o=window.setTimeout,r=window.setTimeout;function i(){var e=o.apply(this,arguments);return t.timeout.push(e),e}function a(){var e=r.apply(this,arguments);return t.interval.push(e),e}window.setTimeout=i,window.setInterval=a}});
//# sourceMappingURL=app-legacy.2345d1bf.js.map