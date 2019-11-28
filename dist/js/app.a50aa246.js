(function(e){function t(t){for(var o,r,u=t[0],l=t[1],c=t[2],s=0,d=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==i[u]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},i={app:0},a=[];function u(e){return l.p+"js/"+({"layout-main":"layout-main"}[e]||e)+"."+{"chunk-26e2225f":"6b3027d7","chunk-2cc00e86":"0a1f354c","chunk-2d21f801":"9a54e40a","chunk-2d22d5ba":"fd82b12c","chunk-3b16e77d":"1db69840","chunk-44088d1d":"162a0c4b","chunk-5853d3f6":"a8ef4056","chunk-65ff0dd5":"9aca7579","layout-main":"38529487"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-26e2225f":1,"chunk-2cc00e86":1,"chunk-3b16e77d":1,"chunk-44088d1d":1,"chunk-5853d3f6":1,"chunk-65ff0dd5":1,"layout-main":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({"layout-main":"layout-main"}[e]||e)+"."+{"chunk-26e2225f":"261d2029","chunk-2cc00e86":"32b322a2","chunk-2d21f801":"31d6cfe0","chunk-2d22d5ba":"31d6cfe0","chunk-3b16e77d":"d9247fcc","chunk-44088d1d":"62274379","chunk-5853d3f6":"12bc8088","chunk-65ff0dd5":"2e6ecf4b","layout-main":"1631cdb3"}[e]+".css",i=l.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var c=a[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===o||s===i))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],s=c.getAttribute("data-href");if(s===o||s===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],f.parentNode.removeChild(f),n(a)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=a);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var d=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"094a":function(e,t,n){"use strict";n.r(t);n("e6cf");var o=[{path:"/login",name:"login",component:()=>n.e("chunk-3b16e77d").then(n.bind(null,"b854")),meta:{title:"登录",noAuth:!0}},{path:"/register",name:"register",component:()=>n.e("chunk-2cc00e86").then(n.bind(null,"b4f1")),meta:{title:"注册",noAuth:!0}}];t["default"]=o},"233e":function(e,t,n){},"23d1":function(e,t,n){"use strict";var o=n("233e"),r=n.n(o);r.a},"32bb":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("ddb0");var o=n("445b"),r=[{path:"/",name:"index",component:()=>n.e("layout-main").then(n.bind(null,"99b7")),children:[{path:"",name:"apply",component:()=>n.e("chunk-5853d3f6").then(n.bind(null,"0eea")),meta:{title:"借款",noAuth:!0}},{path:"repay",name:"repay",component:()=>n.e("chunk-26e2225f").then(n.bind(null,"9ebe")),meta:{title:"我要还款",noAuth:!0}},{path:"mine",name:"mine",component:()=>n.e("chunk-2d21f801").then(n.bind(null,"d9a7")),meta:{title:"我的"}}]},{path:"/video",name:"video",component:()=>n.e("chunk-2d22d5ba").then(n.bind(null,"f6c7"))},{path:"*",name:"404",component:()=>n.e("chunk-44088d1d").then(n.bind(null,"187d")),meta:{title:"我的",noAuth:!0}}];o.keys().forEach(e=>{var t=o(e).default;"./index.js"!==e&&(r=r.concat(t))}),t["default"]=r},"445b":function(e,t,n){var o={"./account.js":"094a","./index.js":"32bb"};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id="445b"},"56d7":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("c964");var o=n("8bbf"),r=n.n(o),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u={},l=u,c=(n("23d1"),n("2877")),s=Object(c["a"])(l,i,a,!1,null,"31c95e73",null),d=s.exports,f=n("6389"),h=n.n(f),p=n("32bb"),A=navigator.userAgent.toLowerCase(),m=e=>{if(void 0!==e&&window.document.title!==e&&(document.title=e,/iphone|ipad|ipod/.test(A))){var t=document.createElement("iframe");t.style.display="none",t.setAttribute("src","data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var n=function e(){setTimeout((function(){t.removeEventListener("load",e),document.body.removeChild(t)}),0)};t.addEventListener("load",n),document.body.appendChild(t)}};function v(e,t){var{before:n,after:o}=t;return function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];n&&n.call(this,r),e.apply(this,r),o&&o.call(this,r)}}var b,g=v;(function(){var e={};b={on(t,n){e[t]||(e[t]=[]),e[t].push(n)},once(e,t){var n=g(t,{after(){b.off(e,n)}});b.on(e,n)},emit(t,n){var o=e[t];o&&o.forEach(e=>{e(n)})},off(t,n){var o=e[t];n?o.forEach((e,t)=>{e===n&&o.splice(t,1)}):e[t]=[]}}})();var y=b,w={loginStatus:0,login(){w.loginStatus=1}},k=n("4e9a");function x(e,t,n){n=Object(k["a"])(n),T(e.meta.noAuth)?(m(e.meta.title||"evolution"),y.emit("beforeEachRoute",{to:e,from:t,next:n}),n()):n("/login")}function T(e){return!!e||1===w.loginStatus}r.a.use(h.a);var E=new h.a({mode:"hash",routes:p["default"],scrollBehavior(e,t,n){return n||{x:0,y:0}}});E.beforeEach(x),E.beforeEach((e,t,n)=>{n()});var _=E,C=n("5880"),B=n.n(C),S={tabbarRedPoint:{}},j=S,O={setRedPoint(e,t){e.tabbarRedPoint=t}},N=O,P={},Q=P;r.a.use(B.a);var I=new B.a.Store({state:j,mutations:N,actions:Q}),R=(n("6669"),n("5310")),D=n.n(R),L=n("c262"),U=n.n(L),z={install(e){e.directive("preventScrollThrough",{bind:function(e,t,n){t.modifiers.prevent?e.addEventListener("touchmove",M):J()},unbind:function(e,t,n){t.modifiers.prevent?e.removeEventListener("touchmove",M):W()}})}};function M(e){e.preventDefault()}function J(){var e=document.body.scrollTop||document.documentElement.scrollTop;document.body.style.cssText+="position:fixed;width:100%;top:-"+e+"px;"}function W(){var e=document.body;e.style.position="";var t=e.style.top;document.body.scrollTop=document.documentElement.scrollTop=-parseInt(t),e.style.top=""}var V=z,G=n("1861"),q=n.n(G),H=(e,t,n)=>{t=t||1e3*(Math.floor(String(e).length/10)+2.5);var o={content:String(e),duration:t};n&&(o.parentNode=n),q()(o)},$={Toast:H},X=$,F={install(e){e.prototype.$Toast=X.Toast}},K=F,Y=[V,K],Z=Y;n("f4e0"),n("7b04");n.e("chunk-65ff0dd5").then(n.t.bind(null,"3ee2",7));var ee=Modernizr.cssvwunit&&Modernizr.cssvhunit&&Modernizr.cssvmaxunit&&Modernizr.cssvminunit;ee?D.a.init():D.a.init({hacks:U.a}),r.a.config.productionTip=!1,r.a.config.devtools=!1,Z.forEach(e=>{r.a.use(e)});var te=new r.a({router:_,store:I,render:e=>e(d)});te.$mount("#app")},5880:function(e,t){e.exports=Vuex},6389:function(e,t){e.exports=VueRouter},6669:function(e,t,n){n("4d63"),n("25f0"),n("5319"),n("1276"),function(e,t,n){var o=[],r={_version:"3.7.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout((function(){t(n[e])}),0)},addTest:function(e,t,n){o.push({name:e,fn:t,options:n})},addAsyncTest:function(e){o.push({name:null,fn:e})}},i=function(){};i.prototype=r,i=new i;var a,u=[];function l(e,t){return typeof e===t}function c(){var e,t,n,r,a,c,s;for(var d in o)if(o.hasOwnProperty(d)){if(e=[],t=o[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=l(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)c=e[a],s=c.split("."),1===s.length?i[s[0]]=r:(!i[s[0]]||i[s[0]]instanceof Boolean||(i[s[0]]=new Boolean(i[s[0]])),i[s[0]][s[1]]=r),u.push((r?"":"no-")+s.join("-"))}}(function(){var e={}.hasOwnProperty;a=l(e,"undefined")||l(e.call,"undefined")?function(e,t){return t in e&&l(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}})();var s=t.documentElement,d="svg"===s.nodeName.toLowerCase();function f(e){var t=s.className,n=i._config.classPrefix||"";if(d&&(t=t.baseVal),i._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}i._config.enableClasses&&(e.length>0&&(t+=" "+n+e.join(" "+n)),d?s.className.baseVal=t:s.className=t)}function h(e,t){if("object"===typeof e)for(var n in e)a(e,n)&&h(n,e[n]);else{e=e.toLowerCase();var o=e.split("."),r=i[o[0]];if(2===o.length&&(r=r[o[1]]),"undefined"!==typeof r)return i;t="function"===typeof t?t():t,1===o.length?i[o[0]]=t:(!i[o[0]]||i[o[0]]instanceof Boolean||(i[o[0]]=new Boolean(i[o[0]])),i[o[0]][o[1]]=t),f([(t&&!1!==t?"":"no-")+o.join("-")]),i._trigger(e,t)}return i}function p(){return"function"!==typeof t.createElement?t.createElement(arguments[0]):d?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function A(){var e=t.body;return e||(e=p(d?"svg":"body"),e.fake=!0),e}function m(e,n,o,r){var i,a,u,l,c="modernizr",d=p("div"),f=A();if(parseInt(o,10))while(o--)u=p("div"),u.id=r?r[o]:c+(o+1),d.appendChild(u);return i=p("style"),i.type="text/css",i.id="s"+c,(f.fake?f:d).appendChild(i),f.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=c,f.fake&&(f.style.background="",f.style.overflow="hidden",l=s.style.overflow,s.style.overflow="hidden",s.appendChild(f)),a=n(d,e),f.fake?(f.parentNode.removeChild(f),s.style.overflow=l,s.offsetHeight):d.parentNode.removeChild(d),!!a}r._l={},r.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),i.hasOwnProperty(e)&&setTimeout((function(){i._trigger(e,i[e])}),0)},r._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout((function(){var e,o;for(e=0;e<n.length;e++)o=n[e],o(t)}),0),delete this._l[e]}},i._q.push((function(){r.addTest=h})),
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
i.addAsyncTest((function(){var e=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=e.shift();function n(e,t,n){var o=new Image;function r(t){var r=!(!t||"load"!==t.type)&&1===o.width,i="webp"===e;h(e,i&&r?new Boolean(r):r),n&&n(t)}o.onerror=r,o.onload=r,o.src=t}n(t.name,t.uri,(function(t){if(t&&"load"===t.type)for(var o=0;o<e.length;o++)n(e[o].name,e[o].uri)}))}));var v=r.testStyles=m;function b(t,n,o){var r;if("getComputedStyle"in e){r=getComputedStyle.call(e,t,n);var i=e.console;if(null!==r)o&&(r=r.getPropertyValue(o));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else r=!n&&t.currentStyle&&t.currentStyle[o];return r}function g(e,t){return e-1===t||e===t||e+1===t}
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
v("#modernizr { width: 50vw; }",(function(t){var n=parseInt(e.innerWidth/2,10),o=parseInt(b(t,null,"width"),10);i.addTest("cssvwunit",g(o,n))})),
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
v("#modernizr { height: 50vh; }",(function(t){var n=parseInt(e.innerHeight/2,10),o=parseInt(b(t,null,"height"),10);i.addTest("cssvhunit",g(o,n))})),
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
v("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",(function(e){var t=e.childNodes[2],n=e.childNodes[1],o=e.childNodes[0],r=parseInt((n.offsetWidth-n.clientWidth)/2,10),a=o.clientWidth/100,u=o.clientHeight/100,l=parseInt(50*Math.max(a,u),10),c=parseInt(b(t,null,"width"),10);i.addTest("cssvmaxunit",g(l,c)||g(l,c-r))}),3),
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
v("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",(function(e){var t=e.childNodes[2],n=e.childNodes[1],o=e.childNodes[0],r=parseInt((n.offsetWidth-n.clientWidth)/2,10),a=o.clientWidth/100,u=o.clientHeight/100,l=parseInt(50*Math.min(a,u),10),c=parseInt(b(t,null,"width"),10);i.addTest("cssvminunit",g(l,c)||g(l,c-r))}),3),c(),delete r.addTest,delete r.addAsyncTest;for(var y=0;y<i._q.length;y++)i._q[y]();e.Modernizr=i}(window,document)},"8bbf":function(e,t){e.exports=Vue},f4e0:function(e,t){var n={timeout:[],interval:[]},o=window.setTimeout,r=window.setTimeout;function i(){var e=o.apply(this,arguments);return n.timeout.push(e),e}function a(){var e=r.apply(this,arguments);return n.interval.push(e),e}window.setTimeout=i,window.setInterval=a}});
//# sourceMappingURL=app.a50aa246.js.map