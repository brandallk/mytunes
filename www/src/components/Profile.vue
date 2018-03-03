<template>
  <div class="profile d-flex flex-column align-items-center">
    <img :src="user.imgUrl" alt="user image" class="w-75 rounded-circle mb-4">
    <h3 class="text-center mb-4">{{user.name}}</h3>
    <p class="bio text-justify">{{user.bio}}</p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  components: {

  },
  data () {
    return {
      
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .bio {
    font-size: 0.75rem;
  }
</style>
