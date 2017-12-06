<template>
  <div id="hot-list">
    <column-cell v-for="(item, index) in columns" :key="item._id" :item="item"></column-cell>
  </div>
</template>

<script>
  import columnCell from 'components/column-cell/column-cell'
  import { getColumns } from './api'
  import { ERR_OK } from 'common/api/config'
  export default {
    name: 'hot-list',
    props: {},
    data () {
      return {
        columns: []
      }
    },
    computed: {
    },
    components: {
      columnCell
    },
    watch: {},
    methods: {
      async _getColumns () {
        const params = {}
        return await getColumns(params).then(data => {
          if (data.code === ERR_OK) {
            this.columns = data.column
            return data
          }
        })
      }
    },
    created () {
      this._getColumns()
    },
    mounted () {}
  }
</script>

<style lang="stylus">
  @import "~common/stylus/main";

  body
    background-color #fbf9fe
</style>
