<template>
  <div :class="$style.tabbar">
    <tabbar-item
      v-for="(item, index) in nav"
      :key="index"
      :index="index"
      :activeIndex="activeTabIndex"
      :text="item.text"
      :icon="item.icon"
      :activeIcon="item.activeIcon"
      :pageName="item.pageName"
      :redPoint="redPoint[item.pageName]"
      @switchTab="handleTab"></tabbar-item>
  </div>
</template>

<script>
import tabbarItem from './tabbar-item'

export default {
  components: { tabbarItem },
  data () {
    return {
      activeTabIndex: 0
    }
  },
  props: {
    nav: {
      type: Array
    },
    redPoint: {}
  },
  watch: {
    $route (route) {
      this.nav.find((item, index) => {
        if (item.pageName === route.name) {
          this.activeTabIndex = index
          return true
        }
      })
    }
  },
  methods: {
    handleTab (index) {
      this.activeTabIndex = index
      this.$emit('tabChange', index)
    },
    getTabbarIndex (currentRouteName) {
      this.nav.find((item, index) => {
        if (item.pageName === currentRouteName) {
          this.activeTabIndex = index
          return true
        }
      })
    }
  },
  created () {
    this.getTabbarIndex(this.$route.name)
  }
}
</script>

<style lang="postcss" module>
.tabbar {
  border-top: 1px solid #e6e6e6;
  box-sizing: border-box;
  width: 100vw;
  height: var(--tabbar-height);
  background-color: var(--tabbar-bg-color);
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 90;
  display: flex;
}
</style>
