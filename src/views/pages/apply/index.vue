<template>
  <div id="page-apply" v-show="hahaShow">apply
    <ev-button>haha</ev-button>
    <ev-button :disabled="true">haha</ev-button>
    <br/>
    <input type="text" v-model="val1">
    <br/>
    <input type="text" v-model="val2">
    <button @click="add">add</button>
  </div>
</template>

<script>
import evButton from '../../../components/common/button'
import request from '@/service/request'

request.get('/login')

export default {
  components: {
    evButton
  },
  data () {
    return {
      val1: 0,
      val2: 0,
      hahaShow: true
    }
  },
  methods: {
    hehe () {
      let newDiv = document.createElement('div')
      newDiv.innerText = 'hehehe'
      document.getElementById('page-apply').appendChild(newDiv)
      this.hahaShow = !this.hahaShow
      setTimeout(() => {
        this.hahaShow = true
      }, 1000)
    },
    add () {
      alert(this.val1 + this.val2)
    }
  }
}
</script>
