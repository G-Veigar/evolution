# webp

[[toc]]

## 在html中使用webp

```html
<picture>
    <source srcset="@/assets/a.webp" type="image/webp">
    <source srcset="@/assets/a.jpg" type="image/jpg">
    <img src="@/assets/a.jpg" alt="">
</picture>
```
优点：向后兼容，不支持picture元素的本身的，和不支持webp的浏览器会使用jpg格式
缺点：多写额外代码

### 特性检测库 [Modernizr](https://modernizr.com/)

## 在css中使用webp

### 利用css优先级

首先需要判断当前环境是否支持webp格式，可以手写一个判断函数，或者使用Modernizr
如果支持，可以在html元素上加上一个类webp。然后设置css可以像下面这样
```css
.hehe {
  background: url('@/assets/cc.png');
  background-size: 100% 100%;
}
.webp .hehe {
  background: url('@/assets/cc.webp');
  background-size: 100% 100%;
}
```
