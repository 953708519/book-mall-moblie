<template>
<div class="header">
   <div class="header-left">返回</div>
    <div class="header-input">
       搜索书籍
    </div>
    <div class="header-right">全部分类</div>
</div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped >
.header
      padding : 0 .1rem
      display :flex
      height :.86rem
      line-height :.86rem
      .header-left      
            width :.64rem
            float :left   
      .header-input   
            flex :1
            margin-top :.12rem
            height :.64rem 
            line-height :.64rem
            background: #f2f2f2
            border-radius: 999px
            margin-left :.1rem
            margin-right :.3rem
            padding-left :.2rem
      .header-right 
             width: 1.24rem
             float: right
             text-align : center     
</style>
