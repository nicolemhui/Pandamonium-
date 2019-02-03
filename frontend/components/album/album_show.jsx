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
    this.setState({ albumArtists: [newProps.artists] });
  }

  componentDidMount() {
    let albumId = this.props.match.params.albumId;
    this.props.fetchAlbum(albumId);
  }

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
    this.props.setCurrentSong(this.props.albumSongs[0]);
  }

  render() {
    let { album, albumSongs } = this.props;
    let { albumArtists } = this.state;
    
    if (!album || !albumArtists || !albumSongs) return null;
    
    albumArtists = albumArtists.map(artist => {
      let key = Object.keys(artist)[0];
      artist = artist[key];
      return (
        <Link to={`/artists/${artist.id}`} 
          key={artist.id * Math.random()}
          className="artist-link">{artist.name}</Link>
        );
      });
      
    albumSongs = albumSongs.map(song => {
      return (
        <SongIndexItemContainer
          key={song.id}
          song={song} 
          type={"album_show"}
          getSongQueue={this.getSongQueue(song.id)} 
          songArtists={albumArtists}
        />
      );
    });

    return (
      <div className="playlist-main-container">
        <div className="playlist-content-container">
          <div className="playlist-info">
            <div className="playlist-cover"><img src={album.coverPhotoUrl}></img></div>

            <div className="playlist-info-text">
              <h3>{album.title}</h3>

              <h5>{albumArtists}</h5>
            </div>
            <button
              className="delete-playlist-btn"
              onClick={this.handlePlay}>
              PLAY 
            </button>
          </div>

          <div className="playlist-song-container">
            <ul className="song-list">
              {albumSongs}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AlbumShow;