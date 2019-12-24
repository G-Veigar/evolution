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
    // TAG: 使用JSX解决动态组件传参问题（动态组件的参数形态是不确定的，用传统的template不好表达）
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
      asyncApiComponentProps: null, // 异步组件参数对象
      asyncApiComponentData: null
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
    }
  },
  watch: {
    apiComponent (val) {
      let compName = val.name
      // TODO:异步组件数据更新问题
      this.asyncApiComponentProps = val.props
      this.asyncApiComponentData = val.props.props
      let handleInput = this.asyncApiComponentProps.on.input
      handleInput = handleInput.bind(this)
      this.asyncApiComponentProps.on.input = handleInput
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
