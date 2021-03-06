import Browse from './browse';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

export default connect(mapStateToProps, null)(Browse);