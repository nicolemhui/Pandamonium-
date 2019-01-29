import React from 'react';
import SongIndexItemContainer from '../song/song_index_item_container';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queue: this.props.albumSongs,
      albumArtists: this.props.albumArtists,
    };

    this.getSongQueue = this.getSongQueue.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentWillReceiveProps(newProps) {
    // debugger;

    console.log("new props", newProps);

    this.setState({ albumArtists: newProps.albumArtists });
  }

  componentDidMount() {
    let albumId = this.props.match.params.albumId;
    this.props.fetchAlbum(albumId);
  }

    // this.props.fetchAlbum(albumId).then(() => this.setInitialState());
  // }

  // setInitialState() {
  //   this.setState({ albumArtists: this.props.albumArtists });
  // }

    

  getSongQueue(songId) {
    let { albumSongs } = this.props;
    let songIdx = 0;

    for (let i = 0; i < albumSongs.length; i++) {
      if (albumSongs[i].id === songId) {
        songIdx = i;
      }
    }

    const songQueue = albumSongs.slice(songIdx).concat(albumSongs.slice(0, songIdx));
    return songQueue;
  }

  handlePlay() {
    this.props.updateQueue(this.props.albumSongs);

    // let currSong = this.props.albumsSongs[0];
    this.props.setCurrentSong(this.props.albumSongs[0]);
  }

  render() {
    let { album, albumSongs } = this.props;
    let { albumArtists } = this.state;

    
    
    if (!album || !albumArtists || !albumSongs) return null;
    
    albumSongs = albumSongs.map(song => {
      return (
        <SongIndexItemContainer
          key={song.id}
          song={song} 
          getSongQueue={this.getSongQueue(song.id)} 
        />
      );
    });

    
    //FIX ME -- url path has albums/.....
    albumArtists = albumArtists.map(artist => {

      console.log("album artists", albumArtists);
      console.log("artist", artist);
      
      return (
        <Link to={`artists/${artist.id}`} 
        // <Link to={`collection/artists/${artist.id}`} 
        key={artist.id}
        className="artist-link">{artist.name}</Link>
        );
      });


    return (
      <div className="playlist-main-container">
  
        <div className="playlist-content-container">
          <div className="playlist-song-container">
            <ul className="song-list">
              {albumSongs}
            </ul>
          </div>

          <div className="playlist-info">
            {/* <button
              onClick={this.handleQueue}>
              PLAY
            </button> */}

            {/*  FIX ME -- want to add songs into queue and play song!  */}
            <div className="playlist-cover"><img src={album.coverPhotoUrl}></img></div>

            <div className="playlist-info-text">
              <h3>{album.title}</h3>

              <h5>{albumArtists}</h5>
            </div>
            {/* FIX ME */}
            <button
              className="delete-playlist-btn"
              onClick={this.handlePlay}>
              PLAY 
            </button>
          </div>

        </div>
      </div>
    )
  }
}

export default AlbumShow;