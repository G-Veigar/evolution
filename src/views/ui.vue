<template>
  <button @click="handleClick">click</button>
</template>

<script>
import { Dialog } from 'mand-mobile'
// import { Toast } from 'mand-mobile'

export default {
  methods: {
    handleClick () {
      Dialog.alert({
        content: '提示dawd得分啊',
        transition: 'fade-up'
      })
    }
  }
}
</script>
