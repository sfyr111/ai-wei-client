<template>
  <div class="column-cell">
      <div class="list-item" @click="goItem(item.type,item._id)">
        <div class="list-img">
          <i class="imgUrl" :style="{ backgroundImage:`url('${item.imgUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center'}"></i>
          <i class="video-icon" v-show="item.type === 'video'"></i>
        </div>
        <div class="list-font">
          <div class="font-tltle">
            <span>{{item.name}}</span>
          </div>
          <div class="font-content">
            <span>{{item.subtitle}}</span>
          </div>
          <div class="font-bottom">
            <div class="font-course" v-show="ifClassify">
              <span :class="[item.classifyName==='深度学习'? 'deep':item.classifyName==='语音识别'? 'speech': 'machine']">{{item.classifyName}}</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'column-cell',
    props: {
      item: {
        type: Object,
        default () {
          return {
          }
        }
      },
      ifClassify: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
      }
    },
    computed: {
    },
    components: {},
    watch: {},
    methods: {
      updateTime (updateTime) {
        const update = (Date.now() - updateTime) / 1000 / 60 / 60
        if (update < 24 && update > 1) { // 1小时 - 24小时
          return (update | 0) + '小时前更新'
        } else if (update > 24) { // > 24小时
          return (update / 24 | 0) + '天前更新'
        } else { // 1小时以内
          return '刚刚更新'
        }
      },
      goItem (type, columnId) {
        window.location.href = `/column-${type}.html#/?columnId=${columnId}`
      }
    },
    created () {
    },
    mounted () {}
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/main";

  .column-cell
    padding 0 20px 0 20px
    background-color #fff
    .list-item
      height 210px
      display flex
      flex-direction row
      border-bottom 3px solid #f7f7f7
      .list-img
        display flex
        align-items center
        position relative
        .video-icon
          display inline-block
          width 40px
          height 40px
          bg-image('视频')
          background-size 100% 100%
          position absolute
          right 10px
          bottom 30px
        .imgUrl
          display inline-block
          width 130px
          height 170px
          border-radius 15px
          margin-left 5px
      .list-font
        margin-left 28px
        display flex
        justify-content center
        flex-direction column
        width 495px
        .font-tltle
          span
            color #262626
            font-size 24px
            font-weight 600
        .font-content
          display flex
          margin-top 12px
          min-height 70px
          width 400px
          display flex
          align-items center
          span
            font-size 23px
            color #636363
            line-height 35px
        .font-bottom
          // margin-top 8px
          display flex
          justify-content flex-end
          align-items center
          flex-direction row
          .font-time
            display flex
            padding 5px
            border 1px solid #e5e5e5
            border-radius 8px
            span
              font-size 24px
              color #828282
          .font-course
            span
              color #fff
              font-size 18px
              padding 4px 8px 2px 8px
              &.deep
                background #009FEB
              &.speech
                background #E565FF
              &.machine
                background #FFC900
</style>
