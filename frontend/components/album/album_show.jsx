import React from 'react';
import SongIndexItemContainer from '../song/song_index_item_container';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleQueue = this.handleQueue.bind(this);
  }

  componentDidMount() {
    let albumId = this.props.match.params.albumId;
    this.props.fetchAlbum(albumId);
  }

  handleQueue() {
    this.props.updateQueue(this.props.albumSongs);
    // this.props.setCurrentSong(this.props.albumSongs[0]);
  }

  render() {
    let { album, albumArtists, albumSongs } = this.props;
    if (!album || !albumArtists || !albumSongs) return null;

    albumSongs = albumSongs.map(song => {
      return (
        <SongIndexItemContainer
          key={song.id}
          song={song} />
      );
    });


    //FIX ME -- url path has albums/.....
    albumArtists = albumArtists.map(artist => {
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
              onClick={this.handleQueue}>
              PLAY 
            </button>
            <button
              className="delete-playlist-btn">
              DELETE 
            </button>
          </div>

        </div>
      </div>
    )
  }
}

export default AlbumShow;