# 浏览器兼容性（browser compatibility）

<!-- TOC -->

- [浏览器兼容性（browser compatibility）](#浏览器兼容性browser-compatibility)
    - [优化browserslist](#优化browserslist)

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