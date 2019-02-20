# README

# Pandamonium

---

Pandamonium is music website modeled after Spotify, where users can create their own playlists and listen to music by artists, albums and songs. This application is built on Ruby on Rails, PostgresSQL, React.js, Redux.

This application was built within 10 days with room for more features.

[Pandamonium Live!](https://pandamoniummusic.herokuapp.com/)

![Pandamonium Splash Page](/app/assets/images/Pandamonium_screenshot.png)

## Technologies 
Pandamonium is built using Ruby on Rails and a PostgreSQL database backend, integrated with Amazon Web Services S3 for image and audio hosting. The front-end is built using React.js/Redux for a more interactive user experience and Webpack to bundle and serve various scripts.

## Features
* Playlist CRUD - users can create, read, update, and delete playlists 
* Users can browse albums, artists, playlists, songs
* Users can play music continuously while navigating throughout the website
* Search function allows users to search for artists, albums, songs, and playlists

### Playlist CRUD
Users can create new playlists through a modal which allows the user to enter and save their playlist name. Upon the modal closing, the user will see their new playlist immediately appear on the playlists index page. There is an option to edit and delete the playlists as well. Once playlists have been created, users add/remove songs from them.

![Pandamonium Create Playlist](/app/assets/images/create_playlist.png)

### Continuous Play & Browsing
Users can listen to their favorite songs while browsing through artist pages, albums, playlists, and songs. Songs on each page are queued and can be shuffled, repeated, or skipped to the next song or previous song. The music player component was built using vanilla DOM JavaScript and had it's own slice of state to store the current song details and queue information. 

![Pandamonium Albums](/app/assets/images/album_screenshot.png)

![Pandamonium Songs](/app/assets/images/songs_screenshot.png)

### Search
Users can search for artists, albums, songs, and playlists through the search function. This feature utilizes React's re-rendering functionality and displays search results dynamically as the user types. Results are continuously updated according to the search string.

![Pandamonium Search](/app/assets/images/search.png)
