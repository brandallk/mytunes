<template>
  <div class="playlists">
    <h3 class="h4 text-center pb-3 border-bottom">Playlists</h3>
    <div class="playlist d-flex flex-column align-items-center mt-4" v-for="playlist in playlists">
      <img :src="playlist.imgUrl" alt="playlist image" class="w-75 rounded-circle mb-4">
      <h5 class="text-center mb-4">{{playlist.title}}</h5>
      <p class="desc">{{playlist.desc}}</p>
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

  }
}
</script>

<style scoped>

</style>
