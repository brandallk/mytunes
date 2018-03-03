<template>
  <div class="playlist">

    <h4 class="text-center" v-if="!activeSong">Use 'Search' to create a playlist!</h4>
    
    <div class="activeSong d-flex flex-column align-items-center mt-4" v-if="activeSong">
      <h4 class="text-center">{{activeSong.playlistTitle}}</h4>
      <img :src="activeSong.imgUrl" alt="song image" class="w-50 rounded-circle mb-4">
      <h5>{{activeSong.title}}</h5>
      <div class="controls row">
        <div class="back col-4"><i class="fas fa-step-backward"></i></div>
        <div class="play-pause col-4">
          <div class="play" v-if="!isPlaying"><i class="fas fa-play"></i></div>
          <div class="pause" v-if="isPlaying"><i class="fas fa-pause"></i></div>
        </div>
        <div class="next col-4"><i class="fas fa-step-forward"></i></div>
      </div>
    </div>

    <hr>

    <div class="songs container-fluid bg-light py-3">

      <div class="song-header p-1 bg-light row px-4 py-3 border-bottom">
        <span class="play-btn text-dark col-1"></span>
        <span class="title text-dark col-4">Title</span>
        <span class="album text-dark col-4">Album</span>
        <span class="time text-dark col-3">Time</span>
      </div>
  
      <div class="song p-1 row px-4 py-2 align-items-center" v-for="song in songs">
        <span class="play-btn col-1"><i class="fa fa-play-circle" aria-hidden="true"></i></span>
        <span class="title col-4">{{song.title}}</span>
        <span class="album col-4">{{song.albumTitle}}</span>
        <span class="time col-3">{{getMinsFromSecs(song.timeInSeconds)}}</span>
      </div>

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
      selectedPlaylistSongs: [],
      selectedSong: {},
      isPlaying: false
    }
  },
  computed: {
    songs() {
      if (this.selectedPlaylistSongs.length) {
        return this.selectedPlaylistSongs
      }
      if (this.$store.state.defaultSongs) {
        return this.$store.state.defaultSongs
      }
      return []
    },
    activeSong() {
      if (this.selectedSong._id) {
        return this.selectedSong
      }
      if (this.$store.state.defaultSongs) {
        return this.$store.state.defaultSongs[0]
      }
      return false
    }
  },
  methods: {
    getMinsFromSecs(totalSecs) {
      var mins = Math.floor(totalSecs/60)
      var secs = totalSecs % 60
      var formattedSecs = secs < 10 ? "0" + secs : secs
      return `${mins}:${formattedSecs}`
    }
  }
}
</script>

<style scoped>

</style>
