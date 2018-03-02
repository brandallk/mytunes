// Vuex 'store': Sets and maintains front-end application 'state'

import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"

var api = axios.create({
  baseURL: '//localhost:3000/api/',
  timeout: 3000,
  withCredentials: true
})

var auth = axios.create({
  baseURL: '//localhost:3000/auth/',
  timeout: 3000,
  withCredentials: true
})

vue.use(vuex)

export default new vuex.Store({
  state: {
    iTunesResults: [],
    user: {},
    authError: {error: false, msg: ""},
    playlists: []
  },

  mutations: {
    setItunesResults(state, results) {
      state.iTunesResults = results
    },
    setUser(state, user) {
      state.user = user
    },
    setAuthError(state, msg) {
      state.authError = {error: true, message: msg}
    },
    setPlaylists(state, playlists) {
      state.playlists = playlists
    }
  },

  actions: {
    // iTunes
    searchItunesByArtist({commit, dispatch}, artist) {
      var url = '//bcw-getter.herokuapp.com/?url='
      var url2 = 'https://itunes.apple.com/search?term=' + artist
      var apiUrl = url + encodeURIComponent(url2)
      axios.get(apiUrl)
           .then(results => {
             commit('setItunesResults', results.data.results)
           })
           .catch(err => {
             console.log(err)
           })
    },

    // Auth
    authenticate({commit, dispatch}) {
      auth.get('authenticate')
          .then(res => {
            var sessionUser = res.data
            console.log('sessionUser:', sessionUser)
            commit('setUser', sessionUser)
          })
          .catch(err => {
            console.error(err)
          })
    },
    signInUser({commit, dispatch}, user) {
      auth.post('login', user)
          .then(res => {
            var newUser = res.data
            console.log('newUser:', newUser)
            commit('setUser', newUser)
            router.push({name: 'Home', params: {userId: newUser._id}})
          })
          .catch(err => {
            console.log(err)
            commit('setAuthError', 'Log-in failed: Invalid username or password')
          })
    },
    registerUser({commit, dispatch}, user) {
      auth.post('register', user)
          .then(res => {
            var newUser = res.data
            console.log('newUser:', newUser)
            commit('setUser', newUser)
            router.push({name: 'Home', params: {userId: newUser._id}})
          })
          .catch(err => {
            console.log(err)
          })
    },
    logoutUser({commit, dispatch}) {
      auth.delete('logout')
          .then( () => {
            console.log('User logged out')
            commit('setUser', {})
            router.push({name: 'Welcome'})
          })
          .catch(err => {
            console.log(err)
          })
    },
    verifyUserAuth({commit, dispatch}, userId) {
      auth.get('authenticate')
          .then(res => {
            if (!res.data || res.data._id !== userId) {
              dispatch('logoutUser')
            }
          })
          .catch(err => {
            console.log(err)
            dispatch('logoutUser')
          })
    },

    // API
    getUserPlaylists({commit, dispatch}) {
      api.get('playlists')
         .then(res => {
           var playlists = res.data
           console.log('playlists:', playlists)
           commit('setPlaylists', playlists)
         })
         .catch(err => {
           console.log(err)
         })
    },

    addSongToPlaylist({commit, dispatch}, song) {
      if (song.playlistId === "") {
        var newPlaylist = {
          title: "Untitled Playlist",
          desc: "***",
          userId: song.userId
        }
        api.post('playlists', newPlaylist)
           .then(res => {
             var playlist = res.data.data
             console.log('new playlist:', playlist)
             song.playlistId = playlist._id
             api.post('songs', song)
                .then(res => {
                  var newSong = res.data.data
                  console.log('new song:', newSong)
                  dispatch('getUserPlaylists')
                })
           })
           .catch(err => {
             console.log(err)
           })
      } else {
        api.post('songs', song)
           .then(res => {
             var newSong = res.data.data
             console.log('new song:', newSong)
           })
           .catch(err => {
             console.log(err)
           })
      }
    }

  }
})
