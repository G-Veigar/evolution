# 开发中遇到的问题

<!-- TOC -->

- [开发中遇到的问题](#开发中遇到的问题)
    - [移动端滚动穿透](#移动端滚动穿透)
            - [preventDefault](#preventdefault)
            - [设置body position:fixed](#设置body-positionfixed)

<!-- /TOC -->

## 移动端滚动穿透

当有一个position为fixed的块，在这个块元素上面滑动，下面背景块也会滑动

#### preventDefault

当fixed块上touchmove的时候，用preventDefault阻止浏览器默认行为，
当滑动结束的时候，去掉preventDefault，此方案有一个缺点，就是如果fixed块如果自身内容高度大于块的高度，且overflow是可滚动的，那么preventDefault也会导致fixed自身不能滚动

注意：不能使用touchstart，因为 touchstart 会连点击事件都阻止


#### 设置body position:fixed

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