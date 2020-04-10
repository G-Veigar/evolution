<template>
  <div id="page-apply" v-show="hahaShow">
    <h1>{{testData}}</h1>
    <h2>{{testData2}}</h2>
    <ev-button @click="setH1">set h1</ev-button>
    <br/>
    <ev-button @click="setH2">set h2</ev-button>
    <br/>
  </div>
</template>

<script>
import evButton from '../../../components/common/button'
import { mapState, mapMutations } from 'vuex'
// import { requestService } from '@/service/request'

// requestService.get('/login', {
//   user: 'dadwa',
//   pass: 'adawd111'
// }).then(res => {
// })

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
  computed: {
    ...mapState(['testData', 'testData2'])
  },
  methods: {
    ...mapMutations(['setApiComponent', 'setTestData', 'setTestData2']),
    setH1 () {
      this.setTestData('new')
    },
    setH2 () {
      this.setTestData2('new2')
    },
    hehe () {
      const newDiv = document.createElement('div')
      newDiv.innerText = 'hehehe'
      document.getElementById('page-apply').appendChild(newDiv)
      this.hahaShow = !this.hahaShow
      setTimeout(() => {
        this.hahaShow = true
      }, 1000)
    }
  },
  mounted () {
    // 模拟请求接口获取异步组件配置
    // let el = this.$refs.haha
    // let props = {
    //   name: 'guide-modal',
    //   props: {
    //     props: {
    //       value: true,
    //       el
    //     },
    //     on: {
    //       input (val) {
    //         this.value = val
    //       }
    //     }
    //   }
    // }
    // this.setApiComponent(props)
  }
}
</script>
