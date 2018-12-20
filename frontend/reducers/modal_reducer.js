import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { ADD_PLAYLIST_SONG } from '../actions/playlist_song_actions';

export default function modalReducer(state = { modalType: null, songId: null }, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return { modalType: action.modal,
              songId: action.songId };
    case CLOSE_MODAL:
    case ADD_PLAYLIST_SONG:
      return { modalType: null, songId: null };
    default:
      return state;
  }
}