import React from 'react';
import VolumeContainer from './volume_container';
import SongDisplayContainer from './song_display_container';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };

    this.audio = document.getElementById('audio');

    this.togglePlay = this.togglePlay.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.repeat = this.repeat.bind(this);
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

  next() {
    this.props.playNextSong();
  }
  
  previous() {
    this.props.playPreviousSong();
  }

  shuffle() {
    let songQueue = this.props.songQueue;
    
    for (let i = songQueue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [songQueue[i], songQueue[j]] = [songQueue[j], songQueue[i]];
    }

    this.props.updateQueue(songQueue);
  
    return songQueue;
  }

  repeat() {
    if (this.props.currentSong) {
      this.props.isPlaying ? audio.loop = true : audio.loop = false; 
    }

    this.props.loopSong();
  }

  onProgressSliderChange() {
    // console.log(this);

    return event => {

      const newProgress =
        (event.target.value * this.audio.duration) / 100;
      // this.player.currentTime = newProgress;
      this.setState({
        progress: newProgress
      });
    };
  }

  render() {
    let { currentSong, isPlaying } = this.props;

    let playPauseIcon;
    if (isPlaying === true) { 
      playPauseIcon = <i className="far fa-pause-circle" onClick={this.togglePlay}></i>
    } else {
      playPauseIcon = <i className="fa fa-play-circle" onClick={this.togglePlay}></i>
    }
    
    let progressBar = 
      <input
        id="progress-bar"
        type="range"
        min={0}
        max={100}
        value={0}
        // currentSong
        // ? ((this.state.progress / this.audio.duration) * 100)
        // : 0 }
        onChange={this.onProgressSliderChange()}
      // onMouseDown={this.onSeekBegin()}
      // onMouseUp={this.onSeekEnd()}
      />

    return (
      <div className="music-player-container">
        <footer className="music-player">
          
          <SongDisplayContainer />

          <div className="middle-container">

            <div className="controls-player">
              <div className="control-icons">
                <i className="fa fa-random" onClick={this.shuffle}></i>
                <i className="fa fa-step-backward" onClick={this.previous}></i>
                {playPauseIcon} 
                <i className="fa fa-step-forward" onClick={this.next}></i>
                <i className="fas fa-infinity" onClick={this.repeat}></i>
              </div>
           
              {/* <div className="song-progress">
                <div id="progress-bar"></div>
              </div> */}
            </div>


            <div>
              <audio id="audio" src={currentSong.audioUrl} autoPlay></audio>
            </div>
          </div>

          <VolumeContainer />
    
        </footer>
      </div>
    );
  }
}

export default MusicPlayer;
