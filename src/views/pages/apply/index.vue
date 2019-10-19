<template>
  <div>apply
    <ev-button @click="handleClick">haha</ev-button>
    <ev-button :disabled="true">haha</ev-button>
    <button @click="hehe">hehe</button>
  </div>
</template>

<script>
import event from '../../../utils/event'
import evButton from '../../../components/common/button'
import uaService from '../../../service/user-agent'

console.log('uaService', uaService.isIos.isMobile.isWeixin())

event.once('hehe', function () {
  console.log('hehehe')
})

export default {
  components: {
    evButton
  },
  methods: {
    hehe () {
      event.emit('hehe')
    },
    handleClick () {
      console.log('click')
    }
  }
}
</script>
