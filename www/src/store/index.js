// Vuex 'store': Sets and maintains front-end application 'state'

import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"

var production = !window.location.host.includes("localhost");
var baseUrl = production ? "//brk-mytunes.herokuapp.com/" : "//localhost:3000/";

var api = axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
})

var auth = axios.create({
  baseURL: baseUrl + "auth/",
  timeout: 3000,
  withCredentials: true
})

vue.use(vuex)

export default new vuex.Store({
  state: {
    iTunesResults: [],
    user: {},
    authError: {
      error: false,
      msg: ""
    },
    userPlaylists: [],
    activePlaylist: {},
    activePlaylistSongIDs: [],
    activePlaylistSongs: [],
    activeSong: {}
  },

  mutations: {
    setItunesResults(state, results) {
      state.iTunesResults = results
    },
    setUser(state, user) {
      state.user = user
    },
    setAuthError(state, msg) {
      state.authError = {
        error: true,
        message: msg
      }
    },
    setPlaylists(state, playlists) {
      state.userPlaylists = playlists
    },
    setActivePlaylist(state, playlist) {
      state.activePlaylist = playlist
    },
    setActivePlaylistSongIDs(state, ids) {
      state.activePlaylistSongIDs = ids
    },
    setActivePlaylistSongs(state, songs) {
      state.activePlaylistSongs = songs
    },
    setActiveSong(state, song) {
      state.activeSong = song
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
          router.push({
            name: 'Home',
            params: {
              userId: newUser._id
            }
          })
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
          router.push({
            name: 'Home',
            params: {
              userId: newUser._id
            }
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    logoutUser({commit, dispatch}) {
      auth.delete('logout')
        .then(() => {
          console.log('User logged out')
          commit('setUser', {})
          commit('setPlaylists', [])
          commit('setActivePlaylist', {})
          commit('setActivePlaylistSongIDs', [])
          commit('setActivePlaylistSongs', [])
          commit('setActiveSong', {})
          commit('setItunesResults', [])
          router.push({
            name: 'Welcome'
          })
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
          if (playlists.length) {
            // Sort playlist in descending order by 'createdAt' date-time
            playlists = playlists.sort((listA, listB) => listB.createdAt - listA.createdAt)
            commit('setPlaylists', playlists)
            dispatch('getPlaylist', playlists[0]._id)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateUserPlaylists({commit, dispatch}) {
      api.get('playlists')
        .then(res => {
          var playlists = res.data
          console.log('updated playlists:', playlists)
          if (playlists.length) {
            // Sort playlist in descending order by 'createdAt' date-time
            playlists = playlists.sort((listA, listB) => listB.createdAt - listA.createdAt)
            commit('setPlaylists', playlists)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getPlaylist({commit, dispatch}, playlistId) {
      api.get(`playlists/${playlistId}`)
        .then(res => {
          var playlist = res.data
          console.log('playlist:', playlist)
          commit('setActivePlaylist', playlist)
          var playlistSongIDs = playlist.songIDs
          commit('setActivePlaylistSongIDs', playlistSongIDs)
          dispatch('getPlaylistSongs', playlist._id)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getPlaylistSongs({commit, dispatch}, playlistId) {
      api.get(`playlists/${playlistId}/songs`)
        .then(res => {
          var songs = res.data
          console.log('songs:', songs)
          commit('setActivePlaylistSongs', songs)
          dispatch('getSong', songs[0]._id)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getSong({commit, dispatch}, songId) {
      api.get(`songs/${songId}`)
        .then(res => {
          var song = res.data
          console.log('song:', song)
          commit('setActiveSong', song)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updatePlaylistTitleAndImg({commit, dispatch}, playlist) {
      var playlistId = playlist._id
      var playlistChanges = {
        title: playlist.title,
        imgUrl: playlist.imgUrl
      }
      api.put(`playlists/${playlistId}`, playlistChanges)
        .then(res => {
          var playlist = res.data.data
          console.log('updated playlist:', playlist)
          commit('setActivePlaylist', playlist)
          dispatch('updateUserPlaylists')
        })
    },
    updatePlaylistSongIDs({commit, dispatch}, playlist) {
      var playlistId = playlist._id
      var playlistChanges = {
        songIDs: playlist.songIDs
      }
      api.put(`playlists/${playlistId}`, playlistChanges)
        .then(res => {
          var playlist = res.data.data
          console.log('updated playlist:', playlist)
          commit('setActivePlaylist', playlist)
          dispatch('getPlaylist', playlistId)
        })
    },

    addSongToPlaylist({commit, dispatch}, song) {
      if (song.playlistId === "") {
        var newPlaylist = {
          title: "Untitled Playlist",
          desc: " ",
          userId: song.userId,
          songIDs: []
        }
        api.post('playlists', newPlaylist)
          .then(res => {
            var playlist = res.data.data
            console.log('new playlist:', playlist)
            newPlaylist = playlist
            song.playlistId = playlist._id
            song.playlistTitle = playlist.title
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
            dispatch('getUserPlaylists')
          })
          .catch(err => {
            console.log(err)
          })
      }
    },

    deleteSong({commit, dispatch}, song) {
      api.delete(`songs/${song._id}`)
        .then(res => {
          dispatch('getPlaylist', song.playlistId)
        })
        .catch(err => {
          console.log(err)
        })
    },

    setActiveSong({commit, dispatch}, song) {
      commit('setActiveSong', song)
    }

  }
})
