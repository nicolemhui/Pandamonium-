import React from 'react';
import SearchResults from './search_results';
import { BeatLoader } from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
  display: block;
  margin: 0 auto;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryString: "",
      loading: true
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  handleChange(e) {
    this.setState({ queryString: e.target.value, loading: true });
    window.setTimeout(() => this.setState({ loading: false }), 900);
  }

  render() {
    let results;

    if (this.state.queryString.length === 0) {
      results =
        <div className="no-search-content">
          <h1>Search Pandamonium</h1>
          <h5>Find your favorite songs, artists, albums, podcasts and playlists.</h5>
        </div>
    } else {
      results =
        <div className="search-content">
          <SearchResults searchString={this.state.queryString} />
        </div>
    }

    if (this.state.loading) {
      return (
        <div className="search-container">
          <input className="search-bar"
            type="text"
            value={this.state.queryString}
            placeholder="Start typing..."
            onChange={this.handleChange}>
          </input>
          
          <div className='loading-spinner'>
            <BeatLoader
              css={override}
              sizeUnit={"px"}
              size={20}
              color={'#1DB954'}
              loading={this.state.loading}
              />
          </div>
        </div>
      )
    };

    return (
      <div className="search-container">
        <input className="search-bar"
            type="text"
            value={this.state.queryString}
            placeholder="Start typing..."
            onChange={this.handleChange}>
          </input>

          {results}
      </div>   
    )
  }
}

export default Search;