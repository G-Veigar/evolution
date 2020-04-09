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
          text: '主页'
        },
        {
          pageName: 'discover',
          icon: loanIcon2,
          activeIcon: loanIcon,
          text: '发现'
        },
        {
          pageName: 'repay',
          icon: repayIcon2,
          activeIcon: repayIcon,
          text: '订单'
        },
        {
          pageName: 'mine',
          icon: mineIcon2,
          activeIcon: mineIcon,
          text: '我的'
        }
      ]
    }
  },
  computed: {
    ...mapState(['tabbarRedPoint'])
  },
  components: { tabBar },
  methods: {
    ...mapMutations(['setRedPoint']),
    handleTabChange (index) {
    }
  }
}
</script>
