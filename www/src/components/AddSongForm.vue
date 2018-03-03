<template>
  <div class="backing d-flex align-items-center">
    <div class="searchForm container">
      <form action="#" class="mx-auto p-3 border border-light rounded bg-light" @submit.prevent="submit">
  
        <h2 class="h5 text-center">Add Song to My Music</h2>
        <h3 class="h6 text-center">- {{song.title}} -</h3>

        <select class="playlists custom-select my-3" v-model="selectedPlaylist">
          <option selected class="playlist">New Playlist</option>
          <option class="playlist" v-for="list in playlists" :value="list">{{list.title}}</option>
        </select>
  
        <button type="submit" class="btn btn-info px-4">Submit</button>
        <button type="button" class="btn btn-default px-4 ml-2" @click="hideAddSongForm">Cancel</button>
  
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddSongForm',
  components: {

  },
  props: [
    'song'
  ],
  data () {
    return {
      selectedPlaylist: 'New Playlist'
    }
  },
  computed: {
    playlists() {
      return this.$store.state.playlists
    }
  },
  methods: {
    submit() {
      var newSong = this.song
      newSong.playlistId = this.selectedPlaylist._id ? this.selectedPlaylist._id : ""
      newSong.playlistTitle = this.selectedPlaylist.title ? this.selectedPlaylist.title : " - "
      this.$store.dispatch('addSongToPlaylist', newSong)
      this.hideAddSongForm()
    },
    hideAddSongForm() {
      this.$emit('hideAddSongForm')
    }
  }
}
</script>

<style scoped>
  .backing {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
  }
</style>
