<template>
<div class="classifywrap">
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="(page,index) of pages" :key="index"><div class="classify" v-for="item of page" :key="item.id">{{item.name}}</div></swiper-slide>
    <!-- Optional controls -->
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeClassify',
  data () {
    return {
      swiperOption: {
        freeMode: true
      },
      classifyList: [
        {
          id: '0001',
          name: '全部分类'
        },
        {
          id: '0002',
          name: '文学与历史'
        },
        {
          id: '0003',
          name: '小说与童话'
        },
        {
          id: '0004',
          name: '科学与技术'
        },
        {
          id: '0005',
          name: '电子书籍'
        },
        {
          id: '0006',
          name: '生活与教育'
        },
        {
          id: '0007',
          name: '漫画图书'
        }
      ]
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
  padding-top 2.5%
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
     background-color rgb(242, 242, 242)
     color rgb(170, 170, 170)
     text-align center
     margin-left 3%
     line-height 0.8rem
     border-radius .4rem
</style>
