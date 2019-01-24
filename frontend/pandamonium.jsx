import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import { receiveAllSongs, receiveSong, fetchSong, fetchSongs } from './actions/song_actions';
import { receiveAllArtists, receiveArtist, fetchArtist, fetchArtists } from './actions/artist_actions';
import { receiveAllAlbums, receiveAlbum, fetchAlbum, fetchAlbums } from './actions/album_actions';
import { fetchPlaylists, fetchPlaylist, createPlaylist, deletePlaylist } from './actions/playlist_actions';
import { createPlaylistSong, removePlaylistSong } from './actions/playlist_song_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  
//FIX ME
  window.store = store;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllSongs = receiveAllSongs;
  window.receiveSong = receiveSong;
  window.receiveAllArtists = receiveAllArtists;
  window.receiveArtist = receiveArtist;
  window.receiveAllAlbums = receiveAllAlbums;
  window.receiveAlbum = receiveAlbum;
  window.fetchSongs = fetchSongs;
  window.fetchSong = fetchSong;
  window.fetchArtists = fetchArtists;
  window.fetchArtist = fetchArtist;
  window.fetchAlbums = fetchAlbums;
  window.fetchAlbum = fetchAlbum;
  window.fetchPlaylists = fetchPlaylists;
  window.fetchPlaylist = fetchPlaylist;
  window.deletePlaylist = deletePlaylist;
  window.createPlaylist = createPlaylist;
  window.createPlaylistSong = createPlaylistSong;
  window.removePlaylistSong = removePlaylistSong;
  
  ReactDOM.render(<Root store={store}/>, root);
});


