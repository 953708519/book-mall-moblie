<template>
    <div>
     <ul>
         <li class="item" v-for="item of bookList" :key="item.id">
             <div class="item-img-wrap">
                 <img :src="item.imgUrl" alt="">
             </div>
             <div class="item-info">
              <p class="item-name">{{item.name}}</p>
              <p class="item-auth">{{item.author}}</p>
              <p class="item-price">{{item.price}}<span class="add iconfont">&#xe781;</span></p>
             </div>
         </li>
     </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeBook',
  props: {
    bookList: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.item
  height 3.56rem
  width 100%
  padding .5rem .3rem
  box-sizing border-box
  border-bottom 1px solid #a9a9a9
  .item-img-wrap
    float left
    height 2.5rem
    width 2.5rem
    overflow hidden
    img
      width 100%
  .item-info
    float left
    width 4.25rem
    p
      padding-top .2rem
    .item-name
      font-size 16px
      font-weight bold
    .item-auth
      color #aaaaaa
      font-size 12px
    .item-price
      color #DC143C
      margin-top 1rem
      font-size 16px
      .add
        float right
        padding-right .5rem
        font-size 20px
</style>
