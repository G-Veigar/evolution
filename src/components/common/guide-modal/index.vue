<template>
  <div class="guide-modal-wrapper" v-if="value">
    <div
      class="guide-main"
      :class="{transition: transition}"
      :style="guideMainStyle">
      <div
        class="guide-main-inner"
        :class="{shadow: shadow}"
        :style="guideMainInnerStyle">
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>

function fixedBody () {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  document.body.style.cssText += 'position:fixed;width:100%;top:-' + scrollTop + 'px;'
}

function looseBody () {
  var body = document.body
  body.style.position = ''
  var top = body.style.top
  document.body.scrollTop = document.documentElement.scrollTop = -parseInt(top)
  body.style.top = ''
}

export default {
  name: 'guide-modal',
  props: {
    el: { // 引导元素，一个DOM对象
      required: true
    },
    value: { // modal显示
      required: true
    },
    radius: { // 引导主体是否自动加radius
      type: Boolean,
      default: true
    },
    transition: { // 在多个引导dom切换时，是否加过渡效果
      type: Boolean,
      default: true
    },
    shadow: { // 引导主体是否加box-shadow
      type: Boolean,
      default: true
    },
    padding: { // 引导主体的padding
      type: Number,
      default: 6
    }
  },
  data () {
    return {
    }
  },
  computed: {
    domRect () {
      if (!this.el) return null
      let rect = this.el.getBoundingClientRect()
      let rectData = {
        left: rect.left,
        top: rect.top,
        bottom: rect.bottom,
        right: rect.right,
        width: rect.width,
        height: rect.height
      }
      // 处理border-radius
      if (this.radius) {
        let domStyle = window.getComputedStyle(this.el)
        rectData.borderRadius = domStyle.borderRadius
      }
      return rectData
    },
    guideMainStyle () {
      if (!this.domRect) return {}
      let { left, top, width, height } = this.domRect
      // 处理shadow，如果有阴影，扩大main的尺寸
      if (this.padding) {
        width += this.padding
        height += this.padding
        left -= (this.padding / 2)
        top -= (this.padding / 2)
      }
      return {
        width: `${width}px`,
        height: `${height}px`,
        left: `${left}px`,
        top: `${top}px`
      }
    },
    guideMainInnerStyle () {
      if (!this.domRect || !this.radius) return null
      const { borderRadius } = this.domRect
      return {
        borderRadius: borderRadius
      }
    }
  },
  watch: {
    value: {
      handler (value) {
        value ? fixedBody() : looseBody()
      },
      immediate: true
    }
  },
  created () {
    this.windowWidth = document.documentElement.clientWidth
    this.windowHeight = document.documentElement.clientHeight
  }
}
</script>

<style lang="postcss" scoped>
.guide-modal-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 100;
}
.mask-div {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);

}
.guide-main {
  position: absolute;
}
.guide-main.transition {
  transition: left 0.4s, top 0.4s, width 0.4s, height 0.4s;
}
.guide-main-inner {
  box-sizing: content-box;
  width: 100%;
  height:100%;
  border: 100vmax solid rgba(0, 0, 0, 0.7);
  position: absolute;
  left: -100vmax; top: -100vmax;
}
.guide-main-inner.shadow {
  box-shadow: inset 0 0 5px 5px rgba(0,0,0,0.75);
}
.mask-top {
  width: 100%;
  left: 0;
  top: 0;
}
.mask-left {
  left: 0;
}
.mask-right {
  right: 0;
}
.mask-bottom {
  width: 100%;
  left: 0;
  bottom: 0;
}
</style>
