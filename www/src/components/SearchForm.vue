<template>
  <div class="searchForm container-fluid py-4 bg-dark">
    <form action="#" class="mx-auto p-3 border border-light rounded bg-light" @submit.prevent="submit">

      <h2 class="h5 text-center">Search iTunes</h2>

      <div class="form-group">
        <label for="artist">artist name: </label>
        <input type="text" id="artist" name="artist" v-model="artist" class="form-control">
      </div>

      <button type="submit" class="btn btn-info px-4">Search</button>

    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  components: {

  },
  data () {
    return {
      artist: ""
    }
  },
  computed: {

  },
  methods: {
    submit() {
      this.$store.dispatch('searchItunesByArtist', this.artist)
    }
  }
}
</script>

<style scoped>

</style>
