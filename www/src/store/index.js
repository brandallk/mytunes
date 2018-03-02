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
    iTunesResults: []
  },

  mutations: {
    setItunesResults(state, results) {
      state.iTunesResults = results
    }
  },

  actions: {
    searchItunesByArtist({commit, dispatch}, artist) {
      var url = '//bcw-getter.herokuapp.com/?url='
      var url2 = 'https://itunes.apple.com/search?term=' + artist
      var apiUrl = url + encodeURIComponent(url2)
      axios.get(apiUrl)
           .then(results => {
             commit('setItunesResults', results)
           })
           .catch(err => {
             console.log(err)
           })
    },
  }
})
