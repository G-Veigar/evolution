<template>
  <div class="list">
    <!-- <virtual-list :size="50" :remain="8">
      <list-item v-for="(item, key) in list" :id="key" :key="key"></list-item>
    </virtual-list> -->
    <recycle-scroller
      class="scroller"
      :items="list"
      :item-size="200"
      key-field="id"
      v-slot="{ item }">
      <list-item :data="item"></list-item>
    </recycle-scroller>
    <button @click="changeList">change list</button>
  </div>
</template>

<script>
// doc: https://github.com/Akryum/vue-virtual-scroller#recyclescroller
import listItem from '../components/business/list-item'
import { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

export default {
  data () {
    return {
      list: [
        {
          id: 1,
          name: 'name1'
        },
        {
          id: 2,
          name: 'name2'
        },
        {
          id: 3,
          name: 'name3'
        },
        {
          id: 4,
          name: 'name4'
        },
        {
          id: 5,
          name: 'name5'
        },
        {
          id: 6,
          name: 'name6'
        },
        {
          id: 7,
          name: 'name7'
        },
        {
          id: 8,
          name: 'name8'
        },
        {
          id: 9,
          name: 'name9'
        },
        {
          id: 10,
          name: 'name9'
        },
        {
          id: 11,
          name: 'name11'
        },
        {
          id: 12,
          name: 'name12'
        }
      ]
    }
  },
  components: {
    'recycleScroller': RecycleScroller,
    listItem
  },
  methods: {
    changeList () {
      this.list[0].child.name = 'xxxxx'
    }
  },
  created () {
    // let arr = new Array(1000).fill(true)
    // this.list = arr.map((item, key) => {
    //   return {
    //     id: key,
    //     name: 'name' + key
    //   }
    // })
    this.list = [
      {
        id: 100,
        name: 'name100',
        child: {
          name: 'child100'
        }
      },
      {
        id: 101,
        name: 'name101',
        child: {
          name: 'child101'
        }
      },
      {
        id: 102,
        name: 'name102',
        child: {
          name: 'child102'
        }
      }
    ]
  }
}
</script>

<style lang="postcss" scoped>
.list {
  height: 100vh;
}
.scroller {
  height: 100%;
}
.myitem {
  height: 260px;
  background-color: #ccc;
}
</style>
