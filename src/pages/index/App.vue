<template>
  <div id="app">
    <router-view></router-view>
    <tab selectedPage="home"></tab>
  </div>
</template>

<script>
  import Tab from 'components/tab/tab'
  export default {
    name: 'app',
    mixins: [],
    props: {
    },
    data () {
      return {
        classify: '',
        popularColumns: '',
        banners: []
      }
    },
    computed: {
    },
    components: {
      Tab
    },
    methods: {
    },
    created () {
    },
    mounted () {}
  }
</script>

<style lang="stylus" type="text/stylus">
  @import "~common/stylus/main";

  body
    background-color #fbf9fe
    width 750px
</style>
