import * as AlbumApiUtil from '../util/album_api_util';
export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

export const receiveAllAlbums = (payload) => ({
  type: RECEIVE_ALL_ALBUMS,
  payload
});

export const receiveAlbum = (payload) => ({
  type: RECEIVE_ALBUM,
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