<template>
    <div class="register container py-4">
      <form action="#" class="mx-auto p-3 border border-secondary rounded" @submit.prevent="submit">
  
        <h2 class="h5 text-center">Register</h2>
  
        <div class="form-group">
            <label for="name">name: </label>
            <input type="text" id="name" name="name" v-model="user.name" class="form-control">
        </div>
        <div class="form-group">
            <label for="imageUrl">photo URL: </label>
            <input type="text" id="imageUrl" name="imageUrl" v-model="user.imgUrl" class="form-control">
        </div>
        <div class="form-group">
            <label for="bio">brief bio: </label>
            <input type="text" id="bio" name="bio" v-model="user.bio" class="form-control">
        </div>
        <div class="form-group">
          <label for="register-email">email: </label>
          <input type="text" id="register-email" name="email" v-model="user.email" class="form-control">
        </div>
        <div class="form-group">
          <label for="register-password">password: </label>
          <input type="password" id="register-password" name="password" v-model="user.password" class="form-control">
        </div>
  
        <button type="submit" class="btn btn-primary px-4">Register</button>

        <hr>
        <div class="text-center">
          <a href="#" class="text-muted" @click.prevent="hideRegister">Sign In</a>
        </div>
  
      </form>
    </div>
</template>

<script>
export default {
  name: 'Register',
  components: {

  },
  data () {
    return {
      user: {
        name: "",
        imgUrl: "",
        bio: "",
        email: "",
        password: ""
      }
    }
  },
  computed: {

  },
  methods: {
    hideRegister() {
      this.$emit('hideRegister')
    },
    submit() {
      this.$store.dispatch('registerUser', this.user)
    }
  }
}
</script>

<style scoped>

</style>
