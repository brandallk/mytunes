<template>
  <div class="playlist">

    <h4 class="text-center" v-if="!activeSong._id">Use 'Search' to create a playlist!</h4>
    
    <div class="activeSong d-flex flex-column align-items-center mt-4" v-if="activeSong._id">
      <h4 class="text-center">
        {{playlist.title}}
        <a href="#" class="text-info ml-2" @click.prevent="showPlaylistEditForm = true" title="Edit Playlist">
            <i class="fas fa-edit"></i>
        </a>
      </h4>
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
        <span class="play-btn col-1"><i class="fa fa-play-circle"></i></span>
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
        isPlaying: false,
        showPlaylistEditForm: false,
        draggedSong: {},
        dropTargetSong: {}
      }
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
