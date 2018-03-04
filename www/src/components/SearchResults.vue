<template>
  <div class="searchResults container-fluid bg-light py-3">

    <div class="song-header p-1 bg-light row px-4 py-3 border-bottom">
      <span class="play-btn text-dark col-1"></span>
      <span class="title text-dark col-4">Name of song</span>
      <span class="album text-dark col-4">Album</span>
      <span class="time text-dark col-3">Time</span>
    </div>

    <div class="song p-1 row px-4 py-2 align-items-center" v-for="song in songs">
      <button class="play-btn btn btn-sm btn-outline-light col-1" v-show="showPlayBtn(song)" @click="play(song.trackId, song.previewUrl)">
        <i class="fa fa-play-circle"></i>
      </button>
      <button class="play-btn btn btn-sm btn-outline-light col-1" v-show="showPauseBtn(song)" @click="pause(song.trackId, song.previewUrl)">
        <i class="fas fa-pause-circle"></i>
      </button>
      <span class="title col-4">{{song.trackName}}</span>
      <span class="album col-4">{{song.collectionName}}</span>
      <span class="time col-1">{{getMinsFromMS(song.trackTimeMillis)}}</span>
      <span class="time col-2">
        <button class="btn btn-sm btn-outline-light" @click="submit(song)">Add to My Music</button>
      </span>
    </div>
    
    <addSongForm v-if="displayAddForm" :song="song" v-on:hideAddSongForm="hideAddSongForm"></addSongForm>
  </div>

</template>

<script>
  import AddSongForm from './AddSongForm'
  export default {
    name: 'SearchResults',
    components: {
      addSongForm: AddSongForm
    },
    data () {
      return {
        displayAddForm: false,
        selectedSong: {
          id: "",
          audio: {ended: true},
          // timeout: ""
        },
        // audioIsPlaying: false
      }
    },
    computed: {
      songs() {
        return this.$store.state.iTunesResults
      },
      audioIsPlaying() {
        return !(this.selectedSong.audio.ended || this.selectedSong.audio.paused)
      }
    },
    methods: {
      getMinsFromMS(ms) {
        var totalSecs = Math.floor(ms/1000)
        var mins = Math.floor(totalSecs/60)
        var secs = totalSecs % 60
        var formattedSecs = secs < 10 ? "0" + secs : secs
        return `${mins}:${formattedSecs}`
      },
      submit(song) {
        var newSong = {
          title: song.trackName,
          albumTitle: song.collectionName,
          audioSrc: song.previewUrl,
          artists: [
            song.artistName
          ],
          imgUrl: song.artworkUrl100,
          timeInSeconds: Math.floor(song.trackTimeMillis/1000),
          userId: this.$route.params.userId,
          playlistId: "",
          playlistTitle: " - "
        }
        this.song = newSong
        this.displayAddForm = true
      },
      hideAddSongForm() {
        this.displayAddForm = false
      },
      play(songId, audioSrc) {
        if (this.audioIsPlaying) {
          this.selectedSong.audio.pause()
          // console.log('timeoutId:', this.selectedSong.timeout)
          // clearTimeout(this.selectedSong.timeout)
        }
        this.selectedSong.id = songId
        this.selectedSong.audio = new Audio(audioSrc)
        this.selectedSong.audio.play()
        this.audioIsPlaying = true
        // this.selectedSong.timout = setTimeout(() => {
        //   this.audioIsPlaying = false
        //   this.selectedSong.id = ""
        // }, 30000)
      },
      pause(songId, audioSrc) {
        this.selectedSong.audio.pause()
        // console.log('timeoutId:', this.selectedSong.timeout)
        // clearTimeout(this.selectedSong.timeout)
        this.selectedSong.id = ""
        this.audioIsPlaying = false
      },
      showPlayBtn(song) {
        return this.selectedSong.id != song.trackId
      },
      showPauseBtn(song) {
        // return this.selectedSong.id == song.trackId && this.audioIsPlaying
        return this.selectedSong.id == song.trackId && !(this.selectedSong.audio.ended || this.selectedSong.audio.paused)
      }
    }
  }
</script>

<style scoped>
  .song {
    background-color: #f8f9fa;
  }
  .song:hover {
    /* background-color: #8fb6cb; */
    background-color: #17a2b8;
  }
  .song:hover span {
    color: #fff;
  }
</style>
