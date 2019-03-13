import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import { BeatLoader } from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
  display: block;
  margin: 0 auto;
`;

class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    let { searchString } = this.props;

    if (this.props.searchString != undefined) {
      this.setState({ loading: false });
      this.props.fetchSearchedPlaylists(searchString)
    } else if (this.props.location.pathname == "/collection/playlists") {
      this.props.fetchSavedPlaylists()
        .then(this.timer = () => setTimeout(() => this.setState({ loading: false }), 700));
    } else {
      this.props.fetchPlaylists()
        .then(this.timer = () => setTimeout(() => this.setState({ loading: false }), 700));
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.searchString != newProps.searchString) {
      this.setState({ loading: false });
      this.props.fetchSearchedPlaylists(newProps.searchString)
    }
  }

  componentWillUnmount() {
    if (this.timer) clearTimeout(this.timer);
  }

  render() {
    let { playlists } = this.props;
    if (!playlists) return null;
    
    if (this.state.loading) {
      return (
      <div className='loading-spinner'>
        <BeatLoader
          css={override}
          sizeUnit={"px"}
          size={20}
          color={'#1DB954'}
          loading={this.state.loading}
          />
      </div> 
    )};

    playlists = this.props.playlists.map( (playlist, i) => {
      return (
        <PlaylistIndexItem 
          key={i}
          playlist={playlist}
        />
      )
    });

    return (
      <div className="album-item-container">
        <ul className="index-item-row">
          {playlists}
        </ul>
      </div>
    )
  }
}

export default PlaylistIndex;