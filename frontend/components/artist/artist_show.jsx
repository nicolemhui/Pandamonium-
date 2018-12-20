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


    artistSongs = artistSongs.map(song => {
      return (
        <SongIndexItem
          key={song.id}
          song={song}
        />
      );
    });

    artistAlbums = artistAlbums.map(album => {
      return (
        <AlbumIndexItem key={album.id} album={album} />
        );
      });

    return (
      <div className="artist-main-container">
        <img src={artist.photoUrl}></img>
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
            <ul className="song-list">
              {artistSongs}
            </ul>
          </div>
          <br/>
          <div className="artist-album-container">
            <h2>Albums</h2>
            <div className="album-grid">
              {artistAlbums}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ArtistShow;