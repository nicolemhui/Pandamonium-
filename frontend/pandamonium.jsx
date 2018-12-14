import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import { receiveAllSongs, receiveSong, fetchSong, fetchSongs } from './util/song_api_util';
import { receiveAllArtists, receiveArtist, fetchArtist, fetchArtists } from './util/artist_api_util';
import { receiveAllAlbums, receiveAlbum, fetchAlbum, fetchAlbums } from './util/album_api_util';

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
  
  ReactDOM.render(<Root store={store}/>, root);
});


