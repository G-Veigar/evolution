<template>
  <div id="page-apply" v-show="hahaShow">apply
    <ev-button>haha</ev-button>
    <ev-button :disabled="true">haha</ev-button>
    <br/>
    <input type="text" v-model="val1">
    <br/>
    <input type="text" v-model="val2">
    <button ref="haha" @click="add">add</button>
  </div>
</template>

<script>
import evButton from '../../../components/common/button'
import { mapMutations } from 'vuex'

// import request from '@/service/request'

// request.get('/login')
// console.log(request)

export default {
  components: {
    evButton
  },
  data () {
    return {
      val1: '332323',
      val2: 0,
      hahaShow: true
    }
  },
  methods: {
    ...mapMutations(['setApiComponent']),
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
  },
  mounted () {
    // 模拟请求接口获取异步组件配置
    let el = this.$refs.haha
    let props = {
      name: 'guide-modal',
      props: {
        props: {
          value: true,
          el
        }
      }
    }
    this.setApiComponent(props)
  }
}
</script>
