<template>
  <div class="layout">
    <router-view/>
    <tab-bar
      :nav="tabbarList"
      :redPoint="tabbarRedPoint"
      @tabChange="handleTabChange"></tab-bar>
  </div>
</template>

<script>
import loanIcon from './img/loan@3x.png'
import loanIcon2 from './img/loan2@3x.png'
import repayIcon from './img/repay@3x.png'
import repayIcon2 from './img/repay2@3x.png'
import mineIcon from './img/mine@3x.png'
import mineIcon2 from './img/mine2@3x.png'
import tabBar from '@/components/common/tabbar/index'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'index-layout',
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
      hasOverdue: false
    }
  },
  computed: {
    ...mapState(['tabbarRedPoint'])
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
    }
  }
}
</script>
