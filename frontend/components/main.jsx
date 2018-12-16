import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';
import BrowseLinks from './header_links/browse_links';
import CollectionLinks from './header_links/collection_links';
import SideNavContainer from './side_nav/side_nav_container';
import FeaturedContainer from './browse/featured_container';

const Main = () => (
  <div className="main-content">
      <ProtectedRoute path="/" component={SideNavContainer}/>
      <ProtectedRoute path="/browse" component={BrowseLinks}/>
      <ProtectedRoute path="/collection" component={CollectionLinks}/>
      <ProtectedRoute path="/browse/featured" component={FeaturedContainer}/>

    <Switch>
    </Switch>


  </div>
);

export default Main;

{/* <ProtectedRoute path="/search" component={Search}/> */}


//included main component here; need to figure out routes!

