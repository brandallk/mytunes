<template>
  <div class="welcome">
    <topbar></topbar>
    <errormsg v-if="authError.error">{{authError.message}}</errormsg>
    <signin v-if="displaySignIn" v-on:showRegister="showRegister"></signin>
    <register v-if="!displaySignIn" v-on:hideRegister="hideRegister"></register>
  </div>
</template>

<script>
  import Topbar from './Topbar'
  import ErrorMsg from './ErrorMsg'
  import SignIn from './SignIn'
  import Register from './Register'
  export default {
    name: 'Welcome',
    components: {
      topbar: Topbar,
      errormsg: ErrorMsg,
      signin: SignIn,
      register: Register
    },
    data () {
      return {
        displaySignIn: true
      }
    },
    computed: {
      authError() {
        return this.$store.state.authError
      }
    },
    methods: {
      showRegister() {
        this.displaySignIn = false
      },
      hideRegister() {
        this.displaySignIn = true
      }
    }
  }
</script>

<style scoped>

</style>
