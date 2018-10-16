<template>
<div class="bscroll" ref="bscroll">
  <ul class="bscroll-container">
      <router-link tag="li" to="/allclassify" class="classify">全部分类</router-link>
      <li class="classify" v-for="item of classify" :key="item.id">{{item.name}}</li>
  </ul>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'HomeScroll',
  props: ['classifyList'],
  data () {
    return {
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.a = this.classifyList
      let bscrollDom = this.$refs.bscroll
      if (!this.aBScroll) {
        this.aBScroll = new BScroll(bscrollDom, {
          scrollX: true
        })
      } else {
        this.aBScroll.refresh()
      }
    })
  },
  computed: {
    classify () {
      return this.classifyList.slice(1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.bscroll
   width 100%
   height 15%
   overflow hidden
   .bscroll-container
     width 17rem
     height 15%
     padding-bottom 10%
     margin-top 2.5%
     .classify
       display inline-block
       width 2rem
       background-color rgb(242, 242, 242)
       color rgb(170, 170, 170)
       text-align center
       margin-left 2%
       line-height 0.8rem
       border-radius .4rem
</style>
