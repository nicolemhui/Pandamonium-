import Collection from './collection';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);