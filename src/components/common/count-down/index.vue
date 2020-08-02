<!--
 * @Author: 高歌
 * @Date: 2020-06-29 13:47:41
 * @LastEditTime: 2020-07-21 01:09:39
 * @LastEditors: 高歌
 * @FilePath: /soda-next/src/components/common/count-down/index.vue
 * @Description: 倒计时组件，带自动纠错功能。
-->
<template>
  <div class="count-down">
    {{countNum}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      countNum: 0, // 倒计时的秒数
      time: 0, // 已经倒计时的秒数
      startTime: 0
    }
  },
  props: {
    value: {
      type: Number,
      required: true
    },
    autoCount: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    countDown () {
      if (this.countNum > 0) {
        const nowTime = Date.now()
        // 计算时间偏差
        const offSet = nowTime - (this.time * 1000 + this.startTime)
        // 整秒数纠错时间
        const fullTime = Math.floor(offSet / 1000)
        // 小于1s的纠错时间
        const remain = offSet % 1000
        // 整秒数立即纠错
        if ((1 + fullTime) < this.countNum) {
          this.countNum = this.countNum - (1 + fullTime)
          this.time += (1 + fullTime)
        } else {
          this.countNum = 0
        }
        setTimeout(this.countDown, 1000 - remain)
      } else {
        this.$emit('timeout')
      }
    },
    count () {
      this.countNum = this.value
      this.startTime = Date.now() + 1000
      setTimeout(this.countDown, 1000)
    }
  },
  watch: {
    value: {
      handler (val) {
        if (this.autoCount && val > 0) {
          this.count()
        }
      },
      immediate: true
    }
  }
}
</script>
