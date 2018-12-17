import React from 'react';
import BrowseLinks from '../header_links/browse_links';
// import { Switch } from 'react-router-dom';
// import { ProtectedRoute } from '../util/auth_route_util.js';

class Featured extends React.Component {
  constructor(props){
    super(props);
  }
  
  // <ProtectedRoute path="/browse" component={BrowseLinks} />
  // {BrowseLinks}
  render() {
    return (

      <div className="featured-main">
        <BrowseLinks></BrowseLinks>
        
        <div className="featured-container">
        </div>
      </div>
    )
  }
}

export default Featured;

//  put different routes in here 
// Add playlist container (which has the playlist index & index items)
