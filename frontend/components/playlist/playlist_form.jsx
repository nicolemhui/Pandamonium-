import React from 'react';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const playlist = Object.assign({}, this.state);

    this.props.createPlaylist(playlist);
    this.props.closeModal();
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {

    return (
      <div className="login-signup-form-container">
        <button className="modal-exit" onClick={this.props.closeModal}>X</button>
        
        <h3>Create new playlist</h3>

        <div className="playlist-input-section">

          <form className="playlist-form" onSubmit={this.handleSubmit}>
              <label>
              <h4>Playlist Name</h4>
              <div className="text-input-field">
                  <input type="text"
                    className="playlist-input"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    placeholder="Start typing..."
                  />
              </div>
              </label>
            
            <div className="playlist-form-btns">
              <button type="text" 
                className="cancel-playlist-btn"
                onClick={this.props.closeModal}>CANCEL</button>
              <input type="submit" className="new-playlist-btn" value="CREATE"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PlaylistForm;