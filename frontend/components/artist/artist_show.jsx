import React from 'react';
import SongIndexItemContainer from '../song/song_index_item_container';
import AlbumIndexItem from '../album/album_index_item';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queue: this.props.artistSongs,
      artistAlbums: this.props.artistAlbums,
      artistSongs: this.props.artistSongs,
    };

    this.getSongQueue = this.getSongQueue.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ 
      artistAlbums: newProps.artistAlbums,
      artistSongs: newProps.artistSongs,
      queue: newProps.artistSongs
    });
  }

  componentDidMount() {
    let artistId = this.props.match.params.artistId;
    this.props.fetchArtist(artistId);
  }

  getSongQueue(songId) {
    let { artistSongs } = this.props;
    let songIdx = 0;

    for (let i = 0; i < artistSongs.length; i++) {
      if (artistSongs[i].id === songId) {
        songIdx = i;
      }
    }

    const songQueue = artistSongs.slice(songIdx).concat(artistSongs.slice(0, songIdx));
    return songQueue;
  }

  handlePlay() {
    let { queue } = this.state;
    this.props.updateQueue(queue);
    this.props.setCurrentSong(queue[0]);
  }
  
  render() {
    let { artist } = this.props;
    let { artistAlbums, artistSongs } = this.state;
    if (!artist || !artistAlbums || !artistSongs) return null;

    if ((artistSongs.length !== 0) && (artistSongs[0] !== undefined)) {
      artistSongs = artistSongs.map((song, idx) => {
        return (
          <SongIndexItemContainer
            key={song.id}
            song={song}
            getSongQueue={this.getSongQueue(song.id)}
            type="artist_show"
          />
        );
      });
    }

    if ((artistAlbums.length !== 0) && (artistAlbums[0] !== undefined)) {
      artistAlbums = artistAlbums.map(album => {
        return (
          <AlbumIndexItem key={album.id} album={album} />
        );
      });
    }
    
    return (
      <div className="artist-main-container">
       <div><img src={artist.photoUrl} className="artist-cover-photo"></img></div> 
        <header className="artist-cover">
          <div className="artist-info">
            <h1>{artist.name}</h1>

            <button
              className="play-artist-songs-btn"
              onClick={this.handlePlay}>
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
              <ul className="index-item-row">
              {artistAlbums}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ArtistShow;