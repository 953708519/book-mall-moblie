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
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
      }
    }
  },
  props: {
    swiperList: Array
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
