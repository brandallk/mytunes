### MyTunes

##### Search the iTunes Catalog. Create, Play, and Manage Your Own Song Playlists.

Link to the live project (on Heroku): [MyTunes](https://brk-mytunes.herokuapp.com/#/)
(Note: For a quick preview of the app, you can log in as test-user John Doe -- email: fake1@fake.com, password: password. This test-user has a few playlists already.)

##### About the project

Use this app to search by artist for songs in the iTunes catalog. You can play the songs you find, and choose to add selections to your own playlist(s).

Your playlists can be played and managed on your private Home page. You can remove or edit any playlist. You can rearrange the songs by drag-and-drop, remove any song from the playlist, or go back to the search page to add new songs.

You can play a playlist in an auto-play loop. You can skip backward and forward among songs while a playlist is playing.

A few additional features/notes:

* When you visit the 'Search' view and click the 'Add to My Music' button on a song, the modal popup will give you a default playlist of 'New Playlist' to which the song will be added (unless other playlists have already been created, in which they can be selected from the dropdown). This default 'New Playlist' will then appear in the user's 'Home' view (and in the Add-song-to-My-Music form's dropdown) as 'Untitled Playlist'.
* If you go to the 'Home' view and click on the 'Untitled Playlist', you can change its name and/or image by clicking on the pencil icon next to the playlist name.
* If you start playing a song in a playlist, it will auto-play through the playlist and loop back to the beginning.
* Songs in the playlist are reordered by drag-and-drop.

##### How the app was made

The app was built with NodeJS, ExpressJS, MongoDB, and Vue/Vuex.

This app was built by me, [Randy King](https://github.com/brandallk), while a full-stack web developer student at the Boise CodeWorks bootcamp.