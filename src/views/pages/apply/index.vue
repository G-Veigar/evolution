<template>
  <div>apply
    <button @click="hehe">hehe</button>
  </div>
</template>

<script>
import event from '../../../utils/event'

event.once('hehe', function () {
  console.log('hehehe')
})

export default {
  methods: {
    hehe () {
      event.emit('hehe')
    }
  }
}
</script>
