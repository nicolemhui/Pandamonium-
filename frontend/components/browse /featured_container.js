import React from 'react';
import Featured from './featured';
import { connect } from 'redux';

const mapStateToProps = (state) => ({
  //return playlists 
  currentUser: state.entities.users[state.session.id]
});

export default connect(mapStateToProps, null)(Featured);