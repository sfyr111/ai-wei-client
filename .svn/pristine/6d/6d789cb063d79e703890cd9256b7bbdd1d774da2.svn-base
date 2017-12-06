<template>
  <div id="history-app">
    <div class="history-content">
      <swipeout >
        <swipeout-item :threshold=".3" underlay-color="#ccc" v-for="(item , index) in columns" :key="item._id">
            <div slot="content">
              <column-cell :item="item"></column-cell>
            </div>
            <div slot="right-menu">
              <swipeout-button @click.native="_deleteFavoriteHistory(item._id)" background-color="#D23934">删除</swipeout-button>
            </div>
        </swipeout-item>
      </swipeout>
    </div>
  </div>
</template>

<script>
  import { Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
  import Tab from 'components/tab/tab'
  import ColumnCell from 'components/column-cell/column-cell'
  import { getFavoriteHistory, deleteFavoriteHistory } from './api'
  import { ERR_OK } from 'common/api/config'
  import { mapGetters } from 'vuex'
  import storage from 'good-storage'

  export default {
    name: 'history',
    props: {},
    data () {
      return {
        columns: [],
        userId: ''
      }
    },
    computed: {
      ...mapGetters([
        'userInfo'
      ])
    },
    components: {
      Tab,
      ColumnCell,
      Swipeout,
      SwipeoutItem,
      SwipeoutButton
    },
    watch: {},
    methods: {
      async _getFavoriteHistory () {
        const params = {}
        return await getFavoriteHistory(params, this.userId).then(data => {
          if (data.code === ERR_OK) {
            this.columns = data.columns
            return data
          }
        })
      },
      async _deleteFavoriteHistory (columnId, userId) {
        const params = {}
        userId = this.userId
        return await deleteFavoriteHistory(params, columnId, this.userId).then(data => {
          if (data.code === ERR_OK) {
            this._getFavoriteHistory(userId)
            return data
          }
        })
      }
    },
    created () {
      this.userId = storage.get('aiwei').userInfo.openId
      this._getFavoriteHistory()
    },
    mounted () {}
  }
</script>

<style lang="stylus">
  @import "~common/stylus/main";

  body
    background-color #fbf9fe
  .history-content
    min-height 1195px 
    padding-top: 10px
    background #fff
</style>
