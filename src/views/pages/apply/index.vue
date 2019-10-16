<template>
  <div>apply
    <ev-button>haha</ev-button>
    <ev-button :disabled="true">haha</ev-button>
    <button @click="hehe">hehe</button>
  </div>
</template>

<script>
import event from '../../../utils/event'
import evButton from '../../../components/common/button'

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
    }
  }
}
</script>
