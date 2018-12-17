import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';
// import CollectionLinks from './header_links/collection_links';
import SideNavContainer from './side_nav/side_nav_container';
import FeaturedContainer from './browse/featured_container';
import CollectionContainer from './collection/collection_container';

class Main extends React.Component {

  render () {
    return (

      <div className="main-content">

        <ProtectedRoute path="/" component={SideNavContainer}/>
        {/* <ProtectedRoute path="/collection" component={CollectionLinks}/> */}
        
        <Switch>
          <ProtectedRoute path="/browse" component={FeaturedContainer}/>
          <ProtectedRoute path="/collection" component={CollectionContainer}/>
        </Switch>


      </div>
    )
  }
}

export default Main;

{/* <ProtectedRoute path="/search" component={Search}/> */}


//included main component here; need to figure out routes!

