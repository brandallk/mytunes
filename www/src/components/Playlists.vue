<template>
  <div class="playlists">
    <h3 class="h4 text-center pb-3 border-bottom">Playlists</h3>
    <div class="playlist mt-4" v-for="playlist in playlists">
      <a href="#" class="text-info" @click.prevent="setActivePlaylist(playlist)">
        <div class="d-flex flex-column align-items-center">
          <img :src="playlist.imgUrl" alt="playlist image" class="w-75 mb-4">
          <h5 class="text-center mb-4">{{playlist.title}}</h5>
          <p class="desc">{{playlist.desc}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Playlists',
  components: {

  },
  data () {
    return {
      
    }
  },
  computed: {
    playlists() {
      return this.$store.state.userPlaylists
    }
  },
  methods: {
    setActivePlaylist(playlist) {
      this.$store.dispatch('getPlaylist', playlist._id)
    }
  }
}
</script>

<style scoped>

</style>
