<template>
<div class="header">
   <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
    <div class="header-input">
       <span class="iconfont">&#xe632;</span>
       搜索书籍
    </div>
    <div class="header-right">分类<span class="iconfont">&#xe62d;</span></div>
</div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '~@/assets/css/varibles.styl';
.header
      padding : 0 .1rem
      display:flex
      height:.86rem
      line-height:.86rem
      .header-left
            width:.64rem
            float:left
         .back-icon
             text-align:center
             font-size:.4rem
      .header-input
            flex:1
            margin-top:.12rem
            height:.64rem
            line-height:.64rem
            background:#f2f2f2
            border-radius:999px
            margin-left:.1rem
            margin-right:.1rem
            padding-left:.3rem
            color:#ccc
      .header-right
             width:1.24rem
             float:right
             text-align:center
</style>
