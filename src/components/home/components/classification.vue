<template>
<div class="classifywrap">
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="(page,index) of pages" :key="index">
      <div class="classify" v-for="item of page" :key="item.id">{{item.name}}</div>
    </swiper-slide>
    <!-- Optional controls -->
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeClassify',
  props: {
    classifyList: Array
  },
  data () {
    return {
      swiperOption: {
        freeMode: true
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.classifyList.forEach((item, index) => {
        const page = Math.floor(index / 4)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
.classifywrap >>> .swiper-slide-active
  background-color #fff
.classifywrap
   width 100%
   height 0
   padding-bottom  15%
   .classify
     width 22%
     height 0
     padding-bottom 10%
     overflow hidden
     float left
     margin-top 2.5%
     background-color rgb(242, 242, 242)
     color rgb(170, 170, 170)
     text-align center
     margin-left 3%
     line-height 0.8rem
     border-radius .4rem
</style>
