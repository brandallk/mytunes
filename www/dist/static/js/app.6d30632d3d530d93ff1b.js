webpackJsonp([1],{"+JON":function(t,e){},"069s":function(t,e){},"0jwk":function(t,e){},AM3A:function(t,e){},EHpN:function(t,e){},Gl97:function(t,e){},HnG7:function(t,e){},IdAD:function(t,e){},LEsD:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App",mounted:function(){this.$store.dispatch("authenticate")}},a,!1,function(t){s("afZZ")},null,null).exports,o=s("/ocq"),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topbar container-fluid bg-info py-4"},[e("h1",{staticClass:"text-light text-center"},[this._v("MyTunes")])])}]};var l=s("VU/8")({name:"Topbar",components:{},data:function(){return{}},computed:{},methods:{}},r,!1,function(t){s("EHpN")},"data-v-a6b2d8f8",null).exports,c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"errorMsg bg-danger my-2 py-3"},[e("span",{staticClass:"h3 d-block text-center text-white"},[this._t("default")],2)])},staticRenderFns:[]};var u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"signin container py-4"},[s("form",{staticClass:"mx-auto p-3 border border-secondary rounded",attrs:{action:"#"},on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[s("h2",{staticClass:"h5 text-center"},[t._v("Sign In")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"signin-email"}},[t._v("email: ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text",id:"signin-email",name:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"signin-password"}},[t._v("password: ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"signin-password",name:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._v(" "),s("button",{staticClass:"btn btn-primary px-4",attrs:{type:"submit"}},[t._v("Log In")]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"text-center"},[s("a",{staticClass:"text-muted",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.showRegister(e)}}},[t._v("Register")])])])])},staticRenderFns:[]};var d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register container py-4"},[s("form",{staticClass:"mx-auto p-3 border border-secondary rounded",attrs:{action:"#"},on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[s("h2",{staticClass:"h5 text-center"},[t._v("Register")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[t._v("name: ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",name:"name"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"imageUrl"}},[t._v("photo URL: ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.imgUrl,expression:"user.imgUrl"}],staticClass:"form-control",attrs:{type:"text",id:"imageUrl",name:"imageUrl"},domProps:{value:t.user.imgUrl},on:{input:function(e){e.target.composing||t.$set(t.user,"imgUrl",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"bio"}},[t._v("brief bio: ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.bio,expression:"user.bio"}],staticClass:"form-control",attrs:{type:"text",id:"bio",name:"bio"},domProps:{value:t.user.bio},on:{input:function(e){e.target.composing||t.$set(t.user,"bio",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"register-email"}},[t._v("email: ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text",id:"register-email",name:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"register-password"}},[t._v("password: ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"register-password",name:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._v(" "),s("button",{staticClass:"btn btn-primary px-4",attrs:{type:"submit"}},[t._v("Register")]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"text-center"},[s("a",{staticClass:"text-muted",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.hideRegister(e)}}},[t._v("Sign In")])])])])},staticRenderFns:[]};var m={name:"Welcome",components:{topbar:l,errormsg:s("VU/8")({name:"ErrorMsg",components:{},data:function(){return{}},computed:{},methods:{}},c,!1,function(t){s("AM3A")},"data-v-2e543638",null).exports,signin:s("VU/8")({name:"SignIn",components:{},data:function(){return{user:{email:"",password:""}}},computed:{},methods:{showRegister:function(){this.$emit("showRegister")},submit:function(){this.$store.dispatch("signInUser",this.user)}}},u,!1,function(t){s("Gl97")},"data-v-78ab7ae7",null).exports,register:s("VU/8")({name:"Register",components:{},data:function(){return{user:{name:"",imgUrl:"",bio:"",email:"",password:""}}},computed:{},methods:{hideRegister:function(){this.$emit("hideRegister")},submit:function(){this.$store.dispatch("registerUser",this.user)}}},d,!1,function(t){s("x73b")},"data-v-cd7e9410",null).exports},data:function(){return{displaySignIn:!0}},computed:{authError:function(){return this.$store.state.authError}},methods:{showRegister:function(){this.displaySignIn=!1},hideRegister:function(){this.displaySignIn=!0}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"welcome"},[s("topbar"),t._v(" "),t.authError.error?s("errormsg",[t._v(t._s(t.authError.message))]):t._e(),t._v(" "),t.displaySignIn?s("signin",{on:{showRegister:t.showRegister}}):t._e(),t._v(" "),t.displaySignIn?t._e():s("register",{on:{hideRegister:t.hideRegister}})],1)},staticRenderFns:[]};var v=s("VU/8")(m,p,!1,function(t){s("0jwk")},"data-v-f50d0c7a",null).exports,h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar container-fluid bg-dark row text-light"},[s("div",{staticClass:"homelink navlink col-4 text-center py-4",on:{click:t.hideSearch}},[t._v("\n        Home\n      ")]),t._v(" "),s("div",{staticClass:"searchtoggle navlink col-4 text-center py-4",on:{click:t.showSearch}},[t._v("\n        Search\n      ")]),t._v(" "),s("div",{staticClass:"logout navlink col-4 text-center py-4",on:{click:t.logoutUser}},[t._v("\n        Logout\n      ")])])},staticRenderFns:[]};var g=s("VU/8")({name:"Navbar",components:{},data:function(){return{}},computed:{},methods:{hideSearch:function(){this.$emit("hideSearch")},showSearch:function(){this.$emit("showSearch")},logoutUser:function(){this.$store.dispatch("logoutUser")}}},h,!1,function(t){s("SVlW")},"data-v-a785f69c",null).exports,f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"searchForm container-fluid py-4 bg-dark"},[s("form",{staticClass:"mx-auto p-3 border border-light rounded bg-light",attrs:{action:"#"},on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[s("h2",{staticClass:"h5 text-center"},[t._v("Search iTunes")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"artist"}},[t._v("artist name: ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.artist,expression:"artist"}],staticClass:"form-control",attrs:{type:"text",id:"artist",name:"artist"},domProps:{value:t.artist},on:{input:function(e){e.target.composing||(t.artist=e.target.value)}}})]),t._v(" "),s("button",{staticClass:"btn btn-info px-4",attrs:{type:"submit"}},[t._v("Search")])])])},staticRenderFns:[]};var y=s("VU/8")({name:"SearchForm",components:{},data:function(){return{artist:""}},computed:{},methods:{submit:function(){this.$store.dispatch("searchItunesByArtist",this.artist)}}},f,!1,function(t){s("IdAD")},"data-v-7f997884",null).exports,_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"backing d-flex align-items-center"},[s("div",{staticClass:"searchForm container"},[s("form",{staticClass:"mx-auto p-3 border border-light rounded bg-light",attrs:{action:"#"},on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[s("h2",{staticClass:"h5 text-center"},[t._v("Add Song to My Music")]),t._v(" "),s("h3",{staticClass:"h6 text-center"},[t._v("- "+t._s(t.song.title)+" -")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedPlaylist,expression:"selectedPlaylist"}],staticClass:"playlists custom-select my-3",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedPlaylist=e.target.multiple?s:s[0]}}},[s("option",{staticClass:"playlist",attrs:{selected:""}},[t._v("New Playlist")]),t._v(" "),t._l(t.playlists,function(e){return s("option",{staticClass:"playlist",domProps:{value:e}},[t._v(t._s(e.title))])})],2),t._v(" "),s("button",{staticClass:"btn btn-info px-4",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),s("button",{staticClass:"btn btn-default px-4 ml-2",attrs:{type:"button"},on:{click:t.hideAddSongForm}},[t._v("Cancel")])])])])},staticRenderFns:[]};var b={name:"SearchResults",components:{addSongForm:s("VU/8")({name:"AddSongForm",components:{},props:["song"],data:function(){return{selectedPlaylist:"New Playlist"}},computed:{playlists:function(){return this.$store.state.userPlaylists}},methods:{submit:function(){var t=this.song;t.playlistId=this.selectedPlaylist._id?this.selectedPlaylist._id:"",t.playlistTitle=this.selectedPlaylist.title?this.selectedPlaylist.title:" - ",this.$store.dispatch("addSongToPlaylist",t),this.hideAddSongForm()},hideAddSongForm:function(){this.$emit("hideAddSongForm")}}},_,!1,function(t){s("cIQP")},"data-v-6a226a42",null).exports},data:function(){return{displayAddForm:!1,selectedSong:{id:"",audio:{ended:!0},timeout:{}},audioIsPlaying:!1}},computed:{songs:function(){return this.$store.state.iTunesResults}},methods:{getMinsFromMS:function(t){var e=Math.floor(t/1e3),s=e%60;return Math.floor(e/60)+":"+(s<10?"0"+s:s)},submit:function(t){var e={title:t.trackName,albumTitle:t.collectionName,audioSrc:t.previewUrl,artists:[t.artistName],imgUrl:t.artworkUrl100.replace("100x100bb","500x500bb"),timeInSeconds:Math.floor(t.trackTimeMillis/1e3),userId:this.$route.params.userId,playlistId:"",playlistTitle:" - "};this.song=e,this.displayAddForm=!0},hideAddSongForm:function(){this.displayAddForm=!1},play:function(t,e){var s=this;this.audioIsPlaying&&(this.selectedSong.audio.pause(),console.log("clear timeout:",this.selectedSong.timeout),clearTimeout(this.selectedSong.timeout)),this.selectedSong.id=t,this.selectedSong.audio=new Audio(e),this.selectedSong.audio.play(),this.audioIsPlaying=!0,this.selectedSong.timeout=setTimeout(function(){s.audioIsPlaying=!1,s.selectedSong.id=""},3e4),console.log("set timeout:",this.selectedSong.timeout)},pause:function(t,e){this.selectedSong.audio.pause(),console.log("clear timeout:",this.selectedSong.timeout),clearTimeout(this.selectedSong.timeout),this.selectedSong.id="",this.audioIsPlaying=!1},showPlayBtn:function(t){return this.selectedSong.id!=t.trackId},showPauseBtn:function(t){return this.selectedSong.id==t.trackId&&this.audioIsPlaying}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"searchResults container-fluid bg-light py-3"},[t._m(0),t._v(" "),t._l(t.songs,function(e){return s("div",{staticClass:"song p-1 row px-4 py-2 align-items-center"},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.showPlayBtn(e),expression:"showPlayBtn(song)"}],staticClass:"play-btn btn btn-sm btn-outline-light col-1",on:{click:function(s){t.play(e.trackId,e.previewUrl)}}},[s("i",{staticClass:"fa fa-play-circle"})]),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:t.showPauseBtn(e),expression:"showPauseBtn(song)"}],staticClass:"play-btn btn btn-sm btn-outline-light col-1",on:{click:function(s){t.pause(e.trackId,e.previewUrl)}}},[s("i",{staticClass:"fas fa-pause-circle"})]),t._v(" "),s("span",{staticClass:"title col-4"},[t._v(t._s(e.trackName))]),t._v(" "),s("span",{staticClass:"album col-4"},[t._v(t._s(e.collectionName))]),t._v(" "),s("span",{staticClass:"time col-1"},[t._v(t._s(t.getMinsFromMS(e.trackTimeMillis)))]),t._v(" "),s("span",{staticClass:"time col-2"},[s("button",{staticClass:"btn btn-sm btn-outline-light",on:{click:function(s){t.submit(e)}}},[t._v("Add to My Music")])])])}),t._v(" "),t.displayAddForm?s("addSongForm",{attrs:{song:t.song},on:{hideAddSongForm:t.hideAddSongForm}}):t._e()],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"song-header p-1 bg-light row px-4 py-3 border-bottom"},[e("span",{staticClass:"play-btn text-dark col-1"}),this._v(" "),e("span",{staticClass:"title text-dark col-4"},[this._v("Name of song")]),this._v(" "),e("span",{staticClass:"album text-dark col-4"},[this._v("Album")]),this._v(" "),e("span",{staticClass:"time text-dark col-3"},[this._v("Time")])])}]};var C={name:"SearchForm",components:{searchForm:y,searchResults:s("VU/8")(b,S,!1,function(t){s("QlN6")},"data-v-327e8ee6",null).exports},data:function(){return{}},computed:{},methods:{}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search"},[e("searchForm"),this._v(" "),e("searchResults")],1)},staticRenderFns:[]};var x=s("VU/8")(C,P,!1,function(t){s("+JON")},"data-v-3d5244ec",null).exports,w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile d-flex flex-column align-items-center"},[s("img",{staticClass:"w-75 rounded-circle mb-4",attrs:{src:t.user.imgUrl,alt:"user image"}}),t._v(" "),s("h3",{staticClass:"text-center mb-4"},[t._v(t._s(t.user.name))]),t._v(" "),s("p",{staticClass:"bio text-justify"},[t._v(t._s(t.user.bio))])])},staticRenderFns:[]};var I=s("VU/8")({name:"Profile",components:{},data:function(){return{}},computed:{user:function(){return this.$store.state.user}},methods:{}},w,!1,function(t){s("LEsD")},"data-v-e7004a44",null).exports,U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"backing d-flex align-items-center"},[s("div",{staticClass:"editForm container"},[s("form",{staticClass:"mx-auto p-3 border border-light rounded bg-light",attrs:{action:"#"},on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[s("h2",{staticClass:"h5 text-center"},[t._v("Edit Playlist")]),t._v(" "),s("h3",{staticClass:"h6 text-center"},[t._v("- "+t._s(t.playlist.title)+" -")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"editedPlaylistTitle"}},[t._v("title: ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.editedPlaylistTitle,expression:"editedPlaylistTitle"}],staticClass:"form-control",attrs:{type:"text",id:"editedPlaylistTitle",name:"editedPlaylistTitle"},domProps:{value:t.editedPlaylistTitle},on:{input:function(e){e.target.composing||(t.editedPlaylistTitle=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"editedPlaylistImg"}},[t._v("image URL: ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.editedPlaylistImg,expression:"editedPlaylistImg"}],staticClass:"form-control",attrs:{type:"text",id:"editedPlaylistImg",name:"editedPlaylistImg"},domProps:{value:t.editedPlaylistImg},on:{input:function(e){e.target.composing||(t.editedPlaylistImg=e.target.value)}}})]),t._v(" "),s("button",{staticClass:"btn btn-info px-4",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),s("button",{staticClass:"btn btn-default px-4 ml-2",attrs:{type:"button"},on:{click:t.hidePlaylistEditForm}},[t._v("Cancel")])])])])},staticRenderFns:[]};var A={name:"Playlist",components:{playlistEditForm:s("VU/8")({name:"PlaylistEditForm",components:{},props:["playlist"],data:function(){return{editedPlaylistTitle:this.playlist.title,editedPlaylistImg:this.playlist.imgUrl}},computed:{},methods:{submit:function(){var t=this.playlist;t._id=this.playlist._id,t.title=this.editedPlaylistTitle,t.imgUrl=this.editedPlaylistImg,this.$store.dispatch("updatePlaylistTitleAndImg",t),this.hidePlaylistEditForm()},hidePlaylistEditForm:function(){this.$emit("hidePlaylistEditForm")}}},U,!1,function(t){s("jeOV")},"data-v-fe7f196e",null).exports},data:function(){return{showPlaylistEditForm:!1,draggedSong:{},dropTargetSong:{},selectedSong:{id:"",audio:{ended:!0,paused:!0},timeout:{}},audioIsPlaying:!1}},watch:{},computed:{playlist:function(){return this.$store.state.activePlaylist},songs:function(){var t=this.$store.state.activePlaylistSongIDs,e=this.$store.state.activePlaylistSongs;return t.map(function(t){return e.filter(function(e){return e._id===t})[0]})},activeSong:function(){return this.$store.state.activeSong},previousSong:function(){var t=this,e=this.songs.find(function(e){return e._id===t.activeSong._id}),s=this.songs.indexOf(e),i=this.songs[s-1]?s-1:this.songs.length-1;return this.songs[i]},nextSong:function(){var t=this,e=this.songs.find(function(e){return e._id===t.activeSong._id}),s=this.songs.indexOf(e),i=this.songs[s+1]?s+1:0;return this.songs[i]}},methods:{getMinsFromSecs:function(t){var e=t%60;return Math.floor(t/60)+":"+(e<10?"0"+e:e)},dragstart:function(t){console.log("dragged song:",t.title),this.draggedSong=t},dragover:function(){console.log("dragover")},drop:function(t){console.log("song at drop target:",t.title),this.dropTargetSong=t;var e=this.playlist.songIDs,s=this.draggedSong._id,i=e.indexOf(s),a=this.dropTargetSong._id,n=e.indexOf(a);e.splice(i,1),e.splice(n,0,s);var o=this.playlist;o._id=this.playlist._id,o.songIDs=e,this.$store.dispatch("updatePlaylistSongIDs",o)},deleteSong:function(t){console.log("delete",t.title,t._id),this.$store.dispatch("deleteSong",t)},play:function(t,e){var s=this;this.$store.dispatch("setActiveSong",t),this.audioIsPlaying&&(this.selectedSong.audio.pause(),clearTimeout(this.selectedSong.timeout)),this.selectedSong.id=t._id,this.selectedSong.audio=new Audio(e),this.selectedSong.audio.play(),this.audioIsPlaying=!0,this.selectedSong.timeout=setTimeout(function(){s.audioIsPlaying=!1,s.selectedSong.id="",s.play(s.nextSong,s.nextSong.audioSrc)},3e4)},pause:function(t,e){this.selectedSong.audio.pause(),clearTimeout(this.selectedSong.timeout),this.selectedSong.id="",this.audioIsPlaying=!1},playPreviousSong:function(){this.play(this.previousSong,this.previousSong.audioSrc)},playNextSong:function(){this.play(this.nextSong,this.nextSong.audioSrc)},showPlayBtn:function(t){return this.selectedSong.id!=t._id},showPauseBtn:function(t){return this.selectedSong.id==t._id&&this.audioIsPlaying}}},$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"playlist pb-5"},[t.activeSong._id?t._e():s("h4",{staticClass:"text-center"},[t._v("Use 'Search' to create a playlist!")]),t._v(" "),t.activeSong._id?s("div",{staticClass:"activeSong d-flex flex-column align-items-center mt-4"},[s("h4",{staticClass:"text-center"},[t._v("\n      "+t._s(t.playlist.title)+"\n      "),s("a",{staticClass:"text-info ml-2",attrs:{href:"#",title:"Edit Playlist"},on:{click:function(e){e.preventDefault(),t.showPlaylistEditForm=!0}}},[s("i",{staticClass:"fas fa-edit"})])]),t._v(" "),s("img",{staticClass:"w-50 mb-4",attrs:{src:t.activeSong.imgUrl,alt:"song image"}}),t._v(" "),s("h5",[t._v(t._s(t.activeSong.title))]),t._v(" "),s("div",{staticClass:"controls d-flex align-items-center"},[s("div",{staticClass:"back text-center pb-1 mr-3"},[s("a",{staticClass:"text-info",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.playPreviousSong(e)}}},[s("i",{staticClass:"fas fa-step-backward fa-lg"})])]),t._v(" "),s("div",{staticClass:"play-pause text-center px-0"},[s("a",{directives:[{name:"show",rawName:"v-show",value:t.showPlayBtn(t.activeSong),expression:"showPlayBtn(activeSong)"}],staticClass:"play-btn text-info",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.play(t.activeSong,t.activeSong.audioSrc)}}},[s("i",{staticClass:"fa fa-play-circle fa-2x"})]),t._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:t.showPauseBtn(t.activeSong),expression:"showPauseBtn(activeSong)"}],staticClass:"pause-btn text-info",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.pause(t.activeSong._id,t.activeSong.audioSrc)}}},[s("i",{staticClass:"fas fa-pause-circle fa-2x"})])]),t._v(" "),s("div",{staticClass:"next text-center pb-1 ml-3"},[s("a",{staticClass:"text-info",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.playNextSong(e)}}},[s("i",{staticClass:"fas fa-step-forward fa-lg"})])])]),t._v(" "),t.showPlaylistEditForm?s("playlistEditForm",{attrs:{playlist:t.playlist},on:{hidePlaylistEditForm:function(e){t.showPlaylistEditForm=!1}}}):t._e()],1):t._e(),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"songs container-fluid bg-light py-3"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._l(t.songs,function(e){return s("div",{staticClass:"song p-1 row px-4 py-2 align-items-center",attrs:{draggable:"true"},on:{dragstart:function(s){t.dragstart(e)},dragover:function(e){e.preventDefault(),t.dragover(e)},drop:function(s){t.drop(e)}}},[s("a",{directives:[{name:"show",rawName:"v-show",value:t.showPlayBtn(e),expression:"showPlayBtn(song)"}],staticClass:"play-btn text-info col-1",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.play(e,e.audioSrc)}}},[s("i",{staticClass:"fa fa-play-circle"})]),t._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:t.showPauseBtn(e),expression:"showPauseBtn(song)"}],staticClass:"pause-btn text-info col-1",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.pause(e._id,e.audioSrc)}}},[s("i",{staticClass:"fas fa-pause-circle"})]),t._v(" "),s("span",{staticClass:"title col-4"},[t._v(t._s(e.title))]),t._v(" "),s("span",{staticClass:"album col-4"},[t._v(t._s(e.albumTitle))]),t._v(" "),s("span",{staticClass:"time col-2"},[t._v(t._s(t.getMinsFromSecs(e.timeInSeconds)))]),t._v(" "),s("span",{staticClass:"play-btn col-1"},[s("a",{staticClass:"text-info",attrs:{href:"#",title:"Remove Song"},on:{click:function(s){s.preventDefault(),t.deleteSong(e)}}},[s("i",{staticClass:"fas fa-trash-alt"})])])])})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"text-center text-muted font-italic"},[e("small",[this._v("(Use drag-&-drop to reorder songs.)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"song-header p-1 bg-light row px-4 py-3 border-bottom"},[e("span",{staticClass:"play-btn text-dark col-1"}),this._v(" "),e("span",{staticClass:"title text-dark col-4"},[this._v("Title")]),this._v(" "),e("span",{staticClass:"album text-dark col-4"},[this._v("Album")]),this._v(" "),e("span",{staticClass:"time text-dark col-3"},[this._v("Time")])])}]};var F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"playlists"},[s("h3",{staticClass:"h4 text-center pb-3 border-bottom"},[t._v("Playlists")]),t._v(" "),t._l(t.playlists,function(e){return s("div",{staticClass:"playlist mt-4"},[s("a",{staticClass:"text-info",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.setActivePlaylist(e)}}},[s("div",{staticClass:"d-flex flex-column align-items-center"},[s("img",{staticClass:"w-75 mb-4",attrs:{src:e.imgUrl,alt:"playlist image"}}),t._v(" "),s("h5",{staticClass:"text-center mb-4"},[t._v(t._s(e.title))]),t._v(" "),s("p",{staticClass:"desc"},[t._v(t._s(e.desc))])])])])})],2)},staticRenderFns:[]};var k={name:"Player",components:{profile:I,playlist:s("VU/8")(A,$,!1,function(t){s("HnG7")},"data-v-296ac30f",null).exports,playlists:s("VU/8")({name:"Playlists",components:{},data:function(){return{}},computed:{playlists:function(){return this.$store.state.userPlaylists}},methods:{setActivePlaylist:function(t){this.$store.dispatch("getPlaylist",t._id)}}},F,!1,function(t){s("yOvY")},"data-v-57b96fba",null).exports},data:function(){return{}},computed:{},methods:{}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"player container-fluid pt-5"},[e("div",{staticClass:"row"},[e("profile",{staticClass:"col-3"}),this._v(" "),e("playlist",{staticClass:"col-6"}),this._v(" "),e("playlists",{staticClass:"col-3"})],1)])},staticRenderFns:[]};var E={name:"Home",components:{topbar:l,navbar:g,search:x,player:s("VU/8")(k,R,!1,function(t){s("Uphy")},"data-v-7128579d",null).exports},data:function(){return{displaySearch:!1}},computed:{},methods:{hideSearch:function(){this.displaySearch=!1},showSearch:function(){this.displaySearch=!0}},mounted:function(){this.$store.dispatch("verifyUserAuth",this.$route.params.userId),this.$store.dispatch("getUserPlaylists")}},T={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("topbar"),t._v(" "),s("navbar",{on:{hideSearch:t.hideSearch,showSearch:t.showSearch}}),t._v(" "),t.displaySearch?s("search"):t._e(),t._v(" "),t.displaySearch?t._e():s("player")],1)},staticRenderFns:[]};var N=s("VU/8")(E,T,!1,function(t){s("069s")},"data-v-678aa5f8",null).exports;i.a.use(o.a);var D=new o.a({routes:[{path:"/",name:"Welcome",component:v},{path:"/users/:userId/home",name:"Home",component:N}]}),M=s("NYxO"),V=s("mtWM"),B=s.n(V),O=!window.location.host.includes("localhost")?"//brk-mytunes.herokuapp.com/":"//localhost:3000/",H=B.a.create({baseURL:O+"api/",timeout:3e3,withCredentials:!0}),L=B.a.create({baseURL:O+"auth/",timeout:3e3,withCredentials:!0});i.a.use(M.a);var W=new M.a.Store({state:{iTunesResults:[],user:{},authError:{error:!1,msg:""},userPlaylists:[],activePlaylist:{},activePlaylistSongIDs:[],activePlaylistSongs:[],activeSong:{}},mutations:{setItunesResults:function(t,e){t.iTunesResults=e},setUser:function(t,e){t.user=e},setAuthError:function(t,e){t.authError={error:!0,message:e}},setPlaylists:function(t,e){t.userPlaylists=e},setActivePlaylist:function(t,e){t.activePlaylist=e},setActivePlaylistSongIDs:function(t,e){t.activePlaylistSongIDs=e},setActivePlaylistSongs:function(t,e){t.activePlaylistSongs=e},setActiveSong:function(t,e){t.activeSong=e}},actions:{searchItunesByArtist:function(t,e){var s=t.commit,i=(t.dispatch,"//bcw-getter.herokuapp.com/?url="+encodeURIComponent("https://itunes.apple.com/search?term="+e));B.a.get(i).then(function(t){s("setItunesResults",t.data.results)}).catch(function(t){console.log(t)})},authenticate:function(t){var e=t.commit;t.dispatch;L.get("authenticate").then(function(t){var s=t.data;console.log("sessionUser:",s),e("setUser",s)}).catch(function(t){console.error(t)})},signInUser:function(t,e){var s=t.commit;t.dispatch;L.post("login",e).then(function(t){var e=t.data;console.log("newUser:",e),s("setUser",e),D.push({name:"Home",params:{userId:e._id}})}).catch(function(t){console.log(t),s("setAuthError","Log-in failed: Invalid username or password")})},registerUser:function(t,e){var s=t.commit;t.dispatch;L.post("register",e).then(function(t){var e=t.data;console.log("newUser:",e),s("setUser",e),D.push({name:"Home",params:{userId:e._id}})}).catch(function(t){console.log(t)})},logoutUser:function(t){var e=t.commit;t.dispatch;L.delete("logout").then(function(){console.log("User logged out"),e("setUser",{}),e("setPlaylists",[]),e("setActivePlaylist",{}),e("setActivePlaylistSongIDs",[]),e("setActivePlaylistSongs",[]),e("setActiveSong",{}),e("setItunesResults",[]),D.push({name:"Welcome"})}).catch(function(t){console.log(t)})},verifyUserAuth:function(t,e){t.commit;var s=t.dispatch;L.get("authenticate").then(function(t){t.data&&t.data._id===e||s("logoutUser")}).catch(function(t){console.log(t),s("logoutUser")})},getUserPlaylists:function(t){var e=t.commit,s=t.dispatch;H.get("playlists").then(function(t){var i=t.data;console.log("playlists:",i),i.length&&(i=i.sort(function(t,e){return e.createdAt-t.createdAt}),e("setPlaylists",i),s("getPlaylist",i[0]._id))}).catch(function(t){console.log(t)})},updateUserPlaylists:function(t){var e=t.commit;t.dispatch;H.get("playlists").then(function(t){var s=t.data;console.log("updated playlists:",s),s.length&&(s=s.sort(function(t,e){return e.createdAt-t.createdAt}),e("setPlaylists",s))}).catch(function(t){console.log(t)})},getPlaylist:function(t,e){var s=t.commit,i=t.dispatch;H.get("playlists/"+e).then(function(t){var e=t.data;console.log("playlist:",e),s("setActivePlaylist",e);var a=e.songIDs;s("setActivePlaylistSongIDs",a),i("getPlaylistSongs",e._id)}).catch(function(t){console.log(t)})},getPlaylistSongs:function(t,e){var s=t.commit,i=t.dispatch;H.get("playlists/"+e+"/songs").then(function(t){var e=t.data;console.log("songs:",e),s("setActivePlaylistSongs",e),i("getSong",e[0]._id)}).catch(function(t){console.log(t)})},getSong:function(t,e){var s=t.commit;t.dispatch;H.get("songs/"+e).then(function(t){var e=t.data;console.log("song:",e),s("setActiveSong",e)}).catch(function(t){console.log(t)})},updatePlaylistTitleAndImg:function(t,e){var s=t.commit,i=t.dispatch,a=e._id,n={title:e.title,imgUrl:e.imgUrl};H.put("playlists/"+a,n).then(function(t){var e=t.data.data;console.log("updated playlist:",e),s("setActivePlaylist",e),i("updateUserPlaylists")})},updatePlaylistSongIDs:function(t,e){var s=t.commit,i=t.dispatch,a=e._id,n={songIDs:e.songIDs};H.put("playlists/"+a,n).then(function(t){var e=t.data.data;console.log("updated playlist:",e),s("setActivePlaylist",e),i("getPlaylist",a)})},addSongToPlaylist:function(t,e){t.commit;var s=t.dispatch;if(""===e.playlistId){var i={title:"Untitled Playlist",desc:" ",userId:e.userId,songIDs:[]};H.post("playlists",i).then(function(t){var a=t.data.data;console.log("new playlist:",a),i=a,e.playlistId=a._id,e.playlistTitle=a.title,H.post("songs",e).then(function(t){var e=t.data.data;console.log("new song:",e),s("getUserPlaylists")})}).catch(function(t){console.log(t)})}else H.post("songs",e).then(function(t){var e=t.data.data;console.log("new song:",e),s("getUserPlaylists")}).catch(function(t){console.log(t)})},deleteSong:function(t,e){t.commit;var s=t.dispatch;H.delete("songs/"+e._id).then(function(t){s("getPlaylist",e.playlistId)}).catch(function(t){console.log(t)})},setActiveSong:function(t,e){var s=t.commit;t.dispatch;s("setActiveSong",e)}}});i.a.config.productionTip=!1,new i.a({el:"#app",router:D,store:W,components:{App:n},template:"<App/>"})},QlN6:function(t,e){},SVlW:function(t,e){},Uphy:function(t,e){},afZZ:function(t,e){},cIQP:function(t,e){},jeOV:function(t,e){},x73b:function(t,e){},yOvY:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6d30632d3d530d93ff1b.js.map