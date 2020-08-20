<template>
  <div id="page-apply" v-show="hahaShow">
    <div class="data">{{num}}</div>
    <button class="btn1" @click="add">add1</button>
    <button @click="add">add2</button>
    <div class="modal1" v-if="modal1" @touchstart="handleTouch">modal1</div>
    <div class="modal2" v-if="modal2" @click="handleClick">modal2</div>
    <router-link to="/test">test</router-link>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
// import { requestService } from '@/service/request'

// requestService.get('/login', {
//   user: 'dadwa',
//   pass: 'adawd111'
// }).then(res => {
// })

const obj = {
  a: {
    b: 'val'
  }
}

console.log('obj:', obj?.c?.b)

export default {
  data () {
    return {
      hahaShow: true,
      num: 0,
      modal1: true,
      modal2: true
    }
  },
  computed: {
    ...mapState(['testData', 'testData2'])
  },
  methods: {
    ...mapMutations(['setApiComponent', 'setTestData', 'setTestData2']),
    handleTouch () {
      console.log('modal1 touch')
      this.modal1 = false
    },
    handleClick () {
      window.alert('modal2 click!')
    },
    add () {
      this.num++
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

<style lang="postcss" scoped>
.data {
  font-size: 100px;
}
button {
  font-size: 50px;
  bottom: 1px solid #aaaaaa;
}
.btn1 {
  touch-action: manipulation;
}
.modal1 {
  position: fixed;
  width: 100px;
  height: 100px;
  left: 100px;
  top: 100px;
  border: 1px solid #aaa;
  background-color: #ccaccc;
  z-index: 3;
}
.modal2 {
  position: fixed;
  width: 150px;
  height: 150px;
  left: 60px;
  top: 60px;
  background-color: #cc5cdd;
  z-index: 2;
}
</style>
