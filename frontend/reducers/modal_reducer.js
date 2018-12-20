import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = { modalType: null, songId: null }, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return { modalType: action.modal,
              songId: action.songId };
    case CLOSE_MODAL:
      return { modalType: null, songId: null };
    default:
      return state;
  }
}