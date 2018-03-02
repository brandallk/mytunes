<template>
    <div class="navbar container-fluid bg-dark">

        <div class="row w-100 text-light">
          <div class="homelink navlink col-4 text-center py-4" @click="hideSearch">
            Home
          </div>
  
          <div class="searchtoggle navlink col-4 text-center py-4" @click="showSearch">
            Search
          </div>
  
          <div class="logout navlink col-4 text-center py-4" @click="logoutUser">
            Logout
          </div>
        </div>
  
      </div>
</template>

<script>
export default {
  name: 'Navbar',
  components: {

  },
  data () {
    return {
      
    }
  },
  computed: {

  },
  methods: {
    hideSearch() {
      this.$emit('hideSearch')
    },
    showSearch() {
      this.$emit('showSearch')
    },
    logoutUser() {
      this.$store.dispatch('logoutUser')
    }
  }
}
</script>

<style scoped>
  .navlink:hover {
    cursor: pointer;
  }
</style>
