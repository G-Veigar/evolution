# 性能优化

[[toc]]

## 服务端渲染与预渲染

### 预渲染(prerender)

#### 使用webpack插件[prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin)

* 此插件只能用户history模式，hash模式不能使用（因为hash是不会传到服务器）

* 由于此插件依赖puppeteer， 而puppeteer又依赖谷歌的chromium，所以终端必须有翻墙能力才行，另外一种解决方案是使用cnpm

* 此插件可能会导致闪屏（比如初始页面路由/a，但会闪烁一下/路由的页面，然后变成/a的页面），具体原因猜测可能是跟异步路由有关，但不确定。

## 首屏渲染优化

### 增加loading图

#### 利用框架特性，#app中的数据会在框架管理（对于vue，即$mount('#app')）后被丢弃，可以将loading图放在#app中

## 开启vue-cli 构建时的 modern模式，为现代浏览器交付未转义的es6代码，同时为老旧浏览器交付转义后的es5代码

* 为现代浏览器交付的es6版本代码更简洁，文件更小。
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

## 文件压缩

webpack的mode模式为production时，会默认开启很多插件，比如压缩js插件TerserPlugin，
@vue/cli-service内置了optimize-cssnano-plugin压缩css（基于cssnano）
webpack5 将会内置css压缩，webpack4需要手动加入css压缩插件 optimize-css-assets-webpack-plugin（内置的压缩器也是cssnano）

### 图片压缩
使用immage-webpack-loader压缩图片

## SPA路由滚动行为

在SPA应用中，路由滚动应该到考虑到路由跳转后滚动条没重置的问题，例如两个长页面（可以滚动）/a，/b 如果在/a页面发生了滚动，然后跳转到/b页面，滚动条位置默认是没有重置的，这样会很奇怪。
[vue-router的解决方案](https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html)
