import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import musicPlayerReducer from './music_player_reducer';

export default combineReducers({
  modal: modalReducer,
  musicPlayer: musicPlayerReducer
});