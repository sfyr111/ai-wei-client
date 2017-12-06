<template>
  <div id="column-text">
    <div class="column-top">
      <img :src="column.imgUrl" class="background" alt="">
      <div class="operation" v-show="column.classifyName">
        <div class="operation-left">
          <div class="text-title">{{column.name}}</div>
          <div class="text-content">{{column.subtitle}}</div>
          <div class="text-classify"><span :class="[column.classifyName==='深度学习'? 'deep':column.classifyName==='语音识别'? 'speech': 'machine']">{{courses.classifyName}}</span>
            <div class="operation-right">
              <section @click="_addFavorite(columnId)" v-show="!isFavorite">
                <i data-feather="heart"></i>
                <span>收藏</span>
              </section>
              <section v-show="isFavorite" @click="_deleteFavoriteColumn(columnId)">
                <i data-feather="heart" class="isFavorite"></i>
                <!-- <span>已收藏</span> -->
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column-audio" v-if="courses.audio.url">
      <div class="audio-item" @click="audioPlay">
        <div class="item-icon">
          <i :class="[ifPause? 'pause': 'play']"></i>
          <audio :src="courses.audio.url" ref="myAudio"></audio>
        </div>
        <div class="item-font">
          <div class="item-title">{{courses.audio.title}}</div>
          <div class="item-duration">
            <span>{{sec_to_time(currentTime)}}/{{sec_to_time(courses.audio.duration)}}</span>
            <span>{{Math.floor(courses.audio.fileSize/1024/1024* 100) / 100? Math.floor(courses.audio.fileSize/1024/1024* 100) / 100 + 'M' : '未知大小'}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-text">
      <div contenteditable="true"class="w-e-text" v-html="courses.richText"></div>
    </div>
    <toast v-model="showPositionValue" type="text" :time="1000" :is-show-mask="true" :text="toastText" position="middle"></toast>
  </div>
</template>

<script>
  import { getFavoriteColumn, addFavoriteColumn, getCoursesById, getCoursesByColumnId, deleteFavoriteColumn } from './api'
  import { ERR_OK } from 'common/api/config'
  import feather from 'feather-icons'
  import { addFavoriteHistory } from 'common/api'
  import storage from 'good-storage'
  import { Toast } from 'vux'
  export default {
    name: 'column-text',
    mixins: [],
    props: {},
    data () {
      return {
        courses: {
          audio: {}
        },
        isShowIntroduce: false,
        columns: [],
        userId: '',
        columnId: '',
        ifPause: true,
        column: {
        },
        currentTime: 0,
        showPositionValue: false,
        toastText: ''
      }
    },
    computed: {
      isFavorite () {
        return this.columns.filter(item => {
          return item._id === this.$route.query.columnId
        }).length
      },
      myAudio () {
        return this.$refs.myAudio
      }
    },
    components: {
      Toast
    },
    methods: {
      async _getCoursesByColumnId (columnId) {
        const params = {}
        return getCoursesByColumnId(params, columnId).then(data => {
          if (data.code === ERR_OK) {
            this.courses = data.text[0]
            return data
          }
        })
      },
      async _getCoursesById (columnId) {
        const params = {}
        return getCoursesById(params, columnId).then(data => {
          if (data.code === ERR_OK) {
            this.column = data.column[0]
            document.title = this.column.name
            if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
              var i = document.createElement('iframe')
              i.style.display = 'none'
              i.onload = function () {
                setTimeout(function () {
                  i.remove()
                }, 3)
              }
              document.body.appendChild(i)
            }
            console.log(document.title)
            return data
          }
        })
      },
      introduce () {
        this.isShowIntroduce = !this.isShowIntroduce
      },
      async _getFavoriteColumn () {
        const params = {}
        return await getFavoriteColumn(params, this.userId).then(data => {
          if (data.code === ERR_OK) {
            this.columns = data.columns
            return data
          }
        })
      },
      async _addFavorite (columnId, userId) {
        if (this.isFavorite) return
        const params = {}
        columnId = this.$route.query.columnId
        userId = this.userId
        return await addFavoriteColumn(params, columnId, this.userId).then(data => {
          if (data.code === ERR_OK) {
            this._getFavoriteColumn(userId)
            this.toastText = '已收藏成功'
            this.showPositionValue = true
            return data
          }
        })
      },
      sec_to_time (s) {
        let t
        if (s > -1) {
          var hour = Math.floor(s / 3600)
          var min = Math.floor(s / 60) % 60
          var sec = s % 60
          if (hour < 10) {
            t = '0' + hour + ':'
          } else {
            t = hour + ':'
          }
          if (min < 10) {
            t += '0'
          }
          t += min + ':'
          if (sec < 10) {
            t += '0'
          }
          t += sec.toFixed(0)
        }
        return t
      },
      async _deleteFavoriteColumn (columnId, userId) {
        const params = {}
        userId = this.userId
        return await deleteFavoriteColumn(params, columnId, this.userId).then(data => {
          if (data.code === ERR_OK) {
            this._getFavoriteColumn(userId)
            this.toastText = '删除收藏成功'
            this.showPositionValue = true
            return data
          }
        })
      },
      addHistory () {
        const params = {}
          // let userId = this.userId
        let columnId = this.$route.query.columnId
        addFavoriteHistory(params, columnId, this.userId).then(data => {
          if (data.code === ERR_OK) {
            return data
          }
        })
      },
      audioPlay () {
        if (this.ifPause) {
          this.myAudio.play()
          this.ifPause = this.myAudio.paused
          this.audioTime()
        } else {
          this.myAudio.pause()
          this.ifPause = this.myAudio.paused
          this.audioTime()
        }
      },
      audioTime () {
        if (this.myAudio.paused) {
          clearTimeout(t)
          return
        }
        this.currentTime = this.myAudio.currentTime
        let _this = this
        var t = setTimeout(_this.audioTime, 1000)
        if (this.myAudio.ended) {
          clearTimeout(t)
          this.currentTime = 0
        }
      }
    },
    created () {
      // 59f02fa8c277b7f7d90ac0b1
      this.userId = storage.get('aiwei').userInfo.openId
      this.columnId = this.$route.query.columnId
      this._getCoursesByColumnId(this.$route.query.columnId)
      this._getCoursesById(this.$route.query.columnId)
      this._getFavoriteColumn()
      this.addHistory()
    },
    mounted () {
      feather.replace()
    }
  }
</script>

<style lang="stylus">
  @import "~common/stylus/main";
  @import "~common/css/wangEditor.css";

  #column-text
    background #fff
    .column-top
      width 750px
    .background
      width 750px
      height 400px
    .operation
      display flex
      width 710px
      justify-content space-between
      margin 26px 20px 0 20px
      border-bottom 3px solid #f7f7f7
      .operation-left
        width 710px
        .text-title
          font-size 30px
          color #000
          font-weight bold
        .text-content
          font-size 25px
          color #636363
          margin-top 13px
          line-height 27px
        .text-classify
          margin-top 13px
          margin-bottom 15px
          display flex
          justify-content space-between
          align-items center
          >span
            color #fff
            font-size 18px
            padding 4px 8px 2px 8px
            &.deep
              background #009FEB
            &.speech
              background #E565FF
            &.machine
              background #FFC900
        .operation-right
          display flex
          align-items flex-end
          section
            display flex
            align-items center
            font-size 24px
            width 150px
            &.isFavorite
              color red
            .isFavorite
              color red
            > svg
              width 40px
              height 40px
              color #636363
            >span
              color #636363
            &:nth-of-type(1)
              > svg
                margin-right 10px
            &:nth-of-type(2)
              > svg
                margin-right 10px
    .column-audio
      padding 38px 40px 38px 40px
      .audio-item
        border 1px solid #dcdcdc
        height 86px
        display flex
        background #f7f7f7
        .item-icon
          width 94px
          display flex
          align-items center
          i
            width 46px
            height 46px
            display inline-block
            margin-left 28px
            &.play
              bg-image('./img/播放状态')
              background-size 100% 100%
            &.pause
              bg-image('./img/未播状态')
              background-size 100% 100%
        .item-font
          .item-title
            font-size 24px
            color #009fe8
            padding-top 14px
          .item-duration
            font-size 18px
            color #636363
            padding-top 14px
            span:last-child
              margin-left  28px
    .content-text
      padding-top 32px
      min-height 385px
</style>
