import ArtistIndex from './artist_index';
import { connect } from 'react-redux';
import { fetchArtists, fetchSearchedArtists, fetchSavedArtists } from '../../actions/artist_actions';

const mapStateToProps = (state) => {
  const artists = state.entities.artists;

  return {
    artists: Object.values(artists),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists()),
  fetchSearchedArtists: (searchString) => dispatch(fetchSearchedArtists(searchString)),
  fetchSavedArtists: () => dispatch(fetchSavedArtists()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndex);

