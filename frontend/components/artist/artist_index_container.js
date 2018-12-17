import ArtistIndex from './artist_index';
import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artist_actions';

const mapStateToProps = (state) => {
  const artists = state.entities.artists;

  return {
    artists: Object.values(artists),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndex);

