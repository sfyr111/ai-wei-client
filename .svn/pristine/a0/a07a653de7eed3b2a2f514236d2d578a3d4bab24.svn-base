<template>
  <div id="favorite-app">
    <div class="favorite-content">
      <swipeout >
        <swipeout-item :threshold=".3" underlay-color="#ccc" v-for="(item , index) in columns" :key="item._id">
            <div slot="content">
              <column-cell :item="item"></column-cell>
            </div>
            <div slot="right-menu">
              <swipeout-button @click.native="_deleteFavoriteColumn(item._id)" background-color="#D23934">删除</swipeout-button>
            </div>
        </swipeout-item>
      </swipeout>
    </div>
    <tab selectedPage="favorite"></tab>
  </div>
</template>

<script>
  import { Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
  import Tab from 'components/tab/tab'
  import ColumnCell from 'components/column-cell/column-cell'
  import { getFavoriteColumn, deleteFavoriteColumn } from './api'
  import { ERR_OK } from 'common/api/config'
  import { mapGetters } from 'vuex'
  import storage from 'good-storage'

  export default {
    name: 'favorite',
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
      async _getFavoriteColumn () {
        const params = {}
        return await getFavoriteColumn(params, this.userId).then(data => {
          if (data.code === ERR_OK) {
            this.columns = data.columns
            return data
          }
        })
      },
      async _deleteFavoriteColumn (columnId, userId) {
        const params = {}
        userId = this.userId
        return await deleteFavoriteColumn(params, columnId, this.userId).then(data => {
          if (data.code === ERR_OK) {
            this._getFavoriteColumn(userId)
            return data
          }
        })
      }
    },
    created () {
      this.userId = storage.get('aiwei').userInfo.openId
      this._getFavoriteColumn()
    },
    mounted () {}
  }
</script>

<style lang="stylus">
  @import "~common/stylus/main";

  body
    background-color #fbf9fe
  .favorite-content
    height 1103px
    background #fff
    overflow-y auto
</style>
