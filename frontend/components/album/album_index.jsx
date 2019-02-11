import React from 'react';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: props.searchString
    };
  }

  componentDidMount() {
    let { searchString } = this.props;
    
    if (this.props.searchString != undefined) {
      this.props.fetchSearchedAlbums(searchString);
    } else {
      this.props.fetchAlbums();
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.searchString != newProps.searchString) {
      // this.setState({ searchString: newProps.searchString });
      // console.log("search string: ", this.props.searchString);
      this.props.fetchSearchedAlbums(newProps.searchString)
        // .then( (res) => console.log("new response receive props", res) );
    }
  }

  render() {
    if (!this.props.albums) return null;
    
    const albums = this.props.albums.map(album => {
      return (
        <AlbumIndexItem key={album.id} album={album}/>
      )
    });

    return (
      <div className="album-item-container">
        <ul className="index-item-row">
          {albums}
        </ul>
      </div>
    )
  }
}

export default AlbumIndex;