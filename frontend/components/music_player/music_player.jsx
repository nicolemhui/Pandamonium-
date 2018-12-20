import React from 'react';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  // FIX ME - need to handle change to value
  handleChange() {
    return e => e.target.value
  }

  playSong() {
    if (this.props.currentSong) {
      // this.props.currentSong.songUrl
      const track = document.getElementById('audio')
      track.play();
    }
  }

  render() {
    let { currentSong } = this.props;

    return (
      <div className="music-player-container">
        <footer className="music-player">
          <div className="left-container">

          </div>
          <div className="middle-container">

            <div className="controls-player">
              <i className="fa fa-random"></i>
              <i className="fa fa-step-backward"></i>
              {/* <i className="fa fa-play-circle"></i> */}
              <i className="fa fa-play-circle" onClick={this.playSong}></i>
              <i className="fa fa-step-forward"></i>
              <i className="fa fa-redo-alt"></i>
            </div>

            <div>
              {/* FIX ME */}
              <audio id="audio" ref="" src={currentSong.songUrl}/>
            </div>
          </div>

          <div className="right-container">
            <div className="volume-slider">
              <i className="fas fa-volume-up"></i>
              
              <input type="range" id="volumeRange" min="1" max="100" value="0" className="slider" onChange={this.handleChange()}/>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default MusicPlayer;