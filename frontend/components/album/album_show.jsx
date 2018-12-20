import React from 'react';
import SongIndexItem from '../song/song_index_item';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let albumId = this.props.match.params.albumId;
    this.props.fetchAlbum(albumId);
  }

  render() {
    let { album, albumArtists, albumSongs } = this.props;

    // console.log(album, albumArtists, albumSongs);

    if (!album || !albumArtists || !albumSongs) return null;

    

    albumSongs = albumSongs.map(song => {
      return (
        <SongIndexItem
          key={song.id}
          song={song}
        />
      );
    });

    albumArtists = albumArtists.map(artist => {
      return (
        <Link to={`artists/${artist.id}`} 
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

            <div className="playlist-cover"><img src={album.coverPhotoUrl}></img></div>

            <div className="playlist-info-text">
              <h3>{album.title}</h3>

              <h5>{albumArtists}</h5>
            </div>
            {/* FIX ME */}
            <button
              className="delete-playlist-btn">
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