## 图片优化-使用webp

<!-- TOC -->

- [图片优化-使用webp](#图片优化-使用webp)
    - [在html中使用webp](#在html中使用webp)
        - [使用<picture>](#使用picture)
        - [特性检测库 [Modernizr](https://modernizr.com/)](#特性检测库-modernizrhttpsmodernizrcom)

<!-- /TOC -->

### 在html中使用webp

#### 使用<picture>
```html
<picture>
    <source srcset="../assets/a.webp" type="image/webp">
    <source srcset="../assets/a.jpg" type="image/jpg">
    <img src="../assets/a.jpg" alt="">
</picture>
```
优点：不支持picture元素的本身的，和支持webp的浏览器会使用jpg格式
缺点：多写额外代码

#### 特性检测库 [Modernizr](https://modernizr.com/)