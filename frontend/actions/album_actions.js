import * as AlbumApiUtil from '../util/album_api_util';
export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

export const receiveAllAlbums = (albums) => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

export const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album
});

export const fetchAlbums = () => dispatch => (
  AlbumApiUtil.fetchAlbums()
    .then(albums => dispatch(receiveAllAlbums(albums)))
);

export const fetchAlbum = (id) => dispatch => (
  AlbumApiUtil.fetchAlbum(id)
    .then(album => dispatch(receiveAlbum(album)))
);