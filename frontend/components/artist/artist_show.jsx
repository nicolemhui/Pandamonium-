import React from 'react';
import SongIndexItem from '../song/song_index_item';
import AlbumIndexItem from '../album/album_index_item';
import { Link } from 'react-router-dom';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let artistId = this.props.match.params.artistId;
    this.props.fetchArtist(artistId);
  }

  render() {
    let { artist, artistAlbums, artistSongs } = this.props;
    if (!artist || !artistAlbums || !artistSongs) return null;

    console.warn(artistSongs);

    artistSongs = artistSongs.map(song => {
      // if (song === undefined) {
      //   debugger 
      // }
      // if (song) {
        return (
          <SongIndexItem
          key={song.id}
          song={song}
          />
          );
      // } else {
      //   return null;
      // }
    });

    artistAlbums = artistAlbums.map(album => {
      return (
        <AlbumIndexItem key={album.id} album={album} />
        );
      });

    return (
      <div className="artist-main-container">
       <div><img src={artist.photoUrl} className="artist-cover-photo"></img></div> 
        <header className="artist-cover">
          <div className="artist-info">
            <h1>{artist.name}</h1>

            <button
              className="play-artist-songs-btn">
              PLAY
            </button>
          </div>
        </header>

        <div className="artist-content-container">
          <div className="artist-song-container">
            <h2>Songs</h2>
            <div className="song-item-container">
              <ul className="song-list">
                {artistSongs}
              </ul>
            </div>
          </div>
          <br/>
          <div className="artist-album-container">
            <h2>Albums</h2>
            <div className="album-item-container">
              <div className="album-grid">
              {artistAlbums}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ArtistShow;