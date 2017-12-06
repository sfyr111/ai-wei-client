<template>
  <div class="carousel">
    <swiper :list="banners" height="4.94rem" auto loop dots-position="center" dots-class="custom-bottom"></swiper>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  props: {
    banners: {
      type: Array,
      defalut () {
      }
    }
  },
  data () {
    return {
      list: []
    }
  },
  computed: {},
  components: {
    Swiper
  },
  watch: {
  },
  methods: {
    getBanners () {
      for (let i = 0; i < this.banners.length; i++) {
        this.list[i] = {}
        this.list[i].url = `/advertisement/${this.banners[i]._id}`
        this.list[i].img = this.banners[i].imgUrl
      }
    }
  },
  created () {
  },
  mounted () {}
}
</script>

<style lang="stylus" >
  @import "~common/stylus/main";

  .carousel
    .vux-slider > .vux-indicator.custom-bottom
      bottom 14px
    .vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc
      background-image none
    .vux-slider > .vux-indicator > a > .vux-icon-dot, .vux-slider .vux-indicator-right > a > .vux-icon-dot
      background-color #fff
      border-radius 2px
      width 20px
      height 4px
    .vux-slider > .vux-indicator > a > .vux-icon-dot.active, .vux-slider .vux-indicator-right > a > .vux-icon-dot.active
      background-color #444
    .vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-img
      background-size 100% 100%
</style>
