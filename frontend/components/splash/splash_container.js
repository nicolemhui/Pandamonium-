import { connect } from 'react-redux';
import { login, signup, logout } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  login: (user) => disptch(login(user)),
  signup: (user) => disptch(signup(user)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);