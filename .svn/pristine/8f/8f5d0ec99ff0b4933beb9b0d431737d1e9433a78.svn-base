<template>
  <div class="course-introduce">
    <!-- <div class="introduce-top">
      <img src="./pic02_02.png" alt="">
      <div class="operation">
        <div class="operation-left" @click="column">
          <i data-feather="menu"></i>
          <span>课程</span>
        </div>
        <div class="operation-right">
          <section>
            <i data-feather="heart"></i>
            <span>收藏</span>
          </section>
          <section>
            <i data-feather="share"></i>
            <span>分享</span>
          </section>
        </div>
      </div>
    </div> -->
    <div class="introduce-content">
      <div class="content-top">
        <div class="content-title"><span>吴老师·智能时代</span></div>
        <div class="content-Subtitle">
          <div class="Subtitle-title">帮你了解人工智能</div> 
          <div class="Subtitle-number">
            <span>9999</span>
            <span>人订阅</span>
          </div>
        </div>
      </div>
      <div class="teacher-introduction">
        <div class="teacher-title">
          吴老师简介:
        </div>
        <div class="teacher-content">
          习近平强调，2020年，我们将全面建成小康社会。全面建成小康社会，一个不能少；共同富裕路上，一个不能掉队。我们将举全党全国之力，坚决完成脱贫攻坚任务，确保兑现我们的承诺。我们要牢记人民对美好生活的向往就是我们的奋斗目标，坚持以人民为中心的发展思想，努力抓好保障和改善民生各项工作，不断增强人民的获得感、幸福感、安全感，不断推进全体人民共同富裕。我坚信，中国人民生活一定会一年更比一年好
        </div>
      </div>
      <div class="course-introduction">
        <div class="course-title">
          课程简介:
        </div>
        <div class="course-content">
          习近平强调，2020年，我们将全面建成小康社会。全面建成小康社会，一个不能少；共同富裕路上，一个不能掉队。我们将举全党全国之力，坚决完成脱贫攻坚任务，确保兑现我们的承诺。我们要牢记人民对美好生活的向往就是我们的奋斗目标，坚持以人民为中心的发展思想，努力抓好保障和改善民生各项工作，不断增强人民的获得感、幸福感、安全感，不断推进全体人民共同富裕。我坚信，中国人民生活一定会一年更比一年好
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import feather from 'feather-icons'
export default {
  name: 'course-introduce',
  props: {},
  data () {
    return {}
  },
  computed: {},
  components: {},
  watch: {},
  methods: {
    column () {
      // this.$router.push({path: '/', query: {columnId: '59e7163129a1430b980ca41f'}})
      this.$router.go(-1)
    }
  },
  created () {},
  mounted () {
    feather.replace()
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/main";

  .course-introduce
    // position fixed
    // top 0
    // bottom 0
    // left 0
    // right 0
    // z-index 100
    // min-height 1334px
    background #fff
    // overflow-y auto
    .introduce-top
      position relative
      width 750px
      height 400px
      img
        width 750px
        height 400px
      .operation
        display flex
        width 710px
        justify-content space-between
        padding 0 20px 0 20px
        position absolute
        bottom 25px
        z-index 50
        .operation-left
          display flex
          align-items center
          font-size 24px
          color #fff
          > svg
            color #fff
            width 40px
            height 40px
            margin-right 17px
        .operation-right
          display flex
          section
            display flex
            align-items center
            font-size 24px
            color #fff
            > svg 
              width 40px
              height 40px
              color #fff
            &:nth-of-type(1)
              margin-right 54px
              > svg
                margin-right 10px 
            &:nth-of-type(2)
              > svg
                margin-right 22px
    .introduce-content
      padding 26px 20px 0 20px
      .content-top
        .content-title
          span
            font-size 40px
            font-weight bold
        .content-Subtitle
          display flex
          justify-content space-between
          align-items center
          font-size 26px
          margin-top 20px
          .Subtitle-title
            color #6d6d6d
          .Subtitle-number
            display flex
            font-size 18px
            padding 5px 10px 5px 10px
            color #029EE9
            border 1px solid #6d6d6d
    .teacher-introduction
      padding-top 30px
      font-size 27px
      line-height 40px
    .course-introduction
      font-size 27px
      padding-top 56px
      line-height 40px
</style>
