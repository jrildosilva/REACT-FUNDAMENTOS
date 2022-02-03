import React from 'react';
import {Route} from 'react-router-dom';

import Home from './pages/Home';
import Posts from './pages/posts';
import NotFound from './pages/NotFound';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Post from './pages/Post';

export default function Routes() {
    return(
      <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/posts" component={Posts} />
       <Route path="/posts/:id" component={Post} />
       <Route component={NotFound} />
      </Switch>
    );
}
  



