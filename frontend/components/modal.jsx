import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import PlaylistFormContainer from './playlist/playlist_form_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { modal, closeModal } = this.props;

    if (!modal) {
      return null;
    }


    let component;
    switch (modal) {
      case 'create_new_playlist':
        component = <PlaylistFormContainer />;
        break;
      // FIX ME!  --  add modal for adding songs to playlists
      // case ''
        // component = 
      default:
        return null;
    }


    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);