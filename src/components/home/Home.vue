<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-scroll :classifyList="classifyList"></home-scroll>
    <home-book :bookList="bookList"></home-book>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeBook from './components/book'
import HomeScroll from './components/scroll'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeBook,
    HomeScroll
  },
  data () {
    return {
      swiperList: [],
      classifyList: [],
      bookList: []
    }
  },
  methods: {
    getHomeinfo () {
      axios.get('https://easy-mock.com/mock/5bc2ecc1dfc4ef4ebc52b236/lyl/home')
        .then(this.getHomeinfoSucc)
    },
    getHomeinfoSucc (res) {
      res = res.data
      if (res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.classifyList = data.classifyList
        this.bookList = data.bookList
      }
    }
  },
  mounted () {
    this.getHomeinfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
