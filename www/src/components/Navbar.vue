<template>
    <div class="navbar container-fluid bg-dark row text-light">

        <!-- <div class="row text-light"> -->
          <div class="homelink navlink col-4 text-center py-4" @click="hideSearch">
            Home
          </div>
  
          <div class="searchtoggle navlink col-4 text-center py-4" @click="showSearch">
            Search
          </div>
  
          <div class="logout navlink col-4 text-center py-4" @click="logoutUser">
            Logout
          </div>
        <!-- </div> -->
  
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
  .navbar {
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .navlink:hover {
    cursor: pointer;
    background-color: #138091;
  }
</style>
