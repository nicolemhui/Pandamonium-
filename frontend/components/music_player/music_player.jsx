import React from 'react';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.togglePlay = this.togglePlay.bind(this);
  }

  // FIX ME - need to handle change to value
  handleChange() {
    return e => e.target.value
  }

  togglePlay() {
    if (this.props.currentSong) {
      const audio = document.getElementById('audio')
      audio.currentTime = 0;
      
      this.props.isPlaying ? audio.play() : audio.pause();
      // this.props.isPlaying ? audio.pause() : audio.play();
    }
  }

  render() {
    let { currentSong } = this.props;

    let playPauseIcon;
    if (this.props.isPlaying === false) { 
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
              <audio id="audio" src={currentSong.audio_url}></audio>
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