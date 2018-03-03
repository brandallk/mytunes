<template>
  <div class="player container-fluid pt-5">
    <div class="row">
      <profile class="col-3"></profile>
      <playlist class="col-6"></playlist>
      <playlists class="col-3"></playlists>
    </div>
  </div>
</template>

<script>
  import Profile from './Profile'
  import Playlist from './Playlist'
  import Playlists from './Playlists'
  export default {
    name: 'Player',
    components: {
      profile: Profile,
      playlist: Playlist,
      playlists: Playlists
    },
    data () {
      return {
        
      }
    },
    computed: {

    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
