<template>
  <div :class="{[$style.tabbarItem]: true, [$style.active]: activeIndex === index}"  @click="switchTab">
    <img :class="$style.itemIcon" aria-hidden="true" :src="currentIcon"/>
    <div :class="{[$style.itemText]: true, [$style.textActive]: activeIndex === index}">{{text}}</div>
    <div v-if="redPoint" :class="$style.redPoint"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      require: true,
      type: String
    },
    icon: {
      require: true,
      type: String
    },
    activeIcon: {
      require: true,
      type: String
    },
    index: {
      type: Number
    },
    activeIndex: {
      type: Number
    },
    redPoint: {
      default: false
    },
    pageName: {
      type: String
    }
  },
  computed: {
    currentIcon () {
      return this.activeIndex === this.index ? this.activeIcon : this.icon
    }
  },
  methods: {
    switchTab () {
      this.$emit('switchTab', this.index)
      this.$router.replace({
        name: this.pageName
      })
    }
  }
}
</script>

<style lang="postcss" module>
.tabbarItem {
  flex: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding-top: 16px;
  padding-bottom: 10px;
  position: relative;
}

.itemIcon {
  width: 44px;
  height: 44px;
  position: relative;
  color: var(--tabbar-active-color);
}

.itemText {
  font-size: var(--tabbar-font-size);
  color: var(--tabbar-color);
  margin-top: 4px;
}

.active {
  color: var(--tabbar-active-color);
}
.textActive {
  color: var(--tabbar-active-color);
}
.redPoint {
  position: absolute;
  top: 13px;
  left: 50%;
  transform: translateX(10px);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #EC4945;
}
</style>
