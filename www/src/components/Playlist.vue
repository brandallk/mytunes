<template>
  <div class="playlist">
    <div class="activeSong d-flex flex-column align-items-center mt-4">
      <img :src="activeSong.imgUrl" alt="song image" class="w-75 rounded-circle mb-4">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Playlist',
  components: {

  },
  data () {
    return {
      song: {}
    }
  },
  computed: {
    songs() {
      if (this.activePlaylist._id) {
        this.$store.dispatch('getPlaylistSongs', this.activePlaylist._id)
        return this.$store.state.songs
      }
      if (this.$store.state.playlists) {
        this.$store.dispatch('getPlaylistSongs', this.$store.state.playlists[0]._id)
        return this.$store.state.songs
      }
      return []
    },
    activeSong() {
      if (this.song._id) {
        return this.song
      }
      if (this.$store.state.songs) {
        return this.$store.state.songs[0]
      }
      return {}
    },
    activePlaylist() {
      if (this.playlist._id) {
        return this.playlist
      } else if (this.$store.state.playlists) {
        return this.$store.state.playlists[0]
      }
      return {}
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
