import React from 'react';
// import { Link } from 'react-router-dom';

class SongDetailView extends React.Component {

  render() {

    const { album } = this.props;

    const artists = this.props.artists.map(artist =>
      <li key={artist.id}><a href="#">{artist.name}</a></li>);


    return (
      <div className="album-item-info">
        <h1 className="album-title">{album.title}</h1>
        <h5>{album.year}</h5>
        
        {artists}

        <div className="album-info">
          <div className="album-other-info">
            
          </div>
        </div>
      </div>
    );
  }
}

export default SongDetailView;