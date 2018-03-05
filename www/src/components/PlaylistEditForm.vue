<template>
    <div class="backing d-flex align-items-center">
      <div class="editForm container">
        <form action="#" class="mx-auto p-3 border border-light rounded bg-light" @submit.prevent="submit">
    
          <h2 class="h5 text-center">Edit Playlist</h2>
          <h3 class="h6 text-center">- {{playlist.title}} -</h3>
  
          <div class="form-group">
            <label for="editedPlaylistTitle">title: </label>
            <input type="text" id="editedPlaylistTitle" class="form-control" name="editedPlaylistTitle" v-model="editedPlaylistTitle">
          </div>
          <div class="form-group">
            <label for="editedPlaylistImg">image URL: </label>
            <input type="text" id="editedPlaylistImg" class="form-control" name="editedPlaylistImg" v-model="editedPlaylistImg">
          </div>
    
          <button type="submit" class="btn btn-info px-4">Submit</button>
          <button type="button" class="btn btn-default px-4 ml-2" @click="hidePlaylistEditForm">Cancel</button>
    
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PlaylistEditForm',
    components: {
  
    },
    props: [
      'playlist'
    ],
    data () {
      return {
        editedPlaylistTitle: this.playlist.title,
        editedPlaylistImg: this.playlist.imgUrl
      }
    },
    computed: {
      
    },
    methods: {
      submit() {
        var updatedPlaylist = this.playlist
        updatedPlaylist._id = this.playlist._id
        updatedPlaylist.title = this.editedPlaylistTitle
        updatedPlaylist.imgUrl = this.editedPlaylistImg
        this.$store.dispatch('updatePlaylistTitleAndImg', updatedPlaylist)
        this.hidePlaylistEditForm()
      },
      hidePlaylistEditForm() {
        this.$emit('hidePlaylistEditForm')
      }
    }
  }
  </script>
  
  <style scoped>
    .backing {
      z-index: 1;
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      background-color: rgba(0,0,0,0.5);
    }
  </style>
  