<template>
  <div class="guide-modal">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laudantium quasi eligendi, modi commodi voluptatem perspiciatis praesentium hic sint quod autem nulla omnis. Ipsum minima temporibus eius earum provident veniam.
    <div class="main-wrapper">
      <div class="need-guide1" ref="div1">div1</div>
      <div class="need-guide2" ref="div2">div2</div>
      <div class="need-guide3" ref="div3">div3</div>
    </div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique minima suscipit hic quasi dolorum illo nihil, non illum nemo ipsa, minus error, voluptatibus libero laboriosam nisi natus esse officiis totam animi? Suscipit obcaecati unde, omnis et itaque, non error quibusdam impedit in esse officia. Distinctio nesciunt vitae esse, quis ipsum itaque atque. Consectetur, explicabo minima beatae perspiciatis magni placeat velit atque. Ullam laboriosam sapiente, quibusdam magnam doloremque suscipit ex, mollitia quasi ipsum dicta facilis voluptate illum alias, explicabo consequatur id? Eligendi minima quibusdam, eaque reprehenderit explicabo recusandae! Dolor quas porro magnam non iusto quis sequi soluta veritatis fuga! Ullam nam doloremque quis eum incidunt saepe porro non, voluptatum ratione! Fugiat, ex vel culpa quia aliquid magnam eligendi harum ducimus voluptates. Ipsam porro odit voluptatibus cumque voluptates. Maxime numquam perspiciatis sit repudiandae pariatur, mollitia in veritatis debitis adipisci accusamus cumque iste dolorum excepturi quia expedita natus sed laborum! Illum ducimus numquam quas laborum corporis, voluptas autem, deleniti eveniet facilis eius quia quasi? Sit, deserunt dolorum. Deserunt illo, id, optio illum quaerat beatae nemo quo vero, a nulla facilis eum. Quod culpa atque alias velit magnam, fugit nesciunt beatae quidem non dicta saepe. Temporibus assumenda minus corrupti dolorem, accusantium mollitia illum ipsum eveniet velit, repudiandae placeat sed odio reprehenderit ad aperiam est delectus minima et nulla praesentium nesciunt magnam. Autem dolores asperiores consequatur eveniet dolorum nesciunt magnam ducimus fugiat exercitationem dolorem, mollitia ad accusantium sed recusandae magni corrupti, voluptate ratione voluptatum doloribus cupiditate veritatis sint. Laboriosam, labore architecto. Ut dolorum voluptatem iure recusandae aut architecto in tempore provident ad aliquam fugiat dignissimos, laborum quibusdam a saepe error commodi ex dicta magni sunt adipisci! Dolorum saepe provident doloremque fuga at atque facilis consequuntur pariatur porro. Similique eveniet quos magnam ipsa. Ullam accusamus temporibus, corrupti, impedit facere explicabo eaque quae unde eligendi quibusdam eum!
    <guide-modal v-model="guideModalShow" :dom="currentGuideDom">
      <button class="guide-next" @click="nextGuide">下一步</button>
    </guide-modal>
  </div>
</template>

<script>
import guideModal from '../../components/common/guide-modal'

export default {
  components: {
    guideModal
  },
  data () {
    return {
      guideModalShow: false,
      guideModalList: [],
      guideIndex: 0
    }
  },
  computed: {
    currentGuideDom () {
      if (this.guideModalList.length === 0) return null
      return this.guideModalList[this.guideIndex]
    }
  },
  methods: {
    nextGuide () {
      if (this.guideIndex < this.guideModalList.length - 1) {
        this.guideIndex++
      } else {
        this.guideModalShow = false
      }
    }
  },
  mounted () {
    this.guideModalData = this.$refs.div1
    this.guideModalList = [
      this.$refs.div1,
      this.$refs.div2,
      this.$refs.div3
    ]
    setTimeout(() => {
      this.guideModalShow = true
    }, 2000)
  }
}
</script>

<style lang="postcss" scoped>
.main-wrapper {
  padding: 50px;
}
.need-guide1 {
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #000;
  background-color: #eee;
}
.need-guide2 {
  text-align: center;
  width: 300px;
  height: 90px;
  line-height: 90px;
  border: 1px solid #000;
  background-color: #eee;
  margin: 200px 300px;
}
.need-guide3 {
  width: 150px;
  height: 150px;
  line-height: 150px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: #eee;
  text-align: center;
}
.guide-next {
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>
