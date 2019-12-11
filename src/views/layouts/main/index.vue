<!--<template>
  <div class="layout">
    <router-view/>
    <tab-bar
      :nav="tabbarList"
      :redPoint="tabbarRedPoint"
      @tabChange="handleTabChange"></tab-bar>
    <component v-if="asyncApiComponent" :is="asyncApiComponent"></component>
  </div>
</template>-->

<script>
import loanIcon from './img/loan@3x.png'
import loanIcon2 from './img/loan2@3x.png'
import repayIcon from './img/repay@3x.png'
import repayIcon2 from './img/repay2@3x.png'
import mineIcon from './img/mine@3x.png'
import mineIcon2 from './img/mine2@3x.png'
import tabBar from '@/components/common/tabbar/index'
import { mapState, mapMutations } from 'vuex'
// import event from '$util/event'

export default {
  name: 'index-layout',
  render (h) {
    var isComponent = this.asyncApiComponent
    return (
      <div class="layout">
        <router-view/>
        <tab-bar
          nav={this.tabbarList}
          redPoint={this.tabbarRedPoint}
          vOn:tabChange={this.handleTabChange}/>
        {this.asyncApiComponent ? <isComponent {...this.asyncApiComponentProps}/> : null}
      </div>
    )
  },
  data () {
    return {
      tabbarList: [
        {
          pageName: 'apply',
          icon: loanIcon2,
          activeIcon: loanIcon,
          text: '借款'
        },
        {
          pageName: 'repay',
          icon: repayIcon2,
          activeIcon: repayIcon,
          text: '还款'
        },
        {
          pageName: 'mine',
          icon: mineIcon2,
          activeIcon: mineIcon,
          text: '我的'
        }
      ],
      hasOverdue: false,
      asyncApiComponent: null, // 异步组件
      asyncApiComponentProps: null // 异步组件参数对象
    }
  },
  computed: {
    ...mapState(['tabbarRedPoint', 'apiComponent'])
  },
  components: { tabBar },
  methods: {
    ...mapMutations(['setRedPoint']),
    // async getOrderStatus () {
    //   let orderStatus = await api.getOrderStatus()
    //   if (orderStatus && orderStatus.overdue) {
    //     this.setRedPoint({
    //       repay: true
    //     })
    //     this.hasOverdue = true
    //   }
    // },
    handleTabChange (index) {
      console.log('handleTabChange', index)
    }
  },
  watch: {
    apiComponent (val) {
      let compName = val.name
      this.asyncApiComponentProps = val.props
      import(`../../../components/common/${compName}/index.vue`).then(({ default: comp }) => {
        this.asyncApiComponent = comp
      })
    }
  },
  created () {
    // event.on('beforeEachRoute', data => {
    //   console.log(data)
    // })
  }
}
</script>
