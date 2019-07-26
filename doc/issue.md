# 开发中遇到的问题

<!-- TOC -->

- [开发中遇到的问题](#开发中遇到的问题)
    - [移动端滚动穿透](#移动端滚动穿透)
        - [touchmove事件preventDefault](#touchmove事件preventdefault)
        - [设置body position:fixed](#设置body-positionfixed)
    - [长列表性能问题](#长列表性能问题)
        - [虚拟列表](#虚拟列表)
        - [列表数据不挂到data中，在create钩子中设置](#列表数据不挂到data中在create钩子中设置)

<!-- /TOC -->

## 移动端滚动穿透

当有一个position为fixed的块，在这个块元素上面滑动，下面背景块也会滑动

### touchmove事件preventDefault

当fixed块上touchmove的时候，用preventDefault阻止浏览器默认行为，
当滑动结束的时候，去掉preventDefault，此方案有一个缺点，就是如果fixed块如果自身内容高度大于块的高度，且overflow是可滚动的，那么preventDefault也会导致fixed自身不能滚动

注意：不能使用touchstart，因为 touchstart 会连点击事件都阻止

### 设置body position:fixed

当fixed弹出时 设置body position:fixed，并设置滚动位置
```javascript
var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
document.body.style.cssText += 'position:fixed;width:100%;top:-' + scrollTop + 'px;'
```
当fixed关闭时 恢复body position，设置body滚动条位置
```javascript
var body = document.body
body.style.position = ''
var top = body.style.top
document.body.scrollTop = document.documentElement.scrollTop = -parseInt(top)
body.style.top = ''
```

## 长列表性能问题

长列表的渲染会有性能开销

解决方案：

### 虚拟列表

思路是减少DOM数，从而提高性能

[原理](https://developers.google.com/web/updates/2016/07/infinite-scroller)

* [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller)
* [vue-virtual-scroll-list](https://github.com/tangbc/vue-virtual-scroll-list)

### 列表数据不挂到data中，在create钩子中设置

思路是减小vue实例创建时定义响应式数据这部分开销。

适用于数据不需要响应式展示的，create钩子中，当我们从服务端拿到list数据后，赋值给this，这样的数据，由于事先没有定义在data中，所以不会被vue调用defineReactive配置成响应式的数据。从而提高了渲染性能。