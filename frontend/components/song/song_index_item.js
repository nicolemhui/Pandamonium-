import React from 'react';


class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const song = this.props.song ;
    const songAlbum = this.props.albums[0];
    const songArtists = this.props.artists.map(artist => {
      return (
        <li>artist.name</li>
      )
    }) ;

    return (
      <div className="song-item-container">
      <li className="songlist-row">

        <div className="song-item-info">
          
          <div className="song-play-btn">
            <i className="fas fa-music"></i>
          </div>
          <h1 className="song-title">{song.title}</h1>

          <div className="song-info">
            <div className="song-other-info"> 
              <a href="#">{songAlbum}</a>
                •
              <a href="#">{songArtists}</a>                 
              {/* <Link className="song-info-link" to={`/albums/${song.albumId}`}>{song.albumTitle}</Link> */}
            </div>
          </div>
          
        </div>
      </li>
    </div>
    )
  }
}

export default SongIndexItem;