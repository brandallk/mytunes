<template>
  <div class="playlist pb-5">

    <h4 class="text-center" v-if="!activeSong._id">Use 'Search' to create a playlist!</h4>
    
    <div class="activeSong d-flex flex-column align-items-center mt-4" v-if="activeSong._id">
      <h4 class="text-center">
        {{playlist.title}}
        <a href="#" class="text-info ml-2" @click.prevent="showPlaylistEditForm = true" title="Edit Playlist">
            <i class="fas fa-edit"></i>
        </a>
      </h4>
      <img :src="activeSong.imgUrl" alt="song image" class="w-50 mb-4">
      <h5>{{activeSong.title}}</h5>
      <div class="controls d-flex align-items-center">
        <div class="back text-center pb-1 mr-3">
          <a href="#" class="text-info" @click.prevent="playPreviousSong">
            <i class="fas fa-step-backward fa-lg"></i>
          </a>
        </div>
        <div class="play-pause text-center px-0">
          <a href="#" class="play-btn text-info" v-show="showPlayBtn(activeSong)" @click.prevent="play(activeSong, activeSong.audioSrc)">
            <i class="fa fa-play-circle fa-2x"></i>
          </a>
          <a href="#" class="pause-btn text-info" v-show="showPauseBtn(activeSong)" @click.prevent="pause(activeSong._id, activeSong.audioSrc)">
            <i class="fas fa-pause-circle fa-2x"></i>
          </a>
        </div>
        <div class="next text-center pb-1 ml-3">
          <a href="#" class="text-info" @click.prevent="playNextSong">
            <i class="fas fa-step-forward fa-lg"></i>
          </a>
        </div>
      </div>

      <playlistEditForm v-if="showPlaylistEditForm" :playlist="playlist" v-on:hidePlaylistEditForm="showPlaylistEditForm = false"></playlistEditForm>
    </div>

    <hr>

    <div class="songs container-fluid bg-light py-3">

      <p class="text-center text-muted font-italic"><small>(Use drag-&amp;-drop to reorder songs.)</small></p>

      <div class="song-header p-1 bg-light row px-4 py-3 border-bottom">
        <span class="play-btn text-dark col-1"></span>
        <span class="title text-dark col-4">Title</span>
        <span class="album text-dark col-4">Album</span>
        <span class="time text-dark col-3">Time</span>
      </div>
  
      <div class="song p-1 row px-4 py-2 align-items-center" draggable="true" v-for="song in songs" @dragstart="dragstart(song)" @dragover.prevent="dragover" @drop="drop(song)">
        <a href="#" class="play-btn text-info col-1" v-show="showPlayBtn(song)" @click.prevent="play(song, song.audioSrc)">
          <i class="fa fa-play-circle"></i>
        </a>
        <a href="#" class="pause-btn text-info col-1" v-show="showPauseBtn(song)" @click.prevent="pause(song._id, song.audioSrc)">
          <i class="fas fa-pause-circle"></i>
        </a>
        <span class="title col-4">{{song.title}}</span>
        <span class="album col-4">{{song.albumTitle}}</span>
        <span class="time col-2">{{getMinsFromSecs(song.timeInSeconds)}}</span>
        <span class="play-btn col-1">
          <a href="#" class="text-info" @click.prevent="deleteSong(song)" title="Remove Song">
            <i class="fas fa-trash-alt"></i>
          </a>
        </span>
      </div>

    </div>

  </div>
</template>

<script>
  import PlaylistEditForm from './PlaylistEditForm'
  export default {
    name: 'Playlist',
    components: {
      playlistEditForm: PlaylistEditForm
    },
    data () {
      return {
        showPlaylistEditForm: false,
        draggedSong: {},
        dropTargetSong: {},
        selectedSong: {
          id: "",
          audio: {ended: true, paused: true},
          timeout: {}
        },
        audioIsPlaying: false
      }
    },
    watch: {
      
    },
    computed: {
      playlist() {
        return this.$store.state.activePlaylist
      },
      songs() {
        var songIDs = this.$store.state.activePlaylistSongIDs
        var songs = this.$store.state.activePlaylistSongs
        var orderedSongs = songIDs.map(songID => {
          return songs.filter(song => song._id === songID)[0]
        })
        return orderedSongs
      },
      activeSong() {
        return this.$store.state.activeSong
      },
      previousSong() {
        var activeSong = this.songs.find(song => song._id === this.activeSong._id)
        var activeSongIndex = this.songs.indexOf(activeSong)
        var previousSongIndex = this.songs[activeSongIndex - 1] ? activeSongIndex - 1 : this.songs.length - 1
        return this.songs[previousSongIndex]
      },
      nextSong() {
        var activeSong = this.songs.find(song => song._id === this.activeSong._id)
        var activeSongIndex = this.songs.indexOf(activeSong)
        var nextSongIndex = this.songs[activeSongIndex + 1] ? activeSongIndex + 1 : 0
        return this.songs[nextSongIndex]
      }
    },
    methods: {
      getMinsFromSecs(totalSecs) {
        var mins = Math.floor(totalSecs/60)
        var secs = totalSecs % 60
        var formattedSecs = secs < 10 ? "0" + secs : secs
        return `${mins}:${formattedSecs}`
      },
      dragstart(song) {
        console.log('dragged song:', song.title)
        this.draggedSong = song
      },
      dragover() {
        console.log('dragover')
      },
      drop(song) {
        console.log('song at drop target:', song.title)
        this.dropTargetSong = song
        
        var songIDs = this.playlist.songIDs
        var draggedSongId = this.draggedSong._id
        var draggedSongIdIndex = songIDs.indexOf(draggedSongId)
        var targetSongId = this.dropTargetSong._id
        var targetSongIdIndex = songIDs.indexOf(targetSongId)
        songIDs.splice(draggedSongIdIndex, 1)
        songIDs.splice(targetSongIdIndex, 0, draggedSongId)
        
        var updatedPlaylist = this.playlist
        updatedPlaylist._id = this.playlist._id
        updatedPlaylist.songIDs = songIDs

        this.$store.dispatch('updatePlaylistSongIDs', updatedPlaylist)
      },
      deleteSong(song) {
        console.log('delete', song.title, song._id)
        this.$store.dispatch('deleteSong', song)
      },
      play(song, audioSrc) {
        this.$store.dispatch('setActiveSong', song)
        if (this.audioIsPlaying) {
          this.selectedSong.audio.pause()
          // console.log('clear timeout:', this.selectedSong.timeout)
          clearTimeout(this.selectedSong.timeout)
        }
        this.selectedSong.id = song._id
        this.selectedSong.audio = new Audio(audioSrc)
        this.selectedSong.audio.play()
        this.audioIsPlaying = true
        this.selectedSong.timeout = setTimeout(() => {
          this.audioIsPlaying = false
          this.selectedSong.id = ""
          this.play(this.nextSong, this.nextSong.audioSrc)
        }, 30000)
        // console.log('set timeout:', this.selectedSong.timeout)
      },
      pause(songId, audioSrc) {
        this.selectedSong.audio.pause()
        clearTimeout(this.selectedSong.timeout)
        this.selectedSong.id = ""
        this.audioIsPlaying = false
      },
      playPreviousSong() {
        this.play(this.previousSong, this.previousSong.audioSrc)
      },
      playNextSong() {
        this.play(this.nextSong, this.nextSong.audioSrc)
      },
      showPlayBtn(song) {
        return this.selectedSong.id != song._id
      },
      showPauseBtn(song) {
        return this.selectedSong.id == song._id && this.audioIsPlaying
      }
    }
  }
</script>

<style scoped>
  .activeSong a {
    display: inline-block;
    font-size: 0.95rem;
  }
</style>
