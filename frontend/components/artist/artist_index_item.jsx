import React from 'react';
import { Link } from 'react-router-dom';

class ArtistIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const artist = this.props.artist;
    if (!artist) return null;
    
    //FIX ME
    return (
      <div className="album-grid-item">
        <div className="album-item-info">
          <div className="album-img"><img src={artist.photoUrl}></img></div>
          <div className="album-play-btn">
            <i className="fas fa-play"></i>
          </div>

          <h1 className="album-title">
            <Link to={`/artists/${artist.id}`} className="artist-name">{artist.name}</Link>
          </h1>
        </div>
      </div>
    );
  }
}

export default ArtistIndexItem;


// return (
//   <div className="artist-item-container">
//     <div className="artist-grid-item">
//       <div className="artist-item-info">
//         <div className="artist-play-btn">
//           <i className="fas fa-play"></i>
//         </div>
//         <img className="artist-img" src={artist.photoUrl} />Picture!
//           </div>
//       <NavLink to={`/artists/${artist.id}`} className="artist-name">{artist.name}</NavLink>
//     </div>
//   </div>