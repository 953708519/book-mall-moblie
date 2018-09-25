<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-classify></home-classify>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeClassify from './components/classification'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeClassify
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
