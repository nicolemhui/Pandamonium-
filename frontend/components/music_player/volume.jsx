import React from 'react';

class Volume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volumeClass: 'fas fa-volume-up',
    }

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
    const volumeSlider = document.getElementById("volume-slider");
    volumeSlider.addEventListener("mousemove", () => { audio.volume = volumeSlider.value / 100; });
  }

  render() {

    return (
      <div className="right-container">
        <div className="volume-slider">
          <i className={this.state.volumeClass} onClick={this.handleSound}></i>

          <input id="volume-slider" type="range" min="0" max="100" value="0" step="1" className="slider" onChange={this.handleVolumeRange} />

        </div>
      </div>
    )
  }
}

export default Volume;