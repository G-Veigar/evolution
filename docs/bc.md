# 浏览器兼容性（browser compatibility）

<!-- TOC -->

- [浏览器兼容性（browser compatibility）](#浏览器兼容性browser-compatibility)
    - [优化browserslist](#优化browserslist)
    - [页面title设置](#页面title设置)
    - [移动端click事件300ms延迟](#移动端click事件300ms延迟)

<!-- /TOC -->

## 优化browserslist

运行npx browserslist可以查看当前系统的浏览器兼容表

vue-cli默认的.browserslistrc

```
> 1%
last 2 versions
not ie <= 8
```

优化思路主要是更加贴合国情，优化后配置如下

```
> 1% in CN
last 2 versions
not ie <= 8
IOS 8
iOS 9
iOS 10
iOS 11
```

## 页面title设置
spa应用页面路由设置title，设置document.title即可，但是在ios有些系统中会有兼容性问题

## 移动端click事件300ms延迟

起因：移动浏览器 会在 touchend 和 click 事件之间，等待 300 - 350 ms，判断用户是否会进行双击手势用以缩放文字。

处理方法：

1. 禁用缩放

* html
```html
<meta name="viewport" content="user-scalable=no" />
```
注：这种方式会禁止所有的缩放，iOS需大于9.3

* css

CSS属性 touch-action 用于设置触摸屏用户如何操纵元素的区域(例如，浏览器内置的缩放功能)。

manipulation属性，浏览器只允许进行滚动和持续缩放操作。不允许双金缩放。

```css
html {
  touch-action: manipulation;
}
```
更多关于[touch-action](https://developer.mozilla.org/zh-CN/docs/Web/CSS/touch-action)请看文档

2. 设置meta width=device-width
```html
<meta name="viewport" content="width=device-width" />
```
注：iOS需大于9.3

3. FastClick

```shell
npm i fastClick
```

```js
import fastClick from 'fastclick'

fastClick.attach(document.body)
```

原理：移动端，当用户点击屏幕时，会依次触发 touchstart，touchmove(0 次或多次)，touchend，mousemove，mousedown，mouseup，click。 touchmove 。只有当手指在屏幕发生移动的时候才会触发 touchmove 事件。在 touchstart ，touchmove 或者 touchend 事件中的任意一个调用 event.preventDefault，mouse 事件 以及 click 事件将不会触发。
fastClick 在 touchend 阶段 调用 event.preventDefault，然后通过 document.createEvent 创建一个 MouseEvents，然后 通过 event​Target​.dispatch​Event 触发对应目标元素上绑定的 click 事件。

内部会判断是否在移动端情况
```js
// Devices that don't support touch don't need FastClick
if (typeof window.ontouchstart === 'undefined') {
  return true;
}
```
