<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-classify></home-classify>
    <home-book></home-book>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeClassify from './components/classification'
import HomeBook from './components/book'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeClassify,
    HomeBook
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
