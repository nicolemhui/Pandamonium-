import * as AlbumApiUtil from '../util/album_api_util';
export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_SEARCHED_ALBUMS = "RECEIVE_SEARCHED_ALBUMS";

export const receiveAllAlbums = (payload) => ({
  type: RECEIVE_ALL_ALBUMS,
  payload
});

export const receiveAlbum = (payload) => ({
  type: RECEIVE_ALBUM,
  payload
});

export const receiveSearchedAlbums = (payload) => ({
  type: RECEIVE_SEARCHED_ALBUMS,
  payload
});

export const fetchAlbums = () => dispatch => (
  AlbumApiUtil.fetchAlbums()
    .then(payload => dispatch(receiveAllAlbums(payload)))
);

export const fetchAlbum = (id) => dispatch => (
  AlbumApiUtil.fetchAlbum(id)
    .then(payload => dispatch(receiveAlbum(payload)))
);

export const fetchSearchedAlbums = (searchString) => dispatch => (
  AlbumApiUtil.fetchSearchedAlbums(searchString)
    .then(payload => dispatch(receiveSearchedAlbums(payload)))
);