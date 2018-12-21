import React from 'react';
import VolumeContainer from './volume_container';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    // this.audio = document.getElementById('audio');

    this.togglePlay = this.togglePlay.bind(this);
  }

  // FIX ME - need to handle change to value
  handleChange() {
    return e => e.target.value
  }

  togglePlay() {
    if (this.props.currentSong) {
      this.props.isPlaying ? audio.pause() : audio.play();
      this.props.toggleSong();
    }
  }

  render() {
    let { currentSong } = this.props;

    let playPauseIcon;
    if (this.props.isPlaying === true) { 
      playPauseIcon = <i className="far fa-pause-circle" onClick={this.togglePlay}></i>
    } else {
      playPauseIcon = <i className="fa fa-play-circle" onClick={this.togglePlay}></i>
    }
    
    return (
      <div className="music-player-container">
        <footer className="music-player">
          <div className="left-container">

          </div>
          <div className="middle-container">

            <div className="controls-player">
              <i className="fa fa-random"></i>
              <i className="fa fa-step-backward"></i>
              {playPauseIcon} 
              <i className="fa fa-step-forward"></i>
              <i className="fa fa-redo-alt"></i>
            </div>

            <div>
              {/* FIX ME */}
              <audio id="audio" src={currentSong.audio_url} autoPlay></audio>
            </div>
          </div>

          <VolumeContainer/>

    
        </footer>
      </div>
    );
  }
}

export default MusicPlayer;