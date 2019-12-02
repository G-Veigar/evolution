<template>
  <div class="devtool">
    <div class="devtool-modal" v-if="devtoolModalShow" @click.self="devtoolModalShow = false">
      <div class="devtool-modal-main"></div>
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
    }
  },
  mounted () {
    let toolKey = Symbol('toolComponent')
    let toolKeyData = window[toolKey] = {
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
        let now = Date.now()
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

<style lang="postcss">
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
    }
  }
}
</style>
