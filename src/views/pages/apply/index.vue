<template>
  <div id="page-apply" v-show="hahaShow">apply
    <ev-button>haha</ev-button>
    <ev-button :disabled="true">haha</ev-button>
  </div>
</template>

<script>
import evButton from '../../../components/common/button'

export default {
  components: {
    evButton
  },
  data () {
    return {
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
    }
  }
}
</script>
