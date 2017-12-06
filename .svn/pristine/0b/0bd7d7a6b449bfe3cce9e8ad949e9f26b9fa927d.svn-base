<template>
  <div class="advertisement">
    <div>
      <img class="img" :src="banner.imgUrl" alt="">
    </div>
    <div class="content">
      <div contenteditable="true" class="w-e-text" v-html="banner.richText"></div>
    </div>
  </div>
</template>

<script>
import { getBannerById } from 'pages/index/api'
import { ERR_OK } from 'common/api/config'
export default {
  name: 'advertisement',
  props: {},
  data () {
    return {
      id: '',
      banner: {
        imgUrl: './广告页_02.png'
      }
    }
  },
  computed: {},
  components: {},
  watch: {},
  methods: {
    async _getBannerById () {
      const params = {}
      return await getBannerById(params, this.id).then(data => {
        if (data.code === ERR_OK) {
          this.banner = data.banner[0]
          return data
        }
      })
    }
  },
  created () {
    this.id = this.$route.params.id
    this._getBannerById()
  },
  mounted () {}
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/main";
  @import "~common/css/wangEditor.css";

  .advertisement
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 100
    background #fff
    overflow-y auto
    .img
      width 750px
      height 390px
    .content
      padding 50px 0px 0 0px
      font-size 25px
      line-height 50px
</style>
