import React from 'react';
import SearchResults from './search_results';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryString: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ queryString: e.target.value });
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