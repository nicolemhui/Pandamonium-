// // OLD CODE
// import React from 'react';
// import SongDetailViewContainer from './song_detail_view_container';

// class SongIndexItem extends React.Component {
//   constructor(props) {
//     super(props);

//     this.handleClick = this.handleClick.bind(this);
//     this.handleDelete = this.handleDelete.bind(this);
//   }


//   handleClick(e) {
//     e.preventDefault();
//     this.props.openModal("add_song_to_playlist", this.props.song.id);
//   }

//   // FIX ME !
//   // ONLY IF THIS IS ON PLAYLIST PAGE 
//   handleDelete() {
//     const playlist = this.props.playlist;
//     this.props.deletePlaylistSong(playlist.id, this.props.song.id)
//   }

//   render() {
//     const { song } = this.props;
//     if (!song) return null;

//     // put some logic here to determine if songs is on the playlist page, if so then have PLAY, DELETE buttons 
//     //if songs is on songs page, have ADD and PLAY buttons
//     //if songs is on albums page, have ADD and PLAY buttons

//     // <div> 
//     //   case switch statement  --- reference modal 
//     //   switch(type)
//     // </div>
    
    // return (

    //   <li className="songlist-row">
    //     <div className="left-song-details">
    //       <div className="song-icon-display">
    //         <div className="song-music-btn">
    //           <i className="fas fa-music" />
    //         </div>

    //         <div className="song-play-btn">
    //           <i className="fas fa-play" />
    //         </div>
    //       </div>
          
    //       <SongDetailViewContainer song={song} />
    //     </div>
        
    //     <div className="song-option-btns">
    //       <button className="add-playlist-btn" 
    //       // value="•••"
    //       onClick={this.handleClick}
    //       > ADD </button>

    //       <button className="add-playlist-btn" onClick={() => this.props.setCurrentSong(song)}> PLAY </button>
    //       <button className="add-playlist-btn" onClick={this.handleDelete}> DELETE </button>
    //     </div>
    //   </li>
    // )
//   }
// }

// export default SongIndexItem;




// //NEW EDIT  -- TEST THIS ONE !
import React from 'react';
import SongDetailViewContainer from './song_detail_view_container';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.showOptions = this.showOptions.bind(this);
    this.hideOptions = this.hideOptions.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    this.props.openModal("add_song_to_playlist", this.props.song.id);
  }

  // FIX ME !
  // ONLY IF THIS IS ON PLAYLIST PAGE 
  handleDelete() {
    const playlist = this.props.playlist;
    this.props.deletePlaylistSong(playlist.id, this.props.song.id)
  }
  
  showOptions(e) {
    e.preventDefault();
    this.setState({ menuOpen: true }, () => {
      document.addEventListener('click', this.hideOptions);
    });
  }
  
  hideOptions(e) {
    e.preventDefault();
    this.setState({ menuOpen: false }, () => {
      document.removeEventListener('click', this.hideOptions);
    });
  }

  render() {
    const { song } = this.props;
    if (!song) return null;

    // put some logic here to determine if songs is on the playlist page, if so then have PLAY, DELETE buttons 
    //if songs is on songs page, have ADD and PLAY buttons
    //if songs is on albums page, have ADD and PLAY buttons

    // <div>
    //   case switch statement  --- reference modal
    //   switch(type)
    // </div>
    //type = ""

    let songOptions;
    let addButton = <button className="add-playlist-btn" onClick={this.handleClick}>ADD</button>;
    let deleteButton = <button className="add-playlist-btn" onClick={this.handleDelete}>DELETE</button>
    let playButton = <button className="add-playlist-btn" onClick={() => this.props.setCurrentSong(song)}>PLAY</button>

    //FIX ME
    // switch (this.props.type) {
    //   case 'playlist_show':
    //     songOptions = <div>
    //       {playButton}
    //       {deleteButton}
    //     </div>
    //     break;
    //   case 'album_show':
    //     songOptions = <div>
    //       {playButton}
    //       {addButton}
    //     </div>;
    //     break;
    //   case 'song_index':
    //     songOptions = <div>
    //       {playButton}
    //       {addButton}
    //     </div>
    //     break;
    //   default:
    //     return null;
    // }


    // let dropdownMenu;
    // if (this.state.menuOpen) {
    //   dropdownMenu = 
    //     <div className="drop-down-container">
    //       <div className="song-option-dropdown" onClick={this.showOptions}> ••• </div>
    //       <div className="song-option-dropdown"> 

    //         {/* {songOptions}  */}
    //       <button className="add-playlist-btn" onClick={this.handleClick}>ADD</button>;
    //       <button className="add-playlist-btn" onClick={this.handleDelete}>DELETE</button>
    // l
    //       </div>
    //     </div>
    // } else {
    //   null 
    // };

    

    // let dropdownMenu;
    // if (!menuOpen) {
    //   dropdownMenu = <div className="song-option-dropdown"> ••• </div>
    // } else {
    //   dropdownMenu = <div className="song-option-dropdown"> {songOptions} </div>
    // }


    
    return (

      <li className="songlist-row">

        {/* {dropdownMenu}  */}
        <div className="left-song-details">
          <div className="song-icon-display">
            <div className="song-music-btn">
              <i className="fas fa-music" />
            </div>

            <div className="song-play-btn">
              <i className="fas fa-play" />
            </div>
          </div>

          <SongDetailViewContainer song={song} />
        </div>

        <div className="song-options-container">
          <button className="song-option-btn" onClick={this.showOptions}>
            •••
          </button>

          {
            this.state.menuOpen
              ? (
                <div className="song-options-dropdown">
                  <button className="option" onClick={this.handleClick}>Add to playlist</button>
                  <button className="option" onClick={this.handleDelete}>Delete from playlist</button>
                  <button className="option" onClick={() => this.props.setCurrentSong(song)}>Play song</button>
                </div>
              )
              : (
                null
              )
          }
        </div> 
         
      </li>
    )
  }
}

export default SongIndexItem;



// return (

//   <li className="songlist-row">
//     <div className="left-song-details">
//       <div className="song-icon-display">
//         <div className="song-music-btn">
//           <i className="fas fa-music" />
//         </div>

//         <div className="song-play-btn">
//           <i className="fas fa-play" />
//         </div>
//       </div>

//       <SongDetailViewContainer song={song} />
//     </div>

//     <div className="song-option-btns">
//       {/* <button className="add-playlist-btn"
//             // value="•••"
//             onClick={this.handleClick}
//           > ADD </button> */}

//       {dropdownMenu}

//     </div>
//   </li>