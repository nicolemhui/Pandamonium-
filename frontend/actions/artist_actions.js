import * as ArtistApiUtil from '../util/artist_api_util';
export const RECEIVE_ALL_ARTISTS = "RECEIVE_ALL_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

export const receiveAllArtists = (payload) => ({
  type: RECEIVE_ALL_ARTISTS,
  payload
});

export const receiveArtist = (payload) => ({
  type: RECEIVE_ARTIST,
  payload
});

export const fetchArtists = () => dispatch => (
  ArtistApiUtil.fetchArtists()
    .then(payload => dispatch(receiveAllArtists(payload)))
);

export const fetchArtist = (id) => dispatch => (
  ArtistApiUtil.fetchArtist(id)
    .then(payload => dispatch(receiveArtist(payload)))
);

export const fetchSearchedArtists = (searchString) => dispatch => (
  ArtistApiUtil.fetchSearchedArtists(searchString)
    .then(payload => dispatch(receiveAllArtists(payload)))
);