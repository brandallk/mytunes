<template>
  <div class="home">
    <topbar></topbar>
    <navbar v-on:hideSearch="hideSearch" v-on:showSearch="showSearch"></navbar>
    <search v-if="displaySearch"></search>
    <player v-if="!displaySearch"></player>
  </div>
</template>

<script>
  import Topbar from './Topbar'
  import Navbar from './Navbar'
  import Search from './Search'
  import Player from './Player'
  export default {
    name: 'Home',
    components: {
      topbar: Topbar,
      navbar: Navbar,
      search: Search,
      player: Player
    },
    data () {
      return {
        displaySearch: false
      }
    },
    computed: {
      
    },
    methods: {
      hideSearch() {
        this.displaySearch = false
      },
      showSearch() {
        this.displaySearch = true
      }
    },
    mounted() {
      this.$store.dispatch('verifyUserAuth', this.$route.params.userId)
      this.$store.dispatch('getUserPlaylists')
    }
  }
</script>

<style scoped>

</style>
