<template>
  <div class="page-repay">
    <ev-header title="还款">
      <div slot="left">返回</div>
      <div slot="right">关闭</div>
    </ev-header>
    <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            ...
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
import evHeader from '../../../components/common/header'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  components: {
    evHeader
  },
  created () {
  },
  mounted () {
    // eslint-disable-next-line no-unused-vars
    var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
      // direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination'
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    })
  }
}
</script>

<style lang="postcss">
.page-repay {
  padding-top: var(--header-height);
}
.swiper-container {
    width: 600px;
    height: 300px;
}
</style>
