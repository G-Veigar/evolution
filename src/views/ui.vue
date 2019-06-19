<template>
  <button @click="handleClick">{{buttonText}}</button>
</template>

<script>
import { Dialog } from 'mand-mobile'
// import { Toast } from 'mand-mobile'

export default {
  data () {
    return {
      buttonText: 'button'
    }
  },
  methods: {
    handleClick () {
      Dialog.alert({
        content: '提示dawd得分啊',
        transition: 'fade-up'
      })
    }
  },
  created () {
    setTimeout(() => {
      this.buttonText = 'gaoge'
    }, 2000)
  }
}
</script>
