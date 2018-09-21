<template>
<div class="wrap">
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id"><img :src="item.imgUrl" class="swiper-img"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: ' .swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '01',
          imgUrl: 'http://img62.ddimg.cn/upload_img/00087/geq/750x315_zl_0905-1537151444.jpg'
        },
        {
          id: '02',
          imgUrl: 'http://img52.ddimg.cn/9003330047303182.jpg'
        },
        {
          id: '03',
          imgUrl: 'http://img61.ddimg.cn/upload_img/00733/422zhsj/750-315-1526620804.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrap >>> .swiper-pagination-bullet-active
  background-color #fff
.wrap
  width 100%
  height 0
  padding-bottom 42%
  overflow hidden
  .swiper-img
     width 100%
</style>
