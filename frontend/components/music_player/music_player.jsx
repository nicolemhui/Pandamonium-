import React from 'react';
import VolumeContainer from './volume_container';
import SongDisplayContainer from './song_display_container';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    // this.audio = document.getElementById('audio');

    this.togglePlay = this.togglePlay.bind(this);
    this.playNextSong = this.playNextSong.bind(this);
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

  playNextSong(song) {

  }

  render() {
    let { currentSong, isPlaying } = this.props;

    let playPauseIcon;
    if (isPlaying === true) { 
      playPauseIcon = <i className="far fa-pause-circle" onClick={this.togglePlay}></i>
    } else {
      playPauseIcon = <i className="fa fa-play-circle" onClick={this.togglePlay}></i>
    }
    
    let album;

    let artists = currentSong.artists;
    // debugger;
    

    return (
      <div className="music-player-container">
        <footer className="music-player">
          
          <SongDisplayContainer />
          {/* <div className="left-container"> */}

            {/* <img className="song-info-img" src={currentSong.album} /> */}

            {/* <div className="song-info-container"> */}
              {/* <Link to={`/albums/${currentSong.album_id}`}><h6 className="song-info-title">{currentSong.title}</h6></Link> */}
              {/* <h6 className="song-info-artist-name">{currentSong.artists}</h6> */}
            {/* </div> */}
          {/* </div> */}
          <div className="middle-container">

            <div className="controls-player">
              <i className="fa fa-random"></i>
              <i className="fa fa-step-backward"></i>
              {playPauseIcon} 
              <i className="fa fa-step-forward"></i>
              {/* <i className="fa fa-step-forward" onClick={this.playNextSong(song)}></i> */}
              {/* <i className="fa fa-redo-alt"></i> */}
              <i className="fas fa-infinity"></i>
            </div>

            <div>
              {/* FIX ME */}
              <audio id="audio" src={currentSong.audio_url} autoPlay></audio>
            </div>
          </div>

          <VolumeContainer />

    
        </footer>
      </div>
    );
  }
}

export default MusicPlayer;

//FIX ME! -- bug with song playing 












// import React from 'react';
// import { NavLink } from 'react-router-dom';

// class SongDetailView extends React.Component {


//   render() {
//     const { song, artists, albums } = this.props;

//     // console.log(song, albums, artists);

//     if (!artists || !song || !albums) return null;

//     //FIX ME!
//     // how to get artist id??
//     const songArtists = artists.map(artist => {

//       return (
//         <NavLink to={`/collection/artists/${artist.id}`}
//           className="artist-text"
//           key={artist.id}>
//           {artist.name}
//         </NavLink>
//       )
//     }
//     );

//     const songAlbums = albums.map(album =>
//       <NavLink to={`/collection/albums/${album.id}`}
//         className="album-text"
//         key={album.id}>
//         {album.title}
//       </NavLink>
//     );

//     let songInfoText;

//     if (songAlbums.length === 0) {
//       songInfoText = <div className="song-artists-links">
//         {songArtists}
//       </div>
//     } else {
//       songInfoText = <div>
//         {songArtists}
//         •
//         {songAlbums}
//       </div>;
//     }

//     return (
//       <div className="song-item-info">

//         <h3 className="song-title">{song.title}</h3>

//         <div className="song-info">
//           <div className="song-other-info">
//             {songInfoText}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default SongDetailView;