<template>
  <div class="devtool" v-if="devtoolModalShow">
    <div class="devtool-modal" @click.self="devtoolModalShow = false">
      <div class="devtool-modal-main">
        <div class="main-title">开发者工具</div>
        <button class="tool-btn" @click="clearCookies">清除cookie</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      devtoolModalShow: false
    }
  },
  methods: {
    openDevtoolModal () {
      this.devtoolModalShow = true
    },
    // 清除所有的cookie
    clearCookies () {
      // TODO:这里可能需要先掉后台接口，有些cookie（http-only），js无法清除
      const keys = document.cookie.match(/[^ =;]+(?==)/g)
      if (keys) {
        for (var i = keys.length; i--;) {
          document.cookie = keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString() // 清除当前域名下的,例如：m.ratingdog.cn
          document.cookie = keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString() // 清除当前域名下的，例如 .m.ratingdog.cn
          document.cookie = keys[i] + '=0;path=/;domain=ratingdog.cn;expires=' + new Date(0).toUTCString() // 清除一级域名下的或指定的，例如 .ratingdog.cn
        }
      }
    }
  },
  mounted () {
    const toolKey = Symbol('toolComponent')
    const toolKeyData = window[toolKey] = {
      clickCount: 0,
      lastTime: 0
    }
    window.addEventListener('click', () => {
      if (toolKeyData.clickCount === 5) {
        this.devtoolModalShow = true
        toolKeyData.clickCount = 0
        toolKeyData.lastTime = 0
      } else if (toolKeyData.clickCount === 0) {
        toolKeyData.clickCount = 1
        toolKeyData.lastTime = Date.now()
      } else {
        const now = Date.now()
        if (now - toolKeyData.lastTime < 500) {
          toolKeyData.clickCount++
          toolKeyData.lastTime = now
        } else {
          toolKeyData.clickCount = 0
          toolKeyData.lastTime = 0
        }
      }
    })
  }
}
</script>

<style lang="postcss" scoped>
.devtool {
  & .devtool-btn {
    position: fixed;
    right: 10px;
    top: 10px;
    background-color: #ffffff;
    border: 1px solid #aaa;
    padding: 2px 4px;
    box-shadow: 1px 1px 5px #aaa;
  }

  & .devtool-modal {
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);

    & .devtool-modal-main {
      position: absolute;
      left: 50%;
      top: 45%;
      width: 80%;
      height: 70%;
      background-color: #ffffff;
      transform: translate(-50%, -50%);
      padding: 30px 20px;
    }

    & .main-title {
      text-align: center;
      margin-bottom: 20px;
    }
  }
}

.tool-btn {
  border: 1px solid #000;
  margin-bottom: 20px;
}
</style>
