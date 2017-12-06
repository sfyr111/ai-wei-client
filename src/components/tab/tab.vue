<template>
  <div class="tab">
    <a class="tab-item" href="/index.html">
      <i class="tab-icon" :class="[selectedPage == 'home'?'active':'']"></i>
      <span class="tab-link" :class="[selectedPage == 'home'?'active':'']">首页</span>
    </a>
    <a class="tab-item" href="/favorite.html">
      <i class="tab-icon" :class="[selectedPage == 'favorite'?'active':'']"></i>
      <span class="tab-link" :class="[selectedPage == 'favorite'?'active':'']">收藏</span>
    </a>
    <a class="tab-item" href="/user.html">
      <i class="tab-icon" :class="[selectedPage == 'user'?'active':'']"></i>
      <span class="tab-link" :class="[selectedPage == 'user'?'active':'']">我的</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: {
    selectedPage: {
      type: String,
      default: 'home'
    }
  },
  data () {
    return {}
  },
  computed: {},
  components: {},
  watch: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/main";
  .tab
    overflow: hidden
    display: flex
    justify-content: space-around
    align-items center
    color #444
    background-color #fff
    position fixed
    bottom 0
    left 0
    right 0
    font-size 20px
    height 100px
    border-top 1px solid #ddd
    border-image: linear-gradient(#ddd, transparent) 30 30
    .tab-item
      display flex
      flex-direction column
      justify-content center
      align-items center
      .tab-icon
        display inline-block
        width 45px
        height 40px
        margin-bottom 10px
      .tab-link
        &.active
          color #00A0E7
      &:nth-of-type(1)
        .tab-icon
          bg-image('tab_home_nor')
          background-size 100% 100%
          &.active
            bg-image('tab_home_pre')
            background-size 100% 100%
      &:nth-of-type(2)
        .tab-icon
          bg-image('tab_collect_nor')
          background-size 100% 100%
          &.active
            bg-image('tab_collect_pre')
            background-size 100% 100%
      &:nth-of-type(3)
        .tab-icon
          bg-image('tab_user_nor')
          background-size 100% 100%
          &.active
            bg-image('tab_user_pre')
            background-size 100% 100%
</style>
