import React from 'react';

class Volume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volumeClass: 'fas fa-volume-up',
      volume: 0.5,
    };

    this.audio = document.getElementById('audio');

    this.handleSound = this.handleSound.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }
  
 handleSound() {
    if (this.props.isPlaying && (audio.muted === false)) {
      audio.muted = true;
      this.setState({ volumeClass: "fas fa-volume-mute" });
    } else {
      audio.muted = false;
      this.setState({ volumeClass: "fas fa-volume-up" });
    }
  }

  handleVolume() {
    return (e) => {
      this.setState({
        volume: e.target.value / 100,
      });

      audio.volume = this.state.volume;
    };
  }

  render() {
    let { volume } = this.state;

    return (
      <div className="right-container">
        <div className="volume-slider">
          <i className={this.state.volumeClass} onClick={this.handleSound}></i>
          <input id="slider" 
            className="slider" 
            type="range" 
            min={0}
            max={100} 
            value={volume * 100} 
            onChange={this.handleVolume()} 
          />
        </div>
      </div>
    )
  }
}

export default Volume;