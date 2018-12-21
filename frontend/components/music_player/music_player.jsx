import React from 'react';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.audio = document.getElementById('audio');

    this.togglePlay = this.togglePlay.bind(this);
    this.handleSound = this.handleSound.bind(this);
  }

  // FIX ME - need to handle change to value
  handleChange() {
    return e => e.target.value
  }

  togglePlay() {
    if (this.props.currentSong) {
      // audio.currentTime = 0;
      
      // this.props.isPlaying ? audio.play() : audio.pause();
      this.props.isPlaying ? audio.pause() : audio.play();
      this.props.toggleSong();
    }
  }

  handleSound() {
    audio.muted = (this.props.isPlaying && (audio.muted === false)) ? true : false;
  }

  handleVolume() {
    const volumeSlider = document.getElementById("volume-slider");
    volumeSlider.addEventListener("mousemove", () => { audio.volume = volumeSlider.value / 100; });
  }
  


  testtest(e) {
    var value = rangeInput.value;
    if (value > 0 && value < 5) {
      alert("First");
    } else {
      alert("Second");
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

          <div className="right-container">
            <div className="volume-slider">
              <i className="fas fa-volume-up" onClick={this.handleSound}></i>
              
              <input id="volume-slider" type="range" min="0" max="100" value="0" step="1" className="slider" onChange={this.handleVolumeRange}/>

            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default MusicPlayer;