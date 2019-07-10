<template>
  <div class="promise">
    <button @click="run">promise</button>
    <button @click="next">generator</button>
    <button @click="showAsyncFun">async</button>
  </div>
</template>

<script>
import { Promise } from 'q'
function * foo (x) {
  let y = yield x + 2
  console.log('foo', y)
  return y
}

export default {
  data () {
    return {
      gen: foo(1),
      temp: null
    }
  },
  methods: {
    run () {
      new Promise(resolve => {
        resolve(1)
      }).then(data => {
        console.log(data)
        return data
      }).then(data2 => {
        console.log(data2)
      })
    },
    next () {
      console.log(this.gen.next())
    },
    async asyncFun () {
      this.temp = Promise.resolve(1)
      // return this.temp
    },
    showAsyncFun () {
      this.asyncFun().then(data => {
        console.log(data)
      })
    }
  }
}
</script>
