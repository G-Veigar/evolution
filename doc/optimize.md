<!-- TOC -->

- [服务端渲染与预渲染](#服务端渲染与预渲染)
    - [预渲染(prerender)](#预渲染prerender)
        - [使用webpack插件[prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin)](#使用webpack插件prerender-spa-pluginhttpsgithubcomchrisvfritzprerender-spa-plugin)
- [首屏渲染优化](#首屏渲染优化)
    - [增加loading图](#增加loading图)
        - [利用框架特性，#app中的数据会在框架管理（对于vue，即$mount('#app')）后被丢弃，可以将loading图放在#app中](#利用框架特性app中的数据会在框架管理对于vue即mountapp后被丢弃可以将loading图放在app中)
- [开启vue-cli 构建时的 modern模式，为现代浏览器交付未转义的es6代码，同时为老旧浏览器交付转义后的es5代码](#开启vue-cli-构建时的-modern模式为现代浏览器交付未转义的es6代码同时为老旧浏览器交付转义后的es5代码)
- [组件懒加载](#组件懒加载)
    - [利用webpack的Code Splitting（原理同路由懒加载）](#利用webpack的code-splitting原理同路由懒加载)
- [组件预加载](#组件预加载)
- [css压缩](#css压缩)

<!-- /TOC -->
## 服务端渲染与预渲染

### 预渲染(prerender)

#### 使用webpack插件[prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin)

* 此插件只能用户history模式，hash模式不能使用（因为hash是不会传到服务器）

* 由于此插件依赖puppeteer， 而puppeteer又依赖谷歌的chromium，所以终端必须有翻墙能力才行，另外一种解决方案是使用cnpm

## 首屏渲染优化

### 增加loading图

#### 利用框架特性，#app中的数据会在框架管理（对于vue，即$mount('#app')）后被丢弃，可以将loading图放在#app中

## 开启vue-cli 构建时的 modern模式，为现代浏览器交付未转义的es6代码，同时为老旧浏览器交付转义后的es5代码

* 为现代浏览器交付的es6版本代码会更小，从而提升性能
* 并且浏览器原生的api的执行性能也优于转义的es5代码。

## 组件懒加载

同路由懒加载的思想一样，对于页面中的一些组件，第一时间用不到的，可以进行懒加载，当使用到才去请求。

### 利用webpack的Code Splitting（原理同路由懒加载）

```js
const lazyComp = () => import('../components/business/lazycomp')

export default {
  components: { lazyComp }
}
```

但是懒加载有问题，就是当需要的时候再去请求，然后执行js，这会导致一定的延迟，所以最好配合预加载

## 组件预加载

:todo

## css压缩

webpack的mode模式为production时，会默认开启很多插件，比如压缩js插件TerserPlugin，OptimizeCssnanoPlugin压缩css（基于cssnano）
